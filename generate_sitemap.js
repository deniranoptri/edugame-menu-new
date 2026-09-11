import fs from 'fs';

const games = [
  'nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional',
  'jagoan-kata', 'geo-squad', 'ruang-io', 'cocok-logi', 'mesin-koleksi', 'pendekar-balon',
  'detektif-cilik', 'mewarnai', 'belajar-angka', 'Aksi Ambulans', 'Gass Damkar', 'Jalur Huruf',
  'Petualangan Satu Garis', 'gabung-ceria', 'dunia-hewan', 'rimba-pedia', 'si-pemanah',
  'celestial-weaver', 'tanzib', 'hijaiyah-match'
];

const ifpGames = ['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional'];

const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://papaninteraktif.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="id" href="https://papaninteraktif.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://papaninteraktif.com/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://papaninteraktif.com/" />
  </url>
  <url>
    <loc>https://papaninteraktif.com/en/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="id" href="https://papaninteraktif.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://papaninteraktif.com/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://papaninteraktif.com/" />
  </url>
  <url>
    <loc>https://papaninteraktif.com/game-edukasi-anak</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://papaninteraktif.com/game-logika</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://papaninteraktif.com/jurnal-guru</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://papaninteraktif.com/panduan/memilih-game-edukasi-anak</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://papaninteraktif.com/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://papaninteraktif.com/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://papaninteraktif.com/privacy-policy</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
`;

// Add Hub IFP (with hreflang)
xml += `  <url>
    <loc>https://papaninteraktif.com/game-edukasi-ifp</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="id" href="https://papaninteraktif.com/game-edukasi-ifp" />
    <xhtml:link rel="alternate" hreflang="en" href="https://papaninteraktif.com/en/educational-games-for-interactive-flat-panels" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://papaninteraktif.com/game-edukasi-ifp" />
  </url>
  <url>
    <loc>https://papaninteraktif.com/en/educational-games-for-interactive-flat-panels</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="id" href="https://papaninteraktif.com/game-edukasi-ifp" />
    <xhtml:link rel="alternate" hreflang="en" href="https://papaninteraktif.com/en/educational-games-for-interactive-flat-panels" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://papaninteraktif.com/game-edukasi-ifp" />
  </url>
`;

// Add Guide IFP (with hreflang)
xml += `  <url>
    <loc>https://papaninteraktif.com/panduan/penggunaan-ifp-papan-interaktif-digital</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="id" href="https://papaninteraktif.com/panduan/penggunaan-ifp-papan-interaktif-digital" />
    <xhtml:link rel="alternate" hreflang="en" href="https://papaninteraktif.com/en/guides/using-educational-games-on-interactive-flat-panels" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://papaninteraktif.com/panduan/penggunaan-ifp-papan-interaktif-digital" />
  </url>
  <url>
    <loc>https://papaninteraktif.com/en/guides/using-educational-games-on-interactive-flat-panels</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="id" href="https://papaninteraktif.com/panduan/penggunaan-ifp-papan-interaktif-digital" />
    <xhtml:link rel="alternate" hreflang="en" href="https://papaninteraktif.com/en/guides/using-educational-games-on-interactive-flat-panels" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://papaninteraktif.com/panduan/penggunaan-ifp-papan-interaktif-digital" />
  </url>
`;

for (const game of games) {
  const encId = encodeURIComponent(game);
  
  if (ifpGames.includes(game)) {
    xml += `  <url>
    <loc>https://papaninteraktif.com/game/${encId}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="id" href="https://papaninteraktif.com/game/${encId}" />
    <xhtml:link rel="alternate" hreflang="en" href="https://papaninteraktif.com/en/game/${encId}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://papaninteraktif.com/game/${encId}" />
  </url>
  <url>
    <loc>https://papaninteraktif.com/en/game/${encId}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="id" href="https://papaninteraktif.com/game/${encId}" />
    <xhtml:link rel="alternate" hreflang="en" href="https://papaninteraktif.com/en/game/${encId}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://papaninteraktif.com/game/${encId}" />
  </url>
`;
  } else {
    xml += `  <url>
    <loc>https://papaninteraktif.com/game/${encId}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  }
}

xml += `</urlset>\n`;

fs.writeFileSync('public/sitemap.xml', xml);
