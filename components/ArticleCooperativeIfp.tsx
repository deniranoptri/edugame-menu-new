import React, { useEffect } from 'react';

interface ArticleCooperativeIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleCooperativeIfp: React.FC<ArticleCooperativeIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran Kooperatif Menggunakan IFP di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan memfasilitasi pembelajaran kooperatif menggunakan Interactive Flat Panel (IFP), mencakup interdependensi positif, peran siswa, dan aktivitas kelompok."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp');

    // Structured Data for Article
    const scriptId = 'article-cooperative-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran Kooperatif Menggunakan IFP di Kelas",
          "description": "Panduan memfasilitasi pembelajaran kooperatif menggunakan Interactive Flat Panel (IFP), mencakup interdependensi positif, peran siswa, dan aktivitas kelompok.",
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
              "name": "Pembelajaran Kooperatif dengan IFP",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran Kooperatif dengan IFP</li>
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
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Model Pembelajaran</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Pembelajaran Kooperatif Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-emerald-500 pl-4">
                "Duduk dalam kelompok tidak otomatis membuat siswa bekerja sama. Kerja sama yang nyata lahir dari struktur yang memaksa mereka saling bergantung. Di sinilah IFP hadir sebagai pusat kendali visual, di mana setiap kontribusi individu menjadi bagian tak terpisahkan dari kesuksesan bersama."
              </p>

              <p>
                Banyak guru mengira bahwa dengan membagi siswa ke dalam meja bundar dan memberi mereka satu lembar tugas, maka pembelajaran kooperatif telah terjadi. Kenyataannya, tanpa struktur yang jelas, tugas kelompok sering kali hanya dikerjakan oleh satu siswa yang paling pintar, sementara yang lain menumpang nama. Menerapkan <strong>pembelajaran kooperatif dengan IFP</strong> (Interactive Flat Panel) membawa perubahan signifikan. Layar interaktif ini menjadi medium tempat tanggung jawab individu, peran spesifik, dan interaksi kelompok divisualisasikan dengan jelas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu Pembelajaran Kooperatif?</h2>
              <p>
                Pembelajaran kooperatif (<em>cooperative learning</em>) adalah strategi pembelajaran terstruktur di mana siswa bekerja dalam kelompok kecil yang heterogen untuk mencapai tujuan bersama. Keberhasilan kelompok sangat bergantung pada keberhasilan setiap anggotanya. Dalam pendekatan ini, siswa tidak bersaing satu sama lain (kompetitif) dan tidak juga bekerja sendiri-sendiri tanpa peduli teman di sebelahnya (individualistis).
              </p>
              
              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Mengapa Kerja Kelompok Belum Tentu Cooperative Learning?</h2>
              <p>
                Dalam kerja kelompok tradisional, instruksinya biasanya: <em>"Kerjakan soal ini bersama-sama."</em> Hasilnya? Satu orang berpikir, satu orang menulis, dan sisanya mengobrol. Pembelajaran kooperatif mencegah hal ini dengan mendesain struktur yang membuat anggota kelompok <em>tidak mungkin</em> berhasil jika ada satu pun anggotanya yang gagal berkontribusi.
              </p>
              <p>
                Penting juga membedakan pembelajaran kooperatif dari beberapa pendekatan lain:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Pembelajaran Kolaboratif</a>: Mirip, tetapi kolaboratif lebih fleksibel dan tidak selalu memiliki struktur peran seketat kooperatif.</li>
                <li><a href="/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articlePblIfp', '/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">PBL (Problem Based Learning)</a>: Fokus pada penyelesaian masalah terbuka sebagai titik awal pembelajaran.</li>
                <li><a href="/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articlePjblIfp', '/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">PjBL (Project Based Learning)</a>: Fokus pada pembuatan produk karya nyata jangka panjang.</li>
              </ul>
              <p>
                Pembelajaran kooperatif bisa diterapkan di dalam PBL maupun PjBL sebagai metode pengorganisasian kerja siswa.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Unsur Mutlak Pembelajaran Kooperatif</h2>
              <p>Agar disebut kooperatif, pembelajaran harus memiliki 5 unsur ini (menurut Johnson & Johnson):</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Interdependensi Positif:</strong> "Kita tenggelam atau berenang bersama."</li>
                <li><strong>Tanggung Jawab Individu:</strong> Setiap siswa harus bisa mempertanggungjawabkan bagian tugasnya sendiri.</li>
                <li><strong>Interaksi Tatap Muka:</strong> Siswa berhadapan untuk saling memotivasi dan menjelaskan (<em>promotive interaction</em>).</li>
                <li><strong>Keterampilan Sosial:</strong> Kepemimpinan, resolusi konflik, dan komunikasi aktif diajarkan.</li>
                <li><strong>Evaluasi Proses Kelompok:</strong> Siswa mendiskusikan apa yang berjalan baik dan apa yang perlu diperbaiki dari cara mereka bekerja sama.</li>
              </ol>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Peran IFP dalam Pembelajaran Kooperatif</h2>
              <p>
                IFP bukanlah instrumen yang secara ajaib membuat siswa bisa bekerja sama. IFP berfungsi sebagai:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Papan Kerja Visual:</strong> Ruang di mana seluruh ide kelompok dituangkan (melalui <em>multi-touch</em>).</li>
                <li><strong>Pusat Informasi Bersama:</strong> Menampilkan instruksi, timer hitung mundur, dan rubrik sehingga selalu terlihat.</li>
                <li><strong>Media Presentasi Interaktif:</strong> Memungkinkan presentasi bukan sekadar membaca slide statis, melainkan melakukan demonstrasi dan manipulasi data.</li>
                <li><strong>Alat Umpan Balik:</strong> Menjadi kanvas bagi kelompok lain untuk menempelkan kritik dan saran digital.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Strategi Pembagian Peran Menggunakan IFP</h2>
              <p>
                Untuk membangun <em>interdependensi positif</em>, bagilah peran spesifik. IFP dapat membantu menegaskan peran tersebut. Contoh:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kapten IFP (Navigator):</strong> Satu-satunya yang berhak menyentuh dan mengoperasikan IFP atas nama kelompok selama fase presentasi atau drag-and-drop. (Ini mencegah rebutan fisik di depan panel).</li>
                <li><strong>Penyusun Data (Scribe):</strong> Bertugas mengetik hasil diskusi di Chromebook/Tablet yang layarnya di-<em>cast</em> ke IFP.</li>
                <li><strong>Manajer Waktu:</strong> Memperhatikan widget timer di sudut IFP dan mengatur ritme kerja kelompok.</li>
                <li><strong>Pemeriksa Fakta (Checker):</strong> Bertugas memverifikasi silang jawaban kelompok sebelum jawaban itu dikunci dan di-<em>submit</em> ke IFP kelas.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Mengatasi Dominasi Siswa (Strategi Partisipasi)</h2>
              <p>
                Sangat sering, satu siswa mendominasi layar sentuh. Cegah hal ini dengan aturan <strong>"Sentuhan Bergilir"</strong>. Misalnya, dalam aktivitas menyusun siklus air secara drag-and-drop di IFP, Guru menetapkan: "Siswa A hanya boleh memindahkan gambar evaporasi. Siswa B hanya kondensasi." Jika Siswa A memindahkan bagian milik Siswa B, kelompok kehilangan poin kerja sama. Aturan sederhana ini memaksa mereka mendiskusikan urutannya di meja, lalu secara teratur maju ke IFP untuk mengeksekusinya.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Aktivitas Jigsaw Menggunakan IFP</h2>
              <p>
                Dalam metode <em>Jigsaw</em>, siswa dibagi menjadi "Kelompok Ahli". Menggunakan fitur <em>split-screen</em> (layar terbelah) pada IFP, dua Kelompok Ahli berbeda bisa melakukan riset visual secara bersamaan di panel yang sama. Setelah itu, mereka kembali ke "Kelompok Asal" untuk mengajarkan apa yang mereka lihat di IFP kepada teman-teman mereka.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Contoh Penerapan: IPA (Biologi)</h2>
              <p>
                <strong>Konteks: Anatomi Tubuh Manusia.</strong> Guru menampilkan model anatomi 3D tanpa label di IFP. Tiap kelompok mendapat tugas membahas satu sistem organ (Sistem Pencernaan, Pernapasan, dll). Setiap kelompok harus mengutus satu siswa (yang tidak boleh sama dengan juru bicara sebelumnya) untuk maju ke IFP, memutar model 3D tersebut dengan gestur sentuh, dan memasangkan label organ secara tepat.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Contoh Penerapan: Matematika</h2>
              <p>
                <strong>Konteks: Geometri Ruang.</strong> Pembelajaran kooperatif tipe <em>Think-Pair-Share</em>. Guru menayangkan jaring-jaring bangun ruang yang rumit di IFP. Siswa berpikir sendiri (<em>Think</em>), berpasangan mendiskusikan mana sisi yang akan menjadi alas (<em>Pair</em>), lalu membagikan analisisnya (<em>Share</em>). Saat fase <em>Share</em>, pasangan yang maju mendemonstrasikan proses lipatan visual menggunakan fitur anotasi pada IFP.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. Contoh Penerapan: Bahasa Indonesia</h2>
              <p>
                <strong>Konteks: Menyunting Teks Eksplanasi.</strong> Menggunakan model <em>Round Robin</em>. Sebuah paragraf yang penuh kesalahan ejaan ditampilkan besar-besar di layar IFP. Spidol digital (<em>stylus</em>) dipindahtangankan secara bergilir ke setiap anggota kelompok. Siswa ke-1 mencari kesalahan huruf kapital, Siswa ke-2 mencari kesalahan tanda baca, Siswa ke-3 mencari kata baku, dst. Semua mengedit teks yang sama pada lapisan (<em>layer</em>) anotasi di IFP.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">11. Contoh Penerapan: IPS</h2>
              <p>
                <strong>Konteks: Peta Persebaran Sumber Daya Alam.</strong> Menggunakan model <em>Numbered Heads Together (NHT)</em>. Tiap siswa dalam kelompok diberi nomor (1-4). Kelompok berdiskusi tentang persebaran hasil tambang berdasarkan data tabel. Kemudian guru memanggil nomor secara acak, misalnya "Nomor 3 dari semua kelompok, maju!". Siswa bernomor 3 harus menuju IFP dan memindahkan pin lokasi hasil tambang ke peta buta interaktif. Tanggung jawab individu (<em>individual accountability</em>) benar-benar teruji di sini.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">12. Skenario Pembelajaran 2 JP (Fokus Model STAD)</h2>
              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700">
                <h3 className="font-bold text-lg text-[#0C1A69] border-b border-emerald-200 pb-2">Topik: Siklus Ekonomi Berputar (SMP) dengan Model STAD</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>0-15 Menit (Presentasi Kelas):</strong> Guru menyajikan konsep siklus ekonomi (RTK, RTP, Pemerintah) secara garis besar menggunakan bagan alir animasi di IFP.</li>
                  <li><strong>15-45 Menit (Kerja Kelompok Kooperatif):</strong> Siswa berdiskusi dalam kelompok heterogen. Guru menggunakan fitur <em>timer</em> IFP. Siswa harus menyelesaikan sebuah studi kasus (misalnya, dampak kenaikan BBM terhadap arus barang). Mereka diwajibkan menyepakati satu lembar jawaban kelompok.</li>
                  <li><strong>45-65 Menit (Kuis Individu):</strong> IFP dimanfaatkan untuk menampilkan kuis interaktif (mirip <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game edukasi interaktif</a>). Namun, siswa menjawab <strong>secara individu</strong> di perangkat mereka, tanpa boleh saling bantu. IFP menampilkan pergerakan poin secara <em>real-time</em>.</li>
                  <li><strong>65-80 Menit (Penghargaan Kelompok):</strong> Poin yang didapat masing-masing individu <em>dijumlahkan</em> menjadi skor kelompok. Skor tertinggi ditampilkan secara selebrasi di IFP, membuktikan bahwa keberhasilan kelompok bergantung pada seberapa baik mereka mengajari satu sama lain di fase kedua tadi.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">13. Asesmen Individu dan Kelompok</h2>
              <p>
                Tantangan terbesar guru adalah menilai secara adil. IFP sangat membantu proses <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif</a> dan <a href="/jurnal-guru/asesmen-autentik-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAuthenticAssessmentIfp', '/jurnal-guru/asesmen-autentik-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen autentik</a>. Pastikan Anda memisahkan penilaian:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Penilaian Hasil Produk:</strong> Kualitas jawaban atau karya presentasi kelompok yang ditayangkan di IFP.</li>
                <li><strong>Penilaian Kontribusi:</strong> Pengamatan (observasi) guru saat melihat siapa yang aktif mengatur konten, siapa yang maju mengoperasikan IFP, dan siapa yang memandu diskusi.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">14. Refleksi Kerja Kelompok (Group Processing)</h2>
              <p>
                Langkah terakhir yang sering dilupakan dalam kooperatif adalah refleksi. Gunakan aplikasi survei cepat yang hasilnya ditampilkan dalam bentuk awan kata (<em>word cloud</em>) di IFP. Pertanyaannya: <em>"Apa satu hal yang kelompokmu lakukan dengan sangat baik hari ini?"</em> atau <em>"Apa yang perlu diperbaiki kelompokmu untuk proyek minggu depan?"</em> Pendekatan ini merupakan esensi dari <a href="/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleReflectionIfp', '/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">refleksi pembelajaran</a> yang bermakna.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">15. Kesalahan Umum Penggunaan IFP</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Layar IFP Disesaki Teks:</strong> Memproyeksikan bahan bacaan panjang ke IFP, lalu menyuruh kelompok membacanya. (IFP lebih baik digunakan untuk diagram visual atau video yang sulit dibagikan via kertas).</li>
                <li><strong>Satu Siswa Memonopoli IFP:</strong> Hanya siswa ekstrovert yang diizinkan maju ke IFP karena guru mengejar efisiensi waktu presentasi.</li>
                <li><strong>Mengabaikan <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Diferensiasi</a>:</strong> Membentuk kelompok kooperatif secara acak tanpa memperhatikan keseimbangan level akademis dan keterampilan sosial anggota (idealnya heterogen).</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">16. Checklist Praktis Guru</h2>
              <ul className="list-none space-y-2 font-medium text-gray-600">
                <li><span className="text-emerald-500 mr-2">✓</span> Apakah tugas ini benar-benar membutuhkan kerja sama kelompok, atau sebenarnya bisa dikerjakan secara individu?</li>
                <li><span className="text-emerald-500 mr-2">✓</span> Apakah saya sudah merencanakan bagaimana setiap siswa dari setiap kelompok akan mendapatkan giliran menyentuh/menggunakan IFP?</li>
                <li><span className="text-emerald-500 mr-2">✓</span> Apakah penilaian saya sudah mencakup skor untuk keterampilan bekerja sama (<em>social skills</em>), bukan sekadar skor kognitif?</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">17. Kesimpulan</h2>
              <p className="text-xl font-bold text-center text-emerald-800 bg-emerald-50 p-6 rounded-2xl border border-emerald-100 my-8 shadow-sm">
                "Kerja sama bukanlah sesuatu yang instan. Ia perlu direkayasa secara pedagogis. IFP membantu guru merancang rekayasa tersebut dengan membuat tujuan bersama dapat terlihat dengan jelas oleh semua orang di dalam ruangan."
              </p>
              <p>
                Menjalankan <strong>pembelajaran kooperatif dengan IFP</strong> berarti menggabungkan struktur sosial kelas yang ketat dengan fluiditas teknologi digital modern. IFP bertindak sebagai penyatu (<em>unifier</em>) di mana potongan-potongan pemikiran dari setiap anggota kelompok akhirnya disatukan. Namun, jangan pernah lupakan bahwa keajaiban sesungguhnya tidak terjadi di atas kaca panel sentuh, melainkan di dalam interaksi tatap muka antar siswa yang sedang saling menginspirasi dan mendukung untuk mencapai <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran mendalam</a>.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleCooperativeIfp;
