const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  const routes = [
    '/',
    '/game-edukasi-ifp',
    '/game-edukasi-anak',
    '/game/sciencelink',
    '/en/game/sciencelink'
  ];
  
  const results = {};

  for (const route of routes) {
    const page = await browser.newPage();
    const response = await page.goto(`http://localhost:3002${route}`, { waitUntil: 'networkidle2' });
    const status = response.status();
    const title = await page.title();
    
    // basic check for content rendering
    const hasContent = await page.evaluate(() => document.body.innerText.length > 100);
    
    results[route] = { status, title, hasContent };
    await page.close();
  }
  
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
