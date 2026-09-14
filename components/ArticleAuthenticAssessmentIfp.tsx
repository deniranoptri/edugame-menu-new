import React, { useEffect } from 'react';

interface ArticleAuthenticAssessmentIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleAuthenticAssessmentIfp: React.FC<ArticleAuthenticAssessmentIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Asesmen Autentik Menggunakan IFP di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan memfasilitasi asesmen autentik menggunakan Interactive Flat Panel (IFP), mengumpulkan bukti belajar, rubrik, portofolio digital, dan unjuk kerja siswa."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/asesmen-autentik-menggunakan-ifp-di-kelas');

    // Structured Data for Article
    const scriptId = 'article-authentic-assessment-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Asesmen Autentik Menggunakan IFP di Kelas",
          "description": "Panduan memfasilitasi asesmen autentik menggunakan Interactive Flat Panel (IFP), mengumpulkan bukti belajar, rubrik, portofolio digital, dan unjuk kerja siswa secara interaktif.",
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
              "name": "Asesmen Autentik Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/asesmen-autentik-menggunakan-ifp-di-kelas"
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
              <li aria-current="page" className="text-[#0C1A69]">Asesmen Autentik Menggunakan IFP</li>
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
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Asesmen & Penilaian</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Asesmen Autentik Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-amber-500 pl-4">
                "Kualitas asesmen tidak ditentukan oleh kecanggihan layarnya, melainkan oleh kejelasan tujuan, kriteria, dan bagaimana bukti belajar siswa dikumpulkan serta diinterpretasikan. IFP hadir sebagai panggung interaktif yang membuat bukti belajar itu terlihat, terdengar, dan dapat dirasakan secara langsung oleh seluruh kelas."
              </p>

              <p>
                Dalam paradigma kurikulum modern, mengukur kemampuan siswa melalui pilihan ganda tidak lagi dianggap cukup untuk mewakili kompetensi yang sesungguhnya. Siswa butuh tantangan yang menuntut mereka mendemonstrasikan keterampilan di dunia nyata. Itulah esensi dari asesmen autentik. Ketika <strong>asesmen autentik dengan IFP</strong> (Interactive Flat Panel) diterapkan di kelas, panel cerdas ini bukan sekadar alat untuk menampilkan soal ujian, melainkan kanvas tempat portofolio, presentasi, dan karya kolaboratif siswa berlabuh, diuji, dan diapresiasi.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu Asesmen Autentik?</h2>
              <p>
                Asesmen autentik adalah pendekatan penilaian di mana siswa diminta untuk menunjukkan pemahaman dan keterampilan mereka melalui tugas-tugas dunia nyata yang bermakna. Siswa tidak sekadar menghafal dan mengingat (<em>recall</em>), melainkan harus menerapkan (<em>apply</em>), menganalisis (<em>analyze</em>), dan mencipta (<em>create</em>). 
              </p>
              <p>
                Penting untuk dipahami dan dibedakan dari asesmen lainnya:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDiagnosticIfp', '/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Asesmen Diagnostik:</a> Dilakukan sebelum pembelajaran untuk mengetahui kondisi awal siswa.</li>
                <li><a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Asesmen Formatif:</a> Dilakukan selama proses pembelajaran berlangsung untuk umpan balik dan perbaikan.</li>
                <li><strong>Asesmen Autentik:</strong> Menilai kemampuan melalui unjuk kerja, karya, proyek, atau simulasi yang mencerminkan tantangan dunia nyata.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Karakteristik Asesmen Autentik</h2>
              <p>
                Tugas autentik biasanya memiliki ciri-ciri berikut:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mencerminkan situasi kehidupan nyata (kontekstual).</li>
                <li>Mengharuskan siswa menggunakan pertimbangan dan inovasi (berpikir tingkat tinggi).</li>
                <li>Sering kali menghasilkan produk atau unjuk kerja.</li>
                <li>Rubrik penilaian terbuka dan diketahui siswa sejak awal.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Perbedaan Asesmen Autentik dengan Tes Tertulis Biasa</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg my-4 text-sm text-gray-700">
                  <thead className="bg-amber-50 border-b border-amber-100">
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Aspek</th>
                      <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Tes Tertulis Tradisional</th>
                      <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Asesmen Autentik</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4 font-semibold">Bentuk Tugas</td>
                      <td className="py-3 px-4">Pilihan ganda, isian singkat</td>
                      <td className="py-3 px-4">Kinerja, presentasi, portofolio, proyek</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Indikator Sukses</td>
                      <td className="py-3 px-4">Jawaban benar/salah yang sudah pasti</td>
                      <td className="py-3 px-4">Kualitas argumen, kreativitas, proses penyelesaian</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Bukti Belajar</td>
                      <td className="py-3 px-4">Lembar jawaban ujian</td>
                      <td className="py-3 px-4">Video, prototipe, debat, tulisan reflektif</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Mengapa IFP Membantu Proses Asesmen Autentik?</h2>
              <p>
                Asesmen autentik menuntut guru untuk mengamati, mendokumentasikan, dan mengevaluasi karya siswa yang sering kali berbentuk multimedia. Di sinilah IFP bersinar. Layar besar interaktif memungkinkan produk digital (presentasi, video pendek, peta konsep interaktif, atau draf desain) ditampilkan dengan resolusi tinggi, di-<em>review</em>, dan dianotasi secara langsung di depan seluruh kelas. 
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. IFP Sebagai Media, Bukan Tujuan</h2>
              <p>
                Sangat penting untuk mengingat bahwa teknologi hanyalah <em>media pendukung</em>. Menggunakan IFP untuk menampilkan kuis pilihan ganda raksasa bukanlah asesmen autentik. Kualitas asesmen tetap ditentukan oleh tujuan pembelajaran, instrumen, rubrik, kualitas bukti belajar yang dihasilkan, dan interpretasi guru. <strong>Asesmen autentik menggunakan IFP</strong> harus berfokus pada siswa yang mendemonstrasikan kompetensinya, dengan IFP sebagai panggungnya.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Asesmen Kinerja (Performance Assessment) di Layar</h2>
              <p>
                Asesmen kinerja menilai bagaimana siswa melakukan suatu proses. Gunakan IFP untuk demonstrasi. Misalnya, dalam pelajaran coding dasar atau matematika spasial, siswa diminta memanipulasi balok-balok 3D di layar sentuh IFP untuk memecahkan sebuah masalah bangunan. Guru mengamati <em>proses</em> mereka—bagaimana mereka mencoba, gagal, dan memperbaiki strategi di layar.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Demonstrasi dan Presentasi Kelompok</h2>
              <p>
                Dalam <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran kolaboratif</a>, presentasi hasil karya adalah asesmen autentik yang klasik. Siswa dapat menghubungkan tablet atau Chromebook mereka ke IFP secara nirkabel (<em>screen mirroring</em>) untuk mempresentasikan <em>slide</em> atau purwarupa desain mereka. Guru menilai kemampuan komunikasi, pembagian tugas dalam tim, dan penguasaan materi yang disampaikan.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Asesmen Proyek Menggunakan IFP</h2>
              <p>
                Saat kelas menjalankan proyek, IFP berfungsi sebagai pusat kontrol. Hasil akhir proyek tidak hanya dilaporkan dalam bentuk fisik, melainkan diproyeksikan ke IFP untuk dinilai keotentikannya. Misalnya, kampanye lingkungan digital dapat dianalisis interaktivitas dan kelayakannya langsung dari layar kelas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Portofolio Digital</h2>
              <p>
                Portofolio adalah kumpulan bukti belajar siswa dari waktu ke waktu. Dengan fitur IFP yang terintegrasi ke <em>cloud drive</em> (seperti Google Drive), guru dapat memanggil (<em>load</em>) folder portofolio siswa tertentu di IFP selama sesi konferensi guru-siswa. Mereka berdua dapat mengeksplorasi jejak digital tersebut bersama-sama untuk melihat perkembangan siswa.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. Menampilkan Rubrik Menggunakan IFP</h2>
              <p>
                Asesmen autentik tidak sah tanpa rubrik yang transparan. Sebelum siswa mulai bekerja, tampilkan rubrik penilaian secara <em>fullscreen</em> di IFP. Bahas setiap kriteria (Misal: "Sangat Baik", "Baik", "Perlu Bimbingan") dengan siswa agar ekspektasi hasil karya atau performa mereka menjadi sangat jelas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">11. Penerapan Peer Assessment (Penilaian Sejawat)</h2>
              <p>
                IFP sangat ideal untuk <em>peer assessment</em>. Siswa A menampilkan tulisannya (misalnya esai atau puisi) di layar IFP. Siswa B (dari kelompok lain) maju dan menggunakan tinta digital (<em>digital ink</em>) untuk menyoroti kalimat terbaik atau memberikan umpan balik konstruktif langsung pada naskah tersebut, yang kemudian disimpan sebagai bukti penilaian sebaya.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">12. Self-Assessment (Penilaian Diri)</h2>
              <p>
                Siswa membutuhkan kesempatan menilai diri mereka sendiri. Setelah unjuk kerja, berikan kuesioner singkat atau <em>slider</em> interaktif di IFP. Siswa dapat menggunakan alat periksa (<em>checkbox</em>) virtual untuk menandai capaian yang menurut mereka berhasil dikuasai sebelum guru memberikan pandangannya. Hal ini sejalan dengan <a href="/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleReflectionIfp', '/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">refleksi pembelajaran</a>.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">13. Dokumentasi dan Pengumpulan Bukti Belajar</h2>
              <p>
                Aktivitas di IFP (seperti <em>mind map</em> kelompok, anotasi jurnal ilmiah, atau draf desain jembatan) dapat disimpan menjadi PDF interaktif atau gambar resolusi tinggi, lalu langsung dikirim ke folder asesmen masing-masing siswa. Inilah wujud bukti belajar autentik, bukan sekadar nilai angka 80 di buku absen guru.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">14. Bagaimana Guru Membaca Bukti Belajar?</h2>
              <p>
                Membaca bukti belajar dari asesmen autentik memerlukan interpretasi. Guru harus melihat lampiran produk digital yang ada di IFP dan bertanya: "Apakah karya ini menunjukkan pemahaman konseptual, atau sekadar teknis menyalin informasi?" Keputusan pembelajaran selanjutnya bergantung pada interpretasi rubrik ini.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">15. Hubungan dengan Taksonomi Belajar Mendalam</h2>
              <p>
                Asesmen autentik dirancang untuk menyentuh fase tertinggi dari <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran mendalam</a>. Bukan sekadar <strong>Memahami</strong>, tetapi siswa diuji pada tahap <strong>Mengaplikasikan</strong> (membuat proyek) dan <strong>Merefleksi</strong> (penilaian diri dan sejawat). IFP memperlancar siklus transisi ini dengan kanvas multi-media.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">16. Contoh Penerapan: IPA (Sains)</h2>
              <p>
                <strong>Konteks: Ekosistem.</strong> Siswa ditugaskan membuat simulasi rantai makanan virtual. Mereka mempresentasikan simulasi tersebut di IFP. Asesmen dilakukan berdasarkan bagaimana siswa mempertahankan argumennya secara lisan saat guru secara acak "menghapus" satu spesies dari simulasi tersebut di layar sentuh IFP.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">17. Contoh Penerapan: Matematika</h2>
              <p>
                <strong>Konteks: Statistika.</strong> Alih-alih menghitung mean/median di kertas, siswa mengumpulkan data nyata (misalnya, survei hobi teman sekelas) dan memvisualisasikannya menjadi diagram lingkaran (<em>pie chart</em>) dinamis di IFP. Penilaian autentiknya adalah bagaimana siswa menyimpulkan dan membaca tren dari grafik interaktif yang mereka buat sendiri.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">18. Contoh Penerapan: Bahasa Indonesia</h2>
              <p>
                <strong>Konteks: Debat / Teks Argumentatif.</strong> Saat kelas debat berlangsung, siswa notulis menggunakan IFP untuk mencatat argumen (pro/kontra) secara langsung. Penilaian autentik dijatuhkan pada seberapa relevan dan kuatnya argumen lisan siswa yang didebat, dan seberapa akurat sintesis yang ditampilkan tim penulis di layar.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">19. Contoh Penerapan: IPS</h2>
              <p>
                <strong>Konteks: Geografi Wilayah.</strong> Siswa bertugas menjadi "Tour Guide Digital". Menggunakan aplikasi peta interaktif di IFP, siswa "mengantar" kelas menjelajahi lanskap benua tertentu sambil menceritakan dampak iklim lokal terhadap ekonomi masyarakat di sana.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">20. Skenario Pembelajaran 2 JP (Fokus Asesmen Autentik)</h2>
              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700">
                <h3 className="font-bold text-lg text-[#0C1A69] border-b border-amber-200 pb-2">Topik: Iklan dan Persuasi Media (SMP/SMA)</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Tujuan Pembelajaran:</strong> Siswa mampu menganalisis struktur dan memproduksi iklan persuasif pendek yang sesuai dengan etika.</li>
                  <li><strong>0-15 Menit (Persiapan):</strong> Guru menayangkan Rubrik Penilaian (kriteria: kekuatan slogan, kejujuran klaim, tata letak visual) secara <em>fullscreen</em> di IFP.</li>
                  <li><strong>15-50 Menit (Pembuatan Karya):</strong> Siswa (berkelompok) membuat <em>draft</em> iklan digital di perangkat mereka. (Kaitan dengan <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-600 font-bold hover:underline">pembelajaran berdiferensiasi</a>: siswa boleh memilih format gambar statis atau video pendek).</li>
                  <li><strong>50-80 Menit (Ekshibisi & Peer Assessment):</strong> Secara bergantian, kelompok memproyeksikan (<em>cast</em>) karya mereka ke IFP. Kelas bertindak sebagai "konsumen". Audiens maju menekan ikon jempol/bintang di layar IFP untuk memberikan rating, sementara guru menilai komponen persuasi berdasarkan rubrik.</li>
                  <li><strong>Penutup (Refleksi):</strong> Tangkapan layar seluruh <em>feedback</em> tersebut disimpan di IFP dan dikirimkan ke <em>cloud</em> masing-masing kelompok sebagai bukti autentik.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">21. Kesalahan Umum Penggunaan IFP dalam Asesmen</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Efek Wow Mengaburkan Substansi:</strong> Terpesona oleh transisi <em>slide</em> atau efek animasi presentasi siswa di IFP, tetapi lupa menilai isi argumennya.</li>
                <li><strong>IFP Hanya Dikuasai Guru:</strong> Menyebutnya "unjuk kerja siswa", tetapi gurulah yang menekan dan mengatur semua <em>slide</em> presentasi di depan.</li>
                <li><strong>Tugas Tidak Relevan:</strong> Meminta siswa maju ke IFP hanya untuk mengisi teka-teki silang, lalu menyebutnya asesmen autentik (padahal itu hanya <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-700 hover:underline font-bold">game edukasi interaktif</a> biasa, bukan asesmen unjuk kerja kontekstual).</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">22. Checklist Praktis Guru Sebelum Asesmen</h2>
              <ul className="list-none space-y-2 font-medium text-gray-600">
                <li><span className="text-amber-500 mr-2">✓</span> Apakah rubrik penilaian sudah saya rancang, dan apakah mudah dibaca jika ditayangkan di layar besar?</li>
                <li><span className="text-amber-500 mr-2">✓</span> Apakah tugas siswa mengharuskan mereka "membuat" sesuatu, bukan hanya "memilih" sesuatu?</li>
                <li><span className="text-amber-500 mr-2">✓</span> Apakah saya punya cara untuk mendokumentasikan/menyimpan hasil kerja mereka dari IFP ke <em>cloud</em> sebagai bukti?</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">23. Kesimpulan</h2>
              <p className="text-xl font-bold text-center text-amber-800 bg-amber-50 p-6 rounded-2xl border border-amber-100 my-8 shadow-sm">
                "Ujian terbaik adalah yang tidak terasa seperti ujian. Saat siswa asyik mempresentasikan karya mereka di depan kelas, mereka mendemonstrasikan kompetensi yang jauh lebih nyata daripada coretan pensil di lembar jawaban."
              </p>
              <p>
                <strong>Asesmen autentik menggunakan IFP</strong> membantu guru mendobrak batas-batas kertas ujian. IFP memindahkan proses penilaian menjadi sebuah perayaan (<em>celebration of learning</em>), di mana karya siswa diapresiasi secara visual, diulas secara konstruktif bersama <em>peers</em>, dan dievaluasi secara komprehensif. Pada akhirnya, instrumen utama asesmen tetaplah mata dan nalar pedagogis guru, dan IFP menyediakan panggung terbaik untuk mengamatinya.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthenticAssessmentIfp;
