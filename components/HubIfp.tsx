import React, { useEffect } from 'react';
import { GameConfigWithTags } from '../types';
import MenuCard from './MenuCard';

interface HubIfpProps {
  locale?: "id" | "en";
  games: GameConfigWithTags[];
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

export const HubIfp: React.FC<HubIfpProps> = ({ games, onBack, navigateTo, locale = "id" }) => {
  useEffect(() => {
    const isEn = locale === 'en';
    document.documentElement.lang = locale;

    document.title = isEn 
      ? 'Educational Games for Interactive Flat Panels | Papan Interaktif'
      : 'Game Edukasi IFP & Papan Interaktif Digital | Papan Interaktif';
    
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const desc = isEn
      ? 'Interactive educational games optimized for Interactive Flat Panels (IFP) and large touch screens in the classroom. Perfect for student collaboration and ice breaking.'
      : 'Game edukasi interaktif yang dioptimalkan untuk Interactive Flat Panel (IFP) dan layar sentuh besar di kelas. Cocok untuk ice breaking dan kolaborasi siswa.';
    
    setMeta('description', desc);
    setMeta('og:title', document.title, true);
    setMeta('og:description', desc, true);
    
    const baseUrl = window.location.origin;
    const idPath = '/game-edukasi-ifp';
    const enPath = '/en/educational-games-for-interactive-flat-panels';
    const currentUrl = baseUrl + (isEn ? enPath : idPath);
    
    setMeta('og:url', currentUrl, true);
    setMeta('og:locale', isEn ? 'en_US' : 'id_ID', true);
    setMeta('og:type', 'website', true);

    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // Hreflang
    const updateHreflang = (lang, url) => {
      let link = document.querySelector(`link[hreflang="${lang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    updateHreflang('id', baseUrl + idPath);
    updateHreflang('en', baseUrl + enPath);
    updateHreflang('x-default', baseUrl + idPath);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', 'Game Edukasi IFP & Papan Interaktif Digital | Papan Interaktif');
    setMeta('twitter:description', 'Game edukasi interaktif yang dioptimalkan untuk Interactive Flat Panel (IFP) dan layar sentuh besar di kelas. Cocok untuk ice breaking dan kolaborasi siswa.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/game-edukasi-ifp');
    
    // JSON-LD
    let scriptLd = document.querySelector<HTMLScriptElement>('script#jsonld-hub');
    if (!scriptLd) {
      scriptLd = document.createElement('script');
      scriptLd.id = 'jsonld-hub';
      scriptLd.type = 'application/ld+json';
      document.head.appendChild(scriptLd);
    }
    
    const gameList = games.map((g, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": window.location.origin + '/game/' + encodeURIComponent(g.id)
    }));
    
    scriptLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Game Interaktif Ruang Kelas",
      "description": locale === 'en' ? "A collection of interactive educational games designed for Interactive Flat Panels." : "Kumpulan game edukasi yang dirancang khusus untuk layar sentuh besar IFP di kelas.",
      "url": window.location.origin + '/game-edukasi-ifp',
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": gameList
      }
    });

    return () => {
      document.title = 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif';
      setMeta('description', 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru. Belajar sambil bermain dengan berbagai pilihan game.');
      canonical?.setAttribute('href', window.location.origin + '/');
      const ld = document.querySelector('script#jsonld-hub');
      if (ld) ld.remove();
      // other metas could be cleaned up but keeping them generic is okay for SPA or let index.html defaults take over
    };
  }, [games]);

  const handleCardClick = (id: string) => {
    try {
      const audio = new Audio('https://actions.google.com/sounds/v1/water/water_splash.ogg');
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } catch(e) {}
    navigateTo('gameDetail', locale === 'en' ? `/en/game/${encodeURIComponent(id)}` : `/game/${encodeURIComponent(id)}`);
  };

  return (
    <div className="min-h-[100dvh] bg-[#DDEBF8] p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <header className="bg-gradient-to-br from-emerald-50 to-teal-50 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl border-4 border-white relative overflow-hidden flex flex-col gap-6 text-center animate-fadeIn">
          <button onClick={onBack} className="absolute top-6 left-6 flex items-center gap-2 text-[#0C1A69] font-black hover:text-blue-600 transition-colors bg-white hover:bg-blue-50 px-4 py-2 rounded-xl text-sm shadow-sm border-2 border-transparent hover:border-blue-100 z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            KEMBALI
          </button>
          
          <div className="mt-8 relative z-10">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest mb-4 shadow-sm">
              Untuk Papan Interaktif Digital (IFP)
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0C1A69] tracking-tight leading-[1.1] drop-shadow-sm mb-6">
              Game Interaktif Ruang Kelas
            </h1>
            <p className="text-sm md:text-lg text-gray-700 font-bold max-w-2xl mx-auto leading-relaxed">
              Maksimalkan penggunaan Interactive Flat Panel (IFP) atau smartboard di ruang kelas Anda. Game dalam kategori ini sangat cocok digunakan sebagai <em>ice breaking</em>, kuis interaktif, dan media kolaborasi kelompok karena mendukung area sentuh yang responsif serta elemen visual yang besar dan jelas dari jarak jauh.
            </p>
            <div className="inline-block bg-white text-[#0C1A69] px-5 py-2 rounded-full font-black text-xs md:text-sm shadow-sm border-2 border-[#0C1A69]/10 mt-4 hover:scale-105 transition-transform">
              <a href={locale === "en" ? "/en/guides/using-educational-games-on-interactive-flat-panels" : "/panduan/penggunaan-ifp-papan-interaktif-digital"} onClick={(e) => { e.preventDefault(); navigateTo('guideIfp', locale === "en" ? "/en/guides/using-educational-games-on-interactive-flat-panels" : "/panduan/penggunaan-ifp-papan-interaktif-digital"); }}>
                {locale === "en" ? "📖 Guide: Using Educational Games on IFPs" : "📖 Baca: Panduan Menggunakan IFP di Kelas"}
              </a>
            </div>

          </div>
        </header>

        <main className="flex flex-col gap-6">
          <h2 className="sr-only">Daftar Game</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {games.map((game) => (
              <article key={game.id} className="w-full aspect-[4/4.5]">
                <MenuCard config={game} onClick={() => handleCardClick(game.id)} locale={locale} />
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
