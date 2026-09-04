import fs from 'fs';

let content = fs.readFileSync('components/GameDetail.tsx', 'utf-8');

// The original line is probably: const currentUrl = `${window.location.origin}/game/${encodeURIComponent(game.id)}`;
content = content.replace(/const currentUrl = `\${window\.location\.origin}\/game\/\${encodeURIComponent\(game\.id\)}`;/g, 
`    const baseUrl = window.location.origin;
    const idPath = \`/game/\${game.id}\`;
    const enPath = \`/en/game/\${game.id}\`;
    const currentUrl = baseUrl + (locale === 'en' ? enPath : idPath);
    const altUrl = baseUrl + (locale === 'en' ? idPath : enPath);`);

// And we remove the duplicate declaration I added earlier
content = content.replace(/    const baseUrl = window\.location\.origin;\n    const idPath = `\/game\/\${game\.id}`;\n    const enPath = `\/en\/game\/\${game\.id}`;\n    \n    const currentUrl = baseUrl \+ \(locale === 'en' \? enPath : idPath\);\n    const altUrl = baseUrl \+ \(locale === 'en' \? idPath : enPath\);/g, '');

fs.writeFileSync('components/GameDetail.tsx', content);
