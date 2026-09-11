const puppeteer = require('puppeteer');
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(filePath) && !filePath.includes('.')) filePath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(filePath)) { res.end(fs.readFileSync(filePath)); } else { res.writeHead(404); res.end(); }
});

server.listen(3078, async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const viewports = [320, 375, 390, 412, 768, 1366, 1920];
  const results = {};

  for (const width of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 1000 });
    await page.goto('http://localhost:3078/');
    await new Promise(r => setTimeout(r, 1000));
    
    results[width] = await page.evaluate(() => {
      const heliCard = Array.from(document.querySelectorAll('article')).find(c => c.textContent.includes('HELI RESCUE'));
      if (!heliCard) return { error: 'Not found' };
      const img = heliCard.querySelector('img');
      const title = heliCard.querySelector('h3');
      const sub = heliCard.querySelector('p');
      const cta = heliCard.querySelector('div.mt-auto');
      
      const imgRect = img.getBoundingClientRect();
      const titleRect = title.getBoundingClientRect();
      const subRect = sub.getBoundingClientRect();
      const ctaRect = cta ? cta.getBoundingClientRect() : { top: 0, bottom: 0, height: 0 };
      
      return {
        imgHeight: imgRect.height,
        titleHeight: titleRect.height,
        subHeight: subRect.height,
        ctaHeight: ctaRect.height,
        overlap: imgRect.bottom > titleRect.top,
        gap: titleRect.top - imgRect.bottom,
        titleFullyVisible: titleRect.height > 0 && titleRect.width > 0,
        subFullyVisible: subRect.height > 0 && subRect.width > 0,
        overflow: heliCard.scrollWidth > heliCard.clientWidth
      };
    });
    await page.close();
  }
  
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
  server.close();
});
