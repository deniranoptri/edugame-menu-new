const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const results = {};

  try {
    await page.goto('http://localhost:3002/', { waitUntil: 'networkidle2' });
    
    results.labels = await page.evaluate(() => {
      const sciencelinkCard = Array.from(document.querySelectorAll('article')).find(el => el.innerText.includes('SCIENCELINK'));
      if (sciencelinkCard) {
        // Find tags. They are likely in span elements that have specific classes or just text
        // we can just extract all texts that look like the tags.
        const allText = sciencelinkCard.innerText;
        return {
          found: true,
          hasLogika: allText.includes('🧠 Logika'),
          hasScience: allText.includes('🧪 Science'),
          hasLiterasi: allText.includes('📖 Literasi'),
          text: allText.replace(/\n/g, ' | ')
        };
      }
      return { found: false };
    });
    
    await page.goto('http://localhost:3002/game/sciencelink', { waitUntil: 'networkidle2' });
    results.detailId = await page.evaluate(() => {
      return {
        audience: Array.from(document.querySelectorAll('h2')).find(el => el.innerText.includes('Target Audiens'))?.nextElementSibling?.innerText,
      };
    });
    
  } catch(e) {
    results.error = e.message;
  }
  
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
