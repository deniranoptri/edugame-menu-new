import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';
import { applySEOMetadata } from '../seo';

interface ArticleSeniRupaIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleSeniRupaIfp: React.FC<ArticleSeniRupaIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    applySEOMetadata({
      lang: 'id',
      title: 'Game Seni Rupa Interaktif di IFP untuk SD | Jurnal Guru',
      description: 'Panduan guru memanfaatkan game seni rupa interaktif di IFP untuk SD: Satu Garis, Puzzle Gambar, Doodle AI, Lab Warna, Sayuran, dan NusaBoard secara kreatif.',
      canonical: 'https://papaninteraktif.com/jurnal-guru/game-seni-rupa-interaktif-menggunakan-ifp',
      openGraph: {
        title: 'Game Seni Rupa Interaktif di IFP untuk SD | Jurnal Guru',
        description: 'Panduan guru memanfaatkan game seni rupa interaktif di IFP untuk SD: Satu Garis, Puzzle Gambar, Doodle AI, Lab Warna, Sayuran, dan NusaBoard secara kreatif.',
        type: 'article',
        url: 'https://papaninteraktif.com/jurnal-guru/game-seni-rupa-interaktif-menggunakan-ifp'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Game Seni Rupa Interaktif di IFP untuk SD | Jurnal Guru',
        description: 'Panduan guru memanfaatkan game seni rupa interaktif di IFP untuk SD: Satu Garis, Puzzle Gambar, Doodle AI, Lab Warna, Sayuran, dan NusaBoard secara kreatif.'
      },
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Game Seni Rupa Interaktif Menggunakan IFP untuk SD",
          "description": "Panduan guru memanfaatkan game seni rupa interaktif di IFP untuk SD: Satu Garis, Puzzle Gambar, Doodle AI, Lab Warna, Sayuran, dan NusaBoard secara kreatif.",
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
            "@id": "https://papaninteraktif.com/jurnal-guru/game-seni-rupa-interaktif-menggunakan-ifp"
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
              "name": "Game Seni Rupa Interaktif Menggunakan IFP untuk SD",
              "item": "https://papaninteraktif.com/jurnal-guru/game-seni-rupa-interaktif-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Seni Rupa Interaktif IFP</li>
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
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  Seni Rupa &amp; Kreativitas
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-5 mb-4 leading-tight">
                  Game Seni Rupa Interaktif Menggunakan IFP untuk SD
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-600 font-semibold leading-relaxed border-l-4 border-rose-400 pl-4">
                  Layar sentuh Interactive Flat Panel (IFP) memberi ruang besar bagi siswa SD untuk mengeksplorasi unsur rupa — garis, bentuk, warna, dan komposisi — sebelum mereka menuangkan gagasan ke kertas gambar, krayon, atau media karya nyata.
                </p>

                <p>
                  Dalam pembelajaran Seni Rupa di sekolah dasar, tantangan paling umum bukanlah kurangnya imajinasi siswa, melainkan keraguan memulai goresan pertama dan terbatasnya kesempatan melihat proses berkarya teman sekelas secara bersama. Ketika guru menghadirkan <strong>game seni rupa interaktif di IFP</strong> sebagai pemantik eksplorasi, layar besar berubah menjadi studio demonstrasi bersama yang ramah percobaan: siswa berani menguji perpaduan warna, mengamati kontur garis, dan mendiskusikan komposisi gambar tanpa takut kertas langsung rusak.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Konteks Pembelajaran &amp; Sasaran Pengguna</h2>
                <p>
                  Panduan ini dirancang untuk guru Seni Rupa dan guru kelas <strong>PAUD/TK hingga SD kelas 1–6</strong> yang ingin memadukan stimulasi layar IFP dengan praktik berkarya fisik di meja siswa. Fokus utamanya adalah melatih kepekaan visual terhadap garis, warna dasar, susunan ruang, dan sketsa objek sederhana.
                </p>
                <p>
                  Perlu ditekankan sejak awal bahwa permainan digital di layar sentuh <strong>bukan pengganti</strong> pengalaman taktil memegang pensil warna, kuas, gunting, kertas lipat, atau plastisin. Peran IFP adalah mempercepat pemahaman unsur visual secara klasikal sehingga waktu praktik berkarya manual di kelas menjadi lebih terarah dan kaya gagasan.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Rekomendasi Game Terverifikasi untuk Seni Rupa di IFP</h2>
                <p>
                  Dari katalog Papan Interaktif, terdapat dua kelompok media yang dapat dimanfaatkan guru Seni Rupa: permainan yang secara langsung melibatkan aktivitas menggambar, mewarnai, dan eksperimen warna, serta alat bantu visual-spasial untuk melatih komposisi dan kontrol garis.
                </p>

                <h3 className="text-xl font-extrabold text-[#0C1A69] pt-2">1. Aktivitas Langsung Menggambar, Mewarnai &amp; Eksperimen Warna</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <a href="/game/doodle" onClick={(e) => handleLink(e, 'gameDetail', '/game/doodle')} className="text-blue-700 hover:underline font-bold">Doodle AI (Sketsa Cepat &amp; Pengenalan Bentuk)</a>:
                    Siswa menggambar sketsa objek sederhana langsung dengan jari atau stylus di layar IFP, lalu sistem pengenalan gambar berbasis TensorFlow.js (MobileNet) menebak bentuknya. Guru dapat memanfaatkannya untuk melatih siswa menangkap ciri visual utama suatu objek (garis kontur dan proporsi dasar) dalam waktu singkat.
                  </li>
                  <li>
                    <a href="/game/belajar-angka" onClick={(e) => handleLink(e, 'gameDetail', '/game/belajar-angka')} className="text-blue-700 hover:underline font-bold">Lab Warna (Eksperimen Warna Dasar — Game Junior)</a>:
                    Cocok untuk PAUD/TK hingga SD kelas awal untuk mengenali warna primer dan hasil pencampuran warna secara visual sebelum siswa mencoba mencampur cat air atau krayon secara nyata.
                  </li>
                  <li>
                    <a href="/game/mewarnai" onClick={(e) => handleLink(e, 'gameDetail', '/game/mewarnai')} className="text-blue-700 hover:underline font-bold">Sayuran (Mewarnai Objek Sederhana — Game Junior)</a>:
                    Membantu siswa kelas awal berlatih mengisi bidang warna secara rapi, membedakan kontras warna objek dan latar, serta mengenal bentuk sayuran sebagai tema gambar sehari-hari.
                  </li>
                  <li>
                    <a href="/game/nusaboard" onClick={(e) => handleLink(e, 'gameDetail', '/game/nusaboard')} className="text-blue-700 hover:underline font-bold">NusaBoard (Kanvas Gambar &amp; Papan Sketsa Kolaboratif)</a>:
                    Media papan tulis digital fleksibel yang dapat dirancang guru untuk latihan unsur garis (lurus, lengkung, zig-zag), sketsa pola dekoratif Nusantara, maupun galeri apresiasi sketsa kelompok.
                  </li>
                </ul>

                <h3 className="text-xl font-extrabold text-[#0C1A69] pt-2">2. Pendamping Kepekaan Garis &amp; Komposisi Visual</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <a href="/game/Petualangan%20Satu%20Garis" onClick={(e) => handleLink(e, 'gameDetail', '/game/Petualangan%20Satu%20Garis')} className="text-blue-700 hover:underline font-bold">Satu Garis (Kontrol Tarikan Garis Kontinu — Game Junior)</a>:
                    Berfungsi sebagai pemanasan motorik halus dan pengamatan lintasan garis utuh sebelum siswa membuat gambar kontur atau motif garis berulang di buku gambar.
                  </li>
                  <li>
                    <a href="/game/puzzle" onClick={(e) => handleLink(e, 'gameDetail', '/game/puzzle')} className="text-blue-700 hover:underline font-bold">Puzzle Gambar (Pengamatan Komposisi &amp; Bagian-Utuh)</a>:
                    Melatih siswa membaca hubungan warna, tepi objek, dan keseimbangan bidang gambar. Karena bukan game menggambar langsung, guru memakainya sebagai aktivitas apresiasi visual dan pengenalan komposisi sebelum berkarya.
                  </li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Ide Aktivitas Kelas Praktis di Layar IFP</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                  <div className="p-5 bg-rose-50/70 rounded-2xl border border-rose-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">1. Tantangan Sketsa 30 Detik (Doodle AI)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Satu siswa menggambar garis kontur hewan atau benda di IFP tanpa detail berlebihan. Teman sekelas mengamati bagian bentuk mana yang membuat objek mudah dikenali, lalu membandingkannya dengan hasil tebakan sistem.
                    </p>
                  </div>
                  <div className="p-5 bg-amber-50/70 rounded-2xl border border-amber-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">2. Prediksi Campuran Warna (Lab Warna)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Sebelum menekan tombol di Lab Warna, siswa mengangkat kartu warna prediksi mereka. Setelah warna tampil di IFP, siswa langsung menguji kombinasi yang sama di palet kertas atau krayon mereka.
                    </p>
                  </div>
                  <div className="p-5 bg-sky-50/70 rounded-2xl border border-sky-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">3. Estafet Motif Garis (NusaBoard &amp; Satu Garis)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Awali dengan 2 menit latihan alur garis di Satu Garis, lalu bagi layar NusaBoard menjadi 3 kolom agar 3 siswa menyambung pola dekoratif sederhana secara bergantian dengan tertib.
                    </p>
                  </div>
                  <div className="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">4. Bedah Komposisi Karya (Puzzle Gambar)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Setelah potongan gambar tersusun bersama, guru mengajak siswa menunjuk titik fokus (objek utama), latar belakang, dan warna dominan sebelum mereka menyusun sketsa karya pribadi.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Contoh Alur Pertemuan 1 Jam Pelajaran (35–45 Menit)</h2>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Pembukaan &amp; Pemanasan Visual (7–10 menit):</strong> Guru memutar 2–3 ronde <a href="/game/belajar-angka" onClick={(e) => handleLink(e, 'gameDetail', '/game/belajar-angka')} className="text-blue-700 hover:underline font-bold">Lab Warna</a> (kelas 1–3) atau <a href="/game/doodle" onClick={(e) => handleLink(e, 'gameDetail', '/game/doodle')} className="text-blue-700 hover:underline font-bold">Doodle AI</a> (kelas 4–6) secara klasikal untuk memunculkan kosakata rupa seperti garis lengkung, kontras, dan proporsi.
                  </li>
                  <li>
                    <strong>Eksplorasi &amp; Praktik Karya Nyata (20–25 menit):</strong> Siswa menerapkan unsur yang baru diamati ke buku gambar menggunakan pensil warna, krayon, atau kertas kolase. Sementara itu, IFP dapat menampilkan panduan langkah atau contoh bidang warna di <a href="/game/nusaboard" onClick={(e) => handleLink(e, 'gameDetail', '/game/nusaboard')} className="text-blue-700 hover:underline font-bold">NusaBoard</a>.
                  </li>
                  <li>
                    <strong>Apresiasi &amp; Refleksi Singkat (8–10 menit):</strong> Pilih 3–4 siswa secara sukarela untuk menunjukkan karya kertas mereka, lalu ajak kelas menyebutkan satu unsur garis atau warna yang paling menarik dari karya teman.
                  </li>
                </ol>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Observasi Asesmen Formatif oleh Guru</h2>
                <p>
                  Skor atau keberhasilan tebakan otomatis di game tidak dapat dijadikan nilai Seni Rupa. Asesmen formatif tetap berpusat pada pengamatan guru terhadap proses kreatif siswa, antara lain:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Keberanian bereksperimen:</strong> apakah siswa mau mencoba variasi garis atau perpaduan warna baru tanpa terpaku pada satu contoh tunggal.</li>
                  <li><strong>Pengenalan unsur rupa:</strong> kemampuan siswa menyebutkan warna primer/sekunder, bentuk dasar, atau arah garis yang digunakan dalam karyanya.</li>
                  <li><strong>Transfer ke media fisik:</strong> sejauh mana pemahaman dari demonstrasi IFP tercermin pada kerapian, komposisi, dan orisinalitas karya di kertas.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Aksesibilitas &amp; Alternatif Inklusif di Kelas</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Ketinggian jangkauan layar:</strong> untuk siswa kelas 1–2 atau pengguna kursi roda, gunakan fitur penurunan tampilan layar (jika tersedia di IFP) atau posisikan area gambar di bagian bawah kanvas NusaBoard, serta sediakan stylus berpegangan nyaman.</li>
                  <li><strong>Pengaturan giliran &amp; waktu layar:</strong> batasi interaksi layar kolektif sekitar 8–12 menit agar mayoritas jam Seni Rupa tetap berfokus pada praktik berkarya manual dengan kertas dan alat warna.</li>
                  <li><strong>Alternatif siswa yang kurang nyaman maju ke depan:</strong> berikan peran sebagai pengarah warna dari bangku, pengamat komposisi, atau langsung bekerja di kertas gambar sambil melihat demonstrasi di layar.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Pertanyaan yang Sering Diajukan Guru (FAQ)</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Apakah game digital menggantikan praktik menggambar di kertas?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Tidak. Game di IFP berperan sebagai pemantik konsep visual, pemanasan motorik, dan demonstrasi klasikal. Keterampilan motorik halus dan rasa tekstur tetap perlu dilatih melalui kertas, pensil, krayon, cat, atau bahan kolase nyata.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Mengapa Doodle AI terkadang salah menebak gambar siswa?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Model pengenalan gambar di Doodle AI mengandalkan pola garis umum dari data latihnya, sehingga gambar kreatif yang unik bisa tidak tertebak. Jadikan momen ini bahan diskusi positif bahwa seni anak tidak dinilai dari tebakan mesin.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Bagaimana jika hanya ada satu IFP untuk 28–32 siswa?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Gunakan pola demonstrasi singkat 2–3 perwakilan di layar, sementara siswa lain menjawab prediksi dari bangku atau langsung membuat sketsa pendamping di kertas masing-masing.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50/70 rounded-2xl border border-blue-100 not-prose">
                  <h2 className="text-lg font-black text-[#0C1A69] mb-3">Tautan Terkait di Papan Interaktif</h2>
                  <ul className="space-y-2 text-sm font-semibold">
                    <li>
                      <a href="/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp" onClick={(e) => handleLink(e, 'articleVisualIfp', '/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp')} className="text-blue-700 hover:underline">
                        Pembelajaran Berbasis Visual (Visual Thinking) Menggunakan IFP &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/jurnal-guru/pembelajaran-steam-menggunakan-ifp" onClick={(e) => handleLink(e, 'articleSteamIfp', '/jurnal-guru/pembelajaran-steam-menggunakan-ifp')} className="text-blue-700 hover:underline">
                        Pembelajaran STEAM Menggunakan IFP (Integrasi Unsur Seni &amp; Geometri) &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/game-edukasi-anak" onClick={(e) => handleLink(e, 'hubKids', '/game-edukasi-anak')} className="text-blue-700 hover:underline">
                        Koleksi 17 Game Edukasi Anak PAUD &amp; SD Awal (Junior) &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/game-edukasi-ifp" onClick={(e) => handleLink(e, 'hubIfp', '/game-edukasi-ifp')} className="text-blue-700 hover:underline">
                        Koleksi Game Edukasi IFP untuk Papan Interaktif &rarr;
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

export default ArticleSeniRupaIfp;
