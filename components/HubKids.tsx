import React, { useEffect } from 'react';
import { GameConfigWithTags } from '../types';
import MenuCard from './MenuCard';

interface HubKidsProps {
  games: GameConfigWithTags[];
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

export const HubKids: React.FC<HubKidsProps> = ({ games, onBack, navigateTo }) => {
  useEffect(() => {
    document.title = 'Game Edukasi Anak PAUD & TK Interaktif | Papan Interaktif';
    
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

    setMeta('description', 'Kumpulan game edukasi anak PAUD dan TK. Bermain sambil belajar logika, literasi, dan numerasi dasar dengan karakter lucu dan interaktif.');
    setMeta('og:title', 'Game Edukasi Anak PAUD & TK Interaktif | Papan Interaktif', true);
    setMeta('og:description', 'Kumpulan game edukasi anak PAUD dan TK. Bermain sambil belajar logika, literasi, dan numerasi dasar dengan karakter lucu dan interaktif.', true);
    setMeta('og:url', window.location.origin + '/game-edukasi-anak', true);
    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', 'Game Edukasi Anak PAUD & TK Interaktif | Papan Interaktif');
    setMeta('twitter:description', 'Kumpulan game edukasi anak PAUD dan TK. Bermain sambil belajar logika, literasi, dan numerasi dasar dengan karakter lucu dan interaktif.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/game-edukasi-anak');
    
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
      "name": "Game Edukasi Anak",
      "description": "Kumpulan game edukasi anak PAUD dan TK. Bermain sambil belajar logika, literasi, dan numerasi dasar dengan karakter lucu dan interaktif.",
      "url": window.location.origin + '/game-edukasi-anak',
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
    navigateTo('gameDetail', `/game/${encodeURIComponent(id)}`);
  };

  return (
    <div className="min-h-[100dvh] bg-[#DDEBF8] p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <header className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl border-4 border-white relative overflow-hidden flex flex-col gap-6 text-center animate-fadeIn">
          <button onClick={onBack} className="absolute top-6 left-6 flex items-center gap-2 text-[#0C1A69] font-black hover:text-blue-600 transition-colors bg-white hover:bg-blue-50 px-4 py-2 rounded-xl text-sm shadow-sm border-2 border-transparent hover:border-blue-100 z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            KEMBALI
          </button>
          
          <div className="mt-8 relative z-10">
            <div className="inline-block bg-[#FFEBEE] text-[#B71C1C] px-4 py-1.5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest mb-4 shadow-sm">
              Untuk PAUD & TK
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0C1A69] tracking-tight leading-[1.1] drop-shadow-sm mb-6">
              Game Edukasi Anak
            </h1>
            <p className="text-sm md:text-lg text-gray-700 font-bold max-w-2xl mx-auto leading-relaxed">
              Masa usia dini adalah masa emas (golden age) di mana anak-anak belajar paling efektif melalui aktivitas bermain. Koleksi game edukasi anak PAUD dan TK ini dirancang khusus untuk merangsang perkembangan motorik halus, pengenalan warna, bentuk, serta literasi dan numerasi dasar dalam lingkungan yang aman, menyenangkan, dan interaktif.
            </p>
            <div className="inline-block bg-white text-[#0C1A69] px-5 py-2 rounded-full font-black text-xs md:text-sm shadow-sm border-2 border-[#0C1A69]/10 mt-4 hover:scale-105 transition-transform">
              <a href="/panduan/memilih-game-edukasi-anak" onClick={(e) => { e.preventDefault(); navigateTo('guideKids', '/panduan/memilih-game-edukasi-anak'); }}>
                📖 Baca: Panduan Memilih Game Anak PAUD/TK
              </a>
            </div>

          </div>
        </header>

        <main className="flex flex-col gap-6">
          <h2 className="sr-only">Daftar Game</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {games.map((game) => (
              <article key={game.id} className="w-full aspect-[4/4.5]">
                <MenuCard config={game} onClick={() => handleCardClick(game.id)} />
              </article>
            ))}
          </div>
        </main>
        
        <footer className="bg-white/80 rounded-3xl p-8 text-center text-[#0C1A69] shadow-sm border-2 border-white mt-12">
           <h2 className="text-xl font-black mb-4">Mengapa Memilih Game Edukasi Ini?</h2>
           <p className="text-sm font-bold text-gray-600 max-w-3xl mx-auto">
             Setiap permainan di sini telah dievaluasi untuk memastikan kesesuaian usia. Tanpa iklan yang mengganggu saat bermain, aplikasi ini 100% aman digunakan sebagai media pendamping belajar di rumah maupun ice breaking di sekolah.
           </p>
        </footer>
      </div>
    </div>
  );
};
