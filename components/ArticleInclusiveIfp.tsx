import React, { useEffect } from 'react';

interface ArticleInclusiveIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleInclusiveIfp: React.FC<ArticleInclusiveIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran Inklusif Menggunakan IFP di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan komprehensif menerapkan pembelajaran inklusif menggunakan Interactive Flat Panel (IFP) untuk memfasilitasi berbagai kebutuhan dan gaya belajar siswa di kelas."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-inklusif-menggunakan-ifp-di-kelas');

    // Structured Data for Article
    const scriptId = 'article-inclusive-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran Inklusif Menggunakan IFP di Kelas",
          "description": "Panduan komprehensif menerapkan pembelajaran inklusif menggunakan Interactive Flat Panel (IFP) untuk memfasilitasi berbagai kebutuhan dan gaya belajar siswa di kelas.",
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
              "name": "Pembelajaran Inklusif Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-inklusif-menggunakan-ifp-di-kelas"
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
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran Inklusif Menggunakan IFP di Kelas</li>
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
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Inklusivitas</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Pembelajaran Inklusif Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-emerald-500 pl-4">
                "IFP hanyalah alat. Inklusivitas ditentukan oleh desain pembelajaran, strategi guru, aksesibilitas, kesempatan berpartisipasi, dan penghargaan terhadap keberagaman kebutuhan peserta didik."
              </p>

              <p>
                Kelas adalah mikrokosmos dari masyarakat yang sangat beragam. Setiap siswa memasuki ruang kelas dengan latar belakang, gaya belajar, dan tantangan yang unik. Menerapkan <strong>pembelajaran inklusif dengan IFP</strong> (Interactive Flat Panel) bukan berarti sekadar menyalakan layar besar; ini tentang menggunakan teknologi tersebut untuk meruntuhkan hambatan belajar, memastikan setiap anak memiliki akses yang adil terhadap pengetahuan, dan memberi mereka ruang untuk berpartisipasi.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu Pembelajaran Inklusif?</h2>
              <p>
                Pembelajaran inklusif adalah pendekatan pedagogis yang merangkul dan mengakomodasi semua peserta didik, apa pun kondisi fisik, intelektual, sosial, emosional, atau linguistik mereka. Tujuannya adalah menciptakan lingkungan belajar di mana setiap siswa merasa dihargai dan didukung secara penuh. Dalam konteks ini, media seperti IFP berfungsi sebagai jembatan untuk memastikan tidak ada siswa yang tertinggal dalam proses eksplorasi ilmu.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Mengapa Keberagaman Kebutuhan Belajar Perlu Diperhatikan?</h2>
              <p>
                Mengabaikan keberagaman di kelas sama dengan merancang kegagalan secara sistematis bagi sebagian siswa. Anak yang dominan visual akan kesulitan jika guru hanya berceramah. Anak yang kinestetik akan merasa gelisah jika hanya disuruh duduk membaca buku teks. Dengan memperhatikan keberagaman dan menerapkan strategi inklusif, guru memvalidasi potensi setiap anak. <a href="/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpMedia', '/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">Penggunaan IFP secara maksimal</a> dapat menjawab tantangan visual, auditori, maupun kinestetik sekaligus.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. IFP Sebagai Alat Bantu, Bukan Tujuan</h2>
              <p>
                Sangat penting untuk diingat bahwa teknologi, secanggih apa pun itu, tidak dapat secara otomatis menciptakan kelas yang inklusif. <strong>IFP untuk pembelajaran inklusif</strong> harus diposisikan secara proporsional. Alat ini tidak menggantikan empati dan kepekaan pedagogis guru. Justru, IFP adalah ekstensi dari kemampuan guru untuk menyajikan materi secara lebih fleksibel dan menangkap respons siswa yang beragam.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Membangun Aksesibilitas dengan IFP</h2>
              <p>
                Salah satu pilar inklusivitas adalah aksesibilitas. Berikut adalah bagaimana layar sentuh besar ini dapat menjembatani berbagai kesenjangan akses:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Akses Visual:</strong> Dengan layar 4K, siswa di barisan belakang tidak lagi harus menyipitkan mata. Fitur <em>zoom</em> memungkinkan guru memperbesar diagram kompleks sehingga detail terkecil dapat dilihat oleh semua orang.</li>
                <li><strong>Akses Teks:</strong> IFP memungkinkan penggunaan font dengan ukuran besar, kontras tinggi, atau bahkan <em>font</em> khusus untuk disleksia.</li>
                <li><strong>Akses Audio:</strong> Speaker <em>built-in</em> pada IFP memastikan bahwa instruksi suara, video dokumenter, atau umpan balik audio terdengar jelas ke seluruh penjuru ruangan.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Strategi Multisensori Menggunakan IFP</h2>
              <p>
                Pendekatan multisensori (menggabungkan penglihatan, pendengaran, dan gerakan fisik) sangat kuat untuk kelas inklusif. Saat merancang <a href="/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleModuleIfp', '/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">modul ajar menggunakan IFP</a>, guru dapat:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Memutar video tentang fenomena alam (visual dan audio).</li>
                <li>Mengajak siswa maju untuk menggeser elemen di layar (kinestetik-taktil).</li>
                <li>Meminta siswa menjelaskan pilihan yang mereka buat di layar kepada teman sekelas (verbal).</li>
              </ul>
              <p>
                Langkah-langkah ini memastikan bahwa, terlepas dari preferensi belajar mereka, setiap siswa mendapatkan input informasi dengan cara yang paling mudah mereka cerna.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Kesempatan Partisipasi yang Adil</h2>
              <p>
                Siswa pemalu atau introver sering kali enggan mengangkat tangan, meskipun mereka tahu jawabannya. <strong>Teknologi untuk pembelajaran inklusif</strong> dapat mengatasi masalah ini. Melalui fitur <em>screen mirroring</em> atau aplikasi kuis interaktif, siswa dapat mengirimkan jawaban mereka secara anonim dari perangkat masing-masing (tablet/ponsel) langsung ke layar IFP. Ini menciptakan rasa aman (<em>psychological safety</em>) dan mendorong partisipasi 100%.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Mencegah Dominasi Siswa Tertentu</h2>
              <p>
                Tantangan klasik dalam penggunaan media interaktif adalah sekelompok kecil siswa (yang percaya diri atau hiperaktif) mendominasi layar. Guru harus menetapkan aturan yang jelas, yang dibahas mendalam dalam <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">strategi pengelolaan kelas</a>. Gunakan sistem rotasi yang terstruktur, seperti roda nama (<em>random name picker</em>) di IFP, untuk memastikan setiap anak mendapat giliran menyentuh dan berinteraksi di depan kelas secara adil.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Aktivitas Inklusif Menggunakan IFP</h2>
              <p>
                Beberapa <a href="/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpActivities', '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">aktivitas inklusif menggunakan IFP</a> yang bisa diterapkan antara lain:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Mind Mapping Kolaboratif:</strong> Setiap siswa menambahkan ide secara visual di papan tulis digital.</li>
                <li><strong>Pencocokan Gambar (Picture Matching):</strong> Cocok untuk siswa yang masih berjuang dengan teks tertulis, mereka bisa mencocokkan makna dengan representasi visualnya.</li>
                <li><strong>Anotasi Teks Bersama:</strong> Siswa menyoroti informasi penting (<em>highlight</em>) dalam bacaan secara digital.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Contoh Penerapan Berdasarkan Mata Pelajaran</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg my-4 text-sm text-gray-700">
                  <thead className="bg-emerald-50 border-b border-emerald-100">
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Mata Pelajaran</th>
                      <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Pendekatan Inklusif di IFP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4 font-semibold">Matematika</td>
                      <td className="py-3 px-4">Menggunakan manipulatif virtual (seperti blok pecahan yang bisa digeser) agar konsep abstrak menjadi berwujud (<em>tangible</em>).</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Bahasa & Sastra</td>
                      <td className="py-3 px-4">Menggabungkan teks cerita dengan fitur <em>Text-to-Speech</em> IFP untuk membantu siswa yang kesulitan membaca teks panjang.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Seni Budaya</td>
                      <td className="py-3 px-4">Menggunakan kanvas digital tanpa batas, di mana siswa yang kesulitan dengan motorik halus pada kuas nyata dapat berkreasi menggunakan alat lukis digital yang responsif.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. Contoh Skenario Pembelajaran 2 JP (Inklusif)</h2>
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700">
                <h3 className="font-bold text-lg text-[#0C1A69] border-b pb-2">Topik: Siklus Air (IPA)</h3>
                <p><strong>Fase Pemahaman (Visual/Audio):</strong> Guru menampilkan animasi siklus air di IFP, lengkap dengan sulih suara (<em>voice-over</em>) dan teks berjalan (<em>closed captions</em>).</p>
                <p><strong>Fase Interaktif (Kinestetik):</strong> Guru membagi layar (<em>split-screen</em>) menjadi 4 area. Empat siswa dari latar belakang kemampuan yang berbeda maju ke depan. Mereka diminta mengurutkan tahapan siklus air dengan menggeser kotak gambar. Karena berupa permainan, siswa tidak merasa sedang "dites".</p>
                <p><strong>Fase Ekspresi (Verbal/Teks):</strong> Siswa diizinkan memilih cara merefleksikan pemahaman. Mereka bisa menggambar di layar IFP, berbicara melalui rekaman suara pendek, atau mengetik ringkasan di tablet mereka yang kemudian diproyeksikan ke layar.</p>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">11. Peran Guru Sebagai Fasilitator</h2>
              <p>
                Di kelas inklusif, IFP menempatkan guru bukan sebagai satu-satunya sumber pengetahuan (<em>sage on the stage</em>), melainkan sebagai pemandu di samping siswa (<em>guide on the side</em>). Guru harus sigap memantau: Siapa yang tampak kebingungan dengan visual di layar? Siapa yang belum mendapatkan giliran? Teknologi berjalan secara pasif; gurulah yang mengarahkannya agar ramah terhadap keragaman.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">12. Hubungan dengan Pembelajaran Berdiferensiasi</h2>
              <p>
                Inklusivitas sangat dekat kaitannya dengan diferensiasi, meskipun keduanya bukan konsep yang persis sama. Seperti yang dibahas dalam <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran berdiferensiasi dengan IFP</a>, guru dapat menggunakan layar besar untuk menyediakan <em>scaffolding</em> bagi kelompok yang membutuhkan, sementara kelompok yang lebih mandiri dapat bekerja dalam proyek terpisah. Intinya adalah memberi dukungan (<em>support</em>) yang disesuaikan tanpa memisahkan atau mengisolasi kelompok tertentu.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">13. Hubungan dengan Pembelajaran Mendalam</h2>
              <p>
                Siswa tidak akan mencapai <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran mendalam (deep learning)</a> jika mereka sejak awal merasa tersisihkan karena metode pengajaran yang kaku. IFP memungkinkan simulasi, manipulasi variabel, dan eksplorasi visual. Hal ini membantu siswa dengan kemampuan berpikir abstrak yang belum berkembang secara optimal untuk melihat hubungan sebab-akibat secara langsung, yang pada akhirnya memicu pemahaman konseptual yang lebih dalam.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">14. Asesmen Formatif yang Inklusif</h2>
              <p>
                Dalam <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif menggunakan IFP</a>, inklusivitas berarti menawarkan fleksibilitas. Daripada sekadar meminta semua siswa menjawab pilihan ganda di kertas, IFP memungkinkan ragam asesmen yang luas: jajak pendapat cepat berbasis warna, pengurutan gambar (<em>drag-and-drop</em>) yang minim tulisan teks panjang, hingga kuis interaktif berbentuk <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game edukasi</a> yang mengurangi tekanan psikologis (<em>test anxiety</em>) pada siswa.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">15. Kesalahan Umum Penggunaan IFP di Kelas Inklusif</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Over-stimulasi:</strong> Menampilkan animasi berlebihan, suara keras mendadak, atau warna-warna neon yang mencolok. Ini dapat membebani sensorik (<em>sensory overload</em>) siswa tertentu.</li>
                <li><strong>Ukuran Font Terlalu Kecil:</strong> Guru mendesain materi di laptop kecil dan tidak menyadari bahwa teksnya tidak terbaca dari jarak 5 meter.</li>
                <li><strong>Tinggi Layar Tidak Terjangkau:</strong> Jika IFP dipasang terlalu tinggi tanpa opsi penyesuaian (<em>stand</em> yang bisa dinaik-turunkan), siswa berpostur kecil (atau siswa difabel pengguna kursi roda, bila ada) tidak akan bisa menjangkau dan berinteraksi dengan area atas layar.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">16. Checklist Guru Sebelum Memulai Kelas Inklusif dengan IFP</h2>
              <p>
                Pastikan Anda memeriksa poin-poin berikut:
              </p>
              <ul className="list-none space-y-2 font-medium text-gray-600">
                <li><span className="text-emerald-500 mr-2">✓</span> Apakah teks di layar terbaca dari kursi paling belakang?</li>
                <li><span className="text-emerald-500 mr-2">✓</span> Apakah ada kontras yang jelas antara teks dan <em>background</em>?</li>
                <li><span className="text-emerald-500 mr-2">✓</span> Apakah aktivitas saya mengakomodasi siswa yang dominan visual, audio, maupun kinestetik?</li>
                <li><span className="text-emerald-500 mr-2">✓</span> Apakah ada metode partisipasi alternatif bagi siswa yang tidak suka menjawab secara lisan di depan kelas?</li>
                <li><span className="text-emerald-500 mr-2">✓</span> Apakah saya menggunakan fitur-fitur seperti timer, anotasi, dan <em>screen-sharing</em> untuk memandu fokus seluruh anak?</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">17. Refleksi Akhir</h2>
              <p className="text-xl font-bold text-center text-emerald-800 bg-emerald-50 p-6 rounded-2xl border border-emerald-100 my-8 shadow-sm">
                "Kehebatan layar sentuh interaktif tidak diukur dari jutaan pikselnya, melainkan dari kemampuannya untuk menyalakan binar pemahaman di mata anak-anak yang sebelumnya terpinggirkan oleh metode pengajaran tradisional."
              </p>
              <p>
                Pada akhirnya, <strong>media pembelajaran inklusif dengan IFP</strong> berfungsi seefektif orang yang mengendalikannya. Jika guru memiliki visi bahwa semua anak bisa belajar, IFP akan menjadi kanvas tanpa batas yang menjembatani hambatan menjadi peluang, dan mengubah kebingungan menjadi pemahaman kolektif di ruang kelas Anda.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleInclusiveIfp;
