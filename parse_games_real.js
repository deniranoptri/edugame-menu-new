import fs from 'fs';
const code = fs.readFileSync('App.tsx', 'utf-8');

function extractArray(name) {
  const startIdx = code.indexOf(`const ${name}: GameConfigWithTags[] =`);
  const bracketStart = code.indexOf('[', startIdx);
  let bracketEnd = bracketStart;
  let balance = 1;
  for (let i = bracketStart + 1; i < code.length; i++) {
    if (code[i] === '[') balance++;
    if (code[i] === ']') balance--;
    if (balance === 0) {
      bracketEnd = i;
      break;
    }
  }
  const arrStr = code.substring(bracketStart, bracketEnd + 1);
  return arrStr;
}

const gStr = extractArray('generalGames');
const kStr = extractArray('kidsGames');

const jsCode = `
export const games = [...${gStr}, ...${kStr}];
`;
fs.writeFileSync('games_export.js', jsCode);
