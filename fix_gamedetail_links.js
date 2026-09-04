import fs from 'fs';

let content = fs.readFileSync('components/GameDetail.tsx', 'utf-8');

content = content.replace(
  "window.history.pushState({}, '', '/game-edukasi-ifp');",
  "window.history.pushState({}, '', isEn ? '/en/educational-games-for-interactive-flat-panels' : '/game-edukasi-ifp');"
);

fs.writeFileSync('components/GameDetail.tsx', content);
