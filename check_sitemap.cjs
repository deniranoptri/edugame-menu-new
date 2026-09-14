const fs = require('fs');
const sitemap = fs.readFileSync('./public/sitemap.xml', 'utf-8');
const registry = require('./seo/article-registry.json');

const sitemapUrls = sitemap.match(/<loc>(.*?)<\/loc>/g).map(s => s.replace(/<\/?loc>/g, ''));

const expectedUrls = [];
registry.forEach(r => {
  if (r.idUrl) expectedUrls.push(r.idUrl);
  if (r.languagePair && r.enUrl) expectedUrls.push(r.enUrl);
});

const missing = expectedUrls.filter(u => !sitemapUrls.includes(u));
const extra = sitemapUrls.filter(u => !expectedUrls.includes(u) && u.includes('/jurnal-guru') || u.includes('/en/journal'));

console.log("Missing from sitemap:", missing);
console.log("Extra in sitemap:", extra);
