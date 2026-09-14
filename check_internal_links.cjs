const fs = require('fs');
const files = fs.readdirSync('./components').filter(f => f.startsWith('Article') || f === 'JurnalGuru.tsx');
const issues = [];

files.forEach(file => {
  const content = fs.readFileSync('./components/' + file, 'utf-8');
  const navigateMatches = [...content.matchAll(/navigateTo\('([^']+)'/g)];
  navigateMatches.forEach(m => {
    const route = m[1];
    if (route !== 'blog' && route !== 'blogEn' && route !== 'home' && !route.startsWith('article')) {
      // Might be a valid route, but let's check
      issues.push(`${file} navigates to ${route}`);
    }
  });
});

console.log("Internal Link Types:", issues.length ? [...new Set(issues)] : "None");
