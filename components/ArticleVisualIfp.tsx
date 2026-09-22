import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleVisualIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleVisualIfp: React.FC<ArticleVisualIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran Berbasis Visual (Visual Thinking) Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan lengkap Pembelajaran Berbasis Visual menggunakan IFP. Strategi membuat pemikiran siswa terlihat (Making Thinking Visible) melalui peta konsep dan analisis gambar interaktif."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp');

    const idUrl = 'https://papaninteraktif.com/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp';
    const enUrl = 'https://papaninteraktif.com/en/journal/visual-learning-using-interactive-flat-panel';

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


    const scriptId = 'article-visual-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran Berbasis Visual (Visual Thinking) Menggunakan IFP",
          "description": "Panduan lengkap Pembelajaran Berbasis Visual menggunakan IFP. Strategi membuat pemikiran siswa terlihat (Making Thinking Visible) melalui peta konsep dan analisis gambar interaktif.",
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
            "@id": window.location.origin + "/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp"
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
              "name": "Pembelajaran Berbasis Visual",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran Visual</li>
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
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Metodologi Interaktif</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Pembelajaran Berbasis Visual Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-rose-400 pl-4">
                  "Kognisi manusia pada dasarnya bersifat visual. Sebagian besar kapasitas otak kita didedikasikan untuk memproses gambar, bukan teks. Ketika kita memaksa siswa memahami konsep abstrak hanya melalui kata-kata, kita sedang melawan biologi mereka. Layar interaktif harusnya tidak digunakan untuk menayangkan deretan poin teks (bullet points), melainkan untuk membuat proses berpikir itu sendiri menjadi terlihat."
                </p>

                <p>
                  Salah satu kesalahan paling umum dalam penggunaan <em>Interactive Flat Panel</em> (IFP) adalah menjadikannya sebagai proyektor canggih untuk menampilkan slide presentasi yang sarat akan teks (<em>text-heavy</em>). Padahal, IFP pada hakikatnya adalah kanvas visual raksasa. <strong>Pembelajaran Berbasis Visual (Visual Thinking Strategies)</strong> adalah pendekatan pedagogis yang bertujuan untuk "membuat pemikiran terlihat" (<em>Making Thinking Visible</em>). Pendekatan ini mengubah gagasan abstrak menjadi representasi spasial, grafis, dan ikonik yang dapat disentuh dan dimanipulasi oleh siswa.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Mengapa Pendekatan Visual Sangat Penting?</h2>
                <p>
                  Berdasarkan Teori Pengkodean Ganda (<em>Dual Coding Theory</em>), manusia mengingat informasi jauh lebih baik jika informasi tersebut disandikan baik secara verbal maupun visual. Menggunakan <strong>Pembelajaran Berbasis Visual menggunakan IFP</strong> memberikan keunggulan berupa:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Penurunan Beban Kognitif:</strong> Daripada membaca satu paragraf penuh tentang rantai makanan, siswa memindahkan gambar predator dan mangsa di layar IFP dan menarik garis panah di antara mereka. Proses spasial ini membebaskan memori kerja (<em>working memory</em>) siswa.</li>
                  <li><strong>Katalisator Diskusi (VTS):</strong> Menampilkan satu gambar karya seni atau foto sejarah beresolusi tinggi di layar 75 inci dapat memicu metode <em>Visual Thinking Strategies (VTS)</em>, di mana guru hanya perlu bertanya: <em>"Apa yang sedang terjadi pada gambar ini?"</em> dan <em>"Apa buktinya?"</em></li>
                  <li><strong>Inklusivitas:</strong> Siswa yang memiliki kendala literasi (lambat membaca) atau <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">membutuhkan diferensiasi khusus</a> akan jauh lebih mudah memahami instruksi dan konsep melalui <em>graphic organizers</em> (pengatur grafis).</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Aktivitas Pembelajaran Visual Interaktif di IFP</h2>
                <p>Berikut adalah 10 rancangan aktivitas konkret untuk mengeksploitasi potensi visual IFP dalam merangsang <em>higher-order thinking skills</em> (HOTS):</p>

                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. Diagram Venn Interaktif (Komparasi)</strong>
                    <br/>Layar IFP menampilkan dua lingkaran beririsan besar. Siswa diberikan daftar karakteristik (misalnya: ciri Mamalia dan Reptil). Siswa maju dan menggunakan <em>drag-and-drop</em> untuk menempatkan karakteristik tersebut di sisi kiri, kanan, atau di tengah (irisan) secara <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">kolaboratif</a>.
                  </li>
                  <li><strong>2. "See-Think-Wonder" Image Analysis</strong>
                    <br/>Guru menampilkan foto mikroskopis yang ambigu secara <em>full-screen</em> (misal: penampang lintang daun). Layar dibagi menjadi tiga kolom: <em>Saya Melihat</em>, <em>Saya Berpikir</em>, dan <em>Saya Bertanya</em>. Siswa bergiliran menulis dengan pen digital di IFP, membedakan antara observasi murni, asumsi, dan keingintahuan.
                  </li>
                  <li><strong>3. Mind Mapping Tanpa Batas (Infinite Canvas)</strong>
                    <br/>Untuk merangkum materi besar, IFP dibuka pada aplikasi kanvas tak terbatas (<em>infinite whiteboard</em>). Di tengah layar terdapat topik utama (misal: Perang Dunia II). Seluruh kelas bekerja sama menarik cabang, menambahkan ikon, mengimpor gambar dari <em>browser</em> IFP, dan menyusun warna simpul <em>(node)</em> untuk merepresentasikan aliansi.
                  </li>
                  <li><strong>4. Sequencing the Story (Bahasa & Logika)</strong>
                    <br/>Untuk melatih alur cerita (plot), guru mengacak 8 adegan kunci dari sebuah novel ke dalam bentuk panel ilustrasi di layar sentuh. Siswa harus berdebat dan menggeser (<em>swipe</em>) panel-panel tersebut hingga membentuk urutan narasi orientasi, klimaks, dan resolusi yang logis.
                  </li>
                  <li><strong>5. Peta Konsep Rantai Kausal (Sebab-Akibat)</strong>
                    <br/>Siswa menyelidiki fenomena pemanasan global. Mereka menuliskan puluhan variabel (seperti "Emisi Karbon", "Pabrik", "Mencairnya Es", "Banjir Rob") di catatan digital kecil (<em>sticky notes</em>) di IFP. Lalu, mereka menarik garis tebal dan tipis dengan tinta digital untuk menunjukkan kuatnya hubungan sebab-akibat antar variabel tersebut.
                  </li>
                  <li><strong>6. Visual Math: Manipulasi Geometri</strong>
                    <br/>Alih-alih menghafal rumus luas, siswa menggunakan IFP untuk "memotong" jajaran genjang virtual secara digital dan memindahkan potongan segitiga dari sisi kiri ke sisi kanannya, membuktikan secara visual bahwa bentuk tersebut ekuivalen dengan persegi panjang.
                  </li>
                  <li><strong>7. "Spotlight" pada Dokumen Sejarah</strong>
                    <br/>Guru menayangkan salinan naskah kuno (misal: Teks Proklamasi tulisan tangan). Menggunakan fitur <em>Spotlight</em> (lampu sorot) atau <em>Magnifier</em> (kaca pembesar) pada IFP, layar digelapkan kecuali satu area kecil yang disorot oleh jari siswa, memaksa kelas untuk fokus melakukan analisis ejaan lama pada kalimat spesifik tersebut tanpa terdistraksi.
                  </li>
                  <li><strong>8. Anotasi Emosi (Pembelajaran Sosial Emosional)</strong>
                    <br/>Sebuah foto <em>close-up</em> raut wajah seseorang ditampilkan di layar (misal: tokoh dalam cerita). Siswa maju dan menggambar garis panah dari mata, alis, dan postur bahu ke ruang kosong di IFP, lalu mendeskripsikan secara visual bahasa tubuh apa yang menandakan kecemasan, mendukung <a href="/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articlePseIfp', '/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">kecerdasan sosial emosional</a>.
                  </li>
                  <li><strong>9. Data Dashboarding (Matematika / IPS)</strong>
                    <br/>Kelas melakukan survei langsung. Data dikompilasi, dan IFP menampilkan tabel mentah. Siswa menggunakan fitur layar sentuh untuk mengubah tabel tersebut secara instan menjadi diagram lingkaran (<em>pie chart</em>) atau diagram batang, memvisualisasikan proporsi data agar lebih mudah dibaca.
                  </li>
                  <li><strong>10. Visual Exit Ticket (Penilaian Formatif)</strong>
                    <br/>Di akhir kelas, guru meminta siswa untuk "menggambar" (bukan menulis) satu konsep yang baru mereka pelajari hari ini di tablet mereka. Gambar-gambar tersebut kemudian di-<em>cast</em> (dikirim secara nirkabel) ke layar IFP, membentuk sebuah mosaik pemahaman kelas sebagai <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif visual</a>.
                  </li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Skenario Pembelajaran Visual 2 JP: "Misteri Siklus Air" (Sains SD)</h2>
                <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-rose-200 pb-2">Skenario Praktis 2 JP (70-80 Menit) - Aplikasi Visual Thinking</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Apresiasi Visual Awal (10 Menit):</strong> Guru membuka kelas dengan mematikan lampu dan menampilkan video <em>time-lapse</em> 4K tanpa suara di IFP: awan yang berkumpul tebal lalu hujan turun. Guru menggunakan rutinitas <em>See-Think-Wonder</em>. Siswa bergiliran mengetuk area video untuk memberhentikannya sesaat (<em>pause</em>) dan mencatat apa yang mereka lihat langsung di atas video menggunakan alat anotasi transparan IFP.</li>
                    <li><strong>Membangun Model Visual (25 Menit):</strong> Layar dibersihkan dan diganti dengan latar belakang pemandangan gunung dan laut kosong (<em>blank landscape</em>). Ada ikon-ikon terpisah: Matahari, Panah Uap Air, Awan Hujan, Rintik Air. Perwakilan siswa maju dan memposisikan komponen-komponen tersebut secara logis. Mereka menghubungkan ikon matahari dengan laut menggunakan pena merah (Evaporasi) dan awan dengan tanah menggunakan pena biru (Presipitasi).</li>
                    <li><strong>Analisis "What If" (20 Menit):</strong> Guru menyentuh layar dan menghapus area pohon/hutan (simulasi penebangan liar). Guru bertanya, <em>"Secara visual, panah mana yang akan hilang jika hutannya ditebang?"</em> Siswa menghapus tanda panah Transpirasi. Melalui manipulasi visual ini, siswa memahami dampak deforestasi tanpa perlu membaca teks yang panjang.</li>
                    <li><strong>Refleksi Visual (15 Menit):</strong> Tiap siswa secara mandiri menggambar ulang model siklus air di buku mereka berdasarkan memori dari IFP. Sebagai penutup, kelas memilih satu lukisan siswa untuk di-<em>scan</em> dan dipajang di layar IFP sebagai kesimpulan kelas hari itu.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesalahan Umum Guru dalam Pendekatan Visual</h2>
                <p>
                  Kegagalan utama dalam pembelajaran visual adalah <em>"Visual Overload"</em> (Beban Visual Berlebih). Memasukkan animasi mencolok, teks bergerak, warna-warni yang tidak memiliki tujuan pengkodean, dan gambar dekoratif (<em>clip-art</em>) justru akan membuyarkan konsentrasi siswa. Visual harus fungsional, bukan sekadar dekorasi. 
                </p>
                <p>
                  Gunakan prinsip <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">Negative Space (Ruang Kosong)</a> di layar Anda. Jangan takut membiarkan 60% layar IFP Anda tetap putih bersih. Ruang kosong tersebut memandu mata siswa tepat ke arah objek atau model yang sedang dianalisis.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Checklist Kesiapan Pembelajaran Visual</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-rose-500 mr-2">✓</span> Apakah gambar atau foto yang ditampilkan di IFP memiliki resolusi minimal 1080p agar tidak pecah saat di-<em>zoom</em>?</li>
                  <li><span className="text-rose-500 mr-2">✓</span> Apakah <em>graphic organizer</em> (peta konsep) memiliki ruang yang cukup lebar untuk ditulisi oleh jari tangan siswa (mengingat tulisan jari lebih besar dari tulisan spidol)?</li>
                  <li><span className="text-rose-500 mr-2">✓</span> Apakah rutinitas analisis gambar (seperti pertanyaan VTS) lebih berfokus pada "meminta bukti visual" daripada sekadar mencari satu jawaban benar?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
                <p>
                  Mengadopsi <strong>Pembelajaran Berbasis Visual menggunakan IFP</strong> berarti menggeser peran layar dari sekadar alat penyaji teks menjadi kanvas kognitif. Ketika pikiran siswa yang awalnya tersembunyi dapat dituangkan menjadi gambar, ditarik menjadi garis penghubung, dan dikelompokkan secara warna pada satu layar besar, ruang kelas berubah menjadi lebih inklusif. Di sinilah guru benar-benar "melihat" proses berpikir anak didiknya, dan di sanalah intervensi pembelajaran paling bermakna dapat dilakukan.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleVisualIfp;
