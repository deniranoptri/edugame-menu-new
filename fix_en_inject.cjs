const fs = require('fs');
const contentMap = require('./generated_content.json');

let appTsx = fs.readFileSync('App.tsx', 'utf8');

for (const [id, data] of Object.entries(contentMap)) {
  if (id === 'sciencelink') continue;
  if (!data.en || !data.en.howToPlay) continue;
  
  const startIndex = appTsx.indexOf(`{ id: '${id}', howToPlay:`);
  if (startIndex !== -1) {
    let nextId = appTsx.indexOf(`{ id: `, startIndex + 10);
    if (nextId === -1) nextId = appTsx.length;
    
    let block = appTsx.substring(startIndex, nextId);
    
    // We look for `en: {` and inject right after it.
    // Ensure we don't inject twice.
    if (block.includes('en: {') && !block.includes('en: { howToPlay:')) {
       const enInject = `howToPlay: ${JSON.stringify(data.en.howToPlay)}, educationalBenefits: ${JSON.stringify(data.en.educationalBenefits)}, `;
       block = block.replace(/en:\s*\{/, `en: { ${enInject}`);
       appTsx = appTsx.substring(0, startIndex) + block + appTsx.substring(nextId);
    }
  }
}

fs.writeFileSync('App.tsx', appTsx);
console.log('Fixed EN injection.');
