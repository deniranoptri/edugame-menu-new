import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleIfpMediaProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleIfpMedia: React.FC<ArticleIfpMediaProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cara Memaksimalkan IFP sebagai Media Pembelajaran Interaktif | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan lengkap cara memaksimalkan IFP (Interactive Flat Panel) sebagai media pembelajaran interaktif di kelas, dari game edukasi hingga asesmen formatif."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif');

    // Structured Data for Article
    const scriptId = 'article-structured-data';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Cara Memaksimalkan IFP sebagai Media Pembelajaran Interaktif",
          "description": "Panduan lengkap memanfaatkan layar sentuh besar di kelas untuk aktivitas pembelajaran interaktif.",
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
              "name": "Cara Memaksimalkan IFP",
              "item": window.location.origin + "/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif"
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
              <li aria-current="page" className="text-[#0C1A69]">Media Pembelajaran IFP</li>
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
              <span className="bg-[#81D4FA] text-[#0C1A69] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Artikel Edukasi</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Cara Memaksimalkan IFP sebagai Media Pembelajaran Interaktif
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-blue-400 pl-4">
                "Hadirnya Interactive Flat Panel (IFP) di kelas seharusnya bukan hanya untuk menggantikan fungsi proyektor, melainkan untuk mengubah paradigma pembelajaran menjadi lebih dua arah, kolaboratif, dan menyenangkan."
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Apa Itu IFP dalam Pembelajaran?</h2>
              <p>
                <strong>Interactive Flat Panel (IFP)</strong> atau layar sentuh interaktif besar adalah teknologi yang semakin banyak digunakan di sekolah-sekolah modern. Secara sederhana, IFP mirip dengan tablet berukuran raksasa yang diletakkan di depan kelas. Berbeda dengan proyektor atau papan tulis putih biasa, IFP memungkinkan sentuhan langsung, interaksi dengan objek digital, dan akses tanpa batas ke berbagai media pembelajaran digital.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Mengapa IFP Cocok sebagai Media Pembelajaran Interaktif?</h2>
              <p>
                Penggunaan layar sentuh besar di kelas memberikan keuntungan yang signifikan dibandingkan metode tradisional. Pertama, <strong>pembelajaran interaktif</strong> terbukti secara klinis mampu meningkatkan atensi dan retensi materi. Kedua, layar sentuh (touchscreen) memberikan pengalaman belajar kinestetik; siswa tidak hanya melihat dan mendengar, tetapi juga menyentuh dan berpartisipasi. Ketiga, fitur <em>multi-touch</em> memungkinkan beberapa siswa maju ke depan dan berkolaborasi sekaligus di satu smartboard.
              </p>

              <AdSenseInArticle />

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Cara Menggunakan IFP dalam Kegiatan Pembelajaran</h2>
              
              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Presentasi dan Eksplorasi Materi</h3>
              <p>
                Jangan batasi penggunaan IFP hanya untuk menampilkan slide statis. Guru dapat menggunakan alat bantu visual, peta interaktif, atau model 3D yang dapat diputar, di-zoom, dan dijelajahi. Media pembelajaran untuk IFP harus memberikan ruang bagi siswa untuk bertanya dan melihat perubahan visual secara <em>real-time</em>.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Aktivitas Interaktif</h3>
              <p>
                Jadikan kelas lebih hidup dengan aktivitas kelas interaktif. Misalnya, meminta siswa menarik dan melepas (<em>drag and drop</em>) kata-kata untuk membentuk kalimat, mencocokkan gambar, atau menyelesaikan teka-teki logika bersama.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Kolaborasi Siswa</h3>
              <p>
                Berkat teknologi multi-touch, guru dapat membagi layar menjadi beberapa area dan meminta 2 hingga 4 siswa maju bersamaan. Mereka dapat saling berlomba menyelesaikan soal matematika atau bekerja sama menyusun diagram, sehingga memupuk jiwa pembelajaran kolaboratif.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Asesmen Formatif</h3>
              <p>
                Mengevaluasi pemahaman siswa kini bisa dilakukan tanpa membebani mereka dengan tes tertulis yang menegangkan. Kuis digital cepat di akhir sesi pembelajaran berfungsi sebagai asesmen formatif yang menyenangkan sekaligus memberikan laporan seketika kepada guru.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Ice Breaking dan Game Edukasi</h3>
              <p>
                Menjaga konsentrasi siswa adalah tantangan nyata. Menyisipkan <em>ice breaking</em> atau game edukasi layar sentuh sangat efektif untuk mengembalikan fokus mereka di sela-sela materi yang berat.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Memanfaatkan Game Edukasi pada IFP</h2>
              <p>
                Salah satu cara terbaik untuk memaksimalkan alat ini adalah dengan menggunakan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">koleksi game edukasi IFP</a>. Platform seperti Papan Interaktif menyediakan berbagai <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game IFP gratis</a> yang dirancang khusus untuk layar sentuh besar kelas.
              </p>
              <p>
                Dengan integrasi game edukasi IFP ini, guru tidak perlu repot melakukan instalasi perangkat lunak yang rumit. Cukup buka browser di IFP, pilih game yang sesuai dengan target kompetensi, dan ajak siswa berpartisipasi. <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">Game untuk IFP</a> mampu mengubah suasana kelas yang kaku menjadi ruang eksplorasi yang ceria.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Tips agar Penggunaan IFP Tidak Sekadar Menjadi Layar Presentasi</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Gunakan Stylus atau Sentuhan Langsung:</strong> Biasakan siswa untuk maju ke depan dan menulis, menggambar, atau menggeser objek secara langsung di layar.</li>
                <li><strong>Libatkan Fisik:</strong> Biarkan aktivitas kinestetik terjadi. Pembelajaran yang melibatkan pergerakan fisik sangat efektif untuk anak usia dini dan sekolah dasar.</li>
                <li><strong>Variasikan Media:</strong> Selingilah presentasi materi dengan simulasi interaktif, video, atau kuis singkat untuk menjaga alur atensi.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
              <p>
                IFP di kelas adalah investasi besar yang potensinya baru akan terbuka maksimal apabila digunakan secara tepat. Dengan menggeser paradigma dari "alat bantu presentasi" menjadi "media pembelajaran interaktif IFP", pendidik dapat menciptakan ekosistem kelas yang modern, ramah anak, dan sejalan dengan kebutuhan perkembangan digital. Guru, mari maksimalkan setiap inci dari layar tersebut untuk merangsang rasa ingin tahu siswa!
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleIfpMedia;
