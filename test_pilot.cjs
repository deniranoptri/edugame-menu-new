const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const results = {};

  try {
    await page.goto('http://localhost:3002/game/sciencelink', { waitUntil: 'networkidle2' });
    results.id = await page.evaluate(() => {
      return document.body.innerText.includes('SCIENCELINK');
    });
    
    await page.goto('http://localhost:3002/en/game/sciencelink', { waitUntil: 'networkidle2' });
    results.en = await page.evaluate(() => {
      return document.body.innerText.includes('SCIENCELINK');
    });
  } catch(e) {
    results.error = e.message;
  }
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
