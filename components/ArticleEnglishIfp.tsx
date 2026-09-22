import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleEnglishIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleEnglishIfp: React.FC<ArticleEnglishIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran Bahasa Inggris Interaktif Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan lengkap pembelajaran Bahasa Inggris interaktif menggunakan IFP. Temukan 10 aktivitas komunikatif, skenario role-play, vocabulary building, dan differentiation."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-bahasa-inggris-interaktif-menggunakan-ifp');

    const scriptId = 'article-english-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran Bahasa Inggris Interaktif Menggunakan IFP",
          "description": "Panduan lengkap pembelajaran Bahasa Inggris interaktif menggunakan IFP. Temukan 10 aktivitas komunikatif, skenario role-play, vocabulary building, dan differentiation.",
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
            "@id": window.location.origin + "/jurnal-guru/pembelajaran-bahasa-inggris-interaktif-menggunakan-ifp"
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
              "name": "Pembelajaran Bahasa Inggris Interaktif Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-bahasa-inggris-interaktif-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran Bahasa Inggris Interaktif</li>
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
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Bahasa Inggris</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Pembelajaran Bahasa Inggris Interaktif Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-blue-400 pl-4">
                  "Belajar bahasa bukan sekadar menghafal rumus grammar, melainkan menggunakan bahasa itu sendiri untuk berinteraksi, berkomunikasi, dan memaknai dunia. IFP memberikan ruang visual yang memicu siswa untuk berbicara, mendengar, dan bergerak aktif."
                </p>

                <p>
                  Seringkali kelas Bahasa Inggris (English Language Learning) terasa kaku karena siswa hanya terfokus pada buku teks cetak dan lembar kerja (worksheet). Padahal, menguasai bahasa asing sangat membutuhkan stimulasi visual, konteks yang nyata, dan dorongan interaktif. <strong>Pembelajaran Bahasa Inggris interaktif menggunakan IFP</strong> hadir sebagai solusi untuk memecah kebekuan tersebut, di mana layar tidak hanya menjadi media presentasi satu arah, melainkan papan komunikasi partisipatif.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Pengertian Pembelajaran Bahasa Inggris Interaktif Menggunakan IFP</h2>
                <p>
                  Menggunakan IFP (Interactive Flat Panel) dalam kelas Bahasa Inggris berarti memanfaatkan layar sentuh besar sebagai media linguistik terpusat. IFP memungkinkan guru dan siswa berkolaborasi memanipulasi teks bahasa Inggris, mengelompokkan kosakata, mendengarkan percakapan autentik, hingga melakukan <em>role-play</em> (bermain peran) berbasis rangsangan visual di layar utama.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Mengapa Pembelajaran Bahasa Membutuhkan Interaksi?</h2>
                <p>
                  Pemerolehan bahasa (<em>language acquisition</em>) terjadi ketika siswa terlibat dalam komunikasi yang bermakna. Mereka harus menebak makna dari konteks, membuat kesalahan yang aman, dan menerima umpan balik segera. Duduk diam dan menyalin <em>tenses</em> di buku tulis tidak akan memperlancar kecakapan <em>speaking</em> mereka. Siswa butuh <a href="/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpActivities', '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">aktivitas pembelajaran interaktif</a> untuk merangsang produksi bahasa.
                </p>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Peran IFP sebagai Media Visual dan Interaktif</h2>
                <p>
                  Ingatlah, IFP adalah <strong>media pembelajaran Bahasa Inggris dengan IFP</strong>, bukan tujuan akhir. Tujuannya adalah kefasihan, kekayaan <em>vocabulary</em>, dan akurasi <em>grammar</em>. IFP menjembatani hal itu dengan menyediakan visual tajam, audio yang jernih, dan <em>touch-interface</em> yang intuitif, membuat rangsangan berbahasa menjadi <em>comprehensible input</em> (input yang mudah dipahami).
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Vocabulary Learning Menggunakan Gambar dan Objek</h2>
                <p>
                  Dibandingkan mendaftar 20 kata kerja (<em>verbs</em>) beserta terjemahannya, lebih efektif menampilkan 20 gambar aksi bergerak (GIF) di layar. Siswa belajar <em>vocabulary</em> secara langsung dari asosiasi visual, yang akan terekam lebih kuat di memori jangka panjang mereka dibandingkan menghafal teks statis.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Menentukan Informasi dari Audio/Video</h2>
                <p>
                  Gunakan audio dan video native speaker yang diputar dari IFP. Sebelum memutar <em>listening Bahasa Inggris menggunakan IFP</em>, pastikan guru membekali siswa dengan pertanyaan panduan di salah satu sisi layar. Saat audio berjalan, anak bisa maju dan langsung menyentuh jawaban yang benar berdasarkan dialog.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Interactive Grammar Practice</h2>
                <p>
                  Belajar <em>tenses</em> bisa dibuat visual. Tuliskan <em>timeline</em> masa lalu, masa kini, dan masa depan di <em>whiteboard</em> IFP. Berikan siswa <em>flashcards</em> kalimat dalam berbagai <em>tenses</em>. Mereka secara bergiliran maju dan menarik kartu (<em>drag-and-drop</em>) ke garis waktu yang tepat (misalnya <em>"I went to Bali"</em> ditarik ke <em>Past</em>).
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Error Correction pada Kalimat</h2>
                <p>
                  Lakukan revisi kalimat bersama (<em>error correction</em>). Tampilkan kalimat yang mengandung cacat tata bahasa, ejaan, atau pilihan kata (misal: "She don't like apple"). Undang satu siswa ke depan untuk mencoret bagian "don't" dengan pena merah digital, lalu menulis "doesn't" dan menambahkan "s" pada apple. Kelas menjadi saksi visual atas perbaikan struktur tersebut.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Aktivitas Interaktif Bahasa Inggris Menggunakan IFP</h2>
                <p>Berikut adalah sepuluh ide praktik <strong>Bahasa Inggris interaktif dengan Interactive Flat Panel</strong> yang siap Anda gunakan:</p>

                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Aktivitas 1: Vocabulary Match (Drag-and-Drop)</strong>
                    <br/>Tujuan: Mencocokkan kata dengan gambar.
                    <br/>Pelaksanaan: Guru menyiapkan deretan gambar di kiri layar dan label kata di kanan. Siswa (secara bergiliran) maju untuk menyeret <em>word label</em> agar menempel persis di atas <em>picture</em> yang sesuai. Asesmen dilakukan lewat kecepatan dan ketepatan penempatan.
                  </li>
                  <li><strong>Aktivitas 2: Picture Guessing (Menebak Gambar)</strong>
                    <br/>Tujuan: Melatih <em>speaking</em> dan <em>vocabulary</em>.
                    <br/>Pelaksanaan: Tampilkan satu gambar tersembunyi (ditutupi balok-balok hitam digital). Guru menggunakan penghapus digital untuk menghapus pelan-pelan balok tersebut. Siswa yang duduk berlomba berseru <em>"Is it an elephant?"</em> atau <em>"I can see a trunk!"</em>
                  </li>
                  <li><strong>Aktivitas 3: Word Sorting (Kategorisasi Kata)</strong>
                    <br/>Tujuan: Memahami <em>parts of speech</em> (Nouns, Verbs, Adjectives).
                    <br/>Pelaksanaan: IFP dibagi tiga kolom besar. Sekumpulan <em>sticky notes</em> berisi kata-kata bahasa Inggris berserakan di bawah. Siswa maju dan menggeser kata "Beautiful" ke kolom <em>Adjectives</em>, dan "Run" ke <em>Verbs</em>.
                  </li>
                  <li><strong>Aktivitas 4: Sentence Scramble (Menyusun Kalimat Acak)</strong>
                    <br/>Tujuan: Melatih struktur kalimat (Syntax).
                    <br/>Pelaksanaan: Buat satu kalimat panjang namun posisinya diacak menjadi per-kata (misal: <em>the - boy - is - tall - playing - basketball</em>). Siswa menyeret dan mengurutkannya dari kiri ke kanan. Siswa di tempat duduk akan merespon jika urutannya keliru.
                  </li>
                  <li><strong>Aktivitas 5: Pronunciation Challenge</strong>
                    <br/>Tujuan: Melatih pelafalan (<em>pronunciation menggunakan IFP</em>).
                    <br/>Pelaksanaan: Siswa mendengarkan audio model dari penutur asli di IFP (contoh minimal pairs: <em>ship vs sheep</em>). Siswa lalu menekan tombol <em>microphone</em> di aplikasi pembelajaran (atau sekadar di <em>Google Translate</em> web) dan mencoba melafalkannya agar dikenali dengan akurat oleh sistem <em>speech-to-text</em>.
                  </li>
                  <li><strong>Aktivitas 6: Listening & Choose</strong>
                    <br/>Tujuan: Menyimak (<em>listening</em>).
                    <br/>Pelaksanaan: IFP menampilkan 4 gambar rumah yang berbeda. Audio diputar mendeskripsikan satu rumah (<em>"It has two windows and a red roof"</em>). Siswa maju untuk melingkari rumah mana yang dimaksud.
                  </li>
                  <li><strong>Aktivitas 7: Reading Highlight</strong>
                    <br/>Tujuan: Pemahaman bacaan (<em>reading comprehension</em>).
                    <br/>Pelaksanaan: Proyeksikan teks naratif singkat. Minta murid A maju memakai stabilo digital hijau untuk menyorot seluruh kalimat yang menandakan <em>Setting of Place</em>, sementara murid B menyorot warna biru untuk dialog langsung (<em>Direct Speech</em>).
                  </li>
                  <li><strong>Aktivitas 8: Find the Mistake (Pencarian Kesalahan)</strong>
                    <br/>Tujuan: Berlatih akurasi tata bahasa.
                    <br/>Pelaksanaan: Dua siswa maju ke IFP menggunakan fitur <em>Split-Screen</em>. Keduanya diberi teks pendek yang sama namun memiliki 5 kesalahan <em>grammar</em> yang disengaja. Siapa yang lebih cepat melingkari kelima <em>mistakes</em> tersebut dengan benar, dialah yang menang.
                  </li>
                  <li><strong>Aktivitas 9: Speaking Prompt (Pemantik Berbicara)</strong>
                    <br/>Tujuan: <em>Speaking Bahasa Inggris menggunakan IFP</em>.
                    <br/>Pelaksanaan: Layar menampilkan sebuah gambar karikatur kocak atau foto situasi ambigu. Siswa dibagi berpasangan. Guru memberikan <em>timer</em> 2 menit di layar. Setiap pasangan harus membuat cerita pendek secara spontan berdasarkan gambar tersebut, didukung <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran kolaboratif</a>.
                  </li>
                  <li><strong>Aktivitas 10: Role Play (Bermain Peran)</strong>
                    <br/>Tujuan: Menggunakan bahasa dalam situasi nyata (<em>conversation</em>).
                    <br/>Pelaksanaan: Proyeksikan <em>background</em> (latar belakang) stasiun kereta api di IFP. Dua anak maju ke depan (satu sebagai turis, satu sebagai petugas loket). <em>Background</em> visual di IFP memperkuat imersi peran mereka, lengkap dengan <em>timetable</em> (jadwal kereta) yang bisa mereka tunjuk langsung.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Skenario Pembelajaran 2 JP: "Describing People and Things"</h2>
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-blue-200 pb-2">Skenario Praktis 2 JP (70-80 Menit) - Describing People</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Apersepsi & Vocabulary Activation (10 Menit):</strong> Guru memunculkan gambar monster alien aneh di IFP. Guru bertanya, <em>"What does he look like?"</em> Siswa di kursi menjawab spontan. Setiap kata sifat yang disebut (<em>green, tall, three eyes</em>) diketik cepat oleh guru di area kanvas kosong.</li>
                    <li><strong>B. Picture Observation & Matching (15 Menit):</strong> Guru menampilkan empat foto tokoh figur publik. Di bawahnya terdapat kotak kata sifat (<em>curly hair, bald, glasses, mustache</em>). Perwakilan kelas maju mencocokkan kata (<em>drag</em>) ke wajah tokoh yang tepat.</li>
                    <li><strong>C. Sentence Building (15 Menit):</strong> Dengan <em>Split-Screen</em>, dua anak berhadapan dengan kalimat acak di IFP (contoh: <em>has - he - hair - short - black</em>). Mereka berlomba menyusun struktur <em>adjective order</em> yang tepat (<em>He has short black hair</em>).</li>
                    <li><strong>D. Pair/Group Activity (15 Menit):</strong> Tiap pasangan siswa saling mendeskripsikan teman sebangkunya dalam buku catatan masing-masing. Di saat bersamaan, guru menampilkan <em>Sentence Starters</em> (kalimat pemantik) di IFP bagi mereka yang kesulitan (<em>"He/She has...", "He/She is wearing..."</em>).</li>
                    <li><strong>E. Presentation & Role-Play (15 Menit):</strong> Permainan "Guess Who?". Satu murid maju ke depan. Teman-teman di bangku secara bergantian memberikan satu kalimat ciri-ciri fisik teman sekelas lainnya. Murid di depan (dibantu IFP yang menampilkan seluruh foto siswa) harus mengetuk wajah siapa yang sedang dideskripsikan.</li>
                    <li><strong>F. Feedback & Reflection (5 Menit):</strong> Guru memperbaiki <em>pronunciation</em> (pelafalan) secara kolektif dengan memodelkannya, diikuti seluruh kelas, serta menggunakan instrumen <em>sticky notes</em> digital sebagai <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif</a> (menulis satu kata baru yang dikuasai hari ini).</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Strategi Differentiation (Pembelajaran Berdiferensiasi)</h2>
                <p>
                  Setiap anak di kelas bahasa memiliki kesiapan yang berbeda-beda. Manfaatkan IFP untuk menerapkan prinsip <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran berdiferensiasi</a>. Bagi <strong>siswa pemula</strong>, biarkan <em>word bank</em> (kamus visual/kumpulan kosakata bantuan) selalu tampil di sudut layar sebagai alat <em>scaffolding</em>. Bagi <strong>siswa berkembang</strong>, hilangkan bantuan kata dan dorong <em>sentence expansion</em> (meluaskan kalimat dengan keterangan tambahan). Sedangkan bagi <strong>siswa yang lebih mahir</strong>, gunakan IFP hanya menampilkan gambar abstrak tanpa kata kunci apa pun, menantang mereka melakukan <em>spontaneous speaking</em>.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Memastikan Partisipasi Semua Siswa (Tidak Monopoli)</h2>
                <p>
                  Satu kerawanan besar IFP adalah ketika satu siswa asyik bermain di layar, 30 siswa lainnya melamun. Guru harus mengaplikasikan <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">strategi pengelolaan kelas menggunakan IFP</a>. Terapkan strategi rotasi (<em>touch rotation</em>) dan aturan <em>"speak before you touch"</em> (ucapkan dulu kalimat dalam bahasa Inggris, baru boleh menyentuh layar). Selingi juga dengan metode <em>Think-Pair-Share</em>, di mana audiens berdiskusi lebih dulu sebelum temannya mengeksekusi jawaban di layar.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Penggunaan Gambar, Ikon, Anotasi, dan Kanvas</h2>
                <p>
                  Kanvas kosong IFP sebaiknya jangan dibiarkan kosong memutih. Hiasi dengan warna latar, pasang ikon senyum atau bintang, gunakan pulpen penanda tebal, sematkan gambar langsung dari <em>browser</em>. <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Pembelajaran mendalam</a> membutuhkan jangkar emosional, dan elemen estetik ini akan membantu anak mengasosiasikan belajar bahasa Inggris dengan kegiatan yang tidak kaku.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Feedback Langsung dan Peer Feedback Sederhana</h2>
                <p>
                  Bahasa menuntut pembetulan organik. Ketimbang berkata <em>"You are wrong"</em>, gunakan pena <em>highlight</em> warna kuning pada kata benda tunggal yang keliru (seharusnya jamak), dan ajak anak lain (<em>peer feedback</em>) menyuarakan versi benarnya. Setelah itu, jika ada waktu luang, bekali akhir pertemuan dengan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-700 hover:underline font-bold">game edukasi IFP</a> sederhana (misalnya kuis Kahoot! atau kuis internal panel) untuk mencairkan suasana.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesalahan Umum Guru Ketika Menggunakan IFP untuk Bahasa Inggris</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Guru Terlalu Dominan:</strong> Guru yang terus menerus menyentuh, membuka halaman slide, dan mengisi lembar jawaban interaktif, sementara muridnya dipaksa hanya melakukan <em>choral drill</em> (membeo bersama-sama dari tempat duduk).</li>
                  <li><strong>Teks yang Terlalu Rapat:</strong> Menyalin utuh satu paragraf bacaan (<em>Reading</em>) ke dalam satu halaman IFP, membuat mata cepat lelah dan kehilangan titik fokus interaktif.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Checklist Persiapan Guru Bahasa Inggris</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-blue-500 mr-2">✓</span> Apakah <em>speaker</em> internal IFP menyala dengan volume yang baik dan jelas (untuk sesi <em>Listening</em>)?</li>
                  <li><span className="text-blue-500 mr-2">✓</span> Apakah aset gambar dan kosa kata di IFP mudah dimanipulasi/digeser (<em>draggable</em>)?</li>
                  <li><span className="text-blue-500 mr-2">✓</span> Apakah saya sudah memastikan aktivitas ini memancing siswa untuk melakukan <em>speaking practice</em> secara berimbang?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Contoh Penerapan Khusus pada SD dan SMP</h2>
                <p>
                  Pada jenjang SD (<em>Primary</em>), guru lebih sering memfokuskan IFP pada pergerakan benda fisik, lagu-lagu beranimasi (<em>TPR/Total Physical Response</em>), serta warna-warni yang mencolok. Sementara pada jenjang SMP (<em>Secondary</em>), guru dapat mulai bergeser pada bedah teks sederhana, <em>jumbled sentences</em>, teks deskriptif tokoh idola, dan latihan mengemukakan pendapat pendek di area komentar digital layar <em>board</em> IFP.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Penutup</h2>
                <p>
                  Kehadiran IFP dalam kurikulum pengajaran bahasa bukan demi menggantikan interaksi lisan, melainkan menyokong <em>language acquisition</em> dengan jembatan visual yang kukuh. <strong>Pembelajaran Bahasa Inggris interaktif menggunakan IFP</strong> terbukti memfasilitasi anak untuk lebih berani mencoba berucap, karena fokus mereka kini dibagi dari rasa malu ditatap guru, menuju tantangan mekanis di atas layar. Berikan mereka spidol digitalnya, dorong mereka merangkai kata, dan saksikan perbendaharaan kalimat mereka mekar seketika.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleEnglishIfp;
