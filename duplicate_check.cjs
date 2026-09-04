const fs = require('fs');
const games = require('./all_games.json');

const hpSet = new Map();
const ebSet = new Map();
let duplicates = [];

games.forEach(g => {
  if (g.howToPlay) {
    g.howToPlay.forEach(item => {
      if (hpSet.has(item)) duplicates.push({ type: 'howToPlay', item, games: [hpSet.get(item), g.id] });
      else hpSet.set(item, g.id);
    });
  }
  if (g.educationalBenefits) {
    g.educationalBenefits.forEach(item => {
      if (ebSet.has(item)) duplicates.push({ type: 'educationalBenefits', item, games: [ebSet.get(item), g.id] });
      else ebSet.set(item, g.id);
    });
  }
});

console.log("Exact duplicates found:", duplicates.length);
if (duplicates.length > 0) console.log(JSON.stringify(duplicates, null, 2));
