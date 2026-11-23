import React, { useEffect } from 'react';

interface GuideProps {
  locale?: "id" | "en";
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

export const GuideIFP: React.FC<GuideProps> = ({ onBack, navigateTo, locale = "id" }) => {
  useEffect(() => {
    const isEn = locale === 'en';
    document.documentElement.lang = locale;

    document.title = isEn
      ? 'Guide: Using Educational Games on Interactive Flat Panels | Papan Interaktif'
      : 'Panduan Menggunakan Game Edukasi pada IFP di Kelas | Papan Interaktif';
    
    const desc = isEn
      ? 'Learn effective strategies for using educational games on Interactive Flat Panels (IFP) to boost classroom collaboration, engagement, and active learning.'
      : 'Pelajari cara efektif memanfaatkan game edukasi dan Interactive Flat Panel (IFP) atau Papan Interaktif Digital untuk kolaborasi siswa dan ice breaking di kelas.';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
    
    const baseUrl = window.location.origin;
    const idPath = '/panduan/penggunaan-ifp-papan-interaktif-digital';
    const enPath = '/en/guides/using-educational-games-on-interactive-flat-panels';
    const currentUrl = baseUrl + (isEn ? enPath : idPath);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

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

    // Schema / Structured Data for Article
    let scriptLd = document.querySelector<HTMLScriptElement>('script#jsonld-guide-ifp');
    if (!scriptLd) {
      scriptLd = document.createElement('script');
      scriptLd.id = 'jsonld-guide-ifp';
      scriptLd.type = 'application/ld+json';
      document.head.appendChild(scriptLd);
    }
    
    scriptLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Panduan Menggunakan Game Edukasi pada Papan Interaktif (IFP) di Kelas",
      "description": "Pelajari cara efektif memanfaatkan game edukasi dan Interactive Flat Panel (IFP) atau Papan Interaktif Digital untuk kolaborasi siswa dan ice breaking di kelas.",
      "url": window.location.origin + '/panduan/penggunaan-ifp-papan-interaktif-digital',
      "author": {
        "@type": "Organization",
        "name": "Tim Papan Interaktif"
      }
    });

    return () => {
      document.title = 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif';
      if (metaDesc) metaDesc.setAttribute('content', 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru. Belajar sambil bermain dengan berbagai pilihan game.');
      canonical?.setAttribute('href', window.location.origin + '/');
      const ld = document.querySelector('script#jsonld-guide-ifp');
      if (ld) ld.remove();
    };
  }, []);

  const isEn = locale === 'en';

  const handleSpaLink = (e: React.MouseEvent<HTMLAnchorElement>, view: string, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigateTo(view, path);
  };

