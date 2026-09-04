const fs = require('fs');
const contentMap = require('./generated_content.json');

let appTsx = fs.readFileSync('App.tsx', 'utf8');

for (const [id, data] of Object.entries(contentMap)) {
  if (id === 'sciencelink') continue;
  
  const idInject = `howToPlay: ${JSON.stringify(data.howToPlay)}, educationalBenefits: ${JSON.stringify(data.educationalBenefits)}, `;
  
  // 1. Inject ID fields. We look for `{ id: '${id}', title:`
  const targetId = `{ id: '${id}', title:`;
  if (appTsx.includes(targetId)) {
     appTsx = appTsx.replace(targetId, `{ id: '${id}', ${idInject}title:`);
  } else {
     console.log(`Warning: could not find ${targetId}`);
  }
  
  // 2. Inject EN fields. We need to find the specific `en: { title:` for this game.
  // We can't just replace globally. We must find the game block again.
  // Since we just injected `howToPlay`, the block starts with `{ id: '${id}', howToPlay:`
  // Let's find that block, then replace `en: { title:` inside it.
  
  const startIndex = appTsx.indexOf(`{ id: '${id}', howToPlay:`);
  if (startIndex !== -1) {
    let nextBrace = appTsx.indexOf('},', startIndex);
    // Be careful, there could be nested braces (like arrays or objects).
    // Let's just find the FIRST `en: { title:` after startIndex and BEFORE the next `{ id:` (or end of array).
    let nextId = appTsx.indexOf(`{ id: `, startIndex + 10);
    if (nextId === -1) nextId = appTsx.length;
    
    let block = appTsx.substring(startIndex, nextId);
    if (block.includes(`en: { title:`)) {
       const enInject = `howToPlay: ${JSON.stringify(data.en.howToPlay)}, educationalBenefits: ${JSON.stringify(data.en.educationalBenefits)}, `;
       block = block.replace(`en: { title:`, `en: { ${enInject}title:`);
       appTsx = appTsx.substring(0, startIndex) + block + appTsx.substring(nextId);
    }
  }
}

fs.writeFileSync('App.tsx', appTsx);
console.log('Precise update complete.');
