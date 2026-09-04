const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  page.on('pageerror', err => {
    console.error('PAGE_ERROR on', page.url(), ':', err.toString());
  });

  const urls = [
    'http://localhost:3000/',
    'http://localhost:3000/game-edukasi-ifp',
    'http://localhost:3000/game-edukasi-anak',
    'http://localhost:3000/game-logika',
    'http://localhost:3000/en/educational-games-for-interactive-flat-panels',
    'http://localhost:3000/en/guides/using-educational-games-on-interactive-flat-panels',
    'http://localhost:3000/en/game/banua-fruit-blast'
  ];

  for (const url of urls) {
    try {
      await page.goto(url, { waitUntil: 'networkidle2' });
      // ensure no runtime error visually, if it shows "AppError: " or "ReferenceError", it will be in body
      const bodyText = await page.evaluate(() => document.body.innerText);
      if (bodyText.includes("AppError") || bodyText.includes("ReferenceError")) {
          console.error(`Runtime Error found on ${url}: ${bodyText.substring(0, 100)}...`);
      }
    } catch(e) {
       console.error(`Error loading ${url}:`, e);
    }
  }
  
  await browser.close();
})();
