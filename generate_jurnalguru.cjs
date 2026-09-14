const fs = require('fs');

const rawArticles = JSON.parse(fs.readFileSync('articles.json', 'utf8'));

// Remove duplicates based on URL
const articlesMap = new Map();
for (const a of rawArticles) {
  articlesMap.set(a.url, a);
}
const articles = Array.from(articlesMap.values());

// Categorize
const categories = {
  "DASAR & STRATEGI IFP": {
    id: "dasar-strategi",
    desc: "Panduan fundamental tentang pemilihan, penggunaan, dan fitur Interactive Flat Panel di kelas.",
    items: [
      "articleIfpMedia",
      "articleGuideIfp",
      "articleChooseIfp",
      "articleIfpFeatures",
      "articleClassroomManagementIfp",
      "articleModuleIfp"
    ]
  },
  "MODEL PEMBELAJARAN": {
    id: "model-pembelajaran",
    desc: "Kerangka model pembelajaran modern yang dioptimalkan dengan layar sentuh interaktif.",
    items: [
      "articlePblIfp",
      "articlePjblIfp",
      "articleInkuiriIfp",
      "articleFlippedIfp",
      "articleStationRotationIfp",
      "articleVisualIfp"
    ]
  },
  "PEMBELAJARAN AKTIF & KOLABORATIF": {
    id: "aktif-kolaboratif",
    desc: "Strategi melibatkan siswa secara aktif dan mendorong kerjasama tim di depan layar.",
    items: [
      "articleIfpActivities",
      "articleCollaborativeIfp",
      "articleCooperativeIfp"
    ]
  },
  "DIFERENSIASI & PEMBELAJARAN MENDALAM": {
    id: "diferensiasi",
    desc: "Pendekatan inklusif untuk memfasilitasi berbagai gaya belajar dan pemahaman konsep yang kuat.",
    items: [
      "articleDifferentiatedIfp",
      "articleInclusiveIfp",
      "articleDeepLearningIfp"
    ]
  },
  "ASESMEN & REFLEKSI": {
    id: "asesmen-refleksi",
    desc: "Metode evaluasi pembelajaran, dari diagnostik hingga formatif, menggunakan kuis dan fitur interaktif.",
    items: [
      "articleDiagnosticIfp",
      "articleAssessmentIfp",
      "articleAuthenticAssessmentIfp",
      "articleReflectionIfp"
    ]
  },
  "PEMBELAJARAN MATA PELAJARAN": {
    id: "mata-pelajaran",
    desc: "Ide aktivitas spesifik untuk berbagai mata pelajaran inti di jenjang sekolah dasar dan menengah.",
    items: [
      "articleMatematikaIfp",
      "articleMathIfp",
      "articleIpaIfp",
      "articleIpsIfp",
      "articleBahasaIndonesiaIfp",
      "articleBahasaIfp",
      "articleEnglishIfp"
    ]
  },
  "TEKNOLOGI, GAMIFIKASI & INOVASI": {
    id: "teknologi-inovasi",
    desc: "Penerapan elemen game, kecakapan digital, kesejahteraan emosional, dan pendekatan interdisipliner.",
    items: [
      "articleGamificationIfp",
      "articleDigitalLiteracyIfp",
      "articlePseIfp",
      "articleSteamIfp"
    ]
  }
};

const getArticle = (type) => articles.find(a => a.type === type);

let output = `import React, { useState, useEffect } from 'react';

interface JurnalGuruProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const JurnalGuru: React.FC<JurnalGuruProps> = ({ onBack, navigateTo }) => {
  const [lang, setLang] = useState<'id' | 'en'>('id');

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
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru');
    
  }, []);

  const renderCard = (type: string, borderColor: string) => {
    const article = ${JSON.stringify(articles, null, 2)}.find(a => a.type === type);
    if (!article) return null;
    return (
      <a 
        key={article.url}
        href={article.url} 
        onClick={(e) => { e.preventDefault(); navigateTo(article.type, article.url); }} 
        className={\`block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 \${borderColor} group flex flex-col h-full\`}
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
              <button onClick={() => setLang('id')} className={\`px-4 py-1.5 rounded-lg text-sm font-black transition-all \${lang === 'id' ? 'bg-[#0C1A69] text-white shadow-md' : 'text-gray-500 hover:text-[#0C1A69]'}\`}>🇮🇩 ID</button>
              <button onClick={() => setLang('en')} className={\`px-4 py-1.5 rounded-lg text-sm font-black transition-all \${lang === 'en' ? 'bg-[#0C1A69] text-white shadow-md' : 'text-gray-500 hover:text-[#0C1A69]'}\`}>🇬🇧 EN</button>
            </div>
          </div>

          {lang === 'id' ? (
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
                      const article = ${JSON.stringify(articles)}.find(a => a.type === item.type);
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
`;

const colors = [
  "border-blue-500", "border-emerald-500", "border-purple-500", 
  "border-rose-500", "border-amber-500", "border-teal-500", "border-indigo-500"
];

let colorIndex = 0;
for (const [catName, catData] of Object.entries(categories)) {
  output += `
                <section id="${catData.id}" className="scroll-mt-8">
                  <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-gray-100 pb-4">
                    <div>
                      <h2 className="text-2xl font-black text-[#0C1A69]">${catName}</h2>
                      <p className="text-gray-500 font-medium mt-1">${catData.desc}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${catData.items.map(type => `{renderCard('${type}', '${colors[colorIndex % colors.length]}')}`).join('\\n                    ')}
                  </div>
                </section>
`;
  colorIndex++;
}

output += `
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
                    const article = ${JSON.stringify(articles)}.find(a => a.type === topic.type);
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
              <section className="text-center max-w-4xl mx-auto">
                <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">Pedagogical Knowledge Hub</span>
                <h1 className="text-4xl md:text-5xl font-black text-[#0C1A69] mb-6 leading-tight">
                  Teacher's Journal: Interactive Learning Strategies with IFP
                </h1>
                <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8">
                  A comprehensive resource platform for educators to design, manage, and evaluate classroom activities using Interactive Flat Panels.
                </p>
                <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl max-w-2xl mx-auto">
                  <p className="text-amber-800 font-semibold">
                    The full pedagogical library and article clusters are currently available in Indonesian (ID). Please switch the language toggle above to explore the complete catalog of 30+ interactive learning guides.
                  </p>
                </div>
              </section>

              <section className="prose prose-lg max-w-4xl mx-auto text-gray-700 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mt-16">
                <div className="mb-8 border-b pb-6">
                  <h2 className="text-2xl font-black text-[#0C1A69] mb-2 mt-0">Edu-Tech Philosophy 2026</h2>
                </div>
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-blue-400 pl-4">
                  "Digital transformation in education is not just about replacing paper with screens; it's about creating an interactive space where every touchpoint becomes a meaningful cognitive process."
                </p>
                <p>
                  In the Society 5.0 era, the challenge for educators is to align cutting-edge technology with students' psychological needs. The use of <strong>Interactive Flat Panels (IFP)</strong> is no longer a luxury but a fundamental infrastructure for <i>Joyful Learning</i>. Data suggests that visual and kinesthetic engagement increases memory retention by up to 60% compared to traditional one-way lectures.
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
`;

fs.writeFileSync('components/JurnalGuru.tsx', output);
console.log("Successfully generated JurnalGuru.tsx");
