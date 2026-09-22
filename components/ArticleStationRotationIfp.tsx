import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleStationRotationIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleStationRotationIfp: React.FC<ArticleStationRotationIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blended Learning: Model Station Rotation Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan implementasi Station Rotation (Blended Learning) menggunakan IFP. Solusi mengoptimalkan 1 layar interaktif untuk 30 siswa melalui rotasi kolaboratif."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/blended-learning-station-rotation-menggunakan-ifp');

    const idUrl = 'https://papaninteraktif.com/jurnal-guru/blended-learning-station-rotation-menggunakan-ifp';
    const enUrl = 'https://papaninteraktif.com/en/journal/blended-learning-station-rotation-using-ifp';

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


    const scriptId = 'article-station-rotation-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Blended Learning: Model Station Rotation Menggunakan IFP",
          "description": "Panduan implementasi Station Rotation (Blended Learning) menggunakan IFP. Solusi mengoptimalkan 1 layar interaktif untuk 30 siswa melalui rotasi kolaboratif.",
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
            "@id": window.location.origin + "/jurnal-guru/blended-learning-station-rotation-menggunakan-ifp"
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
              "name": "Model Station Rotation",
              "item": window.location.origin + "/jurnal-guru/blended-learning-station-rotation-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Model Station Rotation</li>
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
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Metodologi Interaktif</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Blended Learning: Model Station Rotation Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-emerald-400 pl-4">
                  "Satu layar interaktif raksasa, tiga puluh siswa di kelas. Bagaimana memastikan setiap anak mendapatkan kesempatan menyentuh, berinteraksi, dan berkolaborasi tanpa membuat kelas menjadi kacau? Jawabannya bukan dengan menggilir mereka satu-satu di depan kelas, melainkan dengan merombak total arsitektur fisik ruangan Anda."
                </p>

                <p>
                  Salah satu hambatan terbesar dalam adopsi <em>Interactive Flat Panel</em> (IFP) di ruang kelas reguler adalah rasio perangkat terhadap siswa. Tidak peduli sehebat apa pun layar sentuh 75 inci di depan kelas, jika hanya diakses oleh satu anak sementara 29 lainnya duduk menonton, IFP tersebut telah terdegradasi menjadi proyektor mahal. Solusi pedagogis yang paling efektif untuk memecahkan hambatan fisik ini adalah <strong>Station Rotation</strong>, salah satu varian paling populer dari pendekatan <em>Blended Learning</em>.
                </p>
                
                <p>
                  Dalam model ini, kelas tidak lagi menghadap ke depan secara seragam. Ruang kelas dibagi menjadi beberapa "stasiun" kerja. Siswa dibagi ke dalam kelompok-kelompok kecil (4-6 orang) dan akan berputar (berotasi) dari satu stasiun ke stasiun lainnya dengan batas waktu yang ditentukan. Di sinilah <strong>IFP berperan sebagai stasiun utama yang kolaboratif</strong>, memberikan akses eksklusif kepada kelompok kecil secara bergantian.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Arsitektur Stasiun dalam Kelas Blended</h2>
                <p>
                  Model <em>Station Rotation</em> tradisional biasanya membagi kelas menjadi tiga pos utama:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>1. Teacher-Led Station (Stasiun Dipandu Guru):</strong> Di sini guru memberikan instruksi langsung (<em>direct instruction</em>) dalam kelompok kecil, memungkinkan guru memberikan <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran berdiferensiasi</a> yang sangat spesifik dan intim.</li>
                  <li><strong>2. Independent/Offline Station (Stasiun Mandiri):</strong> Siswa membaca teks cetak, mengerjakan lembar kerja (LKS), atau membuat karya kerajinan fisik. Stasiun ini membangun fokus dan literasi konvensional.</li>
                  <li><strong>3. Collaborative Technology Station (Stasiun Teknologi):</strong> <strong>Inilah tempat IFP berada.</strong> Tanpa perlu pendampingan konstan dari guru, 5-6 siswa berdiri mengelilingi IFP untuk memecahkan teka-teki digital, menggeser balok kode, atau menonton simulasi virtual bersama-sama menggunakan fitur multitouch.</li>
                </ul>
                <p>
                  <em>Catatan Kepemilikan Topik:</em> Mengapa Station Rotation berbeda dari <em>Cooperative Learning</em> atau <em>Flipped Classroom</em>? <em>Cooperative Learning</em> fokus pada dinamika kerja sama antar-siswa dalam tugas apa pun. <em>Flipped Classroom</em> memindahkan teori ke rumah. <strong>Station Rotation</strong> berfokus pada manajemen ruang, waktu, dan optimalisasi rasio perangkat keras di dalam ruang kelas melalui koreografi rotasi fisik.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Aktivitas Khusus di Stasiun IFP (Collaborative Tech Station)</h2>
                <p>
                  Ketika kelompok yang terdiri dari 5 siswa tiba di "Stasiun IFP", mereka harus dapat bekerja mandiri tanpa mengganggu guru (yang sedang mengajar di <em>Teacher-Led Station</em>). Berikut 10 aktivitas yang dirancang khusus untuk kemandirian kolaboratif di layar sentuh:
                </p>

                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. Teka-Teki Klasifikasi (Drag-and-Drop)</strong>
                    <br/>IFP menampilkan kanvas besar dengan kolom-kolom kategori (misal: Benda Padat, Cair, Gas). Terdapat puluhan gambar acak di bawahnya. Kelima siswa menggunakan fitur multitouch untuk berlomba menarik gambar-gambar tersebut ke kolom yang benar sebelum waktu stasiun habis.
                  </li>
                  <li><strong>2. Virtual Lab Expedition (IPA)</strong>
                    <br/>Siswa menggunakan IFP untuk membuka simulasi bedah katak virtual atau merakit sirkuit listrik. Satu siswa bertugas sebagai "pembaca manual panduan" dari layar, sementara tiga lainnya secara bergantian menyentuh layar untuk memotong, memindahkan, atau menyambung kabel virtual.
                  </li>
                  <li><strong>3. Whiteboard Brainstorming & Mind Mapping</strong>
                    <br/>Stasiun ini bertugas meringkas bab sejarah. IFP dibuka pada aplikasi <em>Whiteboard</em> dengan <em>template Mind Map</em>. Kelima siswa memegang pen digital (atau menggunakan jari) untuk menuliskan nama tokoh, tahun kejadian, dan sebab-akibat secara bersamaan di area kanvas masing-masing.
                  </li>
                  <li><strong>4. Interactive Timeline Detective</strong>
                    <br/>Siswa harus menyusun garis waktu (<em>timeline</em>) sejarah kemerdekaan. Guru telah meninggalkan komponen-komponen gambar dan teks acak di layar IFP. Kelompok tersebut harus berdebat dan menggeser komponen tersebut agar urutannya logis dari tahun 1945 hingga 1949.
                  </li>
                  <li><strong>5. Math Manipulatives (Pecahan & Geometri)</strong>
                    <br/>Bukan mengerjakan soal pilihan ganda, IFP menampilkan manipulatif digital (seperti balok pecahan atau jaring-jaring bangun ruang). Siswa harus memutar jaring-jaring virtual di layar menggunakan dua jari (<em>pinch and rotate</em>) untuk membuktikan bentuk akhirnya.
                  </li>
                  <li><strong>6. Storyboard Sequencing (Bahasa)</strong>
                    <br/>Siswa di stasiun ini ditugaskan menyusun alur cerita fabel. IFP menampilkan 8 panel komik kosong dan 8 adegan acak. Secara kolaboratif, mereka mendiskusikan orientasi, komplikasi, dan resolusi dengan memindahkan panel adegan ke urutan yang benar.
                  </li>
                  <li><strong>7. Peer-Review Kertas Kerja</strong>
                    <br/>Jika IFP memiliki fitur <em>document camera</em> (kamera dokumen), siswa meletakkan hasil kerja dari <em>Independent Station</em> mereka sebelumnya di bawah kamera. Karya tersebut diproyeksikan ke IFP, dan seluruh anggota kelompok menggunakan fitur anotasi merah/hijau untuk mengoreksi karya teman mereka.
                  </li>
                  <li><strong>8. Simulasi Coding Blok</strong>
                    <br/>Siswa menjalankan Scratch atau Blockly di IFP. Karena layar sangat besar, kode dapat dibaca oleh seluruh kelompok. Mereka membagi peran: ada "Navigator" yang memberi arah logika, dan "Driver" yang menggeser balok-balok kode di layar sentuh.
                  </li>
                  <li><strong>9. Escape Room Digital (Gamifikasi)</strong>
                    <br/>Guru telah mengonfigurasi presentasi interaktif dengan tautan tersembunyi (mirip <em>Escape Room</em>). Kelompok harus mencari petunjuk di layar, menyentuh objek yang benar, dan memecahkan teka-teki kata sandi di layar IFP untuk "keluar" dari stasiun sebelum lonceng rotasi berbunyi.
                  </li>
                  <li><strong>10. The "Self-Check" Kiosk (Asesmen Mandiri)</strong>
                    <br/>Di stasiun IFP, siswa membuka aplikasi kuis interaktif kelompok. IFP langsung menampilkan skor dan umpan balik otomatis atas jawaban mereka. Ini menjadi <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif cepat</a> tanpa memerlukan intervensi guru.
                  </li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Skenario Pembelajaran Station Rotation 2 JP (Matematika: Bangun Datar)</h2>
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-emerald-200 pb-2">Koreografi Rotasi 70 Menit (3 Kelompok, @10 Siswa)</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Pembukaan (10 Menit):</strong> Guru memposisikan IFP di tengah, menjelaskan aturan rotasi, dan memutar hitung mundur visual (<em>Visual Timer</em>) besar di IFP yang akan berbunyi setiap 20 menit.</li>
                    <li><strong>Rotasi 1 (20 Menit):</strong> 
                      <br/><em>Kelompok A (Stasiun Guru):</em> Membahas miskonsepsi rumus luas segitiga langsung dengan guru menggunakan papan tulis kecil (<em>whiteboard</em> fisik). 
                      <br/><em>Kelompok B (Stasiun Mandiri):</em> Mengerjakan LKS memotong kertas origami untuk membentuk jaring-jaring di meja belakang.
                      <br/><em>Kelompok C (Stasiun IFP):</em> Bermain simulasi manipulatif "Area Builder" (PhET). Kelompok C berdiri mengelilingi IFP, menyusun balok-balok 1cm² secara <em>drag-and-drop</em> untuk membentuk area sebesar 24cm² dengan berbagai bentuk.
                    </li>
                    <li><strong>Transisi (2 Menit):</strong> Alarm IFP berbunyi. Musik ceria diputar sebagai tanda siswa berdiri dan bergeser searah jarum jam. (A ke B, B ke C, C ke A).</li>
                    <li><strong>Rotasi 2 (20 Menit):</strong> Kelompok B kini berada di Stasiun IFP. Kelompok C belajar langsung bersama guru. Kelompok A mengerjakan origami.</li>
                    <li><strong>Rotasi 3 (20 Menit):</strong> Putaran terakhir agar semua kelompok mendapatkan ketiga pengalaman (Guru, Kertas, IFP).</li>
                    <li><strong>Penutupan (8 Menit):</strong> Guru mengumpulkan seluruh siswa kembali menghadap IFP untuk <a href="/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleReflectionIfp', '/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">refleksi singkat</a> dan mengkonfirmasi pemahaman yang didapat dari ketiga stasiun.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Manajemen Kelas: Kunci Sukses Rotasi</h2>
                <p>
                  Kehancuran terbesar dari <em>Station Rotation</em> adalah kebisingan dan kebingungan transisi. <strong>Gunakan IFP Anda sebagai konduktor waktu.</strong> Fitur <em>Visual Timer</em> (jam pasir atau animasi waktu) harus berjalan di latar belakang (<em>overlay</em>) saat aplikasi stasiun sedang dibuka. 
                </p>
                <p>
                  Selain itu, siswa di "Stasiun IFP" harus mengetahui prosedur <em>"Ask 3 Before Me"</em> (Tanya 3 teman sebelum bertanya pada guru). Karena guru sedang sibuk menangani <em>Teacher-Led Station</em>, mereka tidak boleh diinterupsi oleh kelompok IFP hanya karena "Pak, layarnya kepencet tombol <em>home</em>". Pastikan di dalam kelompok IFP ada satu anak yang ditunjuk sebagai "Kapten Teknologi". Ini adalah bagian krusial dari <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">pengelolaan kelas modern</a>.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Checklist Guru (Pre-Rotation)</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-emerald-500 mr-2">✓</span> Apakah instruksi untuk Stasiun IFP sangat jelas sehingga siswa tidak perlu memanggil guru?</li>
                  <li><span className="text-emerald-500 mr-2">✓</span> Apakah letak IFP cukup jauh dari Stasiun Guru agar suara audio video tidak saling bertabrakan?</li>
                  <li><span className="text-emerald-500 mr-2">✓</span> Apakah aplikasi/browser di IFP sudah disetel pada mode layar penuh (<em>full screen</em>) agar siswa tidak tidak sengaja menutup aplikasinya?</li>
                  <li><span className="text-emerald-500 mr-2">✓</span> Apakah alur perpindahan kelompok (siapa pindah ke mana) sudah dipetakan secara visual di layar?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
                <p>
                  <strong>Model Station Rotation dalam kerangka Blended Learning</strong> menyelamatkan sekolah dari mitos bahwa setiap anak harus memiliki gawainya masing-masing (1:1 <em>device ratio</em>) untuk merasakan pendidikan digital. Dengan mengkoreografi kelas ke dalam zona-zona aktivitas, guru berhasil memaksimalkan utilitas satu perangkat IFP yang mahal untuk melayani 30 siswa secara bergilir, intim, dan sangat interaktif. Pada akhirnya, IFP berhenti menjadi pajangan pasif di depan kelas dan berevolusi menjadi stasiun lokakarya tempat ide-ide siswa menjadi nyata di ujung jari mereka.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleStationRotationIfp;
