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
    if (node.name.text === 'generalGames' || node.name.text === 'kidsGames') {
      allGames = allGames.concat(extractGamesFromArray(node.initializer));
    }
  }
  ts.forEachChild(node, visit);
}

visit(sourceFile);

console.log('Total games:', allGames.length);
console.log('Games with URL:', allGames.filter(g => g.url).length);
console.log('Games without URL:', allGames.filter(g => !g.url).map(g => g.id));
