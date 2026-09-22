import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleInkuiriIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleInkuiriIfp: React.FC<ArticleInkuiriIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran Berbasis Inkuiri Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan lengkap implementasi Pembelajaran Berbasis Inkuiri menggunakan IFP. Fasilitasi penyelidikan, pengujian hipotesis, dan pemecahan masalah secara interaktif."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-berbasis-inkuiri-menggunakan-ifp');

    const idUrl = 'https://papaninteraktif.com/jurnal-guru/pembelajaran-berbasis-inkuiri-menggunakan-ifp';
    const enUrl = 'https://papaninteraktif.com/en/journal/inquiry-based-learning-using-interactive-flat-panel';

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


    const scriptId = 'article-inkuiri-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran Berbasis Inkuiri Menggunakan IFP",
          "description": "Panduan lengkap implementasi Pembelajaran Berbasis Inkuiri menggunakan IFP. Fasilitasi penyelidikan, pengujian hipotesis, dan pemecahan masalah secara interaktif.",
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
            "@id": window.location.origin + "/jurnal-guru/pembelajaran-berbasis-inkuiri-menggunakan-ifp"
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
              "name": "Pembelajaran Berbasis Inkuiri Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-berbasis-inkuiri-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran Berbasis Inkuiri</li>
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
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Metodologi Interaktif</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Pembelajaran Berbasis Inkuiri Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-cyan-400 pl-4">
                  "Memberikan jawaban kepada siswa hanya akan menghentikan rasa ingin tahu mereka. Sebaliknya, merangsang mereka dengan anomali data dan membiarkan mereka mencari pola adalah esensi dari belajar. Dengan kanvas digital raksasa di depan kelas, rasa ingin tahu tersebut diubah menjadi penyelidikan visual yang kolaboratif dan terukur."
                </p>

                <p>
                  Sistem pendidikan tradisional sering kali terjebak dalam model transmisi: guru menuangkan fakta, dan siswa menampungnya. Namun, di era di mana informasi dapat diakses dalam hitungan detik, kemampuan untuk <em>mengingat</em> fakta menjadi jauh kurang relevan dibandingkan kemampuan untuk <em>menyelidiki</em> kebenaran fakta tersebut. Model <strong>Pembelajaran Berbasis Inkuiri</strong> (<em>Inquiry-Based Learning</em>) membalikkan keadaan. Siswa bertindak sebagai ilmuwan atau detektif yang merumuskan pertanyaan, membangun hipotesis, dan menganalisis data. Dalam konteks ini, <strong>pembelajaran berbasis inkuiri menggunakan IFP</strong> (<em>Interactive Flat Panel</em>) memberikan "laboratorium data" yang dinamis langsung di ruang kelas.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Siklus Inkuiri dan Peran IFP</h2>
                <p>
                  Siklus inkuiri umumnya terdiri dari lima tahap: <strong>Orientasi, Merumuskan Masalah, Merumuskan Hipotesis, Mengumpulkan Data, Menguji Hipotesis, dan Menarik Kesimpulan</strong>. IFP memainkan peran transformatif di setiap tahapnya:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Orientasi (Trigger):</strong> Alih-alih guru bercerita, guru memutar video mikroskopis beresolusi tinggi atau menampilkan anomali grafis statistik di IFP. Visualisasi skala besar ini mengundang decak kagum dan otomatis memancing pertanyaan dari siswa.</li>
                  <li><strong>Merumuskan Masalah & Hipotesis:</strong> IFP digunakan sebagai <em>brainstorming board</em>. Menggunakan fitur <em>Split-Screen</em>, guru membagi layar untuk menampung hipotesis dari kelompok yang berbeda secara bersamaan. Siswa maju dan mencatat prediksi mereka langsung di layar.</li>
                  <li><strong>Mengumpulkan Data:</strong> Melalui <em>browser</em> bawaan IFP, kelas dapat mengakses simulasi virtual (seperti PhET Interactive Simulations), data satelit <em>real-time</em>, atau mengimpor <em>spreadsheet</em> angka. Siswa menyentuh layar untuk mengubah variabel dan mengamati hasilnya secara langsung.</li>
                  <li><strong>Menguji dan Menyimpulkan:</strong> Kanvas <em>whiteboard</em> IFP yang tak terbatas (<em>infinite canvas</em>) memungkinkan siswa menggambar grafik tren dari data yang mereka kumpulkan, membandingkannya dengan hipotesis awal mereka, dan menuliskan kesimpulan final secara kolaboratif menggunakan <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pendekatan kolaboratif</a>.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Inkuiri Terbimbing vs Inkuiri Terbuka</h2>
                <p>
                  Sangat penting bagi guru untuk memahami tingkat kesiapan siswa. IFP dapat memfasilitasi berbagai level inkuiri:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Inkuiri Terbimbing (Guided Inquiry):</strong> Cocok untuk pemula. Guru menyiapkan struktur tabel, tautan simulasi, dan pertanyaan penuntun di layar IFP. Siswa hanya perlu maju untuk mengisi variabel dan menarik simpulan. Ini merupakan bagian dari <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">diferensiasi proses</a>.</li>
                  <li><strong>Inkuiri Terbuka (Open Inquiry):</strong> Untuk siswa mahir. Layar IFP dibiarkan kosong sebagai kanvas putih (<em>blank slate</em>). Siswa diberi kebebasan penuh untuk merancang eksperimen virtual mereka sendiri, mencari alat digital yang tepat, dan mempresentasikannya.</li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Aktivitas Inkuiri Interaktif Menggunakan IFP</h2>
                <p>Berikut adalah 10 rancangan aktivitas inkuiri konkret yang memanfaatkan interaktivitas layar sentuh IFP:</p>

                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. "Apa yang Salah dengan Gambar Ini?" (Orientasi Visual)</strong>
                    <br/>Guru menampilkan foto rekayasa genetika hewan atau grafik sejarah yang janggal dalam resolusi 4K. Siswa maju, menggunakan fitur <em>Zoom</em> ganda, dan melingkari area anomali dengan tinta merah digital, memicu perumusan masalah kelas.
                  </li>
                  <li><strong>2. Virtual Lab Manipulation (Eksplorasi Sains)</strong>
                    <br/>Alih-alih menggunakan alat lab fisik yang mahal, IFP menampilkan laboratorium virtual (misal: simulasi pegas). Siswa secara langsung menyentuh dan menarik pegas maya di layar, mengubah massa beban, dan mencatat perpanjangan pegas pada tabel digital di sebelahnya menggunakan mode <em>Split-Screen</em>.
                  </li>
                  <li><strong>3. Live Polling Hypothesis (Pengujian Prediksi)</strong>
                    <br/>Sebelum simulasi dijalankan, guru memunculkan QR code di IFP. Siswa memindai dari tablet mereka untuk melakukan <em>voting</em> terhadap apa yang akan terjadi (Hipotesis). Grafik batang <em>live polling</em> akan muncul di IFP, menunjukkan distribusi tebakan kelas.
                  </li>
                  <li><strong>4. Interactive Data Mapping (Inkuiri IPS/Geografi)</strong>
                    <br/>Menggunakan Google Earth di IFP, kelas menyelidiki korelasi antara letak gunung berapi dengan zona gempa. Siswa menyematkan (<em>pin</em>) titik koordinat di layar sentuh, menganalisis pola cincin api (<em>Ring of Fire</em>), dan menarik garis tren struktural.
                  </li>
                  <li><strong>5. Timeline Detective (Inkuiri Sejarah)</strong>
                    <br/>Sebuah garis waktu besar kosong digambar di <em>whiteboard</em> IFP. Puluhan gambar peristiwa sejarah, tokoh, dan koran lama diacak di bawah layar. Siswa harus menganalisis "sebab-akibat", lalu melakukan <em>drag-and-drop</em> gambar-gambar tersebut ke titik tahun yang logis, berdebat jika ada ketidaksesuaian.
                  </li>
                  <li><strong>6. "Kotak Hitam" Digital (Matematika / Pola)</strong>
                    <br/>Guru menampilkan tabel "Input" dan "Output". Siswa menebak operasi matematika apa yang ada di dalam "Kotak Hitam" (Fungsi Aljabar). Siswa maju ke IFP, menuliskan angka input uji coba secara bebas, dan guru secara <em>real-time</em> mengetik angka outputnya, menantang siswa merumuskan rumus dari pola tersebut.
                  </li>
                  <li><strong>7. Causal Loop Diagramming (Sistem Berpikir)</strong>
                    <br/>Siswa menyelidiki ekosistem. Di <em>whiteboard</em> IFP, terdapat gambar populasi serigala, rusa, dan rumput. Siswa menarik garis panah digital (<em>Mind-map connector</em>) antar entitas. Jika panah satu diubah ketebalannya, mereka harus memprediksi efek dominonya pada entitas lain.
                  </li>
                  <li><strong>8. Analisis Sentimen Teks Sastra (Inkuiri Bahasa)</strong>
                    <br/>Sebuah puisi pendek atau cuplikan novel ditampilkan <em>full-screen</em>. Berbekal stabilo digital berwarna, sekelompok siswa membedah teks dengan warna biru (untuk nada melankolis) dan warna merah (untuk nada marah). Mereka menyelidiki bagaimana pilihan diksi penulis (<em>diction</em>) mempengaruhi emosi pembaca.
                  </li>
                  <li><strong>9. The "If-Then" Simulation Engine (Logika Komputasional)</strong>
                    <br/>Siswa menggunakan platform logika berbasis blok (seperti Scratch) yang dijalankan di IFP. Mereka menguji hipotesis pemrograman: "Jika variabel kecepatan diubah menjadi 50, maka sudut pantul bola akan berubah." Siswa menyusun balok kode dengan sentuhan jari dan langsung mengeksekusinya.
                  </li>
                  <li><strong>10. Interactive Gallery Walk (Evaluasi Kelas)</strong>
                    <br/>Di tahap kesimpulan, setiap kelompok mengirim hasil inkuiri digital mereka (berupa PDF/Gambar) ke layar IFP secara nirkabel (<em>casting</em>). Layar IFP menampilkan galeri panel (<em>grid view</em>) berisi karya semua kelompok. Sebagai <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif</a> kelas melakukan analisis silang atas kelemahan dan kekuatan eksperimen teman mereka.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Skenario Pembelajaran Inkuiri 2 JP: "Misteri Benda Mengapung"</h2>
                <div className="bg-cyan-50/50 p-6 rounded-2xl border border-cyan-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-cyan-200 pb-2">Skenario Praktis 2 JP (70-80 Menit) - Sains Terpadu (Fisika Dasar)</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Orientasi Masalah (10 Menit):</strong> Guru memutar video di IFP: sebuah kapal baja raksasa yang mengapung di lautan, disandingkan dengan sebuah koin baja kecil yang tenggelam di gelas air. Pertanyaan pemantik di IFP: <em>"Mengapa baja yang beratnya ribuan ton bisa mengapung, sedangkan koin kecil dari bahan yang sama tenggelam?"</em></li>
                    <li><strong>B. Merumuskan Hipotesis (15 Menit):</strong> Layar IFP dibagi menggunakan <em>Split-Screen</em>. Sisi kiri menampilkan gambar kapal dan koin, sisi kanan menampilkan kanvas kosong. Siswa maju secara bergantian untuk menulis dugaan sementara (misal: "Karena kapal punya mesin", "Karena kapal bolong di tengahnya").</li>
                    <li><strong>C. Mengumpulkan Data dengan Simulasi (25 Menit):</strong> Guru membuka simulasi "Buoyancy" (Gaya Apung) dari PhET di layar IFP. Siswa dibagi kelompok. Satu kelompok maju untuk mengubah variabel massa jenis (<em>density</em>) dan volume benda pada simulator dengan cara menggeser (<em>slider</em>) layar sentuh. Mereka memasukkan benda-benda maya (kayu, batu, es) ke dalam air virtual dan mencatat volumenya yang tercelup.</li>
                    <li><strong>D. Analisis dan Pengujian (15 Menit):</strong> Kelompok kembali ke tempat duduk untuk menghitung rasio Massa dibagi Volume berdasarkan data yang ada di IFP. Mereka menyadari bahwa bentuk kapal yang berongga membuat volume totalnya sangat besar, sehingga massa jenis rata-ratanya lebih kecil dari air.</li>
                    <li><strong>E. Penarikan Kesimpulan (15 Menit):</strong> Perwakilan siswa maju ke IFP, mencoret hipotesis awal yang salah (seperti "karena mesin"), dan merumuskan kesimpulan akhir (Hukum Archimedes) dengan tulisan tangan digital, yang kemudian diekspor (<em>save to QR</em>) sebagai bahan catatan seluruh kelas.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Strategi Pengelolaan Kelas dan Kesalahan Umum</h2>
                <p>
                  Kesalahan paling sering dalam inkuiri menggunakan IFP adalah guru "tidak sabar" dan akhirnya mengambil alih sentuhan layar untuk mempercepat penemuan siswa. Ini membunuh esensi inkuiri. Ingat, biarkan siswa yang menavigasi layar dan membuat kesalahan. Jika simulasi gagal, tanyakan <em>"Mengapa hal itu tidak terjadi seperti yang kamu harapkan?"</em>. 
                </p>
                <p>
                  Gunakan <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">manajemen antrean visual</a>. Jika semua siswa berebut maju ke IFP, kelas akan menjadi kacau. Tulis urutan pemanggilan kelompok di pinggir layar IFP agar setiap anak tahu kapan gilirannya untuk memanipulasi data tanpa perlu intervensi verbal dari guru.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Checklist Persiapan Guru (Pre-Inkuiri)</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-cyan-500 mr-2">✓</span> Apakah video anomali/pemicu awal sudah disiapkan dengan kualitas visual yang tajam?</li>
                  <li><span className="text-cyan-500 mr-2">✓</span> Apakah simulasi HTML5 (seperti PhET) sudah dicoba kelancarannya pada <em>browser</em> bawaan IFP?</li>
                  <li><span className="text-cyan-500 mr-2">✓</span> Apakah guru sudah menyiapkan pertanyaan-pertanyaan pancingan <em>(probing questions)</em> jika siswa mengalami jalan buntu (<em>stuck</em>)?</li>
                  <li><span className="text-cyan-500 mr-2">✓</span> Apakah IFP ditempatkan pada ketinggian yang pas agar siswa dengan berbagai tinggi badan dapat menjangkau layar untuk berinteraksi?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
                <p>
                  Mengintegrasikan <strong>Pembelajaran Berbasis Inkuiri menggunakan IFP</strong> berarti mengubah kelas dari sekadar ruang dengar menjadi sebuah laboratorium eksplorasi. IFP memungkinkan pengujian hipotesis dilakukan dengan cepat, visual, dan aman, mengurangi kebutuhan atas alat-alat fisik yang rentan rusak atau mahal. Ketika siswa berdiri di depan layar besar, berdebat tentang anomali data, memanipulasi variabel fisika secara maya, dan membuktikan sendiri hukum-hukum alam, guru telah sukses menanamkan benih nalar kritis (<em>critical thinking</em>) yang akan bertahan seumur hidup.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInkuiriIfp;
