const puppeteer = require('puppeteer');
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(filePath) && !filePath.includes('.')) filePath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(filePath)) {
    res.end(fs.readFileSync(filePath));
  } else {
    res.writeHead(404); res.end();
  }
});

server.listen(3072, async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 320, height: 800 });
  await page.goto('http://localhost:3072/');
  await new Promise(r => setTimeout(r, 2000));
  const results = await page.evaluate(() => {
    const heliCard = Array.from(document.querySelectorAll('article')).find(c => c.textContent.includes('HELI RESCUE'));
    if (!heliCard) return { found: false };
    const img = heliCard.querySelector('img');
    const title = heliCard.querySelector('h3');
    return {
      imgBottom: img.getBoundingClientRect().bottom,
      titleTop: title.getBoundingClientRect().top,
      overlap: img.getBoundingClientRect().bottom > title.getBoundingClientRect().top
    };
  });
  console.log(results);
  await browser.close();
  server.close();
});
