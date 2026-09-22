import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleDiagnosticIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleDiagnosticIfpEn: React.FC<ArticleDiagnosticIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Diagnostic Assessment Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A guide to mapping student readiness and misconceptions using an Interactive Flat Panel before instruction begins."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/diagnostic-assessment-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/asesmen-diagnostik-menggunakan-ifp-di-kelas';
    const enUrl = window.location.origin + '/en/journal/diagnostic-assessment-using-interactive-flat-panel';

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

    const scriptId = 'article-diagnostic-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Diagnostic Assessment Using Interactive Flat Panel",
          "description": "A guide to mapping student readiness and misconceptions using an Interactive Flat Panel before instruction begins.",
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
            "@id": window.location.origin + "/en/journal/diagnostic-assessment-using-interactive-flat-panel"
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
              "name": "Diagnostic Assessment Using IFP",
              "item": window.location.origin + "/en/journal/diagnostic-assessment-using-interactive-flat-panel"
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
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Assessment & Evaluation</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Diagnostic Assessment Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-rose-500 pl-4">
                  "Teaching without knowing the students' prior knowledge is like building a house without checking the foundation. Diagnostic assessment maps misconceptions visually and in real-time."
                </p>
                <p>
                  Before we can teach someone, we must know where they currently stand. This is where <strong>Diagnostic Assessment using an Interactive Flat Panel (IFP)</strong> becomes crucial. It transforms initial evaluations from a boring administrative routine into a meaningful, interactive experience that safely exposes student readiness.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. What is Diagnostic Assessment?</h2>
                <p>
                  Diagnostic assessment is the evaluation conducted <em>before</em> the learning process begins. Its goal is not to grade, but to gather diagnostic information regarding prerequisite knowledge, initial understanding, learning readiness, and deeply rooted misconceptions about the new topic.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Why the IFP is Perfect for Diagnostic Assessment?</h2>
                <p>
                  Initial assessments can cause anxiety if presented as a formal paper test. The IFP shifts this paradigm by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Lowering Anxiety (Low Stakes):</strong> Students don't feel tested; interacting with the IFP feels like a game.</li>
                  <li><strong>Instant Visualization:</strong> Teachers and students can see aggregated data (like voting charts or mind maps) instantly on the big screen.</li>
                  <li><strong>Kinesthetic Interactivity:</strong> Manipulating touch objects (dragging, pulling, drawing) engages motor memory and encourages natural responses.</li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Diagnostic Strategies on the Touch Screen</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. The Visual Prompt:</strong> Display a phenomenon (e.g., melting ice). Ask students to come up and use the marker tool to circle the most important part of the image.</li>
                  <li><strong>2. Sticky Note Brainstorm:</strong> Display a topic. Students cast virtual sticky notes from their tablets to the IFP. A quick glance tells the teacher where the class stands.</li>
                  <li><strong>3. Drag-and-Drop Misconceptions:</strong> Display images of animals and two boxes: "Mammal" and "Fish". If a student drags a whale into the "Fish" box, the teacher instantly identifies a core misconception to address later.</li>
                  <li><strong>4. The Incomplete Mind Map:</strong> Write a central concept on the IFP. Students take turns adding branches. If the map is chaotic, foundational understanding is weak.</li>
                  <li><strong>5. Anonymous Aggregation:</strong> Students use their smartphones to answer a short question. The IFP displays an anonymous word cloud. This minimizes embarrassment if answers are wrong.</li>
                  <li><strong>6. True/False Corners:</strong> Split the IFP screen into a "True" side and a "False" side. Display a statement and have students drag their avatars to the side they believe is correct.</li>
                  <li><strong>7. The Continuum Line:</strong> Draw a line from "Strongly Agree" to "Strongly Disagree". Students mark their position regarding a controversial historical statement before the unit begins.</li>
                  <li><strong>8. Sequencing the Unknown:</strong> Give students 5 steps of a process they haven't learned yet. Ask them to logically guess the sequence on the IFP.</li>
                  <li><strong>9. The "I Notice, I Wonder" Grid:</strong> Divide the screen. Before a science experiment, students write what they notice about the materials and what they wonder will happen.</li>
                  <li><strong>10. Four Corners Digital Polling:</strong> Ask a multiple-choice question A, B, C, D. The IFP instantly generates a bar graph of the class's initial guesses.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">The Foundation for Differentiation</h2>
                <p>
                  Diagnostic assessment is the necessary first step before implementing <a href="/en/journal/differentiated-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfpEn', '/en/journal/differentiated-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Differentiated Learning</a>. By knowing exactly where students start, you can group them effectively. Once the lesson begins, you can seamlessly transition into <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Formative Assessment</a> to monitor their progress.
                </p>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDiagnosticIfpEn;
