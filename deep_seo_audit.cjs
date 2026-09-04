const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const results = [];

  const urlsToTest = [
    'http://localhost:3002/',
    'http://localhost:3002/game-edukasi-ifp',
    'http://localhost:3002/game-logika',
    'http://localhost:3002/game/nusaboard',
    'http://localhost:3002/en/educational-games-for-interactive-flat-panels',
    'http://localhost:3002/en/game/nusaboard',
    'http://localhost:3002/jurnal-guru',
    'http://localhost:3002/panduan/memilih-game-edukasi-anak'
  ];

  for (const url of urlsToTest) {
    try {
      await page.goto(url, { waitUntil: 'networkidle2' });
      
      const data = await page.evaluate(() => {
        const title = document.title;
        const lang = document.documentElement.lang;
        const metaDesc = document.querySelector('meta[name="description"]')?.content;
        const canonical = document.querySelector('link[rel="canonical"]')?.href;
        const hreflangId = document.querySelector('link[hreflang="id"]')?.href;
        const hreflangEn = document.querySelector('link[hreflang="en"]')?.href;
        const h1 = document.querySelector('h1')?.innerText;
        const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(s => s.innerText);
        
        return { title, lang, metaDesc, canonical, hreflangId, hreflangEn, h1, jsonLdScripts };
      });
      
      results.push({ url, ...data, status: 'SUCCESS' });
    } catch(e) {
      results.push({ url, status: 'ERROR', message: e.message });
    }
  }
  
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
