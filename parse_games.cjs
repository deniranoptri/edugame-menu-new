const fs = require('fs');
const code = fs.readFileSync('App.tsx', 'utf-8');

function extractArray(name) {
  const match = code.match(new RegExp(`const ${name}: GameConfigWithTags\\[\\] = (\\[[\\s\\S]*?\\]);\\s*//`));
  if (match) {
    const arrayStr = match[1];
    try {
      const arr = eval(arrayStr);
      return arr;
    } catch (e) {
      console.log('Error parsing ' + name, e);
    }
  }
  return [];
}
const gGames = extractArray('generalGames');
const kGames = extractArray('kidsGames');
const games = [...gGames, ...kGames];
fs.writeFileSync('all_games.json', JSON.stringify(games, null, 2));
