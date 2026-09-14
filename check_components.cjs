const fs = require('fs');
const registry = require('./seo/article-registry.json');
const files = fs.readdirSync('./components').filter(f => f.startsWith('Article'));

const idKeys = registry.map(r => r.articleKey);
const enKeys = registry.filter(r => r.languagePair).map(r => r.articleKey + 'En');

const allExpectedKeys = [...idKeys, ...enKeys];
const actualKeys = files.map(f => f.replace('.tsx', ''));

const missing = allExpectedKeys.filter(k => !actualKeys.includes(k));
const extra = actualKeys.filter(k => !allExpectedKeys.includes(k));

console.log("Missing components:", missing);
console.log("Extra components:", extra);
