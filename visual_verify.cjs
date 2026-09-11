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

server.listen(3070, async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const results = {};
  
  try {
    await page.setViewport({ width: 1200, height: 800 });
    await page.goto('http://localhost:3070/');
    await new Promise(r => setTimeout(r, 2000));

    results.horizontalOverflow = await page.evaluate(() => document.body.scrollWidth > window.innerWidth);
    
    results.heliRescue = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('article'));
      const heliCard = cards.find(c => c.textContent.includes('HELI RESCUE'));
      if (!heliCard) return { found: false };
      
      const img = heliCard.querySelector('img');
      const href = heliCard.querySelector('a')?.href;
      const isA = !!heliCard.querySelector('a');
      const imgClasses = img ? img.className : '';
      
      return {
        found: true,
        href,
        isA,
        imgSrc: img ? img.src : null,
        imgClasses,
        cardHTML: heliCard.innerHTML.substring(0, 100) + '...'
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
