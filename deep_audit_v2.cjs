const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const results = {};

  try {
    await page.goto('http://localhost:3002/game/sciencelink', { waitUntil: 'networkidle2' });
    results.id = await page.evaluate(() => {
      const qs = (sel) => document.querySelector(sel)?.innerText || '';
      const qsAll = (sel) => Array.from(document.querySelectorAll(sel));
      
      const audienceH2 = qsAll('h2').find(el => el.innerText.toLowerCase().includes('audiens'));
      const subjectH2 = qsAll('h2').find(el => el.innerText.toLowerCase().includes('konteks'));
      const focusH2 = qsAll('h2').find(el => el.innerText.toLowerCase().includes('fokus'));

      return {
        h1: qs('h1'),
        audience: audienceH2 ? audienceH2.nextElementSibling?.innerText || '' : '',
        subject: subjectH2 ? subjectH2.nextElementSibling?.innerText || '' : '',
        focus: focusH2 ? focusH2.nextElementSibling?.innerText || '' : '',
      };
    });

    await page.goto('http://localhost:3002/en/game/sciencelink', { waitUntil: 'networkidle2' });
    results.en = await page.evaluate(() => {
      const qs = (sel) => document.querySelector(sel)?.innerText || '';
      const qsAll = (sel) => Array.from(document.querySelectorAll(sel));
      
      const audienceH2 = qsAll('h2').find(el => el.innerText.toLowerCase().includes('audiens') || el.innerText.toLowerCase().includes('audience'));
      const focusH2 = qsAll('h2').find(el => el.innerText.toLowerCase().includes('fokus') || el.innerText.toLowerCase().includes('focus'));

      return {
        h1: qs('h1'),
        audience: audienceH2 ? audienceH2.nextElementSibling?.innerText || '' : '',
        focus: focusH2 ? focusH2.nextElementSibling?.innerText || '' : '',
      };
    });
  } catch(e) {
    results.error = e.message;
  }
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
