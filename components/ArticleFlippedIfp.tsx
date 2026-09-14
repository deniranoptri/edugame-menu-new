import React, { useEffect } from 'react';

interface ArticleFlippedIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleFlippedIfp: React.FC<ArticleFlippedIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Model Flipped Classroom Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan lengkap implementasi Flipped Classroom menggunakan IFP. Ubah jam tatap muka menjadi sesi diskusi, pemecahan masalah, dan aplikasi konsep secara interaktif."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/flipped-classroom-menggunakan-ifp');

    const idUrl = 'https://papaninteraktif.com/jurnal-guru/flipped-classroom-menggunakan-ifp';
    const enUrl = 'https://papaninteraktif.com/en/journal/flipped-classroom-using-interactive-flat-panel';

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


    const scriptId = 'article-flipped-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Model Flipped Classroom Menggunakan IFP",
          "description": "Panduan lengkap implementasi Flipped Classroom menggunakan IFP. Ubah jam tatap muka menjadi sesi diskusi, pemecahan masalah, dan aplikasi konsep secara interaktif.",
          "author": {
            "@type": "Person",
            "name": "Deni Ranoptri, M.Pd"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Papan Interaktif",
            "logo": {
              "@type": "ImageObject",
              "url": window.location.origin + "/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.origin + "/jurnal-guru/flipped-classroom-menggunakan-ifp"
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
              "name": "Model Flipped Classroom Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/flipped-classroom-menggunakan-ifp"
            }
          ]
        }
      ]);
      document.head.appendChild(script);
    }

    return () => {
      if (existingScript) {
        existingScript.remove();
      } else {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <nav aria-label="Breadcrumb" className="px-8 pt-8 pb-4 border-b border-gray-100">
            <ol className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
              <li>
                <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('home', '/'); }} className="hover:text-blue-600 transition-colors">Beranda</a>
              </li>
              <li><span aria-hidden="true" className="opacity-50 mx-1">/</span></li>
              <li>
                <a href="/jurnal-guru" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-blue-600 transition-colors">Jurnal Guru</a>
              </li>
              <li><span aria-hidden="true" className="opacity-50 mx-1">/</span></li>
              <li aria-current="page" className="text-[#0C1A69]">Flipped Classroom</li>
            </ol>
          </nav>

          <div className="p-8 md:p-12">
            <button 
              onClick={onBack}
              className="group flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors mb-8"
            >
              <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Jurnal
            </button>

            <article className="prose prose-lg md:prose-xl max-w-none text-gray-700">
              <header className="mb-10">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Metodologi Interaktif</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Model Flipped Classroom Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-purple-400 pl-4">
                  "Mengapa kita menghabiskan waktu tatap muka yang sangat berharga hanya untuk menyuapi siswa dengan teori yang bisa mereka baca sendiri di rumah? Kelas seharusnya menjadi medan pertempuran ide, bukan ruang tunggu penyampaian informasi. Dengan membalik model ini, layar interaktif di depan kelas akhirnya berfungsi sebagai apa yang seharusnya: sebuah kanvas aplikasi."
                </p>

                <p>
                  Salah satu ironi terbesar dalam pendidikan modern adalah bagaimana guru menghabiskan 80% waktu di kelas untuk ceramah (menjelaskan konsep dasar), dan menyerahkan bagian tersulit—yaitu pemecahan masalah dan aplikasi (PR)—untuk dikerjakan siswa sendirian di rumah. Model <strong>Flipped Classroom (Kelas Terbalik)</strong> membalikkan rasio ini. Teori dipelajari secara mandiri di rumah melalui video atau bahan bacaan, sementara waktu di sekolah didedikasikan sepenuhnya untuk diskusi tingkat tinggi, eksperimen, dan kolaborasi.
                </p>
                <p>
                  Tantangan terbesarnya adalah: apa yang harus guru lakukan saat siswa tiba di kelas? Jika guru kembali berceramah, model ini gagal. Di sinilah <strong>Flipped Classroom menggunakan IFP</strong> (<em>Interactive Flat Panel</em>) menjadi krusial. IFP bertindak sebagai "pusat aplikasi", mengubah ruang kelas pasif menjadi ruang lokakarya interaktif.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Mengapa IFP adalah Jantung dari Kelas Terbalik?</h2>
                <p>
                  Dalam model kelas terbalik, siswa masuk ke ruangan dengan asumsi mereka "sudah tahu dasar-dasarnya". Tugas guru kini adalah menguji pemahaman tersebut, meluruskan miskonsepsi, dan menantang siswa di level Taksonomi Bloom yang lebih tinggi (Menganalisis, Mengevaluasi, Mencipta). 
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Memfasilitasi Pembuktian (Proofing):</strong> IFP memungkinkan siswa maju dan membuktikan apa yang mereka pelajari semalam. Mereka tidak lagi hanya mendengarkan, melainkan memproyeksikan argumen mereka ke layar besar.</li>
                  <li><strong>Analisis Miskonsepsi Instan:</strong> Melalui fitur <em>screencast</em> atau <em>polling</em> terintegrasi pada IFP, guru dapat mengumpulkan jawaban kuis pra-kelas seluruh siswa dalam hitungan detik, menampilkannya dalam bentuk diagram di IFP, dan langsung <a href="/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDiagnosticIfp', '/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">mendiagnosis area mana yang belum dikuasai</a>.</li>
                  <li><strong>Mendorong Kolaborasi Visual:</strong> Waktu kelas digunakan untuk memecahkan studi kasus kompleks. IFP dibagi menjadi beberapa zona (<em>split-screen</em>), memungkinkan beberapa kelompok bekerja berdampingan di satu kanvas digital yang sama.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Aktivitas Flipped Classroom Interaktif di IFP</h2>
                <p>Berikut adalah 10 rancangan aktivitas konkret untuk memanfaatkan waktu tatap muka secara maksimal setelah siswa belajar teori di rumah:</p>

                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. "Defend Your Answer" (Pertahankan Jawabanmu)</strong>
                    <br/>Guru menampilkan sebuah soal pemecahan masalah rumit di IFP yang terkait dengan video semalam. Dua siswa dengan jawaban berbeda dipanggil maju. Layar IFP dibagi dua. Keduanya harus menuliskan langkah-langkah logika mereka secara simultan di layar dan mempertahankan argumennya di depan kelas.
                  </li>
                  <li><strong>2. Screencast Error Analysis (Analisis Kesalahan)</strong>
                    <br/>Guru diam-diam memilih pekerjaan rumah (PR) salah satu siswa yang memiliki kesalahan konsep umum (dianonimkan). PR tersebut diproyeksikan dari tablet guru ke IFP. Kelas kemudian bekerja sama menggunakan alat anotasi tinta merah digital untuk menemukan dan mengoreksi di mana letak kesalahan logika tersebut.
                  </li>
                  <li><strong>3. Live Concept Mapping (Pemetaan Konsep)</strong>
                    <br/>Alih-alih guru yang merangkum, siswa yang maju. Guru membuka kanvas kosong dengan fitur <em>Mind Mapping</em> di IFP. Berdasarkan video yang mereka tonton di rumah, siswa secara bergiliran maju, menambahkan gelembung (<em>node</em>) baru, menarik garis koneksi antar konsep, dan membangun peta pikiran raksasa bersama.
                  </li>
                  <li><strong>4. Interactive Sorting & Categorization</strong>
                    <br/>Untuk menguji ingatan siswa dari materi mandiri, guru menampilkan puluhan gambar, istilah, atau rumus yang berserakan di IFP. Siswa maju secara estafet, melakukan <em>drag-and-drop</em> untuk memasukkan <em>item-item</em> tersebut ke dalam keranjang kategori yang tepat (misal: "Hewan Karnivora" vs "Herbivora") dengan batas waktu.
                  </li>
                  <li><strong>5. Simulasi Studi Kasus (Virtual Lab)</strong>
                    <br/>Karena teori (misalnya Teori Gravitasi) sudah dipelajari di rumah, waktu kelas langsung digunakan untuk simulasi Fisika (seperti PhET). Siswa maju ke IFP, menyentuh dan memanipulasi variabel massa dan gaya gesek di layar untuk melihat apakah hasil simulasinya sesuai dengan rumus yang mereka pelajari.
                  </li>
                  <li><strong>6. "The Expert Hot-Seat" (Kursi Panas Ahli)</strong>
                    <br/>Sebuah fitur roda putar (<em>spinner</em>) digital ditampilkan di IFP berisi nama-nama siswa. Nama yang terpilih harus duduk di "Kursi Panas" dekat IFP. Siswa lain melemparkan pertanyaan sulit terkait video semalam, dan siswa di kursi panas harus menjawabnya sambil menggunakan IFP untuk menggambar atau memvisualisasikan jawabannya.
                  </li>
                  <li><strong>7. Gallery Walk Digital</strong>
                    <br/>Siswa bekerja dalam kelompok untuk membuat presentasi visual terkait materi lanjutan. Setelah selesai, semua karya diekspor ke IFP. IFP beralih ke mode <em>Gallery Grid</em>. Kelas berkeliling secara virtual dengan menggeser layar IFP, lalu membubuhkan <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">stempel bintang (peer-assessment)</a> pada karya terbaik.
                  </li>
                  <li><strong>8. Teks Anotasi Kolaboratif (Literasi)</strong>
                    <br/>Sebuah artikel sejarah kontroversial, yang topiknya sudah diperkenalkan dalam bacaan di rumah, ditampilkan <em>full-screen</em> di IFP. Siswa secara bergantian menggunakan stabilo digital berwarna: Kuning untuk "Fakta", Biru untuk "Opini", Hijau untuk "Bias Penulis". 
                  </li>
                  <li><strong>9. Jigsaw Puzzle Konsep</strong>
                    <br/>Guru memotong-motong sebuah diagram proses biologi (misal: siklus air) menjadi <em>puzzle</em> digital di <em>whiteboard</em> IFP. Berbekal teori yang mereka pelajari mandiri, siswa harus bekerja sama menyusun kembali kepingan <em>puzzle</em> tersebut pada tempatnya yang tepat di layar sentuh.
                  </li>
                  <li><strong>10. Interactive Exit Ticket (Tiket Keluar)</strong>
                    <br/>5 menit sebelum kelas berakhir, guru memunculkan satu pertanyaan reflektif tingkat tinggi di IFP. Siswa mengirimkan jawaban pendek dari <em>smartphone/Chromebook</em> mereka. IFP menampilkan semua jawaban secara <em>real-time</em> dalam format "Dinding Bata" (<em>Wall of Cards</em>) tanpa nama, sebagai <a href="/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleReflectionIfp', '/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">refleksi pembelajaran</a>.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Skenario Pembelajaran 2 JP: "Penyusunan Teks Eksposisi" (Bahasa)</h2>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-purple-200 pb-2">Skenario Praktis 2 JP (70-80 Menit) - Aplikasi Flipped Classroom</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Aktivitas Pra-Kelas (Di Rumah):</strong> Siswa menonton video YouTube berdurasi 7 menit yang dibuat guru tentang "Struktur Teks Eksposisi (Tesis, Argumen, Penegasan Ulang)". Mereka mencatat definisi singkat.</li>
                    <li><strong>Fase 1: Diagnostic Q&A di IFP (10 Menit):</strong> Guru membuka kelas bukan dengan salam panjang, melainkan kuis interaktif 3 soal di IFP (menggunakan Kahoot! atau <em>built-in polling</em>). Hasil <em>pie-chart</em> di IFP menunjukkan 90% siswa sudah paham konsep "Tesis", guru langsung melompat ke praktik tanpa mengulang teori.</li>
                    <li><strong>Fase 2: Analisis Teks Acak (20 Menit):</strong> Guru menayangkan 5 paragraf teks eksposisi di IFP yang posisinya teracak. Siswa maju secara estafet untuk melakukan <em>drag-and-drop</em> pada paragraf tersebut, menyusun ulang strukturnya menjadi utuh, dan mewarnai teks argumen dengan stabilo hijau digital.</li>
                    <li><strong>Fase 3: Produksi Kolaboratif (30 Menit):</strong> Siswa dibagi kelompok. Misi: Menulis teks eksposisi tentang "Bahaya Sampah Plastik". Layar IFP dibagi 4 zona (<em>Split-Screen</em>). 4 kelompok maju bersamaan. Mereka berdebat dan mengetik langsung/menulis dengan pen digital di zona masing-masing, memungkinkan guru melihat 4 draf kasar sekaligus.</li>
                    <li><strong>Fase 4: Peer Review Terpusat (15 Menit):</strong> Guru mematikan mode <em>Split-Screen</em>, memperbesar hasil karya Kelompok 1. Kelompok 2, 3, dan 4 maju untuk memberikan coretan (anotasi) pada diksi yang kurang tepat milik Kelompok 1. Hasil revisi final diekspor sebagai PDF melalui <em>QR Code</em> IFP.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesalahan Umum Guru dalam Flipped Classroom</h2>
                <p>
                  Kesalahan terbesar adalah "merasa kasihan" pada siswa yang tidak menonton video di rumah, sehingga guru mengulang penjelasan teori secara penuh di kelas selama 30 menit pertama. Ini menghancurkan model tersebut, karena siswa yang patuh akan merasa dirugikan, dan siswa yang abai akan belajar bahwa mereka <em>tidak perlu</em> menonton video di rumah karena toh guru akan mengulangnya di kelas. 
                </p>
                <p>
                  Atasi ini dengan <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">strategi pengelompokan asimetris</a>. Pisahkan siswa yang belum menonton ke sudut kelas untuk membaca ringkasan (tanpa bimbingan guru), sementara guru memandu aktivitas aplikasi tingkat tinggi di IFP bagi siswa yang sudah siap. IFP harus menjadi "panggung istimewa" untuk aplikasi dan apresiasi, bukan alat <em>remedial</em> teori dasar.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Checklist Kesiapan Kelas Terbalik</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-purple-500 mr-2">✓</span> Apakah materi mandiri (video/bacaan) cukup singkat (di bawah 10 menit) agar siswa tidak kewalahan di rumah?</li>
                  <li><span className="text-purple-500 mr-2">✓</span> Apakah aktivitas tatap muka berpusat pada siswa menggunakan IFP, bukan berpusat pada ceramah guru?</li>
                  <li><span className="text-purple-500 mr-2">✓</span> Apakah IFP ditempatkan secara terpusat agar seluruh kelompok bisa melihat proses analisis kesalahan dengan jelas?</li>
                  <li><span className="text-purple-500 mr-2">✓</span> Apakah instrumen asesmen formatif (seperti kuis awal jam) sudah siap diluncurkan secara interaktif di layar?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
                <p>
                  <strong>Model Flipped Classroom menggunakan IFP</strong> adalah representasi paling sejati dari revolusi pedagogis abad ke-21. Kita membebaskan waktu tatap muka dari belenggu "mendikte teori" dan mengembalikannya pada esensi pendidikan: interaksi sosial, debat, pemecahan masalah (<em>problem-solving</em>), dan eksplorasi. IFP berdiri di pusat transformasi ini bukan sebagai televisi raksasa penyiar informasi, melainkan sebagai meja operasi visual, di mana guru dan siswa secara kolaboratif membedah ide, menguji konsep, dan menciptakan pemahaman baru secara nyata.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleFlippedIfp;
