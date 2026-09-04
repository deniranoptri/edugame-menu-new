const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  const routes = [
    'http://localhost:3003/game/sciencelink',
    'http://localhost:3003/game/banua-fruit-blast',
    'http://localhost:3003/en/game/sciencelink'
  ];
  
  for (const url of routes) {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const data = await page.evaluate(() => {
      const title = document.title;
      const desc = document.querySelector('meta[name="description"]')?.content;
      const canonical = document.querySelector('link[rel="canonical"]')?.href;
      const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(s => JSON.parse(s.innerText));
      const h1 = document.querySelector('h1')?.innerText;
      return { title, desc, canonical, h1, jsonLd: jsonLdScripts };
    });
    console.log(`\nURL: ${url}`);
    console.log('Title:', data.title);
    console.log('Desc:', data.desc);
    console.log('Canonical:', data.canonical);
    console.log('H1:', data.h1);
    console.log('JSON-LD presence:', data.jsonLd.length > 0);
    if (data.jsonLd.length > 0) {
      console.log('JSON-LD Type:', data.jsonLd[0]['@type']);
      console.log('JSON-LD Offers:', !!data.jsonLd[0].offers);
      console.log('JSON-LD Reviews:', !!data.jsonLd[0].aggregateRating);
    }
    await page.close();
  }
  
  await browser.close();
})();
