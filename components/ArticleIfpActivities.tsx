import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleIfpActivitiesProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleIfpActivities: React.FC<ArticleIfpActivitiesProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ide Aktivitas Pembelajaran Interaktif Menggunakan IFP di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Kumpulan ide aktivitas pembelajaran interaktif menggunakan IFP di kelas, mulai dari kuis, drag-and-drop, hingga penggunaan media pembelajaran dan game edukasi IFP."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas');

    // Structured Data for Article
    const scriptId = 'article-ifp-activities-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ide Aktivitas Pembelajaran Interaktif Menggunakan IFP di Kelas",
          "description": "Berbagai ide aktivitas pembelajaran interaktif menggunakan layar sentuh IFP di kelas.",
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
              "name": "Aktivitas Pembelajaran dengan IFP",
              "item": window.location.origin + "/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas"
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
              <li aria-current="page" className="text-[#0C1A69]">Aktivitas Pembelajaran dengan IFP</li>
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
              <span className="bg-[#81D4FA] text-[#0C1A69] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Aktivitas Kelas</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Ide Aktivitas Pembelajaran Interaktif Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-blue-400 pl-4">
                "Kehadiran layar sentuh besar di ruang kelas bukan hanya tentang peningkatan estetika visual, melainkan tentang penciptaan ruang di mana siswa dapat berkolaborasi, bergerak, dan menyentuh pengetahuan secara langsung."
              </p>

              <p>
                Bagi guru yang telah menguasai dasar-dasar <a href="/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleGuideIfp', '/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas'); }} className="text-blue-700 hover:underline font-bold">panduan menggunakan IFP untuk pembelajaran interaktif</a>, tantangan berikutnya adalah merancang <strong>aktivitas pembelajaran dengan IFP</strong> yang nyata dan aplikatif. Mengubah Interactive Flat Panel (IFP) dari sekadar alat presentasi searah menjadi pemicu <em>pembelajaran interaktif IFP</em> membutuhkan kreativitas pedagogis. Artikel ini akan menyajikan berbagai ide praktis yang bisa langsung Anda terapkan.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa yang Dimaksud dengan Aktivitas Pembelajaran Menggunakan IFP?</h2>
              <p>
                <strong>Aktivitas IFP di kelas</strong> mengacu pada semua bentuk kegiatan belajar mengajar di mana siswa berinteraksi langsung—baik secara fisik maupun mental—dengan konten yang ditampilkan pada layar sentuh besar (smartboard) di depan kelas. Ini melampaui kegiatan pasif seperti menonton video atau membaca slide; siswa didorong untuk menyentuh, menggeser objek, menjawab pertanyaan, dan berdiskusi berdasarkan stimulus visual di layar.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Mengapa IFP Dapat Membuat Pembelajaran Lebih Interaktif?</h2>
              <p>
                Alasan utama <strong>media pembelajaran IFP</strong> sangat efektif adalah karena kemampuannya mengakomodasi berbagai gaya belajar. Gaya belajar visual dimanjakan oleh resolusi tinggi dan warna tajam. Gaya belajar auditori didukung oleh audio built-in. Yang terpenting, gaya belajar kinestetik akhirnya terfasilitasi melalui sentuhan fisik (<em>touch</em>) pada <em>interactive whiteboard</em>, membuat siswa lebih mudah mengingat konsep yang diajarkan karena mereka mengalami pergerakan otot.
              </p>

              <AdSenseInArticle />

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. 7 Ide Aktivitas Pembelajaran dengan IFP di Kelas</h2>
              
              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Eksplorasi dan Observasi Visual</h3>
              <p>
                Gunakan peta dunia digital atau model 3D anatomi. Minta siswa secara bergantian maju untuk memperbesar area tertentu menggunakan jari (<em>pinch-to-zoom</em>), lalu minta mereka menjelaskan apa yang mereka observasi kepada teman-temannya.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Kuis Interaktif</h3>
              <p>
                Tampilkan kuis pilihan ganda yang cerah dan bersuara. Alih-alih menjawab di kertas, mintalah perwakilan kelompok untuk berlari kecil ke depan dan menyentuh jawaban yang benar secara langsung di <em>layar sentuh untuk pembelajaran</em>.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Diskusi dan Pemecahan Masalah Bersama</h3>
              <p>
                Tampilkan sebuah studi kasus berupa gambar berseri atau infografis kompleks. Guru kemudian memberikan spidol digital (stylus) kepada siswa untuk melingkari, mencoret, atau memberikan anotasi pada bagian yang menjadi akar masalah.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Aktivitas Drag-and-Drop / Mencocokkan</h3>
              <p>
                Aktivitas ini sangat ideal untuk jenjang PAUD dan SD. Misalnya, mencocokkan gambar hewan dengan jenis makanannya, atau menarik kata ke dalam kotak struktur kalimat yang rumpang. Interaksi fisik ini membuat konsep abstrak menjadi sangat konkret.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Permainan Edukasi sebagai Penguatan Pembelajaran</h3>
              <p>
                Integrasikan <strong>game edukasi IFP</strong> untuk menguji pemahaman siswa di akhir pelajaran. Permainan edukatif menghadirkan tantangan dengan umpan balik langsung, yang memicu hormon dopamin dan meningkatkan retensi materi.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Presentasi dan Demonstrasi Siswa</h3>
              <p>
                Ubah peran. Mintalah siswa menyiapkan materi presentasi mereka sendiri, lalu izinkan mereka menggunakan IFP untuk menjelaskan layaknya seorang guru, memanfaatkan fitur anotasi untuk menandai poin-poin penting.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Refleksi dan Asesmen Formatif</h3>
              <p>
                Di akhir kelas, buka halaman <em>whiteboard</em> kosong. Minta setiap siswa yang keluar kelas untuk menuliskan satu kata atau menggambar satu emoticon yang mewakili perasaan mereka terhadap pelajaran hari itu menggunakan jari mereka di pojok layar.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Menggunakan IFP untuk Pembelajaran Kolaboratif</h2>
              <p>
                Fitur <em>multi-touch</em> yang mendukung hingga 20-40 sentuhan memungkinkan penggabungan aktivitas kolaboratif. Bagilah layar IFP menjadi 2 atau 4 kuadran. Undang beberapa siswa secara bersamaan ke depan untuk mengerjakan soal yang berbeda, atau bekerja sama menyelesaikan satu teka-teki logika. Guru bertindak sebagai fasilitator yang berkeliling memandu jalannya diskusi, sementara siswa belajar dari proses teman-temannya (<em>peer learning</em>).
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Menggunakan Game Edukasi sebagai Bagian dari Aktivitas Pembelajaran</h2>
              <p>
                Gamifikasi bukan berarti membuang waktu belajar. Anda bisa mengunjungi <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">koleksi game edukasi IFP</a> di portal ini untuk menemukan modul permainan HTML5 interaktif yang siap dimainkan tanpa instalasi.
              </p>
              <p>
                Menyisipkan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game IFP gratis</a> ke dalam alur RPP (Rencana Pelaksanaan Pembelajaran) sangat membantu dalam transisi antar mata pelajaran (<em>ice breaking</em>). Selain itu, menggunakan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game untuk IFP</a> juga melatih kolaborasi dan sportivitas anak sejak dini.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 my-6 text-sm">
                <strong>💡 Baca juga:</strong> <a href="/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpMedia', '/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">Cara Memaksimalkan IFP sebagai Media Pembelajaran Interaktif</a>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Contoh Skenario Pembelajaran dengan IFP</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Skenario Pembukaan:</strong> Tampilkan sebuah gambar fenomena alam yang misterius. Minta siswa maju satu per satu menunjuk bagian yang menurut mereka aneh atau menarik, lalu kumpulkan jawaban mereka dalam bentuk <em>mind map</em> di sebelah gambar.</li>
                <li><strong>Skenario Kegiatan Inti:</strong> Bagilah kelas menjadi dua kelompok besar (Duel Mode). Berikan kuis logika secara bergantian di layar. Sorak-sorai saat menjawab benar membangun semangat belajar yang luar biasa.</li>
                <li><strong>Skenario Penutup:</strong> Gunakan aktivitas tarik-cocok (<em>drag and drop</em>) sebagai tiket keluar kelas. Siswa hanya boleh istirahat jika berhasil mencocokkan satu konsep yang dipelajari hari itu di papan interaktif.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Tips Agar Aktivitas IFP Tidak Sekadar Menjadi Presentasi</h2>
              <p>
                Kunci utama <strong>penggunaan IFP di kelas</strong> adalah pada frekuensi interaksi. Jangan biarkan layar IFP hanya dikendalikan oleh guru. <strong>Interactive Flat Panel untuk pembelajaran</strong> dirancang agar tahan terhadap ketukan dan sentuhan siswa. Selalu ajukan pertanyaan pemantik, berikan <em>stylus</em> kepada siswa, dan biasakan mereka untuk berdiri, bergerak, dan menyentuh pengetahuan yang sedang mereka diskusikan. 
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Kesimpulan</h2>
              <p>
                Menghidupkan <strong>aktivitas pembelajaran interaktif</strong> tidak serta-merta terjadi hanya karena ada IFP di dalam kelas. Alat canggih membutuhkan metode yang relevan. Dengan memadukan <em>game edukasi IFP</em>, sesi kolaboratif, dan keberanian guru untuk mengubah pola interaksi menjadi dua arah, IFP dapat benar-benar mentransformasi ruang kelas tradisional menjadi laboratorium ide yang menyenangkan bagi siswa.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleIfpActivities;
