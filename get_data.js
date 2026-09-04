import fs from 'fs';
const code = fs.readFileSync('App.tsx', 'utf-8');

const s1 = code.indexOf('const generalGames: GameConfigWithTags[] = [');
const e1 = code.indexOf('];', s1) + 1;
const g1 = code.substring(s1, e1).replace('const generalGames: GameConfigWithTags[] = ', '');

const s2 = code.indexOf('const kidsGames: GameConfigWithTags[] = [');
const e2 = code.indexOf('];', s2) + 1;
const g2 = code.substring(s2, e2).replace('const kidsGames: GameConfigWithTags[] = ', '');

fs.writeFileSync('games_export.js', `export const games = [...${g1}, ...${g2}];`);
