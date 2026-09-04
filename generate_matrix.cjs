const fs = require('fs');

// We can extract all games by reading App.tsx, but parsing TS in JS is messy.
// Let's use a regex to grab the game objects.
const content = fs.readFileSync('App.tsx', 'utf8');
const gamesText = content.match(/const (generalGames|kidsGames): GameConfigWithTags\[\] = \[([\s\S]*?)\];/g);

let allGames = [];
if (gamesText) {
  gamesText.forEach(block => {
    // Basic JS evaluation of the array body isn't possible because of TS and references.
    // Let's do a rough regex parse for each game.
    const gameBlocks = block.match(/\{\s*id:\s*'[^']+'[\s\S]*?(?=\},\s*\{|\}\s*\])/g);
    if (gameBlocks) {
      gameBlocks.forEach(gb => {
        const idMatch = gb.match(/id:\s*'([^']+)'/);
        const id = idMatch ? idMatch[1] : '';
        const descMatch = gb.match(/description:\s*"([^"]+)"/);
        const desc = descMatch ? descMatch[1] : (gb.match(/description:\s*'([^']+)'/) ? gb.match(/description:\s*'([^']+)'/)[1] : '');
        
        const focusMatch = gb.match(/learningFocus:\s*"([^"]+)"/);
        const focus = focusMatch ? focusMatch[1] : (gb.match(/learningFocus:\s*'([^']+)'/) ? gb.match(/learningFocus:\s*'([^']+)'/)[1] : '');
        
        const audMatch = gb.match(/audience:\s*"([^"]+)"/);
        const aud = audMatch ? audMatch[1] : (gb.match(/audience:\s*'([^']+)'/) ? gb.match(/audience:\s*'([^']+)'/)[1] : '');
        
        const subMatch = gb.match(/subject:\s*"([^"]+)"/);
        const sub = subMatch ? subMatch[1] : (gb.match(/subject:\s*'([^']+)'/) ? gb.match(/subject:\s*'([^']+)'/)[1] : '');

        const enMatch = gb.match(/en:\s*\{[\s\S]*?\}/);
        const hasEn = !!enMatch;
        let enDesc = ''; let enFocus = '';
        if(hasEn) {
           const eDMatch = enMatch[0].match(/description:\s*'([^']+)'/);
           enDesc = eDMatch ? eDMatch[1] : '';
           const eFMatch = enMatch[0].match(/learningFocus:\s*'([^']+)'/);
           enFocus = eFMatch ? eFMatch[1] : '';
        }
        
        allGames.push({
          id,
          descLen: desc.length,
          focusLen: focus.length,
          audLen: aud.length,
          subLen: sub.length,
          hasEn,
          enDescLen: enDesc.length,
          enFocusLen: enFocus.length
        });
      });
    }
  });
}

console.log("Total parsed:", allGames.length);
// Generate table
let matrix = "| Game | Description | Learning Focus | Audience | Subject | Existing Detail Depth | Risk |\n";
matrix += "|------|-------------|----------------|----------|---------|------------------------|------|\n";
allGames.forEach(g => {
  const depth = g.descLen + g.focusLen;
  let risk = "🔴 CRITICALLY THIN";
  if (depth > 100) risk = "🟡 THIN / NEEDS REVIEW";
  if (depth > 200) risk = "🟢 ADEQUATE";
  
  matrix += `| ${g.id} | ${g.descLen ? 'Yes ('+g.descLen+'c)' : 'No'} | ${g.focusLen ? 'Yes ('+g.focusLen+'c)' : 'No'} | ${g.audLen ? 'Yes' : 'No'} | ${g.subLen ? 'Yes' : 'No'} | ${depth} chars | ${risk} |\n`;
});

fs.writeFileSync('matrix.md', matrix);

let enMatrix = "| Game | ID completeness | EN completeness | Missing EN fields |\n";
enMatrix += "|------|------------------|-----------------|-------------------|\n";
allGames.forEach(g => {
  const idComplete = (g.descLen && g.focusLen && g.audLen && g.subLen) ? 'High' : 'Medium';
  const enComplete = g.hasEn ? 'Yes' : 'No';
  const missing = [];
  if (g.hasEn) {
    if (!g.enDescLen) missing.push('description');
    if (!g.enFocusLen) missing.push('learningFocus');
  } else {
    missing.push('ALL');
  }
  
  enMatrix += `| ${g.id} | ${idComplete} | ${enComplete} | ${missing.join(', ')} |\n`;
});
fs.writeFileSync('en_matrix.md', enMatrix);

