const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const results = {};

  const idUrl = 'http://localhost:3002/game/sciencelink';
  const enUrl = 'http://localhost:3002/en/game/sciencelink';

  try {
    // ID audit
    await page.goto(idUrl, { waitUntil: 'networkidle2' });
    
    results.id = await page.evaluate(() => {
      const h1 = document.querySelector('h1')?.innerText || '';
      const subtitle = document.querySelector('p.text-lg')?.innerText || '';
      const description = document.querySelector('section p.leading-relaxed')?.innerText || '';
      
      const audienceH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText.includes('Target Audiens'));
      const audience = audienceH2 ? audienceH2.nextElementSibling?.innerText || '' : '';
      
      const subjectH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText.includes('Konteks Edukasi'));
      const subject = subjectH2 ? subjectH2.nextElementSibling?.innerText || '' : '';
      
      const focusH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText.includes('Fokus Belajar'));
      const focus = focusH2 ? focusH2.nextElementSibling?.innerText || '' : '';
      
      const badges = Array.from(document.querySelectorAll('span.bg-gray-100')).map(b => b.innerText);
      const jsonLd = document.querySelector('script[type="application/ld+json"]')?.innerText;

      return {
        h1, subtitle, description, audience, subject, focus, badges,
        lengths: {
          title: h1.length,
          subtitle: subtitle.length,
          description: description.length,
          focus: focus.length
        },
        jsonLd: jsonLd ? JSON.parse(jsonLd) : null
      };
    });

    // EN audit
    await page.goto(enUrl, { waitUntil: 'networkidle2' });
    results.en = await page.evaluate(() => {
      const h1 = document.querySelector('h1')?.innerText || '';
      const subtitle = document.querySelector('p.text-lg')?.innerText || '';
      const description = document.querySelector('section p.leading-relaxed')?.innerText || '';
      
      const audienceH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText.includes('Target Audience') || el.innerText.includes('Target Audiens'));
      const audience = audienceH2 ? audienceH2.nextElementSibling?.innerText || '' : '';
      
      const focusH2 = Array.from(document.querySelectorAll('h2')).find(el => el.innerText.includes('Fokus Belajar') || el.innerText.includes('Learning Focus'));
      const focus = focusH2 ? focusH2.nextElementSibling?.innerText || '' : '';
      
      return { h1, subtitle, description, audience, focus };
    });
    
  } catch(e) {
    results.error = e.message;
  }
  
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
