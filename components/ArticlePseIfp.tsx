import React, { useEffect } from 'react';

interface ArticlePseIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticlePseIfp: React.FC<ArticlePseIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran Sosial Emosional (PSE) Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan lengkap implementasi Pembelajaran Sosial Emosional (PSE) menggunakan IFP. Fasilitasi kesadaran diri, empati, dan kolaborasi siswa melalui media interaktif."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
        canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp');

    const idUrl = window.location.origin + '/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp';
    const enUrl = window.location.origin + '/en/journal/social-emotional-learning-using-interactive-flat-panel';

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

    const scriptId = 'article-pse-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran Sosial Emosional Menggunakan IFP",
          "description": "Panduan lengkap implementasi Pembelajaran Sosial Emosional (PSE) menggunakan IFP. Fasilitasi kesadaran diri, empati, dan kolaborasi siswa melalui media interaktif.",
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
            "@id": window.location.origin + "/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp"
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
              "name": "Pembelajaran Sosial Emosional Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp"
            }
          ]
        }
      ]);
      document.head.appendChild(script);
    }

        return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      if (canonical) canonical.remove();
      if (hrefLangId) hrefLangId.remove();
      if (hrefLangEn) hrefLangEn.remove();
      if (hrefLangDef) hrefLangDef.remove();
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
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran Sosial Emosional</li>
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
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Metodologi Interaktif</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Pembelajaran Sosial Emosional (PSE) Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-pink-400 pl-4">
                  "Pendidikan bukan sekadar mengisi ruang kognitif, melainkan juga menavigasi labirin emosi manusia. Seorang anak tidak akan bisa fokus pada rumus matematika jika ia sedang terbebani oleh rasa cemas atau merasa tidak diterima. Melalui kanvas interaktif, kita tidak hanya mengajar, kita membangun empati, memvalidasi perasaan, dan menumbuhkan karakter yang tangguh."
                </p>

                <p>
                  Di era digital pasca-pandemi, krisis kesehatan mental dan isolasi sosial pada siswa menjadi tantangan terbesar bagi pendidik. Pembelajaran Sosial Emosional atau PSE (<em>Social Emotional Learning</em>) bukan lagi sekadar "materi sisipan", melainkan fondasi bagi keberhasilan akademik dan kehidupan. Sayangnya, PSE sering kali hanya berakhir pada ceramah moralistik satu arah. <strong>Pembelajaran Sosial Emosional menggunakan IFP</strong> (<em>Interactive Flat Panel</em>) mengubah paradigma ini dengan memvisualisasikan perasaan, menyediakan medium kolaborasi yang aman, dan membangun ruang kelas yang responsif secara emosional.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5 Kompetensi Inti PSE di Layar Interaktif</h2>
                <p>
                  Berdasarkan kerangka CASEL (<em>Collaborative for Academic, Social, and Emotional Learning</em>), terdapat lima kompetensi inti yang harus dikembangkan. IFP dapat memfasilitasi kelimanya secara terintegrasi:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Kesadaran Diri (Self-Awareness):</strong> Mengenali emosi dan nilai diri. IFP digunakan untuk <em>Emotional Check-In</em> harian, di mana siswa memvisualisasikan perasaan mereka menggunakan roda emosi digital (<em>Wheel of Emotions</em>) yang interaktif.</li>
                  <li><strong>Manajemen Diri (Self-Management):</strong> Mengelola stres dan mencapai tujuan. Fitur <em>timer</em>, musik relaksasi latar belakang (<em>mindfulness audio</em>), dan papan tujuan kelas di IFP melatih siswa untuk mengatur regulasi diri dan fokus.</li>
                  <li><strong>Kesadaran Sosial (Social Awareness):</strong> Membangun empati. IFP menampilkan studi kasus video atau gambar (<em>Empathy Mapping</em>) agar siswa bisa membongkar persepsi dan berdiskusi tentang perspektif orang lain.</li>
                  <li><strong>Keterampilan Berelasi (Relationship Skills):</strong> Berkomunikasi dan bekerja sama. Fitur multitouch IFP memfasilitasi <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran kolaboratif</a> yang setara, di mana siswa belajar negosiasi ruang dan giliran saat menggunakan papan tulis bersama.</li>
                  <li><strong>Pengambilan Keputusan yang Bertanggung Jawab (Responsible Decision-Making):</strong> Memecahkan masalah konstruktif. IFP difungsikan sebagai "Papan Solusi" (<em>Solution Board</em>) untuk mengevaluasi konsekuensi dari berbagai pilihan tindakan dalam suatu konflik.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Mengapa PSE Membutuhkan Dukungan Visual IFP?</h2>
                <p>
                  Bagi anak-anak dan remaja, mengartikulasikan emosi yang abstrak dengan kata-kata adalah tugas kognitif yang berat. Emosi itu transien dan tidak berwujud. IFP membantu melakukan "objektifikasi emosi" (<em>emotional objectification</em>). Dengan menempelkan <em>sticky note</em> digital bergambar "awan badai" (marah) atau "matahari" (senang) di IFP, siswa memisahkan emosi tersebut dari identitas dirinya. Mereka menyadari bahwa <em>"saya sedang merasakan marah"</em>, bukan <em>"saya adalah pemarah"</em>. Ini adalah langkah krusial dalam <a href="/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDiagnosticIfp', '/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen diagnostik emosional</a>.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Aktivitas Pembelajaran Sosial Emosional (PSE) Interaktif</h2>
                <p>Berikut adalah 10 aktivitas praktis yang dapat langsung diterapkan guru menggunakan IFP untuk memperkuat kultur sosial emosional di ruang kelas:</p>

                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. Interactive Emotional Check-In (Kesadaran Diri)</strong>
                    <br/>Di pagi hari, IFP menampilkan papan besar berisi 4 kuadran "Mood Meter" (Merah = Marah/Tegang, Biru = Sedih/Lelah, Hijau = Tenang, Kuning = Semangat). Setiap siswa maju dan menggeser avatar atau ikon namanya ke kuadran yang sesuai dengan perasaan mereka pagi itu.
                  </li>
                  <li><strong>2. Mindful Breathing Canvas (Manajemen Diri)</strong>
                    <br/>Sebelum ujian atau setelah jam istirahat yang riuh, guru memutar animasi lingkaran yang membesar (Tarik Napas) dan mengecil (Hembuskan) di IFP, diiringi musik lofi. Seluruh kelas melakukan teknik pernapasan STOP (<em>Stop, Take a breath, Observe, Proceed</em>) dengan panduan visual layar.
                  </li>
                  <li><strong>3. The Empathy Map (Kesadaran Sosial)</strong>
                    <br/>Guru menampilkan foto sebuah situasi sosial (misal: seorang anak yang duduk sendirian di kantin). Menggunakan fitur anotasi <em>split-screen</em>, kelompok siswa bergantian maju untuk menulis: "Apa yang mungkin ia <strong>rasakan</strong>?", "Apa yang mungkin ia <strong>pikirkan</strong>?", dan "Apa yang mungkin ia <strong>butuhkan</strong>?".
                  </li>
                  <li><strong>4. Papan Apresiasi / Gratitude Board (Keterampilan Berelasi)</strong>
                    <br/>Di akhir hari Jumat, IFP diubah menjadi "Dinding Terima Kasih". Siswa mengirimkan pesan apresiasi singkat dari tablet/laptop mereka menggunakan fitur <em>screencast/polling</em> ke IFP, misalnya: <em>"Terima kasih Budi sudah meminjamkan pensil,"</em> atau <em>"Terima kasih Bu Guru atas bantuan matematikanya."</em>
                  </li>
                  <li><strong>5. Pohon Pengambilan Keputusan (Responsible Decision-Making)</strong>
                    <br/>Ketika ada konflik kelas, guru menggambar sebuah pohon di IFP. Akar pohon adalah "Penyebab Konflik", Batang adalah "Masalah Utama", dan Cabang-cabangnya adalah "Pilihan Solusi". Daun-daunnya adalah "Konsekuensi Positif/Negatif" dari setiap solusi yang diusulkan dan dicoret oleh siswa secara kolaboratif.
                  </li>
                  <li><strong>6. "Temperature Check" Selama Pelajaran (Manajemen Diri)</strong>
                    <br/>Di tengah pelajaran yang sulit, guru menjeda sejenak dan memunculkan widget <em>polling</em> (Jempol ke atas, Jempol ke samping, Jempol ke bawah). Ini membantu guru memahami beban kognitif dan frustrasi siswa secara <em>real-time</em>, memastikan <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran berdiferensiasi</a> berjalan efektif tanpa menekan mental anak.
                  </li>
                  <li><strong>7. The "Cool Down" Corner Digital (Manajemen Diri)</strong>
                    <br/>Bagi siswa yang mengalami regulasi emosi yang buruk (tantrum/overwhelmed), IFP dapat disetel ke "Mode Tenang" (<em>Zen Mode</em>) di pojok ruangan. Siswa dapat menggunakan fitur kuas cat air digital untuk mencoret-coret dengan warna lembut, melepaskan ketegangan tanpa mengganggu siswa lain.
                  </li>
                  <li><strong>8. Role-Play Konflik Interaktif (Keterampilan Berelasi)</strong>
                    <br/>Dua siswa maju ke depan IFP yang menampilkan komik strip kosong (tanpa dialog). Mereka ditugaskan melakukan <em>role-play</em> resolusi konflik dan menuliskan dialog "Pernyataan-I" (<em>I-Statement</em>, contoh: "Saya merasa sedih ketika kamu...") langsung ke dalam gelembung percakapan.
                  </li>
                  <li><strong>9. Visualisasi Tujuan Bersama / Class Charter (Kesadaran Sosial)</strong>
                    <br/>Di awal semester, kelas menyusun "Kesepakatan Kelas". Dokumen ini tidak ditulis di karton usang, melainkan didesain secara visual di IFP dengan tanda tangan digital seluruh siswa, dan dijadikan <em>wallpaper/screensaver</em> IFP sebagai pengingat permanen akan komitmen sosial mereka.
                  </li>
                  <li><strong>10. Jurnal Refleksi Emoji (Kesadaran Diri)</strong>
                    <br/>Sebagai bagian dari <a href="/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleReflectionIfp', '/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">refleksi pembelajaran</a> penutup, siswa maju dan membubuhkan stempel digital (<em>stamp</em>) berupa emoji (bingung, tercerahkan, terkejut) pada bagian materi yang dirasa paling membekas di layar.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Skenario Pembelajaran PSE 2 JP: "Mengelola Frustrasi saat Gagal"</h2>
                <div className="bg-pink-50/50 p-6 rounded-2xl border border-pink-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-pink-200 pb-2">Skenario Praktis 2 JP (70 Menit) - Integrasi PSE (Tema: Resiliensi/Growth Mindset)</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Pembukaan & Check-In (10 Menit):</strong> Guru membuka IFP dengan "Roda Emosi". Siswa melakukan <em>check-in</em>. Guru melihat ada tren "Cemas/Tegang" yang tinggi karena kelas akan menghadapi ujian matematika besok. Guru memvalidasi emosi tersebut secara terbuka.</li>
                    <li><strong>B. Latihan Mindfulness (5 Menit):</strong> Merespons ketegangan, guru memutar animasi <em>Box Breathing</em> di IFP (Tarik 4 detik, Tahan 4 detik, Hembus 4 detik, Tahan 4 detik). Ruangan diredupkan.</li>
                    <li><strong>C. Diskusi Interaktif "Growth Mindset" (20 Menit):</strong> Guru menampilkan dua siluet kepala (<em>Fixed Mindset</em> vs <em>Growth Mindset</em>) di IFP menggunakan fitur <em>Split-Screen</em>. Guru menyebar puluhan frasa (misal: "Saya menyerah", "Saya akan coba cara lain"). Siswa secara bergiliran maju dan men-<em>drag-and-drop</em> frasa tersebut ke siluet yang tepat.</li>
                    <li><strong>D. Proyek Kolaboratif "Surat untuk Diri yang Gagal" (25 Menit):</strong> Dalam kelompok, siswa merancang kartu motivasi digital. Mereka mendiskusikan apa yang harus dikatakan kepada diri sendiri saat mengalami kegagalan. Desain kartu digambar langsung di kanvas IFP secara bergantian.</li>
                    <li><strong>E. Penutupan & Refleksi Apresiasi (10 Menit):</strong> Setiap kelompok mempresentasikan karya mereka. Guru menggunakan fitur "Confetti/Tepuk Tangan" digital di IFP. Kelas ditutup dengan setiap anak membubuhkan stempel emoji senyum di layar sebelum keluar kelas.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesalahan Umum Guru dalam Mengelola PSE</h2>
                <p>
                  Kesalahan paling fatal adalah memperlakukan PSE sebagai "pelajaran tambahan" yang diujikan dengan soal pilihan ganda, atau memaksa siswa yang belum siap untuk terbuka secara emosional. PSE harus diintegrasikan dengan mulus ke dalam <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">rutinitas manajemen kelas</a>. Jangan pernah menggunakan data <em>mood meter</em> publik di IFP untuk mempermalukan siswa (misal: "Kenapa kamu sedih terus Budi?"). Data tersebut adalah sarana observasi guru untuk pendekatan personal yang lebih empatik.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Checklist Kesiapan Guru (Pre-PSE)</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-pink-500 mr-2">✓</span> Apakah rutinitas "Check-In" emosional tersedia dan konsisten dilakukan setiap hari?</li>
                  <li><span className="text-pink-500 mr-2">✓</span> Apakah lingkungan fisik kelas mendukung keselamatan psikologis (<em>psychological safety</em>) saat siswa berbagi emosi?</li>
                  <li><span className="text-pink-500 mr-2">✓</span> Apakah penggunaan IFP melibatkan interaksi antar-siswa, bukan sekadar menonton video edukasi moral?</li>
                  <li><span className="text-pink-500 mr-2">✓</span> Apakah guru sudah mengelola (regulasi) emosinya sendiri sebelum memandu regulasi emosi siswa?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
                <p>
                  <strong>Pembelajaran Sosial Emosional menggunakan IFP</strong> membuktikan bahwa teknologi layar cerdas tidak membuat siswa teralienasi; sebaliknya, teknologi justru dapat menjadi katalisator empati. Dengan mengubah perasaan abstrak menjadi elemen visual yang dapat disentuh, digeser, dan dikelompokkan, IFP memfasilitasi dialog emosional yang sehat. Ketika guru memberikan ruang bagi kesadaran diri dan keterampilan berelasi di layar utama kelas, mereka mengirimkan pesan pedagogis yang paling fundamental: bahwa sebelum kita mengasah pikiran, kita harus merawat kemanusiaan para siswa.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePseIfp;
