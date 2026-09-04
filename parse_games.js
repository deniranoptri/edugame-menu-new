const fs = require('fs');
const ts = require('typescript');
const code = fs.readFileSync('App.tsx', 'utf-8');

function extractArray(name) {
  const match = code.match(new RegExp(`const ${name}: GameConfigWithTags\\[\\] = (\\[[\\s\\S]*?\\]);`));
  if (match) {
    // A bit hacky: we can evaluate it if we stub out some things, but better to just use a clean eval environment
    const arrayStr = match[1];
    // Remove TS types and other stuff if any
    try {
      const arr = eval(arrayStr);
      return arr;
    } catch (e) {
      console.log('Error parsing ' + name, e);
    }
  }
  return [];
}
const games = [...extractArray('generalGames'), ...extractArray('kidsGames')];
fs.writeFileSync('all_games.json', JSON.stringify(games, null, 2));
