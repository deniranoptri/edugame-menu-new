import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';
import { applySEOMetadata } from '../seo';

interface ArticlePancasilaIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticlePancasilaIfp: React.FC<ArticlePancasilaIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    applySEOMetadata({
      lang: 'id',
      title: 'Game Pendidikan Pancasila Interaktif di IFP | Jurnal Guru',
      description: 'Strategi pembelajaran Pendidikan Pancasila dan budaya Indonesia di IFP menggunakan Lomba 17an, Mancing Kata, HELI RESCUE, dan NusaBoard untuk kelas SD–SMA.',
      canonical: 'https://papaninteraktif.com/jurnal-guru/game-pendidikan-pancasila-interaktif-menggunakan-ifp',
      openGraph: {
        title: 'Game Pendidikan Pancasila Interaktif di IFP | Jurnal Guru',
        description: 'Strategi pembelajaran Pendidikan Pancasila dan budaya Indonesia di IFP menggunakan Lomba 17an, Mancing Kata, HELI RESCUE, dan NusaBoard untuk kelas SD–SMA.',
        type: 'article',
        url: 'https://papaninteraktif.com/jurnal-guru/game-pendidikan-pancasila-interaktif-menggunakan-ifp'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Game Pendidikan Pancasila Interaktif di IFP | Jurnal Guru',
        description: 'Strategi pembelajaran Pendidikan Pancasila dan budaya Indonesia di IFP menggunakan Lomba 17an, Mancing Kata, HELI RESCUE, dan NusaBoard untuk kelas SD–SMA.'
      },
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Game Pendidikan Pancasila Interaktif Menggunakan IFP",
          "description": "Strategi pembelajaran Pendidikan Pancasila dan budaya Indonesia di IFP menggunakan Lomba 17an, Mancing Kata, HELI RESCUE, dan NusaBoard untuk kelas SD–SMA.",
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
            "@id": "https://papaninteraktif.com/jurnal-guru/game-pendidikan-pancasila-interaktif-menggunakan-ifp"
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
              "name": "Game Pendidikan Pancasila Interaktif Menggunakan IFP",
              "item": "https://papaninteraktif.com/jurnal-guru/game-pendidikan-pancasila-interaktif-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Pendidikan Pancasila IFP</li>
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
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  Pendidikan Pancasila &amp; Budaya Indonesia
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-5 mb-4 leading-tight">
                  Game Pendidikan Pancasila Interaktif Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-600 font-semibold leading-relaxed border-l-4 border-red-400 pl-4">
                  Pendidikan Pancasila bukan sekadar menghafal pasal atau definisi norma, melainkan membiasakan musyawarah, menghargai keberagaman budaya Indonesia, dan mempraktikkan gotong royong secara nyata di ruang kelas.
                </p>

                <p>
                  Mengajar Pendidikan Pancasila kerap terasa teoretis ketika hanya mengandalkan pembacaan buku teks secara searah. Dengan dukungan Interactive Flat Panel (IFP), guru dapat mengubah sesi diskusi norma, aturan sekolah, simbol negara, dan kebinekaan menjadi aktivitas partisipatif. Melalui <strong>game Pendidikan Pancasila interaktif di IFP</strong>, siswa tidak hanya menjawab kuis konsep kewargaan, tetapi juga mengalami langsung pembagian peran, pengambilan keputusan kelompok, dan sikap menghargai pendapat teman di depan papan.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Konteks Pembelajaran &amp; Sasaran Pengguna</h2>
                <p>
                  Panduan ini disusun untuk guru kelas <strong>SD (kelas 1–6)</strong> serta guru mata pelajaran <strong>Pendidikan Pancasila SMP dan SMA</strong> yang ingin memadukan latihan materi terstruktur dengan diskusi nilai, aturan bersama, serta apresiasi budaya Indonesia secara kontekstual.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Rekomendasi Game Terverifikasi: Materi Bawaan vs Integrasi Guru</h2>
                <p>
                  Agar perencanaan pembelajaran tetap akurat, penting bagi guru membedakan antara game yang sudah memuat kategori soal Pendidikan Pancasila secara langsung dan media interaktif yang dimanfaatkan guru sebagai pemantik budaya atau papan diskusi kelas.
                </p>

                <h3 className="text-xl font-extrabold text-[#0C1A69] pt-2">1. Game dengan Kategori Materi Pendidikan Pancasila Terverifikasi</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <a href="/game/mancing-kata" onClick={(e) => handleLink(e, 'gameDetail', '/game/mancing-kata')} className="text-blue-700 hover:underline font-bold">Mancing Kata (Kategori Pendidikan Pancasila &amp; Soal Custom Guru)</a>:
                    Menu aplikasi terverifikasi memuat pilihan konten <strong>Pendidikan Pancasila</strong> lintas jenjang sekaligus fitur input soal custom oleh guru. Mode Solo, Duel (2 pemain), dan Trio memudahkan guru melatih pemahaman norma, hak dan kewajiban, serta kosakata kewargaan sesuai topik kelas.
                  </li>
                  <li>
                    <a href="/game/helirescue" onClick={(e) => handleLink(e, 'gameDetail', '/game/helirescue')} className="text-blue-700 hover:underline font-bold">HELI RESCUE (Bank Soal Pendidikan Pancasila SD–SMA)</a>:
                    Bank soal aplikasi terverifikasi mencakup mata pelajaran <strong>Pendidikan Pancasila</strong> untuk jenjang SD, SMP, hingga SMA dengan variasi tantangan identifikasi dan pengurutan. Cocok dipakai untuk ulasan konsep secara kooperatif bersama satu kelas.
                  </li>
                </ul>

                <h3 className="text-xl font-extrabold text-[#0C1A69] pt-2">2. Integrasi Budaya Indonesia &amp; Musyawarah yang Dirancang Guru</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <a href="/game/traditional" onClick={(e) => handleLink(e, 'gameDetail', '/game/traditional')} className="text-blue-700 hover:underline font-bold">Lomba 17an (Pemantik Budaya Indonesia &amp; Gotong Royong)</a>:
                    Menyajikan permainan virtual bertema perayaan 17 Agustus. Meski bukan kuis pasal Pancasila, guru dapat menggunakannya sebagai pemantik diskusi mengenai semangat persatuan, aturan permainan yang adil, dan tradisi gotong royong di lingkungan masyarakat Indonesia.
                  </li>
                  <li>
                    <a href="/game/nusaboard" onClick={(e) => handleLink(e, 'gameDetail', '/game/nusaboard')} className="text-blue-700 hover:underline font-bold">NusaBoard (Papan Musyawarah &amp; Kesepakatan Kelas)</a>:
                    Kanvas kolaboratif bebas yang dirancang guru untuk menyusun kesepakatan kelas bersama, memetakan contoh penerapan sila-sila Pancasila di sekolah, atau menuliskan daftar keberagaman budaya daerah asal siswa.
                  </li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Ide Aktivitas Pendidikan Pancasila di Layar IFP</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                  <div className="p-5 bg-red-50/70 rounded-2xl border border-red-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">1. Musyawarah Jawaban Tim (HELI RESCUE)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Sebelum perwakilan tim menyentuh jawaban di layar, kelompok diberi 20 detik untuk berdiskusi singkat dan mencapai kesepakatan. Siswa belajar bahwa keputusan bersama perlu mendengar suara anggota lain.
                    </p>
                  </div>
                  <div className="p-5 bg-amber-50/70 rounded-2xl border border-amber-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">2. Kasus Norma Harian (Mancing Kata Custom)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Guru memasukkan 8–10 contoh perilaku nyata di sekolah (mengantre di kantin, menjaga kebersihan kelas, menghargai ibadah teman) lewat fitur soal custom Mancing Kata agar siswa mengaitkannya dengan norma dan nilai Pancasila.
                    </p>
                  </div>
                  <div className="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">3. Peta Budaya &amp; Tradisi (Lomba 17an + NusaBoard)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Mulai dengan satu ronde Lomba 17an sebagai pemantik suasana kebersamaan, lalu buka NusaBoard untuk menuliskan ragam permainan tradisional, bahasa daerah, atau tradisi gotong royong dari daerah sekitar siswa.
                    </p>
                  </div>
                  <div className="p-5 bg-sky-50/70 rounded-2xl border border-sky-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">4. Papan Kesepakatan Kelas Interaktif</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Pada awal semester atau proyek kelompok, gunakan NusaBoard agar setiap kelompok menuliskan satu aturan kelas yang adil, lalu lakukan pemungutan suara dan revisi redaksi secara terbuka di depan IFP.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Contoh Alur Pembelajaran 1 Pertemuan (45 Menit)</h2>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Pemantik Kontekstual (8 menit):</strong> Ajak dua kelompok memainkan satu ronde singkat <a href="/game/traditional" onClick={(e) => handleLink(e, 'gameDetail', '/game/traditional')} className="text-blue-700 hover:underline font-bold">Lomba 17an</a>, lalu ajukan pertanyaan reflektif: aturan apa yang membuat permainan terasa adil bagi semua?
                  </li>
                  <li>
                    <strong>Eksplorasi Konsep &amp; Diskusi (25 menit):</strong> Jalankan kuis terpandu pada kategori Pendidikan Pancasila di <a href="/game/mancing-kata" onClick={(e) => handleLink(e, 'gameDetail', '/game/mancing-kata')} className="text-blue-700 hover:underline font-bold">Mancing Kata</a> atau <a href="/game/helirescue" onClick={(e) => handleLink(e, 'gameDetail', '/game/helirescue')} className="text-blue-700 hover:underline font-bold">HELI RESCUE</a>. Setelah tiap 2–3 soal, guru berhenti sejenak untuk menanyakan alasan pilihan siswa dan mengaitkannya dengan pengalaman sehari-hari.
                  </li>
                  <li>
                    <strong>Komitmen Nyata &amp; Refleksi (12 menit):</strong> Buka <a href="/game/nusaboard" onClick={(e) => handleLink(e, 'gameDetail', '/game/nusaboard')} className="text-blue-700 hover:underline font-bold">NusaBoard</a> dan rangkum 3 tindakan gotong royong atau sikap saling menghargai yang disepakati siswa untuk dipraktikkan selama pekan berjalan.
                  </li>
                </ol>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Observasi Asesmen Formatif Guru</h2>
                <p>
                  Nilai karakter dan kewargaan tidak diukur dari menang-kalah pada layar game. Guru dapat mengamati indikator formatif berikut sepanjang aktivitas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Kualitas penalaran moral dan kewargaan:</strong> apakah siswa mampu memberi alasan mengapa suatu sikap mencerminkan keadilan, persatuan, atau tanggung jawab.</li>
                  <li><strong>Praktik musyawarah selama sesi:</strong> apakah anggota kelompok saling mendengarkan dan bergantian mengemukakan pendapat sebelum menjawab.</li>
                  <li><strong>Sikap inklusif terhadap perbedaan:</strong> cara siswa merespons cerita budaya daerah atau kebiasaan teman yang berbeda dari dirinya.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Aksesibilitas &amp; Alternatif Inklusif</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Suara yang setara di kelas besar:</strong> gunakan sistem juru bicara bergilir sehingga siswa yang pendiam tetap mendapat kesempatan menyampaikan alasan kelompok tanpa harus selalu maju ke layar.</li>
                  <li><strong>Penyesuaian keterbacaan teks:</strong> bacakan soal dengan lantang bagi siswa kelas awal atau siswa dengan hambatan membaca sebelum tim memutuskan jawaban.</li>
                  <li><strong>Keseimbangan aktivitas tatap muka:</strong> pastikan permainan IFP tidak melebihi sepertiga durasi pelajaran agar ruang diskusi tatap muka, studi kasus lokal, dan proyek sosial kecil tetap menjadi inti Pendidikan Pancasila.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Pertanyaan yang Sering Diajukan Guru (FAQ)</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Apakah semua materi Pendidikan Pancasila sudah tersedia otomatis di game?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      HELI RESCUE dan Mancing Kata menyediakan pilihan kategori Pendidikan Pancasila, namun cakupan tiap bab di sekolah berbeda-beda. Guru sangat dianjurkan meninjau soal terlebih dahulu dan memanfaatkan fitur soal custom Mancing Kata atau papan NusaBoard untuk menyesuaikan dengan materi bab berjalan.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Bagaimana mencegah mode Duel atau kompetisi merusak semangat gotong royong?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Ubah fokus dari persaingan individu menjadi kerja sama tim: setiap perwakilan wajib berkonsultasi dengan kelompoknya sebelum menjawab, dan apresiasi diberikan kepada tim yang paling tertib bermusyawarah.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Apakah Lomba 17an cocok untuk jenjang SMP dan SMA?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Cocok sebagai ice breaking singkat 5 menit atau pemantik diskusi tentang makna tradisi kemerdekaan dan peran pemuda, lalu dilanjutkan dengan diskusi kasus kewargaan yang lebih analitis di NusaBoard atau kuis jenjang SMP/SMA di HELI RESCUE.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50/70 rounded-2xl border border-blue-100 not-prose">
                  <h2 className="text-lg font-black text-[#0C1A69] mb-3">Tautan Terkait di Papan Interaktif</h2>
                  <ul className="space-y-2 text-sm font-semibold">
                    <li>
                      <a href="/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp" onClick={(e) => handleLink(e, 'articleCooperativeIfp', '/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp')} className="text-blue-700 hover:underline">
                        Pembelajaran Kooperatif Menggunakan IFP &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp" onClick={(e) => handleLink(e, 'articlePseIfp', '/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp')} className="text-blue-700 hover:underline">
                        Pembelajaran Sosial Emosional (PSE) Menggunakan IFP &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => handleLink(e, 'articleIpsIfp', '/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas')} className="text-blue-700 hover:underline">
                        Ide Aktivitas IPS Interaktif Menggunakan IFP di Kelas &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/game-edukasi-ifp" onClick={(e) => handleLink(e, 'hubIfp', '/game-edukasi-ifp')} className="text-blue-700 hover:underline">
                        Koleksi Game Edukasi IFP &rarr;
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

export default ArticlePancasilaIfp;
