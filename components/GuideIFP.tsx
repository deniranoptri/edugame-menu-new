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
              <li><strong>Mekanik Drag & Drop atau Drawing:</strong> Memanfaatkan luasnya layar fisik untuk menggeser objek pelajaran atau menulis langsung dengan jari/stylus.</li>
              <li><strong>Dukungan Multi-Pemain Lokal:</strong> Layar dapat dibagi (split-screen) agar dua atau lebih siswa dapat berkompetisi (contoh: tarik tambang digital).</li>
            </ul>
            <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-sm font-bold text-blue-900 mb-2">Lihat Koleksi Game Khusus IFP:</p>
              <a 
                href={locale === "en" ? "/en/educational-games-for-interactive-flat-panels" : "/game-edukasi-ifp"} 
                onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', locale === 'en' ? '/en/educational-games-for-interactive-flat-panels' : '/game-edukasi-ifp'); }}
                className="inline-block bg-[#0C1A69] text-white px-4 py-2 rounded-lg text-sm font-black uppercase tracking-wider hover:bg-blue-800 transition-colors"
              >
                {locale === "en" ? "IFP Games Collection" : "Koleksi Game IFP"} & Papan Interaktif →
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">Tips Praktis untuk Guru di Kelas</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-black text-lg mb-2">1. Rotasi Partisipasi</h3>
                <p className="text-sm text-gray-600 font-medium">Bagi siswa ke dalam kelompok kecil. Minta perwakilan kelompok bergantian maju ke depan IFP untuk menyelesaikan level tertentu pada game logika atau numerasi.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-black text-lg mb-2">2. Pemanasan (Ice Breaking) 5 Menit</h3>
                <p className="text-sm text-gray-600 font-medium">Gunakan game berbasis interaksi cepat (seperti menyortir objek atau menebak gambar) di 5 menit pertama jam pelajaran untuk mengumpulkan fokus siswa yang baru masuk kelas.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-black text-lg mb-2">3. Eksplorasi Konsep (Bukan Sekadar Hadiah)</h3>
                <p className="text-sm text-gray-600 font-medium">Jangan jadikan bermain di IFP semata-mata sebagai "hadiah jika sudah selesai tugas". Jadikan aktivitas menyentuh dan menggeser layar sebagai proses belajar utama untuk memahami konsep abstrak (misal: menyusun pecahan matematika secara visual).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">Kesimpulan</h2>
            <p className="text-gray-700 font-medium leading-relaxed">
              Integrasi <strong>Interactive Flat Panel</strong> dengan game edukasi yang dirancang khusus mengubah kelas dari pembelajaran pasif menjadi aktif. Dengan sentuhan fisik dan elemen visual yang kuat, siswa tidak hanya mengamati, tetapi mengalami langsung konsep yang diajarkan.
            </p>
          </section>
          
        </main>
      </div>
    </div>
  );
};

export default GuideIFP;
