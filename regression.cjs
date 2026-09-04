const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  const games = ['banua-fruit-blast', 'doodle', 'si-taktik'];
  const results = {};

  for (const game of games) {
    const page = await browser.newPage();
    
    await page.goto(`http://localhost:3002/game/${game}`, { waitUntil: 'networkidle2' });
    const data = await page.evaluate(() => {
      const qs = (sel) => document.querySelector(sel);
      const howToPlayH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText === 'CARA BERMAIN');
      const benefitsH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText === 'MANFAAT PEMBELAJARAN');
      
      return {
        hasHowToPlay: !!howToPlayH2,
        hasBenefits: !!benefitsH2
      };
    });
    results[game] = data;
    await page.close();
  }
  
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
