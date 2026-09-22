import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleClassroomManagementIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleClassroomManagementIfpEn: React.FC<ArticleClassroomManagementIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Classroom Management Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Effective classroom management strategies when using an IFP. Learn how to control transitions, manage student participation, and maintain focus with interactive displays."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/classroom-management-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp';
    const enUrl = window.location.origin + '/en/journal/classroom-management-using-interactive-flat-panel';

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

    const scriptId = 'article-classroom-management-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Classroom Management Using Interactive Flat Panel",
          "description": "Effective classroom management strategies when using an IFP. Learn how to control transitions, manage student participation, and maintain focus with interactive displays.",
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
            "@id": window.location.origin + "/en/journal/classroom-management-using-interactive-flat-panel"
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
              "name": "Classroom Management Using IFP",
              "item": window.location.origin + "/en/journal/classroom-management-using-interactive-flat-panel"
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
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Classroom Management</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Classroom Management Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-rose-500 pl-4">
                  "The presence of advanced technology like a giant touch screen can be a magnet for attention or a source of chaos. The IFP is an extraordinary pedagogical tool, but without a solid foundation of classroom management, it loses its potential."
                </p>
                <p>
                  Implementing <strong>Classroom Management using an Interactive Flat Panel (IFP)</strong> goes far beyond knowing how to turn on the screen or open an app. The real pedagogical challenge lies in human orchestration: how to manage 30 to 40 students so they remain focused, participate fairly, and do not dominate each other when interacting with a single central device. Technology cannot replace the crucial role of a teacher in establishing structure and routines.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Why the IFP Changes Classroom Dynamics</h2>
                <p>
                  In a conventional classroom, the center of attention is often the teacher. With the introduction of an IFP, the visual and motor focal point shifts to a glowing screen. Multi-touch features and <a href="/en/journal/gamification-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleGamificationIfpEn', '/en/journal/gamification-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">gamification</a> naturally trigger student enthusiasm. If not controlled through strategic management, this enthusiasm can explode into noise, fighting for turns, or conversely—disengagement from students not currently at the screen.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Common Management Issues When Using an IFP</h2>
                <p>
                  Without clear rules, teachers will quickly face:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>The Participation Bottleneck:</strong> The entire class crowding around one panel.</li>
                  <li><strong>The Bystander Effect:</strong> While 4 kids solve a problem on the IFP, the other 26 passively watch or chat.</li>
                  <li><strong>Slow Transitions:</strong> Time wasted just rotating groups to the front of the class.</li>
                  <li><strong>Loss of Time Control:</strong> Getting so caught up in educational games that essential curriculum is missed.</li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Establishing Basic IFP Routines</h2>
                <p>
                  The first step in managing a classroom with an IFP is establishing explicit routines. Create a small poster next to the IFP with rules such as:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Approach Only When Called:</strong> No student may run to the IFP before the teacher gives the instruction.</li>
                  <li><strong>Gentle Touch:</strong> Teach students not to hit or press the screen too hard with the stylus or fingers.</li>
                  <li><strong>Stand to the Side:</strong> When writing on the IFP, students must position their bodies slightly to the side so seated students can still see (the visibility rule).</li>
                </ol>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Management Strategies Using the IFP</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. The "Blank Screen" Command:</strong> When you need 100% eye contact from students, use the IFP's "Blank Screen" or "Freeze" button. Say, "Screen off, eyes on me!" to establish a firm attention-shifting routine.</li>
                  <li><strong>2. Visual Timers for Everything:</strong> Display a giant digital timer on the IFP during all transitions and group work. It creates urgency and keeps the lesson moving.</li>
                  <li><strong>3. Digital Noise Meters:</strong> Run a bouncing balls or visual noise meter app on the IFP. If the class gets too loud, the meter hits red, providing objective visual feedback without the teacher having to yell.</li>
                  <li><strong>4. Systematic Turn-Taking (The Randomizer):</strong> Avoid always calling on the loudest students. Use the IFP's built-in random name picker wheel to select who comes to the board next.</li>
                  <li><strong>5. The "Seat-to-Screen" Workflow:</strong> Ensure that for every task happening on the IFP, there is a corresponding parallel task happening at the students' desks (e.g., "While Team A solves it on the board, everyone else solve it in your notebooks").</li>
                  <li><strong>6. Station Rotation Setup:</strong> Use the IFP as just one of several learning stations. It displays instructions for all stations while a small group works directly on it, preventing a 30-to-1 bottleneck. This is a core component of <a href="/en/journal/differentiated-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfpEn', '/en/journal/differentiated-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Differentiated Learning</a>.</li>
                  <li><strong>7. Clear Casting Protocols:</strong> If students are casting from their devices, establish a strict protocol (e.g., "Tablets face down until I open the casting queue").</li>
                  <li><strong>8. Visual Instruction Boards:</strong> Instead of repeating instructions, leave a bulleted list of the current task on a dedicated corner of the IFP screen so students who forget what to do can self-correct.</li>
                  <li><strong>9. The "Parking Lot":</strong> Dedicate a section of the digital whiteboard for off-topic questions. If a student asks a good but unrelated question, write it in the Parking Lot to be addressed later, keeping the main lesson on track.</li>
                  <li><strong>10. Gamified Classroom Behavior:</strong> Use the IFP to display a class-wide points system. Award points for quick transitions, quiet voices, and good teamwork, turning management itself into a cooperative game.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">The Foundation for Complex Learning</h2>
                <p>
                  Mastering these management strategies is the prerequisite for advanced pedagogies. You cannot successfully implement <a href="/en/journal/cooperative-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleCooperativeIfpEn', '/en/journal/cooperative-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Cooperative Learning</a> or run complex collaborative projects without first establishing who touches the screen, when they touch it, and what the rest of the class is doing simultaneously. The IFP is a powerful engine, and good classroom management is the steering wheel.
                </p>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleClassroomManagementIfpEn;
