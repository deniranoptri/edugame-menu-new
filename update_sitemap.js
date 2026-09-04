import fs from 'fs';
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf-8');

const today = new Date().toISOString().split('T')[0];

const newHubs = `
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
    <loc>https://papaninteraktif.com/game-edukasi-ifp</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

sitemap = sitemap.replace('</urlset>', newHubs);
fs.writeFileSync('public/sitemap.xml', sitemap);
