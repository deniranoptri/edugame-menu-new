const games = require('./all_games.json');
console.log(`Total: ${games.length}`);
console.log(games.map(g => g.id).join('\n'));
