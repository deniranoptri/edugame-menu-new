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
    
    scriptLd.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Game Interaktif Ruang Kelas",
        "description": locale === 'en' ? "A collection of interactive educational games designed for Interactive Flat Panels." : "Kumpulan game edukasi yang dirancang khusus untuk layar sentuh besar IFP di kelas.",
        "url": currentUrl,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": gameList
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": locale === 'en' ? "Home" : "Beranda",
            "item": baseUrl + (locale === 'en' ? '/en/' : '/')
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === 'en' ? "Educational Games" : "Game Edukasi",
            "item": baseUrl + (locale === 'en' ? '/en/' : '/')
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": locale === 'en' ? "IFP Games" : "Game IFP",
            "item": currentUrl
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": locale === "en" ? "What is an IFP educational game?" : "Apa itu game edukasi IFP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === "en" ? "An IFP educational game is a learning activity designed to be played on an Interactive Flat Panel, smartboard, or interactive whiteboard. It uses touch and multi-touch capabilities to help students learn collaboratively." : "Game edukasi IFP adalah aktivitas pembelajaran yang dirancang khusus untuk dimainkan pada Interactive Flat Panel, smartboard, atau papan interaktif. Game ini menggunakan kemampuan layar sentuh untuk membantu siswa belajar secara kolaboratif."
            }
          },
          {
            "@type": "Question",
            "name": locale === "en" ? "Can these games be played on a smartboard?" : "Apakah game ini bisa dimainkan di smartboard?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === "en" ? "Yes, our interactive classroom games are fully compatible with smartboards and other large touchscreens that support modern web browsers." : "Ya, kumpulan game Interactive Flat Panel ini sepenuhnya kompatibel dengan smartboard dan layar sentuh besar lainnya yang memiliki dukungan browser web modern."
            }
          },
          {
            "@type": "Question",
            "name": locale === "en" ? "Are these educational games free for teachers?" : "Apakah game IFP ini gratis untuk guru?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": locale === "en" ? "Absolutely! All of our touchscreen educational games are completely free to use in the classroom without any subscription required." : "Tentu saja! Semua game edukasi layar sentuh kami 100% gratis untuk digunakan di sekolah tanpa perlu biaya berlangganan."
            }
          }
        ]
      }
    ]);

    return () => {
      document.title = 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif';
      setMeta('description', 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru. Belajar sambil bermain dengan berbagai pilihan game.');
      linkCanonical?.setAttribute('href', window.location.origin + '/');
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

  const handleSpaLink = (e: React.MouseEvent<HTMLAnchorElement>, view: string, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigateTo(view, path);
  };

  const verifiedAdditionalIfpGamesId = [
    {
      id: 'gebuk-guling-matematika',
      title: 'GEBUK GULING MATEMATIKA',
      meta: 'Matematika · Adu Cepat Berhitung di Atas Bambu',
    },
    {
      id: 'kata-gol',
      title: 'KATA GOL!',
      meta: 'Bahasa Indonesia · Susun Kalimat, Cetak Gol',
    },
    {
      id: 'wonder-math-arena',
      title: 'Wonder Math Arena',
      meta: 'Matematika · Petualangan Numerasi & Wisata Nusantara',
    },
    {
      id: 'numeriq-math',
      title: 'NUMERIQ Math',
      meta: 'Matematika · Matriks & Tantangan Numerasi',
    },
    {
      id: 'junior-race-academy',
      title: 'JUNIOR RACE ACADEMY',
      meta: 'PAUD, TK & SD · Balap Matematika, Hitung & Kata',
    },
    {
      id: 'color-link-junior',
      title: 'Color Link Junior',
      meta: 'PAUD & SD · Puzzle Logika Warna',
    },
    {
      id: 'basket-angka-junior',
      title: 'Basket Angka Junior',
      meta: 'PAUD & TK · Belajar Bilangan Sambil Bermain Basket',
    },
  ];

  return (
    <div className="min-h-[100dvh] bg-[#DDEBF8] p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <header className="bg-gradient-to-br from-emerald-50 to-teal-50 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl border-4 border-white relative overflow-hidden flex flex-col gap-6 text-center animate-fadeIn">
          <button onClick={onBack} className="self-start md:absolute md:top-6 md:left-6 flex items-center gap-2 text-[#0C1A69] font-black hover:text-blue-600 transition-colors bg-white hover:bg-blue-50 px-4 py-2 rounded-xl text-sm shadow-sm border-2 border-transparent hover:border-blue-100 z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            KEMBALI
          </button>
          
          <div className="mt-0 md:mt-8 relative z-10">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest mb-4 shadow-sm">
              Untuk Papan Interaktif Digital (IFP)
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0C1A69] tracking-tight leading-[1.1] drop-shadow-sm mb-6">
              {locale === "en" ? "Interactive Flat Panel (IFP) Educational Games" : "Kumpulan Game Edukasi IFP (Interactive Flat Panel)"}
            </h1>
            
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
              <ol className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-semibold text-gray-500">
                <li>
                  <a href={locale === 'en' ? "/en/" : "/"} onClick={(e) => handleSpaLink(e, 'home', locale === 'en' ? '/en/' : '/')} className="hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded">
                    {locale === 'en' ? "Home" : "Beranda"}
                  </a>
                </li>
                <li><span aria-hidden="true" className="opacity-50 mx-1">/</span></li>
                <li>
                  <a href={locale === 'en' ? "/en/" : "/"} onClick={(e) => handleSpaLink(e, 'home', locale === 'en' ? '/en/' : '/')} className="hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded">
                    {locale === 'en' ? "Educational Games" : "Game Edukasi"}
                  </a>
                </li>
                <li><span aria-hidden="true" className="opacity-50 mx-1">/</span></li>
                <li aria-current="page" className="text-[#0C1A69]">
                  {locale === 'en' ? "IFP Games" : "Game IFP"}
                </li>
              </ol>
            </nav>

            <div className="text-sm md:text-base text-gray-700 font-bold max-w-3xl mx-auto leading-relaxed space-y-4">
              <p>
                {locale === "en" 
                  ? "Welcome to our collection of free IFP educational games designed for modern classrooms. These interactive whiteboard games and touchscreen educational games can be played directly on Interactive Flat Panels, smartboards, and other large touchscreens. We provide these free educational games for teachers to support interactive learning activities involving students through direct touch and exploration."
                  : "Selamat datang di koleksi game edukasi IFP gratis kami yang dirancang untuk ruang kelas modern. Kumpulan game IFP dan game layar sentuh ini dapat dimainkan langsung menggunakan Interactive Flat Panel, papan interaktif, smartboard, dan layar sentuh besar. Kami menyediakan game edukasi papan interaktif ini agar guru dapat mendukung aktivitas pembelajaran interaktif yang melibatkan siswa melalui sentuhan dan eksplorasi."}
              </p>
              <p>
                {locale === "en"
                  ? "In the classroom, an IFP functions as a large touch screen and digital learning medium that allows students to interact directly with the material. Multi-touch support also opens up opportunities for collaborative activities when several students interact with these classroom touchscreen games simultaneously."
                  : "Pada penggunaan di kelas, IFP berfungsi sebagai layar sentuh besar sekaligus media pembelajaran interaktif IFP yang memungkinkan siswa berinteraksi langsung dengan materi. Dukungan multi-touch juga membuka peluang aktivitas kolaboratif ketika beberapa siswa berinteraksi dengan game edukasi layar sentuh ini secara bersamaan."}
              </p>
            </div>
            <div className="inline-block bg-white text-[#0C1A69] px-5 py-2 rounded-full font-black text-xs md:text-sm shadow-sm border-2 border-[#0C1A69]/10 mt-4 hover:scale-105 transition-transform">
              <a href={locale === "en" ? "/en/guides/using-educational-games-on-interactive-flat-panels" : "/panduan/penggunaan-ifp-papan-interaktif-digital"} onClick={(e) => handleSpaLink(e, 'guideIfp', locale === "en" ? "/en/guides/using-educational-games-on-interactive-flat-panels" : "/panduan/penggunaan-ifp-papan-interaktif-digital")} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded">
                {locale === "en" ? "📖 Guide: Using Educational Games on IFPs" : "📖 Baca: Panduan Menggunakan IFP di Kelas"}
              </a>
            </div>

          </div>
        </header>

        <main className="flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-black text-[#0C1A69] mb-2 px-2 border-l-4 border-teal-400 pl-4">
            {locale === "en" ? "Playable IFP Games" : "Game IFP yang Dapat Dimainkan"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {games.map((game) => (
              <article key={game.id} className="w-full aspect-[4/4.5]">
                <MenuCard config={game} onClick={() => handleCardClick(game.id)} locale={locale} />
              </article>
            ))}
          </div>

          {locale === 'id' ? (
            <section aria-labelledby="verified-ifp-more-heading" className="mt-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-md border-2 border-white flex flex-col gap-5">
              <div>
                <h2 id="verified-ifp-more-heading" className="text-xl md:text-2xl font-black text-[#0C1A69] border-l-4 border-emerald-500 pl-4">
                  Game Layar Sentuh IFP Lainnya yang Terverifikasi
                </h2>
                <p className="text-sm text-gray-700 font-medium mt-2 pl-4">
                  Pilihan game numerasi, literasi, dan logika tambahan yang dirancang responsif untuk papan interaktif digital dan layar sentuh di kelas.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {verifiedAdditionalIfpGamesId.map((item) => {
                  const href = `/game/${encodeURIComponent(item.id)}`;
                  return (
                    <a
                      key={item.id}
                      href={href}
                      onClick={(e) => handleSpaLink(e, 'gameDetail', href)}
                      className="group flex flex-col justify-between gap-1 rounded-2xl bg-white p-4 border-2 border-teal-100 hover:border-teal-400 hover:bg-teal-50/50 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] focus-visible:ring-offset-2"
                    >
                      <span className="font-black text-[#0C1A69] group-hover:text-teal-800 text-sm md:text-base">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-600 font-semibold leading-snug">
                        {item.meta}
                      </span>
                    </a>
                  );
                })}
              </div>
              <nav aria-label="Koleksi dan Referensi Guru Terkait" className="pt-3 border-t border-teal-100 flex flex-wrap gap-3">
                <a
                  href="/game-edukasi-anak"
                  onClick={(e) => handleSpaLink(e, 'hubKids', '/game-edukasi-anak')}
                  className="inline-flex items-center rounded-xl bg-teal-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-teal-200 hover:bg-teal-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Koleksi Game Edukasi Anak PAUD &amp; TK
                </a>
                <a
                  href="/game-logika"
                  onClick={(e) => handleSpaLink(e, 'hubLogic', '/game-logika')}
                  className="inline-flex items-center rounded-xl bg-teal-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-teal-200 hover:bg-teal-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Koleksi Game Logika &amp; Pemecahan Masalah
                </a>
                <a
                  href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas"
                  onClick={(e) => handleSpaLink(e, 'articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas')}
                  className="inline-flex items-center rounded-xl bg-teal-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-teal-200 hover:bg-teal-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Jurnal Guru: Asesmen Formatif Menggunakan IFP
                </a>
                <a
                  href="/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp"
                  onClick={(e) => handleSpaLink(e, 'articleMatematikaIfp', '/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp')}
                  className="inline-flex items-center rounded-xl bg-teal-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-teal-200 hover:bg-teal-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Jurnal Guru: Pembelajaran Matematika Interaktif di IFP
                </a>
              </nav>
            </section>
          ) : (
            <section aria-labelledby="english-ifp-direct-heading" className="mt-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-md border-2 border-white flex flex-col gap-5">
              <div>
                <h2 id="english-ifp-direct-heading" className="text-xl md:text-2xl font-black text-[#0C1A69] border-l-4 border-emerald-500 pl-4">
                  Related English Teacher Resources
                </h2>
                <p className="text-sm text-gray-700 font-medium mt-2 pl-4">
                  Explore practical teacher articles and classroom strategies for Interactive Flat Panel (IFP) instruction.
                </p>
              </div>
              <nav aria-label="Related English Teacher Resources" className="pt-3 border-t border-teal-100 flex flex-wrap gap-3">
                <a
                  href="/en/journal"
                  onClick={(e) => handleSpaLink(e, 'blogEn', '/en/journal')}
                  className="inline-flex items-center rounded-xl bg-teal-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-teal-200 hover:bg-teal-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Teacher Journal: IFP Classroom Strategies
                </a>
                <a
                  href="/en/journal/formative-assessment-using-interactive-flat-panel"
                  onClick={(e) => handleSpaLink(e, 'articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel')}
                  className="inline-flex items-center rounded-xl bg-teal-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-teal-200 hover:bg-teal-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Formative Assessment Using Interactive Flat Panels
                </a>
                <a
                  href="/en/journal/collaborative-learning-using-interactive-flat-panel"
                  onClick={(e) => handleSpaLink(e, 'articleCollaborativeIfpEn', '/en/journal/collaborative-learning-using-interactive-flat-panel')}
                  className="inline-flex items-center rounded-xl bg-teal-50 px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-teal-200 hover:bg-teal-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Collaborative Learning Using Interactive Flat Panels
                </a>
              </nav>
            </section>
          )}

          {/* IFP HUB SUPPORTING CONTENT */}
          <section className="mt-12 bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-lg border-2 border-white">
            {locale === "id" && (
              <div className="mb-10 bg-white/90 rounded-2xl p-5 md:p-7 border border-teal-100 shadow-sm">
                <h2 className="text-xl md:text-2xl font-black text-[#0C1A69] mb-3 border-l-4 border-teal-500 pl-4">
                  Pemanfaatan Game Edukasi di Papan Tulis Interaktif &amp; Smartboard Kelas
                </h2>
                <p className="text-gray-700 font-medium leading-relaxed text-sm md:text-base mb-4">
                  Di ruang kelas, game edukasi pada <strong>papan tulis interaktif</strong>, <strong>smartboard</strong>, maupun <strong>Interactive Flat Panel (IFP)</strong> membantu guru mengubah latihan materi menjadi aktivitas visual yang dapat diamati seluruh kelas. Perlu dicatat bahwa dukungan sentuhan dan mode bermain berbeda-beda pada setiap game—tidak semua game dirancang untuk sentuhan simultan bersamaan. Sebagian game ideal dimainkan secara bergiliran di layar besar, sementara beberapa game tertentu memiliki mode kompetitif multi-pemain lokal sesuai informasi di katalognya.
                </p>
                <ul className="list-disc pl-5 text-gray-700 font-medium text-sm md:text-base space-y-2 mb-4">
                  <li>
                    <strong>Pemanasan Literasi, Numerasi &amp; Latihan Akademik:</strong> Guru dapat memandu diskusi kelas pada{' '}
                    <a
                      href="/game/ketapel-sakti"
                      onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/ketapel-sakti')}
                      className="text-blue-700 font-bold underline decoration-blue-300 underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded"
                    >
                      KETAPEL SAKTI
                    </a>{' '}
                    atau latihan kosakata bahasa Inggris lewat{' '}
                    <a
                      href="/game/bee-english-arena"
                      onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/bee-english-arena')}
                      className="text-blue-700 font-bold underline decoration-blue-300 underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded"
                    >
                      BEE ENGLISH ARENA
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Aktivitas Kelompok &amp; Mode Multi-Pemain Lokal:</strong> Untuk mengatur giliran siswa, etika layar sentuh, serta daftar game dengan mode Duel, Trio, dan Squad, pelajari panduan{' '}
                    <a
                      href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas"
                      onClick={(e) => handleSpaLink(e, 'articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas')}
                      className="text-blue-700 font-bold underline decoration-blue-300 underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded"
                    >
                      Pembelajaran Kolaboratif Menggunakan IFP di Kelas
                    </a>
                    .
                  </li>
                </ul>
              </div>
            )}

            <h2 className="text-2xl md:text-3xl font-black text-[#0C1A69] mb-4">
              {locale === "en" ? "Why Use Educational Games on Interactive Flat Panels?" : "Mengapa Menggunakan Game IFP di Kelas?"}
            </h2>
            <div className="text-gray-700 font-medium leading-relaxed space-y-4 text-sm md:text-base mb-10">
              <p>
                {locale === "en"
                  ? "Integrating educational games on an Interactive Flat Panel (IFP) transforms the traditional learning environment into a dynamic, engaging space. The large screen allows for whole-class visibility, ensuring that every student can participate and follow the lesson clearly from their seat."
                  : "Mengintegrasikan media pembelajaran untuk IFP mengubah lingkungan belajar tradisional menjadi ruang yang dinamis dan menarik. Layar sentuh besar memungkinkan visibilitas seluruh kelas, memastikan setiap siswa dapat berpartisipasi dan mengikuti pelajaran dengan jelas dari tempat duduk mereka."}
              </p>
              <p>
                {locale === "en"
                  ? "IFPs enable direct touch interaction, making learning more tactile and intuitive, especially for early childhood and elementary students. The multi-touch capability means that multiple students can come to the front of the class and collaborate or compete simultaneously, fostering teamwork and active engagement in these smartboard educational games."
                  : "IFP memungkinkan interaksi sentuhan langsung, menjadikan pembelajaran lebih taktil dan intuitif. Kemampuan multi-touch berarti beberapa siswa dapat maju ke depan kelas dan bermain game edukasi papan interaktif secara bersamaan, menumbuhkan kerja sama tim dan keterlibatan aktif."}
              </p>
              <p>
                {locale === "en"
                  ? "Teachers can effectively use these games as versatile interactive learning media. Whether it's for a quick warm-up activity, an engaging ice breaking session, material reinforcement, or informal assessment, IFP educational games provide a fun and stress-free way to evaluate student understanding."
                  : "Guru dapat menggunakan game untuk IFP secara efektif sebagai media pembelajaran interaktif yang serbaguna. Baik untuk aktivitas pemanasan singkat, sesi ice breaking yang menyenangkan, penguatan materi, maupun asesmen informal, game IFP gratis ini memberikan cara yang menyenangkan untuk mengevaluasi pemahaman siswa."}
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-[#0C1A69] mb-4 mt-8">
              {locale === "en" ? "Frequently Asked Questions (FAQ)" : "Pertanyaan Seputar Game IFP (FAQ)"}
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#0C1A69] text-lg mb-2">
                  {locale === "en" ? "What is an IFP educational game?" : "Apa itu game edukasi IFP?"}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {locale === "en" ? "An IFP educational game is a learning activity designed to be played on an Interactive Flat Panel, smartboard, or interactive whiteboard. It uses touch and multi-touch capabilities to help students learn collaboratively." : "Game edukasi IFP adalah aktivitas pembelajaran yang dirancang khusus untuk dimainkan pada Interactive Flat Panel, smartboard, atau papan interaktif. Game ini menggunakan kemampuan layar sentuh untuk membantu siswa belajar secara kolaboratif."}
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#0C1A69] text-lg mb-2">
                  {locale === "en" ? "Can these games be played on a smartboard?" : "Apakah game ini bisa dimainkan di smartboard?"}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {locale === "en" ? "Yes, our interactive classroom games are fully compatible with smartboards and other large touchscreens that support modern web browsers." : "Ya, kumpulan game Interactive Flat Panel ini sepenuhnya kompatibel dengan smartboard dan layar sentuh besar lainnya yang memiliki dukungan browser web modern."}
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#0C1A69] text-lg mb-2">
                  {locale === "en" ? "Are these educational games free for teachers?" : "Apakah game IFP ini gratis untuk guru?"}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {locale === "en" ? "Absolutely! All of our touchscreen educational games are completely free to use in the classroom without any subscription required." : "Tentu saja! Semua game edukasi layar sentuh kami 100% gratis untuk digunakan di sekolah tanpa perlu biaya berlangganan."}
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
