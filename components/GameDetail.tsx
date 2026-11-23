import React, { useEffect } from 'react';
import { GameConfig, GameConfigWithTags } from '../types';
import { AdSenseInArticle } from './AdSenseInArticle';
import { applySEOMetadata, HreflangEntry } from '../seo';

interface Batch1EducationalProfile {
  heading: string;
  overview: string;
  whatStudentsDo: string;
  learningAreas: string;
  audienceCoverage: string;
  classroomActivities: string;
  factualNote: string;
  relatedLinks: { href: string; label: string }[];
}

const BATCH1_EDUCATIONAL_PROFILES: Record<string, Batch1EducationalProfile> = {
  'mancing-kata': {
    heading: 'Cakupan Edukasi Lintas Mata Pelajaran & Penggunaan Kelas',
    overview:
      'Mancing Kata bukan hanya game kosakata Bahasa Indonesia. Aplikasi live menyediakan bank soal dan kata lintas mata pelajaran sehingga guru dapat memanfaatkannya untuk berbagai sesi tematik di papan interaktif (IFP) maupun perangkat siswa.',
    whatStudentsDo:
      'Siswa membaca petunjuk atau soal di layar, lalu mengarahkan kail virtual untuk menangkap huruf, kata, atau jawaban yang tepat sambil menghindari rintangan.',
    learningAreas:
      'Terverifikasi pada menu aplikasi: tema PAUD/TK, Pendidikan Pancasila, Bahasa Indonesia, Matematika dasar (Hitung Cepat), IPAS (Alam & Sosial), Seni & Budaya, PJOK, PAI & Budi Pekerti, Bahasa Inggris, serta kategori tambahan tingkat SMP (IPA, IPS, Informatika, Sejarah, Ekonomi).',
    audienceCoverage:
      'Menu aplikasi memuat TK & SD Kelas Rendah, SD Kelas 1–3 (Fase A), SD Kelas 4–6 (Fase B–C), hingga SMP, dengan mode Solo, Duel (2 Pemain), Trio, dan fitur input soal custom guru.',
    classroomActivities:
      'Cocok untuk kuis cepat lintas mapel, latihan kosakata bilingual, kompetisi tim 2–3 pemain di layar IFP, dan penyesuaian bank kata tematik sesuai materi harian guru.',
    factualNote:
      'Catatan verifikasi: Daftar mata pelajaran PAUD–SD dan mode Solo/Duel/Trio terverifikasi dari aplikasi live; rincian subtopik untuk kategori SMP dapat dicek langsung oleh guru saat memilih menu di dalam game.',
    relatedLinks: [
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game-edukasi-anak', label: 'Koleksi Game Anak PAUD & TK' },
      { href: '/game/helirescue', label: 'HELI RESCUE (Lintas Mapel & KKA)' },
      { href: '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas', label: 'Jurnal: Pembelajaran Kolaboratif IFP' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Jurnal: Asesmen Formatif IFP' },
    ],
  },
  helirescue: {
    heading: 'Cakupan Edukasi Lintas Mapel, KKA & Penggunaan Kelas',
    overview:
      'HELI RESCUE menggabungkan misi penyelamatan kebakaran hutan dengan bank kuis terstruktur lintas mata pelajaran—bukan sekadar game aksi umum.',
    whatStudentsDo:
      'Siswa mengendalikan helikopter penyelamat untuk menemukan titik api dan menyelesaikan tantangan soal bertipe identifikasi, perhitungan, urutan (sequence), dan multi-target.',
    learningAreas:
      'Terverifikasi dari bank soal aplikasi live (13 mata pelajaran): Matematika, Bahasa Indonesia, Pendidikan Pancasila, PJOK, Seni Budaya, IPA, IPS, IPAS, Biologi, Fisika, Bahasa Inggris, Informatika, serta Koding dan Kecerdasan Artifisial (KKA) seperti topik berpikir komputasional.',
    audienceCoverage:
      'Terverifikasi untuk jenjang SD (Fase B & C), SMP (Fase D), dan SMA (Fase E & F) sesuai pilihan mata pelajaran dan fase di dalam game.',
    classroomActivities:
      'Cocok untuk review lintas mata pelajaran, latihan pemahaman konsep bergiliran di depan kelas dengan IFP, maupun penguatan materi Informatika dan KKA di kelas SMP–SMA.',
    factualNote:
      'Catatan verifikasi: Cakupan 13 mata pelajaran dan Fase B–F bersumber langsung dari konfigurasi bank soal aplikasi live; guru tetap perlu memilih fase dan mapel yang sesuai dengan tujuan pembelajaran kelas.',
    relatedLinks: [
      { href: '/game-logika', label: 'Koleksi Game Logika & Berpikir Komputasional' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game/mancing-kata', label: 'Mancing Kata (Lintas Mata Pelajaran)' },
      { href: '/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas', label: 'Jurnal: Literasi Digital di IFP' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Jurnal: Asesmen Formatif IFP' },
    ],
  },
  'ai-basketball': {
    heading: 'Relevansi PJOK, Interaksi Sensor Kamera & Penggunaan Kelas',
    overview:
      'AI Basketball (Basket Motion Arena) menghadirkan aktivitas melempar bola basket virtual yang memadukan interaksi kamera berbasis kecerdasan buatan dengan latihan gerak aktif di ruang kelas.',
    whatStudentsDo:
      'Siswa menggerakkan tangan atau tubuh di depan kamera perangkat untuk mengarahkan dan melempar bola basket ke dalam ring, atau memakai kontrol sentuh/pointer alternatif bila kamera tidak digunakan.',
    learningAreas:
      'Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK) untuk koordinasi gerak dan motorik kasar, sekaligus pengenalan interaksi computer vision (deteksi pose/tangan MediaPipe) pada literasi AI.',
    audienceCoverage:
      'Direkomendasikan untuk siswa SD, SMP, dan SMA pada katalog portal, dengan pilihan mode Latihan, Challenge, dan VS.',
    classroomActivities:
      'Cocok untuk pemanasan aktif PJOK di dalam ruangan, active brain break di depan IFP berkamera, dan diskusi singkat tentang cara kamera AI mengenali gerak tangan.',
    factualNote:
      'Catatan verifikasi: Akses kamera (getUserMedia), deteksi pose/tangan MediaPipe, dan dukungan sentuh terverifikasi pada aplikasi live. Akurasi deteksi dipengaruhi pencahayaan serta posisi perangkat; game ini bukan alat ukur atau asesmen kebugaran fisik formal.',
    relatedLinks: [
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game-logika', label: 'Koleksi Game Logika & Pengenalan AI' },
      { href: '/game/traditional', label: 'Lomba 17an (Tema Budaya & Kelas)' },
      { href: '/game/doodle', label: 'Doodle AI (Pengenalan AI Gambar)' },
      { href: '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas', label: 'Jurnal: Aktivitas Interaktif di IFP' },
    ],
  },
  traditional: {
    heading: 'Konteks Budaya Indonesia & Aktivitas Kelas Virtual',
    overview:
      'Lomba 17an menghadirkan nuansa perayaan kemerdekaan dan budaya lokal Indonesia dalam format permainan digital interaktif untuk menghidupkan suasana belajar di kelas.',
    whatStudentsDo:
      'Siswa mengikuti rangkaian tantangan bertema perayaan 17 Agustus melalui antarmuka web interaktif secara bergiliran maupun berkelompok di depan papan interaktif (IFP).',
    learningAreas:
      'Pengenalan budaya lokal Indonesia, nilai kebersamaan, sportivitas, kerja sama kelompok, dan aktivitas ice breaking kelas.',
    audienceCoverage:
      'Direkomendasikan untuk siswa SD, SMP, dan SMA berdasarkan katalog portal Papan Interaktif.',
    classroomActivities:
      'Cocok untuk kegiatan tematik bulan Agustus, jeda penyegaran (ice breaking) di kelas, diskusi nilai sportivitas, serta aktivitas kebersamaan di layar IFP.',
    factualNote:
      'Catatan transparansi: Koleksi permainan disajikan melalui aplikasi eksternal tersemat sehingga daftar mini-game spesifik di dalamnya tidak dirinci satu per satu pada halaman ini. Permainan virtual ini berfungsi sebagai pengenalan budaya dan aktivitas kelas di layar, bukan pengganti lomba atau olahraga fisik lapangan.',
    relatedLinks: [
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/game/gebuk-guling-matematika', label: 'GEBUK GULING MATEMATIKA (Tema 17 Agustus)' },
      { href: '/game/ai-basketball', label: 'AI Basketball (Aktivitas Gerak PJOK)' },
      { href: '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas', label: 'Jurnal: Pembelajaran Kolaboratif IFP' },
      { href: '/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp', label: 'Jurnal: Pembelajaran Sosial Emosional IFP' },
    ],
  },
  tanzib: {
    heading: 'Konteks Pembelajaran Pendidikan Agama Islam (PAI) di Kelas',
    overview:
      'Tanzib (Timbangan Ajaib Tanzib) adalah media pembelajaran Pendidikan Agama Islam interaktif di katalog portal yang memadukan latihan logika dengan pengetahuan dasar agama Islam untuk mendukung sesi belajar di layar sentuh IFP maupun perangkat kelas.',
    whatStudentsDo:
      'Siswa menjawab tantangan pengetahuan dasar agama Islam dan penalaran logika pada mekanik Timbangan Ajaib Tanzib secara bergiliran di papan interaktif atau perangkat belajar.',
    learningAreas:
      'Pendidikan Agama Islam (PAI) dasar, penalaran logis, serta penguatan pemahaman konsep agama secara interaktif.',
    audienceCoverage:
      'Direkomendasikan untuk siswa SD, SMP, dan SMA berdasarkan katalog portal Papan Interaktif.',
    classroomActivities:
      'Dapat digunakan guru PAI sebagai aktivitas pemanasan 5–10 menit, review materi secara bergiliran di papan interaktif, atau pemantik diskusi kelompok di mana siswa menjelaskan alasan pilihan jawabannya.',
    factualNote:
      'Catatan transparansi: Informasi cakupan ini merujuk pada metadata resmi katalog portal (status bukti katalog). Daftar soal atau bab fikih/akidah spesifik di dalam aplikasi tersemat perlu ditinjau guru terlebih dahulu agar selaras dengan materi pertemuan dan capaian belajar kelas.',
    relatedLinks: [
      { href: '/game/celestial-weaver', label: 'Celestial Weaver — Susun Ayat Al-Qur’an (PAI)' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Lintas Mapel termasuk PAI & Budi Pekerti' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas', label: 'Jurnal: Aktivitas Pembelajaran Interaktif IFP' },
      { href: '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas', label: 'Jurnal: Asesmen Formatif Menggunakan IFP' },
    ],
  },
  'celestial-weaver': {
    heading: 'Konteks Pembelajaran Pendidikan Agama Islam (PAI) & Al-Qur’an di Kelas',
    overview:
      'Celestial Weaver adalah permainan edukasi Pendidikan Agama Islam di katalog portal yang mengajak siswa menyusun dan merangkai potongan ayat suci Al-Qur’an secara interaktif untuk membantu penguatan hafalan dan ketelitian membaca.',
    whatStudentsDo:
      'Siswa menyusun dan merangkai potongan ayat suci Al-Qur’an ke dalam urutan yang tepat melalui antarmuka interaktif di layar sentuh IFP maupun perangkat kelas.',
    learningAreas:
      'Pendidikan Agama Islam (PAI), pengenalan urutan serta hafalan ayat suci Al-Qur’an, dan ketelitian membaca teks Arab.',
    audienceCoverage:
      'Direkomendasikan untuk siswa SD, SMP, dan SMA berdasarkan katalog portal Papan Interaktif.',
    classroomActivities:
      'Cocok dipakai pada sesi murojaah bersama di papan interaktif (IFP): perwakilan siswa maju merangkai potongan ayat, sementara kelas membacakan bersama dan guru membimbing pelafalan serta makhraj secara langsung.',
    factualNote:
      'Catatan transparansi: Deskripsi ini merujuk pada metadata resmi katalog portal (status bukti katalog). Aplikasi permainan ini berfungsi sebagai media pendamping latihan urutan ayat—bukan pengganti bimbingan talaqqi, tajwid, atau evaluasi hafalan langsung oleh guru PAI.',
    relatedLinks: [
      { href: '/game/tanzib', label: 'Tanzib — Logika & Pengetahuan Dasar PAI' },
      { href: '/game/mancing-kata', label: 'Mancing Kata — Lintas Mapel termasuk PAI & Budi Pekerti' },
      { href: '/game-edukasi-ifp', label: 'Koleksi Game Edukasi IFP' },
      { href: '/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp', label: 'Jurnal: Pembelajaran Kooperatif di IFP' },
      { href: '/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas', label: 'Jurnal: Aktivitas Pembelajaran Interaktif IFP' },
    ],
  },
};

interface GameDetailProps {
  locale?: "id" | "en";
  game: GameConfigWithTags;
  onBack: () => void;
}

const GameDetail: React.FC<GameDetailProps> = ({ game, onBack, locale = "id" }) => {

  const isEn = locale === 'en' && game.en;
  const displayTitle = isEn ? game.en.title : game.title;
  const displaySubtitle = isEn ? game.en.subtitle : game.subtitle;
  const displayDescription = isEn ? game.en.description : game.description;
  const displaySubject = isEn ? game.en.subject : game.subject;
  const displayAudience = isEn ? game.en.audience : game.audience;
  const displayLearningFocus = isEn ? game.en.learningFocus : game.learningFocus;
  const displayHowToPlay = isEn ? game.en.howToPlay : game.howToPlay;
  const displayEducationalBenefits = isEn ? game.en.educationalBenefits : game.educationalBenefits;

  useEffect(() => {
    const docTitle = isEn 
      ? `${displayTitle} | Interactive Educational Games | Papan Interaktif`
      : (game.seoTitle || `${game.title} | Game Edukasi Interaktif | Papan Interaktif`);

    const descriptionText = game.seoDescription || displayDescription || `${game.title} - ${game.subtitle}. Game edukasi di Papan Interaktif.`;

    const baseUrl = 'https://papaninteraktif.com';
    const encodedId = encodeURIComponent(game.id);
    const idPath = `/game/${encodedId}`;
    const enPath = `/en/game/${encodedId}`;
    const currentUrl = baseUrl + (locale === 'en' ? enPath : idPath);

    const isBilingualIfp = ['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional', 'sciencelink'].includes(game.id);

    const hreflangs: HreflangEntry[] = isBilingualIfp ? [
      { lang: 'id', href: baseUrl + idPath },
      { lang: 'en', href: baseUrl + enPath },
      { lang: 'x-default', href: baseUrl + idPath }
    ] : [];

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["VideoGame", "EducationalApplication"],
          "@id": currentUrl,
          "name": game.title,
          "description": descriptionText,
          "applicationCategory": "EducationalGame",
          "operatingSystem": "Any",
          "educationalUse": game.learningFocus || "Interactive Learning",
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": game.audience || "student"
          },
          "url": currentUrl,
          "image": game.image || undefined
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Papan Interaktif",
              "item": "https://papaninteraktif.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Game Edukasi",
              "item": "https://papaninteraktif.com/#game-edukasi"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": game.title,
              "item": currentUrl
            }
          ]
        }
      ]
    };

    applySEOMetadata({
      lang: locale,
      title: docTitle,
      description: descriptionText,
      canonical: currentUrl,
      hreflangs: hreflangs,
      openGraph: {
        title: docTitle,
        description: descriptionText,
        url: currentUrl,
        image: game.image || undefined
      },
      twitter: {
        card: 'summary_large_image',
        title: docTitle,
        description: descriptionText,
        image: game.image || undefined
      },
      jsonLd: schemaData
    });
  }, [game, locale, isEn, displayTitle, displayDescription]);

  // 3. ELIMINATE FALLBACK BOILERPLATE
  return (
    <article className="max-w-4xl mx-auto p-4 md:p-8 animate-fadeIn">
      {/* 10. SEMANTIC BACK LINK */}
      <a 
        href="/"
        onClick={(e) => { e.preventDefault(); onBack(); }}
        className="mb-6 flex items-center gap-2 text-[#0C1A69] font-bold hover:underline"
        aria-label="Kembali ke Beranda"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Kembali ke Papan Interaktif
      </a>

      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-lg border-2 border-white">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 flex justify-center">
            <div 
              className="w-full aspect-square max-w-[240px] rounded-3xl p-4 shadow-inner flex items-center justify-center border-4"
              style={{ background: game.bgColor, borderColor: 'rgba(255,255,255,0.5)' }}
            >
              {game.image && (
                <img 
                  src={game.image} 
                  alt={game.id === 'gebuk-guling-matematika' ? 'Maskot resmi GEBUK GULING MATEMATIKA - Game Duel Berhitung SD 2 Pemain' : `Ikon game ${game.title}`} 
                  className={`w-full h-full ${(game.id === 'color-link-junior' || game.id === 'kata-gol' || game.id === 'junior-race-academy' || game.id === 'gebuk-guling-matematika') ? 'object-contain p-2' : 'object-cover'} rounded-xl drop-shadow-md`}
                />
              )}
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-[#0C1A69] mb-2">{displayTitle}</h1>
              <p className="text-lg md:text-xl font-bold text-[#0C1A69]/70">{displaySubtitle}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              {game.educationLevel === 'paud' && (
                <a href="/game-edukasi-anak" onClick={(e) => { e.preventDefault(); /* Need navigateTo but we only have onBack here. Use window.history */ window.history.pushState({}, '', '/game-edukasi-anak'); window.dispatchEvent(new Event('popstate')); }} className="px-3 py-1 bg-[#FFEBEE] text-[#B71C1C] text-xs font-black uppercase rounded-full tracking-wider hover:bg-[#ffcdd2] transition-colors cursor-pointer border-2 border-transparent hover:border-[#ef9a9a]">
                  Anak PAUD & TK
                </a>
              )}
              {game.categoryKeys?.includes('logic') && (
                <a href="/game-logika" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/game-logika'); window.dispatchEvent(new Event('popstate')); }} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-black uppercase rounded-full tracking-wider hover:bg-indigo-200 transition-colors cursor-pointer border-2 border-transparent hover:border-indigo-300">
                  Logika
                </a>
              )}
              {['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional', 'color-link-junior'].includes(game.id) && (
                <a href={isEn ? "/en/educational-games-for-interactive-flat-panels" : "/game-edukasi-ifp"} onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', isEn ? '/en/educational-games-for-interactive-flat-panels' : '/game-edukasi-ifp'); window.dispatchEvent(new Event('popstate')); }} className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-black uppercase rounded-full tracking-wider hover:bg-teal-200 transition-colors cursor-pointer border-2 border-transparent hover:border-teal-300">
                  Game untuk IFP
                </a>
              )}
              {game.tags?.map(tag => {
                if (tag === '🧠 Logika' || tag === '🎯 Ice Breaking') return null; // Already handled
                return (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold uppercase rounded-full tracking-wider">
                    {tag}
                  </span>
                )
              })}
            </div>

            {/* 4. GAME DETAIL CONTENT STRUCTURE */}
            {game.description && (
              <section className="mt-4">
                <p className="text-[#0C1A69]/80 leading-relaxed font-medium">
                  {game.description}
                </p>
              </section>
            )}

            {(game.audience || game.learningFocus || game.subject) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {game.audience && (
                  <section className="bg-white/50 p-4 rounded-2xl border border-white">
                    <h2 className="text-sm font-black text-[#0C1A69] uppercase tracking-widest mb-1">Target Audiens</h2>
                    <p className="text-sm text-[#0C1A69]/80 font-bold">{displayAudience}</p>
                  </section>
                )}
                
                {game.subject && (
                  <section className="bg-white/50 p-4 rounded-2xl border border-white">
                    <h2 className="text-sm font-black text-[#0C1A69] uppercase tracking-widest mb-1">Konteks Edukasi</h2>
                    <p className="text-sm text-[#0C1A69]/80 font-bold">{displaySubject}</p>
                  </section>
                )}

                {game.learningFocus && (
                  <section className="bg-white/50 p-4 rounded-2xl border border-white sm:col-span-2">
                    <h2 className="text-sm font-black text-[#0C1A69] uppercase tracking-widest mb-1">Fokus Belajar</h2>
                    <p className="text-sm text-[#0C1A69]/80 font-bold">{displayLearningFocus}</p>
                  </section>
                )}
              </div>
            )}

            {displayHowToPlay && displayHowToPlay.length > 0 && (
              <section className="mt-6 bg-white/50 p-6 rounded-3xl border-2 border-white shadow-sm">
                <h2 className="text-lg font-black text-[#0C1A69] uppercase tracking-widest mb-4">
                  {isEn ? "How to Play" : "Cara Bermain"}
                </h2>
                <ol className="list-decimal list-outside ml-5 space-y-2 text-[#0C1A69]/80 font-medium">
                  {displayHowToPlay.map((step, index) => (
                    <li key={index} className="pl-1 leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {displayEducationalBenefits && displayEducationalBenefits.length > 0 && (
              <section className="mt-6 bg-white/50 p-6 rounded-3xl border-2 border-white shadow-sm">
                <h2 className="text-lg font-black text-[#0C1A69] uppercase tracking-widest mb-4">
                  {isEn ? "Learning Benefits" : "Manfaat Pembelajaran"}
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-[#0C1A69]/80 font-medium">
                  {displayEducationalBenefits.map((benefit, index) => (
                    <li key={index} className="pl-1 leading-relaxed">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* IFP CONTEXTUAL SEO SECTION */}
            {['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional', 'sciencelink', 'color-link-junior'].includes(game.id) && (
              <section className="mt-6 bg-teal-50 p-6 rounded-3xl border-2 border-teal-100 shadow-sm">
                <h2 className="text-lg font-black text-teal-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="12" x2="12" y1="16" y2="20"/><line x1="8" x2="16" y1="20" y2="20"/></svg>
                  {isEn ? "Interactive Classroom Ready" : "Penggunaan di Kelas Interaktif"}
                </h2>
                <p className="text-teal-800/90 leading-relaxed font-medium text-sm md:text-base">
                  {isEn 
                    ? <>Because it supports direct touch and multi-touch interactions, this game is highly suitable for classroom activities using large touchscreens. Teachers can confidently integrate it as one of their primary <a href="/en/educational-games-for-interactive-flat-panels" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/en/educational-games-for-interactive-flat-panels'); window.dispatchEvent(new Event('popstate')); }} className="font-bold underline hover:text-teal-600">IFP educational games</a> or smartboard educational games, allowing students to collaborate and learn interactively in front of the class.</>
                    : <>Karena mendukung interaksi multi-touch dan layar sentuh, game ini sangat cocok digunakan untuk aktivitas kelas. Guru dapat menggunakannya sebagai salah satu pilihan utama dari <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/game-edukasi-ifp'); window.dispatchEvent(new Event('popstate')); }} className="font-bold underline hover:text-teal-600">Game Edukasi IFP</a> (Interactive Flat Panel) maupun smartboard, memungkinkan siswa untuk berkolaborasi dan belajar secara interaktif langsung di depan kelas.</>}
                </p>
              </section>
            )}

            {/* VERIFIED BATCH 1 EDUCATIONAL COVERAGE & CONTEXTUAL LINKS (ID ROUTES ONLY) */}
            {locale === 'id' && BATCH1_EDUCATIONAL_PROFILES[game.id] && (() => {
              const profile = BATCH1_EDUCATIONAL_PROFILES[game.id];
              return (
                <section className="mt-6 bg-blue-50/80 p-6 rounded-3xl border-2 border-blue-100 shadow-sm space-y-4">
                  <h2 className="text-lg font-black text-[#0C1A69] uppercase tracking-wider">
                    {profile.heading}
                  </h2>
                  <p className="text-[#0C1A69]/85 leading-relaxed font-medium text-sm md:text-base">
                    {profile.overview}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/80 p-4 rounded-2xl border border-blue-100">
                      <h3 className="text-xs font-black text-[#0C1A69] uppercase tracking-widest mb-1">
                        Aktivitas Siswa
                      </h3>
                      <p className="text-[#0C1A69]/80 font-medium leading-relaxed">{profile.whatStudentsDo}</p>
                    </div>
                    <div className="bg-white/80 p-4 rounded-2xl border border-blue-100">
                      <h3 className="text-xs font-black text-[#0C1A69] uppercase tracking-widest mb-1">
                        Cakupan Mata Pelajaran &amp; Bidang
                      </h3>
                      <p className="text-[#0C1A69]/80 font-medium leading-relaxed">{profile.learningAreas}</p>
                    </div>
                    <div className="bg-white/80 p-4 rounded-2xl border border-blue-100">
                      <h3 className="text-xs font-black text-[#0C1A69] uppercase tracking-widest mb-1">
                        Audiens, Jenjang &amp; Mode
                      </h3>
                      <p className="text-[#0C1A69]/80 font-medium leading-relaxed">{profile.audienceCoverage}</p>
                    </div>
                    <div className="bg-white/80 p-4 rounded-2xl border border-blue-100">
                      <h3 className="text-xs font-black text-[#0C1A69] uppercase tracking-widest mb-1">
                        Contoh Penggunaan di Kelas
                      </h3>
                      <p className="text-[#0C1A69]/80 font-medium leading-relaxed">{profile.classroomActivities}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#0C1A69]/75 font-semibold leading-relaxed bg-white/60 px-4 py-3 rounded-xl border border-blue-100/80">
                    {profile.factualNote}
                  </p>
                  <nav aria-label="Tautan Edukasi Terkait" className="pt-2 border-t border-blue-100 flex flex-wrap gap-2">
                    {profile.relatedLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                          e.preventDefault();
                          window.history.pushState({}, '', link.href);
                          window.dispatchEvent(new Event('popstate'));
                        }}
                        className="inline-flex items-center rounded-xl bg-white px-3.5 py-2 text-xs md:text-sm font-bold text-[#0C1A69] border border-blue-200 hover:bg-blue-100/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1A69]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </section>
              );
            })()}

            {/* PROMOTIONAL HASHTAGS SECTION */}
            {game.hashtags && game.hashtags.length > 0 && (
              <section className="mt-6 bg-amber-50/80 p-5 rounded-2xl border border-amber-200/80">
                <h2 className="text-xs font-black text-amber-900 uppercase tracking-widest mb-2">
                  {isEn ? "Promotional Tags" : "Hashtag Promosi & Komunitas"}
                </h2>
                <div className="flex flex-wrap gap-2 text-xs font-bold text-amber-800">
                  {game.hashtags.map((tag, idx) => (
                    <span key={idx} className="bg-amber-100/90 px-2.5 py-1 rounded-md border border-amber-300/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}

            <AdSenseInArticle />

            <div className="mt-8">
              {game.url && !game.isComingSoon ? (
                <a 
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto text-center px-8 py-4 bg-[#0C1A69] text-white rounded-2xl font-black uppercase tracking-widest shadow-lg hover:scale-105 hover:bg-blue-900 transition-all"
                >
                  Main Sekarang ➔
                </a>
              ) : (
                <span className="inline-block w-full sm:w-auto text-center px-8 py-4 bg-gray-400 text-white rounded-2xl font-black uppercase tracking-widest shadow-inner cursor-not-allowed">
                  Segera Hadir
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GameDetail;
