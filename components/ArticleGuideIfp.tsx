import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleGuideIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleGuideIfp: React.FC<ArticleGuideIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Panduan Menggunakan IFP untuk Pembelajaran Interaktif di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan langkah demi langkah cara menggunakan IFP di kelas untuk menciptakan aktivitas belajar menggunakan layar sentuh yang interaktif dan kolaboratif."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas');

    // Structured Data for Article
    const scriptId = 'article-guide-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Panduan Menggunakan IFP untuk Pembelajaran Interaktif di Kelas",
          "description": "Panduan langkah demi langkah cara menggunakan IFP di kelas untuk aktivitas pembelajaran.",
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
              "name": "Panduan Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas"
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
      if (existingScript) existingScript.remove();
      const addedScript = document.getElementById(scriptId);
      if (addedScript) addedScript.remove();
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
              <li aria-current="page" className="text-[#0C1A69]">Panduan Menggunakan IFP</li>
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
              <span className="bg-[#81D4FA] text-[#0C1A69] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Panduan Mengajar</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Panduan Menggunakan IFP untuk Pembelajaran Interaktif di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-blue-400 pl-4">
                "Transisi dari papan tulis konvensional menuju Interactive Flat Panel (IFP) seringkali menemui tantangan. Kuncinya bukan pada seberapa canggih alat tersebut, melainkan pada bagaimana guru memanfaatkannya untuk memicu interaksi dan keterlibatan siswa secara maksimal."
              </p>

              <p>
                Banyak sekolah kini telah dilengkapi dengan perangkat <strong>Interactive Flat Panel untuk pembelajaran</strong>. Namun, seringkali perangkat canggih ini hanya digunakan sebagai pengganti proyektor untuk menampilkan presentasi statis. Artikel ini dirancang khusus untuk memandu para pendidik tentang <strong className="text-[#0C1A69]">cara menggunakan IFP di kelas</strong> secara optimal, mengubahnya dari sekadar layar tayang menjadi pusat <em>pembelajaran interaktif</em> yang dinamis.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 my-6 text-sm">
                <strong>💡 Baca juga:</strong> <a href="/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpMedia', '/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">Cara Memaksimalkan IFP sebagai Media Pembelajaran Interaktif</a>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu IFP dalam Pembelajaran?</h2>
              <p>
                IFP (Interactive Flat Panel) adalah evolusi dari <em>interactive whiteboard</em> (papan tulis interaktif) tradisional. Berbeda dengan smartboard versi lama yang membutuhkan proyektor eksternal dan kalibrasi bayangan, IFP adalah layar sentuh interaktif mandiri yang memiliki sistem operasi internal (seperti Android atau Windows). Dengan layar sentuh besar beresolusi tinggi dan fitur <em>multi-touch</em>, perangkat ini memungkinkan beberapa siswa menyentuh, menggambar, dan berinteraksi secara bersamaan tanpa delay.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Persiapan Sebelum Menggunakan IFP di Kelas</h2>
              <p>
                Sebelum memulai <strong>pembelajaran interaktif dengan IFP</strong>, penting untuk memperhatikan aspek manajemen kelas (<em>classroom management</em>):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Posisi Layar:</strong> Pastikan IFP terpasang pada ketinggian yang dapat dijangkau oleh tangan siswa (terutama untuk jenjang PAUD dan SD), atau sediakan bangku pijakan yang aman.</li>
                <li><strong>Kalibrasi Stylus:</strong> Pastikan <em>stylus</em> sentuh berfungsi dengan baik. Meskipun bisa menggunakan jari, <em>stylus</em> membantu melatih motorik halus siswa dalam menulis.</li>
                <li><strong>Koneksi Internet:</strong> Banyak media pembelajaran digital memerlukan koneksi internet yang stabil agar dapat dimuat dengan cepat.</li>
                <li><strong>Manajemen Perhatian:</strong> Tetapkan aturan kelas kapan siswa boleh maju menyentuh layar dan kapan mereka harus fokus ke instruksi guru.</li>
              </ul>

              <AdSenseInArticle />

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Cara Menggunakan IFP dalam Kegiatan Pembelajaran</h2>
              <p>
                Cara menggunakan IFP di kelas sangat bervariasi bergantung pada mata pelajaran. Secara umum, guru bisa memanfaatkan fitur <em>whiteboarding digital</em> untuk menjelaskan konsep matematika, atau menggunakan fitur pembagian layar (<em>split-screen</em>) untuk membandingkan dua dokumen secara bersamaan saat pelajaran bahasa.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Contoh Aktivitas Pembelajaran dengan IFP</h2>
              <p>
                Alih-alih menyuruh siswa duduk diam, guru dapat merancang <strong>aktivitas belajar menggunakan layar sentuh</strong> seperti:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Mind Mapping Digital:</strong> Ajak siswa maju satu per satu untuk menambahkan cabang pemikiran pada peta konsep (mind map) raksasa di kelas.</li>
                <li><strong>Simulasi Sains:</strong> Putar model 3D anatomi manusia atau tata surya, biarkan siswa mencubit (<em>pinch-to-zoom</em>) layar untuk melihat detail lebih dekat.</li>
                <li><strong>Latihan Tarik-Cocok (Drag and Drop):</strong> Cocokkan gambar hewan dengan nama makanannya. Gerakan menarik objek di layar sentuh besar terbukti merangsang memori kinestetik siswa.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Menggunakan IFP untuk Diskusi dan Kolaborasi</h2>
              <p>
                Keunggulan utama IFP adalah fitur <em>multi-touch</em> yang mendukung hingga 20-40 titik sentuh sekaligus. Ini adalah fondasi dari <strong>pembelajaran kolaboratif</strong>. Guru dapat membagi layar menjadi 4 zona dan mengundang 4 siswa maju bersamaan ke depan smartboard untuk memecahkan soal secara kompetitif namun sehat. Diskusi kelas menjadi lebih hidup ketika siswa diberi otoritas untuk berinteraksi dengan materi.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Menggunakan IFP untuk Asesmen Formatif</h2>
              <p>
                Asesmen formatif tidak harus selalu menggunakan kertas. Guru bisa memberikan kuis interaktif langsung di layar. Dengan memberikan umpan balik (<em>feedback</em>) instan dari sistem aplikasi yang ditampilkan di layar interaktif, siswa bisa langsung mengetahui di mana letak kesalahan pemahaman mereka tanpa rasa malu.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Menggunakan Game Edukasi pada IFP</h2>
              <p>
                Salah satu metode paling ampuh untuk meningkatkan keterlibatan siswa adalah melalui gamifikasi dan <em>ice breaking</em>. Guru dapat memanfaatkan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">koleksi game edukasi IFP</a> yang tersedia secara daring tanpa perlu instalasi aplikasi yang berat.
              </p>
              <p>
                Menggunakan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game IFP gratis</a> di sela-sela pergantian jam pelajaran dapat menyegarkan kembali fokus siswa. Selain menyenangkan, sebuah <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game edukasi untuk IFP</a> yang dirancang dengan baik tetap menyisipkan nilai-nilai logika, literasi, atau numerasi tersembunyi.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Tips Agar IFP Tidak Hanya Menjadi Layar Presentasi</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kurangi Teks, Perbanyak Visual:</strong> Jangan tampilkan paragraf panjang. IFP adalah medium visual; perbanyak bagan, gambar interaktif, dan video pendek.</li>
                <li><strong>Desain Panggung Pembelajaran:</strong> Jadikan IFP sebagai pusat panggung, di mana siswa menjadi aktor utamanya. Guru bertindak sebagai sutradara yang mengarahkan (fasilitator).</li>
                <li><strong>Libatkan Audio:</strong> IFP modern memiliki speaker berkualitas. Gunakan efek suara saat aktivitas kuis agar sesi gamifikasi terasa lebih nyata.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Kesimpulan</h2>
              <p>
                Mengetahui cara menggunakan IFP di kelas secara efektif adalah keterampilan pedagogik penting bagi guru di era digital. Keberhasilan <strong>penggunaan IFP di sekolah</strong> tidak diukur dari seberapa sering alat itu dinyalakan, melainkan dari seberapa sering tangan siswa berinteraksi dengan layar tersebut. 
                Dengan mengintegrasikan strategi kolaboratif, asesmen interaktif, dan media pembelajaran IFP yang bervariasi, kita dapat menciptakan ruang kelas yang benar-benar hidup, interaktif, dan menstimulasi semangat belajar anak.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleGuideIfp;
