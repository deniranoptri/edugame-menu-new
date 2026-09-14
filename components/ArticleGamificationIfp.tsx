import React, { useEffect } from 'react';

interface ArticleGamificationIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleGamificationIfp: React.FC<ArticleGamificationIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gamifikasi Pembelajaran Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan lengkap gamifikasi pembelajaran menggunakan IFP. Pelajari cara menerapkan poin, badge, papan peringkat, dan aktivitas kompetitif yang edukatif di kelas."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp');
    // Hreflang Tags
    const hreflangs = [
      { hreflang: 'id', href: window.location.origin + '/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp' },
      { hreflang: 'en', href: window.location.origin + '/en/journal/gamification-using-interactive-flat-panel' },
      { hreflang: 'x-default', href: window.location.origin + '/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp' }
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

    const scriptId = 'article-gamification-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Gamifikasi Pembelajaran Menggunakan IFP",
          "description": "Panduan lengkap gamifikasi pembelajaran menggunakan IFP. Pelajari cara menerapkan poin, badge, papan peringkat, dan aktivitas kompetitif yang edukatif di kelas.",
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
            "@id": window.location.origin + "/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp"
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
              "name": "Gamifikasi Pembelajaran Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Gamifikasi Pembelajaran</li>
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
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Metodologi Interaktif</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Gamifikasi Pembelajaran Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-yellow-400 pl-4">
                  "Menghadirkan kesenangan (fun) di ruang kelas bukanlah membuang-buang waktu akademik, melainkan cara paling efektif untuk mengunci fokus siswa. Gamifikasi bukan sekadar menyuruh anak bermain game, melainkan menyematkan mekanika game—seperti skor, misi, dan level—ke dalam desain pembelajaran yang serius."
                </p>

                <p>
                  Salah satu tantangan terbesar guru di abad ke-21 adalah bersaing dengan gawai untuk merebut atensi siswa. Otak siswa telah terbiasa dengan <em>dopamine hit</em> yang cepat dari video pendek dan game online. Alih-alih melarang keras pendekatan visual tersebut, kita bisa meminjam mekanismenya. <strong>Gamifikasi pembelajaran menggunakan IFP</strong> (<em>Interactive Flat Panel</em>) adalah teknik mengadopsi elemen permainan ke dalam materi pelajaran untuk memotivasi siswa belajar lebih keras secara sukarela.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu Gamifikasi Pembelajaran?</h2>
                <p>
                  Sering terjadi miskonsepsi bahwa gamifikasi sama dengan <em>Game-Based Learning</em> (belajar melalui bermain game utuh, seperti yang tersedia di <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubKids', '/game-edukasi-ifp'); }} className="text-blue-700 hover:underline font-bold">Koleksi Game Edukasi</a>). Walau beririsan, gamifikasi lebih spesifik pada "penyematan elemen game ke dalam aktivitas non-game". Anda tetap mengajar materi reguler (misal: Matematika atau IPS), tetapi siswa harus menyelesaikan "misi" untuk mendapatkan "poin" atau "badge" di akhir pelajaran.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Mengapa IFP adalah Medium Sempurna untuk Gamifikasi?</h2>
                <p>
                  Gamifikasi menuntut <strong>umpan balik instan (immediate feedback)</strong> dan <strong>visibilitas publik</strong>. Jika guru mencatat poin diam-diam di buku nilai, elemen gamifikasinya mati. Papan peringkat (<em>leaderboard</em>), <em>timer</em> hitung mundur, dan animasi kemenangan harus terlihat besar, bercahaya, dan dapat diintervensi oleh siswa langsung. IFP memenuhi semua kriteria ini. Layarnya yang besar, respons sentuhannya, dan audionya menciptakan atmosfer kompetitif yang sehat ala <em>game show</em> di TV.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Elemen Utama Gamifikasi di Layar IFP</h2>
                <p>Agar gamifikasi berjalan efektif di kelas, pastikan Anda menampilkan setidaknya 3 dari 5 elemen berikut di IFP secara konsisten selama jam pelajaran:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Points (Poin/Skor):</strong> Sistem nilai transparan. Setiap jawaban benar, kecepatan, atau kerjasama tim dihargai dengan poin yang tertampil langsung di IFP.</li>
                  <li><strong>Badges (Lencana):</strong> Penghargaan visual. Siswa yang berhasil melakukan tugas tertentu berhak menyeret (<em>drag</em>) stiker bintang atau lencana ke kolom nama kelompoknya di kanvas IFP.</li>
                  <li><strong>Leaderboards (Papan Peringkat):</strong> Sebuah tabel dinamis di sudut IFP yang menampilkan posisi klasemen tim secara <em>real-time</em>.</li>
                  <li><strong>Narrative/Storyline (Narasi Cerita):</strong> Ubah soal biasa menjadi misi. Misalnya, "Selesaikan 5 soal pecahan ini untuk mendapatkan kode rahasia membuka peti harta karun."</li>
                  <li><strong>Immediate Feedback (Umpan Balik Instan):</strong> Animasi kembang api, suara tepuk tangan (<em>applause</em>), atau suara bel (<em>buzzer</em>) dari IFP segera setelah siswa memberikan jawaban.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. 10 Aktivitas Gamifikasi Pembelajaran di IFP</h2>
                <p>Berikut adalah berbagai cara kreatif menerapkan elemen game ke dalam pelajaran menggunakan kapabilitas IFP:</p>

                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. "Boss Battle" (Tantangan Akhir)</strong>
                    <br/>Di akhir materi, IFP menampilkan satu soal paling sulit (dilabeli sebagai "Boss"). Siswa secara berkelompok harus maju bergantian menyerang boss tersebut dengan cara menuliskan langkah-langkah penyelesaian. Jika benar, <em>Health Point</em> (HP) si Boss di layar akan berkurang.
                  </li>
                  <li><strong>2. "The Wheel of Fortune" (Roda Keberuntungan)</strong>
                    <br/>Gunakan aplikasi <em>spinner</em> atau roda putar bawaan IFP. Roda tersebut berisi nama kelompok, angka soal, atau tantangan hukuman lucu. Memutar roda raksasa secara fisik (disentuh) menciptakan <em>suspense</em> yang sangat disukai siswa.
                  </li>
                  <li><strong>3. "Hidden Picture Reveal" (Buka Tabir Rahasia)</strong>
                    <br/>Tampilkan sebuah gambar yang ditutupi oleh 16 kotak bernomor (seperti <em>puzzle</em>). Setiap kali ada siswa/kelompok yang berhasil menjawab pertanyaan, mereka boleh memencet satu kotak di IFP agar menghilang. Kelompok pertama yang bisa menebak gambar utuh di belakangnya adalah pemenangnya.
                  </li>
                  <li><strong>4. "Interactive Jeopardy / Trivia Board"</strong>
                    <br/>Buat papan ala kuis Jeopardy di IFP dengan berbagai kategori materi dan tingkat poin (100, 200, 300). Siswa memencet angka di layar IFP untuk membuka soal. Sangat berguna untuk <em>review</em> sebelum ujian.
                  </li>
                  <li><strong>5. "Timer Bomb" (Bom Waktu)</strong>
                    <br/>Tampilkan <em>timer</em> digital berbentuk bom di IFP (misalnya 60 detik). Seorang perwakilan kelompok harus menyelesaikan soal di papan sebelum waktu habis dan suara ledakan berbunyi dari <em>speaker</em> IFP.
                  </li>
                  <li><strong>6. "Drag-and-Drop Race" (Balap Menyusun)</strong>
                    <br/>Bagi layar IFP menjadi dua (<em>split screen</em>). Panggil perwakilan dua kelompok. Siapa yang paling cepat menyusun kronologi sejarah atau mengurutkan siklus air dengan benar akan menyumbangkan skor besar untuk timnya.
                  </li>
                  <li><strong>7. "Unlock the Code" (Buka Kode Gembok)</strong>
                    <br/>Hasil akhir dari jawaban matematika atau fisika (misalnya angka 3-4-2) digunakan untuk membuka gembok brankas animasi yang ditampilkan di IFP. 
                  </li>
                  <li><strong>8. "Virtual Sticky Note Bidding" (Lelang Jawaban)</strong>
                    <br/>Guru melempar masalah. Tiap kelompok mengirimkan jawaban via <em>sticky note</em> di layar IFP. Kemudian guru memberikan poin acak tersembunyi pada tiap jawaban.
                  </li>
                  <li><strong>9. "Avatar Progression" (Kemajuan Karakter)</strong>
                    <br/>Di sepanjang minggu, kelas memiliki karakter animasi (misalnya roket). Setiap kali kelas mencapai target sikap atau akademis harian, guru menggeser roket tersebut di IFP agar semakin dekat ke bulan.
                  </li>
                  <li><strong>10. "Easter Egg Hunt" (Pencarian Tersembunyi)</strong>
                    <br/>Selama presentasi materi di IFP, guru menyembunyikan ikon kecil (misalnya bintang kecil di sudut <em>slide</em> tertentu). Siswa yang paling jeli menyadarinya dan berlari menyentuhnya di layar berhak mendapat "Poin Konsentrasi".
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Skenario Pembelajaran 2 JP: "Misi Menyelamatkan Ekosistem (IPA Terpadu)"</h2>
                <div className="bg-yellow-50/50 p-6 rounded-2xl border border-yellow-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-yellow-200 pb-2">Skenario Praktis 2 JP (70-80 Menit) - Gamifikasi IPA</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Prolog / Narasi Awal (10 Menit):</strong> Guru mematikan lampu kelas. IFP menampilkan animasi bumi yang perlahan menghitam. Guru menyampaikan narasi: <em>"Agen-agen sekalian, bumi sedang kehilangan energi hijau. Kalian harus mengumpulkan 500 Energi Kristal hari ini untuk menghidupkannya kembali."</em></li>
                    <li><strong>B. Pembagian Fraksi / Kelompok (5 Menit):</strong> Siswa dibagi menjadi 4 Fraksi (Tim Air, Tim Api, Tim Tanah, Tim Angin). Papan skor (Leaderboard) digital berlogo masing-masing fraksi langsung ditayangkan di sudut kanan atas IFP.</li>
                    <li><strong>C. Misi 1: Drag and Drop Ekosistem (15 Menit):</strong> Tiap fraksi mengirim delegasi ke depan IFP. Mereka harus mencocokkan hewan dengan habitatnya menggunakan fitur <em>split-screen</em> secara cepat. Tim tercepat mendapat 100 Kristal.</li>
                    <li><strong>D. Misi 2: Investigasi Mikroskopis (15 Menit):</strong> IFP menampilkan gambar sel tumbuhan yang di-<em>zoom</em> sangat besar. Tiap fraksi berdiskusi 2 menit, lalu satu perwakilan maju berlomba melingkari (anotasi) kloroplas di layar IFP. Jawaban tepat diganjar 150 Kristal.</li>
                    <li><strong>E. Misi 3: Tanya Jawab Buzzer (15 Menit):</strong> Guru membacakan soal esai pendek. Kelompok yang siap menjawab harus mengangkat bendera. Jika jawaban benar, guru menekan tombol "Level Up" di IFP yang akan memunculkan efek suara meriah.</li>
                    <li><strong>F. Evaluasi Akhir & Penghargaan (10 Menit):</strong> Seluruh skor fraksi dijumlahkan di IFP. Jika totalnya melebihi 500 Kristal, bumi kembali hijau di layar IFP (<em>reward visual</em>). Sebagai bentuk <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif</a>, layar yang penuh interaksi tersebut diekspor ke PDF.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Tantangan dan Kesalahan Umum Gamifikasi</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Terlalu Fokus pada Game, Lupa Materi:</strong> Ini adalah jebakan terbesar. Anak-anak bersenang-senang berkompetisi tetapi tidak mengerti konsep dasarnya. Pastikan mekanika game (seperti <em>timer</em> atau kompetisi lari ke IFP) hanya digunakan sebagai *pemicu*, sementara inti soalnya tetap menuntut nalar akademik tingkat tinggi (HOTS).</li>
                  <li><strong>Ketimpangan Kemampuan (Demotivasi):</strong> Jika kelompok yang pandai terus-menerus memenangkan papan peringkat di IFP, kelompok lain akan menyerah. Siasati dengan memberikan "Poin Karakter" di IFP untuk kerjasama tim atau keberanian mencoba, bukan hanya untuk jawaban benar. Terapkan prinsip <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">pembelajaran berdiferensiasi</a> dalam mendistribusikan soal tantangan.</li>
                  <li><strong>Kondisi Kelas Tidak Terkendali:</strong> Gamifikasi rentan menimbulkan kebisingan karena siswa sangat antusias. Anda wajib mengkombinasikannya dengan <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">strategi pengelolaan kelas</a> yang kuat, misalnya menetapkan aturan: "Tim yang berteriak saat bukan gilirannya, dikurangi 50 poin di layar."</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Checklist Persiapan Guru (Pre-Gamification)</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-yellow-500 mr-2">✓</span> Apakah narasi / "cerita" latar belakang kuis sudah disiapkan?</li>
                  <li><span className="text-yellow-500 mr-2">✓</span> Apakah format papan skor (Leaderboard) digital sudah tertampil di sudut IFP?</li>
                  <li><span className="text-yellow-500 mr-2">✓</span> Apakah audio speaker IFP sudah dinyalakan untuk memberikan <em>sound effect</em> bel atau kembang api?</li>
                  <li><span className="text-yellow-500 mr-2">✓</span> Apakah aset visual (gambar Boss, gembok, timer) sudah beresolusi tinggi?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
                <p>
                  Mengintegrasikan <strong>gamifikasi pembelajaran menggunakan IFP</strong> bukanlah tentang merendahkan standar akademik menjadi sekadar wahana bermain. Sebaliknya, ini adalah tentang merancang psikologi keterlibatan (<em>engagement</em>). Ketika layar raksasa di depan kelas merespons sentuhan murid dengan kilatan poin, animasi pencapaian, dan suara apresiasi instan, Anda sedang memantik motivasi intrinsik mereka. Siswa tidak lagi merasa sedang diuji, melainkan sedang berjuang bersama timnya menyelesaikan misi penting dari guru mereka.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleGamificationIfp;
