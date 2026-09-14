const fs = require('fs');
const appTsx = fs.readFileSync('./App.tsx', 'utf-8');

const registry = require('./seo/article-registry.json');
const enKeys = registry.filter(r => r.languagePair).map(r => r.articleKey + 'En');

const missingInRender = enKeys.filter(key => !appTsx.includes(`if (currentView === '${key}')`));

console.log("English keys missing from App.tsx render switch:", missingInRender);
