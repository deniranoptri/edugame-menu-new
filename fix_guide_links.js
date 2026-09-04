import fs from 'fs';

let content = fs.readFileSync('components/GuideIFP.tsx', 'utf-8');

content = content.replace(
  'href="/game-edukasi-ifp"',
  'href={locale === "en" ? "/en/educational-games-for-interactive-flat-panels" : "/game-edukasi-ifp"}'
);

content = content.replace(
  "onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }}",
  "onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', locale === 'en' ? '/en/educational-games-for-interactive-flat-panels' : '/game-edukasi-ifp'); }}"
);

fs.writeFileSync('components/GuideIFP.tsx', content);
