const fs = require('fs');

function updateAudience(content, isKids) {
  // We use regex to find audience: "..." and replace it based on whether it's in kidsGames or generalGames.
  // Actually, it's easier to just do it based on string replacement for specific strings, but it's safer if we can just parse the AST or use a simple regex on the object.
  // Let's do it with regex.
  return content;
}

let appContent = fs.readFileSync('App.tsx', 'utf8');

// The arrays are defined as const generalGames = [...] and const kidsGames = [...]
let generalGamesStr = appContent.substring(appContent.indexOf('const generalGames: GameConfigWithTags[] = ['), appContent.indexOf('const kidsGames: GameConfigWithTags[] = ['));
let kidsGamesStr = appContent.substring(appContent.indexOf('const kidsGames: GameConfigWithTags[] = ['), appContent.indexOf('const ModeSwitcher ='));

generalGamesStr = generalGamesStr.replace(/audience:\s*"[^"]+"/g, 'audience: "SD, SMP, SMA"');
kidsGamesStr = kidsGamesStr.replace(/audience:\s*"[^"]+"/g, 'audience: "PAUD, SD"');

appContent = appContent.substring(0, appContent.indexOf('const generalGames: GameConfigWithTags[] = [')) + generalGamesStr + kidsGamesStr + appContent.substring(appContent.indexOf('const ModeSwitcher ='));

fs.writeFileSync('App.tsx', appContent);

let allGamesContent = fs.readFileSync('all_games.json', 'utf8');
let allGames = JSON.parse(allGamesContent);

let appTsxContent = fs.readFileSync('App.tsx', 'utf8');
// To be perfectly safe, let's just make the changes to all_games.json using the logic:
allGames.forEach(game => {
    // If it's a kids game (id is in kidsGames)
    if (kidsGamesStr.includes(`id: '${game.id}'`)) {
        game.audience = "PAUD, SD";
    } else {
        game.audience = "SD, SMP, SMA";
    }
});

fs.writeFileSync('all_games.json', JSON.stringify(allGames, null, 2));
