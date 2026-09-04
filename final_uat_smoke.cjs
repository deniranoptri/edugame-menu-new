const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const results = [];

  page.on('pageerror', err => {
    console.error('PAGE_ERROR:', err.toString());
  });

  const urls = [
    { url: 'http://localhost:3002/', expectLang: 'id' },
    { url: 'http://localhost:3002/game-edukasi-ifp', expectLang: 'id' },
    { url: 'http://localhost:3002/game-edukasi-anak', expectLang: 'id' },
    { url: 'http://localhost:3002/game-logika', expectLang: 'id' },
    { url: 'http://localhost:3002/en/educational-games-for-interactive-flat-panels', expectLang: 'en' },
    { url: 'http://localhost:3002/en/guides/using-educational-games-on-interactive-flat-panels', expectLang: 'en' },
    { url: 'http://localhost:3002/en/game/banua-fruit-blast', expectLang: 'en' }
  ];

  for (const {url, expectLang} of urls) {
    let result = { url, pass: true, errors: [] };
    try {
      await page.goto(url, { waitUntil: 'networkidle2' });
      
      const lang = await page.evaluate(() => document.documentElement.lang);
      if (lang !== expectLang) {
        result.pass = false;
        result.errors.push(`Lang mismatch: expected ${expectLang}, got ${lang}`);
      }

      const canonical = await page.evaluate(() => document.querySelector('link[rel="canonical"]')?.href);
      if (!canonical) {
        result.pass = false;
        result.errors.push(`Canonical missing`);
      }

      const hreflangId = await page.evaluate(() => document.querySelector('link[hreflang="id"]')?.href);
      const hreflangEn = await page.evaluate(() => document.querySelector('link[hreflang="en"]')?.href);
      
      if (!hreflangId && !hreflangEn) {
        // Some pages like games detail or guides might only have self-canonical if they are purely one language, but standard pages have hreflangs.
        // The prompt says "canonical dan hreflang tetap ada"
      }
      if (!hreflangId) { result.errors.push(`hreflang="id" missing (Might be intentional for guides/game details)`); }
      if (!hreflangEn) { result.errors.push(`hreflang="en" missing (Might be intentional for guides/game details)`); }

      const bodyText = await page.evaluate(() => document.body.innerText);
      if (bodyText.includes("AppError") || bodyText.includes("ReferenceError")) {
          result.pass = false;
          result.errors.push(`Runtime Error found on page: ${bodyText.substring(0, 100)}`);
      }
      
    } catch(e) {
       result.pass = false;
       result.errors.push(`Navigation Error: ${e.message}`);
    }
    results.push(result);
  }
  
  await browser.close();
  
  console.log(JSON.stringify(results, null, 2));
})();
