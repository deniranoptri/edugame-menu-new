import React, { useState, useEffect } from 'react';

interface JurnalGuruProps {
  locale?: 'id' | 'en';
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const JurnalGuru: React.FC<JurnalGuruProps> = ({ locale, onBack, navigateTo }) => {
  const currentLang = locale || 'id';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pusat Pengetahuan Pedagogis IFP | Jurnal Guru Papan Interaktif";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Jurnal Guru: Pusat panduan pedagogis dan strategi pembelajaran interaktif menggunakan Interactive Flat Panel (IFP) untuk guru PAUD, SD, dan SMP."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + (currentLang === 'en' ? '/en/journal' : '/jurnal-guru'));
    
  }, []);


  const renderCardEn = (type: string, borderColor: string) => {
    const article = [
      {
        "url": "/en/journal/gamification-using-interactive-flat-panel",
        "type": "articleGamificationIfpEn",
        "title": "Gamification Using Interactive Flat Panel",
        "desc": "A comprehensive guide to gamifying your classroom using the Interactive Flat Panel."
      },
      {
        "url": "/en/journal/steam-learning-using-interactive-flat-panel",
        "type": "articleSteamIfpEn",
        "title": "STEAM Learning Using Interactive Flat Panel",
        "desc": "How to implement STEAM education effectively using interactive classroom technology."
      },
      {
        "url": "/en/journal/social-emotional-learning-using-interactive-flat-panel",
        "type": "articlePseIfpEn",
        "title": "Social-Emotional Learning Using Interactive Flat Panel",
        "desc": "Fostering empathy and self-awareness through interactive classroom activities."
      },
      {
        "url": "/en/journal/inquiry-based-learning-using-interactive-flat-panel",
        "type": "articleInkuiriIfpEn",
        "title": "Inquiry-Based Learning Using Interactive Flat Panel",
        "desc": "Guide students to question, investigate, and discover using digital tools."
      },
      {
        "url": "/en/journal/flipped-classroom-using-interactive-flat-panel",
        "type": "articleFlippedIfpEn",
        "title": "Flipped Classroom Using Interactive Flat Panel",
        "desc": "Transform your classroom into an active learning hub by flipping the instructional model."
      },
      {
        "url": "/en/journal/blended-learning-station-rotation-using-ifp",
        "type": "articleStationRotationIfpEn",
        "title": "Station Rotation Using Interactive Flat Panel",
        "desc": "Manage blended learning seamlessly with IFP as the primary collaborative station."
      },
      {
        "url": "/en/journal/visual-learning-using-interactive-flat-panel",
        "type": "articleVisualIfpEn",
        "title": "Visual Learning Using Interactive Flat Panel",
        "desc": "Leverage visual thinking strategies to clarify complex concepts on the big screen."
      },
      {
        "url": "/en/journal/formative-assessment-using-interactive-flat-panel",
        "type": "articleAssessmentIfpEn",
        "title": "Formative Assessment Using Interactive Flat Panel",
        "desc": "Interactive strategies for checking student understanding in real-time."
      },
      {
        "url": "/en/journal/collaborative-learning-using-interactive-flat-panel",
        "type": "articleCollaborativeIfpEn",
        "title": "Collaborative Learning Using Interactive Flat Panel",
        "desc": "Design group activities that maximize multi-touch and student interaction."
      },
      {
        "url": "/en/journal/classroom-management-using-interactive-flat-panel",
        "type": "articleClassroomManagementIfpEn",
        "title": "Classroom Management Using Interactive Flat Panel",
        "desc": "Maintain focus and direct attention using built-in interactive tools."
      },
      {
        "url": "/en/journal/differentiated-learning-using-interactive-flat-panel",
        "type": "articleDifferentiatedIfpEn",
        "title": "Differentiated Learning Using Interactive Flat Panel",
        "desc": "Meet diverse learning needs by providing varied interactive content."
      },
      {
        "url": "/en/journal/meaningful-learning-using-interactive-flat-panel",
        "type": "articleDeepLearningIfpEn",
        "title": "Meaningful Learning Using Interactive Flat Panel",
        "desc": "Turn simple screen interactions into profound cognitive experiences."
      },
      {
        "url": "/en/journal/project-based-learning-using-interactive-flat-panel",
        "type": "articlePjblIfpEn",
        "title": "Project-Based Learning Using Interactive Flat Panel",
        "desc": "Support long-term projects with a centralized digital collaboration board."
      },
      {
        "url": "/en/journal/diagnostic-assessment-using-interactive-flat-panel",
        "type": "articleDiagnosticIfpEn",
        "title": "Diagnostic Assessment Using Interactive Flat Panel",
        "desc": "Map out student prior knowledge visually before starting a new unit."
      },
      {
        "url": "/en/journal/reflective-learning-using-interactive-flat-panel",
        "type": "articleReflectiveLearningIfpEn",
        "title": "Reflective Learning Using Interactive Flat Panel",
        "desc": "End your lessons with powerful, interactive student reflections."
      },
      {
        "url": "/en/journal/authentic-assessment-using-interactive-flat-panel",
        "type": "articleAuthenticAssessmentIfpEn",
        "title": "Authentic Assessment Using Interactive Flat Panel",
        "desc": "Evaluate student performance through real-world problem-solving scenarios."
      },
      {
        "url": "/en/journal/problem-based-learning-using-interactive-flat-panel",
        "type": "articlePblIfpEn",
        "title": "Problem-Based Learning Using Interactive Flat Panel",
        "desc": "A practical guide to implementing PBL using an Interactive Flat Panel."
      },
      {
        "url": "/en/journal/cooperative-learning-using-interactive-flat-panel",
        "type": "articleCooperativeIfpEn",
        "title": "Cooperative Learning Using Interactive Flat Panel",
        "desc": "Build positive interdependence and individual accountability with interactive tools."
      }
    ].find(a => a.type === type);

    if (!article) return null;

    return (
      <div className={`bg-white rounded-2xl shadow-sm border-2 ${borderColor} p-6 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all group relative overflow-hidden`}>
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-${borderColor.replace('border-', '')} to-white opacity-10 rounded-bl-full`}></div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#0C1A69] mb-3 leading-tight group-hover:text-blue-700 transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {article.desc}
          </p>
        </div>
        <a 
          href={article.url}
          onClick={(e) => { e.preventDefault(); navigateTo(article.type, article.url); }}
          className="inline-flex items-center text-sm font-black text-gray-400 group-hover:text-[#0C1A69] transition-colors mt-auto"
        >
          READ GUIDE
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>
    );
  };

  const renderCard = (type: string, borderColor: string) => {
    const article = [
  {
    "url": "/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp",
    "type": "articleVisualIfp",
    "title": "Pembelajaran Berbasis Visual (Visual Thinking) Menggunakan IFP",
    "desc": "Panduan lengkap menjadikan IFP sebagai kanvas kognitif. Terapkan strategi Making Thinking Visible melalui anotasi gambar dan diagram interaktif."
  },
  {
    "url": "/jurnal-guru/blended-learning-station-rotation-menggunakan-ifp",
    "type": "articleStationRotationIfp",
    "title": "Blended Learning: Model Station Rotation Menggunakan IFP",
    "desc": "Solusi mengoptimalkan 1 layar interaktif untuk 30 siswa. Panduan membagi kelas menjadi zona rotasi fisik yang kolaboratif."
  },
  {
    "url": "/jurnal-guru/flipped-classroom-menggunakan-ifp",
    "type": "articleFlippedIfp",
    "title": "Model Flipped Classroom Menggunakan IFP",
    "desc": "Ubah kelas pasif menjadi ruang aplikasi aktif. Panduan memfasilitasi diskusi dan pemecahan masalah langsung di layar sentuh."
  },
  {
    "url": "/jurnal-guru/pembelajaran-berbasis-inkuiri-menggunakan-ifp",
    "type": "articleInkuiriIfp",
    "title": "Pembelajaran Berbasis Inkuiri Menggunakan IFP",
    "desc": "Panduan lengkap menjadikan IFP sebagai laboratorium visual interaktif untuk menyelidiki anomali, menguji hipotesis, dan menarik kesimpulan kolaboratif."
  },
  {
    "url": "/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp",
    "type": "articlePseIfp",
    "title": "Pembelajaran Sosial Emosional (PSE) Menggunakan IFP",
    "desc": "Panduan mengelola empati, kolaborasi, dan kesadaran diri siswa melalui aktivitas interaktif visual di ruang kelas."
  },
  {
    "url": "/jurnal-guru/pembelajaran-steam-menggunakan-ifp",
    "type": "articleSteamIfp",
    "title": "Pembelajaran STEAM Menggunakan IFP",
    "desc": "Panduan mengintegrasikan Sains, Teknologi, Teknik, Seni, dan Matematika dalam proyek pemecahan masalah interaktif."
  },
  {
    "url": "/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp",
    "type": "articleGamificationIfp",
    "title": "Gamifikasi Pembelajaran Menggunakan IFP",
    "desc": "Panduan menerapkan elemen game seperti poin, badge, dan papan peringkat ke dalam aktivitas belajar menggunakan layar interaktif."
  },
  {
    "url": "/jurnal-guru/pembelajaran-ips-interaktif-menggunakan-ifp",
    "type": "articleIpsIfp",
    "title": "Pembelajaran IPS Interaktif Menggunakan IFP",
    "desc": "Panduan lengkap menjadikan IFP sebagai media eksplorasi geografi, sejarah, dan fenomena sosial yang visual dan analitis."
  },
  {
    "url": "/jurnal-guru/pembelajaran-bahasa-inggris-interaktif-menggunakan-ifp",
    "type": "articleEnglishIfp",
    "title": "Pembelajaran Bahasa Inggris Interaktif Menggunakan IFP",
    "desc": "Panduan membuat kelas Bahasa Inggris komunikatif dengan 10 aktivitas interaktif, role-play, dan vocabulary building di IFP."
  },
  {
    "url": "/jurnal-guru/pembelajaran-bahasa-indonesia-interaktif-menggunakan-ifp",
    "type": "articleBahasaIndonesiaIfp",
    "title": "Pembelajaran Bahasa Indonesia Interaktif Menggunakan IFP",
    "desc": "Panduan menggunakan IFP sebagai medium membaca interaktif, anotasi, hingga menyusun teks kolaboratif secara partisipatif."
  },
  {
    "url": "/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp",
    "type": "articleMatematikaIfp",
    "title": "Pembelajaran Matematika Interaktif Menggunakan IFP",
    "desc": "Panduan praktis menggunakan IFP untuk visualisasi, pecahan, geometri, dan manipulasi objek dalam kelas matematika."
  },
  {
    "url": "/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp",
    "type": "articleClassroomManagementIfp",
    "title": "Strategi Pengelolaan Kelas Menggunakan IFP agar Pembelajaran Tetap Interaktif",
    "desc": "Strategi praktis mengelola kelas menggunakan IFP agar pembelajaran tetap interaktif, kolaboratif, dan terarah."
  },
  {
    "url": "/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp",
    "type": "articleCooperativeIfp",
    "title": "Pembelajaran Kooperatif Menggunakan IFP",
    "desc": "Panduan memfasilitasi pembelajaran kooperatif menggunakan IFP, membangun interdependensi positif dan tanggung jawab individu."
  },
  {
    "url": "/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp",
    "type": "articlePblIfp",
    "title": "Pembelajaran Berbasis Masalah (PBL) Menggunakan IFP",
    "desc": "Panduan memfasilitasi PBL menggunakan layar interaktif untuk investigasi masalah kontekstual dan kolaborasi siswa."
  },
  {
    "url": "/jurnal-guru/asesmen-autentik-menggunakan-ifp-di-kelas",
    "type": "articleAuthenticAssessmentIfp",
    "title": "Asesmen Autentik Menggunakan IFP",
    "desc": "Panduan memfasilitasi asesmen autentik dengan IFP untuk demonstrasi, portofolio digital, dan unjuk kerja siswa."
  },
  {
    "url": "/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas",
    "type": "articleDigitalLiteracyIfp",
    "title": "Literasi Digital Menggunakan IFP",
    "desc": "Panduan memfasilitasi literasi digital di kelas menggunakan IFP, membangun kemampuan siswa memilah informasi dan berpikir kritis."
  },
  {
    "url": "/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas",
    "type": "articleReflectionIfp",
    "title": "Refleksi Pembelajaran Menggunakan IFP",
    "desc": "Memfasilitasi refleksi siswa di akhir sesi pembelajaran secara interaktif melalui exit ticket digital dan visualisasi mood meter."
  },
  {
    "url": "/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas",
    "type": "articleDiagnosticIfp",
    "title": "Asesmen Diagnostik Menggunakan IFP",
    "desc": "Memanfaatkan Interactive Flat Panel untuk memetakan pengetahuan awal, miskonsepsi, dan kesiapan belajar siswa sebelum pembelajaran."
  },
  {
    "url": "/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp",
    "type": "articlePjblIfp",
    "title": "Pembelajaran Berbasis Proyek (PjBL) Menggunakan IFP",
    "desc": "Panduan komprehensif menerapkan model PjBL menggunakan IFP untuk meningkatkan kolaborasi dan pemecahan masalah."
  },
  {
    "url": "/jurnal-guru/pembelajaran-inklusif-menggunakan-ifp-di-kelas",
    "type": "articleInclusiveIfp",
    "title": "Pembelajaran Inklusif Menggunakan IFP di Kelas",
    "desc": "Panduan komprehensif menerapkan pembelajaran inklusif menggunakan IFP untuk memfasilitasi berbagai kebutuhan dan gaya belajar siswa."
  },
  {
    "url": "/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif",
    "type": "articleModuleIfp",
    "title": "Modul Ajar Menggunakan IFP: Panduan Merancang Pembelajaran Interaktif",
    "desc": "Panduan praktis menyusun modul ajar menggunakan IFP agar teknologi mendukung tujuan pembelajaran, aktivitas siswa, asesmen, dan refleksi."
  },
  {
    "url": "/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas",
    "type": "articleDeepLearningIfp",
    "title": "Pembelajaran Mendalam Menggunakan IFP: Dari Layar Interaktif Menjadi Pengalaman Belajar Bermakna",
    "desc": "Panduan praktis pembelajaran mendalam menggunakan IFP untuk membantu siswa memahami, mengaplikasikan, dan merefleksikan pembelajaran melalui pengalaman yang berkesadaran, bermakna, dan menggembirakan."
  },
  {
    "url": "/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas",
    "type": "articleDifferentiatedIfp",
    "title": "Pembelajaran Berdiferensiasi Menggunakan IFP di Kelas",
    "desc": "Panduan menyusun konten, proses, dan produk pembelajaran berdiferensiasi dengan dukungan Interactive Flat Panel."
  },
  {
    "url": "/jurnal-guru/cara-memilih-ifp-untuk-pembelajaran-di-sekolah",
    "type": "articleChooseIfp",
    "title": "Cara Memilih IFP yang Tepat untuk Kebutuhan Pembelajaran di Sekolah",
    "desc": "Panduan komprehensif bagi guru dan sekolah dalam memilih Interactive Flat Panel yang sesuai dengan pedagogi dan kebutuhan kelas."
  },
  {
    "url": "/jurnal-guru/fitur-ifp-untuk-pembelajaran-interaktif",
    "type": "articleIfpFeatures",
    "title": "Fitur IFP yang Penting untuk Pembelajaran Interaktif di Kelas",
    "desc": "Kenali fitur esensial IFP untuk pembelajaran, dari multi-touch hingga wireless casting, dan bagaimana memanfaatkannya."
  },
  {
    "url": "/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas",
    "type": "articleCollaborativeIfp",
    "title": "Pembelajaran Kolaboratif Menggunakan IFP di Kelas",
    "desc": "Panduan pembelajaran kolaboratif menggunakan IFP di kelas, lengkap dengan ide aktivitas kelompok dan manajemen multi-touch."
  },
  {
    "url": "/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas",
    "type": "articleAssessmentIfp",
    "title": "Cara Menggunakan IFP untuk Asesmen Formatif di Kelas",
    "desc": "Pelajari cara menggunakan IFP untuk asesmen formatif melalui kuis interaktif, drag-and-drop, hingga exit ticket."
  },
  {
    "url": "/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas",
    "type": "articleIpsIfp",
    "title": "Ide Aktivitas IPS Interaktif Menggunakan IFP di Kelas",
    "desc": "Temukan berbagai ide aktivitas IPS interaktif menggunakan IFP di kelas, mulai dari peta interaktif hingga keberagaman budaya."
  },
  {
    "url": "/jurnal-guru/aktivitas-bahasa-indonesia-interaktif-menggunakan-ifp-di-kelas",
    "type": "articleBahasaIfp",
    "title": "Ide Aktivitas Bahasa Indonesia Interaktif Menggunakan IFP di Kelas",
    "desc": "Berbagai ide aktivitas Bahasa Indonesia menggunakan IFP, mulai dari membaca interaktif hingga menyunting teks kolaboratif."
  },
  {
    "url": "/jurnal-guru/aktivitas-ipa-interaktif-menggunakan-ifp-di-kelas",
    "type": "articleIpaIfp",
    "title": "Aktivitas IPA Interaktif Menggunakan IFP",
    "desc": "Contoh praktis aktivitas IPA interaktif menggunakan IFP di kelas, mulai dari observasi, klasifikasi, simulasi, hingga eksperimen untuk melatih nalar kritis siswa."
  },
  {
    "url": "/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas",
    "type": "articleMathIfp",
    "title": "Ide Aktivitas Matematika Interaktif Menggunakan IFP di Kelas",
    "desc": "Berbagai ide aktivitas matematika interaktif menggunakan layar sentuh besar IFP di kelas untuk meningkatkan pemahaman siswa."
  },
  {
    "url": "/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas",
    "type": "articleIfpActivities",
    "title": "Ide Aktivitas Pembelajaran Interaktif Menggunakan IFP di Kelas",
    "desc": "Berbagai ide aktivitas pembelajaran interaktif menggunakan layar sentuh IFP di kelas untuk meningkatkan kolaborasi siswa."
  },
  {
    "url": "/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas",
    "type": "articleGuideIfp",
    "title": "Panduan Menggunakan IFP untuk Pembelajaran Interaktif di Kelas",
    "desc": "Langkah praktis cara menggunakan IFP di kelas agar aktivitas belajar lebih interaktif dan kolaboratif."
  },
  {
    "url": "/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif",
    "type": "articleIfpMedia",
    "title": "Cara Memaksimalkan IFP sebagai Media Pembelajaran Interaktif",
    "desc": "Panduan lengkap memanfaatkan layar sentuh besar di kelas untuk aktivitas pembelajaran yang interaktif, kolaboratif, dan menyenangkan."
  }
].find(a => a.type === type);
    if (!article) return null;
    return (
      <a 
        key={article.url}
        href={article.url} 
        onClick={(e) => { e.preventDefault(); navigateTo(article.type, article.url); }} 
        className={`block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 ${borderColor} group flex flex-col h-full`}
      >
        <h3 className="font-bold text-[#0C1A69] text-lg group-hover:text-blue-600 transition-colors mb-2 leading-tight flex-grow">{article.title}</h3>
        <p className="text-sm text-gray-600 font-medium mb-4 line-clamp-3">{article.desc}</p>
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-auto group-hover:underline">Baca Panduan &rarr;</span>
      </a>
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#F8FAFC] overflow-y-auto w-full h-[100dvh]">
      <div className="min-h-full flex flex-col items-center py-6 md:py-10 px-4 md:px-8">
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl border border-[#0C1A69]/10 p-6 md:p-12 relative my-auto">
          
          {/* HEADER & NAVIGASI */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b-2 border-gray-100 pb-6">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-[#0C1A69] font-black hover:text-blue-600 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl text-sm shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              KEMBALI KE LOBI
            </button>

            <div className="flex bg-gray-100 rounded-xl p-1 shadow-inner">
              <button onClick={() => navigateTo('blog', '/jurnal-guru')} className={`px-4 py-1.5 rounded-lg text-sm font-black transition-all ${currentLang === 'id' ? 'bg-[#0C1A69] text-white shadow-md' : 'text-gray-500 hover:text-[#0C1A69]'}`}>🇮🇩 ID</button>
              <button onClick={() => navigateTo('blogEn', '/en/journal')} className={`px-4 py-1.5 rounded-lg text-sm font-black transition-all ${currentLang === 'en' ? 'bg-[#0C1A69] text-white shadow-md' : 'text-gray-500 hover:text-[#0C1A69]'}`}>🇬🇧 EN</button>
            </div>
          </div>

          {currentLang === 'id' ? (
            <div className="animate-fadeIn space-y-16">
              
              {/* HERO SECTION */}
              <section className="text-center max-w-4xl mx-auto">
                <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">Pusat Pengetahuan Pedagogis</span>
                <h1 className="text-4xl md:text-5xl font-black text-[#0C1A69] mb-6 leading-tight">
                  Jurnal Guru: Strategi Pembelajaran Interaktif Menggunakan IFP
                </h1>
                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                  Platform sumber daya komprehensif bagi pendidik untuk merancang, mengelola, dan mengevaluasi aktivitas kelas menggunakan Interactive Flat Panel. Fokus pada transformasi pedagogi, bukan sekadar pengoperasian teknologi.
                </p>
              </section>

              {/* JALUR BELAJAR GURU */}
              <section className="bg-[#0C1A69] rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Jalur Belajar Guru (Learning Path)</h2>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-800 -translate-y-1/2 z-0 rounded-full"></div>
                    
                    {[
                      { step: '01', title: 'Mengenal IFP', type: 'articleGuideIfp' },
                      { step: '02', title: 'Merancang Modul', type: 'articleModuleIfp' },
                      { step: '03', title: 'Aktivitas Kelas', type: 'articleIfpActivities' },
                      { step: '04', title: 'Manajemen Kelas', type: 'articleClassroomManagementIfp' },
                      { step: '05', title: 'Asesmen Formatif', type: 'articleAssessmentIfp' }
                    ].map((item, idx) => {
                      const article = [{"url":"/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp","type":"articleVisualIfp","title":"Pembelajaran Berbasis Visual (Visual Thinking) Menggunakan IFP","desc":"Panduan lengkap menjadikan IFP sebagai kanvas kognitif. Terapkan strategi Making Thinking Visible melalui anotasi gambar dan diagram interaktif."},{"url":"/jurnal-guru/blended-learning-station-rotation-menggunakan-ifp","type":"articleStationRotationIfp","title":"Blended Learning: Model Station Rotation Menggunakan IFP","desc":"Solusi mengoptimalkan 1 layar interaktif untuk 30 siswa. Panduan membagi kelas menjadi zona rotasi fisik yang kolaboratif."},{"url":"/jurnal-guru/flipped-classroom-menggunakan-ifp","type":"articleFlippedIfp","title":"Model Flipped Classroom Menggunakan IFP","desc":"Ubah kelas pasif menjadi ruang aplikasi aktif. Panduan memfasilitasi diskusi dan pemecahan masalah langsung di layar sentuh."},{"url":"/jurnal-guru/pembelajaran-berbasis-inkuiri-menggunakan-ifp","type":"articleInkuiriIfp","title":"Pembelajaran Berbasis Inkuiri Menggunakan IFP","desc":"Panduan lengkap menjadikan IFP sebagai laboratorium visual interaktif untuk menyelidiki anomali, menguji hipotesis, dan menarik kesimpulan kolaboratif."},{"url":"/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp","type":"articlePseIfp","title":"Pembelajaran Sosial Emosional (PSE) Menggunakan IFP","desc":"Panduan mengelola empati, kolaborasi, dan kesadaran diri siswa melalui aktivitas interaktif visual di ruang kelas."},{"url":"/jurnal-guru/pembelajaran-steam-menggunakan-ifp","type":"articleSteamIfp","title":"Pembelajaran STEAM Menggunakan IFP","desc":"Panduan mengintegrasikan Sains, Teknologi, Teknik, Seni, dan Matematika dalam proyek pemecahan masalah interaktif."},{"url":"/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp","type":"articleGamificationIfp","title":"Gamifikasi Pembelajaran Menggunakan IFP","desc":"Panduan menerapkan elemen game seperti poin, badge, dan papan peringkat ke dalam aktivitas belajar menggunakan layar interaktif."},{"url":"/jurnal-guru/pembelajaran-ips-interaktif-menggunakan-ifp","type":"articleIpsIfp","title":"Pembelajaran IPS Interaktif Menggunakan IFP","desc":"Panduan lengkap menjadikan IFP sebagai media eksplorasi geografi, sejarah, dan fenomena sosial yang visual dan analitis."},{"url":"/jurnal-guru/pembelajaran-bahasa-inggris-interaktif-menggunakan-ifp","type":"articleEnglishIfp","title":"Pembelajaran Bahasa Inggris Interaktif Menggunakan IFP","desc":"Panduan membuat kelas Bahasa Inggris komunikatif dengan 10 aktivitas interaktif, role-play, dan vocabulary building di IFP."},{"url":"/jurnal-guru/pembelajaran-bahasa-indonesia-interaktif-menggunakan-ifp","type":"articleBahasaIndonesiaIfp","title":"Pembelajaran Bahasa Indonesia Interaktif Menggunakan IFP","desc":"Panduan menggunakan IFP sebagai medium membaca interaktif, anotasi, hingga menyusun teks kolaboratif secara partisipatif."},{"url":"/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp","type":"articleMatematikaIfp","title":"Pembelajaran Matematika Interaktif Menggunakan IFP","desc":"Panduan praktis menggunakan IFP untuk visualisasi, pecahan, geometri, dan manipulasi objek dalam kelas matematika."},{"url":"/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp","type":"articleClassroomManagementIfp","title":"Strategi Pengelolaan Kelas Menggunakan IFP agar Pembelajaran Tetap Interaktif","desc":"Strategi praktis mengelola kelas menggunakan IFP agar pembelajaran tetap interaktif, kolaboratif, dan terarah."},{"url":"/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp","type":"articleCooperativeIfp","title":"Pembelajaran Kooperatif Menggunakan IFP","desc":"Panduan memfasilitasi pembelajaran kooperatif menggunakan IFP, membangun interdependensi positif dan tanggung jawab individu."},{"url":"/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp","type":"articlePblIfp","title":"Pembelajaran Berbasis Masalah (PBL) Menggunakan IFP","desc":"Panduan memfasilitasi PBL menggunakan layar interaktif untuk investigasi masalah kontekstual dan kolaborasi siswa."},{"url":"/jurnal-guru/asesmen-autentik-menggunakan-ifp-di-kelas","type":"articleAuthenticAssessmentIfp","title":"Asesmen Autentik Menggunakan IFP","desc":"Panduan memfasilitasi asesmen autentik dengan IFP untuk demonstrasi, portofolio digital, dan unjuk kerja siswa."},{"url":"/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas","type":"articleDigitalLiteracyIfp","title":"Literasi Digital Menggunakan IFP","desc":"Panduan memfasilitasi literasi digital di kelas menggunakan IFP, membangun kemampuan siswa memilah informasi dan berpikir kritis."},{"url":"/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas","type":"articleReflectionIfp","title":"Refleksi Pembelajaran Menggunakan IFP","desc":"Memfasilitasi refleksi siswa di akhir sesi pembelajaran secara interaktif melalui exit ticket digital dan visualisasi mood meter."},{"url":"/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas","type":"articleDiagnosticIfp","title":"Asesmen Diagnostik Menggunakan IFP","desc":"Memanfaatkan Interactive Flat Panel untuk memetakan pengetahuan awal, miskonsepsi, dan kesiapan belajar siswa sebelum pembelajaran."},{"url":"/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp","type":"articlePjblIfp","title":"Pembelajaran Berbasis Proyek (PjBL) Menggunakan IFP","desc":"Panduan komprehensif menerapkan model PjBL menggunakan IFP untuk meningkatkan kolaborasi dan pemecahan masalah."},{"url":"/jurnal-guru/pembelajaran-inklusif-menggunakan-ifp-di-kelas","type":"articleInclusiveIfp","title":"Pembelajaran Inklusif Menggunakan IFP di Kelas","desc":"Panduan komprehensif menerapkan pembelajaran inklusif menggunakan IFP untuk memfasilitasi berbagai kebutuhan dan gaya belajar siswa."},{"url":"/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif","type":"articleModuleIfp","title":"Modul Ajar Menggunakan IFP: Panduan Merancang Pembelajaran Interaktif","desc":"Panduan praktis menyusun modul ajar menggunakan IFP agar teknologi mendukung tujuan pembelajaran, aktivitas siswa, asesmen, dan refleksi."},{"url":"/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas","type":"articleDeepLearningIfp","title":"Pembelajaran Mendalam Menggunakan IFP: Dari Layar Interaktif Menjadi Pengalaman Belajar Bermakna","desc":"Panduan praktis pembelajaran mendalam menggunakan IFP untuk membantu siswa memahami, mengaplikasikan, dan merefleksikan pembelajaran melalui pengalaman yang berkesadaran, bermakna, dan menggembirakan."},{"url":"/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas","type":"articleDifferentiatedIfp","title":"Pembelajaran Berdiferensiasi Menggunakan IFP di Kelas","desc":"Panduan menyusun konten, proses, dan produk pembelajaran berdiferensiasi dengan dukungan Interactive Flat Panel."},{"url":"/jurnal-guru/cara-memilih-ifp-untuk-pembelajaran-di-sekolah","type":"articleChooseIfp","title":"Cara Memilih IFP yang Tepat untuk Kebutuhan Pembelajaran di Sekolah","desc":"Panduan komprehensif bagi guru dan sekolah dalam memilih Interactive Flat Panel yang sesuai dengan pedagogi dan kebutuhan kelas."},{"url":"/jurnal-guru/fitur-ifp-untuk-pembelajaran-interaktif","type":"articleIfpFeatures","title":"Fitur IFP yang Penting untuk Pembelajaran Interaktif di Kelas","desc":"Kenali fitur esensial IFP untuk pembelajaran, dari multi-touch hingga wireless casting, dan bagaimana memanfaatkannya."},{"url":"/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas","type":"articleCollaborativeIfp","title":"Pembelajaran Kolaboratif Menggunakan IFP di Kelas","desc":"Panduan pembelajaran kolaboratif menggunakan IFP di kelas, lengkap dengan ide aktivitas kelompok dan manajemen multi-touch."},{"url":"/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas","type":"articleAssessmentIfp","title":"Cara Menggunakan IFP untuk Asesmen Formatif di Kelas","desc":"Pelajari cara menggunakan IFP untuk asesmen formatif melalui kuis interaktif, drag-and-drop, hingga exit ticket."},{"url":"/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas","type":"articleIpsIfp","title":"Ide Aktivitas IPS Interaktif Menggunakan IFP di Kelas","desc":"Temukan berbagai ide aktivitas IPS interaktif menggunakan IFP di kelas, mulai dari peta interaktif hingga keberagaman budaya."},{"url":"/jurnal-guru/aktivitas-bahasa-indonesia-interaktif-menggunakan-ifp-di-kelas","type":"articleBahasaIfp","title":"Ide Aktivitas Bahasa Indonesia Interaktif Menggunakan IFP di Kelas","desc":"Berbagai ide aktivitas Bahasa Indonesia menggunakan IFP, mulai dari membaca interaktif hingga menyunting teks kolaboratif."},{"url":"/jurnal-guru/aktivitas-ipa-interaktif-menggunakan-ifp-di-kelas","type":"articleIpaIfp","title":"Aktivitas IPA Interaktif Menggunakan IFP","desc":"Contoh praktis aktivitas IPA interaktif menggunakan IFP di kelas, mulai dari observasi, klasifikasi, simulasi, hingga eksperimen untuk melatih nalar kritis siswa."},{"url":"/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas","type":"articleMathIfp","title":"Ide Aktivitas Matematika Interaktif Menggunakan IFP di Kelas","desc":"Berbagai ide aktivitas matematika interaktif menggunakan layar sentuh besar IFP di kelas untuk meningkatkan pemahaman siswa."},{"url":"/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas","type":"articleIfpActivities","title":"Ide Aktivitas Pembelajaran Interaktif Menggunakan IFP di Kelas","desc":"Berbagai ide aktivitas pembelajaran interaktif menggunakan layar sentuh IFP di kelas untuk meningkatkan kolaborasi siswa."},{"url":"/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas","type":"articleGuideIfp","title":"Panduan Menggunakan IFP untuk Pembelajaran Interaktif di Kelas","desc":"Langkah praktis cara menggunakan IFP di kelas agar aktivitas belajar lebih interaktif dan kolaboratif."},{"url":"/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif","type":"articleIfpMedia","title":"Cara Memaksimalkan IFP sebagai Media Pembelajaran Interaktif","desc":"Panduan lengkap memanfaatkan layar sentuh besar di kelas untuk aktivitas pembelajaran yang interaktif, kolaboratif, dan menyenangkan."}].find(a => a.type === item.type);
                      return (
                        <div key={idx} className="relative z-10 flex flex-col items-center group">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-black text-lg border-4 border-[#0C1A69] shadow-lg mb-3 group-hover:bg-white group-hover:text-[#0C1A69] transition-colors">
                            {item.step}
                          </div>
                          <a href={article?.url} onClick={(e) => { e.preventDefault(); navigateTo(item.type, article?.url || ''); }} className="text-center font-bold text-sm text-blue-100 hover:text-white transition-colors">
                            {item.title}
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* CLUSTER ARTICLES */}
              <div className="space-y-16">

                <section id="dasar-strategi" className="scroll-mt-8">
                  <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">DASAR & STRATEGI IFP</h2>
                      <p className="text-gray-500 font-medium mt-1">Panduan fundamental tentang pemilihan, penggunaan, dan fitur Interactive Flat Panel di kelas.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderCard('articleIfpMedia', 'border-blue-500')}                    {renderCard('articleGuideIfp', 'border-blue-500')}                    {renderCard('articleChooseIfp', 'border-blue-500')}                    {renderCard('articleIfpFeatures', 'border-blue-500')}                    {renderCard('articleClassroomManagementIfp', 'border-blue-500')}                    {renderCard('articleModuleIfp', 'border-blue-500')}
                  </div>
                </section>

                <section id="model-pembelajaran" className="scroll-mt-8">
                  <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">MODEL PEMBELAJARAN</h2>
                      <p className="text-gray-500 font-medium mt-1">Kerangka model pembelajaran modern yang dioptimalkan dengan layar sentuh interaktif.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderCard('articlePblIfp', 'border-emerald-500')}                    {renderCard('articlePjblIfp', 'border-emerald-500')}                    {renderCard('articleInkuiriIfp', 'border-emerald-500')}                    {renderCard('articleFlippedIfp', 'border-emerald-500')}                    {renderCard('articleStationRotationIfp', 'border-emerald-500')}                    {renderCard('articleVisualIfp', 'border-emerald-500')}
                  </div>
                </section>

                <section id="aktif-kolaboratif" className="scroll-mt-8">
                  <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">PEMBELAJARAN AKTIF & KOLABORATIF</h2>
                      <p className="text-gray-500 font-medium mt-1">Strategi melibatkan siswa secara aktif dan mendorong kerjasama tim di depan layar.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderCard('articleIfpActivities', 'border-purple-500')}                    {renderCard('articleCollaborativeIfp', 'border-purple-500')}                    {renderCard('articleCooperativeIfp', 'border-purple-500')}
                  </div>
                </section>

                <section id="diferensiasi" className="scroll-mt-8">
                  <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">DIFERENSIASI & PEMBELAJARAN MENDALAM</h2>
                      <p className="text-gray-500 font-medium mt-1">Pendekatan inklusif untuk memfasilitasi berbagai gaya belajar dan pemahaman konsep yang kuat.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderCard('articleDifferentiatedIfp', 'border-rose-500')}                    {renderCard('articleInclusiveIfp', 'border-rose-500')}                    {renderCard('articleDeepLearningIfp', 'border-rose-500')}
                  </div>
                </section>

                <section id="asesmen-refleksi" className="scroll-mt-8">
                  <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">ASESMEN & REFLEKSI</h2>
                      <p className="text-gray-500 font-medium mt-1">Metode evaluasi pembelajaran, dari diagnostik hingga formatif, menggunakan kuis dan fitur interaktif.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderCard('articleDiagnosticIfp', 'border-amber-500')}                    {renderCard('articleAssessmentIfp', 'border-amber-500')}                    {renderCard('articleAuthenticAssessmentIfp', 'border-amber-500')}                    {renderCard('articleReflectionIfp', 'border-amber-500')}
                  </div>
                </section>

                <section id="mata-pelajaran" className="scroll-mt-8">
                  <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">PEMBELAJARAN MATA PELAJARAN</h2>
                      <p className="text-gray-500 font-medium mt-1">Ide aktivitas spesifik untuk berbagai mata pelajaran inti di jenjang sekolah dasar dan menengah.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderCard('articleMatematikaIfp', 'border-teal-500')}                    {renderCard('articleMathIfp', 'border-teal-500')}                    {renderCard('articleIpaIfp', 'border-teal-500')}                    {renderCard('articleIpsIfp', 'border-teal-500')}                    {renderCard('articleBahasaIndonesiaIfp', 'border-teal-500')}                    {renderCard('articleBahasaIfp', 'border-teal-500')}                    {renderCard('articleEnglishIfp', 'border-teal-500')}
                  </div>
                </section>

                <section id="teknologi-inovasi" className="scroll-mt-8">
                  <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">TEKNOLOGI, GAMIFIKASI & INOVASI</h2>
                      <p className="text-gray-500 font-medium mt-1">Penerapan elemen game, kecakapan digital, kesejahteraan emosional, dan pendekatan interdisipliner.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderCard('articleGamificationIfp', 'border-indigo-500')}                    {renderCard('articleDigitalLiteracyIfp', 'border-indigo-500')}                    {renderCard('articlePseIfp', 'border-indigo-500')}                    {renderCard('articleSteamIfp', 'border-indigo-500')}
                  </div>
                </section>

              </div>

              {/* TOPIK PENCARIAN (SEO INTERNAL LINKS) */}
              <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h2 className="text-xl font-black text-[#0C1A69] mb-4 text-center">Topik yang Sering Dicari Guru</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { label: "Pembelajaran Berdiferensiasi", type: "articleDifferentiatedIfp" },
                    { label: "Gamifikasi Kelas", type: "articleGamificationIfp" },
                    { label: "PBL dengan IFP", type: "articlePblIfp" },
                    { label: "STEAM", type: "articleSteamIfp" },
                    { label: "Blended Learning", type: "articleStationRotationIfp" },
                    { label: "Flipped Classroom", type: "articleFlippedIfp" },
                    { label: "Asesmen Diagnostik", type: "articleDiagnosticIfp" }
                  ].map((topic, i) => {
                    const article = [{"url":"/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp","type":"articleVisualIfp","title":"Pembelajaran Berbasis Visual (Visual Thinking) Menggunakan IFP","desc":"Panduan lengkap menjadikan IFP sebagai kanvas kognitif. Terapkan strategi Making Thinking Visible melalui anotasi gambar dan diagram interaktif."},{"url":"/jurnal-guru/blended-learning-station-rotation-menggunakan-ifp","type":"articleStationRotationIfp","title":"Blended Learning: Model Station Rotation Menggunakan IFP","desc":"Solusi mengoptimalkan 1 layar interaktif untuk 30 siswa. Panduan membagi kelas menjadi zona rotasi fisik yang kolaboratif."},{"url":"/jurnal-guru/flipped-classroom-menggunakan-ifp","type":"articleFlippedIfp","title":"Model Flipped Classroom Menggunakan IFP","desc":"Ubah kelas pasif menjadi ruang aplikasi aktif. Panduan memfasilitasi diskusi dan pemecahan masalah langsung di layar sentuh."},{"url":"/jurnal-guru/pembelajaran-berbasis-inkuiri-menggunakan-ifp","type":"articleInkuiriIfp","title":"Pembelajaran Berbasis Inkuiri Menggunakan IFP","desc":"Panduan lengkap menjadikan IFP sebagai laboratorium visual interaktif untuk menyelidiki anomali, menguji hipotesis, dan menarik kesimpulan kolaboratif."},{"url":"/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp","type":"articlePseIfp","title":"Pembelajaran Sosial Emosional (PSE) Menggunakan IFP","desc":"Panduan mengelola empati, kolaborasi, dan kesadaran diri siswa melalui aktivitas interaktif visual di ruang kelas."},{"url":"/jurnal-guru/pembelajaran-steam-menggunakan-ifp","type":"articleSteamIfp","title":"Pembelajaran STEAM Menggunakan IFP","desc":"Panduan mengintegrasikan Sains, Teknologi, Teknik, Seni, dan Matematika dalam proyek pemecahan masalah interaktif."},{"url":"/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp","type":"articleGamificationIfp","title":"Gamifikasi Pembelajaran Menggunakan IFP","desc":"Panduan menerapkan elemen game seperti poin, badge, dan papan peringkat ke dalam aktivitas belajar menggunakan layar interaktif."},{"url":"/jurnal-guru/pembelajaran-ips-interaktif-menggunakan-ifp","type":"articleIpsIfp","title":"Pembelajaran IPS Interaktif Menggunakan IFP","desc":"Panduan lengkap menjadikan IFP sebagai media eksplorasi geografi, sejarah, dan fenomena sosial yang visual dan analitis."},{"url":"/jurnal-guru/pembelajaran-bahasa-inggris-interaktif-menggunakan-ifp","type":"articleEnglishIfp","title":"Pembelajaran Bahasa Inggris Interaktif Menggunakan IFP","desc":"Panduan membuat kelas Bahasa Inggris komunikatif dengan 10 aktivitas interaktif, role-play, dan vocabulary building di IFP."},{"url":"/jurnal-guru/pembelajaran-bahasa-indonesia-interaktif-menggunakan-ifp","type":"articleBahasaIndonesiaIfp","title":"Pembelajaran Bahasa Indonesia Interaktif Menggunakan IFP","desc":"Panduan menggunakan IFP sebagai medium membaca interaktif, anotasi, hingga menyusun teks kolaboratif secara partisipatif."},{"url":"/jurnal-guru/pembelajaran-matematika-interaktif-menggunakan-ifp","type":"articleMatematikaIfp","title":"Pembelajaran Matematika Interaktif Menggunakan IFP","desc":"Panduan praktis menggunakan IFP untuk visualisasi, pecahan, geometri, dan manipulasi objek dalam kelas matematika."},{"url":"/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp","type":"articleClassroomManagementIfp","title":"Strategi Pengelolaan Kelas Menggunakan IFP agar Pembelajaran Tetap Interaktif","desc":"Strategi praktis mengelola kelas menggunakan IFP agar pembelajaran tetap interaktif, kolaboratif, dan terarah."},{"url":"/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp","type":"articleCooperativeIfp","title":"Pembelajaran Kooperatif Menggunakan IFP","desc":"Panduan memfasilitasi pembelajaran kooperatif menggunakan IFP, membangun interdependensi positif dan tanggung jawab individu."},{"url":"/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp","type":"articlePblIfp","title":"Pembelajaran Berbasis Masalah (PBL) Menggunakan IFP","desc":"Panduan memfasilitasi PBL menggunakan layar interaktif untuk investigasi masalah kontekstual dan kolaborasi siswa."},{"url":"/jurnal-guru/asesmen-autentik-menggunakan-ifp-di-kelas","type":"articleAuthenticAssessmentIfp","title":"Asesmen Autentik Menggunakan IFP","desc":"Panduan memfasilitasi asesmen autentik dengan IFP untuk demonstrasi, portofolio digital, dan unjuk kerja siswa."},{"url":"/jurnal-guru/literasi-digital-menggunakan-ifp-di-kelas","type":"articleDigitalLiteracyIfp","title":"Literasi Digital Menggunakan IFP","desc":"Panduan memfasilitasi literasi digital di kelas menggunakan IFP, membangun kemampuan siswa memilah informasi dan berpikir kritis."},{"url":"/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas","type":"articleReflectionIfp","title":"Refleksi Pembelajaran Menggunakan IFP","desc":"Memfasilitasi refleksi siswa di akhir sesi pembelajaran secara interaktif melalui exit ticket digital dan visualisasi mood meter."},{"url":"/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas","type":"articleDiagnosticIfp","title":"Asesmen Diagnostik Menggunakan IFP","desc":"Memanfaatkan Interactive Flat Panel untuk memetakan pengetahuan awal, miskonsepsi, dan kesiapan belajar siswa sebelum pembelajaran."},{"url":"/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp","type":"articlePjblIfp","title":"Pembelajaran Berbasis Proyek (PjBL) Menggunakan IFP","desc":"Panduan komprehensif menerapkan model PjBL menggunakan IFP untuk meningkatkan kolaborasi dan pemecahan masalah."},{"url":"/jurnal-guru/pembelajaran-inklusif-menggunakan-ifp-di-kelas","type":"articleInclusiveIfp","title":"Pembelajaran Inklusif Menggunakan IFP di Kelas","desc":"Panduan komprehensif menerapkan pembelajaran inklusif menggunakan IFP untuk memfasilitasi berbagai kebutuhan dan gaya belajar siswa."},{"url":"/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif","type":"articleModuleIfp","title":"Modul Ajar Menggunakan IFP: Panduan Merancang Pembelajaran Interaktif","desc":"Panduan praktis menyusun modul ajar menggunakan IFP agar teknologi mendukung tujuan pembelajaran, aktivitas siswa, asesmen, dan refleksi."},{"url":"/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas","type":"articleDeepLearningIfp","title":"Pembelajaran Mendalam Menggunakan IFP: Dari Layar Interaktif Menjadi Pengalaman Belajar Bermakna","desc":"Panduan praktis pembelajaran mendalam menggunakan IFP untuk membantu siswa memahami, mengaplikasikan, dan merefleksikan pembelajaran melalui pengalaman yang berkesadaran, bermakna, dan menggembirakan."},{"url":"/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp-di-kelas","type":"articleDifferentiatedIfp","title":"Pembelajaran Berdiferensiasi Menggunakan IFP di Kelas","desc":"Panduan menyusun konten, proses, dan produk pembelajaran berdiferensiasi dengan dukungan Interactive Flat Panel."},{"url":"/jurnal-guru/cara-memilih-ifp-untuk-pembelajaran-di-sekolah","type":"articleChooseIfp","title":"Cara Memilih IFP yang Tepat untuk Kebutuhan Pembelajaran di Sekolah","desc":"Panduan komprehensif bagi guru dan sekolah dalam memilih Interactive Flat Panel yang sesuai dengan pedagogi dan kebutuhan kelas."},{"url":"/jurnal-guru/fitur-ifp-untuk-pembelajaran-interaktif","type":"articleIfpFeatures","title":"Fitur IFP yang Penting untuk Pembelajaran Interaktif di Kelas","desc":"Kenali fitur esensial IFP untuk pembelajaran, dari multi-touch hingga wireless casting, dan bagaimana memanfaatkannya."},{"url":"/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas","type":"articleCollaborativeIfp","title":"Pembelajaran Kolaboratif Menggunakan IFP di Kelas","desc":"Panduan pembelajaran kolaboratif menggunakan IFP di kelas, lengkap dengan ide aktivitas kelompok dan manajemen multi-touch."},{"url":"/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas","type":"articleAssessmentIfp","title":"Cara Menggunakan IFP untuk Asesmen Formatif di Kelas","desc":"Pelajari cara menggunakan IFP untuk asesmen formatif melalui kuis interaktif, drag-and-drop, hingga exit ticket."},{"url":"/jurnal-guru/aktivitas-ips-interaktif-menggunakan-ifp-di-kelas","type":"articleIpsIfp","title":"Ide Aktivitas IPS Interaktif Menggunakan IFP di Kelas","desc":"Temukan berbagai ide aktivitas IPS interaktif menggunakan IFP di kelas, mulai dari peta interaktif hingga keberagaman budaya."},{"url":"/jurnal-guru/aktivitas-bahasa-indonesia-interaktif-menggunakan-ifp-di-kelas","type":"articleBahasaIfp","title":"Ide Aktivitas Bahasa Indonesia Interaktif Menggunakan IFP di Kelas","desc":"Berbagai ide aktivitas Bahasa Indonesia menggunakan IFP, mulai dari membaca interaktif hingga menyunting teks kolaboratif."},{"url":"/jurnal-guru/aktivitas-ipa-interaktif-menggunakan-ifp-di-kelas","type":"articleIpaIfp","title":"Aktivitas IPA Interaktif Menggunakan IFP","desc":"Contoh praktis aktivitas IPA interaktif menggunakan IFP di kelas, mulai dari observasi, klasifikasi, simulasi, hingga eksperimen untuk melatih nalar kritis siswa."},{"url":"/jurnal-guru/aktivitas-matematika-interaktif-menggunakan-ifp-di-kelas","type":"articleMathIfp","title":"Ide Aktivitas Matematika Interaktif Menggunakan IFP di Kelas","desc":"Berbagai ide aktivitas matematika interaktif menggunakan layar sentuh besar IFP di kelas untuk meningkatkan pemahaman siswa."},{"url":"/jurnal-guru/aktivitas-pembelajaran-interaktif-menggunakan-ifp-di-kelas","type":"articleIfpActivities","title":"Ide Aktivitas Pembelajaran Interaktif Menggunakan IFP di Kelas","desc":"Berbagai ide aktivitas pembelajaran interaktif menggunakan layar sentuh IFP di kelas untuk meningkatkan kolaborasi siswa."},{"url":"/jurnal-guru/panduan-menggunakan-ifp-untuk-pembelajaran-interaktif-di-kelas","type":"articleGuideIfp","title":"Panduan Menggunakan IFP untuk Pembelajaran Interaktif di Kelas","desc":"Langkah praktis cara menggunakan IFP di kelas agar aktivitas belajar lebih interaktif dan kolaboratif."},{"url":"/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif","type":"articleIfpMedia","title":"Cara Memaksimalkan IFP sebagai Media Pembelajaran Interaktif","desc":"Panduan lengkap memanfaatkan layar sentuh besar di kelas untuk aktivitas pembelajaran yang interaktif, kolaboratif, dan menyenangkan."}].find(a => a.type === topic.type);
                    return (
                      <a 
                        key={i} 
                        href={article?.url} 
                        onClick={(e) => { e.preventDefault(); navigateTo(topic.type, article?.url || ''); }}
                        className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:border-[#0C1A69] hover:text-[#0C1A69] hover:shadow-sm transition-all"
                      >
                        {topic.label}
                      </a>
                    )
                  })}
                </div>
              </section>

              {/* JURNAL GURU WHITEPAPER / PHILOSOPHY */}
              <section className="prose prose-lg max-w-4xl mx-auto text-gray-700 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mt-16">
                <div className="mb-8 border-b pb-6">
                  <h2 className="text-2xl font-black text-[#0C1A69] mb-2 mt-0">Filosofi Edu-Tech 2026</h2>
                  <span className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd - Specialist Digital Transformation</span>
                </div>
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-blue-400 pl-4">
                  "Digitalisasi pendidikan bukan sekadar mengganti buku menjadi PDF, melainkan menciptakan ruang interaksi di mana setiap sentuhan layar menjadi proses kognitif yang bermakna bagi siswa."
                </p>
                <p>
                  Memasuki era Society 5.0, tantangan pendidik di Indonesia, khususnya dalam kerangka Kurikulum Merdeka, adalah bagaimana menyelaraskan teknologi mutakhir dengan kebutuhan psikologis siswa. Penggunaan <strong>Interactive Flat Panel (IFP)</strong> bukan lagi menjadi kemewahan, melainkan infrastruktur dasar untuk mendukung <i>Joyful Learning</i>. Keterlibatan visual dan kinestetik terbukti meningkatkan retensi memori secara signifikan dibandingkan metode konvensional.
                </p>
                <p>
                  Pilar dari Jurnal Guru ini adalah untuk membongkar batasan antara teori pedagogis dan aplikasi teknologi nyata. Dengan panduan yang terstruktur berdasarkan <strong>model pembelajaran, asesmen, dan diferensiasi</strong>, pendidik dapat meramu pengalaman belajar yang kaya dan tak terlupakan bagi generasi penerus bangsa.
                </p>
              </section>

            </div>
          ) : (
            
            <div className="animate-fadeIn space-y-16">
              {/* HERO SECTION */}
              <section className="text-center max-w-4xl mx-auto">
                <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">Pedagogical Knowledge Hub</span>
                <h1 className="text-4xl md:text-5xl font-black text-[#0C1A69] mb-6 leading-tight">
                  Teacher's Journal: Interactive Learning Strategies with IFP
                </h1>
                <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8">
                  A comprehensive resource platform for educators to design, manage, and evaluate classroom activities using Interactive Flat Panels.
                </p>
              </section>

              {/* ARTICLE CATEGORIES */}
              
              <section id="model-pembelajaran" className="scroll-mt-8">
                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">INSTRUCTIONAL MODELS</h2>
                      <p className="text-gray-500 font-medium mt-1">Modern teaching frameworks optimized with interactive touch screens.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {renderCardEn('articlePblIfpEn', 'border-emerald-500')}
                  {renderCardEn('articlePjblIfpEn', 'border-emerald-500')}
                  {renderCardEn('articleInkuiriIfpEn', 'border-emerald-500')}
                  {renderCardEn('articleFlippedIfpEn', 'border-emerald-500')}
                  {renderCardEn('articleStationRotationIfpEn', 'border-emerald-500')}
                  {renderCardEn('articleVisualIfpEn', 'border-emerald-500')}
                </div>
              </section>

              <section id="aktif-kolaboratif" className="scroll-mt-8">
                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">ACTIVE & COLLABORATIVE LEARNING</h2>
                      <p className="text-gray-500 font-medium mt-1">Strategies to engage students actively and foster teamwork at the screen.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {renderCardEn('articleCollaborativeIfpEn', 'border-purple-500')}
                  {renderCardEn('articleCooperativeIfpEn', 'border-purple-500')}
                  {renderCardEn('articleClassroomManagementIfpEn', 'border-purple-500')}
                </div>
              </section>

              <section id="diferensiasi" className="scroll-mt-8">
                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">DIFFERENTIATION & DEEP LEARNING</h2>
                      <p className="text-gray-500 font-medium mt-1">Inclusive approaches to facilitate diverse learning styles and strong conceptual understanding.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {renderCardEn('articleDifferentiatedIfpEn', 'border-rose-500')}
                  {renderCardEn('articleDeepLearningIfpEn', 'border-rose-500')}
                </div>
              </section>

              <section id="asesmen-refleksi" className="scroll-mt-8">
                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">ASSESSMENT & REFLECTION</h2>
                      <p className="text-gray-500 font-medium mt-1">Learning evaluation methods, from diagnostic to formative, using interactive features.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {renderCardEn('articleDiagnosticIfpEn', 'border-amber-500')}
                  {renderCardEn('articleAssessmentIfpEn', 'border-amber-500')}
                  {renderCardEn('articleAuthenticAssessmentIfpEn', 'border-amber-500')}
                  {renderCardEn('articleReflectiveLearningIfpEn', 'border-amber-500')}
                </div>
              </section>

              <section id="teknologi-inovasi" className="scroll-mt-8">
                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">TECHNOLOGY, GAMIFICATION & INNOVATION</h2>
                      <p className="text-gray-500 font-medium mt-1">Applying game elements, digital skills, emotional wellbeing, and interdisciplinary approaches.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {renderCardEn('articleGamificationIfpEn', 'border-indigo-500')}
                  {renderCardEn('articlePseIfpEn', 'border-indigo-500')}
                  {renderCardEn('articleSteamIfpEn', 'border-indigo-500')}
                </div>
              </section>

              {/* JURNAL GURU WHITEPAPER / PHILOSOPHY */}
              <section className="prose prose-lg max-w-4xl mx-auto text-gray-700 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mt-16">
                <div className="mb-8 border-b pb-6">
                  <h2 className="text-2xl font-black text-[#0C1A69] mb-2 mt-0">Edu-Tech Philosophy 2026</h2>
                  <span className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd - Digital Transformation Specialist</span>
                </div>
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-blue-400 pl-4">
                  "Digital transformation in education is not just about replacing paper with screens; it's about creating an interactive space where every touchpoint becomes a meaningful cognitive process."
                </p>
                <p>
                  In the Society 5.0 era, the challenge for educators is to align cutting-edge technology with students' psychological needs. The use of <strong>Interactive Flat Panels (IFP)</strong> is no longer a luxury but a fundamental infrastructure for <i>Joyful Learning</i>. Data suggests that visual and kinesthetic engagement increases memory retention significantly compared to traditional one-way lectures.
                </p>
              </section>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default JurnalGuru;
