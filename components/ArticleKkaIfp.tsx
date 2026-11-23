import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';
import { applySEOMetadata } from '../seo';

interface ArticleKkaIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleKkaIfp: React.FC<ArticleKkaIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    applySEOMetadata({
      lang: 'id',
      title: 'Game Koding & Kecerdasan Artifisial (KKA) IFP | Jurnal Guru',
      description: 'Panduan berpikir komputasional dan KKA di IFP lewat Jalan Kancil, Color Link Junior, HELI RESCUE, Doodle AI, dan AI Basketball dengan batas konseptual jelas.',
      canonical: 'https://papaninteraktif.com/jurnal-guru/game-koding-kecerdasan-artifisial-ifp',
      openGraph: {
        title: 'Game Koding & Kecerdasan Artifisial (KKA) IFP | Jurnal Guru',
        description: 'Panduan berpikir komputasional dan KKA di IFP lewat Jalan Kancil, Color Link Junior, HELI RESCUE, Doodle AI, dan AI Basketball dengan batas konseptual jelas.',
        type: 'article',
        url: 'https://papaninteraktif.com/jurnal-guru/game-koding-kecerdasan-artifisial-ifp'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Game Koding & Kecerdasan Artifisial (KKA) IFP | Jurnal Guru',
        description: 'Panduan berpikir komputasional dan KKA di IFP lewat Jalan Kancil, Color Link Junior, HELI RESCUE, Doodle AI, dan AI Basketball dengan batas konseptual jelas.'
      },
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Game Koding dan Kecerdasan Artifisial (KKA) Menggunakan IFP",
          "description": "Panduan berpikir komputasional dan KKA di IFP lewat Jalan Kancil, Color Link Junior, HELI RESCUE, Doodle AI, dan AI Basketball dengan batas konseptual jelas.",
          "author": {
            "@type": "Person",
            "name": "Deni Ranoptri, M.Pd"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Papan Interaktif",
            "logo": {
              "@type": "ImageObject",
              "url": "https://papaninteraktif.com/icon.svg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://papaninteraktif.com/jurnal-guru/game-koding-kecerdasan-artifisial-ifp"
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
              "item": "https://papaninteraktif.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Jurnal Guru",
              "item": "https://papaninteraktif.com/jurnal-guru"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Game Koding dan Kecerdasan Artifisial (KKA) Menggunakan IFP",
              "item": "https://papaninteraktif.com/jurnal-guru/game-koding-kecerdasan-artifisial-ifp"
            }
          ]
        }
      ]
    });
  }, []);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, view: string, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigateTo(view, path);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 md:pt-14 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <nav aria-label="Breadcrumb" className="px-6 md:px-8 pt-6 md:pt-8 pb-4 border-b border-gray-100">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 font-medium">
              <li>
                <a href="/" onClick={(e) => handleLink(e, 'home', '/')} className="hover:text-blue-600 transition-colors">Beranda</a>
              </li>
              <li><span aria-hidden="true" className="opacity-50">/</span></li>
              <li>
                <a href="/jurnal-guru" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-blue-600 transition-colors">Jurnal Guru</a>
              </li>
              <li><span aria-hidden="true" className="opacity-50">/</span></li>
              <li aria-current="page" className="text-[#0C1A69]">Koding &amp; AI (KKA) IFP</li>
            </ol>
          </nav>

          <div className="p-6 md:p-12">
            <button
              onClick={onBack}
              className="group flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors mb-8"
            >
              <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Jurnal Guru
            </button>

            <article className="prose prose-lg md:prose-xl max-w-none text-gray-700">
              <header className="mb-10">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  Koding &amp; Kecerdasan Artifisial (KKA)
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-5 mb-4 leading-tight">
                  Game Koding dan Kecerdasan Artifisial (KKA) Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-600 font-semibold leading-relaxed border-l-4 border-indigo-400 pl-4">
                  Memperkenalkan Koding dan Kecerdasan Artifisial (KKA) di ruang kelas tidak selalu harus langsung dimulai dari sintaks bahasa pemrograman yang rumit — guru dapat memulainya dari latihan berpikir komputasional, demonstrasi sistem AI, dan diskusi literasi AI secara jujur di layar IFP.
                </p>

                <p>
                  Seiring meningkatnya perhatian sekolah terhadap pembelajaran <strong>Koding dan Kecerdasan Artifisial (KKA)</strong> serta Informatika di jenjang SD, SMP, hingga SMA, banyak guru mencari media interaktif yang bisa dijalankan langsung bersama satu kelas di Interactive Flat Panel (IFP). Namun, dalam memilih game edukasi untuk KKA, ketepatan konsep adalah hal utama: <strong>tidak setiap game logika mengajarkan pemrograman atau kecerdasan artifisial</strong>. Artikel ini memetakan peran nyata setiap game di Papan Interaktif secara proporsional.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Membedakan 5 Konsep Penting dalam Pembelajaran KKA</h2>
                <p>
                  Sebelum memilih aktivitas di IFP, guru perlu memisahkan lima ranah yang sering tercampur agar siswa tidak mengalami miskonsepsi:
                </p>
                <div className="grid grid-cols-1 gap-3 not-prose my-5">
                  <div className="p-4 bg-indigo-50/70 rounded-xl border border-indigo-200">
                    <h3 className="font-black text-[#0C1A69] text-sm uppercase tracking-wide mb-1">1. Berpikir Komputasional (Computational Thinking)</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Latihan memecah masalah, mengenali pola, menyusun urutan langkah, dan mengevaluasi aturan/hambatan (<em>unplugged</em> maupun lewat teka-teki jalur). Ini adalah fondasi pra-koding, bukan pemrograman sintaks.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="font-black text-[#0C1A69] text-sm uppercase tracking-wide mb-1">2. Pemrograman Nyata (Actual Programming / Coding)</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Menulis instruksi terstruktur memakai blok kode (seperti Scratch/Blockly) atau bahasa teks (seperti Python/JavaScript) lengkap dengan variabel, perulangan, dan percabangan. Game portal di bawah ini <strong>bukan editor pemrograman</strong>, melainkan pendamping konsep dan pemantik kelas.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-200">
                    <h3 className="font-black text-[#0C1A69] text-sm uppercase tracking-wide mb-1">3. Demonstrasi AI (AI Demonstrations)</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Menunjukkan contoh nyata sistem pengenalan pola yang sudah terlatih — seperti pengenalan gambar sketsa atau deteksi pose gerak kamera — agar siswa mengamati input, output, serta batas akurasinya secara langsung.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200">
                    <h3 className="font-black text-[#0C1A69] text-sm uppercase tracking-wide mb-1">4. Literasi AI (AI Literacy)</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Diskusi kritis yang dipandu guru tentang cara kerja umum AI, mengapa prediksi komputer bisa keliru, privasi kamera/data, dan etika penggunaan teknologi dalam kehidupan sehari-hari.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200">
                    <h3 className="font-black text-[#0C1A69] text-sm uppercase tracking-wide mb-1">5. Pelatihan Model AI (AI Model Training)</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Proses mengumpulkan dataset, melabeli data, melatih model pembelajaran mesin, dan menguji akurasinya. Game di katalog ini memakai model pra-latih (<em>pre-trained</em>), sehingga <strong>tidak mengajarkan pelatihan model AI secara langsung</strong>.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Pemetaan Game Terverifikasi untuk KKA di Papan Interaktif</h2>

                <h3 className="text-xl font-extrabold text-[#0C1A69] pt-2">A. Fondasi Berpikir Komputasional (Urutan Langkah, Pola &amp; Aturan Jalur)</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <a href="/game/kancil" onClick={(e) => handleLink(e, 'gameDetail', '/game/kancil')} className="text-blue-700 hover:underline font-bold">Jalan Kancil</a>:
                    Melatih perencanaan urutan langkah, pengamatan rintangan, dan pengujian strategi rute. Cocok untuk memperkenalkan gagasan algoritma sederhana serta <em>debugging</em> (memperbaiki langkah yang keliru) pada siswa SD.
                  </li>
                  <li>
                    <a href="/game/color-link-junior" onClick={(e) => handleLink(e, 'gameDetail', '/game/color-link-junior')} className="text-blue-700 hover:underline font-bold">Color Link Junior (PAUD–SD Awal)</a>:
                    Melatih pengenalan pola warna dan aturan penghubungan jalur tanpa saling memotong — contoh konkret penerapan batasan aturan (<em>constraints</em>) dalam pemecahan masalah spasial.
                  </li>
                  <li>
                    <a href="/game/Petualangan%20Satu%20Garis" onClick={(e) => handleLink(e, 'gameDetail', '/game/Petualangan%20Satu%20Garis')} className="text-blue-700 hover:underline font-bold">Satu Garis (Junior)</a> dan <a href="/game/Aksi%20Ambulans" onClick={(e) => handleLink(e, 'gameDetail', '/game/Aksi%20Ambulans')} className="text-blue-700 hover:underline font-bold">Ambulans (Junior)</a>:
                    Digunakan pada jenjang PAUD–SD awal untuk pemanasan penalaran lintasan, orientasi arah, dan pengambilan urutan langkah menuju tujuan. Keduanya melatih logika jalur pra-koding, bukan menulis kode program.
                  </li>
                </ul>

                <h3 className="text-xl font-extrabold text-[#0C1A69] pt-2">B. Review Materi Informatika &amp; KKA Terstruktur</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <a href="/game/helirescue" onClick={(e) => handleLink(e, 'gameDetail', '/game/helirescue')} className="text-blue-700 hover:underline font-bold">HELI RESCUE (Bank Soal Informatika &amp; KKA SD–SMA)</a>:
                    Aplikasi terverifikasi memuat bank soal <strong>Informatika</strong> serta <strong>Koding dan Kecerdasan Artifisial (KKA)</strong> untuk lintas jenjang SD, SMP, dan SMA. Sangat cocok untuk review konsep dasar perangkat digital, logika, dan literasi AI secara klasikal.
                  </li>
                </ul>

                <h3 className="text-xl font-extrabold text-[#0C1A69] pt-2">C. Demonstrasi Nyata Sistem AI untuk Diskusi Literasi AI</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <a href="/game/doodle" onClick={(e) => handleLink(e, 'gameDetail', '/game/doodle')} className="text-blue-700 hover:underline font-bold">Doodle AI (Demonstrasi Pengenalan Gambar — TensorFlow.js MobileNet)</a>:
                    Siswa menggambar di IFP dan melihat model pengenalan gambar menebak objek secara langsung. Guru memandu diskusi mengapa gambar yang jelas lebih mudah ditebak, mengapa sketsa abstrak sering keliru, dan bahwa AI bekerja mengenali pola visual, bukan &ldquo;memahami&rdquo; seperti manusia.
                  </li>
                  <li>
                    <a href="/game/ai-basketball" onClick={(e) => handleLink(e, 'gameDetail', '/game/ai-basketball')} className="text-blue-700 hover:underline font-bold">AI Basketball (Demonstrasi Deteksi Gerak Kamera — MediaPipe)</a>:
                    Memperlihatkan contoh <em>computer vision</em> yang melacak gerak tangan/tubuh lewat kamera (dengan opsi kontrol sentuh). Guru mengajak siswa mengamati pengaruh pencahayaan, jarak, dan latar belakang terhadap akurasi sensor AI.
                  </li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Aktivitas Kelas KKA yang Praktis di Layar IFP</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                  <div className="p-5 bg-indigo-50/70 rounded-2xl border border-indigo-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">1. Uji Coba Batas Akurasi AI (Doodle AI)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Minta 3 siswa menggambar objek yang sama (misalnya kucing atau rumah) dengan gaya berbeda. Catat kapan tebakan AI tepat dan kapan meleset, lalu simpulkan bersama peran data pola dalam sistem pengenalan gambar.
                    </p>
                  </div>
                  <div className="p-5 bg-sky-50/70 rounded-2xl border border-sky-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">2. Debugging Jalur Bersama (Jalan Kancil)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Saat langkah tim menemui jalan buntu, hentikan layar sejenak. Ajak kelas mengidentifikasi titik kesalahan (<em>bug</em>) dan mengusulkan perbaikan urutan langkah sebelum mencoba ulang.
                    </p>
                  </div>
                  <div className="p-5 bg-teal-50/70 rounded-2xl border border-teal-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">3. Eksperimen Variabel Sensor (AI Basketball)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Pada jenjang SMP/SMA, uji perbedaan respons sensor kamera saat posisi siswa terlalu dekat vs tepat di tengah frame. Hubungkan pengamatan itu dengan cara kerja input kamera pada <em>computer vision</em>.
                    </p>
                  </div>
                  <div className="p-5 bg-purple-50/70 rounded-2xl border border-purple-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">4. Kuis Refleksi Konsep KKA (HELI RESCUE)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Jalankan sesi bank soal Informatika/KKA secara berkelompok untuk memetakan konsep mana yang sudah dipahami siswa dan konsep mana yang masih perlu penguatan melalui aktivitas pemrograman lanjutan.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Contoh Alur Pertemuan KKA 45 Menit</h2>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Eksperimen Pemantik (10 menit):</strong> Lakukan 3 percobaan cepat di <a href="/game/doodle" onClick={(e) => handleLink(e, 'gameDetail', '/game/doodle')} className="text-blue-700 hover:underline font-bold">Doodle AI</a> (untuk topik AI) atau <a href="/game/kancil" onClick={(e) => handleLink(e, 'gameDetail', '/game/kancil')} className="text-blue-700 hover:underline font-bold">Jalan Kancil</a> (untuk topik algoritma/urutan langkah).
                  </li>
                  <li>
                    <strong>Penggalian Konsep &amp; Kuis Terpandu (25 menit):</strong> Hubungkan hasil percobaan dengan istilah inti (input, pola, urutan instruksi, evaluasi kesalahan), lalu perkuat lewat beberapa soal terpilih pada <a href="/game/helirescue" onClick={(e) => handleLink(e, 'gameDetail', '/game/helirescue')} className="text-blue-700 hover:underline font-bold">HELI RESCUE</a> atau latihan <em>unplugged</em> menuliskan urutan langkah di buku catatan.
                  </li>
                  <li>
                    <strong>Refleksi Etika &amp; Tindak Lanjut (10 menit):</strong> Tutup sesi dengan satu pertanyaan literasi AI (misalnya: mengapa keputusan penting tetap membutuhkan verifikasi manusia?) serta rencanakan praktik koding sesungguhnya pada pertemuan lab komputer.
                  </li>
                </ol>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Observasi Asesmen Formatif oleh Guru</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Artikulasi algoritma:</strong> kemampuan siswa menjelaskan urutan langkah secara runtut sebelum menekan layar, bukan sekadar mencoba secara acak.</li>
                  <li><strong>Ketepatan konsep AI:</strong> apakah siswa memahami perbedaan antara menebak pola otomatis (AI pra-latih) dan kecerdasan atau penilaian etis manusia.</li>
                  <li><strong>Strategi perbaikan kesalahan:</strong> kemampuan kelompok mengoreksi rute atau pendekatan saat percobaan pertama gagal.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Aksesibilitas, Privasi &amp; Alternatif Inklusif</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Etika &amp; persetujuan kamera:</strong> saat mendemonstrasikan AI Basketball di depan kelas, jelaskan fungsi kamera secara transparan kepada siswa dan gunakan alternatif kontrol sentuh bila siswa tidak nyaman tampil di depan kamera.</li>
                  <li><strong>Alternatif tanpa komputer individu:</strong> bagi sekolah yang belum memiliki perangkat 1:1, kombinasikan 1 layar IFP untuk demonstrasi kolektif dengan kartu panah arah kertas di meja kelompok untuk melatih berpikir komputasional secara inklusif.</li>
                  <li><strong>Lanjutan ke pemrograman nyata:</strong> setelah fondasi logika terbentuk, arahkan siswa ke platform koding blok atau teks pada sesi praktik khusus agar kompetensi pemrograman berkembang utuh.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Pertanyaan yang Sering Diajukan Guru (FAQ)</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Apakah bermain game logika berarti siswa sudah belajar koding?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Belum sepenuhnya. Game logika seperti Jalan Kancil atau Color Link Junior melatih fondasi berpikir komputasional (urutan langkah, pola, dan aturan), sedangkan keterampilan menulis program tetap memerlukan latihan koding blok atau teks tersendiri.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Apakah siswa melatih model AI sendiri di Doodle AI atau AI Basketball?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Tidak. Kedua game tersebut memakai model AI yang sudah dilatih sebelumnya (TensorFlow.js MobileNet dan MediaPipe). Keduanya sangat baik untuk demonstrasi cara kerja dan keterbatasan AI, bukan untuk praktik pelatihan dataset.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Di mana guru dapat menemukan koleksi game logika lainnya di Papan Interaktif?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Guru dapat membuka halaman koleksi <a href="/game-logika" onClick={(e) => handleLink(e, 'hubLogic', '/game-logika')} className="text-blue-700 hover:underline font-bold">Game Logika &amp; Berpikir Komputasional</a> yang telah memetakan permainan strategi dan penalaran secara terpisah.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50/70 rounded-2xl border border-blue-100 not-prose">
                  <h2 className="text-lg font-black text-[#0C1A69] mb-3">Tautan Terkait di Papan Interaktif</h2>
                  <ul className="space-y-2 text-sm font-semibold">
                    <li>
                      <a href="/game-logika" onClick={(e) => handleLink(e, 'hubLogic', '/game-logika')} className="text-blue-700 hover:underline">
                        Koleksi Game Logika &amp; Fondasi Berpikir Komputasional &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas" onClick={(e) => handleLink(e, 'articleDigitalLiteracyIfp', '/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas')} className="text-blue-700 hover:underline">
                        Literasi Digital Menggunakan IFP di Kelas &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/jurnal-guru/pembelajaran-steam-menggunakan-ifp" onClick={(e) => handleLink(e, 'articleSteamIfp', '/jurnal-guru/pembelajaran-steam-menggunakan-ifp')} className="text-blue-700 hover:underline">
                        Pembelajaran STEAM Menggunakan IFP &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => handleLink(e, 'articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas')} className="text-blue-700 hover:underline">
                        Asesmen Formatif Menggunakan IFP di Kelas &rarr;
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleKkaIfp;
