const fs = require('fs');
const ts = require('typescript');

const sourceFile = ts.createSourceFile(
  'App.tsx',
  fs.readFileSync('App.tsx', 'utf8'),
  ts.ScriptTarget.Latest,
  true
);

let allGames = [];

function extractGamesFromArray(arrayNode) {
  const games = [];
  arrayNode.elements.forEach(el => {
    if (ts.isObjectLiteralExpression(el)) {
      const game = {};
      el.properties.forEach(prop => {
        if (ts.isPropertyAssignment(prop) && prop.name && prop.name.text) {
          if (ts.isStringLiteral(prop.initializer) || ts.isNoSubstitutionTemplateLiteral(prop.initializer)) {
            game[prop.name.text] = prop.initializer.text;
          } else if (ts.isObjectLiteralExpression(prop.initializer) && prop.name.text === 'en') {
             game.en = {};
             prop.initializer.properties.forEach(enProp => {
                if (ts.isPropertyAssignment(enProp) && enProp.name.text && ts.isStringLiteral(enProp.initializer)) {
                   game.en[enProp.name.text] = enProp.initializer.text;
                }
             });
          }
        }
      });
      if (game.id) games.push(game);
    }
  });
  return games;
}

function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.text) {
    if (node.name.text === 'generalGames') {
      console.log('Found generalGames');
      allGames = allGames.concat(extractGamesFromArray(node.initializer));
    }
    if (node.name.text === 'kidsGames') {
      console.log('Found kidsGames');
      allGames = allGames.concat(extractGamesFromArray(node.initializer));
    }
  }
  ts.forEachChild(node, visit);
}

visit(sourceFile);

console.log(`Total games found: ${allGames.length}`);
fs.writeFileSync('all_games.json', JSON.stringify(allGames, null, 2));
