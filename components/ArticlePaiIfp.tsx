import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';
import { applySEOMetadata } from '../seo';

interface ArticlePaiIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticlePaiIfp: React.FC<ArticlePaiIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    applySEOMetadata({
      lang: 'id',
      title: 'Game Pendidikan Agama Islam (PAI) di IFP | Jurnal Guru',
      description: 'Panduan guru PAI memanfaatkan Tanzib, Celestial Weaver, dan Mancing Kata di IFP sebagai media pendamping latihan interaktif yang tetap mengutamakan guru.',
      canonical: 'https://papaninteraktif.com/jurnal-guru/game-pendidikan-agama-islam-interaktif-ifp',
      openGraph: {
        title: 'Game Pendidikan Agama Islam (PAI) di IFP | Jurnal Guru',
        description: 'Panduan guru PAI memanfaatkan Tanzib, Celestial Weaver, dan Mancing Kata di IFP sebagai media pendamping latihan interaktif yang tetap mengutamakan guru.',
        type: 'article',
        url: 'https://papaninteraktif.com/jurnal-guru/game-pendidikan-agama-islam-interaktif-ifp'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Game Pendidikan Agama Islam (PAI) di IFP | Jurnal Guru',
        description: 'Panduan guru PAI memanfaatkan Tanzib, Celestial Weaver, dan Mancing Kata di IFP sebagai media pendamping latihan interaktif yang tetap mengutamakan guru.'
      },
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Game Pendidikan Agama Islam Interaktif Menggunakan IFP",
          "description": "Panduan guru PAI memanfaatkan Tanzib, Celestial Weaver, dan Mancing Kata di IFP sebagai media pendamping latihan interaktif yang tetap mengutamakan guru.",
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
            "@id": "https://papaninteraktif.com/jurnal-guru/game-pendidikan-agama-islam-interaktif-ifp"
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
              "name": "Game Pendidikan Agama Islam Interaktif Menggunakan IFP",
              "item": "https://papaninteraktif.com/jurnal-guru/game-pendidikan-agama-islam-interaktif-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">Pendidikan Agama Islam (PAI) IFP</li>
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
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  Pendidikan Agama Islam (PAI)
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-5 mb-4 leading-tight">
                  Game Pendidikan Agama Islam Interaktif Menggunakan IFP
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-600 font-semibold leading-relaxed border-l-4 border-emerald-500 pl-4">
                  Interactive Flat Panel (IFP) dapat membantu guru Pendidikan Agama Islam (PAI) menghadirkan sesi latihan pengetahuan dasar dan murojaah urutan ayat secara lebih interaktif, sambil tetap menempatkan keteladanan serta bimbingan langsung guru sebagai inti pembelajaran.
                </p>

                <p>
                  Dalam pembelajaran Pendidikan Agama Islam dan Budi Pekerti di sekolah, pemahaman konsep, pembiasaan adab, serta ketepatan membaca Al-Qur’an memerlukan pendampingan langsung dari pendidik. Kehadiran <strong>game Pendidikan Agama Islam interaktif di IFP</strong> tidak dimaksudkan untuk menggantikan talaqqi, bimbingan tajwid, atau pengajaran adab secara tatap muka, melainkan menjadi sarana variasi latihan kelas yang tertib, visual, dan mendorong partisipasi aktif siswa.
                </p>

                <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 not-prose">
                  <p className="text-sm font-bold text-emerald-950 leading-relaxed m-0">
                    Catatan Kurasi &amp; Verifikasi Guru: Sebelum menggunakan permainan PAI di depan kelas, guru PAI sangat disarankan membuka dan meninjau langsung butir soal atau konten di aplikasi tersemat agar selaras dengan bab materi, jenjang kelas, dan standar bacaan yang sedang diajarkan.
                  </p>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Konteks Pembelajaran &amp; Sasaran Pengguna</h2>
                <p>
                  Panduan ini ditujukan bagi guru <strong>PAI SD, SMP, dan SMA</strong> yang ingin memanfaatkan layar sentuh IFP sebagai media pendamping pada tahap pengulangan materi (review), pemanasan kelas, maupun murojaah secara berkelompok dalam suasana yang santun dan kondusif.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Rekomendasi Game Terverifikasi untuk PAI di Papan Interaktif</h2>
                <p>
                  Pada katalog Papan Interaktif, tersedia tiga permainan yang relevan untuk pembelajaran PAI dengan karakter cakupan yang perlu dipahami guru secara jujur:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <a href="/game/tanzib" onClick={(e) => handleLink(e, 'gameDetail', '/game/tanzib')} className="text-blue-700 hover:underline font-bold">Tanzib — Timbangan Ajaib Tanzib (Terverifikasi di Katalog Portal)</a>:
                    Media pembelajaran PAI interaktif pada katalog portal untuk jenjang SD, SMP, dan SMA yang memadukan unsur logika dengan pengetahuan dasar agama Islam. Karena kontennya dijalankan melalui aplikasi tersemat, guru disarankan meninjau kesesuaian topik soal dengan bab pertemuan sebelum memulai sesi kelas.
                  </li>
                  <li>
                    <a href="/game/celestial-weaver" onClick={(e) => handleLink(e, 'gameDetail', '/game/celestial-weaver')} className="text-blue-700 hover:underline font-bold">Celestial Weaver — Susun Ayat Al-Qur’an (Terverifikasi di Katalog Portal)</a>:
                    Permainan edukasi PAI pada katalog portal untuk jenjang SD, SMP, dan SMA yang mengajak siswa menyusun dan merangkai urutan ayat suci Al-Qur’an secara interaktif. Media ini berperan sebagai latihan pendamping murojaah urutan ayat di layar besar — <strong>bukan pengganti</strong> bimbingan langsung talaqqi, makhraj, dan tajwid oleh guru PAI.
                  </li>
                  <li>
                    <a href="/game/mancing-kata" onClick={(e) => handleLink(e, 'gameDetail', '/game/mancing-kata')} className="text-blue-700 hover:underline font-bold">Mancing Kata — Kategori PAI &amp; Budi Pekerti + Soal Custom Guru</a>:
                    Menu aplikasi terverifikasi memuat kategori <strong>PAI &amp; Budi Pekerti</strong> sekaligus fitur input soal custom oleh guru. Dengan fitur soal custom, guru PAI memiliki kendali penuh untuk menuliskan kosakata, istilah fikih dasar, atau ringkasan materi bab yang sedang dipelajari dalam mode Solo, Duel (2 pemain), maupun Trio.
                  </li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Ide Aktivitas Kelas PAI yang Santun dan Terarah di IFP</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                  <div className="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">1. Murojaah Urutan Ayat Terpandu (Celestial Weaver)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Setelah siswa menyimak dan melafalkan bacaan bersama guru dengan mushaf, gunakan 1–2 sesi Celestial Weaver di IFP agar kelompok menyusun urutan potongan ayat secara bergantian sambil tetap melafalkannya dengan tartil.
                    </p>
                  </div>
                  <div className="p-5 bg-teal-50/70 rounded-2xl border border-teal-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">2. Review Pengetahuan Dasar PAI (Tanzib)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Gunakan Tanzib sebagai sesi peninjauan konsep di akhir bab. Setelah satu tantangan terselesaikan di layar, guru meminta siswa menjelaskan kembali alasan jawabannya dengan bahasa sendiri.
                    </p>
                  </div>
                  <div className="p-5 bg-sky-50/70 rounded-2xl border border-sky-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">3. Kuis Kosakata &amp; Istilah Bab (Mancing Kata Custom)</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Guru menyusun daftar istilah sesuai materi pertemuan (misalnya adab terhadap orang tua, kebersihan, atau istilah ibadah dasar) di fitur soal custom Mancing Kata agar soal 100% sesuai bahan ajar kelas.
                    </p>
                  </div>
                  <div className="p-5 bg-amber-50/70 rounded-2xl border border-amber-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">4. Pembiasaan Adab Bergiliran di Depan Layar</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Jadikan aturan bergiliran di depan IFP — tidak memotong giliran teman, memberi semangat dengan kata-kata baik, dan menjaga ketenangan kelas — sebagai praktik langsung nilai akhlak mulia.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Contoh Alur Pembelajaran PAI Menggunakan IFP (45 Menit)</h2>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Pembukaan &amp; Pengantar Materi (10 menit):</strong> Doa belajar, apersepsi, dan penyampaian materi inti atau bimbingan bacaan langsung oleh guru bersama seluruh siswa menggunakan buku teks atau mushaf.
                  </li>
                  <li>
                    <strong>Latihan Pendamping Interaktif di IFP (15–20 menit):</strong> Pilih satu permainan sesuai fokus pertemuan — <a href="/game/tanzib" onClick={(e) => handleLink(e, 'gameDetail', '/game/tanzib')} className="text-blue-700 hover:underline font-bold">Tanzib</a> untuk review pengetahuan dasar, <a href="/game/celestial-weaver" onClick={(e) => handleLink(e, 'gameDetail', '/game/celestial-weaver')} className="text-blue-700 hover:underline font-bold">Celestial Weaver</a> untuk latihan urutan ayat, atau <a href="/game/mancing-kata" onClick={(e) => handleLink(e, 'gameDetail', '/game/mancing-kata')} className="text-blue-700 hover:underline font-bold">Mancing Kata</a> untuk kategori PAI &amp; Budi Pekerti / soal custom guru.
                  </li>
                  <li>
                    <strong>Verifikasi Guru &amp; Refleksi Akhlak (15 menit):</strong> Guru meluruskan miskonsepsi jika muncul selama permainan, menguatkan ketepatan bacaan secara lisan, dan mengajak siswa menyimpulkan satu kebiasaan baik yang dapat diamalkan di rumah dan sekolah.
                  </li>
                </ol>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Observasi Asesmen Formatif Guru PAI</h2>
                <p>
                  Skor pada permainan layar hanya membantu memantau antusiasme dan pengenalan awal, bukan penilaian akhir pembelajaran PAI. Guru melakukan asesmen formatif secara langsung melalui:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Ketepatan bacaan dan pelafalan lisan:</strong> selalu dinilai langsung oleh guru saat siswa membaca mushaf atau melafalkan hafalan, bukan dari interaksi layar.</li>
                  <li><strong>Pemahaman makna konsep:</strong> kemampuan siswa menjelaskan isi materi atau contoh penerapannya dalam keseharian.</li>
                  <li><strong>Sikap dan adab selama sesi kelas:</strong> ketertiban, kerja sama yang santun, serta sikap hormat terhadap teman dan materi keagamaan yang ditampilkan di layar.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Aksesibilitas &amp; Penyesuaian Kelas yang Inklusif</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Keterbacaan teks di layar:</strong> pastikan ukuran tampilan layar jelas terbaca hingga bangku belakang dan kurangi silau lampu ruang saat menampilkan huruf atau urutan ayat.</li>
                  <li><strong>Pendampingan bertahap:</strong> pasangkan siswa yang masih belajar mengenali bacaan dengan teman pendamping yang sabar atau lakukan secara klasikal dengan panduan guru agar tidak ada siswa merasa tertekan di depan kelas.</li>
                  <li><strong>Proporsi waktu layar:</strong> gunakan game sebagai penguat selama 10–15 menit agar porsi utama jam PAI tetap didedikasikan untuk bimbingan langsung guru, praktik ibadah, dan pembinaan karakter.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Pertanyaan yang Sering Diajukan Guru (FAQ)</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Apakah Celestial Weaver dapat menggantikan bimbingan membaca Al-Qur’an bersama guru?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Tidak. Celestial Weaver hanya berfungsi sebagai media pendamping visual untuk melatih ingatan urutan ayat. Bimbingan makhraj, panjang-pendek bacaan, dan tajwid tetap wajib dilakukan secara langsung bersama guru PAI.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Bagaimana jika soal bawaan belum mencakup bab PAI yang sedang diajarkan?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Guru dapat menggunakan fitur soal custom pada Mancing Kata untuk memasukkan daftar istilah dan pertanyaan yang disusun sendiri sesuai bab buku paket PAI di sekolah masing-masing.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Apakah game PAI di Papan Interaktif bisa dipakai untuk jenjang SD, SMP, dan SMA?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Pada katalog portal, Tanzib dan Celestial Weaver ditujukan untuk rentang SD, SMP, dan SMA, sedangkan Mancing Kata mendukung pilihan jenjang serta soal custom guru. Guru tetap perlu melakukan pratinjau singkat sebelum kelas dimulai agar tingkat kesulitannya sesuai dengan peserta didik.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50/70 rounded-2xl border border-blue-100 not-prose">
                  <h2 className="text-lg font-black text-[#0C1A69] mb-3">Tautan Terkait di Papan Interaktif</h2>
                  <ul className="space-y-2 text-sm font-semibold">
                    <li>
                      <a href="/game/tanzib" onClick={(e) => handleLink(e, 'gameDetail', '/game/tanzib')} className="text-blue-700 hover:underline">
                        Tanzib — Timbangan Ajaib Tanzib (PAI) &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/game/celestial-weaver" onClick={(e) => handleLink(e, 'gameDetail', '/game/celestial-weaver')} className="text-blue-700 hover:underline">
                        Celestial Weaver — Susun Ayat Al-Qur’an (PAI) &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp" onClick={(e) => handleLink(e, 'articleCooperativeIfp', '/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp')} className="text-blue-700 hover:underline">
                        Pembelajaran Kooperatif Menggunakan IFP &rarr;
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

export default ArticlePaiIfp;
