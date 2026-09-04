import fs from 'fs';

let content = fs.readFileSync('components/HubIfp.tsx', 'utf-8');

content = content.replace(
  "navigateTo('gameDetail', `/game/${encodeURIComponent(id)}`);",
  "navigateTo('gameDetail', locale === 'en' ? `/en/game/${encodeURIComponent(id)}` : `/game/${encodeURIComponent(id)}`);"
);

content = content.replace(
  '<a href="/panduan/penggunaan-ifp-papan-interaktif-digital" onClick={(e) => { e.preventDefault(); navigateTo(\'guideIfp\', \'/panduan/penggunaan-ifp-papan-interaktif-digital\'); }}>\n                📖 Baca: Panduan Menggunakan IFP di Kelas\n              </a>',
  `<a href={locale === "en" ? "/en/guides/using-educational-games-on-interactive-flat-panels" : "/panduan/penggunaan-ifp-papan-interaktif-digital"} onClick={(e) => { e.preventDefault(); navigateTo('guideIfp', locale === "en" ? "/en/guides/using-educational-games-on-interactive-flat-panels" : "/panduan/penggunaan-ifp-papan-interaktif-digital"); }}>
                {locale === "en" ? "📖 Guide: Using Educational Games on IFPs" : "📖 Baca: Panduan Menggunakan IFP di Kelas"}
              </a>`
);

content = content.replace(
  "<MenuCard config={game} onClick={() => handleCardClick(game.id)} />",
  "<MenuCard config={game} onClick={() => handleCardClick(game.id)} locale={locale} />"
);

fs.writeFileSync('components/HubIfp.tsx', content);
