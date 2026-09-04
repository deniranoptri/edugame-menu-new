const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/game/sciencelink', { waitUntil: 'networkidle2' });
  const results = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(s => JSON.parse(s.innerText));
  });
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})();
