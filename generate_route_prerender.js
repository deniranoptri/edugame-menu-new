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
    const rawGameId = p.replace('/game/', '');
    let gameId = rawGameId;
    try {
      gameId = decodeURIComponent(rawGameId);
    } catch {}
    const game = gameMap.get(gameId) || gameMap.get(rawGameId);
    if (game) {
      const title = game.seoTitle || `${game.title} | Game Edukasi Interaktif | Papan Interaktif`;
      const description = game.seoDescription || game.description || `${game.title} - ${game.subtitle || ''}. Game edukasi di Papan Interaktif.`;
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
    const rawGameId = p.replace('/en/game/', '');
    let gameId = rawGameId;
    try {
      gameId = decodeURIComponent(rawGameId);
    } catch {}
    const game = gameMap.get(gameId) || gameMap.get(rawGameId);
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

// Curated, user-visible static internal anchors for authorized hub/guide routes (SEO-02B-W2) and targeted journal routes (SEO-03B)
const STATIC_ROUTE_LINKS = {
  '/game-edukasi-ifp': {
    heading: 'Tautan Utama Game Edukasi IFP & Panduan Kelas',
    ariaLabel: 'Navigasi Utama Game Edukasi IFP',
    summary: 'Koleksi game edukasi ini dirancang untuk papan tulis interaktif, smartboard, dan Interactive Flat Panel (IFP) di kelas. Dukungan sentuhan dan mode bermain berbeda pada setiap game; sebagian cocok dimainkan bergiliran, sedangkan beberapa game menyediakan mode kompetitif multi-pemain lokal sesuai deskripsi katalognya.',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/panduan/penggunaan-ifp-papan-interaktif-digital', label: 'Panduan Menggunakan IFP di Kelas' },
      { href: '/game/nusaboard', label: 'NusaBoard — Peta Pikiran Interaktif' },
      { href: '/game/doodle', label: 'Doodle AI — Gambar & Tebak' },
      { href: '/game/adu-tarik-dino', label: 'Tarik Dino — Adu Tarik Tambang Kelas' },
      { href: '/game/gebuk-guling-matematika', label: 'GEBUK GULING MATEMATIKA' },
      { href: '/game/wonder-math-arena', label: 'Wonder Math Arena' },
      { href: '/game/kata-gol', label: 'KATA GOL!' },
      { href: '/game/ketapel-sakti', label: 'KETAPEL SAKTI — Literasi, Numerasi & Latihan TKA' },
      { href: '/game/bee-english-arena', label: 'BEE ENGLISH ARENA — Kosakata Bahasa Inggris' },
      { href: '/game-edukasi-anak', label: 'Koleksi Game Edukasi Anak PAUD & TK' },
      { href: '/game-logika', label: 'Koleksi Game Logika & Pemecahan Masalah' },
      { href: '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Pembelajaran Kolaboratif & Mode Multiplayer IFP' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Asesmen Formatif Menggunakan IFP' },
      { href: '/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp', label: 'Jurnal Guru: Pembelajaran Matematika Interaktif di IFP' },
    ],
  },
  '/en/educational-games-for-interactive-flat-panels': {
    heading: 'Featured Interactive Flat Panel Games & Teacher Resources',
    ariaLabel: 'Interactive Flat Panel Games Navigation',
    links: [
      { href: '/en/', label: 'Home — Papan Interaktif' },
      { href: '/en/guides/using-educational-games-on-interactive-flat-panels', label: 'Guide: Using Educational Games on IFPs' },
      { href: '/en/game/nusaboard', label: 'NusaBoard — Interactive Mind Mapping' },
      { href: '/en/game/doodle', label: 'Doodle AI — Draw & Guess' },
      { href: '/en/game/adu-tarik-dino', label: 'Tarik Dino — Classroom Tug-of-War' },
      { href: '/en/game/puzzle', label: 'Photo Puzzle — Custom Image Touch Puzzle' },
      { href: '/en/game/banua-fruit-blast', label: 'Banua Fruit Blast — Fast Math & Reflex' },
      { href: '/en/game/traditional', label: 'Traditional Games — Interactive Classroom Challenge' },
      { href: '/en/game/sciencelink', label: 'SCIENCELINK — Science Logic Puzzle' },
      { href: '/en/journal', label: 'Teacher Journal: IFP Classroom Strategies' },
      { href: '/en/journal/formative-assessment-using-interactive-flat-panel', label: 'Formative Assessment Using Interactive Flat Panels' },
      { href: '/en/journal/collaborative-learning-using-interactive-flat-panel', label: 'Collaborative Learning Using Interactive Flat Panels' },
    ],
  },
  '/game-edukasi-anak': {
    heading: 'Pilihan Game Edukasi Anak PAUD & TK serta Koleksi Terkait',
    ariaLabel: 'Navigasi Koleksi Game Edukasi Anak',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/panduan/memilih-game-edukasi-anak', label: 'Panduan Memilih Game Anak PAUD/TK' },
      { href: '/game/junior-race-academy', label: 'JUNIOR RACE ACADEMY' },
      { href: '/game/basket-angka-junior', label: 'Basket Angka Junior' },
      { href: '/game/color-link-junior', label: 'Color Link Junior' },
      { href: '/game/belajar-angka', label: 'Belajar Angka' },
      { href: '/game/mewarnai', label: 'Mewarnai Ceria' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game-logika', label: 'Koleksi Game Logika & Asah Otak' },
      { href: '/jurnal-guru', label: 'Jurnal Guru & Strategi Pembelajaran IFP' },
    ],
  },
  '/game-logika': {
    heading: 'Pilihan Game Logika & Panduan Kelas Terkait',
    ariaLabel: 'Navigasi Koleksi Game Logika',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/game/sciencelink', label: 'SCIENCELINK' },
      { href: '/game/si-taktik', label: 'Si Taktik' },
      { href: '/game/puzzle', label: 'Puzzle Gambar' },
      { href: '/game/color-link-junior', label: 'Color Link Junior' },
      { href: '/game/cocok-logi', label: 'Cocok Logi' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game-edukasi-anak', label: 'Koleksi Game Edukasi Anak PAUD & TK' },
      { href: '/panduan/penggunaan-ifp-papan-interaktif-digital', label: 'Panduan Menggunakan IFP di Kelas' },
      { href: '/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp', label: 'Jurnal Guru: Pembelajaran Berbasis Masalah di IFP' },
    ],
  },
  '/panduan/penggunaan-ifp-papan-interaktif-digital': {
    heading: 'Game IFP & Referensi Guru Terkait',
    ariaLabel: 'Navigasi Referensi Panduan IFP',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP & Papan Interaktif' },
      { href: '/game/nusaboard', label: 'NusaBoard' },
      { href: '/game/adu-tarik-dino', label: 'Tarik Dino' },
      { href: '/game-logika', label: 'Koleksi Game Logika' },
      { href: '/game/gebuk-guling-matematika', label: 'Gebuk Guling Matematika' },
      { href: '/game/wonder-math-arena', label: 'Wonder Math Arena' },
      { href: '/game/kata-gol', label: 'KATA GOL!' },
      { href: '/game/martabak-pecahan', label: 'Martabak Pecahan' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Asesmen Formatif Menggunakan IFP di Kelas' },
      { href: '/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp', label: 'Pembelajaran Matematika Interaktif Menggunakan IFP' },
      { href: '/game-edukasi-anak', label: 'Koleksi Game Edukasi Anak PAUD & TK' },
    ],
  },
  '/en/guides/using-educational-games-on-interactive-flat-panels': {
    heading: 'Recommended English IFP Games & Teacher Guides',
    ariaLabel: 'English IFP Classroom Guide Navigation',
    links: [
      { href: '/en/', label: 'Home — Papan Interaktif' },
      { href: '/en/educational-games-for-interactive-flat-panels', label: 'IFP Games Collection' },
      { href: '/en/game/adu-tarik-dino', label: 'Tarik Dino (Classroom Tug-of-War)' },
      { href: '/en/game/nusaboard', label: 'NusaBoard (Interactive Mind Mapping)' },
      { href: '/en/game/doodle', label: 'Doodle AI (Draw & Guess)' },
      { href: '/en/game/sciencelink', label: 'SCIENCELINK (Science Logic)' },
      { href: '/en/journal/formative-assessment-using-interactive-flat-panel', label: 'Formative Assessment Using IFP' },
      { href: '/en/journal/gamification-using-interactive-flat-panel', label: 'Gamification Using IFP' },
      { href: '/en/journal', label: 'English Teacher Journal' },
    ],
  },
  '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas': {
    heading: 'Game Edukasi Multiplayer Terdokumentasi (Duel, Trio, Squad & Split-Screen)',
    ariaLabel: 'Navigasi Game Multiplayer dan Referensi Pembelajaran Kolaboratif',
    summary: 'Tujuh game berikut mendokumentasikan mode multi-pemain lokal (Duel 2 pemain, split-screen, Trio, hingga Squad 4 pemain) pada katalog portal Papan Interaktif. Guru disarankan mencoba kesesuaian layar di perangkat IFP kelas sebelum pembelajaran dimulai.',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/jurnal-guru', label: 'Jurnal Guru & Strategi IFP' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game/gebuk-guling-matematika', label: 'GEBUK GULING MATEMATIKA (Duel 2 Pemain)' },
      { href: '/game/adu-tarik-dino', label: 'Tarik Dino (Split-Screen Duel)' },
      { href: '/game/wonder-math-arena', label: 'Wonder Math Arena (Solo, Duel Split-Screen, Trio & Squad)' },
      { href: '/game/junior-race-academy', label: 'JUNIOR RACE ACADEMY (Duel 2 Pemain & Squad 4 Pemain)' },
      { href: '/game/kata-gol', label: 'KATA GOL! (Solo, Duel, Trio & Squad)' },
      { href: '/game/bee-english-arena', label: 'BEE ENGLISH ARENA (Solo, Duel, Trio & Squad)' },
      { href: '/game/basket-angka-junior', label: 'Basket Angka Junior (Solo, Duel, Trio & Squad)' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Asesmen Formatif Menggunakan IFP di Kelas' },
    ],
  },
  '/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp': {
    heading: 'Pemetaan Game Matematika & Numerasi Berdasarkan Topik dan Audiens',
    ariaLabel: 'Navigasi Game Matematika dan Referensi Numerasi IFP',
    summary: 'Pemetaan game matematika berdasarkan topik terdokumentasi (bilangan dasar, operasi hitung, pecahan, garis bilangan, bangun datar, bangun ruang 3D, pembagian porogapit, dan matriks numerasi) serta rentang audiens katalog. Label audiens luas SD–SMA merupakan rekomendasi latihan umum dan bukan bukti cakupan menyeluruh seluruh materi setiap tingkat kelas.',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/jurnal-guru', label: 'Jurnal Guru & Strategi IFP' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game-edukasi-anak', label: 'Koleksi Game Edukasi Anak PAUD & TK' },
      { href: '/game/basket-angka-junior', label: 'Basket Angka Junior (PAUD/TK & SD 1–3)' },
      { href: '/game/junior-race-academy', label: 'JUNIOR RACE ACADEMY (PAUD/TK & SD 1–3)' },
      { href: '/game/wonder-math-arena', label: 'Wonder Math Arena (17 Materi Numerasi SD 1–6)' },
      { href: '/game/gebuk-guling-matematika', label: 'GEBUK GULING MATEMATIKA (Operasi Hitung SD 1–6)' },
      { href: '/game/martabak-pecahan', label: 'Martabak Pecahan (Konsep Pecahan)' },
      { href: '/game/si-taktik', label: 'Si Taktik (Garis Bilangan & Logika Matematika)' },
      { href: '/game/geo-squad', label: 'Geo Squad (Bangun Datar & Geometri)' },
      { href: '/game/ruang-io', label: 'Ruang.io (Bangun Ruang & Spasial 3D)' },
      { href: '/game/porogapit-arena', label: 'Porogapit Arena (Pembagian Bersusun)' },
      { href: '/game/numeriq-math', label: 'NUMERIQ Math (Aritmetika & Matriks Numerasi)' },
      { href: '/game/math-domino-arena', label: 'Math Domino Arena (Penalaran & Strategi Numerasi)' },
      { href: '/game/jejak-angka', label: 'Jejak Angka (Ketelitian Berhitung & Logika)' },
    ],
  },
  '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas': {
    heading: 'Contoh Game Edukasi untuk Alur Cek Pemahaman Guru di Kelas',
    ariaLabel: 'Navigasi Game dan Panduan Asesmen Formatif IFP',
    summary: 'Contoh alur fasilitasi guru menggunakan game edukasi untuk mengamati pemahaman literasi, numerasi, struktur kalimat, IPA, dan peta konsep di layar IFP. Strategi ini merupakan panduan observasi kelas oleh guru dan bukan fitur laporan nilai otomatis atau ekspor analitik bawaan game.',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/jurnal-guru', label: 'Jurnal Guru & Strategi IFP' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/panduan/penggunaan-ifp-papan-interaktif-digital', label: 'Panduan Penggunaan IFP di Kelas' },
      { href: '/game/ketapel-sakti', label: 'KETAPEL SAKTI (Literasi, Numerasi, Logika & Latihan TKA)' },
      { href: '/game/wonder-math-arena', label: 'Wonder Math Arena (Cek Numerasi SD)' },
      { href: '/game/martabak-pecahan', label: 'Martabak Pecahan (Cek Konsep Pecahan)' },
      { href: '/game/kata-gol', label: 'KATA GOL! (Cek Struktur Kalimat SPOK)' },
      { href: '/game/bee-english-arena', label: 'BEE ENGLISH ARENA (Cek Kosakata Bahasa Inggris)' },
      { href: '/game/sciencelink', label: 'SCIENCELINK (Cek Penalaran Konsep IPA)' },
      { href: '/game/nusaboard', label: 'NusaBoard (Peta Konsep & Exit Ticket Visual)' },
    ],
  },
  '/en/journal/formative-assessment-using-interactive-flat-panel': {
    heading: 'Published English Interactive Flat Panel Games for Classroom Checks',
    ariaLabel: 'English Interactive Flat Panel Games and Teacher Resources',
    summary: 'Practical teacher-led classroom workflows using the seven published English Interactive Flat Panel game pages for live observation, quick concept checks, and visual exit tickets rather than automated gradebooks or score exports.',
    links: [
      { href: '/en/', label: 'Home — Papan Interaktif' },
      { href: '/en/journal', label: 'English Teacher Journal' },
      { href: '/en/educational-games-for-interactive-flat-panels', label: 'Interactive Flat Panel Educational Games Collection' },
      { href: '/en/guides/using-educational-games-on-interactive-flat-panels', label: 'Guide: Using Educational Games on Interactive Flat Panels' },
      { href: '/en/game/nusaboard', label: 'NusaBoard — Concept Mapping & Visual Exit Tickets' },
      { href: '/en/game/doodle', label: 'Doodle AI — Draw & Guess Vocabulary Check' },
      { href: '/en/game/sciencelink', label: 'SCIENCELINK — Science Logic Warm-Up' },
      { href: '/en/game/banua-fruit-blast', label: 'Banua Fruit Blast — Fast Mental Math Check' },
      { href: '/en/game/adu-tarik-dino', label: 'Tarik Dino — Local Split-Screen Classroom Check' },
      { href: '/en/game/puzzle', label: 'Photo Puzzle — Group Pattern Recognition' },
      { href: '/en/game/traditional', label: 'Traditional Games — Classroom Brain Break' },
      { href: '/en/journal/diagnostic-assessment-using-interactive-flat-panel', label: 'Diagnostic Assessment Using Interactive Flat Panel' },
      { href: '/en/journal/reflective-learning-using-interactive-flat-panel', label: 'Reflective Learning Using Interactive Flat Panel' },
    ],
  },
};

