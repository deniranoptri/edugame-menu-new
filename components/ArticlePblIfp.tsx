import React, { useEffect } from 'react';

interface ArticlePblIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticlePblIfp: React.FC<ArticlePblIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran Berbasis Masalah (PBL) Menggunakan IFP di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan komprehensif memfasilitasi Pembelajaran Berbasis Masalah (PBL) menggunakan Interactive Flat Panel (IFP), dari identifikasi masalah hingga presentasi solusi."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
        canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp');

    const idUrl = window.location.origin + '/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp';
    const enUrl = window.location.origin + '/en/journal/problem-based-learning-using-interactive-flat-panel';

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
    const scriptId = 'article-pbl-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran Berbasis Masalah (PBL) Menggunakan IFP di Kelas",
          "description": "Panduan komprehensif memfasilitasi Pembelajaran Berbasis Masalah (PBL) menggunakan Interactive Flat Panel (IFP), dari identifikasi masalah hingga presentasi solusi.",
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
              "name": "Pembelajaran Berbasis Masalah dengan IFP",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran Berbasis Masalah dengan IFP</li>
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
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Model Pembelajaran</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Pembelajaran Berbasis Masalah (PBL) Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-orange-500 pl-4">
                "Masalah adalah mesin penggerak rasa ingin tahu. Saat masalah tersebut divisualisasikan, dipecah, dan dianalisis secara kolaboratif di layar raksasa Interactive Flat Panel, ruang kelas berubah dari tempat menghafal fakta menjadi laboratorium pemecahan masalah dunia nyata."
              </p>

              <p>
                Pendidikan abad 21 menuntut siswa untuk memiliki keterampilan <em>problem-solving</em> yang tajam. Untuk mencapai hal ini, metode ceramah satu arah sudah tidak memadai. Di sinilah model Problem Based Learning (PBL) mengambil peran sentral. Namun, menerapkan PBL membutuhkan manajemen informasi, kolaborasi, dan visualisasi yang kuat. Memadukan pedagogi <strong>problem based learning dengan IFP</strong> (Interactive Flat Panel) menawarkan solusi konkret di mana teknologi berfungsi sebagai fasilitator pemikiran kritis dan investigasi.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu Problem Based Learning (PBL)?</h2>
              <p>
                Problem Based Learning (PBL) adalah model pembelajaran yang berpusat pada siswa (<em>student-centered</em>) di mana siswa belajar tentang suatu subjek melalui pengalaman memecahkan masalah yang terbuka (<em>open-ended</em>) dan memicu pemikiran kritis. Dalam PBL, siswa ditantang untuk "belajar bagaimana cara belajar", bekerja dalam kelompok untuk mencari solusi dari masalah dunia nyata.
              </p>
              
              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Karakteristik Utama PBL</h2>
              <p>
                PBL memiliki karakteristik spesifik yang membedakannya dari pembelajaran konvensional:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Masalah adalah Titik Awal:</strong> Pembelajaran dimulai dari penyajian masalah yang tidak terstruktur atau kompleks, bukan dari penyampaian teori.</li>
                <li><strong>Berpusat pada Siswa:</strong> Siswa memegang kendali atas penyelidikan mereka. Guru bertindak sebagai fasilitator (<em>guide on the side</em>).</li>
                <li><strong>Kolaborasi:</strong> Siswa bekerja dalam kelompok kecil untuk melakukan curah pendapat, berbagi informasi, dan mengembangkan solusi.</li>
                <li><strong>Pencarian Informasi Mandiri:</strong> Siswa didorong untuk mencari informasi lintas disiplin ilmu untuk menyelesaikan masalah.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Perbedaan PBL dengan PjBL (Project Based Learning)</h2>
              <p>
                Seringkali terjadi kerancuan antara PBL (Problem Based Learning) dan <a href="/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articlePjblIfp', '/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">PjBL (Project Based Learning)</a>. Penjelasannya secara sederhana adalah:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-4 shadow-sm">
                <ul className="list-none space-y-4">
                  <li><strong className="text-orange-700">PBL (Problem Based):</strong> Berfokus pada <strong>proses</strong> kognitif untuk menemukan solusi. Alurnya: <em>Masalah → investigasi → analisis → solusi (sering berupa rekomendasi/keputusan)</em>.</li>
                  <li><strong className="text-blue-700">PjBL (Project Based):</strong> Berfokus pada pembuatan <strong>produk akhir</strong>. Alurnya: <em>Pertanyaan/proyek → perencanaan → pengerjaan proyek → produk/karya nyata → presentasi/evaluasi</em>.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Mengapa IFP Dapat Mendukung PBL?</h2>
              <p>
                PBL bukan sekadar menampilkan teks masalah di layar atau memindahkan LKS (Lembar Kerja Siswa) ke format digital. PBL membutuhkan ruang untuk investigasi, membandingkan data, dan memetakan pemikiran (<em>mind mapping</em>). IFP, dengan kemampuannya memfasilitasi kanvas tanpa batas (<em>infinite canvas</em>), interaksi multi-sentuh, dan pencarian web instan, menjadikan <strong>pembelajaran berbasis masalah menggunakan IFP</strong> sangat dinamis. IFP memvisualisasikan apa yang terjadi di dalam kepala siswa (metakognisi) ke dalam ruang publik kelas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. IFP Sebagai Ruang Eksplorasi Masalah (Bukan Tujuan)</h2>
              <p>
                Penting untuk ditegaskan: IFP hanyalah <em>media</em>. Menekan tombol layar secara canggih atau memainkan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-700 hover:underline font-bold">game edukasi interaktif</a> di panel sentuh bukanlah PBL jika tidak ada masalah otentik yang diselesaikan. Teknologi mendukung pedagogi, bukan sebaliknya. Tujuan akhirnya adalah merangsang daya nalar siswa.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Menampilkan Masalah Kontekstual Melalui IFP</h2>
              <p>
                Langkah pertama PBL adalah Orientasi Siswa pada Masalah. Jangan sekadar mendiktekan masalah. Gunakan IFP untuk menayangkan video pendek, kliping berita (<em>screencast</em> artikel berita online), atau data statistik interaktif yang memicu konflik kognitif (<em>cognitive dissonance</em>) di pikiran siswa. Visual resolusi tinggi dan audio yang kuat pada IFP akan membangun urgensi dari masalah tersebut.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Brainstorming dan Pengumpulan Ide Siswa</h2>
              <p>
                Setelah masalah dipahami, kelas mulai mengidentifikasi apa yang sudah mereka ketahui dan apa yang perlu mereka ketahui. Gunakan mode <em>whiteboard</em> IFP. Bagikan <em>sticky notes</em> digital ke seluruh perangkat siswa agar mereka bisa "melemparkan" ide langsung ke layar IFP, yang kemudian akan ditata bersama oleh guru atau perwakilan siswa.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Membuat Peta Masalah (Concept Map)</h2>
              <p>
                Gunakan alat diagram di IFP untuk membangun <em>concept map</em>. Memecah masalah besar menjadi bagian-bagian kecil yang dapat dikelola (<em>manageable chunks</em>) sangat penting dalam PBL. Siswa dapat menarik garis, menghubungkan sebab dan akibat, serta menganotasi faktor-faktor krusial menggunakan <em>stylus pen</em>.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Mengelompokkan Informasi Menggunakan Touch</h2>
              <p>
                Siswa mengelompokkan data (kategorisasi) melalui manipulasi langsung di layar sentuh (<em>drag and drop</em>). Kemampuan fisik (kinestetik) untuk "memindahkan ide" membantu mengonkretkan konsep yang abstrak, terutama saat <a href="/jurnal-guru/pembelajaran-inklusif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleInclusiveIfp', '/jurnal-guru/pembelajaran-inklusif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">memfasilitasi siswa dengan berbagai gaya belajar</a>.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. Analisis Data, Gambar, dan Video</h2>
              <p>
                Selama fase Investigasi, siswa perlu menganalisis bukti. Gunakan fitur layar terbelah (<em>split-screen</em>) di IFP. Sisi kiri menampilkan gambar mikroskopis (untuk Biologi) atau grafik saham (untuk Ekonomi), sedangkan sisi kanan digunakan untuk mencatat hasil observasi.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">11. Kolaborasi Kelompok Menggunakan IFP</h2>
              <p>
                <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Pembelajaran kolaboratif</a> adalah nyawa dari PBL. IFP yang memiliki fitur multi-sentuh (<em>multi-touch</em>) memungkinkan 3 hingga 4 siswa berdiri bersama di depan panel, saling berdiskusi, mencoret, dan memformulasikan hipotesis secara simultan tanpa harus bergantian memakai <em>mouse</em>.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">12. Presentasi Solusi Menggunakan IFP</h2>
              <p>
                Siswa mempresentasikan temuan dan solusi mereka. IFP tidak hanya menayangkan <em>slideshow</em> statis; siswa dapat melakukan <em>live annotation</em> (coretan langsung) pada data yang mereka presentasikan untuk menjawab pertanyaan audiens.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">13. Peer Feedback (Umpan Balik Teman Sejawat)</h2>
              <p>
                Saat satu kelompok melakukan presentasi, kelompok lain memberikan umpan balik (<em>feedback</em>). Menggunakan sistem <em>polling</em> atau anotasi bersama, audiens bisa memberikan rating atau pertanyaan anonim yang langsung bermunculan di IFP.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">14. Asesmen Proses dan Hasil Pemecahan Masalah</h2>
              <p>
                PBL menuntut <a href="/jurnal-guru/asesmen-autentik-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAuthenticAssessmentIfp', '/jurnal-guru/asesmen-autentik-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen autentik</a>. Guru menilai bukan hanya presentasi akhir, melainkan jejak digital dari <em>mind map</em> awal, kedalaman riset di <em>browser</em> IFP, hingga kemampuan siswa menanggapi kritik. Semua <em>screenshot</em> papan tulis (<em>whiteboard</em>) dari awal hingga akhir pertemuan dapat disimpan sebagai bukti belajar (portofolio kognitif).
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">15. Peran Guru Sebagai Fasilitator</h2>
              <p>
                Guru bukan pemberi jawaban, melainkan penanya yang tangguh. Saat kelompok buntu (<em>stuck</em>) dalam memecahkan masalah di IFP, guru tidak langsung menyelesaikan persamaannya. Guru menggunakan <em>pointer</em> atau memberikan anotasi "Tanda Tanya" pada bagian data yang janggal, lalu bertanya, "Apakah kalian sudah memeriksa ulang premis ini?"
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">16. Cara Menjaga Agar IFP Tidak Mendominasi Pembelajaran</h2>
              <p>
                IFP sangat atraktif, sehingga ada risiko layar tersebut menyedot seluruh perhatian (<em>screen dominance</em>). Biasakan konsep "Layar Gelap" (<em>screen shade</em> atau matikan sentuhan). Jika tiba waktunya bagi siswa untuk berpikir secara intim dalam kelompok tanpa distraksi visual, bekukan (<em>freeze</em>) layar IFP dan minta mereka fokus pada diskusi meja.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">17. Contoh Penerapan: IPA (Sains)</h2>
              <p>
                <strong>Masalah:</strong> Ratusan ikan mati mendadak di sungai dekat sekolah.<br/>
                <strong>Aktivitas IFP:</strong> Guru memutar video berita lokal tentang kematian ikan. Siswa menggunakan aplikasi pemetaan satelit di IFP untuk melacak sumber anak sungai dan menemukan pabrik atau area pertanian terdekat. Mereka menarik garis, membuat dugaan awal (hipotesis pencemaran limbah industri vs pestisida pertanian), dan mencari parameter baku mutu air.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">18. Contoh Penerapan: Matematika</h2>
              <p>
                <strong>Masalah:</strong> Sekolah ingin merombak tata letak tempat parkir yang selalu macet setiap jam pulang sekolah.<br/>
                <strong>Aktivitas IFP:</strong> Siswa menayangkan denah parkir (berbentuk grid/vektor) di layar IFP. Mereka mensimulasikan arus kendaraan dengan menggambar berbagai rute panah warna-warni, menggunakan rumus geometri, luas area, dan skala, lalu berdebat untuk menentukan rute optimal yang mencegah <em>bottleneck</em>.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">19. Contoh Penerapan: Bahasa Indonesia</h2>
              <p>
                <strong>Masalah:</strong> Maraknya hoaks perundungan (<em>cyberbullying</em>) yang memicu kepanikan siswa di sekolah.<br/>
                <strong>Aktivitas IFP:</strong> Siswa membedah berbagai tangkapan layar chat dan artikel di IFP. Fokusnya adalah pada dekonstruksi literasi dan bahasa: mengenali kalimat provokatif, majas ironi, dan logika yang cacat dalam teks hoaks tersebut, kemudian menyusun prosedur mitigasi.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">20. Contoh Penerapan: IPS</h2>
              <p>
                <strong>Masalah:</strong> Tingginya angka urbanisasi yang menyebabkan kumuhnya tata kota di suatu daerah.<br/>
                <strong>Aktivitas IFP:</strong> Menggunakan fitur <em>timeline</em> (garis waktu) interaktif dan data demografi, siswa melacak akar historis dan ekonomi dari perpindahan penduduk. Mereka mensimulasikan dampak kebijakan publik dengan menggeser variabel-variabel sosio-ekonomi (lapangan kerja vs perumahan murah) pada diagram grafik di IFP.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">21. Skenario Pembelajaran 2 JP (Masalah Kontekstual Ekologi)</h2>
              <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700">
                <h3 className="font-bold text-lg text-[#0C1A69] border-b border-orange-200 pb-2">Topik: Krisis Penumpukan Sampah Plastik di Kantin (SMP)</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>0-10 Menit (Orientasi Siswa pada Masalah):</strong> Guru menampilkan diagram lingkaran dari hasil asesmen diagnostik mengenai kebiasaan membuang sampah siswa, disertai satu foto nyata gerobak sampah kantin yang meluap pada jam 13.00. Guru bertanya: <em>"Apa yang salah di sini, dan mengapa sistem daur ulang sekolah gagal?"</em></li>
                  <li><strong>10-25 Menit (Mengorganisasikan Siswa):</strong> Siswa dibagi kelompok. Masing-masing menggunakan fitur <em>mind map</em> di IFP (secara bergantian) untuk memetakan aktor-aktor yang terlibat (siswa, pedagang, petugas kebersihan, jenis kemasan).</li>
                  <li><strong>25-50 Menit (Membimbing Penyelidikan):</strong> Siswa mencari data pendukung (<em>googling</em> harga kemasan ramah lingkungan vs plastik) melalui mode <em>split-screen</em> IFP. Jika kelompok kesulitan merangkum, guru <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-600 font-bold hover:underline">menilai formatif</a> proses investigasi mereka.</li>
                  <li><strong>50-70 Menit (Mengembangkan & Menyajikan Solusi):</strong> Setiap kelompok maju mempresentasikan rekomendasi solusi mereka. Kelompok A merekomendasikan "denda", Kelompok B merekomendasikan "insentif voucher". Mereka berargumen sambil merujuk data yang digambar langsung di layar sentuh IFP.</li>
                  <li><strong>70-80 Menit (Analisis & Evaluasi):</strong> Kelas mencapai konsensus solusi mana yang paling realistis. Melalui <a href="/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleReflectionIfp', '/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas'); }} className="text-blue-600 font-bold hover:underline">refleksi pembelajaran</a>, guru menanyakan, <em>"Apa satu hal yang paling sulit saat menyepakati solusi kelompok tadi?"</em></li>
                </ul>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">22. Hubungan PBL dengan Taksonomi Pembelajaran Mendalam</h2>
              <p>
                PBL selaras dengan arsitektur <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran mendalam (deep learning)</a>. Siswa <strong>Memahami</strong> masalah dari data awal, <strong>Mengaplikasikan</strong> riset mereka untuk merancang solusi, dan <strong>Merefleksi</strong> apakah solusi mereka layak (<em>feasible</em>) diterapkan di dunia nyata. 
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">23. Kesalahan Umum Menggunakan IFP dalam PBL</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Masalah Terlalu Tertutup:</strong> Guru menampilkan masalah berupa "2x + 5 = 15, carilah X" di IFP. Ini bukan PBL; ini latihan soal biasa. Masalah PBL haruslah <em>open-ended</em> (memiliki banyak kemungkinan solusi dan cara penyelesaian).</li>
                <li><strong>Aktivitas Terpusat pada Guru:</strong> Guru yang terus-menerus memegang kendali atas IFP (mencari informasi sendiri, menuliskan rangkuman sendiri) merampas otonomi siswa (<em>student agency</em>). Biarkan siswa yang menguasai panel sentuh selama fase <em>brainstorming</em> dan presentasi.</li>
                <li><strong>Gagal Mengaitkan <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Diferensiasi</a>:</strong> Memaksa semua kelompok memiliki <em>output</em> solusi yang sama, padahal potensi pemecahan masalah tiap kelompok berbeda.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">24. Checklist Praktis Guru (Sebelum Sesi PBL)</h2>
              <ul className="list-none space-y-2 font-medium text-gray-600">
                <li><span className="text-orange-500 mr-2">✓</span> Apakah masalah yang akan saya tayangkan di IFP relevan dengan kehidupan nyata siswa?</li>
                <li><span className="text-orange-500 mr-2">✓</span> Apakah saya sudah menyiapkan ruang <em>whiteboard</em> digital yang cukup luas untuk aktivitas curah pendapat?</li>
                <li><span className="text-orange-500 mr-2">✓</span> Apakah saya telah memikirkan bagaimana mengatur alur giliran siswa menyentuh dan menggunakan IFP agar tidak terjadi kekacauan (<em>chaos</em>) di depan kelas?</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">25. Kesimpulan</h2>
              <p className="text-xl font-bold text-center text-orange-800 bg-orange-50 p-6 rounded-2xl border border-orange-100 my-8 shadow-sm">
                "Pemecahan masalah adalah otot yang harus dilatih. IFP tidak memberikan otot itu, namun IFP bertindak sebagai sasana olahraga interaktif yang menyediakan alat yang tepat bagi siswa untuk berlatih berpikir."
              </p>
              <p>
                Menerapkan <strong>problem based learning dengan IFP</strong> mengubah orientasi kelas dari "apa jawaban yang benar" menjadi "bagaimana cara kita menemukan jawaban yang masuk akal". Ketika digabungkan dengan desain modul ajar (seperti <a href="/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleModuleIfp', '/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">merancang modul ajar interaktif</a>) yang kuat, IFP secara efektif membongkar kerangka pemikiran abstrak menjadi visualisasi yang kolaboratif dan transparan, membekali siswa dengan <em>skill set</em> abad 21 yang paling krusial.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticlePblIfp;
