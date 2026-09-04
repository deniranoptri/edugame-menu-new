const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3002/game/sciencelink', { waitUntil: 'networkidle2' });
  const seoData = await page.evaluate(() => {
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      hreflang_id: document.querySelector('link[hreflang="id"]')?.href,
      hreflang_en: document.querySelector('link[hreflang="en"]')?.href,
      html_lang: document.documentElement.lang
    }
  });
  
  await browser.close();
  console.log(JSON.stringify(seoData, null, 2));
})();
