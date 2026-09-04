import React, { useEffect } from 'react';
import { GameConfigWithTags } from '../types';
import MenuCard from './MenuCard';

interface HubLogicProps {
  games: GameConfigWithTags[];
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

export const HubLogic: React.FC<HubLogicProps> = ({ games, onBack, navigateTo }) => {
  useEffect(() => {
    document.title = 'Game Logika & Asah Otak Anak | Papan Interaktif';
    
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

    setMeta('description', 'Kumpulan game logika interaktif untuk mengasah otak, kemampuan pemecahan masalah, dan pola pikir analitis siswa. Mainkan game puzzle, fisika, dan strategi.');
    setMeta('og:title', 'Game Logika & Asah Otak Anak | Papan Interaktif', true);
    setMeta('og:description', 'Kumpulan game logika interaktif untuk mengasah otak, kemampuan pemecahan masalah, dan pola pikir analitis siswa. Mainkan game puzzle, fisika, dan strategi.', true);
    setMeta('og:url', window.location.origin + '/game-logika', true);
    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', 'Game Logika & Asah Otak Anak | Papan Interaktif');
    setMeta('twitter:description', 'Kumpulan game logika interaktif untuk mengasah otak, kemampuan pemecahan masalah, dan pola pikir analitis siswa. Mainkan game puzzle, fisika, dan strategi.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/game-logika');
    
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
      "name": "Game Logika & Pemecahan Masalah",
      "description": "Kumpulan game logika interaktif untuk mengasah otak, kemampuan pemecahan masalah, dan pola pikir analitis siswa. Mainkan game puzzle, fisika, dan strategi.",
      "url": window.location.origin + '/game-logika',
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
        
        <header className="bg-gradient-to-br from-indigo-50 to-blue-50 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl border-4 border-white relative overflow-hidden flex flex-col gap-6 text-center animate-fadeIn">
          <button onClick={onBack} className="absolute top-6 left-6 flex items-center gap-2 text-[#0C1A69] font-black hover:text-blue-600 transition-colors bg-white hover:bg-blue-50 px-4 py-2 rounded-xl text-sm shadow-sm border-2 border-transparent hover:border-blue-100 z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            KEMBALI
          </button>
          
          <div className="mt-8 relative z-10">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest mb-4 shadow-sm">
              Kemampuan Kognitif & Analisis
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0C1A69] tracking-tight leading-[1.1] drop-shadow-sm mb-6">
              Game Logika & Pemecahan Masalah
            </h1>
            <p className="text-sm md:text-lg text-gray-700 font-bold max-w-2xl mx-auto leading-relaxed">
              Mengembangkan cara berpikir tingkat tinggi (Higher Order Thinking Skills) membutuhkan latihan yang konsisten. Koleksi game logika ini mengajak siswa untuk mengenali pola, memecahkan teka-teki ruang, mengatur strategi, serta memahami hubungan sebab-akibat melalui simulasi fisika yang menyenangkan.
            </p>
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
      </div>
    </div>
  );
};
