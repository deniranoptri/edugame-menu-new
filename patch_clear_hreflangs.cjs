const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf8');

const helper = `
const clearHreflangs = () => {
  const links = document.querySelectorAll('link[rel="alternate"][hreflang]');
  links.forEach(link => link.remove());
};
`;

const insertIndex = content.indexOf('const parseRoute');
content = content.substring(0, insertIndex) + helper + '\n' + content.substring(insertIndex);

// Add clearHreflangs to navigateTo
const navigateToIndex = content.indexOf('const navigateTo =');
const navigateToOpenBracket = content.indexOf('{', navigateToIndex);
content = content.substring(0, navigateToOpenBracket + 1) + '\n    clearHreflangs();' + content.substring(navigateToOpenBracket + 1);

// Add clearHreflangs to handlePopState
const popStateIndex = content.indexOf('const handlePopState = () => {');
const popStateOpenBracket = content.indexOf('{', popStateIndex);
content = content.substring(0, popStateOpenBracket + 1) + '\n      clearHreflangs();' + content.substring(popStateOpenBracket + 1);

fs.writeFileSync('App.tsx', content);
