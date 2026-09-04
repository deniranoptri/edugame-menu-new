const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  async function testPage(url, isMobile = false) {
    const page = await browser.newPage();
    const logs = { errors: [], warnings: [] };
    
    page.on('console', msg => {
      if (msg.type() === 'error') logs.errors.push(msg.text());
      if (msg.type() === 'warning') logs.warnings.push(msg.text());
    });
    
    page.on('pageerror', err => {
      logs.errors.push(err.toString());
    });
    
    if (isMobile) {
      await page.setViewport({ width: 390, height: 844 });
    } else {
      await page.setViewport({ width: 1280, height: 800 });
    }

    const response = await page.goto(url, { waitUntil: 'networkidle2' });
    
    const data = await page.evaluate(() => {
      const getMeta = name => {
        let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
        return el ? el.getAttribute('content') : null;
      };
      const getCanonical = () => {
        let el = document.querySelector('link[rel="canonical"]');
        return el ? el.getAttribute('href') : null;
      };
      const getHreflangs = () => {
        let links = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]'));
        return links.map(l => ({ lang: l.getAttribute('hreflang'), href: l.getAttribute('href') }));
      };
      const getJsonLd = () => {
        let scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
        return scripts.map(s => JSON.parse(s.innerHTML));
      };
      const getLinks = () => {
        return Array.from(document.querySelectorAll('a')).map(a => a.getAttribute('href'));
      };
      return {
        title: document.title,
        lang: document.documentElement.lang,
        canonical: getCanonical(),
        hreflangs: getHreflangs(),
        meta: {
          description: getMeta('description'),
          ogTitle: getMeta('og:title'),
          ogDescription: getMeta('og:description'),
          ogUrl: getMeta('og:url'),
          ogLocale: getMeta('og:locale'),
        },
        jsonLd: getJsonLd(),
        bodyText: document.body.innerText.substring(0, 300).replace(/\n/g, ' '),
        links: getLinks()
      };
    });
    
    await page.close();
    return { data, logs };
  }

  const baseUrl = 'http://localhost:3001';
  
  const results = {};
  
  const urlsToTest = [
    { path: '/', name: 'ID_Home' },
    { path: '/game-edukasi-ifp', name: 'ID_Hub' },
    { path: '/panduan/penggunaan-ifp-papan-interaktif-digital', name: 'ID_Guide' },
    { path: '/game/nusaboard', name: 'ID_Game' },
    { path: '/en/educational-games-for-interactive-flat-panels', name: 'EN_Hub' },
    { path: '/en/guides/using-educational-games-on-interactive-flat-panels', name: 'EN_Guide' },
    { path: '/en/game/nusaboard', name: 'EN_Game' },
    { path: '/en/this-route-does-not-exist', name: 'EN_Unknown' },
  ];

  for (const u of urlsToTest) {
    console.log(`Testing ${u.name}: ${baseUrl}${u.path}`);
    results[u.name] = await testPage(`${baseUrl}${u.path}`);
  }
  
  // Test Popstate
  console.log('Testing Popstate...');
  const page = await browser.newPage();
  const popLogs = { errors: [] };
  page.on('pageerror', err => popLogs.errors.push(err.toString()));
  
  await page.goto(`${baseUrl}/en/educational-games-for-interactive-flat-panels`, { waitUntil: 'networkidle2' });
  let popLangs = [];
  popLangs.push(await page.evaluate(() => document.documentElement.lang));
  
  // click game
  await page.evaluate(() => {
    const card = document.querySelector('article');
    if(card) {
      const clickEl = card.querySelector('div.group');
      if (clickEl) clickEl.click();
    }
  });
  await new Promise(r => setTimeout(r, 1000));
  popLangs.push(await page.evaluate(() => document.documentElement.lang));
  
  await page.goBack();
  await new Promise(r => setTimeout(r, 1000));
  popLangs.push(await page.evaluate(() => document.documentElement.lang));
  
  results['Popstate_EN'] = { langs: popLangs, errors: popLogs.errors };
  
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})();
