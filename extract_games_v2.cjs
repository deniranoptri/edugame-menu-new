const fs = require('fs');
const ts = require('typescript'); // use TS compiler API

const sourceFile = ts.createSourceFile(
  'App.tsx',
  fs.readFileSync('App.tsx', 'utf8'),
  ts.ScriptTarget.Latest,
  true
);

const games = [];

function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.text === 'generalGames' || node.name?.text === 'kidsGames') {
    if (node.initializer && ts.isArrayLiteralExpression(node.initializer)) {
      node.initializer.elements.forEach(el => {
        if (ts.isObjectLiteralExpression(el)) {
          const game = {};
          el.properties.forEach(prop => {
            if (ts.isPropertyAssignment(prop) && prop.name.text) {
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
          if (game.id) {
            game._arrayName = node.name.text;
            games.push(game);
          }
        }
      });
    }
  }
  ts.forEachChild(node, visit);
}

visit(sourceFile);

console.log(`Extracted ${games.length} games`);
fs.writeFileSync('games_parsed.json', JSON.stringify(games, null, 2));
