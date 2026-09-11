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

server.listen(3071, async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  try {
    await page.setViewport({ width: 375, height: 800 });
    await page.goto('http://localhost:3071/');
    await new Promise(r => setTimeout(r, 2000));

    const results = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('article'));
      const heliCard = cards.find(c => c.textContent.includes('HELI RESCUE'));
      if (!heliCard) return { found: false };
      
      const img = heliCard.querySelector('img');
      const title = heliCard.querySelector('h3');
      const subtitle = heliCard.querySelector('p');
      
      const imgRect = img.getBoundingClientRect();
      const titleRect = title.getBoundingClientRect();
      const subRect = subtitle.getBoundingClientRect();
      
      return {
        found: true,
        imgRect: { bottom: imgRect.bottom, height: imgRect.height },
        titleRect: { top: titleRect.top, height: titleRect.height },
        subRect: { top: subRect.top, height: subRect.height },
        overlap: imgRect.bottom > titleRect.top,
        overlapAmount: imgRect.bottom - titleRect.top
      };
    });
    console.log(JSON.stringify(results, null, 2));

  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
    server.close();
  }
});
