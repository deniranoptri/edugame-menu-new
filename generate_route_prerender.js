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
    heading: 'Pilihan 17 Game Edukasi Anak PAUD, TK & SD Awal serta Koleksi Terkait',
    ariaLabel: 'Navigasi Koleksi Game Edukasi Anak',
    summary: 'Koleksi lengkap 17 game Junior ramah anak untuk PAUD, TK, dan SD kelas 1–3 yang mencakup literasi awal & pra-menulis (Jalur Huruf, Pendekar Balon, Detektif), numerasi awal (JUNIOR RACE ACADEMY, Basket Angka Junior, Tarik Dino), logika & spasial (Color Link Junior, Cocok Logi, Ambulans, Satu Garis, Gabung Ceria, Tatap Hap), serta seni, warna & sains awal (Sayuran, Lab Warna, Dunia Hewan, Damkar, Mesin Gacha).',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/panduan/memilih-game-edukasi-anak', label: 'Panduan Memilih Game Anak PAUD/TK' },
      { href: '/game/junior-race-academy', label: 'JUNIOR RACE ACADEMY — Balapan Numerasi & Literasi PAUD–SD 3' },
      { href: '/game/basket-angka-junior', label: 'Basket Angka Junior — Bilangan & Berhitung Dasar' },
      { href: '/game/color-link-junior', label: 'Color Link Junior — Logika Jalur & Warna' },
      { href: '/game/belajar-angka', label: 'Lab Warna — Eksperimen Campur Warna Dasar' },
      { href: '/game/mewarnai', label: 'Sayuran — Mewarnai Digital & Pengenalan Sayur' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game-logika', label: 'Koleksi Game Logika & Asah Otak' },
      { href: '/jurnal-guru', label: 'Jurnal Guru & Strategi Pembelajaran IFP' },
      { href: '/game/adu-tarik-dino', label: 'Tarik Dino — Konsep Perbandingan Ukuran & Kekuatan' },
      { href: '/game/tatap-hap', label: 'Tatap Hap — Fokus Visual & Observasi Objek' },
      { href: '/game/cocok-logi', label: 'Cocok Logi — Puzzle Bentuk, Warna & Motorik Halus' },
      { href: '/game/mesin-koleksi', label: 'Mesin Gacha — Konsep Sebab-Akibat Sederhana' },
      { href: '/game/pendekar-balon', label: 'Pendekar Balon — Pengenalan Huruf Alfabet & Angka' },
      { href: '/game/detektif-cilik', label: 'Detektif — Cari Benda Tersembunyi & Kosakata' },
      { href: '/game/Aksi%20Ambulans', label: 'Ambulans — Logika Spasial & Pemecahan Masalah' },
      { href: '/game/Gass%20Damkar', label: 'Damkar — Koordinasi Visual & Motorik Anak' },
      { href: '/game/Jalur%20Huruf', label: 'Jalur Huruf — Latihan Tracing Menulis Huruf' },
      { href: '/game/Petualangan%20Satu%20Garis', label: 'Satu Garis — Alur Garis, Pola & Perencanaan Gerak' },
      { href: '/game/gabung-ceria', label: 'Gabung Ceria — Logika Ruang & Fisika Sederhana' },
      { href: '/game/dunia-hewan', label: 'Dunia Hewan — Pengetahuan Satwa & Makanan Hewan' },
    ],
  },
  '/game-logika': {
    heading: 'Pilihan Game Logika, Berpikir Komputasional & Panduan Kelas Terkait',
    ariaLabel: 'Navigasi Koleksi Game Logika dan Berpikir Komputasional',
    summary: 'Koleksi game logika ini membantu siswa melatih penalaran logis, pengenalan pola, pemecahan masalah, berpikir komputasional, dan penyusunan urutan langkah pada game jalur yang mendukungnya. Tidak semua game logika mengajarkan coding, pemrograman, machine learning, atau kecerdasan artifisial; untuk latihan soal KKA dan Informatika tersedia HELI RESCUE, sementara Doodle AI dan AI Basketball memberikan pengalaman interaksi AI secara langsung.',
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
      { href: '/game/helirescue', label: 'HELI RESCUE — Kuis Lintas Mapel, Informatika & KKA' },
      { href: '/game/kancil', label: 'Jalan Kancil — Logika Jalur & Berpikir Komputasional' },
      { href: '/game/doodle', label: 'Doodle AI — Pengenalan Interaksi AI Gambar & Tebak' },
      { href: '/game/ai-basketball', label: 'AI Basketball — Sensor Gerak Kamera & PJOK Interaktif' },
      { href: '/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Literasi Digital Menggunakan IFP di Kelas' },
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
  '/game/mancing-kata': {
    heading: 'Cakupan Edukasi Lintas Mata Pelajaran & Tautan Kelas',
    ariaLabel: 'Navigasi Edukasi Terkait Mancing Kata',
    summary: 'Mancing Kata mendukung latihan lintas mata pelajaran — bukan hanya Bahasa Indonesia. Menu aplikasi memuat pilihan konten untuk TK & SD Kelas Rendah, SD Kelas 1–3 (Fase A), SD Kelas 4–6 (Fase B–C), hingga jenjang SMP, mencakup Pendidikan Pancasila, Bahasa Indonesia, Matematika dasar, IPAS, PJOK, Seni & Budaya, PAI & Budi Pekerti, dan Bahasa Inggris, dengan mode Solo, Duel (2 Pemain), Trio, serta dukungan soal custom oleh guru.',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game-edukasi-anak', label: 'Koleksi Game Edukasi Anak PAUD & TK' },
      { href: '/game/helirescue', label: 'HELI RESCUE — Kuis Lintas Mapel & KKA' },
      { href: '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Pembelajaran Kolaboratif & Mode Multiplayer IFP' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Asesmen Formatif Menggunakan IFP di Kelas' },
    ],
  },
  '/game/helirescue': {
    heading: 'Cakupan Edukasi Lintas Mapel, KKA & Tautan Kelas',
    ariaLabel: 'Navigasi Edukasi Terkait Heli Rescue',
    summary: 'HELI RESCUE menggabungkan misi penyelamatan hutan dengan bank soal terstruktur lintas 13 mata pelajaran untuk jenjang SD (Fase B–C), SMP (Fase D), dan SMA (Fase E–F), mencakup Matematika, Bahasa Indonesia, Pendidikan Pancasila, PJOK, Seni Budaya, IPA, IPS, IPAS, Biologi, Fisika, Bahasa Inggris, Informatika, serta Koding dan Kecerdasan Artifisial (KKA) melalui tantangan identifikasi, perhitungan, urutan, dan multi-target.',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/game-logika', label: 'Koleksi Game Logika & Berpikir Komputasional' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Game Lintas Mata Pelajaran' },
      { href: '/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Literasi Digital Menggunakan IFP di Kelas' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Asesmen Formatif Menggunakan IFP di Kelas' },
    ],
  },
  '/game/ai-basketball': {
    heading: 'Relevansi PJOK, Sensor Kamera & Tautan Kelas',
    ariaLabel: 'Navigasi Edukasi Terkait AI Basketball',
    summary: 'AI Basketball (Basket Motion Arena) mendukung interaksi deteksi gerak tangan dan tubuh via kamera perangkat (berbasis MediaPipe) serta kontrol sentuh alternatif dengan mode Latihan, Challenge, dan VS. Cocok untuk pemanasan aktif PJOK di kelas, koordinasi motorik kasar, dan jeda gerak di depan IFP berkamera; akurasi sensor bergantung pada pencahayaan serta posisi perangkat dan bukan alat asesmen kebugaran fisik formal.',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game-logika', label: 'Koleksi Game Logika & Pengenalan Interaksi AI' },
      { href: '/game/traditional', label: 'Lomba 17an — Aktivitas Kelas Bertema Budaya' },
      { href: '/game/doodle', label: 'Doodle AI — Pengenalan Interaksi AI Gambar & Tebak' },
      { href: '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Aktivitas Pembelajaran Interaktif di IFP' },
    ],
  },
  '/game/traditional': {
    heading: 'Konteks Budaya Indonesia & Aktivitas Kelas Virtual',
    ariaLabel: 'Navigasi Edukasi Terkait Lomba 17an',
    summary: 'Lomba 17an menyajikan permainan interaktif bertema perayaan tradisional 17 Agustus untuk siswa SD, SMP, dan SMA melalui aplikasi web tersemat. Cocok untuk pengenalan nilai budaya lokal, sportivitas, kerja sama kelompok, dan ice breaking kelas di layar IFP. Permainan virtual ini bersifat pengenalan budaya serta aktivitas layar interaktif, bukan pengganti lomba atau aktivitas olahraga fisik di lapangan.',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game/gebuk-guling-matematika', label: 'GEBUK GULING MATEMATIKA — Duel Berhitung Tema 17 Agustus' },
      { href: '/game/ai-basketball', label: 'AI Basketball — Aktivitas Gerak PJOK Interaktif' },
      { href: '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Pembelajaran Kolaboratif di IFP' },
      { href: '/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp', label: 'Jurnal Guru: Pembelajaran Sosial Emosional di IFP' },
    ],
  },
  '/jurnal-guru': {
    heading: 'Game Edukasi Lintas Mata Pelajaran & Tema Mapel Lain',
    ariaLabel: 'Navigasi Game Edukasi Lintas Mata Pelajaran di Jurnal Guru',
    summary: 'Jelajahi permainan interaktif dan panduan kelas untuk pembelajaran lintas mapel, Seni Rupa, PJOK, Pendidikan Pancasila & budaya Indonesia, Koding & Kecerdasan Artifisial (KKA), Pendidikan Agama Islam (PAI), serta 17 game Junior PAUD/TK dan SD awal.',
    links: [
      { href: '/game/mancing-kata', label: 'Mancing Kata — Game Lintas Mata Pelajaran' },
      { href: '/game/helirescue', label: 'Heli Rescue — Tantangan Edukasi Multi-Mapel' },
      { href: '/game/ai-basketball', label: 'AI Basketball — Aktivitas PJOK Interaktif' },
      { href: '/game/traditional', label: 'Game Tradisional — Budaya dan Aktivitas Kelas' },
      { href: '/game-logika', label: 'Game Logika — Berpikir Komputasional dan KKA' },
      { href: '/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp', label: 'Seni Rupa & Kreativitas — Pembelajaran Visual, Doodle AI & Lab Warna' },
      { href: '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas', label: 'PJOK & Aktivitas Gerak — AI Basketball, Lomba 17an & Heli Rescue' },
      { href: '/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp', label: 'Pendidikan Pancasila & Budaya — Gotong Royong & Pembelajaran Kooperatif' },
      { href: '/jurnal-guru/pembelajaran-steam-menggunakan-ifp', label: 'KKA & STEAM — Berpikir Komputasional, Seni & Geometri di IFP' },
      { href: '/game/tanzib', label: 'PAI — Tanzib (Logika & Pengetahuan Dasar Agama Islam)' },
      { href: '/game/celestial-weaver', label: 'PAI — Celestial Weaver (Susun Ayat Al-Qur’an)' },
      { href: '/game-edukasi-anak', label: 'PAUD/TK & SD Awal — Koleksi 17 Game Junior' },
      { href: '/panduan/memilih-game-edukasi-anak', label: 'PAUD/TK & SD Awal — Panduan Memilih Game Edukasi Anak' },
      { href: '/jurnal-guru/game-seni-rupa-interaktif-menggunakan-ifp', label: 'Panduan Baru: Game Seni Rupa Interaktif Menggunakan IFP untuk SD' },
      { href: '/jurnal-guru/game-pjok-interaktif-menggunakan-ifp', label: 'Panduan Baru: Game PJOK Interaktif Menggunakan IFP untuk Aktivitas Kelas' },
      { href: '/jurnal-guru/game-pendidikan-pancasila-interaktif-menggunakan-ifp', label: 'Panduan Baru: Game Pendidikan Pancasila Interaktif Menggunakan IFP' },
      { href: '/jurnal-guru/game-koding-kecerdasan-artifisial-ifp', label: 'Panduan Baru: Game Koding dan Kecerdasan Artifisial (KKA) Menggunakan IFP' },
      { href: '/jurnal-guru/game-pendidikan-agama-islam-interaktif-ifp', label: 'Panduan Baru: Game Pendidikan Agama Islam Interaktif Menggunakan IFP' },
    ],
  },
  '/jurnal-guru/aktivitas-ipa-interaktif-menggunakan-ifp-di-kelas': {
    heading: 'Rekomendasi Game IPA & IPAS Interaktif untuk Kelas IFP',
    ariaLabel: 'Navigasi Game IPA & IPAS Terkait Artikel Jurnal Guru',
    summary: 'Perkuat observasi sains, klasifikasi makhluk hidup, dan review konsep IPAS/IPA dalam pembelajaran menggunakan papan interaktif melalui SCIENCELINK, Rimba Pedia, Dunia Hewan, HELI RESCUE (bank soal IPAS, IPA, Biologi, Fisika), serta Mancing Kata (lintas mapel termasuk IPAS dengan soal custom guru). Gunakan observasi guru atas argumen siswa sebagai asesmen formatif berbasis game.',
    links: [
      { href: '/game/sciencelink', label: 'SCIENCELINK — Puzzle Penalaran Konsep IPA SD–SMP' },
      { href: '/game/rimba-pedia', label: 'Rimba Pedia — Eksplorasi Fakta Satwa & Klasifikasi' },
      { href: '/game/dunia-hewan', label: 'Dunia Hewan — Pengenalan Satwa PAUD & SD Awal' },
      { href: '/game/helirescue', label: 'HELI RESCUE — Kuis IPAS, IPA, Biologi & Fisika' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Game Lintas Mapel & Soal Custom Guru' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game-logika', label: 'Koleksi Game Logika & Penalaran' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Panduan Asesmen Formatif Menggunakan IFP di Kelas' },
    ],
  },
  '/jurnal-guru/aktivitas-bahasa-indonesia-interaktif-menggunakan-ifp-di-kelas': {
    heading: 'Pilihan Game Edukasi untuk Aktivitas Cepat Bahasa Indonesia di IFP',
    ariaLabel: 'Navigasi Game Aktivitas Bahasa Indonesia di IFP',
    summary: 'Variasikan pemanasan kosakata, penyusunan kalimat SPOK, dan kerja sama kelompok di papan interaktif melalui KATA GOL!, Jagoan Kata, dan Mancing Kata (mode Solo, Duel, Trio, serta input kosakata custom guru untuk game Bahasa Indonesia SD hingga SMP).',
    links: [
      { href: '/game/kata-gol', label: 'KATA GOL! — Susun Kalimat SPOK SD–SMA' },
      { href: '/game/jagoan-kata', label: 'Jagoan Kata — Latihan Kosakata & Pemahaman Bahasa' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Mode Solo, Duel, Trio & Soal Custom' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/jurnal-guru/pembelajaran-bahasa-indonesia-interaktif-menggunakan-ifp', label: 'Panduan Pembelajaran Bahasa Indonesia Interaktif Menggunakan IFP' },
      { href: '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas', label: 'Pembelajaran Kolaboratif Menggunakan IFP di Kelas' },
    ],
  },
  '/jurnal-guru/pembelajaran-bahasa-indonesia-interaktif-menggunakan-ifp': {
    heading: 'Integrasi Game Literasi & Cek Pemahaman Bahasa Indonesia di Papan Interaktif',
    ariaLabel: 'Navigasi Game Pembelajaran Bahasa Indonesia di IFP',
    summary: 'Integrasikan KATA GOL! (struktur SPOK), Jagoan Kata (kosakata), Mancing Kata (lintas mapel termasuk Bahasa Indonesia & soal custom), HELI RESCUE (bank soal Bahasa Indonesia SD–SMA), dan NusaBoard (peta gagasan teks) untuk mendukung pembelajaran literasi dan asesmen formatif berbasis observasi guru.',
    links: [
      { href: '/game/kata-gol', label: 'KATA GOL! — Latihan Struktur Kalimat SPOK' },
      { href: '/game/jagoan-kata', label: 'Jagoan Kata — Pengayaan Kosakata Bahasa Indonesia' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Game Lintas Mapel & Soal Custom Guru' },
      { href: '/game/helirescue', label: 'HELI RESCUE — Bank Soal Bahasa Indonesia SD–SMA' },
      { href: '/game/nusaboard', label: 'NusaBoard — Papan Kolaboratif Analisis Teks' },
      { href: '/jurnal-guru/aktivitas-bahasa-indonesia-interaktif-menggunakan-ifp-di-kelas', label: 'Ide Aktivitas Bahasa Indonesia Interaktif di IFP' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Asesmen Formatif Menggunakan IFP di Kelas' },
    ],
  },
  '/jurnal-guru/pembelajaran-bahasa-inggris-interaktif-menggunakan-ifp': {
    heading: 'Rekomendasi Game Bahasa Inggris Interaktif untuk Kelas IFP',
    ariaLabel: 'Navigasi Game Bahasa Inggris Interaktif di IFP',
    summary: 'Perkuat latihan vocabulary, grammar, dan keterampilan membaca dalam kelas Bahasa Inggris menggunakan IFP melalui BEE ENGLISH ARENA, Mancing Kata (pilihan kategori Bahasa Inggris & input vocabulary custom guru), serta HELI RESCUE (bank soal Bahasa Inggris SD–SMA). Gunakan pengamatan pelafalan dan respons siswa sebagai asesmen formatif kelas.',
    links: [
      { href: '/game/bee-english-arena', label: 'BEE ENGLISH ARENA — Game Bahasa Inggris Interaktif SD–SMP' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Latihan Vocabulary & Soal Custom Guru' },
      { href: '/game/helirescue', label: 'HELI RESCUE — Kuis Bahasa Inggris SD–SMA' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas', label: 'Pembelajaran Kolaboratif Menggunakan IFP di Kelas' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Asesmen Formatif Menggunakan IFP di Kelas' },
    ],
  },
  '/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas': {
    heading: 'Rekomendasi Game IPS Interaktif untuk Aktivitas Kelas IFP',
    ariaLabel: 'Navigasi Game Aktivitas IPS Interaktif di IFP',
    summary: 'Padukan eksplorasi peta dan diskusi sosial dengan aktivitas game IPS interaktif di papan interaktif: HELI RESCUE (bank soal IPS, IPAS, Pendidikan Pancasila), Mancing Kata (IPAS, Pancasila, serta kategori SMP IPS/Sejarah/Ekonomi dengan soal custom), Lomba 17an (aktivitas virtual bertema budaya 17 Agustus), dan NusaBoard untuk peta konsep kelompok.',
    links: [
      { href: '/game/helirescue', label: 'HELI RESCUE — Kuis IPS, IPAS & Pendidikan Pancasila' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Game Lintas Mapel IPAS, IPS & Sejarah' },
      { href: '/game/traditional', label: 'Lomba 17an — Aktivitas Virtual Tema Budaya Indonesia' },
      { href: '/game/nusaboard', label: 'NusaBoard — Papan Kolaboratif Peta Konsep & Lini Masa' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/jurnal-guru/pembelajaran-ips-interaktif-menggunakan-ifp', label: 'Panduan Pembelajaran IPS Interaktif Menggunakan IFP' },
      { href: '/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp', label: 'Pembelajaran Sosial Emosional Menggunakan IFP' },
    ],
  },
  '/jurnal-guru/pembelajaran-ips-interaktif-menggunakan-ifp': {
    heading: 'Integrasi Game IPS Interaktif & Cek Pemahaman Sosial di IFP',
    ariaLabel: 'Navigasi Game Pembelajaran IPS Interaktif di IFP',
    summary: 'Dukung pembelajaran IPS interaktif di kelas SD hingga SMA dengan HELI RESCUE (IPS, IPAS, Pendidikan Pancasila), Mancing Kata (materi sosial lintas jenjang & soal custom istilah geografi/sejarah), Lomba 17an (pengenalan nilai budaya Indonesia secara virtual), serta NusaBoard untuk analisis sebab-akibat dan asesmen formatif berbasis observasi guru.',
    links: [
      { href: '/game/helirescue', label: 'HELI RESCUE — Bank Soal IPS, IPAS & Pancasila' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Lintas Mapel IPS, Sejarah & Ekonomi' },
      { href: '/game/traditional', label: 'Lomba 17an — Konteks Budaya Indonesia Virtual' },
      { href: '/game/nusaboard', label: 'NusaBoard — Pemetaan Fenomena Sosial Kolaboratif' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas', label: 'Ide Aktivitas IPS Interaktif Menggunakan IFP di Kelas' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Asesmen Formatif Menggunakan IFP di Kelas' },
    ],
  },
  '/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas': {
    heading: 'Rekomendasi Game Literasi Digital & Berpikir Komputasional di IFP',
    ariaLabel: 'Navigasi Game Literasi Digital & Berpikir Komputasional di IFP',
    summary: 'Perkaya literasi digital di IFP dengan game pemecahan masalah dan pengenalan interaksi AI: HELI RESCUE (soal Informatika & KKA), Jalan Kancil dan Color Link Junior (fondasi berpikir komputasional, bukan kurikulum koding otomatis), Doodle AI (demonstrasi pengenalan gambar TensorFlow.js MobileNet), serta AI Basketball (pemantik diskusi sensor kamera AI & privasi).',
    links: [
      { href: '/game/helirescue', label: 'HELI RESCUE — Bank Soal Informatika & KKA' },
      { href: '/game/kancil', label: 'Jalan Kancil — Puzzle Berpikir Komputasional Solo/Duel/Squad' },
      { href: '/game/color-link-junior', label: 'Color Link Junior — Puzzle Pengenalan Pola Spasial' },
      { href: '/game/doodle', label: 'Doodle AI — Demonstrasi Pengenalan Gambar AI' },
      { href: '/game/ai-basketball', label: 'AI Basketball — Eksplorasi Sensor Kamera AI & Kontrol Sentuh' },
      { href: '/game-logika', label: 'Koleksi Game Logika & KKA' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp', label: 'Pembelajaran Berbasis Masalah Menggunakan IFP' },
    ],
  },
  '/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp': {
    heading: 'Rekomendasi Game Edukasi IFP untuk Kolaborasi, Sportivitas & Refleksi PSE',
    ariaLabel: 'Navigasi Game Pembelajaran Sosial Emosional di IFP',
    summary: 'Latih kerja sama kelompok, komunikasi sehat, sportivitas menang-kalah, jeda gerak, dan refleksi emosi di IFP melalui Lomba 17an (tema kebersamaan virtual), AI Basketball (active brain break kamera/sentuh), Mancing Kata (mode Duel/Trio), Jalan Kancil (regulasi emosi saat gagal di mode Duel/Squad), dan NusaBoard (check-in emosi visual).',
    links: [
      { href: '/game/traditional', label: 'Lomba 17an — Kebersamaan & Sportivitas Kelas Virtual' },
      { href: '/game/ai-basketball', label: 'AI Basketball — Active Brain Break Gerak & Fokus' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Komunikasi & Giliran Mode Duel/Trio' },
      { href: '/game/kancil', label: 'Jalan Kancil — Kolaborasi & Regulasi Emosi Mode Duel/Squad' },
      { href: '/game/nusaboard', label: 'NusaBoard — Papan Check-In Emosi & Apresiasi Kelas' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game-logika', label: 'Koleksi Game Logika' },
      { href: '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas', label: 'Pembelajaran Kolaboratif Menggunakan IFP di Kelas' },
      { href: '/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas', label: 'Refleksi Pembelajaran Menggunakan IFP di Kelas' },
    ],
  },
  '/panduan/memilih-game-edukasi-anak': {
    heading: 'Peta Rekomendasi 17 Game Junior untuk PAUD, TK & SD Kelas 1–3',
    ariaLabel: 'Navigasi Rekomendasi Game Junior PAUD dan TK',
    summary: 'Panduan memilih game edukasi anak usia dini yang aman dan ramah sentuh di papan interaktif (IFP) maupun tablet, dilengkapi pemetaan 17 game Junior berdasarkan tahap perkembangan: motorik halus & pra-menulis, warna/seni/sains awal, literasi & numerasi awal, serta logika spasial.',
    links: [
      { href: '/game-edukasi-anak', label: 'Koleksi Lengkap 17 Game Edukasi Anak PAUD & TK' },
      { href: '/jurnal-guru', label: 'Jurnal Guru & Strategi Pembelajaran IFP' },
      { href: '/game/Jalur%20Huruf', label: 'Jalur Huruf — Tracing Menulis Huruf' },
      { href: '/game/Petualangan%20Satu%20Garis', label: 'Satu Garis — Alur Garis & Perencanaan Gerak' },
      { href: '/game/mewarnai', label: 'Sayuran — Mewarnai Digital & Kreativitas' },
      { href: '/game/belajar-angka', label: 'Lab Warna — Eksperimen Campur Warna Dasar' },
      { href: '/game/dunia-hewan', label: 'Dunia Hewan — Pengenalan Satwa & Makanan' },
      { href: '/game/Gass%20Damkar', label: 'Damkar — Koordinasi Visual & Motorik' },
      { href: '/game/mesin-koleksi', label: 'Mesin Gacha — Sebab-Akibat Sederhana' },
      { href: '/game/pendekar-balon', label: 'Pendekar Balon — Huruf & Angka Dasar' },
      { href: '/game/detektif-cilik', label: 'Detektif — Observasi & Kosakata Benda' },
      { href: '/game/junior-race-academy', label: 'JUNIOR RACE ACADEMY — Numerasi & Literasi PAUD–SD 3' },
      { href: '/game/basket-angka-junior', label: 'Basket Angka Junior — Urutan Bilangan & Berhitung' },
      { href: '/game/adu-tarik-dino', label: 'Tarik Dino — Perbandingan Ukuran & Kekuatan' },
      { href: '/game/color-link-junior', label: 'Color Link Junior — Logika Warna & Jalur' },
      { href: '/game/cocok-logi', label: 'Cocok Logi — Puzzle Bentuk & Warna' },
      { href: '/game/Aksi%20Ambulans', label: 'Ambulans — Logika Spasial Sederhana' },
      { href: '/game/tatap-hap', label: 'Tatap Hap — Ketelitian & Fokus Visual' },
      { href: '/game/gabung-ceria', label: 'Gabung Ceria — Logika Ruang & Fisika Sederhana' },
    ],
  },
  '/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp': {
    heading: 'Rekomendasi Game Seni Rupa, Warna & Kreativitas Visual di IFP',
    ariaLabel: 'Navigasi Game Seni Rupa dan Pembelajaran Visual di IFP',
    summary: 'Dukung pembelajaran visual dan Seni Rupa di papan interaktif (IFP) melalui Doodle AI (sketsa cepat & tebak gambar AI), Puzzle Gambar (unggah karya atau motif sendiri), Lab Warna (campur warna dasar), Sayuran (mewarnai digital), Satu Garis (kontrol garis), dan NusaBoard (kanvas ide kolaboratif).',
    links: [
      { href: '/game/doodle', label: 'Doodle AI — Menggambar Cepat & Ekspresi Visual' },
      { href: '/game/puzzle', label: 'Puzzle Gambar — Komposisi Visual & Unggah Foto Sendiri' },
      { href: '/game/belajar-angka', label: 'Lab Warna — Eksperimen Teori Warna Dasar PAUD–SD' },
      { href: '/game/mewarnai', label: 'Sayuran — Mewarnai Digital PAUD–SD Awal' },
      { href: '/game/Petualangan%20Satu%20Garis', label: 'Satu Garis — Pola Garis & Kontrol Gerak' },
      { href: '/game/nusaboard', label: 'NusaBoard — Kanvas Kolaboratif Pemetaan Ide' },
      { href: '/jurnal-guru/pembelajaran-steam-menggunakan-ifp', label: 'Pembelajaran STEAM Menggunakan IFP' },
      { href: '/game-edukasi-anak', label: 'Koleksi Game Edukasi Anak PAUD & TK' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
    ],
  },
  '/jurnal-guru/pembelajaran-steam-menggunakan-ifp': {
    heading: 'Integrasi Game Seni (Arts), Logika & Pengenalan KKA untuk Proyek STEAM di IFP',
    ariaLabel: 'Navigasi Game Seni, Geometri dan KKA untuk STEAM di IFP',
    summary: 'Hubungkan unsur Seni, Teknologi, Teknik, dan Matematika di IFP lewat Doodle AI, Puzzle Gambar, Lab Warna, HELI RESCUE (bank soal Informatika & KKA), Jalan Kancil, Color Link Junior (fondasi berpikir komputasional, bukan kurikulum coding otomatis), serta Geo Squad dan Ruang.io untuk geometri ruang.',
    links: [
      { href: '/game/doodle', label: 'Doodle AI — Unsur Seni & Demonstrasi Pengenalan Gambar AI' },
      { href: '/game/puzzle', label: 'Puzzle Gambar — Pengamatan Visual & Foto Proyek' },
      { href: '/game/belajar-angka', label: 'Lab Warna — Eksperimen Sains & Warna Dasar' },
      { href: '/game/helirescue', label: 'HELI RESCUE — Bank Soal Informatika & KKA SD–SMA' },
      { href: '/game/kancil', label: 'Jalan Kancil — Berpikir Komputasional & Urutan Langkah' },
      { href: '/game/color-link-junior', label: 'Color Link Junior — Pola Spasial & Aturan Jalur' },
      { href: '/game/geo-squad', label: 'Geo Squad — Pengenalan Geometri & Bangun Datar' },
      { href: '/game/ruang-io', label: 'Ruang.io — Eksplorasi Bangun Ruang 3D' },
      { href: '/game-logika', label: 'Koleksi Game Logika & KKA' },
      { href: '/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas', label: 'Literasi Digital Menggunakan IFP di Kelas' },
      { href: '/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp', label: 'Pembelajaran Berbasis Visual Menggunakan IFP' },
    ],
  },
  '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas': {
    heading: 'Rekomendasi Aktivitas Gerak, PJOK & Kebersamaan di Layar IFP',
    ariaLabel: 'Navigasi Aktivitas PJOK dan Gerak Aktif di IFP',
    summary: 'Hadirkan pemanasan aktif PJOK dan ice breaking kelas di papan interaktif melalui AI Basketball (deteksi gerak kamera MediaPipe & sentuh alternatif, bukan alat ukur kebugaran formal), Lomba 17an (aktivitas virtual bertema budaya 17 Agustus, bukan pengganti olahraga lapangan), HELI RESCUE dan Mancing Kata (pilihan materi PJOK), serta Basket Angka Junior.',
    links: [
      { href: '/game/ai-basketball', label: 'AI Basketball — Aktivitas Gerak PJOK Kamera & Sentuh' },
      { href: '/game/traditional', label: 'Lomba 17an — Ice Breaking & Sportivitas Virtual' },
      { href: '/game/helirescue', label: 'HELI RESCUE — Bank Soal Lintas Mapel termasuk PJOK' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Pilihan Materi PJOK & Soal Custom Guru' },
      { href: '/game/basket-angka-junior', label: 'Basket Angka Junior — Tema Basket PAUD–SD Kelas 3' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game-edukasi-anak', label: 'Koleksi Game Edukasi Anak PAUD & TK' },
      { href: '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas', label: 'Pembelajaran Kolaboratif Menggunakan IFP di Kelas' },
    ],
  },
  '/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp': {
    heading: 'Penerapan Nilai Gotong Royong, Pendidikan Pancasila & Budaya Indonesia melalui Game IFP',
    ariaLabel: 'Navigasi Game Pendidikan Pancasila, Gotong Royong dan Budaya di IFP',
    summary: 'Perkuat praktik gotong royong, Pendidikan Pancasila, dan pengenalan budaya Indonesia dalam pembelajaran kooperatif di IFP menggunakan Lomba 17an (tema perayaan 17 Agustus virtual), HELI RESCUE (bank soal Pendidikan Pancasila SD–SMA), Mancing Kata (materi Pancasila & soal custom guru), GEBUK GULING MATEMATIKA, dan Wonder Math Arena.',
    links: [
      { href: '/game/traditional', label: 'Lomba 17an — Kebersamaan & Tema Budaya 17 Agustus' },
      { href: '/game/helirescue', label: 'HELI RESCUE — Bank Soal Pendidikan Pancasila SD–SMA' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Materi Pendidikan Pancasila & Mode Duel/Trio' },
      { href: '/game/gebuk-guling-matematika', label: 'GEBUK GULING MATEMATIKA — Duel Sportif Tema 17 Agustus' },
      { href: '/game/wonder-math-arena', label: 'Wonder Math Arena — Kompetisi Tim Bertema Wisata Nusantara' },
      { href: '/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp', label: 'Pembelajaran Sosial Emosional Menggunakan IFP' },
      { href: '/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas', label: 'Ide Aktivitas IPS Interaktif Menggunakan IFP di Kelas' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
    ],
  },
  '/game/tanzib': {
    heading: 'Konteks Pembelajaran Pendidikan Agama Islam (PAI) & Tautan Kelas',
    ariaLabel: 'Navigasi Edukasi Terkait Tanzib PAI',
    summary: 'Tanzib (Timbangan Ajaib Tanzib) adalah media pembelajaran Pendidikan Agama Islam interaktif pada katalog portal untuk SD, SMP, dan SMA yang memadukan logika dengan pengetahuan dasar agama Islam. Guru disarankan meninjau kesesuaian soal di aplikasi tersemat dengan bab materi pertemuan.',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/game/celestial-weaver', label: 'Celestial Weaver — Susun Ayat Al-Qur’an (PAI)' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Lintas Mapel termasuk PAI & Budi Pekerti' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Aktivitas Pembelajaran Interaktif IFP' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Asesmen Formatif Menggunakan IFP' },
    ],
  },
  '/game/celestial-weaver': {
    heading: 'Konteks Pembelajaran Pendidikan Agama Islam (PAI) & Al-Qur’an di Kelas',
    ariaLabel: 'Navigasi Edukasi Terkait Celestial Weaver PAI',
    summary: 'Celestial Weaver adalah permainan edukasi Pendidikan Agama Islam pada katalog portal untuk SD, SMP, dan SMA yang melatih siswa menyusun dan mengingat urutan ayat suci Al-Qur’an secara interaktif sebagai pendamping murojaah kelas (bukan pengganti bimbingan talaqqi dan tajwid langsung oleh guru PAI).',
    links: [
      { href: '/', label: 'Beranda Papan Interaktif' },
      { href: '/game/tanzib', label: 'Tanzib — Logika & Pengetahuan Dasar PAI' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Lintas Mapel termasuk PAI & Budi Pekerti' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp', label: 'Jurnal Guru: Pembelajaran Kooperatif Menggunakan IFP' },
      { href: '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas', label: 'Jurnal Guru: Aktivitas Pembelajaran Interaktif IFP' },
    ],
  },
  '/jurnal-guru/game-seni-rupa-interaktif-menggunakan-ifp': {
    heading: 'Game Seni Rupa & Kreativitas Interaktif untuk Kelas SD di IFP',
    ariaLabel: 'Navigasi Game Seni Rupa dan Panduan Visual di IFP',
    summary: 'Eksplorasi unsur garis, bentuk, warna dasar, dan komposisi di kelas Seni Rupa SD menggunakan IFP sebagai studio demonstrasi sebelum berkarya manual. Memadukan aktivitas langsung menggambar/mewarnai (Doodle AI, Lab Warna, Sayuran, NusaBoard) dan pendamping komposisi visual (Satu Garis, Puzzle Gambar).',
    links: [
      { href: '/jurnal-guru', label: 'Jurnal Guru Papan Interaktif' },
      { href: '/game/doodle', label: 'Doodle AI — Sketsa Cepat & Pengenalan Bentuk Visual' },
      { href: '/game/belajar-angka', label: 'Lab Warna — Eksperimen Warna Dasar (Game Junior)' },
      { href: '/game/mewarnai', label: 'Sayuran — Mewarnai Bidang & Kontras Warna (Game Junior)' },
      { href: '/game/nusaboard', label: 'NusaBoard — Kanvas Gambar & Papan Sketsa Kolaboratif' },
      { href: '/game/Petualangan%20Satu%20Garis', label: 'Satu Garis — Kontrol Tarikan Garis Kontinu (Game Junior)' },
      { href: '/game/puzzle', label: 'Puzzle Gambar — Pengamatan Komposisi & Bagian-Utuh' },
      { href: '/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp', label: 'Pembelajaran Berbasis Visual Menggunakan IFP' },
      { href: '/jurnal-guru/pembelajaran-steam-menggunakan-ifp', label: 'Pembelajaran STEAM Menggunakan IFP' },
      { href: '/game-edukasi-anak', label: 'Koleksi 17 Game Edukasi Anak PAUD & SD Awal' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
    ],
  },
  '/jurnal-guru/game-pjok-interaktif-menggunakan-ifp': {
    heading: 'Game PJOK, Aktivitas Gerak & Review Teori Olahraga di IFP',
    ariaLabel: 'Navigasi Game PJOK dan Aktivitas Kelas di IFP',
    summary: 'Dukung sesi teori PJOK di dalam kelas, peregangan aktif, dan pembiasaan sportivitas melalui AI Basketball (sensor gerak kamera MediaPipe & sentuh alternatif, bukan alat ukur kebugaran formal), Lomba 17an (aktivitas virtual bertema lomba tradisional, bukan pengganti olahraga lapangan), HELI RESCUE, Mancing Kata (kategori PJOK), serta Basket Angka Junior.',
    links: [
      { href: '/jurnal-guru', label: 'Jurnal Guru Papan Interaktif' },
      { href: '/game/ai-basketball', label: 'AI Basketball — Aktivitas Gerak Kamera & Sentuh' },
      { href: '/game/traditional', label: 'Lomba 17an — Permainan Virtual Bertema Budaya 17 Agustus' },
      { href: '/game/helirescue', label: 'HELI RESCUE — Bank Soal Terstruktur termasuk PJOK' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Kategori PJOK & Soal Custom Guru' },
      { href: '/game/basket-angka-junior', label: 'Basket Angka Junior — Tema Basket PAUD–SD Kelas 3' },
      { href: '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas', label: 'Ide Aktivitas Pembelajaran Interaktif Menggunakan IFP' },
      { href: '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas', label: 'Pembelajaran Kolaboratif Menggunakan IFP di Kelas' },
      { href: '/jurnal-guru/game-pendidikan-pancasila-interaktif-menggunakan-ifp', label: 'Game Pendidikan Pancasila Interaktif Menggunakan IFP' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
    ],
  },
  '/jurnal-guru/game-pendidikan-pancasila-interaktif-menggunakan-ifp': {
    heading: 'Game Pendidikan Pancasila, Musyawarah & Budaya Indonesia di IFP',
    ariaLabel: 'Navigasi Game Pendidikan Pancasila dan Budaya Indonesia di IFP',
    summary: 'Integrasikan kuis materi Pendidikan Pancasila terverifikasi di Mancing Kata (dengan soal custom guru) dan HELI RESCUE (SD–SMA) bersama pemantik budaya Indonesia Lomba 17an serta papan musyawarah kesepakatan kelas NusaBoard secara partisipatif di layar IFP.',
    links: [
      { href: '/jurnal-guru', label: 'Jurnal Guru Papan Interaktif' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Kategori Pendidikan Pancasila & Soal Custom' },
      { href: '/game/helirescue', label: 'HELI RESCUE — Bank Soal Pendidikan Pancasila SD–SMA' },
      { href: '/game/traditional', label: 'Lomba 17an — Pemantik Budaya Indonesia & Gotong Royong' },
      { href: '/game/nusaboard', label: 'NusaBoard — Papan Musyawarah & Kesepakatan Kelas' },
      { href: '/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp', label: 'Pembelajaran Kooperatif Menggunakan IFP' },
      { href: '/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp', label: 'Pembelajaran Sosial Emosional Menggunakan IFP' },
      { href: '/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas', label: 'Ide Aktivitas IPS Interaktif Menggunakan IFP di Kelas' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
    ],
  },
  '/jurnal-guru/game-koding-kecerdasan-artifisial-ifp': {
    heading: 'Game Berpikir Komputasional, Demonstrasi AI & KKA di IFP',
    ariaLabel: 'Navigasi Game Koding dan Kecerdasan Artifisial KKA di IFP',
    summary: 'Bedakan secara jujur lima ranah KKA di kelas: berpikir komputasional (Jalan Kancil, Color Link Junior, Satu Garis, Ambulans), pemrograman nyata, demonstrasi model AI pra-latih (Doodle AI TensorFlow.js MobileNet, AI Basketball MediaPipe), literasi AI (HELI RESCUE bank soal Informatika & KKA), dan pelatihan model AI.',
    links: [
      { href: '/jurnal-guru', label: 'Jurnal Guru Papan Interaktif' },
      { href: '/game/kancil', label: 'Jalan Kancil — Urutan Langkah & Debugging Jalur' },
      { href: '/game/color-link-junior', label: 'Color Link Junior — Pola Spasial & Aturan Batasan' },
      { href: '/game/helirescue', label: 'HELI RESCUE — Bank Soal Informatika & KKA SD–SMA' },
      { href: '/game/doodle', label: 'Doodle AI — Demonstrasi Pengenalan Gambar MobileNet' },
      { href: '/game/Petualangan%20Satu%20Garis', label: 'Satu Garis — Penalaran Lintasan Pra-Koding' },
      { href: '/game/Aksi%20Ambulans', label: 'Ambulans — Orientasi Arah & Urutan Rute' },
      { href: '/game/ai-basketball', label: 'AI Basketball — Demonstrasi Deteksi Gerak MediaPipe' },
      { href: '/game-logika', label: 'Koleksi Game Logika & Berpikir Komputasional' },
      { href: '/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas', label: 'Literasi Digital Menggunakan IFP di Kelas' },
      { href: '/jurnal-guru/pembelajaran-steam-menggunakan-ifp', label: 'Pembelajaran STEAM Menggunakan IFP' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Asesmen Formatif Menggunakan IFP di Kelas' },
    ],
  },
  '/jurnal-guru/game-pendidikan-agama-islam-interaktif-ifp': {
    heading: 'Game Pendidikan Agama Islam (PAI) Pendamping Guru di IFP',
    ariaLabel: 'Navigasi Game Pendidikan Agama Islam PAI di IFP',
    summary: 'Pemanfaatan Tanzib (Timbangan Ajaib Tanzib — katalog portal SD–SMA), Celestial Weaver (susun urutan ayat Al-Qur’an — katalog portal SD–SMA, bukan pengganti talaqqi/tajwid langsung guru), dan Mancing Kata (kategori PAI & Budi Pekerti serta soal custom guru) secara santun di layar IFP.',
    links: [
      { href: '/jurnal-guru', label: 'Jurnal Guru Papan Interaktif' },
      { href: '/game/tanzib', label: 'Tanzib — Logika & Pengetahuan Dasar PAI' },
      { href: '/game/celestial-weaver', label: 'Celestial Weaver — Latihan Urutan Ayat Al-Qur’an' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Kategori PAI & Budi Pekerti + Soal Custom' },
      { href: '/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp', label: 'Pembelajaran Kooperatif Menggunakan IFP' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Asesmen Formatif Menggunakan IFP di Kelas' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
    ],
  },
};

const BATCH4_ARTICLE_HEADLINES = {
  '/jurnal-guru/game-seni-rupa-interaktif-menggunakan-ifp': 'Game Seni Rupa Interaktif Menggunakan IFP untuk SD',
  '/jurnal-guru/game-pjok-interaktif-menggunakan-ifp': 'Game PJOK Interaktif Menggunakan IFP untuk Aktivitas Kelas',
  '/jurnal-guru/game-pendidikan-pancasila-interaktif-menggunakan-ifp': 'Game Pendidikan Pancasila Interaktif Menggunakan IFP',
  '/jurnal-guru/game-koding-kecerdasan-artifisial-ifp': 'Game Koding dan Kecerdasan Artifisial (KKA) Menggunakan IFP',
  '/jurnal-guru/game-pendidikan-agama-islam-interaktif-ifp': 'Game Pendidikan Agama Islam Interaktif Menggunakan IFP',
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

  // Inject Article + BreadcrumbList JSON-LD in initial HTML for the 5 Batch 4 subject articles (leaves all 119 existing routes untouched)
  if (BATCH4_ARTICLE_HEADLINES[entry.path]) {
    const headline = BATCH4_ARTICLE_HEADLINES[entry.path];
    const jsonLdPayload = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description: meta.description,
        author: { '@type': 'Person', name: 'Deni Ranoptri, M.Pd' },
        publisher: {
          '@type': 'Organization',
          name: 'Papan Interaktif',
          logo: { '@type': 'ImageObject', url: 'https://papaninteraktif.com/icon.svg' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': meta.canonical },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://papaninteraktif.com/' },
          { '@type': 'ListItem', position: 2, name: 'Jurnal Guru', item: 'https://papaninteraktif.com/jurnal-guru' },
          { '@type': 'ListItem', position: 3, name: headline, item: meta.canonical },
        ],
      },
    ];
    html = html.replace(
      '</head>',
      `    <script type="application/ld+json" data-seo-managed="true">${JSON.stringify(jsonLdPayload)}</script>\n</head>`
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
