import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleSteamIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleSteamIfp: React.FC<ArticleSteamIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran STEAM Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan lengkap implementasi pembelajaran STEAM (Science, Technology, Engineering, Art, Mathematics) terpadu menggunakan Interactive Flat Panel di ruang kelas."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-steam-menggunakan-ifp');

    const idUrl = 'https://papaninteraktif.com/jurnal-guru/pembelajaran-steam-menggunakan-ifp';
    const enUrl = 'https://papaninteraktif.com/en/journal/steam-learning-using-interactive-flat-panel';

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


    const scriptId = 'article-steam-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran STEAM Menggunakan IFP",
          "description": "Panduan lengkap implementasi pembelajaran STEAM (Science, Technology, Engineering, Art, Mathematics) terpadu menggunakan Interactive Flat Panel di ruang kelas.",
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
            "@id": window.location.origin + "/jurnal-guru/pembelajaran-steam-menggunakan-ifp"
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
              "name": "Pembelajaran STEAM Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-steam-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran STEAM</li>
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
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Metodologi Interaktif</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Pembelajaran STEAM Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-teal-400 pl-4">
                  "Dunia nyata tidak memisahkan masalah ke dalam 'jam pelajaran Sains' dan 'jam pelajaran Seni'. Masalah nyata menuntut solusi lintas disiplin. Melalui pendekatan STEAM, kita tidak sekadar mengajarkan teori, melainkan mendidik para inovator masa depan. Dan tidak ada kanvas inovasi yang lebih kuat di ruang kelas modern selain Interactive Flat Panel."
                </p>

                <p>
                  STEAM (<em>Science, Technology, Engineering, Art, and Mathematics</em>) telah menjadi salah satu kerangka pedagogis paling revolusioner di abad ke-21. Pendekatan ini tidak mengajarkan kelima disiplin ilmu tersebut secara terpisah, melainkan mengintegrasikannya ke dalam sebuah pengalaman pemecahan masalah (<em>problem-solving</em>) yang utuh. Namun, mengorkestrasi proyek STEAM yang melibatkan desain visual, perhitungan data, dan simulasi fisika sering kali menuntut banyak perangkat dan logistik yang rumit. Di sinilah <strong>pembelajaran STEAM menggunakan IFP</strong> (<em>Interactive Flat Panel</em>) menjadi solusi integratif yang brilian. 
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Mengapa IFP adalah Episentrum Proyek STEAM?</h2>
                <p>
                  IFP bukan sekadar proyektor sentuh. IFP adalah pusat komputasi visual. Dalam sebuah proyek STEAM, siswa memerlukan tempat untuk bertukar gagasan (<em>brainstorming</em>), menggambar sketsa rancang bangun (<em>engineering design</em>), memutar simulasi fisika 3D, dan memasukkan data matematis ke dalam <em>spreadsheet</em>. Alih-alih siswa terpaku pada layar laptop mereka masing-masing secara individual, IFP menarik mereka ke depan kelas untuk melakukan <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran kolaboratif</a> dalam skala besar.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Membedah Komponen STEAM di Layar Interaktif</h2>
                <p>Mari kita lihat bagaimana setiap elemen STEAM difasilitasi oleh fitur-fitur IFP:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Science (Sains):</strong> IFP memungkinkan siswa memutar video mikroskopis atau simulasi reaksi kimia resolusi tinggi, yang dapat dihentikan (<em>pause</em>) lalu dianotasi (dicoret) untuk menandai proses osmosis atau pergerakan elektron.</li>
                  <li><strong>Technology (Teknologi):</strong> IFP sendiri adalah puncak teknologi edukasi. Selain itu, fitur <em>screen mirroring/screencast</em> memungkinkan siswa memproyeksikan kode pemrograman (<em>coding</em>) yang mereka buat di tablet/laptop mereka langsung ke layar utama untuk di-<em>debug</em> bersama kelas.</li>
                  <li><strong>Engineering (Teknik):</strong> Aplikasi <em>whiteboarding</em> pada IFP dilengkapi dengan alat penggaris, jangka, dan kanvas tak terbatas. Ini adalah ruang sempurna untuk menggambar cetak biru (<em>blueprint</em>) dari prototipe yang akan mereka buat.</li>
                  <li><strong>Art (Seni):</strong> Seni dalam STEAM memberikan ruang bagi estetika, desain antarmuka, dan empati pengguna. Di IFP, siswa menggunakan palet warna digital tanpa batas untuk membuat poster presentasi, mendesain logo proyek, atau mengeksplorasi proporsi visual (<em>golden ratio</em>).</li>
                  <li><strong>Mathematics (Matematika):</strong> Mulai dari kalkulator grafis yang dapat disentuh, manipulatif pecahan, hingga grafik 3D yang dapat diputar 360 derajat. Matematika berubah dari sekadar angka di kertas menjadi bentuk visual interaktif yang konkret melalui <a href="/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleMatematikaIfp', '/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">aktivitas matematika IFP</a>.</li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Siklus Rekayasa (Engineering Design Process) di IFP</h2>
                <p>
                  Proyek STEAM selalu berakar pada EDP (<em>Engineering Design Process</em>). Alur kerjanya adalah: <strong>Ask → Imagine → Plan → Create → Improve</strong>. Guru dapat menggunakan fitur halaman (<em>pages</em>) pada papan tulis IFP untuk memisahkan setiap tahap ini. Halaman pertama digunakan untuk menempel <em>sticky notes</em> "Ask/Pertanyaan", halaman kedua untuk "Plan/Sketsa", dan halaman terakhir untuk mendokumentasikan "Improve/Evaluasi" melalui foto yang diambil dari kamera kelas (jika ada).
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Aktivitas Pembelajaran STEAM Interaktif</h2>
                <p>Berikut adalah 10 ide implementasi STEAM lintas disiplin menggunakan kapabilitas IFP:</p>

                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. Rancang Bangun Jembatan Tahan Gempa (S-E-M)</strong>
                    <br/>Guru menampilkan aplikasi simulasi fisika (seperti PhET). Siswa merancang struktur jembatan di IFP menggunakan batang digital, lalu memberikan beban gravitasi buatan untuk melihat tegangan (<em>tension</em>) matematis di layar, sebelum membuat maket aslinya dari stik es krim.
                  </li>
                  <li><strong>2. Coding Maze Challenge (T-M)</strong>
                    <br/>Tampilkan platform visual <em>block coding</em> (seperti Scratch) di IFP. Secara berkelompok, siswa maju ke layar dan menyeret blok perintah (Maju 3 langkah, Putar 90 derajat) untuk memandu karakter menavigasi labirin koordinat kartesius.
                  </li>
                  <li><strong>3. Anatomi Karya Seni (S-A)</strong>
                    <br/>Tampilkan lukisan klasik (misalnya Monalisa atau karya Van Gogh) dalam resolusi 4K. Siswa membedah "Sains di balik Seni" dengan mencoret layar menggunakan warna berbeda untuk menandai titik tumpu cahaya, simetri, dan pigmen warna yang digunakan.
                  </li>
                  <li><strong>4. Water Filter Blueprint (S-E-A)</strong>
                    <br/>Siswa ditantang membuat penyaring air kotor. Sebelum merakit alat riil, mereka harus mempresentasikan skema filternya di <em>whiteboard</em> IFP. Mereka menggambar lapisan kerikil, pasir, dan arang, serta merancang desain estetis tabung luarnya (Art).
                  </li>
                  <li><strong>5. Data Cuaca Real-Time (S-T-M)</strong>
                    <br/>Buka <em>browser</em> di IFP, akses satelit cuaca lokal. Siswa secara bergantian membaca data matematis (curah hujan, suhu, kelembaban udara). Mereka lalu membuka <em>spreadsheet</em> dan mengubah data tersebut menjadi grafik batang berwarna untuk disajikan ke audiens.
                  </li>
                  <li><strong>6. Animasi Stop-Motion Sel (S-T-A)</strong>
                    <br/>Siswa membuat karya seni dari plastisin berbentuk pembelahan sel (mitosis). Setiap fase difoto, lalu dikirim ke IFP. Di depan IFP, siswa menyusun foto-foto tersebut dalam urutan yang tepat dan menayangkannya sebagai animasi sambil merekam suara <em>voice-over</em>.
                  </li>
                  <li><strong>7. Kampanye Hemat Energi (S-A-M)</strong>
                    <br/>Siswa berhitung tagihan listrik sekolah (Matematika) berdasarkan data lampu (Sains). Lalu mereka merancang poster kampanye digital langsung menggunakan perangkat lunak grafis di IFP. Tipografi dan tata letaknya dipresentasikan di depan kelas (Art).
                  </li>
                  <li><strong>8. Pitching Layaknya Startup (Semua Elemen)</strong>
                    <br/>Puncak dari <a href="/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articlePjblIfp', '/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">pembelajaran berbasis proyek (PjBL)</a>. Siswa menggunakan IFP layaknya pengusaha Silicon Valley untuk mempresentasikan produk STEAM mereka (misal: alarm banjir buatan sendiri). Mereka menayangkan video produk, skema komponen, dan perhitungan biayanya.
                  </li>
                  <li><strong>9. Geometric Tessellation Art (M-A)</strong>
                    <br/>Menggabungkan pola geometri dan estetika mozaik. Siswa memanfaatkan alat pengganda (<em>clone/duplicate</em>) bentuk poligon di IFP untuk membuat pola ubin lantai (teselasi) tanpa celah, lalu mewarnainya dengan harmoni palet komplementer.
                  </li>
                  <li><strong>10. Interactive Circuit Board (S-T-E)</strong>
                    <br/>Menggunakan simulator sirkuit listrik. Siswa menarik garis di IFP yang berfungsi sebagai kabel maya, menyambungkan baterai, sakelar, dan bohlam lampu. Jika hitungan voltase dan resistansi benar (M), maka animasi lampu di IFP akan menyala.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Skenario Pembelajaran STEAM 2 JP: "Merancang Taman Kota Hijau"</h2>
                <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-teal-200 pb-2">Skenario Praktis 2 JP (70-80 Menit) - Taman Kota (SD/SMP)</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Tahap Ask (10 Menit):</strong> Guru menayangkan video <em>drone</em> tentang polusi udara di kota. Menggunakan fitur anotasi IFP, guru melingkari area lahan kosong. Pertanyaan pemantik: <em>"Bagaimana cara kita mendesain taman di lahan kosong ini agar menekan polusi sekaligus menjadi tempat rekreasi estetik?"</em></li>
                    <li><strong>B. Tahap Imagine (15 Menit):</strong> Siswa dibagi menjadi kelompok (arsitek, ahli botani, perencana keuangan). IFP dibagi 4 menggunakan <em>split-screen</em>, delegasi tiap kelompok maju menulis ide liar mereka secara simultan.</li>
                    <li><strong>C. Tahap Plan (20 Menit):</strong> IFP difungsikan sebagai meja gambar arsitek (Engineering & Math). Guru memproyeksikan grid kertas berpetak. Satu perwakilan kelompok menggambar denah taman (menghitung luas area pohon vs area bermain) sesuai skala (1 kotak = 1 meter).</li>
                    <li><strong>D. Tahap Create & Art (20 Menit):</strong> Kelompok memilih jenis tanaman yang menyerap karbon tinggi (Science). Mereka lalu merancang bentuk air mancur yang estetik (Art). Setiap keputusan digambar dan ditambahkan ke denah sentral di IFP.</li>
                    <li><strong>E. Tahap Improve / Evaluasi (15 Menit):</strong> Presentasi hasil denah final. Kelompok lain memberikan masukan kritis, "Apakah jalan ini tidak terlalu sempit untuk kursi roda?" Sebagai <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif</a>, sketsa interaktif tersebut diekspor (<em>save to QR/Cloud</em>) sebagai portofolio kelas.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Strategi Pengelolaan Alat dan Kebisingan</h2>
                <p>
                  Proyek STEAM rentan menyebabkan kelas menjadi riuh dan kacau. Pastikan ada delegasi peran yang jelas. Siapa yang menjadi <em>Project Manager</em>, siapa yang berhak maju menyentuh IFP, dan siapa yang bertugas mencatat hasil sketsa. Gunakan <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">strategi pengelolaan IFP</a> seperti "Hands-off timer" (saat timer berbunyi di layar, semua siswa harus meletakkan alat tulis dan dilarang menyentuh IFP selama guru memberikan instruksi lanjutan).
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Checklist Persiapan Guru (Pre-STEAM)</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-teal-500 mr-2">✓</span> Apakah <em>software</em>/simulasi pendukung (PhET, Scratch, Geogebra) sudah terinstal dan bisa dibuka di <em>browser</em> IFP?</li>
                  <li><span className="text-teal-500 mr-2">✓</span> Apakah skema kanvas pembagian ide sudah diatur (tidak berebut ruang di layar)?</li>
                  <li><span className="text-teal-500 mr-2">✓</span> Apakah integrasi 5 elemen (S-T-E-A-M) benar-benar seimbang, bukan sekadar pelajaran prakarya biasa?</li>
                  <li><span className="text-teal-500 mr-2">✓</span> Apakah jaringan Wi-Fi lokal stabil jika siswa akan melakukan <em>casting/mirroring</em> tugas mereka ke layar IFP?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
                <p>
                  Integrasi <strong>pembelajaran STEAM menggunakan IFP</strong> mendobrak tembok pemisah antar mata pelajaran. IFP berfungsi sebagai laboratorium digital, meja gambar arsitek, studio seni, dan pusat kendali data dalam waktu yang bersamaan. Dengan mengizinkan siswa berkolaborasi, berdebat, dan mendesain solusi secara langsung di atas layar interaktif, guru tidak lagi sekadar mendikte teori dari buku. Mereka sedang melatih generasi pemikir kritis yang siap menyelesaikan masalah nyata di masa depan dengan paduan sempurna antara logika sains, ketepatan matematika, efisiensi teknologi, ketahanan teknik, dan keindahan seni.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSteamIfp;
