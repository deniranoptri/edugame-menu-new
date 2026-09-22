import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticlePblIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticlePblIfpEn: React.FC<ArticlePblIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Problem-Based Learning Using Interactive Flat Panel | Teacher Journal";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A practical guide to implementing Problem-Based Learning (PBL) using an Interactive Flat Panel. Learn how to foster critical thinking, collaboration, and real-world problem-solving."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/problem-based-learning-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/pembelajaran-berbasis-masalah-menggunakan-ifp';
    const enUrl = window.location.origin + '/en/journal/problem-based-learning-using-interactive-flat-panel';

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

    const scriptId = 'article-pbl-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Problem-Based Learning Using Interactive Flat Panel",
          "description": "A practical guide to implementing Problem-Based Learning (PBL) using an Interactive Flat Panel. Learn how to foster critical thinking, collaboration, and real-world problem-solving.",
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
          "datePublished": "2024-01-22",
          "dateModified": "2024-01-22",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": enUrl
          }
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
              "name": "Problem-Based Learning Using IFP",
              "item": enUrl
            }
          ]
        }
      ]);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      if (canonical) canonical.remove();
      if (hrefLangId) hrefLangId.remove();
      if (hrefLangEn) hrefLangEn.remove();
      if (hrefLangDef) hrefLangDef.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-orange-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full opacity-50"></div>
            
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-orange-600 hover:text-orange-800 font-bold mb-8 transition-colors text-sm uppercase tracking-wider"
            >
              <svg className="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK TO JOURNAL
            </button>

            <article className="prose prose-lg md:prose-xl max-w-none text-gray-700">
              <header className="mb-10">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Methodology</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Problem-Based Learning Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-orange-500 pl-4">
                  "Real-world problems are messy, non-linear, and rarely have one single correct answer. The Interactive Flat Panel acts as the ultimate war room for students—a shared canvas where hypotheses are tested, evidence is mapped, and collaborative consensus is forged."
                </p>

                <p>
                  The fundamental goal of education is not merely information retrieval, but equipping students to navigate the complexities of reality. <strong>Problem-Based Learning (PBL)</strong> is a student-centered pedagogy in which students learn about a subject through the experience of solving an open-ended problem. When coupled with an <strong>Interactive Flat Panel (IFP)</strong>, this methodology shifts from a theoretical exercise into an active, highly engaging, and deeply visual investigation.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Clarifying the Concepts: PBL vs. Inquiry vs. PjBL</h2>
                <p>
                  To effectively implement this strategy, teachers must first understand the pedagogical nuances that separate similar methodologies. Cannibalizing these distinct concepts leads to instructional confusion.
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong><a href="/en/journal/inquiry-based-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleInkuiriIfpEn', '/en/journal/inquiry-based-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Inquiry-Based Learning</a>:</strong> Focuses on questioning and the scientific process of investigation. The goal is discovering a truth or verifying a hypothesis.</li>
                  <li><strong><a href="/en/journal/project-based-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articlePjblIfpEn', '/en/journal/project-based-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Project-Based Learning (PjBL)</a>:</strong> Focuses on the extended creation of a tangible product, artifact, or performance over a long period.</li>
                  <li><strong>Problem-Based Learning (PBL):</strong> Focuses exclusively on the intellectual resolution of an authentic, messy problem. The "product" is the proposed solution, the justification, and the logical reasoning behind it.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">The 5 Core Phases of PBL and the IFP's Role</h2>
                <p>
                  PBL traditionally follows a distinct five-phase syntax. The Interactive Flat Panel enhances every single step:
                </p>

                <ol className="list-decimal pl-6 space-y-6">
                  <li>
                    <strong className="block text-gray-900 mb-1">Phase 1: Orienting Students to the Problem</strong>
                    The teacher presents a real-world, open-ended problem. The IFP serves as a multimedia catalyst, displaying high-definition news clips, raw data sets, or stark imagery that provokes immediate cognitive dissonance.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-1">Phase 2: Organizing Students for Study</strong>
                    Students form groups and identify what they know versus what they need to find out. The IFP's infinite digital whiteboard becomes a centralized hub for brain-dumping and mapping initial thoughts using <a href="/en/journal/collaborative-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfpEn', '/en/journal/collaborative-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">collaborative</a> digital sticky notes.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-1">Phase 3: Assisting Independent and Group Investigation</strong>
                    Students gather information. The IFP's split-screen functionality allows multiple student devices to cast their research simultaneously to the front board, enabling real-time cross-referencing and debate.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-1">Phase 4: Developing and Presenting Artifacts/Solutions</strong>
                    Groups synthesize their findings. They utilize the IFP's annotation tools to draw diagrams, flowcharts, or annotated evidence boards that clearly communicate their proposed solutions to the class.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-1">Phase 5: Analyzing and Evaluating the Process</strong>
                    The class critiques the solutions. The IFP is used for peer-voting, rubric display, and capturing final reflective takeaways, embedding <a href="/en/journal/reflective-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleReflectiveLearningIfpEn', '/en/journal/reflective-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">reflective learning</a> deeply into the routine.
                  </li>
                </ol>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Interactive PBL Activities Utilizing the IFP</h2>
                
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. The "Crime Scene" Observation:</strong> Display a complex, high-res image (e.g., a polluted river, a broken machine, a historical document). Have students come up and circle anomalies using different colored styluses.</li>
                  <li><strong>2. The K-W-L Chart Expansion:</strong> Use a digital graphic organizer (Know, Want to Know, Learned). Because the IFP canvas is infinite, students can keep adding digital post-its as the investigation deepens over days.</li>
                  <li><strong>3. Live Data Manipulation:</strong> Present a problem involving statistics (e.g., city budget deficits). Use an embedded spreadsheet on the IFP where students change variable values to instantly see how their proposed budget cuts affect the graph.</li>
                  <li><strong>4. "Devil's Advocate" Split Screen:</strong> When a group presents a solution, use the split-screen to display their proposal on the left, and a live web search on the right for the rest of the class to fact-check their claims in real-time.</li>
                  <li><strong>5. The "Red Thread" Evidence Board:</strong> Emulate a detective's evidence board. Students import pictures, text snippets, and data points onto the IFP whiteboard and draw connecting lines to show causality and correlation.</li>
                  <li><strong>6. Gamified Prioritization:</strong> When multiple causes of a problem are identified, use <a href="/en/journal/gamification-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleGamificationIfpEn', '/en/journal/gamification-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">gamification</a> polling. Students vote via their devices on which cause is the most critical, instantly generating a bar chart on the IFP to guide the next research step.</li>
                  <li><strong>7. Multi-Perspective Mapping:</strong> When solving a social issue, draw a large circle on the IFP. Different groups are assigned different stakeholder perspectives (e.g., government, citizens, corporations) and must write their priorities in their respective sectors.</li>
                  <li><strong>8. Formative Checkpoint Pop-ups:</strong> During the messy research phase, interrupt with a quick <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">formative assessment</a> quiz on the IFP to ensure no group has completely derailed from the core problem constraints.</li>
                  <li><strong>9. The "Elevator Pitch" Timer:</strong> When solutions are finalized, groups have exactly 3 minutes to present. Use the IFP's massive visual timer and buzzer to enforce strict, concise communication skills.</li>
                  <li><strong>10. Interactive Rubric Scoring:</strong> Display the grading rubric on the IFP during peer presentations. Allow the audience to use an anonymous slider tool on their tablets that aggregates a live "peer score" on the main screen.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2-Hour PBL Scenario: "The Urban Traffic Crisis"</h2>
                
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-orange-200 pb-2">Practical Scenario (70-80 Minutes) - Theme: Civic Engineering & Mathematics</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Problem Orientation (10 Mins):</strong> The teacher displays a live Google Map on the IFP showing severe red traffic congestion around the school during pick-up time. The teacher asks: <em>"How can we redesign the traffic flow to reduce wait times by 30% without buying new land?"</em></li>
                    <li><strong>B. Organization (15 Mins):</strong> Students divide into engineering teams. They use the IFP to screenshot the map, import it to the digital whiteboard, and highlight the primary bottleneck intersections.</li>
                    <li><strong>C. Investigation & Prototyping (25 Mins):</strong> Groups calculate car volume versus road area. They use the IFP's drawing tools to overlay new one-way routes, staggered schedule systems, or dedicated bus lanes directly onto the map.</li>
                    <li><strong>D. Solution Presentation (20 Mins):</strong> Each team casts their annotated map to the IFP. They must defend their geometric and logistical reasoning against peer critiques.</li>
                    <li><strong>E. Evaluation (10 Mins):</strong> The class conducts a final poll on the IFP to determine which solution is the most mathematically sound and socially feasible.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Common Pitfalls in PBL Implementation</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Fake Problems:</strong> Presenting a math equation like "Solve for X" on the IFP is not PBL. A PBL problem must be <em>open-ended</em>—meaning it has multiple valid solutions and pathways.</li>
                  <li><strong>Teacher Hogging the Board:</strong> A teacher who maintains physical control of the IFP (doing all the typing, searching, and summarizing) kills student agency. The IFP must be surrendered to the students during the brainstorming and synthesis phases.</li>
                  <li><strong>Ignoring Differentiation:</strong> Expecting every group to arrive at the exact same complexity of solution ignores <a href="/en/journal/differentiated-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfpEn', '/en/journal/differentiated-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">differentiated learning</a> principles. The IFP allows different groups to utilize different tools (visual mapping, statistical graphs, or written proposals) based on their strengths.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Teacher Preparation Checklist</h2>
                
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-orange-500 mr-2">✓</span> Is the central problem truly authentic, messy, and relevant to the students' context?</li>
                  <li><span className="text-orange-500 mr-2">✓</span> Is the digital whiteboard pre-configured with the necessary graphic organizers (K-W-L, Fishbone diagram)?</li>
                  <li><span className="text-orange-500 mr-2">✓</span> Have you established clear <a href="/en/journal/classroom-management-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfpEn', '/en/journal/classroom-management-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">classroom management</a> rules for who approaches the IFP and how devices are cast?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Conclusion</h2>
                <p>
                  Implementing <strong>Problem-Based Learning with an IFP</strong> shifts the classroom paradigm from "what is the right answer" to "how do we find a reasonable solution." It aligns perfectly with the goals of <a href="/en/journal/meaningful-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfpEn', '/en/journal/meaningful-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Meaningful Learning</a>, requiring higher-order thinking skills. The Interactive Flat Panel does not solve the problem for the students; rather, it provides the ultimate analytical gymnasium—a shared, transparent space where critical thinking is made visible, tested, and refined collaboratively.
                </p>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePblIfpEn;
