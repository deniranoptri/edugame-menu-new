const fs = require('fs');

const registry = require('./seo/article-registry.json');
const sitemap = fs.readFileSync('./public/sitemap.xml', 'utf-8');
const appTsx = fs.readFileSync('./App.tsx', 'utf-8');
const files = fs.readdirSync('./components').filter(f => f.startsWith('Article'));

const idArticles = registry.filter(r => r.idSlug);
const enArticles = registry.filter(r => r.languagePair && r.enSlug);

const idRoutesMatch = idArticles.map(r => appTsx.includes(`'jurnal-guru/${r.idSlug}'`));
const enRoutesMatch = enArticles.map(r => appTsx.includes(`'journal/${r.enSlug}'`));

const sitemapUrls = sitemap.match(/<loc>(.*?)<\/loc>/g).map(s => s.replace(/<\/?loc>/g, ''));

const sitemapIdMatches = idArticles.map(r => sitemapUrls.includes(r.idUrl));
const sitemapEnMatches = enArticles.map(r => sitemapUrls.includes(r.enUrl));

console.log("ID Articles (Registry):", idArticles.length);
console.log("EN Articles (Registry):", enArticles.length);
console.log("Bilingual Pairs:", enArticles.length);
console.log("ID Routes found in App.tsx:", idRoutesMatch.filter(Boolean).length);
console.log("EN Routes found in App.tsx:", enRoutesMatch.filter(Boolean).length);
console.log("ID URLs in Sitemap:", sitemapIdMatches.filter(Boolean).length);
console.log("EN URLs in Sitemap:", sitemapEnMatches.filter(Boolean).length);
console.log("Total Article Components:", files.length);

