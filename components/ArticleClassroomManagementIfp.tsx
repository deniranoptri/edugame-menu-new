import React, { useEffect } from 'react';

interface ArticleClassroomManagementIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleClassroomManagementIfp: React.FC<ArticleClassroomManagementIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Strategi Pengelolaan Kelas Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Strategi mengelola kelas menggunakan IFP untuk mengatur perhatian, rotasi, transisi, dan partisipasi siswa agar pembelajaran interaktif tetap tertib."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp');

    // Structured Data for Article
    const scriptId = 'article-management-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Strategi Pengelolaan Kelas Menggunakan IFP",
          "description": "Strategi mengelola kelas menggunakan IFP untuk mengatur perhatian, rotasi, transisi, dan partisipasi siswa agar pembelajaran interaktif tetap tertib.",
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
              "name": "Strategi Pengelolaan Kelas Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Strategi Pengelolaan Kelas Menggunakan IFP</li>
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
              <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Manajemen Kelas</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Strategi Mengelola Kelas Menggunakan IFP
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-rose-500 pl-4">
                "Kehadiran teknologi canggih seperti layar sentuh raksasa dapat menjadi magnet perhatian sekaligus sumber kekacauan. IFP adalah alat pedagogis yang luar biasa, namun tanpa fondasi manajemen kelas yang kokoh, alat ini akan kehilangan potensinya."
              </p>

              <p>
                Menerapkan <strong>strategi mengelola kelas menggunakan IFP</strong> (Interactive Flat Panel) jauh melampaui sekadar mengetahui cara menghidupkan layar atau membuka aplikasi. Tantangan pedagogis sebenarnya terletak pada orkestrasi manusia: bagaimana mengatur 30 hingga 40 siswa agar tetap fokus, berpartisipasi secara adil, dan tidak saling mendominasi saat berinteraksi dengan satu perangkat pusat. Teknologi tidak dapat menggantikan peran krusial seorang guru dalam menetapkan struktur dan rutinitas kelas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Mengapa IFP Mengubah Dinamika Manajemen Kelas?</h2>
              <p>
                Di kelas konvensional, pusat perhatian sering kali adalah guru. Dengan masuknya IFP, pusat perhatian visual dan motorik bergeser ke layar bercahaya. Fitur multi-touch dan gamifikasi secara alami memicu antusiasme siswa. Jika tidak dikendalikan melalui <em>strategi pengelolaan kelas dengan IFP</em>, antusiasme ini dapat meledak menjadi keributan, perebutan giliran, atau sebaliknya—kelengahan bagi siswa yang tidak sedang berada di depan layar.
              </p>
              
              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Masalah Umum Pengelolaan Kelas Saat Menggunakan IFP</h2>
              <p>
                Tanpa aturan yang jelas, guru akan segera menghadapi:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Bottleneck Partisipasi:</strong> Seluruh kelas berkerumun di depan satu panel.</li>
                <li><strong>Efek Penonton (Bystander Effect):</strong> Saat 4 anak memecahkan soal di IFP, 26 anak lainnya pasif menonton atau malah asyik mengobrol.</li>
                <li><strong>Transisi yang Lambat:</strong> Waktu terbuang hanya untuk mengganti giliran kelompok maju ke depan kelas.</li>
                <li><strong>Kehilangan Kendali Waktu:</strong> Keterasyikan menggunakan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-700 hover:underline font-bold">game edukasi IFP</a> membuat materi esensial tidak tersampaikan.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Menetapkan Aturan dan Rutinitas Dasar IFP</h2>
              <p>
                Langkah pertama dalam <strong>manajemen kelas menggunakan Interactive Flat Panel</strong> adalah menetapkan rutinitas eksplisit. Buatlah poster kecil di samping IFP yang berisi aturan seperti:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Maju Hanya Jika Dipanggil:</strong> Tidak ada siswa yang boleh berlari ke IFP sebelum guru memberikan instruksi.</li>
                <li><strong>Sentuhan Stylus/Jari Lembut:</strong> Mengajarkan siswa untuk tidak memukul atau menekan layar terlalu keras.</li>
                <li><strong>Berdiri Menyamping:</strong> Saat menulis di IFP, siswa harus memosisikan tubuhnya agak menyamping agar siswa yang duduk tetap bisa melihat layar (aturan visibilitas).</li>
              </ol>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Mengelola Perhatian Siswa (Attention Management)</h2>
              <p>
                Ketika guru sedang menjelaskan konsep penting, layar IFP yang menampilkan animasi cerah bisa mendistraksi siswa. Strategi utamanya adalah fitur <strong>Screen Freeze</strong> atau <strong>Blank Screen</strong> (Layar Hitam). Saat Anda butuh 100% <em>eye contact</em> dengan siswa, redupkan atau bekukan layar. Anda bisa mengatakan, <em>"Layar mati, mata ke guru!"</em> untuk menciptakan rutinitas pengalihan perhatian yang tegas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Mengelola Partisipasi Layar Sentuh</h2>
              <p>
                IFP modern bisa menerima hingga 20 atau 40 titik sentuh. Namun, secara ergonomis, menempatkan lebih dari 4 siswa secara bersamaan di depan layar akan menimbulkan kekacauan fisik (sikutan, dorongan). Batasi <strong>pengelolaan kelas interaktif dengan IFP</strong> pada maksimal 3-4 siswa secara serentak. Gunakan fitur layar terbelah (<em>split-screen</em>) agar tiap siswa memiliki zona sentuhnya sendiri.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Mencegah Dominasi Siswa yang Monopoli Layar</h2>
              <p>
                Siswa ekstrovert cenderung selalu mengangkat tangan dan berlari ke IFP. Untuk <strong>cara mengelola kelas menggunakan IFP</strong> secara adil, gunakan aplikasi roda putar digital (<em>random name picker</em>) bawaan IFP untuk memanggil siswa secara acak. Anda juga dapat menggunakan sistem <em>"Token Giliran"</em> di mana setiap siswa yang sudah maju ke IFP harus menyerahkan tokennya dan tidak bisa maju lagi sampai semua temannya mendapat giliran.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Mengelola Rotasi Kelompok Secara Efektif</h2>
              <p>
                Jika Anda menggunakan IFP sebagai salah satu "Stasiun Belajar", atur alur pergerakan (<em>traffic</em>) ruang kelas Anda. Pastikan jalur dari meja siswa menuju IFP bebas hambatan. Saat alarm rotasi berbunyi, buat rutinitas: <em>"Berdiri, rapikan kursi, berputar searah jarum jam dalam 10 detik."</em> IFP untuk manajemen kelas sangat terbantu dengan visualisasi timer hitung mundur raksasa di layar.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Mengelola Transisi Antar Aktivitas</h2>
              <p>
                Kekacauan sering terjadi pada jeda waktu antara aktivitas membaca teks dan aktivitas kuis di IFP. Untuk <strong>mengatur aktivitas siswa dengan IFP</strong>, biasakan menyiapkan semua <em>tab</em> aplikasi, tab browser, atau <em>slide</em> presentasi sebelum kelas dimulai. Jangan membuat siswa menunggu Anda mencari file di dalam folder karena waktu tunggu (<em>downtime</em>) memicu anak-anak mulai ribut.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Manajemen Waktu Pembelajaran Menggunakan IFP</h2>
              <p>
                <strong>Manajemen waktu pembelajaran menggunakan IFP</strong> krusial karena aktivitas interaktif sering kali memakan waktu lebih lama dari perkiraan. Selalu tampilkan <em>Timer Digital</em> melayang di sudut layar. Jika kelompok diberikan waktu 5 menit untuk melakukan anotasi peta pikiran, timer ini memaksa mereka fokus dan menyelesaikan tepat waktu.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. Mengelola Kebisingan dan Pergerakan</h2>
              <p>
                Permainan edukasi sering memicu sorakan. Gunakan aplikasi "Noise Meter" (Pengukur Kebisingan Bouncing Balls) di IFP yang sensitif terhadap mikrofon ruangan. Jika kelas terlalu berisik, bola-bola di layar IFP akan memantul hebat hingga menyentuh garis merah. Ini adalah cara gamifikasi yang bagus untuk <strong>mengelola perhatian siswa dengan layar interaktif</strong> dan mengatur <em>volume</em> kelas secara visual.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">11. Posisi Guru dan Visibilitas Kelas</h2>
              <p>
                Berhentilah bertindak sebagai operator mesin. Jika guru terus memunggungi kelas untuk menulis di IFP, guru kehilangan kontrol visual terhadap 30 siswa di belakangnya. Gunakan fitur <em>screen casting</em> dari tablet atau laptop Anda sambil berjalan berkeliling. Dengan cara ini, Anda memadukan visibilitas papan tulis dengan pengawasan mobilitas yang maksimal.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">12. Pembagian Aktivitas Siswa Menggunakan IFP</h2>
              <p>
                Strategi memecah kebosanan adalah membagi aktivitas. Setengah kelas mengerjakan tugas tertulis, setengahnya lagi mendiskusikan materi di depan IFP. Teknik <strong>pembagian aktivitas siswa menggunakan IFP</strong> ini harus dibarengi dengan lembar kerja terstruktur bagi siswa yang tidak berada di depan layar.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">13. Mencegah Pasivitas (Efek Penonton)</h2>
              <p>
                Saat satu kelompok mempresentasikan hasil di IFP, berikan tugas spesifik bagi "audiens". Misalnya, minta siswa yang duduk untuk menyiapkan satu pertanyaan yang harus diajukan, atau memberikan nilai menggunakan rubrik mini. Ini mengikat mereka agar tetap aktif secara mental meski secara fisik tidak menyentuh layar.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">14. Contoh Skenario 2 JP (Kelas Interaktif yang Tertib)</h2>
              <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700">
                <h3 className="font-bold text-lg text-[#0C1A69] border-b border-rose-200 pb-2">Topik: Siklus Tata Surya (Fokus Manajemen Kelas)</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>0-10 Menit (Rutinitas Pembuka):</strong> Guru menyalakan IFP, menampilkan <em>timer</em> hitung mundur 3 menit untuk siswa merapikan meja. Setelah timer habis, guru menampilkan visualisasi tata surya 3D.</li>
                  <li><strong>10-25 Menit (Penjelasan dengan Mobilitas):</strong> Guru menjelaskan sambil <em>berkeliling kelas</em> mengendalikan IFP via tablet (<em>casting</em>), memastikan tidak ada titik buta (<em>blind spot</em>) pengawasan.</li>
                  <li><strong>25-50 Menit (Rotasi Terstruktur):</strong> Kelas dibagi 4 kelompok. Timer IFP diset 6 menit per stasiun. Kelompok A maju ke IFP untuk menggeser (<em>drag-and-drop</em>) planet sesuai orbitnya. Kelompok B, C, D mengerjakan LKS di meja. Saat alarm bunyi, rotasi dilakukan dengan aba-aba hitungan 1 sampai 5.</li>
                  <li><strong>50-70 Menit (Kuis Terpusat):</strong> Kuis interaktif klasikal. Alih-alih rebutan lari ke depan, guru menggunakan roda acak di IFP. Nama yang keluar (misal: "Budi") maju ke depan. Sisa kelas menggunakan kartu warna (A/B/C/D) untuk menjawab dari kursi mereka.</li>
                  <li><strong>70-80 Menit (Penutup & Transisi):</strong> Guru membekukan (<em>freeze</em>) layar IFP. Instruksi penutup diberikan dengan kontak mata penuh. Siswa membersihkan area dan kelas ditutup dengan rapi.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">15. Penerapan pada Mata Pelajaran IPA</h2>
              <p>
                Saat menggunakan simulasi laboratorium virtual di IFP, guru menetapkan batas tegas: "Hanya Asisten Lab (1 siswa) yang boleh menggeser tabung reaksi digital di IFP, sementara anggota lainnya bertugas mencatat data di buku." Ini mencegah kekacauan multi-touch yang merusak simulasi.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">16. Penerapan pada Matematika</h2>
              <p>
                Saat siswa maju ke IFP untuk memecahkan persamaan aljabar panjang, guru menyalakan layar <em>split</em> (terbelah). Dua siswa bekerja berdampingan dengan <em>stylus</em> berbeda. Aturan manajemen kelasnya: siswa dilarang mencoret area kerja lawannya, memastikan <strong>pengelolaan kelas digital</strong> tetap menghargai batas ruang pribadi.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">17. Penerapan pada Bahasa Indonesia</h2>
              <p>
                Dalam aktivitas mengoreksi paragraf, guru menyorot teks di IFP. Daripada menunjuk anak yang tunjuk tangan, guru melempar "Bola Kertas" secara acak. Siapa yang menangkap bola, dialah yang maju memberikan anotasi koma atau titik. Teknik kinestetik ini memastikan semua siswa bersiap diri, bukan hanya siswa yang langganan menjawab.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">18. Penerapan pada IPS</h2>
              <p>
                Saat mempelajari peta buta, IFP digunakan sebagai stasiun pusat. Siswa diminta menempelkan "stiker digital" pada negara yang dibahas. Manajemennya: siswa maju secara bergilir seperti estafet (<em>relay</em>). Setelah menempelkan stiker, ia memberikan <em>stylus</em> ke teman di belakangnya, lalu kembali ke tempat duduk. 
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">19. Kesalahan Umum Pengelolaan IFP</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Gagal Menyiapkan Backup:</strong> Internet mati atau aplikasi <em>crash</em> saat murid sudah berdiri di depan IFP. Selalu siapkan Rencana B (<em>offline</em>) agar murid tidak ribut saat ada gangguan teknis.</li>
                <li><strong>Mengabaikan Keterkaitan Pedagogis:</strong> Terlalu asyik membiarkan anak-anak menggambar bebas di aplikasi <em>whiteboard</em> sehingga melupakan konsep yang sedang diajarkan, misalnya terkait <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran mendalam</a>.</li>
                <li><strong>Membiarkan Layar Menyala Tanpa Tujuan:</strong> Layar berkedip-kedip saat guru sedang memberi nasihat penting, membuat fokus anak terpecah.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">20. Checklist Guru (Manajemen IFP)</h2>
              <ul className="list-none space-y-2 font-medium text-gray-600">
                <li><span className="text-rose-500 mr-2">✓</span> Apakah semua materi sudah saya buka dan di-<em>minimize</em> sebelum bel masuk berbunyi?</li>
                <li><span className="text-rose-500 mr-2">✓</span> Apakah saya sudah menyediakan tugas bagi 80% murid yang sedang menunggu gilirannya menggunakan IFP?</li>
                <li><span className="text-rose-500 mr-2">✓</span> Apakah saya menggunakan fitur <em>timer</em> IFP untuk mengunci transisi setiap sesi?</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">21. Kesimpulan</h2>
              <p className="text-xl font-bold text-center text-rose-800 bg-rose-50 p-6 rounded-2xl border border-rose-100 my-8 shadow-sm">
                "Sebuah kapal yang canggih tetap membutuhkan nakhoda yang memegang kendali arah dan kecepatan. IFP adalah kapalnya, dan manajemen kelas adalah kendalinya."
              </p>
              <p>
                Guru yang menguasai <strong>strategi mengelola kelas menggunakan IFP</strong> akan mendapati bahwa perangkat ini jauh dari sekadar proyektor mahal. Dengan rutinitas transisi yang tegas, pembatasan rotasi partisipasi, dan menjaga visibilitas serta posisi guru, kelas interaktif yang tertib bukanlah sebuah utopia. Teknologi IFP, apabila dibarengi dengan kepemimpinan kelas (<em>classroom leadership</em>) yang kuat, akan mengubah cara kita menyelenggarakan pembelajaran abad 21 yang benar-benar produktif, bukan sekadar ramai.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleClassroomManagementIfp;
