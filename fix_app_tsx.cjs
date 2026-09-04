const fs = require('fs');

let content = fs.readFileSync('App.tsx', 'utf8');

// 1. Remove all injected howToPlay and educationalBenefits from the file entirely.
// Note: we want to preserve sciencelink's original howToPlay and educationalBenefits,
// but since I didn't back it up, I'll remove all and then manually restore sciencelink's from phase 3a memory or regenerate it safely.

// Actually, sciencelink was skipped in `update_games.cjs`:
// `if (id === 'sciencelink') continue;`
// So sciencelink's arrays are STILL INTACT and formatted correctly!
// Only the OTHER games got the broken injection.

// So we can safely remove `howToPlay: ["..."],` and `educationalBenefits: ["..."],`
// EXCEPT for sciencelink.
// Wait, regex might be tricky. Let's just find the exact strings we injected using contentMap.

const contentMap = require('./generated_content.json');

for (const [id, data] of Object.entries(contentMap)) {
  if (id === 'sciencelink') continue;

  const hpId = `howToPlay: ${JSON.stringify(data.howToPlay)},`;
  const ebId = `educationalBenefits: ${JSON.stringify(data.educationalBenefits)},`;
  const hpEn = `howToPlay: ${JSON.stringify(data.en.howToPlay)},`;
  const ebEn = `educationalBenefits: ${JSON.stringify(data.en.educationalBenefits)},`;

  // We simply replace these literal strings with empty string everywhere in the file!
  content = content.replace(new RegExp(escapeRegExp(hpId), 'g'), '');
  content = content.replace(new RegExp(escapeRegExp(ebId), 'g'), '');
  content = content.replace(new RegExp(escapeRegExp(hpEn), 'g'), '');
  content = content.replace(new RegExp(escapeRegExp(ebEn), 'g'), '');
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// Write the cleaned content back
fs.writeFileSync('App.tsx', content);
console.log('Cleaned up corrupted arrays.');
