const fs = require('fs');
const contentMap = require('./generated_content.json');

let appTsx = fs.readFileSync('App.tsx', 'utf8');

// Function to safely inject the new fields into a game object string.
// We'll use a regex that matches the start of each object { id: '...', ... }
// and injects the howToPlay and educationalBenefits right after the description or tags.

for (const [id, data] of Object.entries(contentMap)) {
  if (id === 'sciencelink') continue; // Do not touch sciencelink
  
  // Create the string to inject for ID
  const idInject = `\n    howToPlay: ${JSON.stringify(data.howToPlay)},` +
                   `\n    educationalBenefits: ${JSON.stringify(data.educationalBenefits)},`;
                   
  // Create the string to inject for EN inside the en block
  const enInject = `\n      howToPlay: ${JSON.stringify(data.en.howToPlay)},` +
                   `\n      educationalBenefits: ${JSON.stringify(data.en.educationalBenefits)},`;

  // We need to find the specific game block.
  // We look for `{ id: 'GAME_ID',` (with potential spaces)
  
  const blockRegex = new RegExp(`(\\{\\s*id:\\s*'${id}'[\\s\\S]*?\\})`, 'g');
  
  appTsx = appTsx.replace(blockRegex, (match) => {
    // Check if it's already populated to avoid double inject
    if (match.includes('howToPlay: [')) return match;

    // We have the full game block string.
    // 1. Inject ID fields. Let's put them before `en: {` if it exists, or before the closing `}` if not.
    let newMatch = match;
    
    if (newMatch.includes('en: {')) {
      // Find `en: {` and inject before it
      newMatch = newMatch.replace(/en:\s*\{/, idInject + '\n    en: {');
    } else {
      // Inject before the last `}`
      newMatch = newMatch.replace(/\s*\}$/, idInject + '\n  }');
    }
    
    // 2. Inject EN fields. If `en: {` exists, inject inside it.
    if (newMatch.includes('en: {')) {
       // Let's inject it right after `en: {`
       newMatch = newMatch.replace(/en:\s*\{/, `en: {` + enInject);
    }
    
    return newMatch;
  });
}

fs.writeFileSync('App.tsx', appTsx);
console.log('App.tsx updated successfully.');
