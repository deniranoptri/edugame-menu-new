const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  const games = ['sciencelink', 'banua-fruit-blast', 'kancil', 'rimba-pedia'];
  const results = {};

  for (const game of games) {
    const page = await browser.newPage();
    
    // Check ID
    await page.goto(`http://localhost:3003/game/${game}`, { waitUntil: 'networkidle2' });
    const idData = await page.evaluate(() => {
      const howToPlayH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText === 'CARA BERMAIN');
      const benefitsH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText === 'MANFAAT PEMBELAJARAN');
      return {
        hasHowToPlay: !!howToPlayH2,
        hasBenefits: !!benefitsH2
      };
    });

    // Check EN
    await page.goto(`http://localhost:3003/en/game/${game}`, { waitUntil: 'networkidle2' });
    const enData = await page.evaluate(() => {
      const howToPlayH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText === 'HOW TO PLAY');
      const benefitsH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText === 'LEARNING BENEFITS');
      return {
        hasHowToPlay: !!howToPlayH2,
        hasBenefits: !!benefitsH2
      };
    });

    results[game] = { id: idData, en: enData };
    await page.close();
  }
  
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
