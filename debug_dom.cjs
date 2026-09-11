const puppeteer = require('puppeteer');
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(filePath) && !filePath.includes('.')) filePath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(filePath)) { res.end(fs.readFileSync(filePath)); } else { res.writeHead(404); res.end(); }
});

server.listen(3074, async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto('http://localhost:3074/');
  await new Promise(r => setTimeout(r, 2000));
  const results = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('article h3')).map(h => h.textContent);
  });
  console.log(results);
  await browser.close();
  server.close();
});
