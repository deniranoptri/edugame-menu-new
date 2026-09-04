const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  console.log("Navigating to http://localhost:4173/game/banua-fruit-blast");
  await page.goto('http://localhost:4173/game/banua-fruit-blast', { waitUntil: 'networkidle0' });
  
  console.log("Checking page content...");
  const body = await page.evaluate(() => document.body.innerText);
  console.log("Body snippet:", body.substring(0, 1000));
  
  await browser.close();
})();
