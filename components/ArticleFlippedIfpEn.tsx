import React, { useEffect } from 'react';

interface ArticleFlippedIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleFlippedIfpEn: React.FC<ArticleFlippedIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Flipped Classroom Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A comprehensive guide to implementing the Flipped Classroom model using an IFP. Transform face-to-face hours into interactive discussion, problem-solving, and concept application sessions."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/flipped-classroom-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/flipped-classroom-menggunakan-ifp';
    const enUrl = window.location.origin + '/en/journal/flipped-classroom-using-interactive-flat-panel';

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

    const scriptId = 'article-flipped-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Flipped Classroom Model Using IFP in the Classroom",
          "description": "A comprehensive guide to implementing the Flipped Classroom model using an IFP. Transform face-to-face hours into interactive discussion, problem-solving, and concept application sessions.",
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
            "@id": window.location.origin + "/en/journal/flipped-classroom-using-interactive-flat-panel"
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
              "name": "Flipped Classroom Using IFP",
              "item": window.location.origin + "/en/journal/flipped-classroom-using-interactive-flat-panel"
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
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Methodology</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Flipped Classroom Model Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-purple-500 pl-4">
                  "By moving direct instruction to the home, we free up the most valuable asset in the classroom: the teacher's time to guide students through complex problem-solving. The IFP is the canvas where this high-level application happens."
                </p>
                <p>
                  The Flipped Classroom is a pedagogical model that reverses the traditional learning environment. Instead of listening to a lecture in class and doing homework alone at night, students watch instructional videos or read materials at home. Classroom time is then dedicated to interactive discussion, collaborative projects, and guided practice. When paired with an <strong>Interactive Flat Panel (IFP)</strong>, this face-to-face time transforms into a dynamic, highly engaging workspace.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Why Use an IFP in a Flipped Classroom?</h2>
                <p>
                  Since students arrive at school already possessing foundational knowledge, the teacher's role shifts from "sage on the stage" to "guide on the side". The IFP supports this shift by:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Facilitating Immediate Assessment:</strong> Teachers can instantly gauge comprehension using <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">digital formative assessments</a> on the IFP to diagnose areas needing clarification.</li>
                  <li><strong>Encouraging Visual Collaboration:</strong> Class time is used to solve complex case studies. The IFP can be divided into multiple zones (<em>split-screen</em>), allowing several groups to work side-by-side on the same digital canvas.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Interactive Flipped Classroom Activities on the IFP</h2>
                <p>Here are 10 concrete activity designs to maximize face-to-face time after students have studied the theory at home:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. "Defend Your Answer"</strong>
                    <br/>The teacher displays a complex problem related to the previous night's video on the IFP. Two students with different answers are called forward. The screen is split in half. Both must write their logical steps simultaneously on the screen and defend their arguments to the class.
                  </li>
                  <li><strong>2. Screencast Error Analysis</strong>
                    <br/>The teacher secretly selects an anonymized piece of homework containing a common misconception. It is projected from the teacher's tablet to the IFP. The class then works together using digital red ink annotation tools to find and correct the logical error.
                  </li>
                  <li><strong>3. Live Concept Mapping</strong>
                    <br/>Instead of the teacher summarizing, the students do it. The teacher opens a blank canvas with the Mind Mapping feature. Based on the video they watched at home, students take turns coming forward, adding new nodes, drawing connection lines, and building a giant collaborative mind map.
                  </li>
                  <li><strong>4. Interactive Sorting & Categorization</strong>
                    <br/>To test recall from independent study, the teacher scatters dozens of images, terms, or formulas on the IFP. Students relay to the front, dragging and dropping these items into the correct category baskets (e.g., "Carnivores" vs "Herbivores") against a time limit.
                  </li>
                  <li><strong>5. Virtual Lab Case Study</strong>
                    <br/>Because the theory (e.g., Gravity) was learned at home, class time is immediately used for physics simulation. Students approach the IFP, touching and manipulating mass and friction variables on the screen to see if the simulation matches the formulas they learned.
                  </li>
                  <li><strong>6. "The Expert Hot-Seat"</strong>
                    <br/>A digital spinner wheel featuring student names is displayed. The chosen name must sit in the "Hot Seat" near the IFP. Other students throw difficult questions related to the homework video, and the hot-seat student must answer while using the IFP to draw or visualize the response.
                  </li>
                  <li><strong>7. Digital Gallery Walk</strong>
                    <br/>Students work in groups to create visual presentations on advanced topics. Once finished, all works are exported to the IFP. The IFP switches to a Gallery Grid mode. The class takes a virtual tour by swiping the screen, then stamping stars (peer-assessment) on the best works.
                  </li>
                  <li><strong>8. Collaborative Text Annotation (Literacy)</strong>
                    <br/>A controversial historical article, introduced in the home reading, is displayed full-screen. Students take turns using colored digital highlighters: Yellow for "Fact", Blue for "Opinion", Green for "Author Bias".
                  </li>
                  <li><strong>9. Concept Jigsaw Puzzle</strong>
                    <br/>The teacher cuts a biological process diagram (e.g., the water cycle) into a digital puzzle on the IFP whiteboard. Armed with the theory learned independently, students must collaborate to reconstruct the puzzle pieces in their correct places on the touch screen.
                  </li>
                  <li><strong>10. Interactive Exit Ticket</strong>
                    <br/>Five minutes before class ends, the teacher poses a high-level reflective question on the IFP. Students submit short answers from their devices. The IFP displays all answers in real-time in an anonymous "Wall of Cards" format as a learning reflection.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2-Hour Lesson Scenario: "Composing an Exposition Text" (Language Arts)</h2>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-purple-200 pb-2">Practical Scenario (70-80 Minutes) - Flipped Classroom Application</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Pre-Class Activity (At Home):</strong> Students watch a 7-minute YouTube video created by the teacher regarding "Exposition Text Structure (Thesis, Arguments, Reiteration)". They take brief notes on definitions.</li>
                    <li><strong>Phase 1: Diagnostic Q&A on IFP (10 Minutes):</strong> The teacher opens the class not with a long greeting, but an interactive 3-question quiz on the IFP. The pie chart results show 90% of students understand the "Thesis" concept, allowing the teacher to skip lecturing and jump straight to practice.</li>
                    <li><strong>Phase 2: Jumbled Text Analysis (20 Minutes):</strong> The teacher displays 5 paragraphs of an exposition text in a randomized order on the IFP. Students relay to the front to drag-and-drop the paragraphs, rebuilding the correct structure, and highlighting arguments in green digital ink.</li>
                    <li><strong>Phase 3: Collaborative Production (30 Minutes):</strong> Students are divided into groups. Mission: Write an exposition text about "The Dangers of Plastic Waste". The IFP screen is divided into 4 zones (Split-Screen). 4 groups step forward simultaneously. They debate and type/write with digital pens in their respective zones, allowing the teacher to monitor 4 rough drafts at once.</li>
                    <li><strong>Phase 4: Centralized Peer Review (15 Minutes):</strong> The teacher turns off Split-Screen mode and magnifies Group 1's work. Groups 2, 3, and 4 come forward to annotate inappropriate diction on Group 1's draft. The final revised outcome is exported as a PDF via the IFP's QR Code.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Common Teacher Mistakes in Flipped Classrooms</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-red-500 mr-2">✗</span> <strong>Re-teaching the video in class:</strong> If you lecture the same material they watched at home, students will quickly learn that doing the homework is unnecessary. Trust the process.</li>
                  <li><span className="text-red-500 mr-2">✗</span> <strong>Ignoring those who didn't watch:</strong> Have a backup plan (e.g., an "isolation zone" at the back of the class with headphones) for students who failed to prepare, while the rest proceed to high-level IFP activities.</li>
                </ul>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleFlippedIfpEn;
