const puppeteer = require('puppeteer');
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(filePath) && !filePath.includes('.')) filePath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(filePath)) { res.end(fs.readFileSync(filePath)); } else { res.writeHead(404); res.end(); }
});

server.listen(3075, async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  await page.goto('http://localhost:3075/');
  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
  server.close();
});
