const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto(`http://localhost:3001/panduan/penggunaan-ifp-papan-interaktif-digital`, { waitUntil: 'networkidle2' });
  console.log('1. URL:', page.url(), 'Lang:', await page.evaluate(() => document.documentElement.lang));
  
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('a')).find(a => a.href.includes('game-edukasi-ifp'));
    if(link) link.click();
  });
  await new Promise(r => setTimeout(r, 1000));
  console.log('2. URL:', page.url(), 'Lang:', await page.evaluate(() => document.documentElement.lang));
  
  await page.goBack();
  await new Promise(r => setTimeout(r, 1000));
  console.log('3. URL:', page.url(), 'Lang:', await page.evaluate(() => document.documentElement.lang));
  
  await browser.close();
})();
