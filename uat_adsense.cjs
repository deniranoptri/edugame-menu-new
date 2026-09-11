const puppeteer = require('puppeteer');
const http = require('http');
const path = require('path');
const fs = require('fs');

const mimeTypes = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(filePath) && !filePath.includes('.')) filePath = path.join(__dirname, 'dist', 'index.html');
  if (!fs.existsSync(filePath)) { res.writeHead(404); return res.end(); }
  const ext = path.extname(filePath);
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
  res.end(fs.readFileSync(filePath));
});

server.listen(3030, async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const results = {};
  
  try {
    await page.setViewport({ width: 1200, height: 800 });
    await page.goto('http://localhost:3030/');
    await new Promise(r => setTimeout(r, 2000));
    
    // A. Global Script
    const scripts = await page.$$eval('script', scripts => scripts.map(s => s.src));
    const adScripts = scripts.filter(s => s.includes('adsbygoogle.js'));
    results.A = { count: adScripts.length, src: adScripts[0] || null };

    // B. Dashboard Display Ad
    results.B = await page.evaluate(() => {
      const insElements = document.querySelectorAll('ins.adsbygoogle');
      if (insElements.length === 0) return { found: false };
      const ad = insElements[0];
      return {
        found: true,
        slot: ad.getAttribute('data-ad-slot'),
        client: ad.getAttribute('data-ad-client'),
        format: ad.getAttribute('data-ad-format'),
        responsive: ad.getAttribute('data-full-width-responsive'),
        display: window.getComputedStyle(ad).display
      };
    });

    // C & D. Game Detail & CTA
    await page.click('article div'); // Click first game card
    await new Promise(r => setTimeout(r, 2000));
    
    results.C = await page.evaluate(() => {
      const insElements = document.querySelectorAll('ins.adsbygoogle');
      if (insElements.length === 0) return { found: false };
      const ad = insElements[0];
      return {
        found: true,
        slot: ad.getAttribute('data-ad-slot'),
        client: ad.getAttribute('data-ad-client'),
        layout: ad.getAttribute('data-ad-layout'),
        format: ad.getAttribute('data-ad-format')
      };
    });
    
    results.D = await page.evaluate(() => {
      const ctas = Array.from(document.querySelectorAll('a, span')).filter(el => el.textContent.includes('Main Sekarang') || el.textContent.includes('Segera Hadir'));
      if (ctas.length === 0) return { found: false };
      const cta = ctas[0];
      const rect = cta.getBoundingClientRect();
      return {
        found: true,
        text: cta.textContent.trim(),
        href: cta.href || null,
        isClickable: rect.width > 0 && rect.height > 0
      };
    });

    // E. Duplicate checks via Navigation
    await page.goBack();
    await new Promise(r => setTimeout(r, 1500));
    const dashInsCount = await page.evaluate(() => document.querySelectorAll('ins.adsbygoogle').length);
    
    await page.goForward();
    await new Promise(r => setTimeout(r, 1500));
    const detailInsCount = await page.evaluate(() => document.querySelectorAll('ins.adsbygoogle').length);
    
    results.E = { dashInsCount, detailInsCount };

    // F & I. Overflow check
    results.F_I = await page.evaluate(() => {
      return {
        bodyWidth: document.body.scrollWidth,
        windowWidth: window.innerWidth,
        hasOverflow: document.body.scrollWidth > window.innerWidth
      };
    });

  } catch(e) {
    results.error = e.message;
  } finally {
    await browser.close();
    server.close();
    console.log(JSON.stringify(results, null, 2));
  }
});
