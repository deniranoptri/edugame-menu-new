import fs from 'fs';

let app = fs.readFileSync('App.tsx', 'utf-8');

const parseRouteFn = `
// SURGICAL ROUTE PARSER - PHASE 8.1 / 9
interface ParsedRoute {
  locale: string;
  type: 'home' | 'privacy' | 'contact' | 'about' | 'blog' | 'gameDetail' | 'hubKids' | 'hubLogic' | 'hubIfp' | 'guideIfp' | 'guideKids' | 'unknown';
  slug?: string;
}

const parseRoute = (pathname: string): ParsedRoute => {
  const parts = pathname.split('/').filter(Boolean);
  let locale = 'id';
  let rest = parts;

  // Architectural preparation for future locales
  if (parts[0] === 'en') {
    locale = 'en';
    rest = parts.slice(1);
  }

  const pathType = rest.length > 0 ? rest.join('/') : '';
  
  if (rest[0] === 'game' && rest[1]) {
    return { locale, type: 'gameDetail', slug: rest[1] };
  } else if (locale === 'id' && pathType === 'game-edukasi-anak') {
    return { locale, type: 'hubKids' };
  } else if (locale === 'id' && pathType === 'game-logika') {
    return { locale, type: 'hubLogic' };
  } else if (locale === 'id' && pathType === 'game-edukasi-ifp') {
    return { locale, type: 'hubIfp' };
  } else if (locale === 'en' && pathType === 'educational-games-for-interactive-flat-panels') {
    return { locale, type: 'hubIfp' };
  } else if (locale === 'id' && pathType === 'privacy-policy') {
    return { locale, type: 'privacy' };
  } else if (locale === 'id' && pathType === 'contact') {
    return { locale, type: 'contact' };
  } else if (locale === 'id' && pathType === 'about') {
    return { locale, type: 'about' };
  } else if (locale === 'id' && pathType === 'jurnal-guru') {
    return { locale, type: 'blog' };
  } else if (locale === 'id' && pathType === 'panduan/penggunaan-ifp-papan-interaktif-digital') {
    return { locale, type: 'guideIfp' };
  } else if (locale === 'en' && pathType === 'guides/using-educational-games-on-interactive-flat-panels') {
    return { locale, type: 'guideIfp' };
  } else if (locale === 'id' && pathType === 'panduan/memilih-game-edukasi-anak') {
    return { locale, type: 'guideKids' };
  } else if (pathType === '') {
    // Only allow root for en if we eventually build an en home. For now, fallback id.
    if (locale === 'en') return { locale: 'en', type: 'unknown' };
    return { locale, type: 'home' };
  }
  
  return { locale, type: 'unknown' };
};
`;

app = app.replace(/\/\/ SURGICAL ROUTE PARSER[\s\S]*?};\n/, parseRouteFn);

fs.writeFileSync('App.tsx', app);
