const fs = require('fs');
const appTsx = fs.readFileSync('./App.tsx', 'utf-8');

const regex = /return \{ locale, type: '([^']+)' \};/g;
let match;
const parsedTypes = new Set();
while ((match = regex.exec(appTsx)) !== null) {
  if (match[1].startsWith('article') && !match[1].endsWith('En')) {
    parsedTypes.add(match[1]);
  }
}

const renderedTypes = new Set();
const regex2 = /if \(currentView === '([^']+)'\) return/g;
let match2;
while ((match2 = regex2.exec(appTsx)) !== null) {
  if (match2[1].startsWith('article') && !match2[1].endsWith('En')) {
    renderedTypes.add(match2[1]);
  }
}

const notRendered = [...parsedTypes].filter(x => !renderedTypes.has(x));

console.log("ID Types parsed but NOT rendered:", notRendered);
