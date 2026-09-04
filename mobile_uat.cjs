const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  const viewports = [
    { width: 320, height: 568 },
    { width: 360, height: 640 },
    { width: 390, height: 844 },
    { width: 430, height: 932 }
  ];

  const results = {};

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport(vp);
    
    // Check SCIENCELINK ID
    await page.goto('http://localhost:3002/game/sciencelink', { waitUntil: 'networkidle2' });
    
    const idData = await page.evaluate(() => {
      const qs = (sel) => document.querySelector(sel);
      
      const howToPlayH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText === 'CARA BERMAIN');
      const benefitsH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText === 'MANFAAT PEMBELAJARAN');
      
      const width = document.documentElement.scrollWidth;
      const windowWidth = window.innerWidth;
      
      return {
        hasHowToPlay: !!howToPlayH2,
        hasBenefits: !!benefitsH2,
        hasHorizontalOverflow: width > windowWidth,
        width,
        windowWidth
      };
    });

    // Check SCIENCELINK EN
    await page.goto('http://localhost:3002/en/game/sciencelink', { waitUntil: 'networkidle2' });
    
    const enData = await page.evaluate(() => {
      const howToPlayH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText === 'HOW TO PLAY');
      const benefitsH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText === 'LEARNING BENEFITS');
      return {
        hasHowToPlay: !!howToPlayH2,
        hasBenefits: !!benefitsH2
      };
    });
    
    results[`viewport_${vp.width}`] = { id: idData, en: enData };
    await page.close();
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
