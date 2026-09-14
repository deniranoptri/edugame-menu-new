import React, { useEffect } from 'react';

interface ArticleIpsIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleIpsIfp: React.FC<ArticleIpsIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran IPS Interaktif Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan lengkap pembelajaran IPS interaktif menggunakan IFP. Temukan 10 aktivitas visual kontekstual, skenario analisis sosial, dan eksplorasi peta interaktif."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-ips-interaktif-menggunakan-ifp');

    const scriptId = 'article-ips-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran IPS Interaktif Menggunakan IFP",
          "description": "Panduan lengkap pembelajaran IPS interaktif menggunakan IFP. Temukan 10 aktivitas visual kontekstual, skenario analisis sosial, dan eksplorasi peta interaktif.",
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
            "@id": window.location.origin + "/jurnal-guru/pembelajaran-ips-interaktif-menggunakan-ifp"
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
              "name": "Pembelajaran IPS Interaktif Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-ips-interaktif-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran IPS Interaktif</li>
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
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Ilmu Pengetahuan Sosial</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Pembelajaran IPS Interaktif Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-orange-400 pl-4">
                  "Mempelajari Ilmu Pengetahuan Sosial (IPS) bukan sekadar menghafal tanggal sejarah atau nama ibu kota. IPS adalah studi tentang manusia, ruang, dan waktu. Untuk memahami dinamika tersebut, ruang kelas membutuhkan visualisasi yang kuat, dan di sinilah Interactive Flat Panel (IFP) berperan mengubah abstraksi sosial menjadi eksplorasi visual."
                </p>

                <p>
                  Seringkali pelajaran Ilmu Pengetahuan Sosial (IPS) dianggap sebagai mata pelajaran yang menuntut banyak membaca dan menghafal. Akibatnya, siswa kehilangan esensi utama dari IPS, yaitu kemampuan menganalisis fenomena sosial, ruang geografis, serta rentetan peristiwa sejarah. <strong>Pembelajaran IPS interaktif menggunakan IFP</strong> menggeser paradigma tersebut. Dengan layar sentuh berukuran besar, peta statis di buku cetak berubah menjadi kanvas eksplorasi digital yang hidup dan interaktif.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Pengertian Pembelajaran IPS Interaktif Menggunakan IFP</h2>
                <p>
                  Pembelajaran IPS interaktif menggunakan IFP berarti menjadikan <em>Interactive Flat Panel</em> sebagai pusat visual dan manipulasi data di kelas. Siswa tidak sekadar melihat peta atau grafik, tetapi mereka menyentuh, menggeser, menandai (anotasi), memperbesar (<em>zoom-in</em>), dan berdebat di depan layar untuk membedah interaksi manusia dan lingkungannya. IFP adalah alat bedah sosial bagi siswa.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Mengapa IPS Membutuhkan Visualisasi dan Konteks?</h2>
                <p>
                  Konsep-konsep dalam IPS seperti letak geografis, arus migrasi, kegiatan ekonomi (pasar), hingga rentetan sejarah kemerdekaan sangat sulit dipahami hanya lewat narasi. Siswa butuh konteks visual. Membicarakan kepadatan permukiman di bantaran sungai akan jauh lebih berdampak jika siswa langsung melihat citra satelit sungai tersebut di IFP, memperbesar gambarnya, dan membandingkannya dengan area sekitarnya melalui <a href="/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpActivities', '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">aktivitas pembelajaran interaktif</a>.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. IFP sebagai Media Pembelajaran IPS (Bukan Tujuan)</h2>
                <p>
                  Ingatlah, <strong>media pembelajaran IPS dengan IFP</strong> berfungsi sebagai jembatan. Tujuan utamanya tetap pada nalar kritis siswa (<em>critical thinking</em>). IFP jangan digunakan sekadar sebagai proyektor canggih untuk menampilkan presentasi panjang (PPT) satu arah. Layar ini harus disentuh oleh siswa untuk mengeksplorasi wilayah, memilah data, atau memetakan sebab-akibat.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Eksplorasi Peta Interaktif (Geografi)</h2>
                <p>
                  Membaca peta konvensional bisa membosankan. Namun, membuka peta digital interaktif (seperti Google Earth atau peta tematik BPS) di IFP memberikan keleluasaan. Siswa dapat menggunakan fungsi <em>pinch-to-zoom</em> untuk memperbesar wilayah pegunungan, menggambar rute perdagangan kuno dengan spidol digital, atau menandai batas-batas benua secara kolaboratif.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Timeline Sejarah Interaktif</h2>
                <p>
                  Sejarah adalah tentang urutan dan hubungan sebab-akibat antar peristiwa. Gunakan kanvas IFP untuk menampilkan garis waktu (<em>timeline</em>) mendatar. Minta siswa secara bergantian menggeser (<em>drag-and-drop</em>) kotak-kotak peristiwa sejarah (misalnya kronologi Proklamasi Kemerdekaan RI) ke titik waktu yang tepat di garis tersebut.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Membaca Grafik, Tabel, dan Data Analisis Sederhana</h2>
                <p>
                  Sosiologi dan Ekonomi sarat dengan data. Tampilkan grafik batang tentang pertumbuhan penduduk atau tabel harga barang pokok di IFP. Panggil sekelompok siswa ke depan untuk membaca grafik tersebut, melingkari data yang anomali (misalnya lonjakan tajam harga cabai di bulan tertentu), dan meminta mereka memberikan hipotesis sosial-ekonomi di balik grafik tersebut.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Analisis Gambar dan Foto Sejarah</h2>
                <p>
                  Sebuah foto sejarah menyimpan seribu makna. Tampilkan satu foto arsip bersejarah di tengah layar IFP. Gunakan metode investigasi visual: minta murid melingkari bagian foto yang menarik (pakaian, ekspresi, senjata, atau bangunan latar) dan tuliskan pertanyaan mereka (menggunakan <em>sticky notes</em> digital) di sekitar foto tersebut.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Aktivitas Pembelajaran IPS Interaktif Menggunakan IFP</h2>
                <p>Berikut adalah 10 rancangan aktivitas konkret <strong>IPS interaktif dengan Interactive Flat Panel</strong> untuk menghidupkan suasana kelas:</p>

                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Aktivitas 1: Interactive Map Exploration (Menjelajah Peta)</strong>
                    <br/>Tujuan: Mengidentifikasi batas geografis dan bentang alam.
                    <br/>Pelaksanaan: Tampilkan citra satelit suatu pulau. Dua siswa maju ke depan menggunakan fitur <em>split-screen</em> (layar terbagi) atau spidol beda warna. Mereka berlomba menandai gunung berapi dan garis pantai terpanjang.
                  </li>
                  <li><strong>Aktivitas 2: Timeline Sorting (Mengurutkan Sejarah)</strong>
                    <br/>Tujuan: Memahami kronologi waktu.
                    <br/>Pelaksanaan: Guru menyebar kartu digital berisi gambar dan tanggal acak suatu peristiwa sejarah di layar. Siswa maju secara bergiliran menggeser kartu-kartu tersebut menyusun garis waktu dari kiri ke kanan.
                  </li>
                  <li><strong>Aktivitas 3: Historical Image Analysis (Analisis Foto Sejarah)</strong>
                    <br/>Tujuan: Observasi dan inferensi.
                    <br/>Pelaksanaan: Proyeksikan foto pasar tradisional masa kolonial. Siswa (bekerja dalam kelompok) maju menandai detail tertentu (misalnya alat transportasi lama atau jenis pakaian) dan menuliskannya di panel teks samping foto.
                  </li>
                  <li><strong>Aktivitas 4: Cause-and-Effect Mapping (Pemetaan Sebab-Akibat)</strong>
                    <br/>Tujuan: Analisis fenomena sosial.
                    <br/>Pelaksanaan: Tuliskan masalah di tengah layar (misal: "Banjir di Perkotaan"). Siswa secara bergantian menggunakan pen digital untuk menggambar cabang-cabang penyebab (sampah, drainase buruk) dan akibat (penyakit, kerugian ekonomi) membentuk <em>mind map</em> raksasa.
                  </li>
                  <li><strong>Aktivitas 5: Region Matching (Pencocokan Wilayah)</strong>
                    <br/>Tujuan: Menghubungkan karakteristik wilayah dengan komoditas/budaya.
                    <br/>Pelaksanaan: Sebelah kiri layar berisi ikon hasil bumi (kopi, teh, ikan, kelapa sawit). Sebelah kanan menampilkan peta buta Nusantara. Siswa menyeret ikon tersebut ke provinsi yang paling tepat sebagai penghasil utamanya.
                  </li>
                  <li><strong>Aktivitas 6: Data & Graph Reading (Membaca Grafik Ekonomi)</strong>
                    <br/>Tujuan: Literasi data sosial ekonomi.
                    <br/>Pelaksanaan: Tampilkan grafik garis kemiskinan atau inflasi dari tahun ke tahun. Guru meminta murid maju memberikan tanda panah (▲/▼) pada grafik dan menuliskan faktor pendorong turun-naiknya grafik di titik tersebut.
                  </li>
                  <li><strong>Aktivitas 7: Social Phenomenon Analysis (Sebab Akibat Interaksi)</strong>
                    <br/>Tujuan: Memahami dinamika manusia.
                    <br/>Pelaksanaan: Guru memutar video pendek 1 menit tentang kemacetan kota. Layar dihentikan pada satu <em>frame</em> paling padat. Siswa melakukan anotasi langsung di atas video (mencoret dan menulis argumen) lalu menyimpannya dalam bentuk gambar.
                  </li>
                  <li><strong>Aktivitas 8: Map Annotation (Anotasi Peta Digital)</strong>
                    <br/>Tujuan: Mengenal infrastruktur wilayah.
                    <br/>Pelaksanaan: Tampilkan peta lokal (kabupaten/kota tempat sekolah berada). Minta siswa menandai letak sekolah mereka, pasar terdekat, pusat pemerintahan, dan terminal, serta menggambar rute perjalanan mereka dari rumah menggunakan spidol digital IFP.
                  </li>
                  <li><strong>Aktivitas 9: Group Presentation Canvas (Presentasi Kanvas Kelompok)</strong>
                    <br/>Tujuan: <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Pembelajaran kolaboratif</a>.
                    <br/>Pelaksanaan: Kelompok siswa diberi waktu presentasi memaparkan proyek mini IPS. Alih-alih presentasi statis, mereka diminta menggambar tabel secara langsung, menempel aset gambar di layar, dan mendemonstrasikan ide mereka layaknya presentator profesional.
                  </li>
                  <li><strong>Aktivitas 10: Quick Evidence Challenge (Tantangan Bukti Cepat)</strong>
                    <br/>Tujuan: Kemampuan berargumen berdasar bukti visual.
                    <br/>Pelaksanaan: Tampilkan dua foto kawasan (satu kumuh, satu rapi). Guru bertanya "Mengapa kawasan A rawan konflik sosial?" Siswa maju, melingkari elemen foto (misal jarak rumah yang sangat padat) sebagai bukti otentik argumen mereka.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Skenario Pembelajaran IPS 2 JP: "Interaksi Manusia dengan Lingkungan"</h2>
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-orange-200 pb-2">Skenario Praktis 2 JP (70-80 Menit) - Interaksi Manusia & Lingkungan</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Apersepsi & Stimulus Visual (10 Menit):</strong> Membuka kelas dengan menampilkan 2 gambar resolusi tinggi berdampingan di IFP: Hutan lebat vs Lahan sawit/pertambangan. Guru memancing pertanyaan pemantik, <em>"Apa yang hilang? Apa yang berubah?"</em></li>
                    <li><strong>B. Observasi Peta & Gambar (10 Menit):</strong> Menggunakan satelit interaktif, guru mencari (<em>search</em>) lokasi riil sungai terdekat dari sekolah di IFP. Siswa mengamati perubahan warna air dan area bantaran sungai dari citra tersebut.</li>
                    <li><strong>C. Identifikasi Fenomena (15 Menit):</strong> Minta 2 perwakilan siswa (secara <em>turn-taking</em>) maju ke IFP untuk menarik garis maya (<em>lasso tool</em>/stabilo) pada area di sepanjang sungai yang sudah berubah menjadi permukiman padat atau pabrik.</li>
                    <li><strong>D. Diskusi Kelompok & Analisis Sebab-Akibat (15 Menit):</strong> Metode <em>Think-Pair-Share</em>. Siswa duduk berdiskusi berpasangan memikirkan dampak ekonomi dan ekologi (misal banjir). Selama diskusi, IFP menampilkan <em>mind-map</em> kosong sebagai panduan yang harus mereka lengkapi nanti.</li>
                    <li><strong>E. Anotasi & Presentasi di IFP (15 Menit):</strong> Perwakilan dari tiga kelompok maju bergantian ke layar. Mereka mengisi <em>mind-map</em> (Sebab, Akibat Sosial, Akibat Lingkungan) dengan menulis tangan menggunakan pena IFP atau menempelkan teks. Kelompok audiens diizinkan memberikan pertanyaan (<em>peer questioning</em>).</li>
                    <li><strong>F. Feedback & Refleksi Singkat (5 Menit):</strong> Guru meninjau (<em>review</em>) seluruh anotasi yang ada di layar, membenarkan miskonsepsi (memberikan <em>highlight</em>), lalu menyimpan (<em>save/export</em>) layar penuh coretan tersebut menjadi format PDF untuk dibagikan ke siswa sebagai rangkuman (merupakan bagian tak terpisahkan dari <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif</a>).</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Memastikan Partisipasi Aktif (Menghindari Dominasi Siswa Tertentu)</h2>
                <p>
                  Sangat rawan jika interaksi layar hanya dikuasai satu atau dua anak saja, sementara sisanya pasif. Praktikkan strategi <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">pengelolaan kelas yang ketat</a> seperti <em>touch rotation</em> (rotasi siapa yang boleh menyentuh) dan penentuan <em>group roles</em> (ada yang bertugas sebagai pencatat di buku, ada yang presenter verbal, ada yang eksekutor di layar IFP). Pastikan juga menerapkan <em>student explanation</em>: murid yang sedang menyentuh IFP harus selalu menjelaskan apa alasannya secara lantang kepada kelas.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Dukungan Berdiferensiasi dalam IPS</h2>
                <p>
                  Tingkat nalar sosial anak berbeda. Bagi siswa yang butuh bantuan ekstra, siapkan kata kunci atau pertanyaan pemandu tekstual di sudut IFP sebagai <em>scaffolding</em>. Bagi siswa yang sedang berkembang, dorong mereka menganalisis sebab-akibat langsung di IFP. Sedangkan bagi siswa yang sudah mahir, tantang mereka berargumentasi menggunakan bukti data statistik yang ditampilkan, tanpa teks pemandu.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Penggunaan Fitur Kanvas dan Sticky Notes IFP</h2>
                <p>
                  Maksimalkan fitur bawaan IFP (<em>whiteboarding software</em>). Fitur <em>sticky notes</em> sangat cocok untuk <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran mendalam</a> seperti mengumpulkan gagasan klasikal <em>brainstorming</em> solusi sosial. Semua pendapat anak "ditempel" di layar, kemudian dikelompokkan berdasarkan kategori secara bersama-sama.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesalahan Umum dalam Pembelajaran IPS Menggunakan IFP</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Layar Dipenuhi Teks Buku:</strong> Guru sekadar men-<em>scan</em> bab buku paket dan menampilkannya utuh di IFP untuk dibaca bersama. Ini mematikan fungsi interaktif.</li>
                  <li><strong>Guru Menjadi Pencerita Tunggal:</strong> Guru berdiri menutupi IFP, menunjuk peta dengan tongkat, menceritakan sejarah panjang, tanpa sekalipun memberikan alat penanda (pena digital) kepada siswa.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Checklist Persiapan Guru</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-orange-500 mr-2">✓</span> Apakah aset peta, citra, atau gambar sejarah sudah beresolusi tinggi sehingga tidak pecah saat di-<em>zoom</em>?</li>
                  <li><span className="text-orange-500 mr-2">✓</span> Apakah elemen yang harus diurutkan (misal <em>timeline</em>) sudah dipersiapkan dalam objek terpisah (<em>draggable</em>)?</li>
                  <li><span className="text-orange-500 mr-2">✓</span> Apakah ada kesempatan <em>think-pair-share</em> sebelum siswa mengambil keputusan visual di depan layar?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Penutup</h2>
                <p>
                  Mata pelajaran IPS adalah jembatan bagi siswa untuk memahami dunia nyata yang terus berubah. Melalui <strong>pembelajaran IPS interaktif menggunakan IFP</strong>, kelas sosial berubah dari sekadar ruangan untuk mendengarkan, menjadi laboratorium tempat mereka membedah fenomena, mengamati jejak sejarah secara dekat, dan merumuskan argumen. Ketika siswa diberi kuasa untuk berdiri, menyorot peta, merangkai urutan sebab-akibat secara kolaboratif di atas layar interaktif, saat itulah esensi ilmu pengetahuan sosial benar-benar tertanam kuat di benak mereka.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleIpsIfp;
