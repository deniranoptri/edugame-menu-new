const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  const viewportWidths = [320, 360, 390, 430, 768, 1024, 1440];
  const url = 'http://localhost:3003/game/banua-fruit-blast';
  
  for (const w of viewportWidths) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: 800 });
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    
    console.log(`Viewport ${w}px - overflow: ${overflow}`);
    await page.close();
  }
  
  await browser.close();
})();
