import React, { useEffect } from 'react';

interface ArticleDigitalLiteracyIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleDigitalLiteracyIfp: React.FC<ArticleDigitalLiteracyIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Literasi Digital Menggunakan IFP di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan memfasilitasi literasi digital di kelas menggunakan Interactive Flat Panel (IFP), membangun kemampuan siswa dalam memilah informasi dan berpikir kritis."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas');

    // Structured Data for Article
    const scriptId = 'article-digital-literacy-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Literasi Digital Menggunakan IFP di Kelas",
          "description": "Panduan memfasilitasi literasi digital di kelas menggunakan Interactive Flat Panel (IFP), membangun kemampuan siswa dalam memilah informasi dan berpikir kritis.",
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
              "name": "Literasi Digital Menggunakan IFP",
              "item": window.location.origin + "/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas"
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
              <li aria-current="page" className="text-[#0C1A69]">Literasi Digital Menggunakan IFP</li>
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
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Literasi & Etika Digital</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Literasi Digital Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-teal-500 pl-4">
                "Literasi digital bukanlah tentang seberapa mahir siswa menekan layar sentuh, melainkan seberapa kritis mereka mencerna apa yang tampil di layar tersebut. IFP memindahkan proses internal ini menjadi pengalaman visual dan kolaboratif di ruang kelas."
              </p>

              <p>
                Di era ledakan informasi, kemampuan siswa mengoperasikan gawai pintar tidak menjamin mereka memiliki kecakapan digital yang sesungguhnya. Mereka mungkin ahli memainkan aplikasi, tetapi sering kali gagap ketika harus memvalidasi sumber informasi, memahami etika dunia maya, atau menafsirkan data digital secara kritis. Membangun <strong>literasi digital dengan IFP</strong> (Interactive Flat Panel) memberikan kerangka visual yang nyata di mana guru dapat mendemonstrasikan, menguji, dan melatih nalar kritis siswa secara langsung.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu Literasi Digital dalam Pembelajaran?</h2>
              <p>
                Literasi digital dalam konteks pedagogis adalah kemampuan kognitif dan teknis siswa untuk menemukan, mengevaluasi, memilah, menggunakan, dan membuat informasi menggunakan teknologi. Ini mencakup kompetensi membaca kritis, etika digital (<em>digital citizenship</em>), kesadaran privasi, dan kemampuan membedakan fakta dari opini atau berita palsu (<em>hoaks</em>).
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Bukan Sekadar Keterampilan Menggunakan Perangkat</h2>
              <p>
                Kesalahan fatal yang sering terjadi di sekolah adalah menganggap literasi digital selesai setelah siswa bisa menyalakan komputer atau mengirim email. Teknologi, termasuk IFP, hanyalah alat bantu. Tujuan utamanya adalah membangun kemampuan berpikir. Siswa harus diajak bergeser dari status "pengguna teknologi yang pasif" menjadi "pemikir kritis yang berdaya di dunia digital".
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Peran IFP dalam Membangun Literasi Digital</h2>
              <p>
                IFP mengubah pengalaman yang biasanya terisolasi di layar kecil gawai masing-masing siswa menjadi pengalaman komunal. Layar besar IFP memungkinkan guru untuk membongkar secara publik bagaimana sebuah pencarian internet dilakukan, bagaimana menavigasi sebuah situs berita, atau bagaimana menganalisis tata letak (<em>layout</em>) iklan manipulatif secara visual. 
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Membangun Literasi Informasi</h2>
              <p>
                Literasi informasi adalah fondasi utama. Melalui IFP, guru dapat mendemonstrasikan secara langsung lima langkah esensial:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Mencari Informasi:</strong> Mempraktikkan penggunaan kata kunci yang efektif di mesin pencari.</li>
                <li><strong>Membaca Informasi:</strong> Membaca cepat (<em>skimming</em> dan <em>scanning</em>) artikel digital di layar besar.</li>
                <li><strong>Membandingkan Sumber:</strong> Menggunakan mode <em>split-screen</em> (layar terbagi) di IFP untuk membuka dua situs berbeda guna membandingkan sudut pandang yang berbeda dari satu topik yang sama.</li>
                <li><strong>Mengenali Informasi Meragukan:</strong> Menggarisbawahi ciri-ciri <em>clickbait</em>, tautan mencurigakan, atau domain tidak resmi menggunakan alat anotasi (coretan) di layar.</li>
                <li><strong>Menyimpulkan Informasi:</strong> Menarik intisari dari berbagai sumber yang dibaca secara komunal.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Berpikir Kritis Terhadap Konten Digital</h2>
              <p>
                Gunakan IFP untuk menganalisis anatomi sebuah gambar manipulasi atau berita palsu. Minta siswa maju dan melingkari elemen-elemen dalam sebuah foto yang tampak janggal atau tidak konsisten dengan konteks teks. Tunjukkan bahwa setiap informasi digital diproduksi oleh seseorang dengan motif tertentu—entah untuk memberi tahu, membujuk, atau sekadar mencari jumlah klik.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Mengajarkan Etika dan Perilaku Digital</h2>
              <p>
                Bahas jejak digital (<em>digital footprint</em>) menggunakan kanvas papan tulis virtual di IFP. Gambarkan jejak langkah kaki; setiap langkah mewakili komentar, foto, atau status yang diunggah siswa. Diskusikan bagaimana jejak ini permanen. IFP juga bisa digunakan untuk bermain peran (<em>role-play</em>) membalas komentar kasar secara etis di simulasi platform media sosial.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Keamanan dan Privasi Digital yang Sesuai Usia</h2>
              <p>
                Buatlah kuis interaktif di IFP menggunakan <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-700 hover:underline font-bold">game edukasi interaktif</a> di mana siswa harus memutuskan apakah aman membagikan suatu informasi. Contoh soal: "Kamu mendapat pesan dari akun bernama 'Tim Game' meminta password. Apa yang kamu lakukan?" Visual interaktif memperkuat pemahaman mengenai keamanan siber tingkat dasar.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Aktivitas: Memilah Informasi Benar/Salah (Fact-Checking)</h2>
              <p>
                Tampilkan lima tangkapan layar berita viral di IFP. Bagi kelas menjadi kelompok-kelompok kecil (mengintegrasikan <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran kolaboratif</a>). Siswa bergantian maju dan menggeser berita tersebut ke keranjang "Fakta", "Opini", atau "Hoaks", sambil harus menyampaikan argumen mengapa mereka memilih kategori tersebut.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Aktivitas: Membaca Visual dan Data Digital</h2>
              <p>
                Tampilkan infografis atau grafik data (misalnya: data suhu global atau grafik penyebaran penyakit). Minta siswa menggunakan fitur sorot (<em>highlighter</em>) di IFP untuk menandai anomali data, atau membaca kesimpulan dari visual tersebut. Kemampuan membaca data visual adalah komponen kunci literasi digital tingkat lanjut.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. Aktivitas Membuat Kesimpulan Bersama</h2>
              <p>
                Setelah melakukan riset bersama di internet, buka aplikasi peta pikiran (<em>mind mapping</em>). Setiap siswa dapat mengirimkan satu kalimat kesimpulan dari gawai mereka langsung ke layar IFP. Ini memastikan setiap suara terdengar tanpa dominasi visual oleh anak-anak yang lebih vokal saja.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">11. Peran Guru Sebagai Fasilitator</h2>
              <p>
                Ketika berurusan dengan <a href="/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpActivities', '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">aktivitas pembelajaran interaktif menggunakan IFP</a>, guru tidak boleh mendominasi layar. Guru menavigasi pertanyaan pemantik, sementara siswa memegang kendali atas penelusuran digital (<em>browsing</em>) dan penandaan (<em>annotating</em>) informasi di layar sentuh.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">12. Pengelolaan Kelas Selama Aktivitas Digital</h2>
              <p>
                Terapkan <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">strategi pengelolaan kelas</a> yang ketat. Jika semua siswa berebut maju ke IFP, kelas akan menjadi kacau. Gunakan rotasi atau sistem giliran kelompok. Saat satu kelompok melakukan presentasi hasil pencarian di IFP, kelompok lain bertugas menjadi "panelis" yang mengecek ulang fakta (<em>fact-check</em>) menggunakan perangkat mereka masing-masing.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">13. Mencegah Siswa Menjadi Pengguna Pasif</h2>
              <p>
                Menonton video edukatif di YouTube melalui IFP <em>bukanlah</em> literasi digital; itu sekadar menonton TV model baru. Agar menjadi aktivitas literasi, guru harus menjeda video di tengah jalan (<em>pause</em>), meminta siswa maju mencoret bagian penting di layar, atau memprediksi kelanjutan informasi tersebut. Harus ada siklus aksi dan reaksi.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">14. Hubungan dengan Pembelajaran Mendalam</h2>
              <p>
                Kemampuan literasi digital menjadi syarat wajib agar <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran mendalam</a> (<em>deep learning</em>) dapat terjadi. Pemahaman mendalam tidak bisa dibangun di atas fondasi informasi yang dangkal atau salah. Siklus dari <strong>Memahami</strong> sumber informasi, <strong>Mengaplikasikan</strong> pengetahuan untuk memecahkan masalah, hingga <strong>Merefleksi</strong> dampak sosial dari sebuah teknologi, sangat erat kaitannya.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">15. Contoh Penerapan: Bahasa Indonesia</h2>
              <p>
                Siswa membaca dua teks editorial dari dua portal berita berbeda mengenai topik lingkungan. Di layar IFP yang dibelah dua (<em>split-screen</em>), siswa maju menggunakan pena merah untuk melingkari opini, dan pena hijau untuk melingkari fakta di kedua teks tersebut, guna menyadari keberpihakan media.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">16. Contoh Penerapan: IPA (Sains)</h2>
              <p>
                Siswa menginvestigasi situs yang menjual produk kesehatan pseudsains (misal: "Gelang Kesehatan Ajaib"). Menggunakan IFP, guru dan siswa menelusuri klaim-klaim sains yang menyesatkan, membandingkannya dengan jurnal ilmiah terpercaya yang dibuka di tab browser sebelahnya.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">17. Skenario Pembelajaran 2 JP (Fokus Literasi Informasi)</h2>
              <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700">
                <h3 className="font-bold text-lg text-[#0C1A69] border-b border-teal-200 pb-2">Topik: Berita Palsu (Hoaks) di Media Sosial (SMP/SMA)</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>0-15 Menit (Asesmen Diagnostik):</strong> Guru menayangkan infografis tentang penyebaran hoaks di IFP. Melakukan pemungutan suara cepat (voting): "Siapa yang pernah membagikan tautan tanpa membacanya sampai selesai?"</li>
                  <li><strong>15-40 Menit (Investigasi Kolaboratif):</strong> Guru menampilkan sebuah berita sensasional. Kelas dibagi dua. Kelompok A mencari argumen yang membenarkan berita itu, Kelompok B mencari bukti yang menyanggahnya.</li>
                  <li><strong>40-70 Menit (Debat Digital):</strong> Perwakilan maju ke IFP, menggunakan mode <em>whiteboard</em>. Mereka menempelkan tautan rujukan dan tangkapan layar (<em>screenshot</em>) pendukung argumen mereka di layar besar, melingkari bukti-bukti krusial.</li>
                  <li><strong>70-80 Menit (Refleksi Akhir):</strong> Melalui <a href="/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleReflectionIfp', '/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas'); }} className="text-blue-600 font-bold hover:underline">refleksi pembelajaran</a>, siswa sepakat menulis satu "SOP Pribadi" di IFP tentang apa yang harus mereka lakukan sebelum mengeklik tombol <em>Share</em> di masa depan.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">18. Mengintegrasikan ke Modul Ajar</h2>
              <p>
                Literasi digital tidak seharusnya menjadi mata pelajaran terpisah, melainkan elemen yang terintegrasi (<em>embedded</em>) ke dalam setiap mata pelajaran melalui perencanaan <a href="/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleModuleIfp', '/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">modul ajar</a>. Jika ada penugasan riset, tambahkan rubrik penilaian khusus untuk kualitas sumber referensi digital yang digunakan siswa.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">19. Kesalahan Umum Mengintegrasikan Literasi Digital dengan Teknologi</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Overload Informasi:</strong> Membuka terlalu banyak tab dan jendela browser di IFP membuat mata siswa lelah (<em>visual fatigue</em>). Jaga antarmuka tetap bersih.</li>
                <li><strong>Gagal Memverifikasi Sumber:</strong> Menggunakan mesin pencari di IFP, mengeklik tautan paling atas, dan menganggapnya sebagai kebenaran mutlak tanpa pengecekan silang.</li>
                <li><strong>Teknologi Mengambil Alih Pedagogi:</strong> Sibuk mengajarkan cara memakai aplikasi interaktifnya, sementara substansi cara berpikir rasionalnya terabaikan.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">20. Checklist Guru Sebelum Kelas Literasi Digital</h2>
              <ul className="list-none space-y-2 font-medium text-gray-600">
                <li><span className="text-teal-500 mr-2">✓</span> Apakah situs web atau video yang akan saya proyeksikan sudah saya periksa dari konten iklan yang tidak pantas?</li>
                <li><span className="text-teal-500 mr-2">✓</span> Apakah ada kesempatan bagi siswa untuk bersikap skeptis/meragukan informasi yang saya tayangkan di layar?</li>
                <li><span className="text-teal-500 mr-2">✓</span> Apakah saya menggunakan fitur IFP untuk merangsang kolaborasi, bukan sekadar sebagai layar bioskop?</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">21. Penutup</h2>
              <p className="text-xl font-bold text-center text-teal-800 bg-teal-50 p-6 rounded-2xl border border-teal-100 my-8 shadow-sm">
                "Literasi digital adalah sistem imun kognitif di abad 21. Kita menggunakan IFP bukan sekadar untuk mentransfer data, melainkan untuk melatih kekebalan berpikir anak."
              </p>
              <p>
                <strong>Literasi digital menggunakan IFP</strong> memberikan kesempatan emas bagi guru untuk membimbing siswa keluar dari belantara hoaks, bias algoritma, dan konsumsi informasi pasif. Jadikan layar cerdas di depan kelas Anda sebagai meja operasi bedah nalar, tempat siswa membedah kebenaran dari setiap piksel informasi yang mereka terima.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleDigitalLiteracyIfp;
