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

server.listen(3060, async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const results = {};
  
  try {
    await page.setViewport({ width: 1200, height: 800 });
    await page.goto('http://localhost:3060/');
    await new Promise(r => setTimeout(r, 2000));

    results.dashboard = await page.evaluate(() => {
      const ad = document.querySelector('ins[data-ad-slot="2621366810"]');
      const insCount = document.querySelectorAll('ins.adsbygoogle').length;
      return {
        adExists: !!ad,
        overflowHidden: ad ? ad.parentElement.className.includes('overflow-hidden') : false,
        horizontalOverflow: document.body.scrollWidth > window.innerWidth,
        insCount
      };
    });

    await page.click('article div'); 
    await new Promise(r => setTimeout(r, 2000));

    results.gameDetail = await page.evaluate(() => {
      const ad = document.querySelector('ins[data-ad-slot="3777546131"]');
      if (!ad) return { adExists: false };
      const wrapper = ad.parentElement;
      const iframe = ad.querySelector('iframe');
      const insCount = document.querySelectorAll('ins.adsbygoogle').length;
      
      const ctas = Array.from(document.querySelectorAll('a, span')).filter(el => el.textContent.includes('Main Sekarang') || el.textContent.includes('Segera Hadir'));
      const cta = ctas[0];
      const ctaRect = cta ? cta.getBoundingClientRect() : null;
      const adRect = ad.getBoundingClientRect();
      
      let overlap = false;
      if (adRect && ctaRect) {
        overlap = !(adRect.right < ctaRect.left || 
                    adRect.left > ctaRect.right || 
                    adRect.bottom < ctaRect.top || 
                    adRect.top > ctaRect.bottom);
      }

      return {
        adExists: true,
        wrapperClasses: wrapper.className,
        hasOverflowHidden: wrapper.className.includes('overflow-hidden'),
        viewportWidth: window.innerWidth,
        documentScrollWidth: document.body.scrollWidth,
        wrapperWidth: wrapper.getBoundingClientRect().width,
        insWidth: adRect.width,
        iframeWidth: iframe ? iframe.getBoundingClientRect().width : null,
        horizontalOverflow: document.body.scrollWidth > window.innerWidth,
        ctaVisible: !!cta,
        ctaOverlap: overlap,
        insCount
      };
    });

  } catch (e) {
    results.error = e.message;
  } finally {
    await browser.close();
    server.close();
    console.log(JSON.stringify(results, null, 2));
  }
});
