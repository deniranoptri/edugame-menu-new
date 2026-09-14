const fs = require('fs');
const files = fs.readdirSync('./components').filter(f => f.startsWith('Article'));
const issues = [];

files.forEach(file => {
  const content = fs.readFileSync('./components/' + file, 'utf-8');
  if (!content.includes('.remove()')) {
    issues.push(file);
  }
});
console.log("No .remove() calls:", issues.length ? issues : "None");
