import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';
import { applySEOMetadata } from '../seo';

interface ArticlePjokIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticlePjokIfp: React.FC<ArticlePjokIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    applySEOMetadata({
      lang: 'id',
      title: 'Game PJOK Interaktif di IFP untuk Kelas | Jurnal Guru',
      description: 'Panduan pemanasan aktif dan teori PJOK di IFP lewat AI Basketball, Lomba 17an, HELI RESCUE, Mancing Kata, dan Basket Angka Junior tanpa mengganti olahraga.',
      canonical: 'https://papaninteraktif.com/jurnal-guru/game-pjok-interaktif-menggunakan-ifp',
      openGraph: {
        title: 'Game PJOK Interaktif di IFP untuk Kelas | Jurnal Guru',
        description: 'Panduan pemanasan aktif dan teori PJOK di IFP lewat AI Basketball, Lomba 17an, HELI RESCUE, Mancing Kata, dan Basket Angka Junior tanpa mengganti olahraga.',
        type: 'article',
        url: 'https://papaninteraktif.com/jurnal-guru/game-pjok-interaktif-menggunakan-ifp'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Game PJOK Interaktif di IFP untuk Kelas | Jurnal Guru',
        description: 'Panduan pemanasan aktif dan teori PJOK di IFP lewat AI Basketball, Lomba 17an, HELI RESCUE, Mancing Kata, dan Basket Angka Junior tanpa mengganti olahraga.'
      },
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Game PJOK Interaktif Menggunakan IFP untuk Aktivitas Kelas",
          "description": "Panduan pemanasan aktif dan teori PJOK di IFP lewat AI Basketball, Lomba 17an, HELI RESCUE, Mancing Kata, dan Basket Angka Junior tanpa mengganti olahraga.",
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
            "@id": "https://papaninteraktif.com/jurnal-guru/game-pjok-interaktif-menggunakan-ifp"
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
              "name": "Game PJOK Interaktif Menggunakan IFP untuk Aktivitas Kelas",
              "item": "https://papaninteraktif.com/jurnal-guru/game-pjok-interaktif-menggunakan-ifp"
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
              <li aria-current="page" className="text-[#0C1A69]">PJOK Interaktif IFP</li>
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
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  PJOK &amp; Aktivitas Gerak
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-5 mb-4 leading-tight">
                  Game PJOK Interaktif Menggunakan IFP untuk Aktivitas Kelas
                </h1>
                <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-600 font-semibold leading-relaxed border-l-4 border-orange-400 pl-4">
                  Saat cuaca hujan, sesi teori PJOK di dalam ruangan, atau jeda aktif di tengah jam belajar, Interactive Flat Panel (IFP) membantu guru menjaga antusiasme gerak dan pemahaman konsep olahraga secara aman di dalam kelas.
                </p>

                <p>
                  Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK) pada dasarnya bertumpu pada pengalaman gerak nyata di lapangan atau ruang olahraga. Meski begitu, guru sering menghadapi jam teori PJOK di kelas maupun situasi ketika lapangan tidak dapat digunakan. Pada momen tersebut, <strong>game PJOK interaktif di IFP</strong> dapat menjadi jembatan praktis: menghadirkan pemanasan gerak ringan, review istilah olahraga dan aturan permainan, serta pembiasaan sportivitas secara kolaboratif.
                </p>

                <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 not-prose">
                  <p className="text-sm font-bold text-amber-950 leading-relaxed m-0">
                    Catatan Batasan Pedagogis: Permainan layar interaktif (termasuk yang menggunakan deteksi gerak kamera) <strong>bukan pengganti</strong> latihan fisik lapangan dan <strong>bukan alat ukur kebugaran jasmani atau evaluasi fisiologis</strong>. Gunakan game di IFP sebagai pelengkap sesi teori, peregangan aktif, dan penguatan aturan permainan.
                  </p>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Konteks Pembelajaran &amp; Sasaran Pengguna</h2>
                <p>
                  Panduan ini relevan bagi guru PJOK dan guru kelas <strong>SD, SMP, hingga SMA</strong> (serta pengenalan tema gerak sederhana untuk PAUD/SD awal) pada dua skenario utama: (1) sesi teori PJOK di ruang kelas, dan (2) peregangan atau <em>brain break</em> aktif berdurasi singkat ketika siswa perlu menyegarkan fokus.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Rekomendasi Game Terverifikasi untuk Pembelajaran PJOK di IFP</h2>
                <p>
                  Papan Interaktif memiliki beberapa game dengan fungsi yang berbeda-beda untuk mendukung PJOK — mulai dari interaksi gerak kamera/sentuh hingga kuis materi PJOK lintas jenjang:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <a href="/game/ai-basketball" onClick={(e) => handleLink(e, 'gameDetail', '/game/ai-basketball')} className="text-blue-700 hover:underline font-bold">AI Basketball (Aktivitas Gerak Kamera &amp; Sentuh)</a>:
                    Menyediakan mode Latihan, Challenge, dan VS dengan dukungan deteksi gerak tangan/tubuh berbasis kamera (MediaPipe) serta alternatif kontrol sentuh. Sangat baik untuk pemanasan koordinasi tangan-mata di depan IFP berkamera. Kepekaan kamera bergantung pada pencahayaan ruang dan jarak berdiri siswa, sehingga kontrol sentuh selalu siap dipakai sebagai cadangan.
                  </li>
                  <li>
                    <a href="/game/traditional" onClick={(e) => handleLink(e, 'gameDetail', '/game/traditional')} className="text-blue-700 hover:underline font-bold">Lomba 17an (Permainan Virtual Bertema Lomba Tradisional)</a>:
                    Menghadirkan nuansa kebersamaan dan sportivitas bertema perayaan 17 Agustus melalui aplikasi web tersemat. Cocok untuk membahas nilai kerja sama tim, aturan main adil, dan pengenalan permainan tradisional Indonesia di layar sebelum praktik fisik di halaman sekolah.
                  </li>
                  <li>
                    <a href="/game/helirescue" onClick={(e) => handleLink(e, 'gameDetail', '/game/helirescue')} className="text-blue-700 hover:underline font-bold">HELI RESCUE (Bank Soal Terstruktur termasuk Materi PJOK)</a>:
                    Memiliki pilihan bank soal PJOK untuk sesi review teori di kelas — misalnya pengenalan istilah olahraga, keselamatan beraktivitas, atau aturan dasar permainan bola — yang dikemas dalam misi penyelamatan kooperatif.
                  </li>
                  <li>
                    <a href="/game/mancing-kata" onClick={(e) => handleLink(e, 'gameDetail', '/game/mancing-kata')} className="text-blue-700 hover:underline font-bold">Mancing Kata (Kategori PJOK &amp; Soal Custom Guru)</a>:
                    Memuat pilihan kategori materi PJOK dan mendukung input soal buatan guru sendiri dalam mode Solo, Duel (2 pemain), maupun Trio. Efektif untuk kuis cepat istilah gerak lokomotor, non-lokomotor, atau pola hidup sehat.
                  </li>
                  <li>
                    <a href="/game/basket-angka-junior" onClick={(e) => handleLink(e, 'gameDetail', '/game/basket-angka-junior')} className="text-blue-700 hover:underline font-bold">Basket Angka Junior (Tema Basket untuk PAUD–SD Kelas 3)</a>:
                    Memadukan tema olahraga basket dengan latihan berhitung dasar bagi kelas rendah; berguna untuk mengaitkan kosakata skor dan tema olahraga secara ringan pada jam tematik.
                  </li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Aktivitas Praktis PJOK di Ruang Kelas Ber-IFP</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                  <div className="p-5 bg-orange-50/70 rounded-2xl border border-orange-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">1. Estafet Lempar Virtual + Peregangan Nyata</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Dua siswa bergiliran mencoba 1 menit mode Challenge di AI Basketball, sementara siswa lain di dekat bangku mengikuti gerakan peregangan lengan dan bahu yang dipandu guru agar seluruh kelas ikut bergerak aman.
                    </p>
                  </div>
                  <div className="p-5 bg-teal-50/70 rounded-2xl border border-teal-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">2. Kuis Aturan Permainan &amp; Kesehatan</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Gunakan HELI RESCUE atau Mancing Kata kategori PJOK untuk mengulas aturan keselamatan pemanasan, jenis gerak dasar, dan kebiasaan hidup bersih sebelum siswa turun ke lapangan pada pertemuan berikutnya.
                    </p>
                  </div>
                  <div className="p-5 bg-blue-50/70 rounded-2xl border border-blue-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">3. Diskusi Sportivitas dari Lomba 17an</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Mainkan satu ronde Lomba 17an secara berkelompok, lalu ajak siswa merumuskan tiga contoh sikap sportif saat menang atau kalah yang wajib diterapkan ketika lomba fisik dilakukan di lapangan sekolah.
                    </p>
                  </div>
                  <div className="p-5 bg-purple-50/70 rounded-2xl border border-purple-200">
                    <h3 className="font-black text-[#0C1A69] text-base mb-2">4. Bank Istilah PJOK Buatan Guru</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Manfaatkan fitur soal custom di Mancing Kata untuk memasukkan daftar istilah spesifik bab hari itu (misalnya passing, dribbling, pendinginan, atau gizi seimbang) sesuai tingkat kelas.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Contoh Alur Sesi Teori PJOK di Kelas (40 Menit)</h2>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Pemanasan Aman di Tempat (5–7 menit):</strong> Pastikan area depan IFP bebas dari kursi, kabel, dan tas. Lakukan peregangan dinamis ringan seluruh kelas, diikuti 2–3 menit giliran singkat <a href="/game/ai-basketball" onClick={(e) => handleLink(e, 'gameDetail', '/game/ai-basketball')} className="text-blue-700 hover:underline font-bold">AI Basketball</a>.
                  </li>
                  <li>
                    <strong>Penguatan Konsep PJOK (20–23 menit):</strong> Guru membahas materi inti pertemuan (misalnya teknik dasar permainan bola atau kebersihan diri), lalu menguji pemahaman melalui 1–2 ronde <a href="/game/helirescue" onClick={(e) => handleLink(e, 'gameDetail', '/game/helirescue')} className="text-blue-700 hover:underline font-bold">HELI RESCUE</a> atau <a href="/game/mancing-kata" onClick={(e) => handleLink(e, 'gameDetail', '/game/mancing-kata')} className="text-blue-700 hover:underline font-bold">Mancing Kata</a> secara berkelompok.
                  </li>
                  <li>
                    <strong>Pendinginan &amp; Koneksi Lapangan (8–10 menit):</strong> Ajak siswa mengatur napas bersama dan menyebutkan satu hal keselamatan atau teknik yang akan mereka praktikkan saat pertemuan praktik lapangan berikutnya.
                  </li>
                </ol>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Observasi Asesmen Formatif Guru PJOK</h2>
                <p>
                  Penilaian PJOK tidak ditentukan oleh skor layar. Selama sesi kelas menggunakan IFP, guru dapat mencatat observasi formatif atas aspek kognitif dan afektif:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Pemahaman aturan dan konsep:</strong> ketepatan penjelasan siswa saat membahas jawaban kuis PJOK, bukan sekadar kecepatan mengetuk layar.</li>
                  <li><strong>Kesadaran keselamatan ruang:</strong> kedisiplinan siswa menjaga jarak aman di depan papan dan menunggu giliran tanpa mendorong teman.</li>
                  <li><strong>Sikap sportivitas:</strong> cara siswa menyemangati tim dan menerima hasil giliran secara wajar saat bermain mode VS atau Duel.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Keselamatan Ruang, Aksesibilitas &amp; Alternatif Inklusif</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Alternatif tanpa kamera atau ruang sempit:</strong> jika IFP tidak memiliki kamera, cahaya kelas redup, atau ruang depan papan sempit, beralihlah ke mode kontrol sentuh di AI Basketball agar aktivitas tetap berjalan aman.</li>
                  <li><strong>Partisipasi inklusif bagi keterbatasan mobilitas:</strong> siswa yang tidak dapat berdiri lama atau memiliki hambatan gerak dapat berpartisipasi lewat mode sentuh dari posisi duduk, menjadi pengatur strategi tim, atau menjawab pertanyaan kuis di HELI RESCUE dan Mancing Kata.</li>
                  <li><strong>Keseimbangan gerak nyata:</strong> padukan maksimal 10–15 menit interaksi layar dengan peregangan di tempat atau praktik lapangan pada pertemuan berikutnya agar tujuan aktivitas fisik PJOK tetap terpenuhi.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Pertanyaan yang Sering Diajukan Guru (FAQ)</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Apakah AI Basketball bisa mengukur tingkat kebugaran atau kekuatan lemparan siswa?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Tidak. Deteksi kamera pada AI Basketball hanya membaca gerakan visual di layar untuk kebutuhan permainan interaktif. Pengukuran kebugaran jasmani tetap harus dilakukan melalui tes praktik fisik sesuai pedoman PJOK.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Apakah Lomba 17an menggantikan praktik permainan tradisional di halaman sekolah?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Tidak. Lomba 17an adalah media pengenalan budaya dan aktivitas kelas virtual di layar. Pengalaman lari, keseimbangan, dan kekompakan gerak tubuh tetap perlu dilakukan langsung di lapangan sekolah.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-[#0C1A69] text-base mb-1">Bagaimana mengatur giliran agar kelas tidak ricuh di depan IFP?</h3>
                    <p className="text-sm text-gray-700 m-0">
                      Tentukan garis batas berdiri menggunakan lakban lantai atau jarak satu meja di depan layar, batasi maksimal 1–2 siswa maju per giliran selama 45–60 detik, dan beri peran pengamat atau pendukung tertib bagi siswa lainnya.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50/70 rounded-2xl border border-blue-100 not-prose">
                  <h2 className="text-lg font-black text-[#0C1A69] mb-3">Tautan Terkait di Papan Interaktif</h2>
                  <ul className="space-y-2 text-sm font-semibold">
                    <li>
                      <a href="/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas" onClick={(e) => handleLink(e, 'articleIfpActivities', '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas')} className="text-blue-700 hover:underline">
                        Ide Aktivitas Pembelajaran Interaktif Menggunakan IFP di Kelas &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => handleLink(e, 'articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas')} className="text-blue-700 hover:underline">
                        Pembelajaran Kolaboratif Menggunakan IFP di Kelas &rarr;
                      </a>
                    </li>
                    <li>
                      <a href="/jurnal-guru/game-pendidikan-pancasila-interaktif-menggunakan-ifp" onClick={(e) => handleLink(e, 'articlePancasilaIfp', '/jurnal-guru/game-pendidikan-pancasila-interaktif-menggunakan-ifp')} className="text-blue-700 hover:underline">
                        Game Pendidikan Pancasila &amp; Budaya Indonesia Menggunakan IFP &rarr;
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

export default ArticlePjokIfp;
