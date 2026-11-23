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

  const handleSpaLink = (e: React.MouseEvent<HTMLAnchorElement>, view: string, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigateTo(view, path);
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0C1A69] tracking-tight leading-[1.1] drop-shadow-sm mb-4">
              Game Edukasi Anak
            </h1>
            <nav aria-label="Breadcrumb" className="mb-5 flex justify-center">
              <ol className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-semibold text-gray-500">
                <li>
                  <a href="/" onClick={(e) => handleSpaLink(e, 'home', '/')} className="hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded">
                    Beranda
                  </a>
                </li>
                <li><span aria-hidden="true" className="opacity-50 mx-1">/</span></li>
                <li aria-current="page" className="text-[#0C1A69]">
                  Game Edukasi Anak
                </li>
              </ol>
            </nav>
            <p className="text-sm md:text-lg text-gray-700 font-bold max-w-2xl mx-auto leading-relaxed">
              Masa usia dini adalah masa emas (golden age) di mana anak-anak belajar paling efektif melalui aktivitas bermain. Koleksi game edukasi anak PAUD dan TK ini dirancang khusus untuk merangsang perkembangan motorik halus, pengenalan warna, bentuk, serta literasi dan numerasi dasar dalam lingkungan yang aman, menyenangkan, dan interaktif.
            </p>
            <div className="inline-block bg-white text-[#0C1A69] px-5 py-2 rounded-full font-black text-xs md:text-sm shadow-sm border-2 border-[#0C1A69]/10 mt-4 hover:scale-105 transition-transform">
              <a href="/panduan/memilih-game-edukasi-anak" onClick={(e) => handleSpaLink(e, 'guideKids', '/panduan/memilih-game-edukasi-anak')} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded">
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
        
        <section aria-label="Peta Tematik 17 Game Junior PAUD, TK dan SD Awal" className="bg-white/85 rounded-3xl p-6 md:p-8 text-[#0C1A69] shadow-sm border-2 border-white mt-4">
          <h2 className="text-xl md:text-2xl font-black mb-2 text-center">
            Peta Tematik 17 Game Junior untuk PAUD, TK &amp; SD Kelas 1–3
          </h2>
          <p className="text-sm text-gray-700 font-medium max-w-3xl mx-auto text-center mb-6 leading-relaxed">
            Seluruh koleksi 17 game Junior dirancang dengan kontrol sentuh ramah anak untuk layar IFP kelas maupun tablet. Guru dan orang tua dapat memilih permainan sesuai fokus perkembangan berikut:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="bg-blue-50/70 rounded-2xl p-4 border border-blue-100 space-y-2">
              <h3 className="font-black text-[#0C1A69]">1. Literasi Awal &amp; Pra-Menulis</h3>
              <p className="leading-relaxed">
                Latih pengenalan huruf, kosakata benda, dan motorik halus menulis lewat{' '}
                <a href="/game/Jalur%20Huruf" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/Jalur%20Huruf')} className="text-blue-700 font-bold hover:underline">Jalur Huruf</a> (tracing huruf),{' '}
                <a href="/game/pendekar-balon" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/pendekar-balon')} className="text-blue-700 font-bold hover:underline">Pendekar Balon</a> (simbol huruf &amp; angka), dan{' '}
                <a href="/game/detektif-cilik" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/detektif-cilik')} className="text-blue-700 font-bold hover:underline">Detektif</a> (cari benda tersembunyi).
              </p>
            </div>
            <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-100 space-y-2">
              <h3 className="font-black text-[#0C1A69]">2. Numerasi Awal &amp; Perbandingan</h3>
              <p className="leading-relaxed">
                Kenalkan urutan bilangan, penjumlahan dasar, dan perbandingan melalui{' '}
                <a href="/game/junior-race-academy" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/junior-race-academy')} className="text-blue-700 font-bold hover:underline">JUNIOR RACE ACADEMY</a> (Duel/Squad),{' '}
                <a href="/game/basket-angka-junior" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/basket-angka-junior')} className="text-blue-700 font-bold hover:underline">Basket Angka Junior</a> (Solo–Squad), dan{' '}
                <a href="/game/adu-tarik-dino" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/adu-tarik-dino')} className="text-blue-700 font-bold hover:underline">Tarik Dino</a> (perbandingan ukuran &amp; kekuatan).
              </p>
            </div>
            <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-100 space-y-2">
              <h3 className="font-black text-[#0C1A69]">3. Logika, Pola &amp; Spasial</h3>
              <p className="leading-relaxed">
                Bangun dasar berpikir komputasional dan ketelitian visual dengan{' '}
                <a href="/game/color-link-junior" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/color-link-junior')} className="text-blue-700 font-bold hover:underline">Color Link Junior</a>,{' '}
                <a href="/game/cocok-logi" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/cocok-logi')} className="text-blue-700 font-bold hover:underline">Cocok Logi</a>,{' '}
                <a href="/game/Aksi%20Ambulans" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/Aksi%20Ambulans')} className="text-blue-700 font-bold hover:underline">Ambulans</a>,{' '}
                <a href="/game/Petualangan%20Satu%20Garis" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/Petualangan%20Satu%20Garis')} className="text-blue-700 font-bold hover:underline">Satu Garis</a>,{' '}
                <a href="/game/gabung-ceria" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/gabung-ceria')} className="text-blue-700 font-bold hover:underline">Gabung Ceria</a>, dan{' '}
                <a href="/game/tatap-hap" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/tatap-hap')} className="text-blue-700 font-bold hover:underline">Tatap Hap</a>.
              </p>
            </div>
            <div className="bg-rose-50/70 rounded-2xl p-4 border border-rose-100 space-y-2">
              <h3 className="font-black text-[#0C1A69]">4. Seni, Warna, Sains Awal &amp; Sebab-Akibat</h3>
              <p className="leading-relaxed">
                Eksplorasi warna, alam, dan koordinasi visual lewat{' '}
                <a href="/game/mewarnai" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/mewarnai')} className="text-blue-700 font-bold hover:underline">Sayuran</a> (mewarnai digital),{' '}
                <a href="/game/belajar-angka" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/belajar-angka')} className="text-blue-700 font-bold hover:underline">Lab Warna</a> (campur warna dasar),{' '}
                <a href="/game/dunia-hewan" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/dunia-hewan')} className="text-blue-700 font-bold hover:underline">Dunia Hewan</a> (makanan satwa),{' '}
                <a href="/game/Gass%20Damkar" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/Gass%20Damkar')} className="text-blue-700 font-bold hover:underline">Damkar</a> (koordinasi gerak), dan{' '}
                <a href="/game/mesin-koleksi" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/mesin-koleksi')} className="text-blue-700 font-bold hover:underline">Mesin Gacha</a> (sebab-akibat sederhana).
              </p>
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-600 font-medium text-center mt-5">
            Untuk kelas PAUD/TK di depan papan interaktif (IFP), batasi sesi layar 5–10 menit secara bergiliran dan padukan dengan aktivitas fisik atau lembar mewarnai nyata. Pelajari tips pendampingan di{' '}
            <a href="/panduan/memilih-game-edukasi-anak" onClick={(e) => handleSpaLink(e, 'guideKids', '/panduan/memilih-game-edukasi-anak')} className="text-blue-700 font-bold hover:underline">Panduan Memilih Game Anak PAUD/TK</a>.
          </p>
        </section>

        <footer className="bg-white/80 rounded-3xl p-8 text-center text-[#0C1A69] shadow-sm border-2 border-white mt-8">
           <h2 className="text-xl font-black mb-4">Mengapa Memilih Game Edukasi Ini?</h2>
           <p className="text-sm font-bold text-gray-600 max-w-3xl mx-auto">
             Setiap permainan di sini telah dievaluasi untuk memastikan kesesuaian usia. Tanpa iklan yang mengganggu saat bermain, aplikasi ini 100% aman digunakan sebagai media pendamping belajar di rumah maupun ice breaking di sekolah.
           </p>
           <nav aria-label="Eksplorasi Koleksi dan Jurnal Guru" className="mt-6 pt-6 border-t border-blue-100 flex flex-wrap justify-center gap-3">
             <a
               href="/game-edukasi-ifp"
               onClick={(e) => handleSpaLink(e, 'hubIfp', '/game-edukasi-ifp')}
               className="inline-flex items-center rounded-xl bg-blue-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
             >
               Koleksi Game Edukasi IFP
             </a>
             <a
               href="/game-logika"
               onClick={(e) => handleSpaLink(e, 'hubLogic', '/game-logika')}
               className="inline-flex items-center rounded-xl bg-blue-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
             >
               Koleksi Game Logika &amp; Asah Otak
             </a>
             <a
               href="/jurnal-guru"
               onClick={(e) => handleSpaLink(e, 'blog', '/jurnal-guru')}
               className="inline-flex items-center rounded-xl bg-blue-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
             >
               Jurnal Guru &amp; Strategi Pembelajaran IFP
             </a>
           </nav>
        </footer>
      </div>
    </div>
  );
};
