const fs = require('fs');
const files = fs.readdirSync('./components').filter(f => f.startsWith('Article'));
const issues = [];

files.forEach(file => {
  const content = fs.readFileSync('./components/' + file, 'utf-8');
  if (!content.includes('scriptToRemove.remove()') && !content.includes('script.remove()')) {
    issues.push(file);
  }
});
console.log("Cleanup issues:", issues.length ? issues : "None");
