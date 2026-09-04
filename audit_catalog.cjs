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
          } else if (ts.isArrayLiteralExpression(prop.initializer)) {
            game[prop.name.text] = prop.initializer.elements.map(e => e.text);
          } else if (ts.isObjectLiteralExpression(prop.initializer) && prop.name.text === 'en') {
             game.en = {};
             prop.initializer.properties.forEach(enProp => {
                if (ts.isPropertyAssignment(enProp) && enProp.name.text) {
                   if (ts.isStringLiteral(enProp.initializer)) {
                     game.en[enProp.name.text] = enProp.initializer.text;
                   } else if (ts.isArrayLiteralExpression(enProp.initializer)) {
                     game.en[enProp.name.text] = enProp.initializer.elements.map(e => e.text);
                   }
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
    if (node.name.text === 'generalGames' || node.name.text === 'kidsGames') {
      allGames = allGames.concat(extractGamesFromArray(node.initializer));
    }
  }
  ts.forEachChild(node, visit);
}

visit(sourceFile);

let complete = 0, partial = 0, missing = 0;
const results = allGames.map(g => {
  const hasDesc = !!g.description;
  const hasLF = !!g.learningFocus;
  const hasHp = !!g.howToPlay && g.howToPlay.length > 0;
  const hasEb = !!g.educationalBenefits && g.educationalBenefits.length > 0;
  const hasEn = !!g.en;
  const hasEnHp = hasEn && !!g.en.howToPlay && g.en.howToPlay.length > 0;
  const hasEnEb = hasEn && !!g.en.educationalBenefits && g.en.educationalBenefits.length > 0;

  let status = '🔴 MISSING';
  if (hasDesc && hasLF && hasHp && hasEb) {
    if (hasEn) {
      status = (hasEnHp && hasEnEb) ? '🟢 COMPLETE' : '🟡 PARTIAL';
    } else {
      status = '🟢 COMPLETE'; // If no EN requested initially, ID is complete
    }
  }
  
  if (status === '🟢 COMPLETE') complete++;
  else if (status === '🟡 PARTIAL') partial++;
  else missing++;

  return { id: g.id, status, hasDesc, hasHp, hasEb, hasEn, hasEnHp, hasEnEb };
});

console.log(`TOTAL ACTIVE GAMES = ${allGames.length}`);
console.log(`COMPLETE: ${complete}, PARTIAL: ${partial}, MISSING: ${missing}`);
fs.writeFileSync('audit_results.json', JSON.stringify(results, null, 2));
