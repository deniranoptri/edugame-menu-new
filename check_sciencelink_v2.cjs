const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const results = {};

  try {
    await page.goto('http://localhost:3002/', { waitUntil: 'networkidle2' });
    results.home = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('h3, article, div')).filter(el => el.innerText && el.innerText.includes('SCIENCELINK'));
      return { found: cards.length > 0 };
    });
    
    await page.goto('http://localhost:3002/game-edukasi-anak', { waitUntil: 'networkidle2' });
    results.gameJunior = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('h3, article, div')).filter(el => el.innerText && el.innerText.includes('SCIENCELINK'));
      return { found: cards.length > 0 }; 
    });
    
    await page.goto('http://localhost:3002/en/educational-games-for-interactive-flat-panels', { waitUntil: 'networkidle2' });
    results.homeEn = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('h3, article, div')).filter(el => el.innerText && el.innerText.includes('SCIENCELINK'));
      return { found: cards.length > 0 };
    });
    
  } catch(e) {
    results.error = e.message;
  }
  
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
