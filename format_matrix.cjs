const contentMap = require('./generated_content.json');
let md = '| Game | ID howToPlay | ID Benefits | EN howToPlay | EN Benefits | Status |\n|---|---|---|---|---|---|\n';
for (const [id, data] of Object.entries(contentMap)) {
  if (id === 'sciencelink') {
    md += `| sciencelink | 3 items | 3 items | 3 items | 3 items | ALREADY COMPLETE |\n`;
  } else {
    md += `| ${id} | ${data.howToPlay.length} items | ${data.educationalBenefits.length} items | ${data.en.howToPlay.length} items | ${data.en.educationalBenefits.length} items | POPULATED |\n`;
  }
}
console.log(md);