  return (
    <div className="min-h-[100dvh] bg-[#DDEBF8] p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        <header className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl border-4 border-white relative overflow-hidden flex flex-col gap-6 animate-fadeIn">
          <button onClick={onBack} className="flex self-start items-center gap-2 text-[#0C1A69] font-black hover:text-blue-600 transition-colors bg-white hover:bg-blue-50 px-4 py-2 rounded-xl text-sm shadow-sm border-2 border-transparent hover:border-blue-100 z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            KEMBALI
          </button>
          
          <div className="mt-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] tracking-tight leading-[1.2] drop-shadow-sm mb-4">
              Panduan Menggunakan Game Edukasi pada Papan Interaktif (IFP) di Kelas
            </h1>
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold text-gray-500">
                <li>
                  <a href={isEn ? "/en/" : "/"} onClick={(e) => handleSpaLink(e, 'home', isEn ? '/en/' : '/')} className="hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded">
                    {isEn ? "Home" : "Beranda"}
                  </a>
                </li>
                <li><span aria-hidden="true" className="opacity-50 mx-1">/</span></li>
                <li aria-current="page" className="text-[#0C1A69]">
                  {isEn ? "IFP Classroom Guide" : "Panduan Penggunaan IFP"}
                </li>
              </ol>
            </nav>
            <p className="text-sm md:text-lg text-gray-700 font-bold leading-relaxed">
              Transformasi ruang kelas modern tidak lepas dari kehadiran <strong>Interactive Flat Panel (IFP)</strong> atau Papan Interaktif Digital. Panduan ini dirancang untuk membantu guru memaksimalkan potensi layar sentuh besar sebagai media pembelajaran kolaboratif.
            </p>
          </div>
        </header>

        <main className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-sm border-2 border-white flex flex-col gap-8 text-[#0C1A69]">
          
          <section>
            <h2 className="text-2xl font-black mb-4">Apa Itu Interactive Flat Panel (IFP)?</h2>
            <p className="text-gray-700 font-medium leading-relaxed mb-4 text-justify">
              <strong>Interactive Flat Panel (IFP)</strong> adalah layar sentuh berukuran besar (umumnya 65 hingga 86 inci) yang menggantikan fungsi proyektor dan papan tulis konvensional. Dengan teknologi <em>multi-touch</em>, IFP memungkinkan beberapa siswa menyentuh, menggambar, dan berinteraksi dengan materi pelajaran secara bersamaan langsung di layar depan kelas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">Keunggulan Menggunakan IFP untuk Game Edukasi</h2>
            <ul className="list-disc pl-5 text-gray-700 font-medium space-y-3">
              <li><strong>Kolaborasi Fisik (Multi-Touch):</strong> Memungkinkan siswa bermain dalam tim, memecahkan <em>puzzle</em>, atau menggambar bersama dalam satu kanvas tanpa berebut <em>mouse</em>.</li>
              <li><strong>Fokus Kelas Meningkat:</strong> Layar besar dengan resolusi tinggi (4K) memastikan setiap siswa dari bangku paling belakang dapat melihat aktivitas dengan jelas, menjaga atensi mereka.</li>
              <li><strong>Ice Breaking Terpusat:</strong> Aktivitas jeda (brain breaks) dapat dipandu langsung oleh guru di depan kelas, menurunkan tingkat stres siswa (kortisol) sebelum berpindah ke materi berat.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">Karakteristik Game yang Cocok untuk IFP</h2>
            <p className="text-gray-700 font-medium leading-relaxed mb-4">
              Tidak semua <em>browser game</em> cocok dimainkan di layar sentuh besar. Game yang ideal untuk IFP harus memiliki ciri-ciri berikut:
            </p>
            <ul className="list-disc pl-5 text-gray-700 font-medium space-y-3">
              <li><strong>UI/Tombol Besar:</strong> Memudahkan siswa menyentuh target tanpa kesalahan.</li>
              <li>
                <strong>Mekanik Drag &amp; Drop atau Drawing:</strong> Memanfaatkan luasnya layar fisik untuk menggeser objek pelajaran atau menulis langsung dengan jari/stylus
                {!isEn && (
                  <>
                    {' '}seperti pada papan peta pikiran{' '}
                    <a
                      href="/game/nusaboard"
                      onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/nusaboard')}
                      className="text-blue-700 font-bold underline decoration-blue-300 underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded"
                    >
                      NusaBoard
                    </a>
                  </>
                )}.
              </li>
              <li>
                <strong>Dukungan Multi-Pemain Lokal:</strong> Layar dapat dibagi (split-screen) agar dua atau lebih siswa dapat berkompetisi (contoh: tarik tambang digital{' '}
                {!isEn ? (
                  <a
                    href="/game/adu-tarik-dino"
                    onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/adu-tarik-dino')}
                    className="text-blue-700 font-bold underline decoration-blue-300 underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded"
                  >
                    Tarik Dino
                  </a>
                ) : (
                  'Tarik Dino'
                )}
                ).
              </li>
            </ul>
            <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-sm font-bold text-blue-900 mb-2">Lihat Koleksi Game Khusus IFP:</p>
              <a 
                href={isEn ? "/en/educational-games-for-interactive-flat-panels" : "/game-edukasi-ifp"} 
                onClick={(e) => handleSpaLink(e, 'hubIfp', isEn ? '/en/educational-games-for-interactive-flat-panels' : '/game-edukasi-ifp')}
                className="inline-block bg-[#0C1A69] text-white px-4 py-2 rounded-lg text-sm font-black uppercase tracking-wider hover:bg-blue-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] focus-visible:ring-offset-2"
              >
                {isEn ? "IFP Games Collection" : "Koleksi Game IFP"} & Papan Interaktif →
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">Tips Praktis untuk Guru di Kelas</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-black text-lg mb-2">1. Rotasi Partisipasi</h3>
                <p className="text-sm text-gray-600 font-medium">
                  Bagi siswa ke dalam kelompok kecil. Minta perwakilan kelompok bergantian maju ke depan IFP untuk menyelesaikan level tertentu pada{' '}
                  {!isEn ? (
                    <>
                      <a
                        href="/game-logika"
                        onClick={(e) => handleSpaLink(e, 'hubLogic', '/game-logika')}
                        className="text-blue-700 font-bold underline decoration-blue-300 underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded"
                      >
                        koleksi game logika
                      </a>{' '}
                      atau tantangan numerasi seperti{' '}
                      <a
                        href="/game/gebuk-guling-matematika"
                        onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/gebuk-guling-matematika')}
                        className="text-blue-700 font-bold underline decoration-blue-300 underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded"
                      >
                        Gebuk Guling Matematika
                      </a>{' '}
                      dan{' '}
                      <a
                        href="/game/wonder-math-arena"
                        onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/wonder-math-arena')}
                        className="text-blue-700 font-bold underline decoration-blue-300 underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded"
                      >
                        Wonder Math Arena
                      </a>
                      .
                    </>
                  ) : (
                    'game logika atau numerasi.'
                  )}
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-black text-lg mb-2">2. Pemanasan (Ice Breaking) 5 Menit</h3>
                <p className="text-sm text-gray-600 font-medium">
                  Gunakan game berbasis interaksi cepat (seperti menyortir objek, menebak gambar, atau menyusun kalimat di{' '}
                  {!isEn ? (
                    <a
                      href="/game/kata-gol"
                      onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/kata-gol')}
                      className="text-blue-700 font-bold underline decoration-blue-300 underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded"
                    >
                      KATA GOL!
                    </a>
                  ) : (
                    'aktivitas bahasa interaktif'
                  )}
                  ) di 5 menit pertama jam pelajaran untuk mengumpulkan fokus siswa yang baru masuk kelas.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-black text-lg mb-2">3. Eksplorasi Konsep (Bukan Sekadar Hadiah)</h3>
                <p className="text-sm text-gray-600 font-medium">
                  Jangan jadikan bermain di IFP semata-mata sebagai &quot;hadiah jika sudah selesai tugas&quot;. Jadikan aktivitas menyentuh dan menggeser layar sebagai proses belajar utama untuk memahami konsep abstrak (misal: menyusun pecahan matematika secara visual lewat{' '}
                  {!isEn ? (
                    <a
                      href="/game/martabak-pecahan"
                      onClick={(e) => handleSpaLink(e, 'gameDetail', '/game/martabak-pecahan')}
                      className="text-blue-700 font-bold underline decoration-blue-300 underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69] rounded"
                    >
                      Martabak Pecahan
                    </a>
                  ) : (
                    'media visual pecahan'
                  )}
                  ).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">Kesimpulan</h2>
            <p className="text-gray-700 font-medium leading-relaxed">
              Integrasi <strong>Interactive Flat Panel</strong> dengan game edukasi yang dirancang khusus mengubah kelas dari pembelajaran pasif menjadi aktif. Dengan sentuhan fisik dan elemen visual yang kuat, siswa tidak hanya mengamati, tetapi mengalami langsung konsep yang diajarkan.
            </p>
          </section>

          {!isEn ? (
            <section aria-labelledby="guide-ifp-related-id" className="bg-blue-50/70 rounded-2xl p-6 border border-blue-100">
              <h2 id="guide-ifp-related-id" className="text-xl font-black mb-3">Bacaan &amp; Koleksi Terkait untuk Guru</h2>
              <nav aria-label="Referensi Guru Terkait" className="flex flex-wrap gap-3">
                <a
                  href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas"
                  onClick={(e) => handleSpaLink(e, 'articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas')}
                  className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Asesmen Formatif Menggunakan IFP di Kelas
                </a>
                <a
                  href="/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp"
                  onClick={(e) => handleSpaLink(e, 'articleMatematikaIfp', '/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp')}
                  className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Pembelajaran Matematika Interaktif Menggunakan IFP
                </a>
                <a
                  href="/game-edukasi-anak"
                  onClick={(e) => handleSpaLink(e, 'hubKids', '/game-edukasi-anak')}
                  className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Koleksi Game Edukasi Anak PAUD &amp; TK
                </a>
              </nav>
            </section>
          ) : (
            <section aria-labelledby="guide-ifp-related-en" className="bg-blue-50/70 rounded-2xl p-6 border border-blue-100">
              <h2 id="guide-ifp-related-en" className="text-xl font-black mb-3">Recommended English IFP Games &amp; Teacher Guides</h2>
              <nav aria-label="Related English IFP Games and Guides" className="flex flex-wrap gap-3">
                <a
                  href="/en/game/adu-tarik-dino"
                  onClick={(e) => handleSpaLink(e, 'gameDetail', '/en/game/adu-tarik-dino')}
                  className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Tarik Dino (Classroom Tug-of-War)
                </a>
                <a
                  href="/en/game/nusaboard"
                  onClick={(e) => handleSpaLink(e, 'gameDetail', '/en/game/nusaboard')}
                  className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  NusaBoard (Interactive Mind Mapping)
                </a>
                <a
                  href="/en/game/doodle"
                  onClick={(e) => handleSpaLink(e, 'gameDetail', '/en/game/doodle')}
                  className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Doodle AI (Draw &amp; Guess)
                </a>
                <a
                  href="/en/game/sciencelink"
                  onClick={(e) => handleSpaLink(e, 'gameDetail', '/en/game/sciencelink')}
                  className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  SCIENCELINK (Science Logic)
                </a>
                <a
                  href="/en/journal/formative-assessment-using-interactive-flat-panel"
                  onClick={(e) => handleSpaLink(e, 'articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel')}
                  className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Formative Assessment Using IFP
                </a>
                <a
                  href="/en/journal/gamification-using-interactive-flat-panel"
                  onClick={(e) => handleSpaLink(e, 'articleGamificationIfpEn', '/en/journal/gamification-using-interactive-flat-panel')}
                  className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  Gamification Using IFP
                </a>
                <a
                  href="/en/journal"
                  onClick={(e) => handleSpaLink(e, 'blogEn', '/en/journal')}
                  className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                >
                  English Teacher Journal
                </a>
              </nav>
            </section>
          )}
          
        </main>
      </div>
    </div>
  );
};

export default GuideIFP;
