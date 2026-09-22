import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleDiagnosticIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleDiagnosticIfp: React.FC<ArticleDiagnosticIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Asesmen Diagnostik Menggunakan IFP di Kelas | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan komprehensif menggunakan Interactive Flat Panel (IFP) untuk asesmen diagnostik, memetakan pengetahuan awal dan miskonsepsi siswa sebelum pembelajaran."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas');

    const idUrl = 'https://papaninteraktif.com/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas';
    const enUrl = 'https://papaninteraktif.com/en/journal/diagnostic-assessment-using-interactive-flat-panel';

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
    const scriptId = 'article-diagnostic-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Asesmen Diagnostik Menggunakan IFP di Kelas",
          "description": "Panduan komprehensif menggunakan Interactive Flat Panel (IFP) untuk asesmen diagnostik, memetakan pengetahuan awal dan miskonsepsi siswa sebelum pembelajaran dimulai.",
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
              "name": "Asesmen Diagnostik dengan IFP",
              "item": window.location.origin + "/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas"
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
              <li aria-current="page" className="text-[#0C1A69]">Asesmen Diagnostik dengan IFP</li>
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
              <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Asesmen & Evaluasi</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Asesmen Diagnostik Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-rose-500 pl-4">
                "Asesmen diagnostik adalah fondasi pedagogi yang berpusat pada siswa. Menggunakan IFP untuk asesmen awal bukan sekadar memindahkan kuis kertas ke layar besar, melainkan memetakan miskonsepsi dan kesiapan belajar secara visual dan real-time."
              </p>

              <p>
                Sebelum kita dapat mengajari seseorang, kita harus tahu di mana mereka berada. Mengajar tanpa mengetahui pengetahuan awal siswa ibarat membangun rumah tanpa memeriksa fondasinya. Di sinilah <strong>asesmen diagnostik menggunakan IFP</strong> (Interactive Flat Panel) menjadi sangat krusial, mengubah evaluasi awal dari sekadar rutinitas administratif menjadi pengalaman interaktif yang bermakna.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu Asesmen Diagnostik?</h2>
              <p>
                Asesmen diagnostik adalah evaluasi yang dilakukan <strong>sebelum</strong> atau di awal proses pembelajaran. Tujuannya bukan untuk memberikan nilai (<em>grading</em>) atau mengukur pencapaian akhir, melainkan untuk mengumpulkan informasi diagnostik mengenai pengetahuan prasyarat, pemahaman awal, tingkat kesiapan belajar, gaya belajar, dan minat siswa terhadap topik baru yang akan dibahas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Mengapa Asesmen Diagnostik Sangat Penting?</h2>
              <p>
                Tanpa asesmen diagnostik, guru mengajar berdasarkan asumsi. Asumsi bahwa semua siswa mulai dari garis <em>start</em> yang sama sering kali salah. Sebagian siswa mungkin sudah menguasai konsep, sebagian belum tahu apa-apa, dan sebagian lagi—yang paling berbahaya—membawa <strong>miskonsepsi</strong> yang mengakar. Memetakan kondisi awal ini krusial agar guru tidak membuang waktu mengulang materi yang sudah dikuasai atau melompat terlalu jauh meninggalkan siswa yang belum siap.
              </p>

              <AdSenseInArticle />

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Perbedaan Asesmen Diagnostik dan Asesmen Formatif</h2>
              <p>
                Penting untuk membedakan konsep ini dengan <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif</a>:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Asesmen Diagnostik:</strong> Dilakukan <em>sebelum</em> pembelajaran dimulai. Fokusnya pada "Apa yang sudah mereka ketahui dan apa yang salah mereka pahami?"</li>
                <li><strong>Asesmen Formatif:</strong> Dilakukan <em>selama</em> proses pembelajaran berlangsung. Fokusnya pada "Apakah mereka memahami apa yang sedang saya ajarkan saat ini?"</li>
              </ul>
              <p>
                Keduanya penting, namun melayani tujuan pedagogis pada fase waktu yang berbeda.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Mengapa IFP Sangat Cocok untuk Asesmen Diagnostik?</h2>
              <p>
                Asesmen awal sering kali membosankan jika hanya dilakukan secara lisan atau dengan kertas survei (<em>pre-test</em>). IFP mengubah paradigma ini karena:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Menurunkan Kecemasan (Low Stakes):</strong> Siswa tidak merasa sedang diuji. Aktivitas di IFP terasa seperti permainan.</li>
                <li><strong>Visualisasi Langsung:</strong> Guru dan siswa dapat melihat agregat data (seperti grafik hasil voting atau peta pikiran) secara instan di layar besar.</li>
                <li><strong>Interaktivitas Kinestetik:</strong> Manipulasi objek sentuh (menggeser, menarik, mencoret) melibatkan memori motorik yang membantu siswa merespons lebih natural.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Strategi Memanfaatkan Touch Screen IFP</h2>
              <p>
                Layar sentuh pada IFP adalah alat utama untuk mengumpulkan respons. Hindari pertanyaan terbuka yang memaksa siswa mengetik panjang lebar di layar. Gunakan aktivitas berbasis gestur sentuh (<em>touch gestures</em>) yang cepat, intuitif, dan mengungkapkan cara berpikir siswa secara langsung.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Menggunakan Pertanyaan Visual</h2>
              <p>
                Gambar sering kali lebih efektif memancing pemahaman awal daripada teks. Tampilkan sebuah gambar fenomena (misalnya: es mencair, atau foto tokoh sejarah) di IFP. Mintalah siswa maju dan menggunakan alat penanda (<em>marker tool</em>) untuk melingkari bagian gambar yang paling penting menurut mereka, atau menuliskan satu kata kunci di sebelahnya.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Pilihan Jawaban dan Interactive Response</h2>
              <p>
                Manfaatkan aplikasi kuis cepat interaktif. Guru dapat menampilkan soal di IFP, lalu meminta siswa menempelkan catatan digital (<em>sticky notes</em>) secara virtual dari tablet mereka, atau maju menyentuh tombol benar/salah. Ini adalah pemetaan cepat untuk melihat secara sekilas di mana posisi kelas secara keseluruhan.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Drag-and-Drop untuk Mengungkap Miskonsepsi</h2>
              <p>
                Ini adalah teknik paling kuat. Buat aktivitas klasifikasi sederhana. Misalnya, tampilkan berbagai gambar hewan dan dua kotak kosong bertuliskan "Mamalia" dan "Ikan". Miskonsepsi akan langsung terlihat jelas (secara visual) jika seorang siswa menggeser gambar Paus atau Lumba-lumba ke kotak "Ikan". Guru tidak langsung mengoreksi, melainkan mencatat ini sebagai dasar materi pembelajaran nanti.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Peta Konsep dan Diagram Awal</h2>
              <p>
                Tulis satu konsep sentral (misalnya: "Energi") di tengah papan tulis digital IFP. Minta siswa secara bergiliran maju dan menambahkan cabang atau kata-kata yang berhubungan menurut versi mereka. Jika peta konsep terlihat acak dan tidak terstruktur, guru tahu bahwa pemahaman dasar kelas tersebut masih sangat fragmentaris.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. Asesmen Diagnostik Individual</h2>
              <p>
                Dalam format individual, siswa dapat menggunakan gawai mereka (smartphone/tablet) untuk menjawab pertanyaan singkat, dan hasilnya diagregasi secara anonim di layar IFP berupa <em>word cloud</em> (awan kata) atau diagram batang. Hal ini meminimalisir rasa malu siswa jika jawaban mereka salah.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">11. Asesmen Diagnostik Berkelompok</h2>
              <p>
                Mendukung <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran kolaboratif</a>, IFP dapat dibagi layarnya (<em>split-screen</em>). Dua atau tiga kelompok kecil diminta maju untuk menyusun urutan peristiwa sejarah berdasarkan gambar secara bersamaan. Kolaborasi dan diskusi antar-siswa saat menyusun gambar ini memberikan guru wawasan berharga mengenai alur logika mereka.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">12. Cara Membaca Hasil Asesmen Diagnostik di IFP</h2>
              <p>
                Karena hasil divisualisasikan, polanya mudah dibaca:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Banyak yang salah di konsep tertentu:</strong> Indikasi adanya miskonsepsi massal. Materi ini harus diajarkan dari dasar secara perlahan.</li>
                <li><strong>Hasil sangat bervariasi:</strong> Indikasi heterogenitas tinggi di kelas. Ini adalah sinyal kuat perlunya diferensiasi.</li>
                <li><strong>Hampir semua benar:</strong> Kelas sudah siap. Guru bisa mempersingkat pengantar materi dasar dan langsung masuk ke tantangan yang lebih kompleks.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">13. Menentukan Strategi Pembelajaran dari Hasil Asesmen</h2>
              <p>
                Hasil diagnostik harus langsung diubah menjadi rencana aksi (<em>actionable insights</em>). Jika 80% siswa belum memahami prasyarat pecahan, guru tidak boleh memaksa melanjutkan ke materi perkalian pecahan. Modifikasi <a href="/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleModuleIfp', '/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">modul ajar</a> di tempat (<em>on-the-fly</em>) untuk melakukan remediasi konsep dasar terlebih dahulu.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">14. Hubungan dengan Pembelajaran Berdiferensiasi</h2>
              <p>
                Asesmen diagnostik adalah gerbang utama menuju <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran berdiferensiasi</a>. Data yang dikumpulkan pada fase awal inilah yang menentukan siapa siswa yang akan mendapat pengayaan mandiri, siapa yang membutuhkan bimbingan intensif dari guru (<em>scaffolding</em>), dan bagaimana kelompok-kelompok belajar akan dibentuk hari itu.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">15. Hubungan dengan Pembelajaran Mendalam (Deep Learning)</h2>
              <p>
                <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">Pembelajaran mendalam</a> membutuhkan koneksi antara konsep baru dengan pengalaman dunia nyata yang sudah dimiliki siswa (<em>prior knowledge</em>). Tanpa asesmen diagnostik, guru tidak akan tahu "kait" (<em>hooks</em>) kognitif mana yang sudah ada di pikiran siswa untuk mengikat pengetahuan baru tersebut.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">16. Contoh Penerapan: IPA (Sains)</h2>
              <p>
                <strong>Topik: Ekosistem.</strong><br/>
                Guru menampilkan jaring-jaring makanan yang berantakan di IFP. "Siapa yang makan siapa?" Guru memanggil beberapa anak ke depan untuk menarik garis panah di layar sentuh. Kesalahan arah panah (misalnya dari pemangsa menunjuk ke mangsa, yang seharusnya aliran energi) akan langsung terbongkar sebagai miskonsepsi umum.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">17. Contoh Penerapan: Matematika</h2>
              <p>
                <strong>Topik: Bangun Ruang.</strong><br/>
                Guru menggunakan objek 3D <em>viewer</em> di IFP. Sebelum menjelaskan rumus volume, guru bertanya, "Manakah dari objek-objek berikut ini yang bisa menampung air paling banyak?" Siswa melakukan <em>voting</em>. Ini mengungkap intuisi spasial siswa sebelum masuk ke perhitungan matematis.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">18. Contoh Penerapan: Bahasa Indonesia</h2>
              <p>
                <strong>Topik: Teks Prosedur.</strong><br/>
                Aktivitas <em>Drag-and-Drop</em>. Guru mengacak langkah-langkah membuat mie instan di layar IFP. Siswa diminta menggeser urutannya agar masuk akal. Jika ada yang terbalik, guru memahami bahwa kemampuan penalaran logis-sekuensial siswa tersebut masih perlu dilatih lebih dalam.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">19. Contoh Penerapan: IPS</h2>
              <p>
                <strong>Topik: Cuaca dan Iklim.</strong><br/>
                Guru meminta siswa maju ke IFP yang menampilkan peta Indonesia buta, lalu memberikan <em>stamp</em> (cap digital) ikon payung di daerah yang menurut mereka curah hujannya paling tinggi. Hasil sebaran cap ini memetakan sejauh mana wawasan geografi awal siswa.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">20. Contoh Skenario Pembelajaran 2 JP (Fokus Diagnostik Awal)</h2>
              <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700">
                <h3 className="font-bold text-lg text-[#0C1A69] border-b border-rose-200 pb-2">Topik: Siklus Air (SD/SMP)</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Tujuan Pembelajaran:</strong> Memahami tahap evaporasi, kondensasi, dan presipitasi.</li>
                  <li><strong>Pertanyaan Diagnostik:</strong> "Dari mana asalnya hujan?"</li>
                  <li><strong>Aktivitas IFP (15 menit awal):</strong> Guru membuka aplikasi <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-blue-600 font-bold hover:underline">game edukasi interaktif</a> ringan di mana awan-awan bergerak. Siswa diminta menempatkan kartu bergambar (sungai, awan mendung, hujan turun, matahari) ke urutan yang menurut mereka benar.</li>
                  <li><strong>Pengumpulan Respons:</strong> Siswa maju secara berkelompok (2-3 anak) menyentuh layar IFP (<em>split-screen</em> atau bergantian).</li>
                  <li><strong>Identifikasi Miskonsepsi:</strong> Guru melihat bahwa sebagian besar siswa mengira air hujan adalah air baru yang tercipta di langit, bukan air bumi yang menguap.</li>
                  <li><strong>Interpretasi Guru:</strong> Siswa kekurangan pemahaman tentang konsep "penguapan" (evaporasi).</li>
                  <li><strong>Penentuan Strategi:</strong> Guru mengubah rencana. Alih-alih langsung membahas presipitasi, guru mengambil waktu ekstra untuk menampilkan animasi air mendidih dan menghubungkannya dengan panas matahari (evaporasi).</li>
                </ul>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">21. Kesalahan Umum Penggunaan Teknologi dalam Asesmen Diagnostik</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Menjadikan Nilai:</strong> Mengambil skor kuis awal dan memasukkannya ke dalam buku nilai harian. Ini membunuh kepercayaan diri siswa.</li>
                <li><strong>Miskonsepsi Dibiarkan:</strong> Mengetahui siswa salah dari aktivitas di IFP, namun tidak menyesuaikan materi pengajaran (tetap berpegang kaku pada RPP awal).</li>
                <li><strong>Pertanyaan Terlalu Sulit:</strong> Asesmen awal yang terlalu sulit akan menyebabkan keputusasaan (<em>demotivation</em>) di awal jam pelajaran.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">22. Checklist Guru Sebelum Menggunakan IFP untuk Asesmen Diagnostik</h2>
              <ul className="list-none space-y-2 font-medium text-gray-600">
                <li><span className="text-rose-500 mr-2">✓</span> Apakah pertanyaan yang dirancang bisa mengidentifikasi miskonsepsi (bukan sekadar benar/salah)?</li>
                <li><span className="text-rose-500 mr-2">✓</span> Apakah antarmuka di IFP (ukuran teks, warna tombol) cukup besar untuk disentuh dengan akurat?</li>
                <li><span className="text-rose-500 mr-2">✓</span> Apakah suasana kelas bebas dari tekanan sehingga siswa berani jujur jika tidak tahu?</li>
                <li><span className="text-rose-500 mr-2">✓</span> Apakah saya siap mengubah strategi pembelajaran <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">pengelolaan kelas</a> jika hasilnya jauh dari ekspektasi?</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">23. Penutup</h2>
              <p className="text-xl font-bold text-center text-rose-800 bg-rose-50 p-6 rounded-2xl border border-rose-100 my-8 shadow-sm">
                "IFP memvisualisasikan apa yang tidak terlihat di benak siswa, tetapi gurulah yang harus menafsirkan visualisasi tersebut menjadi keputusan pedagogis yang tepat."
              </p>
              <p>
                Media interaktif sehebat apa pun tidak dapat menggantikan intuisi seorang guru. <strong>Asesmen diagnostik menggunakan IFP</strong> memberikan data yang cepat, visual, dan menarik, tetapi langkah krusial berikutnya—menyesuaikan cara kita mengajar—sepenuhnya berada di tangan pendidik. Jadikan IFP sebagai cermin yang memantulkan kondisi kognitif kelas Anda yang sebenarnya.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleDiagnosticIfp;
