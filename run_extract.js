import fs from 'fs';

const gStr = fs.readFileSync('g.txt', 'utf-8');
const kStr = fs.readFileSync('k.txt', 'utf-8');

const jsCode = `
export const games = [...${gStr}, ...${kStr}];
`;
fs.writeFileSync('games_export.js', jsCode);
