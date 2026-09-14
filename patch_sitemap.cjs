const fs = require('fs');
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

if (!sitemap.includes('<loc>https://papaninteraktif.com/en/journal</loc>')) {
  const newEntry = `
  <url>
    <loc>https://papaninteraktif.com/en/journal</loc>
    <lastmod>2026-09-14</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;
  
  sitemap = sitemap.replace('</urlset>', newEntry + '\n</urlset>');
  fs.writeFileSync('public/sitemap.xml', sitemap);
}
