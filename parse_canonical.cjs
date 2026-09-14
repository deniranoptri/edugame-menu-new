const fs = require('fs');
const files = fs.readdirSync('./components').filter(f => f.startsWith('Article'));
const issues = [];

files.forEach(file => {
  const content = fs.readFileSync('./components/' + file, 'utf-8');
  const canonicalMatch = content.match(/canonical\.setAttribute\(\s*['"]href['"]\s*,\s*(.*?)\)/);
  if (canonicalMatch) {
    const val = canonicalMatch[1].trim();
    if (val.includes('jurnal-guru') && file.endsWith('En.tsx')) {
       // Only allowed if it's the right logic
       if (!val.includes('/en/journal')) {
         issues.push(`${file} canonical points to ID: ${val}`);
       }
    }
  }
});

console.log("Canonical Logic Issues:");
console.log(issues.length ? issues : "None");
