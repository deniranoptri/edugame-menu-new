const fs = require('fs');
const results = require('./audit_results.json');
let md = '| Game | Description | How to Play | Benefits | ID | EN | Status |\n|---|---|---|---|---|---|---|\n';
results.forEach(r => {
  md += `| ${r.id} | ${r.hasDesc ? 'Y' : 'N'} | ${r.hasHp ? 'Y' : 'N'} | ${r.hasEb ? 'Y' : 'N'} | Y | ${r.hasEn ? 'Y' : 'N/A'} | ${r.status} |\n`;
});
console.log(md);
