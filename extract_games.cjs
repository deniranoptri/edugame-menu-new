const fs = require('fs');

const code = fs.readFileSync('App.tsx', 'utf8');

// We will extract just the names and descriptions to see what we are working with
const games = [];
let match;
const regex = /id:\s*'([^']+)',\s*title:\s*'([^']+)',[\s\S]*?description:\s*"([^"]+)"([\s\S]*?)(?=\},?\s*\{|\}\s*\])/g;

while ((match = regex.exec(code)) !== null) {
  games.push({
    id: match[1],
    title: match[2],
    desc: match[3],
    rest: match[4]
  });
}

console.log(`Found ${games.length} games (using simple regex)`);
fs.writeFileSync('games_dump.json', JSON.stringify(games, null, 2));
