import React, { useEffect } from 'react';
import { AdSenseInArticle } from './AdSenseInArticle';

interface ArticleVisualIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleVisualIfpEn: React.FC<ArticleVisualIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Visual Learning Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A comprehensive guide to implementing Visual Learning strategies using an IFP. Translate complex concepts into spatial diagrams, mind maps, and interactive visual structures."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/visual-learning-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/pembelajaran-berbasis-visual-menggunakan-ifp';
    const enUrl = window.location.origin + '/en/journal/visual-learning-using-interactive-flat-panel';

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

    const scriptId = 'article-visual-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Visual Learning and Thinking Using an IFP",
          "description": "A comprehensive guide to implementing Visual Learning strategies using an IFP. Translate complex concepts into spatial diagrams, mind maps, and interactive visual structures.",
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
            "@id": window.location.origin + "/en/journal/visual-learning-using-interactive-flat-panel"
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
              "name": "Visual Learning Using IFP",
              "item": window.location.origin + "/en/journal/visual-learning-using-interactive-flat-panel"
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
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Methodology</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Visual Learning and Thinking Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-rose-500 pl-4">
                  "The brain processes visual information 60,000 times faster than text. In a modern classroom, the Interactive Flat Panel is not just a screen to display text; it is an infinite digital canvas designed to translate complex ideas into clear, spatial structures."
                </p>
                <p>
                  <strong>Visual Learning</strong> (or Visual Thinking) is a pedagogical approach that empowers students to construct knowledge through spatial diagrams, images, colors, and mapping. It helps demystify complex theories by converting them into visual models that students can manipulate. When equipped with an <strong>Interactive Flat Panel (IFP)</strong>, visual learning transcends static posters—it becomes a highly interactive, <a href="/en/journal/collaborative-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfpEn', '/en/journal/collaborative-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">collaborative</a> experience.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Why the IFP is the Ultimate Visual Tool</h2>
                <p>
                  While whiteboards rely on markers and projectors rely on static slides, the IFP merges the two. Its expansive multi-touch surface allows students to drag, drop, pinch-to-zoom, and color-code concepts instantly, transforming abstract thought processes into tangible visual artifacts right before the class's eyes.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Interactive Visual Activities on the IFP</h2>
                <p>
                  Here are 10 ways to shift from text-heavy instruction to spatial, visual thinking using your IFP:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. Giant Venn Diagram Analysis</strong>
                    <br/>The IFP displays two massive overlapping circles. The teacher scatters characteristics of two different eras or concepts below. Students come up and drag-and-drop these characteristics onto the left, right, or intersecting middle section.
                  </li>
                  <li><strong>2. "See-Think-Wonder" Image Analysis</strong>
                    <br/>The teacher projects an ambiguous, high-resolution image full-screen. The screen is divided into three columns: <em>I See</em>, <em>I Think</em>, and <em>I Wonder</em>. Students take turns using the digital pen to differentiate between pure observation, assumption, and curiosity.
                  </li>
                  <li><strong>3. Infinite Mind Mapping</strong>
                    <br/>To summarize a large unit, the IFP opens an infinite whiteboard canvas. The main topic is placed in the center. The whole class works together to draw branches, add icons, import images from the browser, and color-code nodes to represent relationships.
                  </li>
                  <li><strong>4. Sequencing the Story (Literature & Logic)</strong>
                    <br/>To teach narrative plot, the teacher scrambles 8 key illustrated scenes from a novel on the touch screen. Students must debate and swipe these panels into a logical sequence of orientation, climax, and resolution.
                  </li>
                  <li><strong>5. Causal Chain Concept Maps (Cause & Effect)</strong>
                    <br/>Students investigate global warming. They write dozens of variables on digital sticky notes on the IFP. Then, using digital ink, they draw thick and thin lines to visually demonstrate the strength of the cause-and-effect relationships between those variables.
                  </li>
                  <li><strong>6. Visual Math: Geometry Manipulation</strong>
                    <br/>Instead of rote-memorizing area formulas, students use the IFP to digitally "slice" a virtual parallelogram and move the triangular piece from the left to the right, visually proving that the shape is equivalent to a rectangle.
                  </li>
                  <li><strong>7. "Spotlight" on Historical Documents</strong>
                    <br/>The teacher displays a scanned ancient manuscript. Using the IFP's <em>Spotlight</em> or <em>Magnifier</em> feature, the screen is darkened except for one small area illuminated by a student's finger, forcing the class to focus purely on analyzing the specific text without distraction.
                  </li>
                  <li><strong>8. Emotion Annotation (Social-Emotional Learning)</strong>
                    <br/>A close-up photograph of a character's facial expression is displayed. Students draw arrows from the eyes, eyebrows, and posture to the empty space on the IFP, visually describing the body language that indicates anxiety or joy.
                  </li>
                  <li><strong>9. Real-Time Data Dashboarding</strong>
                    <br/>The class conducts a live survey. The raw data table is shown on the IFP. Students use touch gestures to instantly convert the table into a pie chart or bar graph, visualizing the data proportions to make them readable at a glance.
                  </li>
                  <li><strong>10. Visual Exit Ticket (Formative Assessment)</strong>
                    <br/>At the end of class, the teacher asks students to "draw" (not write) one concept they learned today on their tablets. These sketches are cast wirelessly to the IFP, creating a mosaic of class comprehension as a <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">visual formative assessment</a>.
                  </li>
                </ul>

                <AdSenseInArticle />

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2-Hour Visual Scenario: "The Water Cycle Mystery" (Elementary Science)</h2>
                <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-rose-200 pb-2">Practical Scenario (70-80 Minutes) - Visual Thinking Application</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Initial Visual Appreciation (10 Minutes):</strong> The teacher turns off the lights and plays a silent 4K time-lapse video on the IFP: heavy clouds gathering, then rain falling. Using the <em>See-Think-Wonder</em> routine, students pause the video and annotate what they see directly over the frozen frame using transparent digital ink.</li>
                    <li><strong>Building a Visual Model (25 Minutes):</strong> The screen is cleared and replaced with a blank landscape of mountains and the sea. Disconnected icons (Sun, Vapor Arrows, Rain Clouds, Water Drops) are scattered. Student representatives logically position these components, connecting the sun to the sea with a red pen (Evaporation) and clouds to the land with a blue pen (Precipitation).</li>
                    <li><strong>"What If" Analysis (20 Minutes):</strong> The teacher touches the screen and deletes the forest area (simulating deforestation). The teacher asks, <em>"Visually, which arrows will disappear if the forest is cut down?"</em> A student erases the Transpiration arrows. Through visual manipulation, students grasp the impact of deforestation without reading lengthy texts.</li>
                    <li><strong>Visual Reflection (15 Minutes):</strong> Each student independently redraws the water cycle model in their notebook from memory. Finally, the class selects one student's drawing to be scanned and displayed on the IFP as the concluding summary.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Common Teacher Mistakes in Visual Approaches</h2>
                <p>
                  The primary failure in visual learning is <em>"Visual Overload"</em>. Adding flashy animations, moving text, purposeless colors, and decorative clip-art will actually shatter student concentration. Visuals must be functional, not merely decorative.
                </p>
                <p>
                  Embrace the principle of <strong>Negative Space</strong>. Do not be afraid to leave 60% of your IFP screen pure white. That empty space naturally guides the students' eyes directly to the object or model being analyzed, reducing cognitive overload.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleVisualIfpEn;
