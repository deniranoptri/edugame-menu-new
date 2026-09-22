import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleAssessmentIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleAssessmentIfp: React.FC<ArticleAssessmentIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cara Menggunakan IFP untuk Asesmen Formatif di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Pelajari cara menggunakan IFP untuk asesmen formatif di kelas melalui kuis interaktif, drag-and-drop, diskusi, exit ticket, dan refleksi pembelajaran."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas');

    const idUrl = 'https://papaninteraktif.com/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas';
    const enUrl = 'https://papaninteraktif.com/en/journal/formative-assessment-using-interactive-flat-panel';

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
    const scriptId = 'article-assessment-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Cara Menggunakan IFP untuk Asesmen Formatif di Kelas",
          "description": "Pelajari cara menggunakan IFP untuk asesmen formatif di kelas melalui kuis interaktif, drag-and-drop, diskusi, exit ticket, dan refleksi pembelajaran.",
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
              "name": "Asesmen Formatif dengan IFP",
              "item": window.location.origin + "/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas"
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
              <li aria-current="page" className="text-[#0C1A69]">Asesmen Formatif dengan IFP</li>
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
              <span className="bg-[#E1BEE7] text-[#0C1A69] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Pedagogi & Penilaian</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Cara Menggunakan IFP untuk Asesmen Formatif di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-purple-400 pl-4">
                "Asesmen formatif bukan sekadar memberi nilai, melainkan mengumpulkan informasi untuk memperbaiki proses belajar mengajar. Melalui Interactive Flat Panel (IFP), proses evaluasi ini bisa dilakukan secara visual, instan, dan kolaboratif."
              </p>

              <p>
                Setelah membahas implementasi IFP dalam berbagai mata pelajaran seperti <a href="/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleMathIfp', '/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Matematika</a>, <a href="/jurnal-guru/aktivitas-ipa-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIpaIfp', '/jurnal-guru/aktivitas-ipa-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">IPA</a>, <a href="/jurnal-guru/aktivitas-bahasa-indonesia-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleBahasaIfp', '/jurnal-guru/aktivitas-bahasa-indonesia-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Bahasa Indonesia</a>, hingga <a href="/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIpsIfp', '/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">IPS</a>, kini kita beranjak ke inti dari siklus pembelajaran: Asesmen Formatif. <strong>Asesmen formatif dengan IFP</strong> memberikan kesempatan bagi guru untuk mengecek pemahaman siswa tanpa harus menunggu ulangan harian. Artikel ini akan membahas berbagai ide menggunakan IFP sebagai alat bantu evaluasi yang dinamis.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Apa Itu Asesmen Formatif?</h2>
              <p>
                Asesmen formatif adalah evaluasi yang dilakukan selama proses pembelajaran berlangsung. Tujuannya bukan untuk memberikan angka akhir di rapor, melainkan untuk memberikan umpan balik (<em>feedback</em>) seketika. Sebuah siklus asesmen formatif yang baik mencakup: Tujuan Pembelajaran → Aktivitas → Respons Siswa → Analisis Guru → Umpan Balik → Tindak Lanjut.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Mengapa IFP Dapat Digunakan untuk Asesmen Formatif?</h2>
              <p>
                Banyak guru masih menganggap IFP hanya sebagai layar presentasi yang canggih atau sekadar alat untuk menampilkan video. Padahal, <em>asesmen interaktif dengan IFP</em> mampu mengubah dinamika kelas secara drastis. Dengan fitur sentuh ganda (<em>multi-touch</em>) dan integrasi perangkat lunak nirkabel, <strong>asesmen digital di kelas</strong> menjadi instan. Guru dapat melihat di mana letak kesulitan siswa, mengidentifikasi miskonsepsi secara <em>real-time</em>, dan langsung memodifikasi strategi mengajar pada jam pelajaran tersebut.
              </p>

              <AdSenseInArticle />

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Ide Aktivitas Asesmen Formatif dengan IFP</h2>
              <p>
                Berikut adalah beberapa contoh praktis pemanfaatan <strong>Interactive Flat Panel untuk asesmen</strong> di kelas:
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">1. Quick Check (Cek Pemahaman Kilat)</h3>
              <p>
                Di tengah-tengah penjelasan materi, berhentilah sejenak. Tampilkan satu pertanyaan singkat bergambar (kuis visual) di layar IFP. Minta perwakilan siswa untuk langsung menuliskan atau melingkari jawaban yang menurut mereka benar menggunakan <em>stylus</em> digital. Respons seketika ini memungkinkan guru mengukur sejauh mana kelas mengikuti alur penjelasan.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">2. Kuis Visual</h3>
              <p>
                Tinggalkan soal teks yang panjang. Tampilkan peta geografi, diagram fotosintesis, atau grafik matematika di layar. Berikan pertanyaan berbasis visual dan biarkan siswa berdiskusi sebelum menjawab. <strong>Kuis pembelajaran menggunakan IFP</strong> seperti ini sangat efektif untuk siswa dengan gaya belajar visual.
              </p>

              <h3 className="text-xl font-bold text-[#0C1A69] mt-6">3. Drag-and-Drop untuk Mengidentifikasi Miskonsepsi</h3>
              <p>
                Gunakan interaksi <em>drag-and-drop</em> untuk mengetahui miskonsepsi siswa. Buatlah area pemilahan di layar, misalnya: "Makhluk Hidup" vs "Benda Mati", atau "Produksi, Distribusi, Konsumsi". Munculkan berbagai ikon acak dan panggil siswa untuk mengelompokkannya secara langsung menggunakan layar sentuh IFP.
              </p>
              <p>
                Ketika seorang siswa meletakkan ikon di kategori yang salah, guru tidak langsung menyalahkan, melainkan melemparkan pertanyaan ke seluruh kelas: <em>"Apakah ada yang punya pendapat berbeda mengenai penempatan gambar ini?"</em> Proses diskusi yang lahir dari sini jauh lebih berharga daripada jawaban benar itu sendiri.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Diskusi Jawaban Secara Kolaboratif (Collaborative Response)</h2>
              <p>
                Manfaatkan fitur sentuhan jamak yang ada di IFP modern. Undang dua atau tiga kelompok sekaligus untuk maju ke depan. Berikan satu studi kasus atau soal pecahan (jika sedang belajar <a href="/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleMathIfp', '/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Matematika</a>) dan minta mereka menyelesaikan masalahnya berdampingan secara bersamaan di kanvas IFP.
              </p>
              <p>
                Aktivitas ini menjadikan IFP sebagai media sentral interaksi kelas, mengubah evaluasi yang tadinya bersifat individual menjadi <strong>penilaian interaktif menggunakan IFP</strong> yang komunal.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Exit Ticket Menggunakan IFP</h2>
              <p>
                Lima menit sebelum bel berbunyi, tayangkan "Exit Ticket" di layar utama. Pertanyaannya bisa sederhana:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Apa satu hal paling penting yang kamu pelajari hari ini?</li>
                <li>Apa satu konsep yang masih membingungkan?</li>
              </ul>
              <p>
                Jika siswa memiliki perangkat genggam atau Chromebook yang terhubung dengan IFP, mereka dapat mengirimkan jawaban singkat mereka ke layar IFP, yang akan bermunculan seperti <em>post-it notes</em> virtual. Ini adalah bentuk <strong>umpan balik pembelajaran menggunakan IFP</strong> yang sangat berharga untuk persiapan kelas esok harinya.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Refleksi Pembelajaran dengan Layar Sentuh</h2>
              <p>
                Bantu siswa merefleksikan proses belajar mereka. Tampilkan sebuah termometer visual atau meteran perasaan (<em>mood meter</em>). Siswa dapat menggunakan jari mereka untuk menandai di mana posisi keyakinan mereka terhadap materi hari ini: apakah di zona "sangat paham", "masih ragu", atau "butuh bantuan". Visualisasi <strong>refleksi pembelajaran menggunakan IFP</strong> membantu guru memetakan kesiapan kelas dengan sangat cepat.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Menggunakan Game Edukasi sebagai Bagian dari Asesmen</h2>
              <p>
                Asesmen tidak selalu harus menegangkan. Gamifikasi adalah jembatan emas antara bermain dan dievaluasi. Anda dapat menggunakan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">koleksi game edukasi IFP</a> yang tersedia sebagai sarana formatif yang menyenangkan.
              </p>
              <p>
                Sebuah <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game pembelajaran interaktif</a> yang mengusung mode kuis atau <em>time-attack</em> akan memicu antusiasme siswa sekaligus memberikan data kepada guru tentang penguasaan materi (misalnya <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game untuk IFP</a> dengan mode kompetisi regu). Tentu saja, penggunaan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">aktivitas game edukasi pada IFP</a> haruslah memiliki tujuan pedagogis yang selaras dengan indikator pencapaian kompetensi.
              </p>

              <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 my-6 text-sm">
                <strong>💡 Saran Pelaksanaan:</strong> Jika Anda baru pertama kali mencoba membawa IFP melampaui batas proyektor biasa, bacalah panduan <a href="/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpMedia', '/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">memaksimalkan IFP sebagai media pembelajaran interaktif</a> untuk mengatur kelas secara efektif.
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Tips agar Asesmen dengan IFP Tidak Sekadar Kuis</h2>
              <p>
                Tantangan terbesar menggunakan teknologi dalam evaluasi adalah jebakan untuk hanya sekadar memindahkan soal pilihan ganda dari kertas ke layar. Ingatlah bahwa tujuan <strong>asesmen pembelajaran interaktif</strong> di IFP adalah untuk menciptakan percakapan dan pemikiran kritis. 
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Berikan fokus pada proses (<em>how and why</em>), bukan hanya hasil akhirnya.</li>
                <li>Gunakan <strong>evaluasi siswa menggunakan layar sentuh</strong> untuk membedah langkah-langkah kerja atau alur logika mereka.</li>
                <li>Hindari memberikan label benar/salah secara langsung; gali lebih dalam alasan di balik pilihan jawaban siswa.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
              <p>
                Integrasi teknologi di ruang kelas, khususnya melalui IFP, menawarkan dimensi baru dalam mengukur pemahaman siswa. <strong>Evaluasi pembelajaran menggunakan IFP</strong> menjadikan proses formatif lebih kasatmata, partisipatif, dan kolaboratif. Dengan memanfaatkan kuis visual, aktivitas <em>drag-and-drop</em>, refleksi, hingga <a href="/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpActivities', '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">aktivitas pembelajaran interaktif</a> yang disisipi elemen permainan, IFP membuktikan dirinya sebagai instrumen pedagogis yang jauh lebih bertenaga dibandingkan papan tulis konvensional.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleAssessmentIfp;
