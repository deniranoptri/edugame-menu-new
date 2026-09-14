const fs = require('fs');
const appTsx = fs.readFileSync('./App.tsx', 'utf-8');
const files = fs.readdirSync('./components').filter(f => f.startsWith('Article'));

const mappedComponents = [];
const regex = /<([A-Za-z0-9_]+)/g;
let match;
while ((match = regex.exec(appTsx)) !== null) {
  if (match[1].startsWith('Article')) {
    mappedComponents.push(match[1]);
  }
}

const unmapped = files.map(f => f.replace('.tsx', '')).filter(f => !mappedComponents.includes(f));
console.log("Unmapped components:", unmapped);
