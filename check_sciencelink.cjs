const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const results = {};

  try {
    await page.goto('http://localhost:3002/', { waitUntil: 'networkidle2' });
    results.home = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('button')).filter(btn => btn.innerText.includes('SCIENCELINK'));
      if (cards.length > 0) {
        return {
          found: true,
          count: cards.length,
          text: cards[0].innerText.replace(/\n/g, ' ')
        };
      }
      return { found: false };
    });
    
    await page.goto('http://localhost:3002/game-edukasi-anak', { waitUntil: 'networkidle2' });
    results.gameJunior = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('button')).filter(btn => btn.innerText.includes('SCIENCELINK'));
      return { count: cards.length }; // should be 0
    });
    
    await page.goto('http://localhost:3002/en/educational-games-for-interactive-flat-panels', { waitUntil: 'networkidle2' });
    results.homeEn = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('button')).filter(btn => btn.innerText.includes('SCIENCELINK'));
      if (cards.length > 0) {
        return {
          found: true,
          count: cards.length,
          text: cards[0].innerText.replace(/\n/g, ' ')
        };
      }
      return { found: false };
    });
    
    await page.goto('http://localhost:3002/game/sciencelink', { waitUntil: 'networkidle2' });
    results.detailId = await page.evaluate(() => {
      return {
        url: document.querySelector('a.w-full')?.href || null,
        title: document.querySelector('h1')?.innerText,
        audience: Array.from(document.querySelectorAll('h2')).find(el => el.innerText.includes('Target Audiens'))?.nextElementSibling?.innerText,
      };
    });
    
    await page.goto('http://localhost:3002/en/game/sciencelink', { waitUntil: 'networkidle2' });
    results.detailEn = await page.evaluate(() => {
      return {
        url: document.querySelector('a.w-full')?.href || null,
        title: document.querySelector('h1')?.innerText,
        audience: Array.from(document.querySelectorAll('h2')).find(el => el.innerText.includes('Target Audience'))?.nextElementSibling?.innerText,
      };
    });
    
  } catch(e) {
    results.error = e.message;
  }
  
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
