const puppeteer = require('puppeteer');
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(filePath) && !filePath.includes('.')) filePath = path.join(__dirname, 'dist', 'index.html');
  if (!fs.existsSync(filePath)) { res.writeHead(404); return res.end(); }
  res.end(fs.readFileSync(filePath));
});

server.listen(3031, async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3031/');
    await new Promise(r => setTimeout(r, 2000));
    
    const dashIns = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('ins.adsbygoogle')).map(ad => ({
        slot: ad.getAttribute('data-ad-slot'),
        className: ad.className,
        parent: ad.parentElement.tagName
      }));
    });
    console.log("Dashboard INS:", dashIns);
  } finally {
    await browser.close();
    server.close();
  }
});
