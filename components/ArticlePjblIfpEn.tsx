import React, { useEffect } from 'react';

interface ArticlePjblIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticlePjblIfpEn: React.FC<ArticlePjblIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Project-Based Learning Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A comprehensive guide to implementing the Project-Based Learning (PBL) model using an Interactive Flat Panel (IFP) to enhance collaboration and problem-solving."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/project-based-learning-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp';
    const enUrl = window.location.origin + '/en/journal/project-based-learning-using-interactive-flat-panel';

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

    const scriptId = 'article-pjbl-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Project-Based Learning Using IFP in the Classroom",
          "description": "A comprehensive guide to implementing the Project-Based Learning (PBL) model using an Interactive Flat Panel (IFP) to enhance collaboration and problem-solving.",
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
            "@id": window.location.origin + "/en/journal/project-based-learning-using-interactive-flat-panel"
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
              "name": "Project-Based Learning Using IFP",
              "item": window.location.origin + "/en/journal/project-based-learning-using-interactive-flat-panel"
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
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Learning Model</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Project-Based Learning (PBL) Using IFP in the Classroom
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-indigo-500 pl-4">
                  "In Project-Based Learning, the IFP is not just a screen for the final presentation, but a command center where student ideas are born, tested, and refined."
                </p>
                <p>
                  Project-Based Learning (PBL) is a core instructional model that empowers students. Its essence is to give students autonomy to solve real-world problems through in-depth investigation, often extending the foundations of <a href="/en/journal/inquiry-based-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleInkuiriIfpEn', '/en/journal/inquiry-based-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Inquiry-Based Learning</a>. When <strong>project based learning using interactive flat panel</strong> technology is implemented, class dynamics change drastically: the IFP transforms from a mere material projection tool into an unlimited collaboration canvas.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. What is PBL Using an IFP?</h2>
                <p>
                  PBL requires students to work in teams, research, design solutions, and present results. Integrating an IFP into this cycle means using interactive touch screen technology at every phase of the project—from <em>brainstorming</em> ideas on day one, to the project exhibition on the final day. The IFP facilitates the visualization of complex data, which is crucial in problem-solving, particularly when executing cross-disciplinary <a href="/en/journal/steam-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleSteamIfpEn', '/en/journal/steam-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">STEAM Learning</a> projects.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Why Use an IFP for Student Projects?</h2>
                <p>
                  Complex projects often produce scattered data, ideas, and references. If you only rely on poster board or conventional whiteboards, students' <em>trail of thoughts</em> are easily lost or erased. By maximizing the IFP as an interactive learning medium, the entire process—from the initial <em>mind map</em> to the digital prototype—can be saved, recalled, and revised in subsequent meetings.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Phase 1: Determining the Essential Question</h2>
                <p>
                  A project always starts with a problem. The teacher can display real-world phenomena—such as a video of plastic waste piles in the ocean or a graph of rising global temperatures—directly on the 4K IFP screen. High visual quality will trigger empathy and curiosity.
                </p>
                <p>
                  Afterward, use the IFP's <em>whiteboard</em> feature to capture driving questions from the students. Because the IFP screen is very spacious, the teacher can allow several students to come forward simultaneously to write down their curiosities using their fingers or a <em>stylus</em>.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Phase 2: Designing the Project Plan</h2>
                <p>
                  At this stage, collaborative learning using an IFP is truly tested. Students begin to design how they will solve the problem.
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Digital Mind Mapping:</strong> Groups arrange the project's concept map on the IFP. Elements can be easily <em>dragged-and-dropped</em>, deleted, or colored differently based on priority.</li>
                  <li><strong>Role Division:</strong> Students create a <em>job description</em> table on the screen, then affix their digital signatures as a symbol of team commitment.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Phase 3: Creating a Schedule</h2>
                <p>
                  Time management is a common student weakness in PBL. The IFP provides a solution through an interactive calendar or a simple <em>Gantt chart</em>. The teacher and students can arrange the project <em>timeline</em> together on the screen. This file is then saved and used as a <em>wallpaper</em> or always opened at the beginning of the lesson as a <em>visual reminder</em> of deadlines.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Phase 4: Monitoring Students and Project Progress</h2>
                <p>
                  Instead of the teacher passively visiting each desk one by one, students can <em>screen mirror</em> progress from their Chromebooks or devices to the IFP screen. This allows the teacher to conduct <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">formative assessment in real-time</a>.
                </p>
                <p>
                  If one group experiences a specific <em>bottleneck</em>, the teacher can discuss the group's code, design, or script on the big screen so that it becomes a <em>teachable moment</em> for other groups.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Phase 5: Assessing the Outcome</h2>
                <p>
                  Before the final presentation, the IFP is used for <em>peer-review</em>. Group A displays their project draft on the IFP, while Group B comes forward to provide constructive annotations directly on the screen using red or green digital ink. The feedback process becomes highly visual and transparent.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Phase 6: Evaluating the Experience</h2>
                <p>
                  PBL doesn't end with the product; it ends with reflection. As a conclusion, use the IFP as a "Reflection Board". Each student sends one digital <em>sticky note</em> from their device to the IFP containing one new thing they learned and one thing they want to improve in the future. The screen will be filled with the collective insights of the class.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Advantages of IFP in PBL</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Centralization of Information:</strong> All references, links, images, and working drafts are gathered on one infinite "canvas".</li>
                  <li><strong>High Interactivity:</strong> Awakens students' kinesthetic sense. They don't just sit and discuss, but stand, point, and manipulate data on the screen.</li>
                  <li><strong>Breaking Classroom Boundaries:</strong> An internet-connected IFP allows students to make <em>video calls</em> with expert resource persons (e.g., scientists, historians) directly from the classroom, enriching their project research.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. IFP-Based PBL Project Idea Examples</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg my-4 text-sm text-gray-700">
                    <thead className="bg-indigo-50 border-b border-indigo-100">
                      <tr>
                        <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Subject</th>
                        <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Project Idea</th>
                        <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Primary IFP Usage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-3 px-4 font-semibold">Social Studies / Geography</td>
                        <td className="py-3 px-4">Designing an eco-friendly city layout.</td>
                        <td className="py-3 px-4">Students use a map application (Google Earth) on the IFP, drawing evacuation routes or green areas directly over satellite imagery.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Science / Biology</td>
                        <td className="py-3 px-4">A balanced nutrition campaign for the school cafeteria.</td>
                        <td className="py-3 px-4">Projecting calorie infographics; annotating photos of the cafeteria menu to analyze its nutritional content.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Language / Literature</td>
                        <td className="py-3 px-4">Producing a short drama script performance.</td>
                        <td className="py-3 px-4">Analyzing storyboards together; using the IFP as a digital stage backdrop (dynamic <em>backdrop</em>) during the performance.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePjblIfpEn;
