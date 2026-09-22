import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleMathIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleMathIfp: React.FC<ArticleMathIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ide Aktivitas Matematika Interaktif Menggunakan IFP di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Berbagai ide aktivitas matematika menggunakan IFP di kelas, mulai dari drag-and-drop pecahan, permainan matematika interaktif, hingga penyelesaian masalah kolaboratif."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas');

    // Structured Data for Article
    const scriptId = 'article-math-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ide Aktivitas Matematika Interaktif Menggunakan IFP di Kelas",
          "description": "Berbagai ide aktivitas matematika interaktif menggunakan layar sentuh besar IFP di kelas untuk meningkatkan pemahaman siswa.",
          "author": {
            "@type": "Person",
            "name": "Deni Ranoptri, M.Pd"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Papan Interaktif",
            "logo": {
              "@type": "ImageObject",
              "url": window.location.origin + "/icon.svg"
            }
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Beranda",
              "item": window.location.origin + "/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Jurnal Guru",
              "item": window.location.origin + "/jurnal-guru"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Aktivitas Matematika dengan IFP",
              "item": window.location.origin + "/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas"
            }
          ]
        }
      ]);
      document.head.appendChild(script);
    }

    return () => {
      document.title = 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru.');
      }
      if (existingScript) existingScript.remove();
      const addedScript = document.getElementById(scriptId);
      if (addedScript) addedScript.remove();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#F8FAFC] overflow-y-auto w-full h-[100dvh]">
      <div className="min-h-full flex flex-col items-center py-6 md:py-10 px-4 md:px-8">
        
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl border border-[#0C1A69]/10 p-6 md:p-12 relative my-auto">
          
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold text-gray-500">
              <li>
                <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('home', '/'); }} className="hover:text-blue-600 transition-colors">Beranda</a>
              </li>
              <li><span aria-hidden="true" className="opacity-50 mx-1">/</span></li>
              <li>
                <a href="/jurnal-guru" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-blue-600 transition-colors">Jurnal Guru</a>
              </li>
              <li><span aria-hidden="true" className="opacity-50 mx-1">/</span></li>
              <li aria-current="page" className="text-[#0C1A69]">Aktivitas Matematika dengan IFP</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b-2 border-gray-100 pb-6">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-[#0C1A69] font-black hover:text-blue-600 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl text-sm shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              KEMBALI KE JURNAL GURU
            </button>
          </div>

          <article className="prose prose-lg md:prose-xl max-w-none text-gray-700">
            <header className="mb-10">
              <span className="bg-[#81D4FA] text-[#0C1A69] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Mata Pelajaran</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Ide Aktivitas Matematika Interaktif Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-blue-400 pl-4">
                "Matematika sering kali dianggap abstrak dan mengintimidasi. Kehadiran layar sentuh interaktif mengubah konsep abstrak tersebut menjadi manipulasi visual yang nyata dan dapat disentuh oleh siswa."
              </p>

              <p>
                Melanjutkan dari <a href="/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpActivities', '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">ide aktivitas pembelajaran interaktif menggunakan IFP</a>, mari kita terapkan teknologi ini ke dalam mata pelajaran spesifik. Matematika adalah salah satu subjek yang paling diuntungkan dari penggunaan Interactive Flat Panel (IFP). Kemampuan memvisualisasikan angka, bentuk geometri, dan aljabar secara langsung membantu menjembatani pemahaman siswa. Artikel ini akan membahas <strong>aktivitas matematika dengan IFP</strong> yang dapat Anda rancang di kelas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Mengapa IFP Cocok untuk Pembelajaran Matematika?</h2>
              <p>
                <strong>Pembelajaran matematika menggunakan IFP</strong> memberikan keuntungan besar dalam hal visualisasi dan manipulasi objek. Konsep seperti geometri tiga dimensi dapat diputar dan diperbesar pada layar sentuh. Siswa dapat berinteraksi langsung—memindahkan pecahan, menarik garis sudut, dan memecahkan soal secara kolaboratif. <em>Layar sentuh besar</em> (smartboard) ini memungkinkan guru memberikan umpan balik langsung (<em>immediate feedback</em>) serta melakukan asesmen formatif saat siswa sedang memecahkan masalah di depan kelas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Manfaat Aktivitas Matematika Interaktif Menggunakan IFP</h2>
              <p>
                Manfaat utamanya meliputi peningkatan partisipasi aktif dan penalaran matematis. Dengan mengubah papan tulis biasa menjadi kanvas digital yang merespons sentuhan, siswa lebih berani maju ke depan untuk mencoba menjelaskan pemikiran mereka (<em>student explanation</em>). Hal ini memungkinkan terjadinya diskusi matematika yang bermakna, di mana kesalahan konsep dapat segera diidentifikasi dan diperbaiki bersama-sama.
              </p>

              <AdSenseInArticle />

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7 Ide Aktivitas Matematika Menggunakan IFP</h2>
              
              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">1. Menyusun dan Mengurutkan Bilangan</h3>
              <p>
                <strong>Tujuan:</strong> Memahami nilai tempat dan urutan bilangan bulat atau desimal.<br/>
                <strong>Cara Melakukan:</strong> Guru menampilkan deretan angka secara acak di layar. Siswa secara bergantian menyeret (<em>drag</em>) angka-angka tersebut ke dalam kotak urutan yang benar dari terkecil hingga terbesar.<br/>
                <strong>Bentuk Interaksi:</strong> Siswa menggunakan jari untuk menarik objek di layar.<br/>
                <strong>Asesmen:</strong> Guru dapat langsung melihat apakah siswa memahami konsep <em>lebih besar dari</em> atau <em>lebih kecil dari</em> secara visual.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">2. Mencocokkan Operasi dengan Hasil</h3>
              <p>
                <strong>Tujuan:</strong> Meningkatkan kecepatan komputasi dasar (penjumlahan, pengurangan, perkalian, pembagian).<br/>
                <strong>Cara Melakukan:</strong> Sisi kiri layar menampilkan operasi hitung, sisi kanan menampilkan hasil acak. Siswa menarik garis untuk mencocokkan.<br/>
                <strong>Bentuk Interaksi:</strong> Menggunakan <em>stylus</em> digital atau jari untuk menggambar garis penghubung.<br/>
                <strong>Asesmen:</strong> Sangat cocok digunakan untuk pemanasan atau pengulangan di awal jam pelajaran.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">3. Drag-and-Drop Pecahan</h3>
              <p>
                <strong>Tujuan:</strong> Memvisualisasikan pecahan senilai dan perbandingan pecahan.<br/>
                <strong>Cara Melakukan:</strong> Siswa menarik "potongan pizza" atau diagram batang ke dalam lingkaran kosong untuk membentuk nilai pecahan tertentu, misalnya 1/2 atau 3/4.<br/>
                <strong>Bentuk Interaksi:</strong> Memindahkan komponen visual untuk membentuk objek utuh.<br/>
                <strong>Asesmen:</strong> Guru mengobservasi pemahaman siswa tentang bagian-dari-keseluruhan tanpa hanya bergantung pada angka.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">4. Mengenali Bangun Datar dan Bangun Ruang</h3>
              <p>
                <strong>Tujuan:</strong> Mengidentifikasi sifat-sifat geometri.<br/>
                <strong>Cara Melakukan:</strong> Guru menampilkan objek 3D. Siswa dapat menggunakan gestur <em>pinch</em> atau usap untuk memutar balok atau kubus, dan menghitung jumlah sisi, rusuk, dan titik sudut yang terlihat.<br/>
                <strong>Bentuk Interaksi:</strong> Memutar dan memperbesar objek (manipulasi 3D).<br/>
                <strong>Asesmen:</strong> Refleksi spasial tentang bagaimana suatu bangun ruang dibentuk dari jaring-jaringnya.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">5. Menyelesaikan Pola Bilangan</h3>
              <p>
                <strong>Tujuan:</strong> Melatih penalaran induktif dan deduktif.<br/>
                <strong>Cara Melakukan:</strong> Layar menampilkan deretan bentuk atau angka berpola (misal: 2, 4, 8, ...). Siswa harus menggambar atau menulis nilai selanjutnya di tempat yang kosong.<br/>
                <strong>Bentuk Interaksi:</strong> Menulis angka atau menggambar menggunakan fitur anotasi pena IFP.<br/>
                <strong>Asesmen:</strong> Siswa diminta menjelaskan dengan suara keras logika pola yang mereka temukan saat menulis.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">6. Tantangan Pemecahan Masalah Matematika</h3>
              <p>
                <strong>Tujuan:</strong> Menerapkan konsep matematika ke dalam konteks dunia nyata.<br/>
                <strong>Cara Melakukan:</strong> Tampilkan sebuah infografis atau gambar belanja. Minta satu kelompok untuk menghitung total belanjaan dan kembalian, menuliskannya langsung di atas gambar (<em>overlay</em>).<br/>
                <strong>Bentuk Interaksi:</strong> Anotasi kelompok pada layar besar.<br/>
                <strong>Asesmen:</strong> Observasi diskusi kelompok saat menentukan strategi perhitungan.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">7. Kuis dan Permainan Matematika Interaktif</h3>
              <p>
                <strong>Tujuan:</strong> Mereview materi secara menyenangkan (gamifikasi).<br/>
                <strong>Cara Melakukan:</strong> Menggunakan platform game kuis interaktif atau HTML5 mini-game di mana siswa berkompetisi sehat untuk menjawab soal.<br/>
                <strong>Bentuk Interaksi:</strong> Menekan tombol jawaban secepat mungkin (mekanik game cepat).<br/>
                <strong>Asesmen:</strong> Mengevaluasi otomatis skor dan kecepatan penyelesaian untuk mengidentifikasi materi yang belum dikuasai mayoritas kelas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Menggunakan Multi-Touch untuk Pembelajaran Matematika Kolaboratif</h2>
              <p>
                Kemampuan <em>multi-touch</em> pada IFP sangat berguna saat pelajaran matematika. Alih-alih siswa bekerja sendirian di papan tulis, dua atau lebih siswa dapat maju bersamaan. Mereka dapat membandingkan strategi perhitungan bersusun, memindahkan objek matematika secara berbarengan, atau menjelaskan solusi mereka kepada teman sekelasnya (<em>peer-tutoring</em>). Ruang sentuh yang luas mengubah kompetisi menjadi kolaborasi bermakna.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Menggunakan Game Matematika sebagai Penguatan Pembelajaran</h2>
              <p>
                Sebagai variasi, Anda dapat mencari <strong>game matematika IFP</strong> yang melatih kemampuan aritmetika dengan cepat. Jika Anda mengajar anak-anak, mengintegrasikan <em>game edukasi matematika IFP</em> dapat menurunkan kecemasan matematika (<em>math anxiety</em>). Anda bisa menelusuri berbagai modul yang tersedia di <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">koleksi game edukasi IFP</a>. Bermain <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game matematika layar sentuh</a> memungkinkan anak berfokus pada penyelesaian misi, dan secara tidak sadar mereka sedang mengasah operasi hitung.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 my-6 text-sm">
                <strong>💡 Baca juga:</strong> <a href="/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleGuideIfp', '/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Panduan Menggunakan IFP untuk Pembelajaran Interaktif di Kelas</a>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Contoh Skenario Pembelajaran Matematika dengan IFP</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Skenario Pembukaan / Apersepsi:</strong> Guru menampilkan papan dart besar. Siswa melempar "bola lengket" (atau menekan layar). Angka yang dituju menjadi angka dasar untuk dioperasikan (dikalikan/ditambah) oleh seluruh kelas hari itu.</li>
                <li><strong>Skenario Kegiatan Inti / Eksplorasi:</strong> Saat mempelajari jaring-jaring kubus, guru menampilkan jaring-jaring yang belum dilipat. Siswa menggunakan jarinya untuk "melipat" kotak tersebut secara digital pada <em>interactive whiteboard</em> untuk membuktikan apakah akan terbentuk kubus yang sempurna.</li>
                <li><strong>Skenario Penguatan / Asesmen Formatif:</strong> Siswa memainkan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game untuk IFP</a> berupa duel matematika (Duel Mode). Dua siswa saling berhadapan di dua sisi layar berbeda untuk mengasah kemampuan berhitung cepat. Guru mencatat siswa mana yang masih memerlukan bimbingan tambahan.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Tips Menggunakan IFP agar Pembelajaran Matematika Tidak Pasif</h2>
              <p>
                Untuk <a href="/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpMedia', '/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">memaksimalkan IFP sebagai media pembelajaran interaktif</a>, pastikan siswa yang lebih banyak menyentuh layar, bukan guru. Selalu minta siswa menjelaskan langkah demi langkah (penalaran) saat mereka menulis jawaban. Gunakan IFP sebagai ruang kerja kolaboratif di mana Anda memunculkan pertanyaan kritis (<em>What if...?</em>) dibandingkan sekadar menampilkan presentasi statis berisi rumus. Jangan lupa untuk menutup setiap <em>aktivitas matematika interaktif</em> dengan refleksi singkat.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
              <p>
                <strong>Interactive Flat Panel untuk matematika</strong> sangat menjanjikan untuk menghapus stigma bahwa pelajaran ini kaku dan membosankan. Melalui visualisasi dinamis, manipulasi interaktif, dan kolaborasi langsung di layar sentuh, aktivitas kelas menjadi lebih hidup. Dengan memadukan strategi <em>problem solving</em> dan permainan yang relevan, IFP membantu siswa memahami konsep-konsep angka dengan lebih bermakna dan terobservasi secara langsung oleh guru.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleMathIfp;
