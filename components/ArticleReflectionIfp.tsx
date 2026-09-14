import React, { useEffect } from 'react';

interface ArticleReflectionIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleReflectionIfp: React.FC<ArticleReflectionIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Refleksi Pembelajaran Menggunakan IFP di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan komprehensif memfasilitasi refleksi pembelajaran secara interaktif menggunakan Interactive Flat Panel (IFP), termasuk exit ticket, mood meter, dan rating pemahaman."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas');

    // Structured Data for Article
    const scriptId = 'article-reflection-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Refleksi Pembelajaran Menggunakan IFP di Kelas",
          "description": "Panduan komprehensif memfasilitasi refleksi pembelajaran secara interaktif menggunakan Interactive Flat Panel (IFP), termasuk exit ticket, mood meter, dan rating pemahaman.",
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
              "name": "Refleksi Pembelajaran dengan IFP",
              "item": window.location.origin + "/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas"
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
              <li aria-current="page" className="text-[#0C1A69]">Refleksi Pembelajaran dengan IFP</li>
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
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Refleksi & Metakognisi</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Refleksi Pembelajaran Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-purple-500 pl-4">
                "Seperti kata John Dewey, kita tidak belajar dari pengalaman; kita belajar dari merefleksikan pengalaman tersebut. IFP mengubah momen penutup yang pasif menjadi panggung partisipasi interaktif untuk mengikat makna."
              </p>

              <p>
                Bagian akhir dari sebuah sesi pembelajaran sering kali menjadi momen yang paling terabaikan. Bel berbunyi, siswa merapikan tas, dan guru buru-buru menyimpulkan materi. Padahal, menit-menit terakhir adalah waktu krusial di mana <em>transfer of learning</em> terjadi. Di sinilah <strong>refleksi pembelajaran dengan IFP</strong> (Interactive Flat Panel) memainkan peran transformatif, mengubah penutupan kelas menjadi proses visualisasi pemahaman dan perasaan siswa yang transparan.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu Refleksi Pembelajaran?</h2>
              <p>
                Refleksi pembelajaran adalah proses di mana siswa secara sadar memikirkan kembali apa yang telah mereka pelajari, bagaimana mereka mempelajarinya, apa yang mereka rasakan selama proses tersebut, dan di mana kesulitan mereka. Ini adalah inti dari metakognisi (berpikir tentang proses berpikir). Refleksi bukan tentang menguji siswa, melainkan tentang memberi mereka ruang untuk memproses informasi dan perasaan.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. IFP Sebagai Kanvas Refleksi Bersama</h2>
              <p>
                Seringkali, refleksi dilakukan dengan menulis di buku catatan pribadi yang hanya dibaca oleh guru. Meskipun ini baik untuk privasi, metode ini kehilangan kekuatan belajar dari <em>peer</em> (teman sebaya). Menggunakan layar sentuh raksasa IFP sebagai medium refleksi memungkinkan siswa melihat agregat pemahaman kelas. Mereka menyadari bahwa "Oh, ternyata bukan hanya saya yang masih bingung tentang materi ini." Hal ini menumbuhkan empati dan rasa aman di dalam kelas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Exit Ticket Interaktif di Layar Sentuh</h2>
              <p>
                <em>Exit ticket</em> tradisional menggunakan secarik kertas (<em>sticky note</em>) yang ditempel di pintu sebelum keluar. Dengan IFP, proses ini menjadi <strong>exit ticket interaktif digital</strong>. 
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Guru membagi layar IFP menjadi dua kolom: "Sudah Paham" dan "Masih Bingung".</li>
                <li>Siswa dapat memproyeksikan catatan virtual dari tablet mereka, atau maju satu per satu menempelkan stempel (<em>stamp</em>) digital di area layar yang mewakili kondisi mereka.</li>
                <li>Data ini tersimpan seketika tanpa harus mengumpulkan dan menumpuk kertas fisik.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Penggunaan Mood Meter (Pemetaan Emosi)</h2>
              <p>
                Belajar bukan hanya proses kognitif, tetapi juga afektif emosional. Tampilkan kuadran <em>Mood Meter</em> (Meteran Suasana Hati) di IFP—dari energi tinggi hingga rendah, dari perasaan positif hingga negatif. Minta siswa untuk "check-in" emosi mereka di awal dan "check-out" di akhir kelas dengan memindahkan avatar digital mereka ke kuadran yang sesuai. Jika banyak siswa berada di kuadran "Kelelahan/Frustrasi" setelah kelas usai, guru langsung mendapatkan umpan balik berharga mengenai <em>cognitive load</em> (beban kognitif) yang mungkin terlalu berat pada hari itu.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Rating Pemahaman (Confidence Check)</h2>
              <p>
                Gunakan polling interaktif cepat menggunakan IFP. Tampilkan sebuah <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game edukasi</a> pendek atau satu pertanyaan konseptual. Alih-alih hanya meminta jawaban, tambahkan dimensi keyakinan: "Seberapa yakin kamu dengan jawabanmu?" (Tinggi / Sedang / Rendah). Jika ada siswa yang menjawab salah tetapi memilih keyakinan "Tinggi", guru telah menemukan miskonsepsi yang sangat kuat yang harus segera diintervensi pada pertemuan berikutnya.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Peta Konsep Reflektif Sederhana</h2>
              <p>
                Untuk merangkum pelajaran, mulailah dengan satu kata di tengah papan tulis digital IFP. Setiap kelompok siswa mengirimkan satu perwakilan ke depan untuk menambahkan satu cabang baru beserta penjelasan singkatnya. Dalam lima menit, kelas telah berkolaborasi membangun ringkasan visual pelajaran hari itu tanpa guru harus berceramah ulang.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Pertanyaan Reflektif Terbuka vs. Tertutup</h2>
              <p>
                Pertanyaan tertutup (seperti pilihan ganda) lebih cocok untuk <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif</a>, di mana guru membutuhkan metrik akurasi materi yang sedang berjalan. Namun untuk refleksi, gunakan <strong>pertanyaan terbuka</strong>. Contoh yang bisa ditampilkan di IFP:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>"Apa satu hal yang mengejutkanmu hari ini?"</li>
                <li>"Bagian mana dari kerja kelompok tadi yang paling menantang?"</li>
                <li>"Bagaimana materi hari ini berhubungan dengan pelajaran minggu lalu?"</li>
              </ul>
              <p>
                Respons siswa dapat dikirimkan ke layar IFP secara anonim agar mereka berani jujur.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Refleksi Individu vs. Kelompok</h2>
              <p>
                Refleksi dapat dilakukan dalam dua level. Pada level individu, siswa mengukur pemahaman pribadinya. Namun pada kelas yang menerapkan <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran kolaboratif menggunakan IFP</a>, refleksi kelompok sangat krusial. Kelompok menggunakan fitur <em>split-screen</em> atau <em>multi-touch</em> di IFP untuk mendiskusikan dinamika tim mereka: Apakah semua anggota bekerja secara seimbang? Apakah komunikasi berjalan lancar?
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Hubungan dengan Asesmen Diagnostik</h2>
              <p>
                Refleksi adalah ujung dari sebuah siklus yang dimulai oleh <a href="/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDiagnosticIfp', '/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen diagnostik</a>. Jika asesmen diagnostik memetakan pengetahuan <em>sebelum</em> belajar, maka refleksi memetakan kebingungan dan pencerahan <em>setelah</em> belajar. Keduanya merupakan bagian integral dari data kognitif siswa. Refleksi hari ini adalah data diagnostik untuk pertemuan besok.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. Hubungan dengan Pembelajaran Berdiferensiasi</h2>
              <p>
                Bagaimana guru menggunakan hasil refleksi? Jawabannya adalah untuk merancang diferensiasi keesokan harinya. Jika pada papan refleksi IFP terlihat bahwa 30% siswa memilih kuadran "Masih Bingung tentang Konsep Gravitasi", maka pada jam pelajaran berikutnya, guru dapat merancang <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran berdiferensiasi</a>. Guru menarik kelompok 30% ini ke sudut kelas untuk pengajaran ulang intensif, sementara sisa kelas mengerjakan proyek mandiri.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">11. Hubungan dengan Pembelajaran Mendalam (Deep Learning)</h2>
              <p>
                <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Pembelajaran mendalam (deep learning)</a> tidak terjadi hanya karena siswa menerima informasi; ia terjadi ketika siswa menginternalisasi informasi tersebut. Refleksi memaksa siswa untuk melakukan internalisasi tersebut. Memvisualisasikannya di IFP membantu memicu memori jangka panjang (<em>long-term memory</em>) karena ada penguatan visual (<em>visual reinforcement</em>).
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">12. Integrasi ke dalam Modul Ajar</h2>
              <p>
                Langkah refleksi tidak boleh bersifat insidental (hanya dilakukan jika ada sisa waktu). Refleksi harus direncanakan secara terstruktur di dalam <a href="/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleModuleIfp', '/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">modul ajar</a>. Alokasikan setidaknya 10 menit terakhir secara spesifik untuk aktivitas penutupan interaktif ini.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">13. Contoh Penerapan: Matematika</h2>
              <p>
                <strong>Topik: Persamaan Linear.</strong><br/>
                Guru menggambar grafik garis menanjak di layar. Siswa diminta maju dan menempatkan pin digital di sepanjang garis tersebut: titik paling bawah berarti "Sangat Kesulitan", titik puncak berarti "Sangat Paham". Secara sekilas, guru melihat distribusi pemahaman kelas secara spasial.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">14. Contoh Penerapan: Bahasa Indonesia</h2>
              <p>
                <strong>Topik: Menulis Puisi.</strong><br/>
                Guru meminta setiap anak memproyeksikan satu kata atau satu baris kalimat terbaik dari puisi mereka ke IFP. Guru dan kelas membaca secara kolektif. Refleksinya adalah: "Manakah diksi milik temanmu yang paling menginspirasimu hari ini?"
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">15. Contoh Penerapan: IPA</h2>
              <p>
                <strong>Topik: Rantai Makanan.</strong><br/>
                Guru menampilkan bagan rantai makanan kosong di IFP. Siswa maju secara acak untuk melengkapi ekosistem. Refleksi terjadi ketika guru bertanya, "Berdasarkan apa yang kita susun di layar ini, apa yang akan terjadi jika organisme X punah?" Pertanyaan hipotetis ini memicu metakognisi tingkat tinggi.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">16. Contoh Penerapan: IPS</h2>
              <p>
                <strong>Topik: Peristiwa Sejarah.</strong><br/>
                Siswa menggunakan IFP untuk menyusun garis waktu (<em>timeline</em>) interaktif dari peristiwa sejarah yang baru saja dipelajari dengan cara <em>drag-and-drop</em>. Kemudian setiap siswa secara bergiliran berdiri dan menunjuk satu titik waktu yang paling mengejutkan bagi mereka secara emosional.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">17. Contoh Skenario Pembelajaran 2 JP (Fokus Refleksi Akhir)</h2>
              <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700">
                <h3 className="font-bold text-lg text-[#0C1A69] border-b border-purple-200 pb-2">Topik: Perubahan Wujud Benda (SD)</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>0-15 Menit (Diagnostik & Eksplorasi):</strong> Guru bertanya apa yang terjadi pada es yang dibiarkan di meja, menggunakan IFP untuk mencatat tebakan siswa.</li>
                  <li><strong>15-55 Menit (Inti):</strong> Melakukan eksperimen kecil dan menonton simulasi perubahan wujud (mencair, membeku, menguap) secara interaktif di layar IFP.</li>
                  <li><strong>55-70 Menit (Diskusi & Kesimpulan):</strong> Siswa mencocokkan kosakata dengan fenomena melalui kuis ringan.</li>
                  <li><strong>70-80 Menit (Fokus Refleksi):</strong> Guru membuka aplikasi kanvas digital di IFP dengan tiga keranjang virtual berlabel: "Aku Belajar", "Aku Terkejut", dan "Aku Masih Bingung". Setiap anak maju menyeret (<em>drag</em>) ikon bintang ke keranjang yang paling mewakili perasaan mereka, lalu mengucapkan satu kalimat singkat (misal: "Aku terkejut ternyata air bisa menjadi uap yang tak terlihat").</li>
                  <li><strong>Pasca Kelas:</strong> Guru meninjau sebaran bintang dan menemukan keranjang "Masih Bingung" berisi banyak bintang terkait materi "Menyublim". Besok, guru akan mengulang materi khusus tentang menyublim menggunakan kamper.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">18. Kesalahan Umum Saat Menggunakan IFP untuk Refleksi</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Waktu Terburu-buru:</strong> Melakukan refleksi di saat bel sudah berbunyi. Siswa hanya merespons asal-asalan demi cepat pulang.</li>
                <li><strong>Data Diabaikan:</strong> Guru mengumpulkan refleksi siswa di IFP yang canggih, memotret layarnya, namun tidak pernah menggunakan data tersebut untuk memodifikasi RPP pertemuan berikutnya.</li>
                <li><strong>Fokus pada Alat, Bukan Makna:</strong> Terlalu asyik menggunakan animasi dan <em>sound effect</em> di layar sentuh, sehingga substansi refleksi pedagogisnya hilang. Alat bantu menjadi gangguan (<em>distraction</em>).</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">19. Checklist Guru Sebelum Kelas Berakhir</h2>
              <ul className="list-none space-y-2 font-medium text-gray-600">
                <li><span className="text-purple-500 mr-2">✓</span> Apakah saya sudah menyediakan minimal 10 menit khusus untuk refleksi?</li>
                <li><span className="text-purple-500 mr-2">✓</span> Apakah aktivitas refleksi melibatkan sentuhan (interaksi fisik dengan IFP) atau proyeksi langsung?</li>
                <li><span className="text-purple-500 mr-2">✓</span> Apakah pertanyaan refleksi berfokus pada "bagaimana" dan "mengapa", bukan hanya "apa"?</li>
                <li><span className="text-purple-500 mr-2">✓</span> Apakah saya sudah menyimpan layar kanvas (<em>screenshot</em> / <em>save file</em>) hasil refleksi untuk dievaluasi nanti?</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">20. Penutup</h2>
              <p className="text-xl font-bold text-center text-purple-800 bg-purple-50 p-6 rounded-2xl border border-purple-100 my-8 shadow-sm">
                "Sebuah kelas tanpa refleksi ibarat buku harian yang tak pernah dibaca ulang. IFP memberi kita lensa besar untuk membaca buku harian kognitif siswa kita bersama-sama."
              </p>
              <p>
                <strong>Refleksi pembelajaran dengan IFP</strong> mengubah siswa dari "konsumen" informasi menjadi "evaluator" proses kognitif mereka sendiri. Ketika teknologi digunakan dengan niat pedagogis yang jelas, layar sentuh bukan sekadar pajangan mahal, melainkan sebuah ruang merenung yang interaktif, di mana setiap anak menyadari bahwa suara, kebingungan, dan pencapaian mereka benar-benar diakui.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleReflectionIfp;
