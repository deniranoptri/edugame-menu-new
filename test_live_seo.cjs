const puppeteer = require('puppeteer');
const https = require('https');

const urls = [
  'https://papaninteraktif.com/',
  'https://papaninteraktif.com/en/',
  'https://papaninteraktif.com/game-edukasi-ifp',
  'https://papaninteraktif.com/en/educational-games-for-interactive-flat-panels',
  'https://papaninteraktif.com/game/nusaboard',
  'https://papaninteraktif.com/en/game/nusaboard',
  'https://papaninteraktif.com/game-edukasi-anak'
];

async function checkRawHtml(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const titleMatch = data.match(/<title>(.*?)<\/title>/i);
        const langMatch = data.match(/<html[^>]*lang="([^"]*)"/i);
        const canonicalMatch = data.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i) || data.match(/<link[^>]*href="([^"]*)"[^>]*rel="canonical"/i);
        const hreflangMatches = [...data.matchAll(/<link[^>]*rel="alternate"[^>]*hreflang="([^"]*)"[^>]*href="([^"]*)"/gi)];
        
        resolve({
          status: res.statusCode,
          title: titleMatch ? titleMatch[1] : null,
          lang: langMatch ? langMatch[1] : null,
          canonical: canonicalMatch ? canonicalMatch[1] : null,
          hreflangs: hreflangMatches.map(m => ({ lang: m[1], href: m[2] }))
        });
      });
    }).on('error', (e) => {
      resolve({ error: e.message });
    });
  });
}

(async () => {
  console.log('--- RAW HTML TEST ---');
  for (const url of urls) {
    const raw = await checkRawHtml(url);
    console.log(`URL: ${url}`);
    console.log(`Status: ${raw.status}`);
    console.log(`Lang: ${raw.lang}`);
    console.log(`Canonical: ${raw.canonical}`);
    console.log(`Hreflangs:`, raw.hreflangs);
    console.log('---------------------');
  }

  console.log('\n--- RUNTIME DOM TEST ---');
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  for (const url of urls) {
    const response = await page.goto(url, { waitUntil: 'networkidle2' });
    const status = response.status();
    
    const data = await page.evaluate(() => {
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || null;
      const hreflangs = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map(l => ({
        lang: l.getAttribute('hreflang'),
        href: l.getAttribute('href')
      }));
      const lang = document.documentElement.lang;
      const title = document.title;
      return { canonical, hreflangs, lang, title };
    });
    
    console.log(`URL: ${url}`);
    console.log(`Lang: ${data.lang}`);
    console.log(`Title: ${data.title}`);
    console.log(`Canonical: ${data.canonical}`);
    console.log(`Hreflangs:`, data.hreflangs);
    console.log('---------------------');
  }

  await browser.close();
})();
