import React, { useEffect } from 'react';

interface ArticleCollaborativeIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleCollaborativeIfp: React.FC<ArticleCollaborativeIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran Kolaboratif Menggunakan IFP di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan pembelajaran kolaboratif menggunakan IFP di kelas, lengkap dengan ide aktivitas kelompok, multi-touch, pengelolaan kelas, asesmen formatif, dan contoh pembelajaran 2 JP."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas');

    const idUrl = 'https://papaninteraktif.com/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas';
    const enUrl = 'https://papaninteraktif.com/en/journal/collaborative-learning-using-interactive-flat-panel';

    let hrefLangId = document.querySelector('link[hreflang="id"]');
    if (!hrefLangId) {
      hrefLangId = document.createElement('link');
      hrefLangId.setAttribute('rel', 'alternate');
      hrefLangId.setAttribute('hreflang', 'id');
      document.head.appendChild(hrefLangId);
    }
    hrefLangId.setAttribute('href', idUrl);

    let hrefLangEn = document.querySelector('link[hreflang="en"]');
    if (!hrefLangEn) {
      hrefLangEn = document.createElement('link');
      hrefLangEn.setAttribute('rel', 'alternate');
      hrefLangEn.setAttribute('hreflang', 'en');
      document.head.appendChild(hrefLangEn);
    }
    hrefLangEn.setAttribute('href', enUrl);

    let hrefLangDef = document.querySelector('link[hreflang="x-default"]');
    if (!hrefLangDef) {
      hrefLangDef = document.createElement('link');
      hrefLangDef.setAttribute('rel', 'alternate');
      hrefLangDef.setAttribute('hreflang', 'x-default');
      document.head.appendChild(hrefLangDef);
    }
    hrefLangDef.setAttribute('href', idUrl);


    


    // Structured Data for Article
    const scriptId = 'article-collaborative-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran Kolaboratif Menggunakan IFP di Kelas",
          "description": "Panduan pembelajaran kolaboratif menggunakan IFP di kelas, lengkap dengan ide aktivitas kelompok, multi-touch, pengelolaan kelas, asesmen formatif, dan contoh pembelajaran 2 JP.",
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
              "name": "Pembelajaran Kolaboratif dengan IFP",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas"
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
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran Kolaboratif dengan IFP</li>
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
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Pedagogi & Manajemen Kelas</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Pembelajaran Kolaboratif Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-teal-500 pl-4">
                "Ketika layar sentuh kelas berhenti menjadi monopoli guru dan mulai menjadi kanvas interaksi siswa, saat itulah pembelajaran kolaboratif yang sesungguhnya terjadi."
              </p>

              <p>
                Teknologi sering kali dituduh membuat siswa menjadi individualis, terpaku pada layar masing-masing, dan terisolasi dari lingkungan sosialnya. Namun, hal ini tidak berlaku jika kita menerapkan <strong>pembelajaran kolaboratif dengan IFP</strong> (<em>Interactive Flat Panel</em>). Dengan luasan layar yang memadai dan kemampuan merespons banyak sentuhan sekaligus, IFP memiliki potensi besar untuk mentransformasi ruang kelas dari sekadar tempat mendengar menjadi ruang bekerja sama, berdebat, dan memecahkan masalah.
              </p>
              
              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu Pembelajaran Kolaboratif?</h2>
              <p>
                Pembelajaran kolaboratif (<em>collaborative learning</em>) bukan sekadar menempatkan siswa dalam satu meja dan menyuruh mereka menyelesaikan satu lembar kerja bersama (LKS). Pembelajaran kolaboratif yang sejati mengharuskan adanya ketergantungan positif antaranggota kelompok, interaksi tatap muka, komunikasi interpersonal, dan akuntabilitas individu. Melalui <strong>pembelajaran kelompok</strong>, siswa belajar berbagi ide, mempertahankan argumen, mendengarkan pandangan teman sebaya (<em>peer learning</em>), dan mengambil tanggung jawab bersama atas pemecahan masalah yang diberikan oleh guru.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Mengapa IFP Cocok untuk Pembelajaran Kolaboratif?</h2>
              <p>
                Jika kerja kelompok konvensional biasanya terbatas pada selembar kertas karton di atas meja, <strong>pembelajaran kolaboratif menggunakan IFP</strong> membawa interaksi ke panggung yang lebih besar:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Visibilitas Kelas (Visibility):</strong> Layar sentuh besar (biasanya berukuran 65 hingga 86 inci) memastikan bahwa hasil diskusi dan pekerjaan satu kelompok dapat dilihat dan dikritisi langsung oleh seluruh kelas.</li>
                <li><strong>Kemampuan Multi-Touch:</strong> IFP modern mampu mendeteksi 20 hingga 40 titik sentuhan sekaligus. Ini berarti dua, tiga, hingga empat siswa dapat maju ke depan dan berinteraksi dengan kanvas digital secara bersamaan tanpa saling menunggu.</li>
                <li><strong>Shared Workspace:</strong> IFP menyediakan ruang kerja bersama (<em>digital whiteboard</em>) yang tak terbatas, di mana siswa dapat melakukan aktivitas visual dengan <em>immediate feedback</em>.</li>
              </ul>
              
              <div className="bg-teal-50 p-4 rounded-xl border-l-4 border-teal-500 my-6 text-sm">
                <strong>💡 Catatan:</strong> Untuk memahami lebih lanjut potensi dasar perangkat ini, silakan baca <a href="/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleGuideIfp', '/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Panduan Menggunakan IFP untuk Pembelajaran Interaktif di Kelas</a>.
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Cara Mengatur Kelompok Saat Menggunakan IFP</h2>
              <p>
                Membawa sekelompok siswa berkerumun di depan layar tanpa panduan hanya akan memicu kekacauan. Manajemen kelas sangat penting dalam <strong>aktivitas kelompok menggunakan IFP</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Ukuran Kelompok:</strong> Idealnya kelompok terdiri dari 3–5 siswa. Maksimal 3 siswa berinteraksi di layar sekaligus agar tidak saling sikut.</li>
                <li><strong>Pembagian Peran (Student Roles):</strong> Tetapkan peran yang jelas. Siapa yang bertugas menulis/menggambar di layar (<em>operator</em>), siapa yang mencari referensi di buku/tablet (<em>researcher</em>), dan siapa yang menyajikan argumen (<em>speaker</em>). Rotasi peran ini pada aktivitas berikutnya.</li>
                <li><strong>Aturan Giliran (Turn-Taking):</strong> Buat aturan jelas tentang kapan siswa boleh maju ke layar. Hal ini mencegah dominasi oleh satu siswa alfa di dalam kelompok. Siswa yang tidak menyentuh layar harus tetap aktif memberikan masukan secara verbal.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. 8 Ide Aktivitas Kolaboratif dengan IFP</h2>
              <p>
                Berikut adalah ragam <strong>aktivitas kolaboratif dengan IFP</strong> yang bisa Anda terapkan di kelas:
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">1. Drag-and-Drop Bersama</h3>
              <p>
                <strong>Tujuan:</strong> Mengelompokkan atau mencocokkan kategori. <br />
                <strong>Pelaksanaan:</strong> Tampilkan kumpulan objek atau konsep acak. Kelompok maju ke depan. Karena IFP mendukung <em>multi-touch</em>, siswa A dapat menggeser objek ke kolom sebelah kiri sementara siswa B menggeser objek lain ke sebelah kanan secara bersamaan. (Cek penerapannya di <a href="/jurnal-guru/aktivitas-ipa-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIpaIfp', '/jurnal-guru/aktivitas-ipa-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Aktivitas IPA</a>).
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">2. Pemetaan Konsep (Mind Mapping)</h3>
              <p>
                <strong>Tujuan:</strong> Membangun hubungan antaride secara visual.<br />
                <strong>Pelaksanaan:</strong> Tuliskan topik sentral di tengah papan tulis digital. Anggota kelompok bergantian menggunakan warna pena (<em>stylus</em>) yang berbeda untuk menambahkan cabang, menambahkan gambar, atau menulis anotasi. (Sering digunakan dalam <a href="/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIpsIfp', '/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Aktivitas IPS</a>).
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">3. Menyusun Urutan (Sequencing)</h3>
              <p>
                <strong>Tujuan:</strong> Melatih pemahaman kronologis atau prosedural.<br />
                <strong>Pelaksanaan:</strong> Acak urutan sebuah cerita (untuk bahasa) atau urutan operasi hitung (untuk matematika). Kelompok berdiskusi untuk menyusun kotak-kotak urutan tersebut dari atas ke bawah.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">4. Pemecahan Masalah Kolaboratif</h3>
              <p>
                <strong>Tujuan:</strong> Membedah dan menyelesaikan soal cerita kompleks.<br />
                <strong>Pelaksanaan:</strong> Tampilkan satu kasus sulit. Belah layar (<em>split-screen</em>) menjadi dua area. Dua kelompok dapat maju dan mengerjakan pendekatan (<em>approach</em>) mereka masing-masing pada soal yang sama secara simultan. (Sangat efektif untuk <a href="/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleMathIfp', '/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Aktivitas Matematika</a>).
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">5. Analisis Gambar atau Data</h3>
              <p>
                <strong>Tujuan:</strong> Melatih ketelitian visual dan berpikir kritis.<br />
                <strong>Pelaksanaan:</strong> Tampilkan grafik, infografis, atau foto bersejarah. Kelompok maju untuk menandai (<em>highlighting</em>) bagian-bagian penting dari gambar tersebut sambil mempresentasikan temuan mereka ke kelas.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">6. Kuis Kelompok Berbasis Game</h3>
              <p>
                <strong>Tujuan:</strong> Meninjau kembali pemahaman materi (<em>review</em>).<br />
                <strong>Pelaksanaan:</strong> Gunakan elemen gamifikasi. Anda dapat menelusuri <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">koleksi game edukasi IFP</a> yang mendukung mode <em>squad</em> atau <em>duel</em> beregu. Beberapa <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game pembelajaran interaktif</a> memungkinkan kelompok berbaris dan berlomba memberikan jawaban benar secara bergiliran menggunakan layar sentuh (<em>relay quiz</em>).
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">7. Presentasi Interaktif</h3>
              <p>
                <strong>Tujuan:</strong> Melatih kemampuan komunikasi publik.<br />
                <strong>Pelaksanaan:</strong> Alih-alih membuat PowerPoint pasif, siswa merancang presentasi kelompok di aplikasi <em>whiteboard</em> IFP. Mereka menjelaskan materi sambil menggeser objek, menyembunyikan/memunculkan lapisan layar (<em>layers</em>), dan mengajak audiens (kelompok lain) untuk naik ke atas panggung berinteraksi dengan slide mereka.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">8. Refleksi Bersama</h3>
              <p>
                <strong>Tujuan:</strong> Melakukan evaluasi kinerja kelompok.<br />
                <strong>Pelaksanaan:</strong> Setelah aktivitas selesai, kelompok menggunakan IFP untuk mengisi rubrik penilaian antar-teman (<em>peer assessment</em>) secara visual menggunakan stiker atau emoji di layar IFP.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Memanfaatkan Multi-Touch Tanpa Membuat Kelas Kacau</h2>
              <p>
                Keunggulan utama IFP adalah <strong>multi-touch dalam pembelajaran</strong>. Namun hal ini bisa berbahaya jika siswa menekan sembarang tombol. Edukasi siswa mengenai "etika layar sentuh" (<em>touch etiquette</em>):
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Gunakan sentuhan yang lembut. Layar sentuh kapasitif modern tidak memerlukan tekanan keras.</li>
                <li>Perhatikan area kerja masing-masing. Jangan menghalangi atau menghapus pekerjaan teman saat interaksi simultan (<em>simultaneous interaction</em>) sedang berlangsung.</li>
                <li>Guru memegang kendali moderasi. Ingatkan siswa bahwa alat (IFP) adalah sarana belajar, bukan tujuan utama. Keselamatan dan ketertiban kelas tetap diutamakan demi mencegah interaksi sentuhan sembarangan (<em>random touching</em>).</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Peran Guru dalam Pembelajaran Kolaboratif dengan IFP</h2>
              <p>
                Penting untuk diingat bahwa teknologi secanggih apa pun tidak bisa menggantikan keberadaan guru. Dalam <strong>media pembelajaran kolaboratif</strong> ini, peran guru bergeser dari sekadar "pemberi informasi" (<em>sage on the stage</em>) menjadi seorang desainer pembelajaran dan fasilitator.
              </p>
              <p>
                Guru bertugas melemparkan pertanyaan pemantik (<em>questioner</em>), memantau jalannya diskusi antar-siswa (<em>observer</em>), dan memberikan umpan balik (<em>feedback provider</em>) pada momen-momen krusial saat kelompok mengalami kebuntuan di depan layar sentuh besar.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Menggunakan IFP untuk Asesmen Formatif Kelompok</h2>
              <p>
                Selaras dengan prinsip pada artikel <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif menggunakan IFP</a>, kolaborasi juga harus diukur dan dievaluasi. Gunakan IFP untuk melakukan pengecekan kilat (<em>quick checks</em>) guna melihat pemahaman keseluruhan kelompok, bukan hanya satu individu. Respons yang diberikan kelompok di layar IFP adalah bahan yang sangat baik bagi guru untuk menemukan miskonsepsi (<em>misconception identification</em>) secara bersama, yang kemudian diikuti dengan pemberian tiket keluar (<em>exit tickets</em>) berbasis visual di layar IFP.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Kesalahan yang Sering Terjadi (dan Solusinya)</h2>
              <p>
                Implementasi <strong>pembelajaran kelompok menggunakan layar sentuh</strong> rentan terhadap beberapa perangkap:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>IFP Hanya Menjadi Presentasi Pasif:</strong> Solusi: Wajibkan siswa menyentuh layar saat menjelaskan. (Baca: <a href="/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpMedia', '/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">Memaksimalkan IFP sebagai Media Interaktif</a>).</li>
                <li><strong>Satu Siswa Mendominasi:</strong> Siswa alfa yang paling paham atau paling tinggi badannya menguasai layar. Solusi: Gunakan aturan <em>pass-the-pen</em> (estafet spidol) atau pembagian peran.</li>
                <li><strong>Kehilangan Tujuan Pembelajaran:</strong> Aktivitas hanya menjadi hiburan belaka. Solusi: Kurangi penggunaan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game untuk IFP</a> yang bersifat <em>arcade murni</em> tanpa refleksi, dan pastikan setiap langkah aktivitas menunjuk langsung ke indikator pembelajaran.</li>
                <li><strong>Tidak Ada Refleksi:</strong> Siswa kembali ke bangku tanpa menyimpulkan apa yang mereka kerjakan di depan. Solusi: Sisihkan 5 menit akhir khusus untuk melakukan konfirmasi pemahaman materi.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Contoh Skenario Pembelajaran Kolaboratif (2 JP)</h2>
              <p>
                Berikut adalah rancangan praktis (skenario) untuk 2 Jam Pelajaran (2 x 35/40 menit) yang dapat diadaptasi untuk mata pelajaran apa pun:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Menit 1–15 (Pembukaan):</strong> Guru melempar satu gambar provokatif atau grafik rumpang di IFP. Siswa duduk dan berdiskusi secara klasikal, mencetuskan ide awal.</li>
                <li><strong>Menit 15–40 (Aktivitas Kolaboratif Kelompok):</strong> Guru membagi kelas ke dalam beberapa pos kerja. Setiap kelompok secara bergiliran mendapat jatah 5-7 menit bekerja di IFP. Mereka menyusun <em>mind map</em> (misal: ciri-ciri tokoh cerita atau langkah eksperimen sains) sementara kelompok lain mencari referensi dari perangkat masing-masing atau buku cetak.</li>
                <li><strong>Menit 40–55 (Diskusi & Asesmen Formatif):</strong> Semua hasil kerja kelompok yang tersimpan di IFP ditampilkan berjejer secara digital. Siswa melakukan <em>gallery walk</em> secara <em>virtual</em> di IFP. Guru memberikan pertanyaan pengecekan dan meluruskan miskonsepsi (<em>formative assessment</em>).</li>
                <li><strong>Menit 55–70 (Refleksi & Penutup):</strong> Perwakilan kelompok maju menempelkan stiker digital berupa emoji di layar IFP untuk menilai seberapa baik kerja sama kelompok mereka hari itu. Guru menutup dengan penguatan materi.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. Kesimpulan</h2>
              <p>
                Keberhasilan <strong>pembelajaran kolaboratif dengan IFP</strong> tidak ditentukan semata-mata oleh resolusi layar atau sensitivitas sentuhan perangkat, melainkan pada kejelian guru merancang <a href="/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpActivities', '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">aktivitas interaktif</a> yang mewajibkan siswa bernegosiasi dan mencapai konsensus. Ketika layar sentuh digunakan sebagai "medan pertemuan" ide-ide siswa, maka IFP benar-benar memenuhi janjinya sebagai jembatan transformasi pendidikan modern.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleCollaborativeIfp;
