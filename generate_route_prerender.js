import fs from 'fs';
import path from 'path';

/**
 * Route-Aware Static HTML Prerender Generator for PapanInteraktif.com
 * Phase GSC-P1-REMEDIATION
 *
 * Runs post-vite-build to generate static route HTML files for all indexable URLs in sitemap.xml.
 * Ensures initial HTTP responses returned by Netlify serve route-appropriate metadata
 * (<title>, <meta name="description">, <link rel="canonical">, <link rel="alternate" hreflang="...">, og:*, twitter:*).
 */

const DIST_DIR = path.resolve('dist');
const SITEMAP_PATH = path.resolve('public/sitemap.xml');
const GAMES_PATH = path.resolve('all_games.json');
const ARTICLES_PATH = path.resolve('articles.json');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

// 1. Load Data Sources
const games = JSON.parse(fs.readFileSync(GAMES_PATH, 'utf-8'));
const gameMap = new Map(games.map(g => [g.id, g]));

const articles = JSON.parse(fs.readFileSync(ARTICLES_PATH, 'utf-8'));
const articleMap = new Map(articles.map(a => [a.url, a]));

// Load Article Components metadata
const compMetaMap = new Map();
const compDir = path.resolve('components');

if (fs.existsSync(compDir)) {
  const files = fs.readdirSync(compDir).filter(f => f.startsWith('Article') && f.endsWith('.tsx'));
  for (const file of files) {
    const content = fs.readFileSync(path.join(compDir, file), 'utf-8');

    // Title parsing (supports applySEOMetadata and document.title)
    let titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
    if (!titleMatch) {
      titleMatch = content.match(/document\.title\s*=\s*['"]([^'"]+)['"]/);
    }

    // Description parsing (supports applySEOMetadata and metaDescription.setAttribute)
    let descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);
    if (!descMatch) {
      descMatch = content.match(/metaDescription\.setAttribute\(\s*['"]content['"]\s*,\s*['"]([^'"]+)['"]/);
    }

    // Canonical parsing (supports canonical: '...' and href setAttribute)
    let canMatch = content.match(/canonical:\s*['"]([^'"]+)['"]/);
    if (!canMatch) {
      canMatch = content.match(/canonical\.setAttribute\(\s*['"]href['"]\s*,\s*['"]([^'"]+)['"]/);
    }

    if (titleMatch && canMatch) {
      let rawUrl = canMatch[1];
      // handle dynamic window.location.origin
      rawUrl = rawUrl.replace(/window\.location\.origin\s*\+\s*/g, '').replace(/['"]/g, '');
      if (!rawUrl.startsWith('http')) {
        rawUrl = 'https://papaninteraktif.com' + (rawUrl.startsWith('/') ? rawUrl : '/' + rawUrl);
      }
      const routePath = rawUrl.replace('https://papaninteraktif.com', '');
      compMetaMap.set(routePath, {
        title: titleMatch[1],
        description: descMatch ? descMatch[1] : ''
      });
    }
  }
}

// 2. Parse Sitemap XML for all URLs and Hreflangs
const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
const urlBlocks = sitemapContent.split('<url>').slice(1);

const sitemapEntries = [];

for (const block of urlBlocks) {
  const locMatch = block.match(/<loc>(.*?)<\/loc>/);
  if (!locMatch) continue;
  const loc = locMatch[1].trim();
  const pathName = loc.replace('https://papaninteraktif.com', '') || '/';

  const hreflangs = [];
  const hrefMatches = block.matchAll(/hreflang=["']([^"']+)["']\s+href=["']([^"']+)["']/g);
  for (const m of hrefMatches) {
    hreflangs.push({ lang: m[1], href: m[2] });
  }

  sitemapEntries.push({ loc, path: pathName, hreflangs });
}

console.log(`Parsed ${sitemapEntries.length} routes from sitemap.xml`);

// 3. Metadata Resolver per Route
function resolveRouteMetadata(loc, routePath) {
  const p = routePath === '' ? '/' : routePath;

  // Root / Home
  if (p === '/' || p === '/index.html') {
    return {
      lang: 'id',
      title: 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif',
      description: 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru. Belajar sambil bermain dengan berbagai pilihan game.',
      canonical: 'https://papaninteraktif.com/',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioYACaf1j7wDRqM1azWCF4O9aZEUDo_k7UPVv1qm4MQ9OPTqkX3S-9qmFBBCFVagHwJkWtpbU3LQrUmpLWUgT7qxYJJZr6XLpzH6u2Aiq0l72Vpc_Zdfj2ZgMvXu3n7UrWsoHK8W66ccg33oAEx5eQgDhHyzfoLakBj8lRFliltrXVwzBownSu9Ys_k7M/s1200/Barcode%20Edupid.png'
    };
  }

  if (p === '/en' || p === '/en/') {
    return {
      lang: 'en',
      title: 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif',
      description: 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru. Belajar sambil bermain dengan berbagai pilihan game.',
      canonical: 'https://papaninteraktif.com/en/',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioYACaf1j7wDRqM1azWCF4O9aZEUDo_k7UPVv1qm4MQ9OPTqkX3S-9qmFBBCFVagHwJkWtpbU3LQrUmpLWUgT7qxYJJZr6XLpzH6u2Aiq0l72Vpc_Zdfj2ZgMvXu3n7UrWsoHK8W66ccg33oAEx5eQgDhHyzfoLakBj8lRFliltrXVwzBownSu9Ys_k7M/s1200/Barcode%20Edupid.png'
    };
  }

  // Indonesian Games
  if (p.startsWith('/game/')) {
    const gameId = p.replace('/game/', '');
    const game = gameMap.get(gameId);
    if (game) {
      const title = `${game.title} | Game Edukasi Interaktif | Papan Interaktif`;
      const description = game.description || `${game.title} - ${game.subtitle || ''}. Game edukasi di Papan Interaktif.`;
      return {
        lang: 'id',
        title,
        description,
        canonical: loc,
        image: game.image || ''
      };
    }
  }

  // English Games
  if (p.startsWith('/en/game/')) {
    const gameId = p.replace('/en/game/', '');
    const game = gameMap.get(gameId);
    if (game) {
      const en = game.en || {};
      const displayTitle = en.title || game.title;
      const title = `${displayTitle} | Interactive Educational Games | Papan Interaktif`;
      const description = en.description || game.description || `${displayTitle} - Interactive game on Papan Interaktif.`;
      return {
        lang: 'en',
        title,
        description,
        canonical: loc,
        image: game.image || ''
      };
    }
  }

  // Article Component Overrides (exact component title/desc)
  if (compMetaMap.has(p)) {
    const info = compMetaMap.get(p);
    return {
      lang: p.startsWith('/en/') ? 'en' : 'id',
      title: info.title,
      description: info.description,
      canonical: loc,
      image: ''
    };
  }

  // Article JSON
  if (articleMap.has(p)) {
    const a = articleMap.get(p);
    let title = a.title;
    if (!title.includes('| Jurnal Guru') && !title.includes('| Papan Interaktif')) {
      title = `${title} | Jurnal Guru`;
    }
    return {
      lang: p.startsWith('/en/') ? 'en' : 'id',
      title,
      description: a.desc || '',
      canonical: loc,
      image: ''
    };
  }

  // Static Hubs / Guides
  const hubGuideMeta = {
    '/game-edukasi-anak': {
      lang: 'id',
      title: 'Game Edukasi Anak PAUD & SD | Papan Interaktif',
      description: 'Koleksi game edukasi anak interaktif untuk PAUD, TK, dan SD. Bermain sambil belajar membaca, berhitung, dan mengenal warna.'
    },
    '/game-logika': {
      lang: 'id',
      title: 'Game Logika & Strategi Interaktif | Papan Interaktif',
      description: 'Asah kemampuan berpikir kritis, pemecahan masalah, dan logika siswa dengan permainan interaktif seru.'
    },
    '/game-edukasi-ifp': {
      lang: 'id',
      title: 'Game Edukasi IFP & Smartboard Kelas | Papan Interaktif',
      description: 'Koleksi game edukasi interaktif khusus layar sentuh Interactive Flat Panel (IFP) dan Smartboard untuk ice breaking pembelajaran kelas.'
    },
    '/en/educational-games-for-interactive-flat-panels': {
      lang: 'en',
      title: 'Educational Games for Interactive Flat Panels (IFP) | Papan Interaktif',
      description: 'Interactive touchscreen games designed for classroom IFP and Smartboards. Engage students with math, literacy, and logic games.'
    },
    '/jurnal-guru': {
      lang: 'id',
      title: 'Jurnal Guru — Panduan & Artikel Pembelajaran Interaktif | Papan Interaktif',
      description: 'Kumpulan artikel, panduan, dan inspirasi penggunaan teknologi interaktif IFP di kelas Kurikulum Merdeka.'
    },
    '/en/journal': {
      lang: 'en',
      title: 'Teacher Journal — Guides & Insights for Interactive Learning | Papan Interaktif',
      description: 'Articles and best practices for integrating Interactive Flat Panels and educational gamification in modern classrooms.'
    },
    '/panduan/memilih-game-edukasi-anak': {
      lang: 'id',
      title: 'Panduan Memilih Game Edukasi Anak yang Tepat | Papan Interaktif',
      description: 'Tips dan panduan bagi orang tua dan guru dalam memilih permainan edukatif yang aman dan bermanfaat sesuai usia anak.'
    },
    '/panduan/penggunaan-ifp-papan-interaktif-digital': {
      lang: 'id',
      title: 'Panduan Penggunaan IFP Papan Interaktif Digital | Papan Interaktif',
      description: 'Panduan praktis mengoperasikan Interactive Flat Panel (IFP) untuk menciptakan suasana belajar interaktif di sekolah.'
    },
    '/en/guides/using-educational-games-on-interactive-flat-panels': {
      lang: 'en',
      title: 'Guide to Using Educational Games on Interactive Flat Panels | Papan Interaktif',
      description: 'A practical guide for teachers on leveraging IFP screens and smartboards for collaborative classroom activities.'
    },
    '/about': {
      lang: 'id',
      title: 'Tentang Kami | Papan Interaktif Digital',
      description: 'Mengenal portal Papan Interaktif Digital, visi pengembangan media pembelajaran interaktif gratis untuk guru dan siswa di Indonesia.'
    },
    '/contact': {
      lang: 'id',
      title: 'Hubungi Kami | Papan Interaktif',
      description: 'Hubungi tim Papan Interaktif untuk kolaborasi, masukan, atau saran seputar pengembangan media pembelajaran interaktif.'
    },
    '/privacy-policy': {
      lang: 'id',
      title: 'Kebijakan Privasi | Papan Interaktif',
      description: 'Kebijakan privasi penggunaan portal Papan Interaktif, komitmen perlindungan data pengguna dan siswa.'
    }
  };

  if (hubGuideMeta[p]) {
    const info = hubGuideMeta[p];
    return {
      lang: info.lang,
      title: info.title,
      description: info.description,
      canonical: loc,
      image: ''
    };
  }

  // Fallback
  const pathTitle = p.split('/').filter(Boolean).pop() || '';
  const formattedTitle = pathTitle.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const isEn = p.startsWith('/en');

  return {
    lang: isEn ? 'en' : 'id',
    title: `${formattedTitle} | ${isEn ? 'Journal' : 'Papan Interaktif'}`,
    description: `Portal Papan Interaktif - ${formattedTitle}`,
    canonical: loc,
    image: ''
  };
}

// 4. HTML Injector
function buildRouteHtml(template, entry) {
  const meta = resolveRouteMetadata(entry.loc, entry.path);

  let html = template;

  // Set html lang
  html = html.replace(/<html\s+lang=["'][^"']*["']/, `<html lang="${meta.lang}"`);

  // Set <title>
  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeXml(meta.title)}</title>`);

  // Set meta description
  if (/<meta\s+name=["']description["']/.test(html)) {
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/s,
      `<meta name="description" content="${escapeXml(meta.description)}" />`
    );
  } else {
    html = html.replace('</head>', `    <meta name="description" content="${escapeXml(meta.description)}" />\n</head>`);
  }

  // Set canonical
  if (/<link\s+rel=["']canonical["']/.test(html)) {
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/s,
      `<link rel="canonical" href="${meta.canonical}" />`
    );
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${meta.canonical}" />\n</head>`);
  }

  // Remove template hreflangs if present
  html = html.replace(/<link\s+rel=["']alternate["']\s+hreflang=["'].*?["']\s+href=["'].*?["']\s*\/?>\n?/g, '');

  // Inject hreflangs
  if (entry.hreflangs && entry.hreflangs.length > 0) {
    let hreflangTags = '';
    for (const h of entry.hreflangs) {
      hreflangTags += `    <link rel="alternate" hreflang="${h.lang}" href="${h.href}" />\n`;
    }
    html = html.replace('<link rel="canonical"', hreflangTags + '    <link rel="canonical"');
  }

  // Set OpenGraph
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/s,
    `<meta property="og:title" content="${escapeXml(meta.title)}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/s,
    `<meta property="og:description" content="${escapeXml(meta.description)}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/s,
    `<meta property="og:url" content="${meta.canonical}" />`
  );
  if (meta.image) {
    html = html.replace(
      /<meta\s+property=["']og:image["']\s+content=["'].*?["']\s*\/?>/s,
      `<meta property="og:image" content="${meta.image}" />`
    );
  }

  // Set Twitter
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/s,
    `<meta name="twitter:title" content="${escapeXml(meta.title)}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/s,
    `<meta name="twitter:description" content="${escapeXml(meta.description)}" />`
  );
  if (meta.image) {
    html = html.replace(
      /<meta\s+name=["']twitter:image["']\s+content=["'].*?["']\s*\/?>/s,
      `<meta name="twitter:image" content="${meta.image}" />`
    );
  }

  // Inject Route-Aware Static SEO Content inside <div class="static-seo-content">
  // Preserve the rich static SEO content for the root homepage ('/'), but replace for all sub-routes
  const isRootHome = entry.path === '/' || entry.path === '' || entry.path === '/index.html';
  if (!isRootHome) {
    const staticBodyHtml = `
      <div class="static-seo-content">
        <h1>${escapeXml(meta.title)}</h1>
        <p>${escapeXml(meta.description)}</p>
      </div>`;

    html = html.replace(/<div class="static-seo-content">.*?<\/div>/s, staticBodyHtml.trim());
  }

  return html;
}

function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// 5. Generate Files in dist/
let generatedCount = 0;

for (const entry of sitemapEntries) {
  const routeHtml = buildRouteHtml(templateHtml, entry);

  let targetFilePath;
  if (entry.path === '/' || entry.path === '' || entry.path === '/index.html') {
    targetFilePath = path.join(DIST_DIR, 'index.html');
  } else {
    // e.g. /en/game/doodle -> dist/en/game/doodle/index.html
    const cleanPath = entry.path.replace(/^\//, '').replace(/\/$/, '');
    const dirPath = path.join(DIST_DIR, cleanPath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    targetFilePath = path.join(dirPath, 'index.html');
  }

  fs.writeFileSync(targetFilePath, routeHtml, 'utf-8');
  generatedCount++;
}

console.log(`Prerender complete: Generated ${generatedCount} route-specific HTML files in dist/`);
