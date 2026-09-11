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

server.listen(3050, async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const results = {};
  
  try {
    await page.setViewport({ width: 1200, height: 800 });
    await page.goto('http://localhost:3050/');
    await new Promise(r => setTimeout(r, 2000));

    results.dashOverflow = await page.evaluate(() => document.body.scrollWidth > window.innerWidth);
    
    results.dashAd = await page.evaluate(() => {
      const ad = document.querySelector('ins[data-ad-slot="2621366810"]');
      if (!ad) return null;
      const parent = ad.parentElement;
      return {
        adWidth: ad.getBoundingClientRect().width,
        parentWidth: parent.getBoundingClientRect().width,
        parentOverflow: window.getComputedStyle(parent).overflow,
        parentClasses: parent.className
      };
    });

    await page.click('article div'); 
    await new Promise(r => setTimeout(r, 2000));

    results.detailOverflow = await page.evaluate(() => document.body.scrollWidth > window.innerWidth);
    
    results.detailAd = await page.evaluate(() => {
      const ad = document.querySelector('ins[data-ad-slot="3777546131"]');
      if (!ad) return null;
      const parent = ad.parentElement;
      
      let current = parent;
      let hiddenAncestors = [];
      while (current && current !== document.body) {
         const style = window.getComputedStyle(current);
         if (style.overflow === 'hidden' || style.overflowX === 'hidden') {
             hiddenAncestors.push({ tag: current.tagName, classes: current.className });
         }
         current = current.parentElement;
      }
      
      return {
        adWidth: ad.getBoundingClientRect().width,
        parentWidth: parent.getBoundingClientRect().width,
        parentOverflow: window.getComputedStyle(parent).overflow,
        parentClasses: parent.className,
        hiddenAncestors
      };
    });

    results.cta = await page.evaluate(() => {
      const ctas = Array.from(document.querySelectorAll('a, span')).filter(el => el.textContent.includes('Main Sekarang'));
      if (ctas.length === 0) return null;
      const ctaRect = ctas[0].getBoundingClientRect();
      const ad = document.querySelector('ins[data-ad-slot="3777546131"]');
      const adRect = ad ? ad.getBoundingClientRect() : null;
      
      let overlap = false;
      if (adRect && ctaRect) {
        overlap = !(adRect.right < ctaRect.left || 
                    adRect.left > ctaRect.right || 
                    adRect.bottom < ctaRect.top || 
                    adRect.top > ctaRect.bottom);
      }
      return { ctaWidth: ctaRect.width, overlap };
    });

  } catch (e) {
    results.error = e.message;
  } finally {
    await browser.close();
    server.close();
    console.log(JSON.stringify(results, null, 2));
  }
});
