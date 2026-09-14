const fs = require('fs');
const appTsx = fs.readFileSync('./App.tsx', 'utf-8');

const regex = /if \(currentView === '([^']+)'\) return <([^ ]+)/g;
let match;
const viewToComponent = {};
while ((match = regex.exec(appTsx)) !== null) {
  viewToComponent[match[1]] = match[2];
}

console.log("Mapped components in App.tsx:");
console.log(Object.keys(viewToComponent).length);
