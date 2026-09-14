const fs = require('fs');
const files = fs.readdirSync('./components').filter(f => f.startsWith('Article'));
const issues = [];

files.forEach(file => {
  const content = fs.readFileSync('./components/' + file, 'utf-8');
  const hasCanonical = content.includes('rel="canonical"');
  const hasHreflangId = content.includes('hreflang="id"');
  const hasHreflangEn = content.includes('hreflang="en"');
  const hasXDefault = content.includes('hreflang="x-default"');

  const enArticle = file.endsWith('En.tsx');

  if (!hasCanonical) issues.push(`${file} missing canonical`);
  // Not all articles have language pairs
  if (hasHreflangId || hasHreflangEn || hasXDefault) {
    if (!hasHreflangId) issues.push(`${file} missing hreflang="id"`);
    if (!hasHreflangEn) issues.push(`${file} missing hreflang="en"`);
    if (!hasXDefault) issues.push(`${file} missing hreflang="x-default"`);
  }
});

console.log("SEO Tag Issues:");
console.log(issues.length ? issues : "None");
