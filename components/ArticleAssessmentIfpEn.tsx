import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleAssessmentIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleAssessmentIfpEn: React.FC<ArticleAssessmentIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Formative Assessment Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A guide to using the Interactive Flat Panel for dynamic formative assessment. Evaluate student understanding visually, instantly, and collaboratively."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/formative-assessment-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas';
    const enUrl = window.location.origin + '/en/journal/formative-assessment-using-interactive-flat-panel';

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

    const scriptId = 'article-assessment-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Formative Assessment Using Interactive Flat Panel",
          "description": "A guide to using the Interactive Flat Panel for dynamic formative assessment. Evaluate student understanding visually, instantly, and collaboratively.",
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
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.origin + "/en/journal/formative-assessment-using-interactive-flat-panel"
          },
          "inLanguage": "en"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": window.location.origin + "/en"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Journal",
              "item": window.location.origin + "/en/journal"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Formative Assessment Using IFP",
              "item": window.location.origin + "/en/journal/formative-assessment-using-interactive-flat-panel"
            }
          ]
        }
      ]);
      document.head.appendChild(script);
    }
    
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pt-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12 lg:p-16">
            <button 
              onClick={() => {
                onBack();
              }}
              className="flex items-center gap-2 text-[#0C1A69] font-black hover:text-blue-600 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl text-sm shadow-sm mb-8"
            >
              <svg className="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK TO JOURNAL
            </button>
            <article className="prose prose-lg md:prose-xl max-w-none text-gray-700">
              <header className="mb-10">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Assessment & Evaluation</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Formative Assessment Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-blue-500 pl-4">
                  "Formative assessment is not just about giving grades; it is about gathering information to improve the teaching and learning process. Through an Interactive Flat Panel (IFP), this evaluation process becomes visual, instant, and collaborative."
                </p>
                <p>
                  At the core of the learning cycle is Formative Assessment. Using an <strong>Interactive Flat Panel (IFP) for formative assessment</strong> gives teachers the opportunity to check student understanding without waiting for a formal unit test. It allows educators to identify misconceptions in real-time and immediately modify their instructional strategies.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">What is Formative Assessment?</h2>
                <p>
                  Formative assessment is the evaluation conducted <em>during</em> the learning process. Its purpose is not to provide a final report card grade, but to provide immediate feedback. A good formative assessment cycle includes: Learning Objective → Activity → Student Response → Teacher Analysis → Feedback → Follow-up Action.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Why Use the IFP for Formative Assessment?</h2>
                <p>
                  Many teachers still consider the IFP merely as an advanced presentation screen. However, interactive assessment with an IFP can drastically alter classroom dynamics. With multi-touch features and wireless device integration, digital assessment becomes instant.
                </p>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Formative Assessment Activities Using the IFP</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. The Quick Visual Check:</strong> Pause mid-lecture and display a visual quiz on the IFP. Ask a student representative to step up and circle the correct answer with the digital stylus.</li>
                  <li><strong>2. Drag-and-Drop Misconception Check:</strong> Create sorting areas on the screen (e.g., "Living" vs "Non-Living"). Ask students to drag items. If placed incorrectly, do not correct them immediately; ask the class, "Does anyone have a different opinion?"</li>
                  <li><strong>3. Collaborative Response:</strong> Invite two groups to the IFP. Give them a case study and have them solve it side-by-side using the split-screen feature. Observe their problem-solving dialogue.</li>
                  <li><strong>4. Interactive Exit Tickets:</strong> Five minutes before the bell, display a question. Students cast their short answers from their devices to the IFP, appearing as virtual post-it notes.</li>
                  <li><strong>5. The Mood Meter Reflection:</strong> Display a visual thermometer. Students touch the screen to indicate their confidence level: "Got it", "Unsure", or "Need Help", which is a core component of <a href="/en/journal/reflective-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleReflectiveLearningIfpEn', '/en/journal/reflective-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Reflective Learning</a>.</li>
                  <li><strong>6. Spot the Error:</strong> Display a math equation or a sentence with an intentional mistake. Have a student use a red digital pen to find and correct the error in front of the class.</li>
                  <li><strong>7. Live Polling & Graphing:</strong> Ask a multiple-choice question. Students vote using their devices. The IFP instantly generates a live pie chart showing the class's overall comprehension.</li>
                  <li><strong>8. Gamified Formative Check:</strong> Use the IFP's educational games as a stress-free evaluation tool. The immediate automated feedback serves as a formative check.</li>
                  <li><strong>9. The "Draw It" Challenge:</strong> Ask students to draw a concept (e.g., a cell structure) on their tablets and cast it to the IFP to create a mosaic of class understanding.</li>
                  <li><strong>10. Concept Mapping Assessment:</strong> Have students build a mind map on the IFP from scratch. The missing links or incorrect branches will quickly reveal gaps in their understanding.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Connecting Assessments</h2>
                <p>
                  Formative assessment is most effective when it follows a strong <a href="/en/journal/diagnostic-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDiagnosticIfpEn', '/en/journal/diagnostic-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Diagnostic Assessment</a> conducted at the beginning of the unit. Furthermore, visual activities on the IFP naturally cater to <a href="/en/journal/visual-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleVisualIfpEn', '/en/journal/visual-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Visual Learning</a> styles, ensuring that feedback is not just verbal, but spatially comprehensible.
                </p>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleAssessmentIfpEn;
