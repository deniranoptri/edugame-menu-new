import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleModuleIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleModuleIfp: React.FC<ArticleModuleIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Modul Ajar Menggunakan IFP untuk Pembelajaran Interaktif | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan praktis menyusun modul ajar menggunakan IFP agar teknologi mendukung tujuan pembelajaran, aktivitas siswa, asesmen formatif, kolaborasi, dan refleksi di kelas."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif');

    // Structured Data for Article
    const scriptId = 'article-module-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Modul Ajar Menggunakan IFP: Panduan Merancang Pembelajaran Interaktif di Kelas",
          "description": "Panduan praktis menyusun modul ajar menggunakan IFP agar teknologi mendukung tujuan pembelajaran, aktivitas siswa, asesmen formatif, kolaborasi, dan refleksi di kelas.",
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
              "name": "Modul Ajar Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif"
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
              <li aria-current="page" className="text-[#0C1A69]">Modul Ajar Menggunakan IFP</li>
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
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Perangkat Ajar</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Modul Ajar Menggunakan IFP: Panduan Merancang Pembelajaran Interaktif di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-emerald-500 pl-4">
                "Jangan mulai dari fitur IFP. Mulailah dari tujuan pembelajaran. Keberhasilan sebuah modul ajar bukan ditentukan oleh seberapa sering layar disentuh, melainkan seberapa dalam siswa berinteraksi dengan pengetahuan."
              </p>

              <p>
                Menghadapi Interactive Flat Panel (IFP) di kelas seringkali membuat guru merasa tertekan untuk "memanfaatkan setiap fiturnya". Akibatnya, <strong>modul ajar menggunakan IFP</strong> sering kali terjebak menjadi sekadar daftar aktivitas menekan layar tanpa makna pedagogis yang jelas. Artikel ini akan memandu Anda merancang rencana pembelajaran yang meletakkan pedagogi di kursi pengemudi, sementara teknologi bertindak sebagai mesin pendorongnya.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu Modul Ajar yang Menggunakan IFP?</h2>
              <p>
                Modul ajar adalah kompas guru. Harus dipahami bahwa IFP bukanlah tujuan pembelajaran, bukan pula model pembelajaran. IFP hanyalah <em>media</em>. Modul ajar yang mengintegrasikan IFP harus dengan jelas memetakan alur berikut:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg font-bold text-center text-sm md:text-base border border-gray-200 my-4 text-emerald-900 shadow-inner">
                Tujuan Pembelajaran ➔ Pengalaman Belajar ➔ Aktivitas ➔ IFP sebagai media ➔ Asesmen ➔ Refleksi
              </div>
              <p>
                Dalam alur ini, IFP ditempatkan secara strategis hanya jika penggunaannya dapat memperjelas konsep, mempercepat pemahaman, atau memfasilitasi interaksi yang tidak bisa dilakukan oleh media konvensional.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Mengapa IFP Perlu Dirancang dalam Modul Ajar?</h2>
              <p>
                Menambahkan IFP secara spontan tanpa perencanaan di modul ajar sering berujung pada kekacauan: anak-anak berebut menyentuh layar, guru kesulitan mengendalikan kelas, atau layar sekadar menjadi proyektor pasif. Mengintegrasikannya ke dalam rancangan pembelajaran (RPP/Modul Ajar) memastikan bahwa <a href="/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpMedia', '/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">penggunaan IFP selaras dengan tujuan</a>, mendorong interaktivitas, visualisasi yang bermakna, kolaborasi, dan umpan balik yang terukur.
              </p>

              <AdSenseInArticle />

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Mulai dari Tujuan Pembelajaran, Bukan dari Teknologi</h2>
              <p>
                Ini adalah hukum pertama dalam menyusun <strong>modul ajar dengan IFP</strong>. Mari kita bedah perbedaannya melalui contoh praktis:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>TUJUAN:</strong> Siswa mampu mengelompokkan komponen ekosistem.</li>
                <li><strong>Tanpa IFP terencana:</strong> Guru memutar video ekosistem di IFP. Siswa menonton pasif. Kemudian guru meminta siswa mengerjakan tugas di buku masing-masing.</li>
                <li><strong>Dengan IFP terencana:</strong> Siswa melihat visual lanskap hutan. Mereka secara bergiliran menggunakan fitur sentuh IFP untuk mengklasifikasi (<em>drag-and-drop</em>) hewan ke dalam kelompok biotik dan abiotik, mendiskusikan alasannya secara komunal, lalu merefleksikan pilihan tersebut bersama-sama.</li>
              </ul>
              <p>
                Perbedaan pedagogisnya sangat kentara: pada skenario kedua, IFP mengubah siswa dari konsumen informasi menjadi aktor pembelajaran.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Menempatkan IFP dalam Struktur Modul Ajar</h2>
              <p>
                IFP dapat disisipkan pada berbagai tahapan: kegiatan pendahuluan (untuk <em>ice-breaking</em> atau pemantik), kegiatan inti (untuk mengeksplorasi konsep dan mengaplikasikan), hingga asesmen dan penutup.
              </p>
              <p>
                Namun ingat: <strong>tidak semua kegiatan harus menggunakan layar</strong>. Terkadang, keputusan pedagogis terbaik yang bisa ditulis seorang guru dalam modul ajarnya adalah: <em>"Guru mematikan layar IFP, meminta siswa saling berhadapan, dan memulai diskusi."</em>
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Komponen Modul Ajar yang Perlu Dirancang</h2>
              <p>
                Ketika mengintegrasikan <strong>kegiatan pembelajaran menggunakan IFP</strong>, pastikan komponen berikut tertulis jelas dalam modul Kurikulum Merdeka Anda:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identitas & Capaian Pembelajaran:</strong> Tetap merujuk pada standar kurikulum nasional.</li>
                <li><strong>Kebutuhan Peserta Didik:</strong> Petakan gaya belajar yang akan dibantu oleh visual/audio IFP.</li>
                <li><strong>Media Pembelajaran:</strong> Sebutkan secara spesifik (misal: "IFP, Aplikasi Whiteboard Bawaan, Game Edukasi Papan Interaktif").</li>
                <li><strong>Langkah Kegiatan:</strong> Deskripsikan kapan layar disentuh, kapan siswa kembali ke meja, dan bagaimana alur pergantiannya (<em>turn-taking</em>). Terapkan <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">strategi pengelolaan kelas</a> yang kuat.</li>
                <li><strong>Asesmen & Refleksi:</strong> Bagaimana IFP digunakan untuk menangkap respons siswa secara cepat.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Contoh Penulisan Tujuan Pembelajaran dan Aktivitas IFP</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg my-4 text-sm text-gray-700">
                  <thead className="bg-emerald-50 border-b border-emerald-100">
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Mata Pelajaran</th>
                      <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Tujuan Pembelajaran</th>
                      <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Peran IFP dalam Aktivitas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4 font-semibold">IPA</td>
                      <td className="py-3 px-4">Mengklasifikasi jenis hewan.</td>
                      <td className="py-3 px-4">Siswa menggeser gambar hewan ke kolom habitat yang tepat (<em>drag-and-drop classification</em>).</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Matematika</td>
                      <td className="py-3 px-4">Membandingkan nilai dua pecahan.</td>
                      <td className="py-3 px-4">Siswa membelah gambar objek virtual di layar untuk melihat visualisasi pecahan sebelum membandingkannya.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">B. Indonesia</td>
                      <td className="py-3 px-4">Memahami struktur teks.</td>
                      <td className="py-3 px-4">Siswa bersama-sama menganotasi (mencoret/menandai) paragraf induktif menggunakan <em>stylus</em> IFP.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Merancang Tahap Memahami dengan IFP</h2>
              <p>
                Dalam tahap memahami, modul ajar harus fokus pada pembangunan konsep. Jangan biarkan layar IFP hanya menyajikan rentetan kalimat panjang. Rancang aktivitas eksplorasi visual: gunakan diagram interaktif, pemetaan konsep (<em>concept mapping</em>), atau linimasa sejarah (<em>timeline</em>) yang dapat di-<em>zoom</em> dan digeser oleh siswa untuk mengeksplorasi hubungan antar peristiwa. Tujuannya adalah pemahaman konseptual yang kokoh.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Merancang Tahap Mengaplikasikan dengan IFP</h2>
              <p>
                Siswa harus melakukan sesuatu dengan pengetahuan mereka. Dalam modul ajar, tuliskan langkah di mana siswa maju ke depan layar (atau menghubungkan tablet mereka ke layar IFP secara nirkabel) untuk memecahkan masalah. Aktivitas seperti pembuatan keputusan berbasis skenario (<em>scenario-based learning</em>) atau <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">bermain game edukasi IFP yang menuntut logika</a> akan memaksa siswa untuk mentransfer pengetahuan teoretis ke dalam tindakan nyata.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Merancang Tahap Merefleksi dengan IFP</h2>
              <p>
                <strong>Refleksi pembelajaran dengan IFP</strong> adalah bukti bahwa <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran mendalam</a> telah terjadi. Susun aktivitas penutup seperti papan refleksi digital (<em>reflection board</em>) atau <em>Exit Ticket</em>. Guru dapat meminta siswa menuliskan satu <em>sticky note</em> digital di layar tentang "Apa yang masih membingungkan?" Ini menjadi data berharga bagi guru untuk merancang modul berikutnya.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. Integrasi Asesmen Formatif dalam Modul Ajar</h2>
              <p>
                Jangan mereduksi <strong>asesmen menggunakan IFP</strong> hanya menjadi skor akhir angka. Asesmen formatif berfungsi mendeteksi miskonsepsi sejak dini. Anda bisa membaca panduan lengkapnya pada artikel <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Asesmen Formatif Menggunakan IFP</a>. Tuliskan dalam modul ajar kapan guru akan melakukan pengecekan cepat (<em>quick checks</em>) di tengah pelajaran.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">11. Integrasi Pembelajaran Berdiferensiasi</h2>
              <p>
                IFP tidak secara otomatis menciptakan diferensiasi; desain gurulah yang melakukannya. Sesuai prinsip <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran berdiferensiasi dengan IFP</a>, modul ajar dapat mencantumkan bagaimana layar besar digunakan oleh kelompok yang masih butuh bimbingan visual, sementara kelompok yang sudah siap belajar mandiri mengerjakan tugas aplikatif di mejanya masing-masing (diferensiasi proses).
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">12. Integrasi Pembelajaran Kolaboratif</h2>
              <p>
                Jika Anda menggunakan fitur multi-touch IFP, modul ajar harus merinci pembagian peran siswa (<em>group roles</em>). Siapa yang menggeser objek? Siapa yang mencatat hasilnya? Bagaimana alur pengambilan keputusannya? Kolaborasi bukan berarti semua anak menyentuh layar secara serampangan. Keteraturan ini penting seperti yang dijelaskan dalam <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Pembelajaran Kolaboratif Menggunakan IFP</a>.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">13. Contoh Modul Ajar Ringkas 2 JP</h2>
              <p>Berikut adalah contoh bagaimana integrasi IFP direalisasikan dalam dokumen rencana pembelajaran:</p>
              
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700">
                <h3 className="font-bold text-lg text-[#0C1A69] border-b pb-2">Contoh Skenario: Mata Pelajaran IPA (Ekosistem) - 2 JP</h3>
                <p><strong>A. IDENTITAS & TUJUAN</strong><br/>
                Tujuan: Siswa mampu menganalisis hubungan antar makhluk hidup dalam jaring-jaring makanan.</p>
                
                <p><strong>B. MEDIA & PEMANFAATAN IFP</strong><br/>
                IFP digunakan untuk visualisasi dinamis jaring-jaring makanan dan asesmen formatif interaktif bergaya <em>drag-and-drop</em>.</p>
                
                <p><strong>C. KEGIATAN AWAL (10 Menit)</strong><br/>
                Guru menampilkan video singkat interaksi hewan di IFP. Tanya jawab klasikal mengenai rantai makanan sederhana.</p>
                
                <p><strong>D. KEGIATAN INTI - Memahami & Mengaplikasikan (40 Menit)</strong><br/>
                Guru membagi kanvas IFP (<em>split-screen</em>). Dua kelompok maju secara bergantian untuk menyusun jaring-jaring makanan hewan endemik menggunakan fitur multi-touch. Kelompok lain mengobservasi dan memberikan argumen jika ada hewan yang salah tempat.</p>
                
                <p><strong>E. ASESMEN FORMATIF (10 Menit)</strong><br/>
                Guru memberikan kasus di layar IFP: "Apa yang terjadi pada populasi Elang jika Ular punah?" Siswa berdiskusi, lalu perwakilan memanipulasi grafik di IFP untuk menjelaskan logika kelompok mereka.</p>
                
                <p><strong>F. REFLEKSI & PENUTUP (10 Menit)</strong><br/>
                Siswa menggunakan fitur <em>digital sticky-notes</em> di IFP untuk menempelkan hal paling menarik yang mereka pelajari, serta satu hal yang masih membingungkan. Guru memotret layar (<em>screenshot</em>) sebagai bahan tindak lanjut.</p>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">14. Checklist Sebelum Modul Ajar Digunakan</h2>
              <p>
                Sebelum masuk ke kelas, pastikan modul ajar Anda memenuhi daftar periksa berikut:
              </p>
              <ul className="list-none space-y-2 font-medium text-gray-600">
                <li><span className="text-emerald-500 mr-2">✓</span> Tujuan pembelajaran tergambar jelas.</li>
                <li><span className="text-emerald-500 mr-2">✓</span> IFP memiliki fungsi pedagogis (bukan sekadar hiasan).</li>
                <li><span className="text-emerald-500 mr-2">✓</span> Tidak semua kegiatan bergantung penuh pada layar IFP.</li>
                <li><span className="text-emerald-500 mr-2">✓</span> Ada ruang interaksi antarsiswa (tatap muka).</li>
                <li><span className="text-emerald-500 mr-2">✓</span> Terdapat rencana asesmen formatif dan momen refleksi.</li>
                <li><span className="text-emerald-500 mr-2">✓</span> Memiliki "Plan B" (alternatif kegiatan) jika listrik atau internet bermasalah.</li>
                <li><span className="text-emerald-500 mr-2">✓</span> Teknologi <a href="/jurnal-guru/fitur-ifp-untuk-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpFeatures', '/jurnal-guru/fitur-ifp-untuk-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">fitur IFP</a> tidak mengambil alih peran guru sebagai fasilitator pemikiran.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">15. Kesalahan Umum Saat Membuat Modul Ajar Berbasis IFP</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Menambahkan IFP sebagai Formalitas:</strong> Sekadar menulis "Alat: IFP" di modul, padahal kenyataannya hanya digunakan untuk menampilkan teks PowerPoint diam. Pastikan Anda telah membaca <a href="/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleGuideIfp', '/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Panduan Penggunaan IFP</a>.</li>
                <li><strong>Semua Menonton:</strong> Aktivitas IFP hanya melibatkan satu anak berprestasi di depan layar, sementara 30 anak lainnya hanya menonton bosan.</li>
                <li><strong>Game Tanpa Makna:</strong> Menggunakan game interaktif, namun tidak ada kaitan dengan capaian kurikulum.</li>
                <li><strong>Guru Terlalu Dominan:</strong> Guru yang terus-menerus berdiri menutupi layar, merampas kesempatan siswa untuk berinteraksi dengan bahan ajar.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">16. Prinsip Akhir: Modul Ajar Harus Mengendalikan Teknologi</h2>
              <p className="text-xl font-bold text-center text-emerald-800 bg-emerald-50 p-6 rounded-2xl border border-emerald-100 my-8 shadow-sm">
                "Guru merancang pengalaman belajar. Modul ajar mengarahkan proses. IFP mendukung interaksi. Siswa tetap menjadi pusat pembelajaran."
              </p>
              <p>
                Saat Anda menyusun <strong>modul ajar Kurikulum Merdeka dengan IFP</strong>, ingatlah bahwa dokumen tersebut bukan resep kaku untuk mengoperasikan mesin, melainkan peta jalan (<em>roadmap</em>) untuk membimbing pikiran manusia. Biarkan IFP memanjakan mata dan merangsang motorik mereka, namun pastikan modul ajar Anda yang terus menjaga nyala kritis di benak setiap peserta didik.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleModuleIfp;
