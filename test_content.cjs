const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  // Test sciencelink
  await page.goto('http://localhost:3003/game/sciencelink', { waitUntil: 'networkidle2' });
  const sl = await page.evaluate(() => {
    return {
      h2Count: document.querySelectorAll('h2').length
    }
  });
  
  await browser.close();
  console.log('sciencelink h2 count:', sl.h2Count);
})();
