import React, { useEffect } from 'react';

interface ArticleInkuiriIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleInkuiriIfpEn: React.FC<ArticleInkuiriIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Inquiry-Based Learning Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A comprehensive guide to implementing Inquiry-Based Learning using an Interactive Flat Panel. Facilitate investigation, hypothesis testing, and interactive problem solving."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/inquiry-based-learning-using-interactive-flat-panel');

    const idUrl = 'https://papaninteraktif.com/jurnal-guru/pembelajaran-berbasis-inkuiri-menggunakan-ifp';
    const enUrl = 'https://papaninteraktif.com/en/journal/inquiry-based-learning-using-interactive-flat-panel';

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


    const scriptId = 'article-inkuiri-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Inquiry-Based Learning Using Interactive Flat Panel",
          "description": "A comprehensive guide to implementing Inquiry-Based Learning using an Interactive Flat Panel. Facilitate investigation, hypothesis testing, and interactive problem solving.",
          "author": {
            "@type": "Person",
            "name": "Deni Ranoptri, M.Pd"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Papan Interaktif",
            "logo": {
              "@type": "ImageObject",
              "url": window.location.origin + "/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.origin + "/en/journal/inquiry-based-learning-using-interactive-flat-panel"
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
              "name": "Inquiry-Based Learning Using IFP",
              "item": window.location.origin + "/en/journal/inquiry-based-learning-using-interactive-flat-panel"
            }
          ]
        }
      ]);
      document.head.appendChild(script);
    }
    
    return () => {
      // We don't remove canonical here, but App.tsx clearHreflangs handles hreflang.
      // We will remove the JSON-LD script to prevent duplicates
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
              className="group flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors mb-8"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Journal
            </button>
            <article className="prose prose-lg md:prose-xl max-w-none text-gray-700">
              <header className="mb-10">
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Interactive Methodology</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Guided Inquiry Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>

              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-cyan-400 pl-4">
                  "Giving students answers only stops their curiosity. Conversely, stimulating them with data anomalies and letting them look for patterns is the essence of learning. With a giant digital canvas at the front of the classroom, that curiosity is transformed into a collaborative and measurable visual investigation."
                </p>

                <p>
                  Traditional education systems often get trapped in a transmission model: the teacher pours out facts, and the students collect them. However, in an era where information can be accessed in seconds, the ability to <em>remember</em> facts is much less relevant than the ability to <em>investigate</em> the truth of those facts. The <strong>Inquiry-Based Learning</strong> model turns the tables. Students act as scientists or detectives who formulate questions, build hypotheses, and analyze data. In this context, <strong>guided inquiry using an interactive flat panel</strong> (IFP) provides a dynamic "data laboratory" right in the classroom.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">The Inquiry Cycle and the Role of the IFP</h2>
                <p>
                  The inquiry cycle generally consists of five stages: <strong>Orientation, Formulating Problems, Formulating Hypotheses, Collecting Data, Testing Hypotheses, and Drawing Conclusions</strong>. The IFP plays a transformative role at every stage:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Orientation (Trigger):</strong> Instead of the teacher telling a story, the teacher plays a high-resolution microscopic video or displays a statistical graphical anomaly on the IFP. This large-scale visualization invites awe and automatically provokes questions from the students.</li>
                  <li><strong>Formulating Problems & Hypotheses:</strong> The IFP is used as a <em>brainstorming board</em>. Using the <em>Split-Screen</em> feature, the teacher divides the screen to accommodate hypotheses from different groups simultaneously. Students come forward and record their predictions directly on the screen.</li>
                  <li><strong>Collecting Data:</strong> Through the IFP's built-in <em>browser</em>, the class can access virtual simulations (such as PhET Interactive Simulations), <em>real-time</em> satellite data, or import numerical <em>spreadsheets</em>. Students touch the screen to change variables and observe the results firsthand.</li>
                  <li><strong>Testing and Concluding:</strong> The IFP's <em>infinite canvas</em> whiteboard allows students to draw trend graphs from the data they collected, compare them with their initial hypotheses, and collaboratively write final conclusions.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Guided Inquiry vs. Open Inquiry</h2>
                <p>
                  It is crucial for teachers to understand student readiness levels. The IFP can facilitate various levels of inquiry:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Guided Inquiry:</strong> Suitable for beginners. The teacher prepares a table structure, simulation links, and guiding questions on the IFP screen. Students only need to step forward to fill in the variables and draw conclusions. This is a form of <a href="/en/journal/differentiated-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfpEn', '/en/journal/differentiated-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">differentiated instruction</a>.</li>
                  <li><strong>Open Inquiry:</strong> For advanced students. The IFP screen is left as a <em>blank slate</em>. Students are given full freedom to design their own virtual experiments, find the right digital tools, and present them.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Interactive Inquiry Activities Using an IFP</h2>
                <p>Here are 10 concrete inquiry activity designs that utilize the IFP's touch-screen interactivity:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. "What's Wrong with This Picture?" (Visual Orientation)</strong>
                    <br/>The teacher displays a photo of animal genetic engineering or a strange historical graph in 4K resolution. Students step up, use the double <em>Zoom</em> feature, and circle the anomalous areas with digital red ink, triggering class problem formulation.
                  </li>
                  <li><strong>2. Virtual Lab Manipulation (Science Exploration)</strong>
                    <br/>Instead of using expensive physical lab equipment, the IFP displays a virtual laboratory (e.g., a spring simulation). Students directly touch and pull the virtual springs on the screen, change the mass of the load, and record the spring's extension on a digital table next to it using <em>Split-Screen</em> mode.
                  </li>
                  <li><strong>3. Live Polling Hypothesis (Prediction Testing)</strong>
                    <br/>Before the simulation runs, the teacher displays a QR code on the IFP. Students scan it from their tablets to <em>vote</em> on what will happen (Hypothesis). A <em>live polling</em> bar chart will appear on the IFP, showing the distribution of the class's guesses.
                  </li>
                  <li><strong>4. Interactive Data Mapping (Social Studies/Geography Inquiry)</strong>
                    <br/>Using Google Earth on the IFP, the class investigates the correlation between volcano locations and earthquake zones. Students <em>pin</em> coordinate points on the touch screen, analyze the <em>Ring of Fire</em> pattern, and draw structural trend lines.
                  </li>
                  <li><strong>5. Timeline Detective (History Inquiry)</strong>
                    <br/>A large empty timeline is drawn on the IFP's <em>whiteboard</em>. Dozens of pictures of historical events, figures, and old newspapers are scrambled below the screen. Students must analyze "cause-and-effect", then <em>drag-and-drop</em> these pictures to the logical year points, debating if there are inconsistencies.
                  </li>
                  <li><strong>6. Digital "Black Box" (Math / Patterns)</strong>
                    <br/>The teacher displays an "Input" and "Output" table. Students guess what mathematical operation is inside the "Black Box" (Algebraic Function). Students come up to the IFP, write down trial input numbers freely, and the teacher types the output numbers <em>real-time</em>, challenging students to formulate the formula from the pattern.
                  </li>
                  <li><strong>7. Causal Loop Diagramming (Systems Thinking)</strong>
                    <br/>Students investigate an ecosystem. On the IFP <em>whiteboard</em>, there are pictures of wolf, deer, and grass populations. Students draw digital arrow lines (<em>Mind-map connector</em>) between entities. If the thickness of one arrow is changed, they must predict its domino effect on other entities.
                  </li>
                  <li><strong>8. Sentiment Analysis of Literary Texts (Language Inquiry)</strong>
                    <br/>A short poem or novel excerpt is displayed <em>full-screen</em>. Armed with colored digital highlighters, a group of students dissects the text with blue (for a melancholic tone) and red (for an angry tone). They investigate how the author's choice of <em>diction</em> affects the reader's emotions.
                  </li>
                  <li><strong>9. The "If-Then" Simulation Engine (Computational Logic)</strong>
                    <br/>Students use a block-based logic platform (like Scratch) run on the IFP. They test programming hypotheses: "If the speed variable is changed to 50, then the ball's bounce angle will change." Students arrange the code blocks with a touch of a finger and execute it immediately.
                  </li>
                  <li><strong>10. Interactive Gallery Walk (Class Evaluation)</strong>
                    <br/>In the conclusion stage, each group sends their digital inquiry results (as PDF/Image) to the IFP screen wirelessly (<em>casting</em>). The IFP screen displays a panel gallery (<em>grid view</em>) containing the work of all groups. As <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">formative assessment</a>, the class conducts a cross-analysis of the strengths and weaknesses of their peers' experiments.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2-Hour Inquiry Learning Scenario: "The Mystery of Floating Objects"</h2>
                
                <div className="bg-cyan-50/50 p-6 rounded-2xl border border-cyan-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-cyan-200 pb-2">Practical Scenario (70-80 Minutes) - Integrated Science (Basic Physics)</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Problem Orientation (10 Minutes):</strong> The teacher plays a video on the IFP: a giant steel ship floating in the ocean, juxtaposed with a small steel coin sinking in a glass of water. Trigger question on the IFP: <em>"Why can steel weighing thousands of tons float, while a small coin made of the exact same material sinks?"</em></li>
                    <li><strong>B. Formulating Hypotheses (15 Minutes):</strong> The IFP screen is divided using <em>Split-Screen</em>. The left side shows the picture of the ship and the coin, the right side shows an empty canvas. Students come forward in turns to write temporary conjectures (e.g., "Because the ship has an engine", "Because the ship is hollow in the middle").</li>
                    <li><strong>C. Collecting Data with Simulations (25 Minutes):</strong> The teacher opens a "Buoyancy" simulation from PhET on the IFP screen. Students are divided into groups. One group comes forward to change the density and volume variables of the object on the simulator by sliding the <em>sliders</em> on the touch screen. They put virtual objects (wood, stone, ice) into the virtual water and record the submerged volume.</li>
                    <li><strong>D. Analysis and Testing (15 Minutes):</strong> The groups return to their seats to calculate the Mass to Volume ratio based on the data on the IFP. They realize that the hollow shape of the ship makes its total volume very large, so its average density is smaller than water.</li>
                    <li><strong>E. Drawing Conclusions (15 Minutes):</strong> Student representatives come up to the IFP, cross out the incorrect initial hypotheses (like "because of the engine"), and formulate the final conclusion (Archimedes' Principle) with digital handwriting, which is then exported (<em>save to QR</em>) as study notes for the whole class.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Classroom Management Strategies and Common Mistakes</h2>
                <p>
                  The most common mistake in inquiry using an IFP is the teacher being "impatient" and eventually taking over the touch screen to speed up student discovery. This kills the essence of inquiry. Remember, let the students navigate the screen and make mistakes. If the simulation fails, ask <em>"Why didn't that happen as you expected?"</em>.
                </p>
                <p>
                  Use visual queue management. If all students scramble to get to the IFP, the class will become chaotic. Write the order of group call-ups on the edge of the IFP screen so every child knows when it's their turn to manipulate the data without needing verbal intervention from the teacher.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Teacher Preparation Checklist (Pre-Inquiry)</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-cyan-500 mr-2">✓</span> Is the initial trigger video/anomaly prepared with crisp visual quality?</li>
                  <li><span className="text-cyan-500 mr-2">✓</span> Has the HTML5 simulation (like PhET) been tested for smoothness on the IFP's built-in <em>browser</em>?</li>
                  <li><span className="text-cyan-500 mr-2">✓</span> Has the teacher prepared <em>probing questions</em> in case students get <em>stuck</em>?</li>
                  <li><span className="text-cyan-500 mr-2">✓</span> Is the IFP placed at the right height so students of various heights can reach the screen to interact?</li>
                </ul>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInkuiriIfpEn;
