const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const popLogs = { errors: [] };
  page.on('pageerror', err => popLogs.errors.push(err.toString()));
  page.on('console', msg => { if(msg.type() === 'error') popLogs.errors.push(msg.text()); });
  
  await page.goto(`http://localhost:3001/game-edukasi-anak`, { waitUntil: 'networkidle2' });
  console.log('HubKids URL:', page.url(), 'Errors:', popLogs.errors);
  popLogs.errors = [];
  
  await page.goto(`http://localhost:3001/game-logika`, { waitUntil: 'networkidle2' });
  console.log('HubLogic URL:', page.url(), 'Errors:', popLogs.errors);
  
  await browser.close();
})();
