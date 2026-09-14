import React, { useEffect } from 'react';

interface ArticleStationRotationIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleStationRotationIfpEn: React.FC<ArticleStationRotationIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blended Learning Station Rotation Using IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A complete guide to implementing the Blended Learning Station Rotation model using an Interactive Flat Panel to maximize classroom management and student engagement."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/blended-learning-station-rotation-using-ifp');

    const idUrl = window.location.origin + '/jurnal-guru/blended-learning-station-rotation-menggunakan-ifp';
    const enUrl = window.location.origin + '/en/journal/blended-learning-station-rotation-using-ifp';

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

    const scriptId = 'article-station-rotation-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Blended Learning Station Rotation Using IFP",
          "description": "A complete guide to implementing the Blended Learning Station Rotation model using an Interactive Flat Panel to maximize classroom management and student engagement.",
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
            "@id": window.location.origin + "/en/journal/blended-learning-station-rotation-using-ifp"
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
              "name": "Station Rotation Using IFP",
              "item": window.location.origin + "/en/journal/blended-learning-station-rotation-using-ifp"
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
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Methodology</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Blended Learning Station Rotation Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-emerald-500 pl-4">
                  "Station Rotation isn't just about moving desks; it's about choreographing attention. The Interactive Flat Panel serves as the autonomous digital anchor, allowing the teacher to focus intimately on small-group instruction while the rest of the class is deeply engaged."
                </p>
                <p>
                  One of the most effective implementations of Blended Learning is the <strong>Station Rotation</strong> model, often used in tandem with the <a href="/en/journal/flipped-classroom-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleFlippedIfpEn', '/en/journal/flipped-classroom-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Flipped Classroom</a>. In this setup, the classroom is physically divided into several working "stations". Students are split into small groups (4-6 people) and rotate from one station to another on a fixed timer. This is where the <strong>IFP acts as the primary collaborative tech station</strong>, providing exclusive, rotating access to small groups of students.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Station Architecture in a Blended Classroom</h2>
                <p>
                  A traditional Station Rotation model typically divides the classroom into three main hubs:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>1. Teacher-Led Station:</strong> Here, the teacher provides direct instruction in a small group setting, enabling highly specific and intimate <a href="/en/journal/differentiated-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfpEn', '/en/journal/differentiated-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">differentiated learning</a>.</li>
                  <li><strong>2. Independent/Offline Station:</strong> Students read printed texts, complete worksheets, or build physical crafts. This station builds focus and conventional literacy.</li>
                  <li><strong>3. Collaborative Technology Station:</strong> <strong>This is where the IFP lives.</strong> Without needing constant supervision from the teacher, 5-6 students stand around the IFP to solve digital puzzles, drag coding blocks, or watch virtual simulations together using multitouch capabilities.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Exclusive Activities for the IFP Station</h2>
                <p>
                  When a group of 5 students arrives at the "IFP Station", they must be able to work independently without disrupting the teacher. Here are 10 activities specifically designed for collaborative autonomy on a touch screen:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. Drag-and-Drop Classification Puzzle</strong>
                    <br/>The IFP displays a large canvas with category columns (e.g., Solid, Liquid, Gas) and dozens of scattered images below. The five students use multitouch to race against the station timer, dragging images into the correct columns.
                  </li>
                  <li><strong>2. Virtual Lab Expedition (Science)</strong>
                    <br/>Students use the IFP to open a virtual frog dissection or electrical circuit simulation. One student acts as the "manual reader" from the screen, while the others take turns touching the screen to cut, move, or connect virtual wires.
                  </li>
                  <li><strong>3. Whiteboard Brainstorming & Mind Mapping</strong>
                    <br/>This station is tasked with summarizing a history chapter. The IFP is opened to a Whiteboard app with a Mind Map template. All five students hold digital pens (or use their fingers) to simultaneously write down historical figures, dates, and cause-and-effect relationships in their respective canvas areas.
                  </li>
                  <li><strong>4. Interactive Timeline Detective</strong>
                    <br/>Students must reconstruct a historical timeline. The teacher has left scattered image and text components on the IFP screen. The group must debate and drag these components into a logical sequence.
                  </li>
                  <li><strong>5. Math Manipulatives (Fractions & Geometry)</strong>
                    <br/>Instead of multiple-choice questions, the IFP displays digital manipulatives (like fraction blocks or 3D geometry nets). Students must use pinch-and-rotate gestures to fold virtual 2D nets into 3D shapes to prove their answers.
                  </li>
                  <li><strong>6. Storyboard Sequencing (Language)</strong>
                    <br/>Students at this station are tasked with arranging the plot of a fable. The IFP displays 8 blank comic panels and 8 randomized scenes. Collaboratively, they discuss the orientation, complication, and resolution by moving the scene panels into the correct chronological order.
                  </li>
                  <li><strong>7. Peer-Review Using the Document Camera</strong>
                    <br/>If the IFP setup includes a document camera, students place their physical work from the previous Offline Station under the lens. The work is projected onto the IFP, and the group uses red/green digital ink to correct their peers' work.
                  </li>
                  <li><strong>8. Block Coding Simulation</strong>
                    <br/>Students run Scratch or Blockly on the IFP. Because the screen is massive, the code is visible to the whole group. They assign roles: a "Navigator" who dictates the logic, and a "Driver" who drags the code blocks on the touch screen.
                  </li>
                  <li><strong>9. Digital Escape Room (Gamification)</strong>
                    <br/>The teacher has configured an interactive presentation with hidden links (similar to an Escape Room). The group must search for clues on the screen, touch the correct objects, and solve password puzzles on the IFP to "escape" the station before the rotation bell rings.
                  </li>
                  <li><strong>10. The "Self-Check" Kiosk (Autonomous Assessment)</strong>
                    <br/>At the IFP station, students open a group interactive quiz app. The IFP immediately displays scores and automated feedback for their answers. This serves as a rapid <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">formative assessment</a> without requiring teacher intervention.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2-Hour Station Rotation Scenario (Math: 2D Geometry)</h2>
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-emerald-200 pb-2">70-Minute Rotation Choreography (3 Groups, 10 Students Each)</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Opening (10 Minutes):</strong> The teacher positions the IFP in the center, explains the rotation rules, and sets a large Visual Timer on the IFP that will chime every 20 minutes.</li>
                    <li><strong>Rotation 1 (20 Minutes):</strong> 
                      <br/><em>Group A (Teacher Station):</em> Discussing triangle area misconceptions directly with the teacher.
                      <br/><em>Group B (Independent Station):</em> Working on a worksheet involving cutting origami paper to form nets at the back desks.
                      <br/><em>Group C (IFP Tech Station):</em> Opening GeoGebra on the IFP to manipulate digital triangle heights and bases collaboratively.
                    </li>
                    <li><strong>Rotation 2 (20 Minutes):</strong> Groups rotate. A moves to Independent, B moves to IFP, C moves to Teacher. The IFP resets automatically or by student command.</li>
                    <li><strong>Rotation 3 (20 Minutes):</strong> Final rotation. All groups have now experienced teacher intimacy, independent focus, and IFP technological collaboration.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Teacher Preparation Checklist (Pre-Rotation)</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-emerald-500 mr-2">✓</span> Is the physical flow of the classroom clear? (Ensure no cables trip students as they rotate to the IFP).</li>
                  <li><span className="text-emerald-500 mr-2">✓</span> Are the instructions on the IFP crystal clear so students don't have to shout across the room to ask the teacher what to do?</li>
                  <li><span className="text-emerald-500 mr-2">✓</span> Is the Visual Timer running audibly to manage the rotation choreography?</li>
                </ul>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleStationRotationIfpEn;
