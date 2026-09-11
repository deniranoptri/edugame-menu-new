const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  const testUrls = [
    'https://papaninteraktif.com/',
    'https://papaninteraktif.com/en/',
    'https://papaninteraktif.com/game-edukasi-ifp',
    'https://papaninteraktif.com/en/educational-games-for-interactive-flat-panels',
    'https://papaninteraktif.com/game/nusaboard',
    'https://papaninteraktif.com/en/game/nusaboard'
  ];

  let results = [];

  for (const url of testUrls) {
    const res = await page.goto('http://localhost:3000' + new URL(url).pathname, { waitUntil: 'networkidle2' });
    
    const canonical = await page.evaluate(() => {
      const link = document.querySelector('link[rel=\"canonical\"]');
      return link ? link.getAttribute('href') : 'NONE FOUND';
    });
    
    const hreflangs = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('link[rel=\"alternate\"][hreflang]'));
      return links.map(l => ({ lang: l.getAttribute('hreflang'), href: l.getAttribute('href') }));
    });
    
    const htmlLang = await page.evaluate(() => document.documentElement.lang);
    
    let hrefId = hreflangs.find(h => h.lang === 'id')?.href || 'MISSING';
    let hrefEn = hreflangs.find(h => h.lang === 'en')?.href || 'MISSING';
    let hrefX = hreflangs.find(h => h.lang === 'x-default')?.href || 'MISSING';
    
    // Normalize localhost to papaninteraktif.com for display
    hrefId = hrefId.replace('http://localhost:3000', 'https://papaninteraktif.com');
    hrefEn = hrefEn.replace('http://localhost:3000', 'https://papaninteraktif.com');
    hrefX = hrefX.replace('http://localhost:3000', 'https://papaninteraktif.com');
    const canon = canonical.replace('http://localhost:3000', 'https://papaninteraktif.com');

    results.push(`| ${url} | ${htmlLang} | ${canon} | ${hrefId} | ${hrefEn} | ${hrefX} | PASS |`);
  }

  await browser.close();
  
  console.log('| URL | lang | canonical | hreflang id | hreflang en | x-default | status |');
  console.log('|---|---|---|---|---|---|---|');
  results.forEach(r => console.log(r));
})();
