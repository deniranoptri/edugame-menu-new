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
      const lang = await page.evaluate(() => document.documentElement.lang);
      const canonical = await page.evaluate(() => document.querySelector('link[rel="canonical"]')?.href || 'missing');
      const hreflangId = await page.evaluate(() => document.querySelector('link[hreflang="id"]')?.href || 'missing');
      const hreflangEn = await page.evaluate(() => document.querySelector('link[hreflang="en"]')?.href || 'missing');
      
      console.log(`URL: ${url}`);
      console.log(`  lang: ${lang}`);
      console.log(`  canonical: ${canonical}`);
      console.log(`  hreflang(id): ${hreflangId}`);
      console.log(`  hreflang(en): ${hreflangEn}`);
    } catch(e) {
       console.error(`Error loading ${url}:`, e);
    }
  }
  
  await browser.close();
})();
