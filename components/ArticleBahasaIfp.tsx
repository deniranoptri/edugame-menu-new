import React, { useEffect } from 'react';

interface ArticleBahasaIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleBahasaIfp: React.FC<ArticleBahasaIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ide Aktivitas Bahasa Indonesia Interaktif Menggunakan IFP di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Berbagai ide aktivitas Bahasa Indonesia menggunakan IFP, mulai dari membaca interaktif, menyusun kalimat acak, hingga menyunting teks secara kolaboratif."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/aktivitas-bahasa-indonesia-interaktif-menggunakan-ifp-di-kelas');

    // Structured Data for Article
    const scriptId = 'article-bahasa-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ide Aktivitas Bahasa Indonesia Interaktif Menggunakan IFP di Kelas",
          "description": "Berbagai ide aktivitas pembelajaran Bahasa Indonesia interaktif menggunakan layar sentuh IFP di kelas.",
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
              "name": "Aktivitas Bahasa Indonesia dengan IFP",
              "item": window.location.origin + "/jurnal-guru/aktivitas-bahasa-indonesia-interaktif-menggunakan-ifp-di-kelas"
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
              <li aria-current="page" className="text-[#0C1A69]">Aktivitas Bahasa Indonesia dengan IFP</li>
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
              <span className="bg-[#FFCC80] text-[#0C1A69] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Mata Pelajaran</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Ide Aktivitas Bahasa Indonesia Interaktif Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-orange-400 pl-4">
                "Pembelajaran bahasa bukan sekadar menghafal aturan tata bahasa, melainkan melatih kemampuan literasi, ekspresi, dan pemahaman. Interactive Flat Panel (IFP) mengubah teks yang kaku menjadi kanvas dinamis di mana kata dan kalimat dapat dibedah, disusun, dan dimaknai secara bersama-sama."
              </p>

              <p>
                Melanjutkan seri sebelumnya tentang <a href="/jurnal-guru/aktivitas-ipa-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIpaIfp', '/jurnal-guru/aktivitas-ipa-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">aktivitas IPA</a> dan <a href="/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleMathIfp', '/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">matematika</a>, kita beranjak pada inti dari literasi sekolah: Bahasa Indonesia. <strong>Pembelajaran Bahasa Indonesia menggunakan IFP</strong> memberikan kesempatan bagi siswa untuk berinteraksi langsung dengan teks, mengubah kegiatan membaca yang sunyi menjadi proses penemuan (<em>discovery</em>) yang komunal. Artikel ini akan membagikan berbagai <em>aktivitas Bahasa Indonesia dengan IFP</em> untuk menghidupkan suasana kelas Anda.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Mengapa IFP Cocok untuk Pembelajaran Bahasa Indonesia?</h2>
              <p>
                Pelajaran bahasa sangat bergantung pada teks dan analisis wacana. Menghadirkan teks panjang di papan tulis konvensional tentu melelahkan dan memakan waktu bagi guru. Dengan <em>Interactive Flat Panel untuk Bahasa Indonesia</em>, Anda dapat memproyeksikan cerpen, artikel, atau puisi beresolusi tinggi yang bisa dicorat-coret (<em>annotated</em>), disorot (<em>highlighted</em>), atau bahkan dimodifikasi strukturnya secara instan. Fitur <em>touchscreen</em> menjadikan proses analisis ini sangat taktil; siswa merasa mereka benar-benar sedang "menggenggam" dan "menggeser" makna dari setiap paragraf.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Aktivitas Membaca Interaktif Menggunakan IFP</h2>
              <p>
                Kegiatan membaca di kelas tidak lagi terbatas pada siswa yang menunduk melihat buku masing-masing. Melalui <strong>literasi interaktif dengan IFP</strong>, membaca menjadi sebuah unjuk kerja bersama:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Membaca Teks Interaktif:</strong> Tampilkan sebuah wacana di layar besar. Ajak siswa membaca nyaring secara bergiliran. Guru dapat menggunakan alat <em>highlighter digital</em> untuk langsung menyoroti pelafalan atau intonasi pada frasa tertentu saat itu juga.</li>
                <li><strong>Mengenali Unsur Cerita:</strong> Saat membaca cerpen bersama, guru dapat meminta perwakilan siswa maju untuk melingkari dengan warna biru untuk "Tokoh", hijau untuk "Latar", dan merah untuk "Konflik".</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Aktivitas Memahami Teks dengan Layar Sentuh</h2>
              <p>
                Setelah membaca, siswa diuji pemahamannya. Gunakan <strong>pembelajaran bahasa dengan layar sentuh</strong> untuk membedah teks lebih dalam melalui <em>drag-and-drop</em>:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Menemukan Ide Pokok:</strong> Sediakan beberapa kotak gagasan di sebelah kiri dan paragraf teks di sebelah kanan. Siswa menarik gagasan yang tepat dan meletakkannya di atas paragraf yang sesuai.</li>
                <li><strong>Mengurutkan Paragraf:</strong> Acak struktur sebuah teks prosedur (misalnya: Cara Membuat Nasi Goreng). Minta kelompok siswa berdiskusi lalu maju ke depan layar untuk menyusun urutan paragraf yang logis dengan menggeser balok-balok teks tersebut.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Aktivitas Kosakata dan Menyusun Kalimat</h2>
              <p>
                Pengayaan kosakata bisa dilakukan tanpa harus selalu menggunakan kamus fisik.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Mencocokkan Kosakata dan Makna:</strong> Buatlah dua kolom. Kolom pertama berisi kata-kata sulit (misal: <em>evakuasi, mitigasi, erosi</em>) dan kolom kedua berisi definisi acak. Siswa menarik garis penghubung langsung di layar.</li>
                <li><strong>Menyusun Kalimat Acak:</strong> Siapkan kata-kata yang terpisah dalam "gelembung-gelembung" di layar. Minta siswa menyusunnya menjadi kalimat majemuk bertingkat yang sesuai dengan kaidah SPOK.</li>
                <li><strong>Mengelompokkan Kata:</strong> Bagi layar menjadi area "Kata Benda", "Kata Sifat", dan "Kata Kerja". Siswa memilah kata-kata dari sebuah teks ke dalam keranjang yang tepat.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Aktivitas Menulis dan Menyunting Secara Kolaboratif</h2>
              <p>
                Kegiatan <strong>menulis interaktif menggunakan IFP</strong> bisa menjadi pengalaman komunal. Guru bisa mengetikkan kerangka karangan, lalu setiap siswa maju menambahkan satu atau dua kalimat secara bergantian menggunakan <em>stylus</em> digital (atau <em>keyboard wireless</em>).
              </p>
              <p>
                Untuk sesi menyunting (<em>editing</em>), tampilkan sebuah paragraf yang mengandung banyak kesalahan ejaan atau tanda baca. Berikan "pena merah" virtual kepada siswa, biarkan mereka secara korektif <strong>menyunting kalimat</strong> yang salah eja atau yang penggunaan huruf kapitalnya keliru langsung di atas <em>board</em>.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Game Bahasa Indonesia untuk Pembelajaran Interaktif</h2>
              <p>
                Di tengah sesi yang padat, Anda memerlukan distraksi yang edukatif. Kunjungilah <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">koleksi game edukasi IFP</a> yang tersedia di portal ini. Fitur gamifikasi sangat cocok untuk bahasa.
              </p>
              <p>
                Menggunakan <strong>game Bahasa Indonesia IFP</strong> atau <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game IFP gratis</a> (seperti kuis antonim-sinonim, tebak kata majemuk, atau <em>game bahasa layar sentuh</em> lainnya) dapat membangkitkan kompetisi sehat. Fitur seperti ini merupakan implementasi nyata dari <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game pembelajaran interaktif</a> yang mengubah metode pengecekan memori dari cara konvensional menjadi permainan berwaktu yang seru.
              </p>

              <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 my-6 text-sm">
                <strong>💡 Inspirasi Umum:</strong> Butuh lebih banyak pemicu kreativitas? Simak panduan komprehensif kami pada artikel <a href="/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpActivities', '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Ide Aktivitas Pembelajaran Interaktif Menggunakan IFP di Kelas</a>.
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Aktivitas Literasi Kolaboratif dengan Multi-Touch</h2>
              <p>
                IFP modern dirancang dengan kemampuan <em>multi-touch</em> yang presisi. Gunakan fasilitas ini untuk membuat <strong>peta gagasan (mind map)</strong> bersama. Tuliskan tema besar (misalnya: "Dampak Sampah Plastik") di tengah layar. Undang 3-4 siswa secara bersamaan untuk menarik cabang baru dari tema tersebut menggunakan jari mereka dan menuliskan ide penjelas dari posisi mereka masing-masing di depan panel.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">IFP untuk Asesmen Formatif Bahasa Indonesia</h2>
              <p>
                Mengukur pemahaman literasi bisa difasilitasi dengan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game edukasi untuk IFP</a> yang berbasis asesmen, seperti <strong>kuis pemahaman bacaan</strong> interaktif. Alih-alih membagikan lembaran soal pilihan ganda panjang, tayangkan pertanyaan di layar besar dan biarkan siswa berebut maju untuk menekan jawaban yang benar, atau gunakan sistem jajak pendapat interaktif bila tablet siswa terhubung ke layar IFP.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Tips agar IFP Tidak Sekadar Menjadi Layar Presentasi</h2>
              <p>
                Kesalahan fatal dalam pengadaan IFP adalah menggunakannya sebatas pengganti proyektor. Mengutip dari artikel <a href="/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpMedia', '/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">memaksimalkan IFP sebagai media pembelajaran interaktif</a>:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Jangan Biarkan Layar Pasif:</strong> Setiap teks yang muncul di layar harus ada tujuannya, entah untuk dicoret, disorot, digeser, atau diisi bagian rumpangnya.</li>
                <li><strong>Kurangi Ceramah:</strong> Gunakan fungsi anotasi untuk membuat "catatan kelas" bersama daripada sekadar menampilkan <em>slide</em> materi cetak.</li>
                <li><strong>Presentasi Hasil Kelompok:</strong> Minta kelompok siswa memproyeksikan draf naskah mereka dari <em>smartphone</em> ke IFP (fitur <em>screen mirroring</em>), dan biarkan kelas membedahnya bersama.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
              <p>
                Membawa pelajaran sastra dan literasi ke era digital membutuhkan lebih dari sekadar <em>e-book</em>; ia membutuhkan medium interaksi. <strong>Aktivitas Bahasa Indonesia interaktif</strong> yang difasilitasi IFP memastikan setiap kalimat, paragraf, dan teks bisa dibongkar-pasang dengan sentuhan jari. Jadikan <em>media pembelajaran Bahasa Indonesia IFP</em> tidak hanya sebagai alat menayangkan cerita, melainkan kanvas bagi para siswa untuk merangkai maknanya sendiri. Apabila masih ragu tentang hal-hal teknis, jangan lupa untuk membaca <a href="/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleGuideIfp', '/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas'); }} className="text-blue-700 hover:underline font-bold">panduan dasar penggunaan IFP</a> terlebih dahulu.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleBahasaIfp;
