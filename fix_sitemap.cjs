const fs = require('fs');
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const idUrl = '    <loc>https://papaninteraktif.com/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas</loc>\n    <lastmod>2026-09-13</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>';
const enUrl = `  <url>
    <loc>https://papaninteraktif.com/en/journal/differentiated-learning-using-interactive-flat-panel</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;

sitemap = sitemap.replace(idUrl, idUrl + '\n' + enUrl);
fs.writeFileSync('public/sitemap.xml', sitemap);
