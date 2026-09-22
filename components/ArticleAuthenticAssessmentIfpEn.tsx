import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleAuthenticAssessmentIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleAuthenticAssessmentIfpEn: React.FC<ArticleAuthenticAssessmentIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Authentic Assessment Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A comprehensive guide to conducting authentic assessment using an IFP. Transform traditional testing into real-world performance tasks and digital portfolios."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/authentic-assessment-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/asesmen-autentik-menggunakan-ifp-di-kelas';
    const enUrl = window.location.origin + '/en/journal/authentic-assessment-using-interactive-flat-panel';

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

    const scriptId = 'article-authentic-assessment-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Authentic Assessment Using Interactive Flat Panel",
          "description": "A comprehensive guide to conducting authentic assessment using an IFP. Transform traditional testing into real-world performance tasks and digital portfolios.",
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
            "@id": window.location.origin + "/en/journal/authentic-assessment-using-interactive-flat-panel"
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
              "name": "Authentic Assessment Using IFP",
              "item": window.location.origin + "/en/journal/authentic-assessment-using-interactive-flat-panel"
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
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Assessment & Evaluation</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Authentic Assessment Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-amber-500 pl-4">
                  "The quality of assessment is not determined by the sophistication of the screen, but by the clarity of purpose, criteria, and how learning evidence is collected and interpreted. The IFP serves as an interactive stage that makes learning evidence visible, audible, and tangible to the entire class."
                </p>
                <p>
                  In modern curriculum paradigms, measuring student ability through multiple-choice questions is no longer considered sufficient to represent genuine competence. Students need challenges that require them to demonstrate real-world skills. That is the essence of authentic assessment. When <strong>Authentic Assessment using an Interactive Flat Panel (IFP)</strong> is implemented in the classroom, this smart panel is no longer just a tool for displaying exam questions; it becomes a canvas where student portfolios, presentations, and collaborative works are anchored, tested, and appreciated.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. What is Authentic Assessment?</h2>
                <p>
                  Authentic assessment is an evaluation approach in which students are asked to demonstrate their understanding and skills through meaningful real-world tasks. Students do not merely memorize and recall; rather, they must apply, analyze, and create.
                </p>
                <p>
                  It is important to understand how this differs from other assessments:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="/en/journal/diagnostic-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDiagnosticIfpEn', '/en/journal/diagnostic-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Diagnostic Assessment:</a> Conducted before learning to determine students' baseline conditions.</li>
                  <li><a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Formative Assessment:</a> Conducted during the learning process for feedback and improvement.</li>
                  <li><strong>Authentic Assessment:</strong> Evaluates ability through performance, projects, or simulations reflecting real-world challenges.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Characteristics of Authentic Assessment</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reflects real-life (contextual) situations.</li>
                  <li>Requires students to use judgment and innovation (higher-order thinking).</li>
                  <li>Often results in a product or performance.</li>
                  <li>Grading rubrics are open and known to students from the beginning.</li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Why the IFP Supports Authentic Tasks</h2>
                <p>
                  The IFP transforms the classroom into a professional workspace. When students are asked to design a marketing campaign or analyze environmental data, the large multi-touch screen provides the digital real estate needed to collaborate, present multimedia evidence, and defend their work publicly, just as they would in a real-world career setting.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Ways to Conduct Authentic Assessment on the IFP</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. Live Data Dashboards:</strong> Students collect real environmental data around the school and input it into a shared spreadsheet. The IFP displays the live dashboard, and students must interpret the fluctuating graphs in real-time.</li>
                  <li><strong>2. Multimedia Portfolio Defense:</strong> Instead of submitting a paper essay, students cast a digital portfolio (videos, photos, writing) from their device to the IFP and verbally defend their creative choices to the class.</li>
                  <li><strong>3. The "Shark Tank" Pitch:</strong> Students design a product. They use the IFP to present their 3D CAD models or digital prototypes, swiping and zooming to show details while answering questions from the "investors" (their peers and teacher).</li>
                  <li><strong>4. Interactive Case Studies (Medical/Legal):</strong> The teacher displays a complex scenario on the IFP. Students must use the digital whiteboard tools to highlight key evidence, draw connections, and present a final diagnostic or legal verdict.</li>
                  <li><strong>5. Digital Storytelling & Podcasting:</strong> Students create an audio-visual documentary. They play it on the IFP, pausing to explain the narrative structure and editing techniques they used.</li>
                  <li><strong>6. Live Coding & Debugging:</strong> For computer science, students project their code onto the IFP. The class watches as they run the program, encounter a bug, and explain their logical process for fixing it live.</li>
                  <li><strong>7. Virtual Architecture/City Planning:</strong> Students use mapping software on the IFP to design a sustainable city block, justifying their placement of parks, roads, and utilities based on geographical constraints.</li>
                  <li><strong>8. Collaborative Peer Review:</strong> A student's work is displayed anonymously. The class uses the IFP's multi-touch capability to simultaneously highlight strengths in green and areas for improvement in red.</li>
                  <li><strong>9. The "Press Conference":</strong> Students role-play historical figures. The IFP serves as the digital backdrop displaying primary source documents while the student answers unscripted questions from the "press corps."</li>
                  <li><strong>10. Interactive Rubric Co-Creation:</strong> Before a project begins, the teacher displays a blank rubric grid on the IFP. The class works together to define what "Excellent," "Proficient," and "Developing" work looks like, establishing ownership over the evaluation criteria.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Integration with Meaningful Learning</h2>
                <p>
                  Authentic assessment is the ultimate destination of <a href="/en/journal/meaningful-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfpEn', '/en/journal/meaningful-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Meaningful Learning</a>. When students see that their evaluation is based on real-world applicability rather than rote memorization, their engagement deepens, and the IFP becomes a powerful stage for demonstrating true competency.
                </p>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthenticAssessmentIfpEn;
