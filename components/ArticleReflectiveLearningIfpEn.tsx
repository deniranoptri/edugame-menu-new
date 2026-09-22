import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleReflectiveLearningIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleReflectiveLearningIfpEn: React.FC<ArticleReflectiveLearningIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Reflective Learning Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A guide to facilitating reflective learning and metacognition using an IFP. Transform the end of your lesson into an interactive space for processing and solidifying knowledge."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/reflective-learning-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/refleksi-pembelajaran-menggunakan-ifp-di-kelas';
    const enUrl = window.location.origin + '/en/journal/reflective-learning-using-interactive-flat-panel';

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

    const scriptId = 'article-reflective-learning-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Reflective Learning Using Interactive Flat Panel",
          "description": "A guide to facilitating reflective learning and metacognition using an IFP. Transform the end of your lesson into an interactive space for processing and solidifying knowledge.",
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
            "@id": window.location.origin + "/en/journal/reflective-learning-using-interactive-flat-panel"
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
              "name": "Reflective Learning Using IFP",
              "item": window.location.origin + "/en/journal/reflective-learning-using-interactive-flat-panel"
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
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Reflection & Metacognition</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Reflective Learning Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-purple-500 pl-4">
                  "As John Dewey famously noted, we do not learn from experience; we learn from reflecting on experience. The IFP transforms a passive closing moment into an interactive, visual stage for solidifying meaning."
                </p>
                <p>
                  The final moments of a lesson are often the most neglected. The bell rings, students pack their bags, and the teacher rushes to summarize. Yet, these last minutes are crucial—this is where the transfer of learning happens. This is where <strong>Reflective Learning using an Interactive Flat Panel (IFP)</strong> plays a transformative role, turning class closure into a transparent visualization of student understanding and emotion.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. What is Reflective Learning?</h2>
                <p>
                  Reflective learning is the process by which students consciously rethink what they have learned, how they learned it, what they felt during the process, and where they struggled. This is the core of metacognition (thinking about thinking). Reflection is not a test; it is a space for students to process information and emotions.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. The IFP as a Shared Canvas for Reflection</h2>
                <p>
                  Often, reflection is done in private notebooks read only by the teacher. While good for privacy, this method loses the power of peer learning. Using the IFP's giant touch screen as a reflective medium allows students to see the aggregate understanding of the class. They realize, "Oh, I'm not the only one who is confused about this." This fosters empathy and psychological safety.
                </p>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Reflective Activities on the IFP</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. The Digital Exit Ticket:</strong> Split the IFP screen into "Got it" and "Still Confused". Students cast virtual sticky notes from their devices or walk up to place a digital stamp in the area that represents their state.</li>
                  <li><strong>2. The Mood Meter (Emotional Check-in/out):</strong> Learning is affective as well as cognitive. Display a Mood Meter quadrant. Have students move their digital avatars to reflect their emotional state before and after the lesson.</li>
                  <li><strong>3. Confidence Rating Check:</strong> Display a short conceptual question. Rather than just asking for the answer, add a confidence dimension: "How sure are you?" (High/Medium/Low). This exposes strong misconceptions.</li>
                  <li><strong>4. One-Word Summary:</strong> Each student casts a single word summarizing the lesson to the IFP, generating a real-time Word Cloud.</li>
                  <li><strong>5. The "I Used to Think... Now I Think..." Board:</strong> Divide the screen. Students write their previous misconceptions on the left and their new understanding on the right.</li>
                  <li><strong>6. Rose, Bud, Thorn:</strong> Students use the digital pen to highlight a "Rose" (a success), a "Thorn" (a challenge), and a "Bud" (something they are looking forward to learning next).</li>
                  <li><strong>7. The Collaborative Concept Map:</strong> Start with one central word. Each group sends a representative to draw a new branch and briefly explain it, visually summarizing the lesson in five minutes.</li>
                  <li><strong>8. The "Muddiest Point":</strong> Students anonymously submit the part of the lesson they found most confusing. The IFP aggregates these, allowing the teacher to see the most common "muddy point" instantly.</li>
                  <li><strong>9. Strategy Sharing:</strong> After a difficult task, students write the specific study strategy or problem-solving method they used. The IFP becomes a gallery of peer-generated best practices.</li>
                  <li><strong>10. Visual Metaphor:</strong> Ask students to draw a quick sketch on their tablet representing how their brain feels after the lesson (e.g., a sponge, a tangled knot, a lightbulb) and cast it to the IFP.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Integrating Reflection into the Learning Cycle</h2>
                <p>
                  Reflective learning should not exist in isolation. It is the natural conclusion to <a href="/en/journal/meaningful-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfpEn', '/en/journal/meaningful-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Meaningful Learning</a> experiences. When a teacher combines <a href="/en/journal/collaborative-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfpEn', '/en/journal/collaborative-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Collaborative Learning</a> with continuous <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Formative Assessment</a>, the final reflection on the IFP becomes a powerful tool for cementing long-term retention and building student agency.
                </p>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleReflectiveLearningIfpEn;
