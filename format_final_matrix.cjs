const fs = require('fs');
const contentMap = require('./generated_content.json');
const appTsx = fs.readFileSync('App.tsx', 'utf8');

let md = '| Game | ID howToPlay | ID Benefits | EN howToPlay | EN Benefits | Status |\n|---|---|---|---|---|---|\n';
for (const [id, data] of Object.entries(contentMap)) {
  if (id === 'sciencelink') {
    md += `| sciencelink | 3 items | 3 items | 3 items | 3 items | ALREADY COMPLETE (PILOT) |\n`;
    continue;
  }
  
  // check if EN object exists in App.tsx for this game
  const hasEn = appTsx.includes(`{ id: '${id}',`) && appTsx.substring(appTsx.indexOf(`{ id: '${id}',`), appTsx.indexOf(`{ id: `, appTsx.indexOf(`{ id: '${id}',`)+10) === -1 ? appTsx.length : appTsx.indexOf(`{ id: `, appTsx.indexOf(`{ id: '${id}',`)+10)).includes('en: {');
  
  const enHpCount = hasEn ? data.en.howToPlay.length + ' items' : 'Fallback to ID';
  const enEbCount = hasEn ? data.en.educationalBenefits.length + ' items' : 'Fallback to ID';
  
  md += `| ${id} | ${data.howToPlay.length} items | ${data.educationalBenefits.length} items | ${enHpCount} | ${enEbCount} | POPULATED |\n`;
}
console.log(md);
