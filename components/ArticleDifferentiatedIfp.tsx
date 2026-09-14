import React, { useEffect } from 'react';

interface ArticleDifferentiatedIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleDifferentiatedIfp: React.FC<ArticleDifferentiatedIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran Berdiferensiasi Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan lengkap pembelajaran berdiferensiasi menggunakan IFP. Pelajari strategi diferensiasi konten, proses, dan produk melalui media layar interaktif."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas');

    // Hreflang Tags
    const hreflangs = [
      { hreflang: 'id', href: window.location.origin + '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas' },
      { hreflang: 'en', href: window.location.origin + '/en/journal/differentiated-learning-using-interactive-flat-panel' },
      { hreflang: 'x-default', href: window.location.origin + '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas' }
    ];
    
    hreflangs.forEach(({ hreflang, href }) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    });

    const scriptId = 'article-differentiated-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran Berdiferensiasi Menggunakan IFP",
          "description": "Panduan lengkap pembelajaran berdiferensiasi menggunakan IFP. Pelajari strategi diferensiasi konten, proses, dan produk melalui media layar interaktif.",
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
            "@id": window.location.origin + "/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas"
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
              "name": "Pembelajaran Berdiferensiasi Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas"
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
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran Berdiferensiasi Menggunakan IFP</li>
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
                <span className="bg-fuchsia-100 text-fuchsia-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Metodologi Interaktif</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Pembelajaran Berdiferensiasi Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-fuchsia-400 pl-4">
                  "Menghadapi 30 siswa di ruang kelas berarti menghadapi 30 profil belajar yang unik. Menyamaratakan pendekatan belajar bukanlah keadilan, melainkan pemaksaan. Pembelajaran berdiferensiasi adalah wujud penghargaan terhadap keunikan tersebut, dan Interactive Flat Panel hadir bukan untuk mengubah kurikulum, melainkan menyediakan kanvas tanpa batas agar siswa dapat memilih jalurnya sendiri."
                </p>

                <p>
                  Di dalam kelas yang heterogen, guru sering kali terjebak dalam pendekatan <em>one-size-fits-all</em>. Semua siswa membaca teks yang sama, mengerjakan soal yang sama, dalam waktu yang bersamaan. Hal ini menyebabkan siswa yang lambat menjadi frustrasi dan siswa yang cepat menjadi bosan. <strong>Pembelajaran berdiferensiasi menggunakan IFP</strong> (<em>Interactive Flat Panel</em>) bukan berarti menyuapi siswa dengan materi yang mudah, melainkan memberikan tantangan yang tepat di zona perkembangan proksimal mereka (<em>Zone of Proximal Development</em>). Layar sentuh cerdas ini berfungsi sebagai alat scaffolding visual yang luar biasa fleksibel, memungkinkan personalisasi pengalaman belajar pada skala klasikal.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Makna Sebenarnya dari Pembelajaran Berdiferensiasi</h2>
                <p>
                  Sangat penting untuk meluruskan miskonsepsi: pembelajaran berdiferensiasi BUKAN berarti guru harus membuat 30 RPP berbeda untuk 30 siswa, BUKAN sekadar memberikan tugas tambahan bagi anak yang pintar, dan BUKAN berarti mengelompokkan siswa secara permanen berdasarkan "kelas pintar" dan "kelas kurang". 
                </p>
                <p>
                  Diferensiasi adalah respons proaktif guru terhadap kebutuhan belajar siswa yang berakar pada tiga dimensi utama:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Kesiapan Belajar (Readiness):</strong> Sejauh mana pengetahuan prasyarat siswa terhadap materi baru.</li>
                  <li><strong>Minat (Interest):</strong> Topik apa yang membuat mata mereka berbinar (misal: olahraga, seni, teknologi).</li>
                  <li><strong>Profil Belajar (Learning Needs/Style):</strong> Cara terbaik mereka memproses informasi (visual, auditori, kinestetik).</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Tiga Strategi Diferensiasi: Konten, Proses, dan Produk</h2>
                <p>
                  Untuk mewujudkan diferensiasi yang bermakna, guru dapat memodifikasi tiga area inti. Melalui <strong>pembelajaran berdiferensiasi menggunakan IFP</strong>, eksekusi ketiga area ini menjadi jauh lebih visual dan interaktif:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Diferensiasi Konten (Apa yang dipelajari):</strong> Menggunakan fungsi <em>split-screen</em> pada IFP, guru dapat menampilkan sebuah teks bacaan di sebelah kiri, dan video animasi pendek di sebelah kanan. Siswa visual-auditori bisa menyimak video, sementara siswa linguistik bisa membedah teks. Kontennya berbeda, tetapi tujuan pembelajarannya tetap satu.</li>
                  <li><strong>Diferensiasi Proses (Bagaimana cara memahami):</strong> IFP menyediakan <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran mendalam</a> lewat perancah visual (<em>visual scaffolding</em>). Siswa yang masih butuh bimbingan bisa maju ke IFP untuk menggeser blok-blok kategori (drag-and-drop), sementara siswa yang sudah mahir dibiarkan melakukan analisis tingkat lanjut di meja masing-masing lewat diskusi <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran kolaboratif</a>.</li>
                  <li><strong>Diferensiasi Produk (Bagaimana menunjukkan pemahaman):</strong> Saat tiba waktunya presentasi, kanvas IFP tidak memaksa siswa hanya menulis teks. Siswa bebas memilih: apakah mereka ingin mempresentasikan infografis yang mereka desain, mind-map yang mereka coret langsung di IFP, atau memainkan animasi dari aset yang ada.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Fleksibilitas Pengelompokan dan Pilihan Siswa</h2>
                <p>
                  Kunci diferensiasi adalah kelompok yang dinamis (<em>flexible grouping</em>). Jangan biarkan siswa selalu duduk dengan teman yang kemampuannya sama sepanjang semester. Gunakan IFP untuk melakukan "pilihan mandiri" (<em>student choice</em>). Misalnya, tampilkan "Papan Pilihan" (<em>Choice Board</em>) di layar: Jalur A (Membaca Teks), Jalur B (Menonton Eksperimen), Jalur C (Merakit Model). Siswa maju ke depan dan menempelkan <em>sticky notes</em> digital berisi nama mereka di bawah jalur yang mereka pilih hari itu.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Mengelola Dinamika Siswa: Dominasi vs Dukungan Khusus</h2>
                <p>
                  Tantangan dalam diferensiasi adalah mengontrol kesenjangan partisipasi:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Bagi Siswa yang Membutuhkan Dukungan (Scaffolding):</strong> Guru tidak merendahkan tingkat kesulitan soal, melainkan memberikan <em>visual cues</em>. Di IFP, guru dapat menyiapkan kotak-kotak petunjuk tersembunyi yang bisa dibuka (di-klik) oleh siswa jika mereka menemui jalan buntu.</li>
                  <li><strong>Bagi Siswa dengan Kesiapan Tinggi (Enrichment):</strong> Mereka tidak diminta mengerjakan "soal yang sama lebih banyak". Sebaliknya, IFP menayangkan "Tantangan Ekstensi" di sudut layar. Saat mereka selesai dengan tugas dasar, mereka diarahkan menyelesaikan teka-teki logika yang lebih kompleks atau diizinkan memimpin <a href="/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleCooperativeIfp', '/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">pembelajaran kooperatif</a> bagi rekannya.</li>
                  <li><strong>Mencegah Dominasi:</strong> Kombinasikan diferensiasi dengan <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">pengelolaan kelas</a> yang terstruktur. Terapkan rotasi sentuhan (<em>touch rotation</em>) di mana setiap anggota grup memiliki jatah spesifik untuk berinteraksi dengan IFP.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Aktivitas Pembelajaran Berdiferensiasi dengan IFP</h2>
                <p>Berikut adalah 10 rancangan aktivitas konkret yang memfasilitasi diferensiasi secara langsung menggunakan fitur bawaan IFP:</p>

                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. Choice Board (Papan Pilihan)</strong>
                    <br/><strong>Tujuan:</strong> Diferensiasi Produk/Proses.
                    <br/><strong>Aktivitas:</strong> IFP menampilkan papan kotak 3x3 berisi sembilan cara untuk membuktikan sebuah konsep sains (misalnya: menggambar, menulis puisi, merangkai tabel). Siswa maju, memilih garis diagonal, vertikal, atau horizontal layaknya permainan Tic-Tac-Toe, lalu menyelesaikan 3 tugas pilihan mereka.
                  </li>
                  <li><strong>2. Visual Learning Pathway (Jalur Belajar Visual)</strong>
                    <br/><strong>Tujuan:</strong> Diferensiasi Kesiapan.
                    <br/><strong>Aktivitas:</strong> Peta jalan besar ditampilkan di IFP dengan tiga pemberhentian: "Stasiun Dasar", "Stasiun Analisis", dan "Stasiun Ahli". Guru memandu siswa untuk menempatkan avatar digital mereka di stasiun yang sesuai hasil <a href="/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDiagnosticIfp', '/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen diagnostik awal</a> mereka, lalu mulai belajar dari titik tersebut.
                  </li>
                  <li><strong>3. Tiered Task Selection (Tugas Berjenjang)</strong>
                    <br/><strong>Tujuan:</strong> Diferensiasi Konten.
                    <br/><strong>Aktivitas:</strong> Di layar IFP terdapat tiga amplop virtual berlogo perunggu, perak, dan emas. Masing-masing berisi tingkat kompleksitas soal yang berbeda. Siswa (secara mandiri atau arahan guru) memilih amplop yang menantang namun dapat dicapai.
                  </li>
                  <li><strong>4. Scaffolded Concept Mapping (Peta Konsep Berjenjang)</strong>
                    <br/><strong>Tujuan:</strong> Dukungan Proses.
                    <br/><strong>Aktivitas:</strong> Untuk murid reguler, guru memberikan kanvas IFP kosong untuk menggambar mind-map. Untuk murid yang butuh dukungan, guru memuat <em>template</em> mind-map dengan struktur utama yang sudah terisi separuh, meminta mereka hanya melengkapi bagian rinciannya.
                  </li>
                  <li><strong>5. Drag-and-Drop Classification</strong>
                    <br/><strong>Tujuan:</strong> Diferensiasi Gaya Belajar Kinestetik-Visual.
                    <br/><strong>Aktivitas:</strong> Daripada menulis daftar hewan vertebrata, siswa kinestetik maju ke IFP untuk menggeser (<em>drag</em>) puluhan foto hewan ke dalam kolom klasifikasi yang tepat secara langsung.
                  </li>
                  <li><strong>6. Difficulty-Level Stations (Rotasi Tingkat Kesulitan)</strong>
                    <br/><strong>Tujuan:</strong> Fleksibilitas Kelompok.
                    <br/><strong>Aktivitas:</strong> Layar IFP dibagi menggunakan fitur "Split Screen" menjadi 4 zona kuadran. Tiap kuadran menampilkan instruksi berbeda. Empat kelompok siswa berbeda merapat ke depan layar dan mengerjakan zona instruksinya masing-masing secara bersamaan.
                  </li>
                  <li><strong>7. Enrichment Challenge Panel (Panel Pengayaan)</strong>
                    <br/><strong>Tujuan:</strong> Diferensiasi Siswa Mahir.
                    <br/><strong>Aktivitas:</strong> Sebuah ikon "Gembok Tantangan" selalu disematkan di pojok kanan atas tiap slide materi. Siswa yang selesai lebih cepat dipersilakan menyentuh ikon tersebut untuk memicu munculnya soal analisis tingkat tinggi (HOTS) tanpa mengganggu teman yang masih bekerja.
                  </li>
                  <li><strong>8. Image/Text Matching for Literacy</strong>
                    <br/><strong>Tujuan:</strong> Diferensiasi Profil Belajar.
                    <br/><strong>Aktivitas:</strong> Dalam kelas bahasa, siswa pembaca tingkat lanjut diberikan artikel utuh di IFP untuk di-<em>highlight</em>. Sementara siswa pembaca pemula diberikan potongan paragraf acak yang harus digabungkan dengan gambar ilustrasi (menarik garis panah).
                  </li>
                  <li><strong>9. Student Choice Presentation</strong>
                    <br/><strong>Tujuan:</strong> Diferensiasi Produk.
                    <br/><strong>Aktivitas:</strong> Saat unjuk kerja, siswa tidak dibatasi menggunakan PPT. Mereka boleh membuka <em>whiteboard</em> IFP dan menggambar sketsa ide mereka secara <em>live</em>, atau menyambungkan gawai mereka untuk menampilkan video yang mereka rekam.
                  </li>
                  <li><strong>10. Interactive Sorting with Clues</strong>
                    <br/><strong>Tujuan:</strong> <em>Scaffolding</em> Mandiri.
                    <br/><strong>Aktivitas:</strong> Saat mengurutkan sejarah, siswa diminta meletakkan 5 peristiwa. Jika mereka salah meletakkan, IFP secara otomatis memunculkan tombol "Hint" (petunjuk visual tambahan) yang dapat ditekan jika siswa merasa frustrasi, menjaga keseimbangan mental belajar mereka.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Skenario Pembelajaran 2 JP: "Perubahan Ekosistem dan Rantai Makanan"</h2>
                <div className="bg-fuchsia-50/50 p-6 rounded-2xl border border-fuchsia-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-fuchsia-200 pb-2">Skenario Praktis 2 JP (70-80 Menit) - Diferensiasi IPA (Ekosistem)</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Asesmen Diagnostik Awal (10 Menit):</strong> Guru membuka kelas dengan tebak-tebakan cepat di IFP tentang herbivora/karnivora. Berdasarkan observasi singkat ini (dan data nilai sebelumnya), guru memetakan 3 kelompok kesiapan siswa (Kelompok A: Butuh Bimbingan, Kelompok B: Reguler, Kelompok C: Mahir).</li>
                    <li><strong>B. Setup Layar IFP (Pilihan Konten):</strong> Guru menampilkan menu utama di IFP: <em>Jalur Teks</em> (Artikel singkat), <em>Jalur Visual</em> (Video animasi interaktif), dan <em>Jalur Gambar</em> (Infografis jaring-jaring makanan). Siswa bebas memilih sumber mana yang ingin mereka serap selama 15 menit.</li>
                    <li><strong>C. Diferensiasi Proses per Kelompok (20 Menit):</strong> 
                        <br/>- <em>Kelompok A</em>: Maju ke IFP. Guru memandu mereka secara langsung menggunakan fitur <em>Drag-and-Drop</em>. Mereka ditugaskan menarik gambar rumput → belalang → katak secara linear.
                        <br/>- <em>Kelompok B</em>: Bekerja di meja menggunakan LKS mencatat jaring-jaring makanan bercabang.
                        <br/>- <em>Kelompok C</em>: Diberikan studi kasus kompleks ("Apa yang terjadi jika populasi katak punah total?") dan diminta merumuskan analisis tertulis.
                    </li>
                    <li><strong>D. Diferensiasi Produk (20 Menit):</strong> Tiap kelompok diminta mempresentasikan apa yang terjadi jika salah satu rantai terputus. Kelompok A mempresentasikan gambar yang telah mereka susun di IFP. Kelompok B menggambar mind-map langsung di IFP. Kelompok C mempresentasikan laporan analisis prediksi kepunahan massal.</li>
                    <li><strong>E. Penilaian dan Refleksi (10 Menit):</strong> Guru memotret/mengekspor (<em>export to PDF</em>) hasil coretan semua kelompok di IFP sebagai bagian dari <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif</a>. Siswa menutup pelajaran dengan melakukan <a href="/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleReflectionIfp', '/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">refleksi pembelajaran</a> melalui penempelan <em>emoji sticky notes</em> di IFP (Apakah kelas hari ini mudah, sedang, atau sulit?).</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Alur Perencanaan Guru dan Kesalahan Umum</h2>
                <p>Kesalahan fatal yang sering terjadi adalah guru merencanakan <em>diferensiasi yang berlebihan</em>. Membagi kelas menjadi 8 kelompok dengan 8 tugas berbeda hanya akan menciptakan kekacauan kelas. Fokuslah pada 2 atau 3 jenjang saja (Tiering). Selain itu, pastikan mobilitas fisik saat menggunakan IFP tidak menimbulkan kebingungan. Atur rute berjalan anak menuju ke IFP agar tetap tertib.</p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Checklist Praktis Guru (Pre-Diferensiasi)</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-fuchsia-500 mr-2">✓</span> Apakah data pemetaan kesiapan dan profil belajar siswa sudah tersedia?</li>
                  <li><span className="text-fuchsia-500 mr-2">✓</span> Apakah aset visual di IFP menyediakan opsi tingkat kesulitan bertahap?</li>
                  <li><span className="text-fuchsia-500 mr-2">✓</span> Apakah ada tugas "pengayaan" (Enrichment) yang disiapkan di IFP untuk kelompok cepat?</li>
                  <li><span className="text-fuchsia-500 mr-2">✓</span> Apakah aturan rotasi sentuhan (<em>touch rotation</em>) ke depan IFP sudah disampaikan?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
                <p>
                  Keberhasilan <strong>pembelajaran berdiferensiasi menggunakan IFP</strong> sangat bergantung pada kesadaran guru bahwa teknologi adalah fasilitator, bukan guru itu sendiri. IFP menyajikan fleksibilitas visual, kemampuan memecah layar, dan menu pilihan yang membuat diferensiasi konten, proses, dan produk tidak lagi menjadi beban administrasi yang berat. Ketika setiap anak—terlepas dari kesiapan dan profil belajarnya—merasa terfasilitasi untuk menyentuh, bergeser, dan membuktikan pemahaman mereka di layar yang sama, di situlah keadilan pendidikan yang sesungguhnya terjadi.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDifferentiatedIfp;
