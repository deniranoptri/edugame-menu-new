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

server.listen(3076, async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 800 });
  await page.goto('http://localhost:3076/');
  await new Promise(r => setTimeout(r, 2000));
  const results = await page.evaluate(() => {
    const heliCard = Array.from(document.querySelectorAll('article')).find(c => c.textContent.includes('HELI RESCUE'));
    if (!heliCard) return { found: false };
    const img = heliCard.querySelector('img');
    const title = heliCard.querySelector('h3');
    const cta = heliCard.querySelector('div.mt-auto');
    const sub = heliCard.querySelector('p');
    
    return {
      found: true,
      imgBottom: img.getBoundingClientRect().bottom,
      titleTop: title.getBoundingClientRect().top,
      subTop: sub.getBoundingClientRect().top,
      ctaTop: cta.getBoundingClientRect().top,
      overlap: img.getBoundingClientRect().bottom > title.getBoundingClientRect().top,
      gap: title.getBoundingClientRect().top - img.getBoundingClientRect().bottom
    };
  });
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
  server.close();
});
