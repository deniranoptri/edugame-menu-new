const fs = require('fs');

const idSlugs = [
  'memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif',
  'panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas',
  'aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas',
  'aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas',
  'pembelajaran-matematika-interaktif-menggunakan-ifp',
  'aktivitas-ipa-interaktif-menggunakan-ifp-di-kelas',
  'aktivitas-bahasa-indonesia-interaktif-menggunakan-ifp-di-kelas',
  'pembelajaran-bahasa-indonesia-interaktif-menggunakan-ifp',
  'pembelajaran-bahasa-inggris-interaktif-menggunakan-ifp',
  'aktivitas-ips-interaktif-menggunakan-ifp-di-kelas',
  'pembelajaran-ips-interaktif-menggunakan-ifp',
  'gamifikasi-pembelajaran-menggunakan-ifp',
  'pembelajaran-steam-menggunakan-ifp',
  'pembelajaran-sosial-emosional-menggunakan-ifp',
  'pembelajaran-berbasis-inkuiri-menggunakan-ifp',
  'flipped-classroom-menggunakan-ifp',
  'blended-learning-station-rotation-menggunakan-ifp',
  'pembelajaran-berbasis-visual-menggunakan-ifp',
  'asesmen-formatif-menggunakan-ifp-di-kelas',
  'pembelajaran-kolaboratif-menggunakan-ifp-di-kelas',
  'strategi-pengelolaan-kelas-menggunakan-ifp',
  'fitur-ifp-untuk-pembelajaran-interaktif',
  'cara-memilih-ifp-untuk-pembelajaran-di-sekolah',
  'pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas',
  'pembelajaran-mendalam-menggunakan-ifp-di-kelas',
  'modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif',
  'pembelajaran-inklusif-menggunakan-ifp-di-kelas',
  'pembelajaran-berbasis-proyek-menggunakan-ifp',
  'asesmen-diagnostik-menggunakan-ifp-di-kelas',
  'refleksi-pembelajaran-menggunakan-ifp-di-kelas',
  'literasi-digital-menggunakan-ifp-di-kelas',
  'asesmen-autentik-menggunakan-ifp-di-kelas',
  'pembelajaran-berbasis-masalah-menggunakan-ifp',
  'pembelajaran-kooperatif-menggunakan-ifp'
];

const registry = idSlugs.map(idSlug => {
  const isGamification = idSlug === 'gamifikasi-pembelajaran-menggunakan-ifp';
  const isDifferentiated = idSlug === 'pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas';
  
  let enSlug = null;
  if (isGamification) enSlug = 'gamification-using-interactive-flat-panel';
  if (isDifferentiated) enSlug = 'differentiated-learning-using-interactive-flat-panel';
  
  return {
    idSlug,
    enSlug,
    idUrl: `https://papaninteraktif.com/jurnal-guru/${idSlug}`,
    enUrl: enSlug ? `https://papaninteraktif.com/en/journal/${enSlug}` : null,
    articleKey: idSlug.replace(/-./g, x=>x[1].toUpperCase()), // roughly... not perfect but it's just a shadow registry
    languagePair: enSlug ? true : false
  };
});

fs.writeFileSync('seo/article-registry.json', JSON.stringify(registry, null, 2));
