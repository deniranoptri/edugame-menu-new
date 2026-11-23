import React, { useEffect } from 'react';

interface GuideProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

export const GuideKids: React.FC<GuideProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    document.title = 'Panduan Memilih Game Edukasi Anak Usia Dini (PAUD & TK) | Papan Interaktif';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Tips dan panduan bagi orang tua dan guru dalam memilih game edukasi yang aman, mendidik, dan mendukung perkembangan kognitif serta motorik anak usia dini (PAUD & TK).');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/panduan/memilih-game-edukasi-anak');

    // Schema / Structured Data for Article
    let scriptLd = document.querySelector<HTMLScriptElement>('script#jsonld-guide-kids');
    if (!scriptLd) {
      scriptLd = document.createElement('script');
      scriptLd.id = 'jsonld-guide-kids';
      scriptLd.type = 'application/ld+json';
      document.head.appendChild(scriptLd);
    }
    
    scriptLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Panduan Memilih Game Edukasi Anak Usia Dini (PAUD & TK)",
      "description": "Tips dan panduan bagi orang tua dan guru dalam memilih game edukasi yang aman, mendidik, dan mendukung perkembangan kognitif serta motorik anak usia dini (PAUD & TK).",
      "url": window.location.origin + '/panduan/memilih-game-edukasi-anak',
      "author": {
        "@type": "Organization",
        "name": "Tim Papan Interaktif"
      }
    });

    return () => {
      document.title = 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif';
      if (metaDesc) metaDesc.setAttribute('content', 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru. Belajar sambil bermain dengan berbagai pilihan game.');
      canonical?.setAttribute('href', window.location.origin + '/');
      const ld = document.querySelector('script#jsonld-guide-kids');
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
              Panduan Memilih Game Edukasi Anak Usia Dini (PAUD & TK)
            </h1>
            <p className="text-sm md:text-lg text-gray-700 font-bold leading-relaxed">
              Masa kanak-kanak awal (0-6 tahun) adalah periode kritis perkembangan otak atau sering disebut <em>Golden Age</em>. Memilih <strong>game edukasi</strong> digital yang tepat sangat penting agar <em>screen time</em> membawa manfaat kognitif, bukan sekadar hiburan kosong.
            </p>
          </div>
        </header>

        <main className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-sm border-2 border-white flex flex-col gap-8 text-[#0C1A69]">
          
          <section>
            <h2 className="text-2xl font-black mb-4">Mengapa Anak Membutuhkan Game Edukasi yang Tepat?</h2>
            <p className="text-gray-700 font-medium leading-relaxed mb-4 text-justify">
              Interaksi anak dengan gawai (tablet/HP) merupakan realitas era digital. Daripada sekadar menonton video pasif, <strong>game edukasi interaktif</strong> mendorong anak untuk mengambil keputusan, memecahkan masalah, dan berlatih motorik halus. Pemilihan aplikasi yang salah dapat menyebabkan overstimulasi, sehingga membatasi durasi dan menyeleksi konten adalah tanggung jawab orang tua dan guru.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">5 Kriteria Memilih Game Edukasi Anak PAUD & TK</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-black text-lg mb-2">1. Visual yang Ramah Anak (Bebas Overstimulasi)</h3>
                <p className="text-sm text-gray-600 font-medium">Hindari game dengan warna neon yang berkedip cepat atau suara latar yang terlalu bising. Pilih game dengan palet warna cerah namun lembut, serta animasi yang berjalan lambat agar anak punya waktu memproses informasi.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-black text-lg mb-2">2. Mekanik Sentuhan Sederhana</h3>
                <p className="text-sm text-gray-600 font-medium">Anak usia dini sedang melatih motorik halus. Game yang mengharuskan mereka melakukan ketukan (tap) besar, menggeser perlahan (drag), atau mengikuti pola garis besar (tracing) adalah pilihan terbaik untuk koordinasi mata dan tangan.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-black text-lg mb-2">3. Memiliki Nilai Edukasi Fundamental</h3>
                <p className="text-sm text-gray-600 font-medium">Fokuslah pada aplikasi yang mengajarkan konsep dasar: pengenalan bentuk, warna, angka sederhana, suara hewan, atau kebiasaan baik sehari-hari.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-black text-lg mb-2">4. Tanpa Iklan yang Mengganggu (Ad-Free/Safe)</h3>
                <p className="text-sm text-gray-600 font-medium">Iklan pop-up sangat berisiko ditekan oleh anak secara tidak sengaja. Memastikan platform bebas dari iklan intrusif (atau dimainkan di portal edukasi khusus) menjamin keamanan pengalaman anak.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-black text-lg mb-2">5. Umpan Balik Positif (Positive Reinforcement)</h3>
                <p className="text-sm text-gray-600 font-medium">Game yang baik tidak menggunakan kata "Salah!" atau suara menyeramkan ketika anak gagal. Mereka memberikan petunjuk tambahan atau pujian yang memotivasi agar anak terus mencoba.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">Peta Rekomendasi Game Junior untuk Kelas PAUD, TK &amp; SD Kelas 1–3</h2>
            <p className="text-gray-700 font-medium leading-relaxed mb-4">
              Guru PAUD/TK dan SD kelas awal dapat menyesuaikan pilihan permainan di papan interaktif (IFP) atau tablet dengan kebutuhan tahap perkembangan anak:
            </p>
            <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-gray-700 font-medium">
              <li>
                <strong>Motorik Halus &amp; Pra-Menulis:</strong>{' '}
                <a href="/game/Jalur%20Huruf" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/Jalur%20Huruf'); }} className="text-blue-700 font-bold hover:underline">Jalur Huruf</a> (mengikuti garis huruf),{' '}
                <a href="/game/Petualangan%20Satu%20Garis" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/Petualangan%20Satu%20Garis'); }} className="text-blue-700 font-bold hover:underline">Satu Garis</a> (alur tarikan garis), dan{' '}
                <a href="/game/mewarnai" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/mewarnai'); }} className="text-blue-700 font-bold hover:underline">Sayuran</a> (mewarnai digital).
              </li>
              <li>
                <strong>Pengenalan Warna, Satwa &amp; Eksplorasi Awal:</strong>{' '}
                <a href="/game/belajar-angka" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/belajar-angka'); }} className="text-blue-700 font-bold hover:underline">Lab Warna</a> (campur warna dasar),{' '}
                <a href="/game/dunia-hewan" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/dunia-hewan'); }} className="text-blue-700 font-bold hover:underline">Dunia Hewan</a> (mencocokkan makanan satwa),{' '}
                <a href="/game/Gass%20Damkar" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/Gass%20Damkar'); }} className="text-blue-700 font-bold hover:underline">Damkar</a>, dan{' '}
                <a href="/game/mesin-koleksi" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/mesin-koleksi'); }} className="text-blue-700 font-bold hover:underline">Mesin Gacha</a>.
              </li>
              <li>
                <strong>Literasi &amp; Numerasi Awal (TK B – SD Kelas 1–3):</strong>{' '}
                <a href="/game/pendekar-balon" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/pendekar-balon'); }} className="text-blue-700 font-bold hover:underline">Pendekar Balon</a>,{' '}
                <a href="/game/detektif-cilik" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/detektif-cilik'); }} className="text-blue-700 font-bold hover:underline">Detektif</a>,{' '}
                <a href="/game/junior-race-academy" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/junior-race-academy'); }} className="text-blue-700 font-bold hover:underline">JUNIOR RACE ACADEMY</a>,{' '}
                <a href="/game/basket-angka-junior" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/basket-angka-junior'); }} className="text-blue-700 font-bold hover:underline">Basket Angka Junior</a>, dan{' '}
                <a href="/game/adu-tarik-dino" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/adu-tarik-dino'); }} className="text-blue-700 font-bold hover:underline">Tarik Dino</a>.
              </li>
              <li>
                <strong>Logika Dasar, Pola &amp; Spasial:</strong>{' '}
                <a href="/game/color-link-junior" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/color-link-junior'); }} className="text-blue-700 font-bold hover:underline">Color Link Junior</a>,{' '}
                <a href="/game/cocok-logi" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/cocok-logi'); }} className="text-blue-700 font-bold hover:underline">Cocok Logi</a>,{' '}
                <a href="/game/Aksi%20Ambulans" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/Aksi%20Ambulans'); }} className="text-blue-700 font-bold hover:underline">Ambulans</a>,{' '}
                <a href="/game/tatap-hap" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/tatap-hap'); }} className="text-blue-700 font-bold hover:underline">Tatap Hap</a>, dan{' '}
                <a href="/game/gabung-ceria" onClick={(e) => { e.preventDefault(); navigateTo('gameDetail', '/game/gabung-ceria'); }} className="text-blue-700 font-bold hover:underline">Gabung Ceria</a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">Integrasi dengan Dunia Nyata</h2>
            <p className="text-gray-700 font-medium leading-relaxed mb-4">
              Pastikan pengalaman digital diikuti dengan praktik dunia nyata. Jika anak bermain game mencampur warna (seperti Lab Warna), sediakan juga aktivitas melukis dengan cat air setelahnya. <em>Screen time</em> harus menjadi jembatan menuju aktivitas fisik, bukan penggantinya.
            </p>
            <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100 flex flex-col items-start gap-3">
              <p className="text-sm font-bold text-blue-900">Eksplorasi kumpulan game edukasi yang telah dikurasi khusus untuk anak PAUD &amp; TK:</p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="/game-edukasi-anak" 
                  onClick={(e) => { e.preventDefault(); navigateTo('hubKids', '/game-edukasi-anak'); }}
                  className="inline-block bg-[#0C1A69] text-white px-4 py-2 rounded-lg text-sm font-black uppercase tracking-wider hover:bg-blue-800 transition-colors"
                >
                  Lihat Koleksi Game Anak →
                </a>
                <a
                  href="/jurnal-guru"
                  onClick={(e) => { e.preventDefault(); navigateTo('blog', '/jurnal-guru'); }}
                  className="inline-block bg-white text-[#0C1A69] border border-blue-200 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors"
                >
                  Buka Jurnal Guru IFP
                </a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default GuideKids;
