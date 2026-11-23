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

  const handleSpaLink = (e: React.MouseEvent<HTMLAnchorElement>, view: string, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigateTo(view, path);
  };

  return (
    <div className="min-h-[100dvh] bg-[#DDEBF8] p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <header className="bg-gradient-to-br from-indigo-50 to-blue-50 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl border-4 border-white relative overflow-hidden flex flex-col gap-6 text-center animate-fadeIn">
          <button onClick={onBack} className="self-start md:absolute md:top-6 md:left-6 flex items-center gap-2 text-[#0C1A69] font-black hover:text-blue-600 transition-colors bg-white hover:bg-blue-50 px-4 py-2 rounded-xl text-sm shadow-sm border-2 border-transparent hover:border-blue-100 z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            KEMBALI
          </button>
          
          <div className="mt-0 md:mt-8 relative z-10">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest mb-4 shadow-sm">
              Kemampuan Kognitif & Analisis
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0C1A69] tracking-tight leading-[1.1] drop-shadow-sm mb-4">
              Game Logika & Pemecahan Masalah
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
                  Game Logika
                </li>
              </ol>
            </nav>
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

        <section className="bg-white/85 rounded-3xl p-6 md:p-8 text-[#0C1A69] shadow-sm border-2 border-white space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-black tracking-tight">
              Berpikir Komputasional &amp; Fondasi Koding–Kecerdasan Artifisial (KKA)
            </h2>
            <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">
              Permainan pada koleksi ini membantu siswa melatih <strong>penalaran logis</strong> (<em>logical reasoning</em>), <strong>pengenalan pola</strong> (<em>pattern recognition</em>), <strong>pemecahan masalah</strong> (<em>problem solving</em>), <strong>berpikir komputasional</strong> (<em>computational thinking</em>), serta <strong>penyusunan urutan langkah</strong> (<em>algorithmic sequencing</em>) pada game jalur dan strategi yang mendukungnya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-indigo-50/70 rounded-2xl p-4 border border-indigo-100 space-y-1.5">
              <h3 className="font-black text-[#0C1A69]">Berpikir Komputasional &amp; Pola</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Gunakan{' '}
                <a href="/game/kancil" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/kancil')} className="font-bold text-indigo-800 underline hover:text-blue-600">
                  Jalan Kancil
                </a>{' '}
                (mode Solo, Duel, Squad) untuk perencanaan jalur dan urutan langkah,{' '}
                <a href="/game/color-link-junior" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/color-link-junior')} className="font-bold text-indigo-800 underline hover:text-blue-600">
                  Color Link Junior
                </a>{' '}
                untuk penalaran spasial,{' '}
                <a href="/game/puzzle" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/puzzle')} className="font-bold text-indigo-800 underline hover:text-blue-600">
                  Puzzle Gambar
                </a>{' '}
                untuk pengenalan pola visual, dan{' '}
                <a href="/game/sciencelink" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/sciencelink')} className="font-bold text-indigo-800 underline hover:text-blue-600">
                  SCIENCELINK
                </a>{' '}
                untuk penalaran sebab-akibat IPA.
              </p>
            </div>

            <div className="bg-indigo-50/70 rounded-2xl p-4 border border-indigo-100 space-y-1.5">
              <h3 className="font-black text-[#0C1A69]">Latihan Konsep KKA &amp; Informatika</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Untuk latihan soal lintas mata pelajaran yang secara eksplisit memuat materi <strong>Koding dan Kecerdasan Artifisial (KKA)</strong> serta <strong>Informatika</strong> (misalnya berpikir komputasional dan pengolahan data tingkat SMP–SMA), guru dapat menggunakan{' '}
                <a href="/game/helirescue" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/helirescue')} className="font-bold text-indigo-800 underline hover:text-blue-600">
                  HELI RESCUE
                </a>{' '}
                atau eksplorasi kuis lintas mapel pada{' '}
                <a href="/game/mancing-kata" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/mancing-kata')} className="font-bold text-indigo-800 underline hover:text-blue-600">
                  Mancing Kata
                </a>.
              </p>
            </div>

            <div className="bg-indigo-50/70 rounded-2xl p-4 border border-indigo-100 space-y-1.5">
              <h3 className="font-black text-[#0C1A69]">Pengenalan Interaksi AI di Kelas</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Guru juga dapat memperkenalkan contoh cara kerja sistem pengenalan gambar dan gerak secara langsung melalui{' '}
                <a href="/game/doodle" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/doodle')} className="font-bold text-indigo-800 underline hover:text-blue-600">
                  Doodle AI
                </a>{' '}
                (tebak gambar berbasis model AI) dan{' '}
                <a href="/game/ai-basketball" onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/ai-basketball')} className="font-bold text-indigo-800 underline hover:text-blue-600">
                  AI Basketball
                </a>{' '}
                (deteksi gerak kamera), lalu mengaitkannya dengan{' '}
                <a href="/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas" onClick={(e) => handleSpaLink(e, 'articleDigitalLiteracyIfp', '/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas')} className="font-bold text-indigo-800 underline hover:text-blue-600">
                  Jurnal Literasi Digital di IFP
                </a>.
              </p>
            </div>
          </div>

          <p className="text-xs md:text-sm font-semibold text-gray-600 bg-indigo-50/50 rounded-2xl px-4 py-3 border border-indigo-100 leading-relaxed">
            Catatan kurikulum: Aktivitas pada halaman ini mendukung fondasi berpikir komputasional dan pemecahan masalah. Tidak semua game logika mengajarkan pemrograman (coding), sintaks bahasa pemrograman, machine learning, atau pelatihan model kecerdasan artifisial secara langsung.
          </p>
        </section>

        <footer className="bg-white/80 rounded-3xl p-8 text-center text-[#0C1A69] shadow-sm border-2 border-white mt-4">
          <h2 className="text-xl font-black mb-3">Eksplorasi Koleksi &amp; Panduan Kelas</h2>
          <p className="text-sm font-bold text-gray-600 max-w-3xl mx-auto">
            Gunakan permainan logika ini untuk latihan pemecahan masalah, diskusi kelompok, dan aktivitas berpikir kritis pada Interactive Flat Panel maupun perangkat siswa.
          </p>
          <nav aria-label="Koleksi dan Panduan Terkait" className="mt-6 pt-6 border-t border-indigo-100 flex flex-wrap justify-center gap-3">
            <a
              href="/game-edukasi-ifp"
              onClick={(e) => handleSpaLink(e, 'hubIfp', '/game-edukasi-ifp')}
              className="inline-flex items-center rounded-xl bg-indigo-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-indigo-200 hover:bg-indigo-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
            >
              Koleksi Game Edukasi IFP
            </a>
            <a
              href="/game-edukasi-anak"
              onClick={(e) => handleSpaLink(e, 'hubKids', '/game-edukasi-anak')}
              className="inline-flex items-center rounded-xl bg-indigo-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-indigo-200 hover:bg-indigo-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
            >
              Koleksi Game Edukasi Anak PAUD &amp; TK
            </a>
            <a
              href="/panduan/penggunaan-ifp-papan-interaktif-digital"
              onClick={(e) => handleSpaLink(e, 'guideIfp', '/panduan/penggunaan-ifp-papan-interaktif-digital')}
              className="inline-flex items-center rounded-xl bg-indigo-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-indigo-200 hover:bg-indigo-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
            >
              Panduan Menggunakan IFP di Kelas
            </a>
            <a
              href="/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp"
              onClick={(e) => handleSpaLink(e, 'articlePblIfp', '/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp')}
              className="inline-flex items-center rounded-xl bg-indigo-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-indigo-200 hover:bg-indigo-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
            >
              Jurnal Guru: Pembelajaran Berbasis Masalah di IFP
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};
