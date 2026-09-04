const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3003/game/banua-fruit-blast', { waitUntil: 'networkidle2' });
  const backBtnHref = await page.evaluate(() => {
    return document.querySelector('a[href="/"]')?.href;
  });
  
  console.log('Back button found:', !!backBtnHref);
  
  await browser.close();
})();