const sitemapPathSet = new Set(sitemapEntries.map(e => e.path));

function buildStaticLinksHtml(routePath) {
  const cfg = STATIC_ROUTE_LINKS[routePath];
  if (!cfg) return '';

  const seen = new Set();
  const items = [];
  for (const link of cfg.links) {
    if (!sitemapPathSet.has(link.href) || seen.has(link.href)) continue;
    seen.add(link.href);
    items.push(`          <li><a href="${escapeXml(link.href)}">${escapeXml(link.label)}</a></li>`);
  }
  if (items.length === 0) return '';

  const summaryHtml = cfg.summary ? `\n          <p>${escapeXml(cfg.summary)}</p>` : '';
  return `\n        <nav aria-label="${escapeXml(cfg.ariaLabel)}">\n          <h2>${escapeXml(cfg.heading)}</h2>${summaryHtml}\n          <ul>\n${items.join('\n')}\n          </ul>\n        </nav>`;
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
    const staticLinksHtml = buildStaticLinksHtml(entry.path);
    const staticBodyHtml = `
      <div class="static-seo-content">
        <h1>${escapeXml(meta.title)}</h1>
        <p>${escapeXml(meta.description)}</p>${staticLinksHtml}
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
    // Decode percent-encoded segments (e.g. %20 -> space) so Netlify & static servers resolve the file instead of SPA fallback
    const rawCleanPath = entry.path.replace(/^\//, '').replace(/\/$/, '');
    let cleanPath = rawCleanPath;
    try {
      cleanPath = decodeURIComponent(rawCleanPath);
    } catch {}
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
