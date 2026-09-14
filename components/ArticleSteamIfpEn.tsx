import React, { useEffect } from 'react';

interface ArticleSteamIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleSteamIfpEn: React.FC<ArticleSteamIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "STEAM Learning Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A comprehensive guide to implementing integrated STEAM (Science, Technology, Engineering, Art, Mathematics) learning using an Interactive Flat Panel in the classroom."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/steam-learning-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/pembelajaran-steam-menggunakan-ifp';
    const enUrl = window.location.origin + '/en/journal/steam-learning-using-interactive-flat-panel';

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

    const scriptId = 'article-steam-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "STEAM Learning Using IFP in the Classroom",
          "description": "A comprehensive guide to implementing integrated STEAM (Science, Technology, Engineering, Art, Mathematics) learning using an Interactive Flat Panel in the classroom.",
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
            "@id": window.location.origin + "/en/journal/steam-learning-using-interactive-flat-panel"
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
              "name": "STEAM Learning Using IFP",
              "item": window.location.origin + "/en/journal/steam-learning-using-interactive-flat-panel"
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
                  STEAM Learning Using Interactive Flat Panel in the Classroom
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-purple-500 pl-4">
                  "The real world does not separate problems into 'Science period' and 'Art period'. Real problems demand cross-disciplinary solutions. Through the STEAM approach, we do not merely teach theory; we educate future innovators. And there is no more powerful canvas for innovation in the modern classroom than the Interactive Flat Panel."
                </p>
                
                <p>
                  STEAM (Science, Technology, Engineering, Art, Mathematics) education is a paradigm shift in how we prepare students for the 21st century. It transforms isolated subjects into a cohesive, project-driven learning experience. When paired with an <strong>Interactive Flat Panel (IFP)</strong>, STEAM transitions from abstract concepts into a highly visual, manipulative, and collaborative process right at the front of the classroom.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Why is an IFP Essential for STEAM?</h2>
                <p>
                  STEAM relies heavily on design thinking, data analysis, and prototyping. A traditional whiteboard cannot run physics simulations or 3D modeling software. Conversely, individual laptops often isolate students into personal silos.
                </p>
                <p>
                  The IFP acts as a shared digital hub. With its expansive 4K display and multi-touch capabilities, a team of students can simultaneously sketch engineering blueprints, analyze mathematical data sets, and refine aesthetic designs (Art) on a single, unified canvas.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Interactive STEAM Activities Using an IFP</h2>
                <p>
                  Here are practical ways to integrate the IFP across multiple disciplines simultaneously:
                </p>
                <ul className="list-none space-y-6 mt-4">
                  <li><strong>1. Virtual Bridge Stress Test (E-M)</strong>
                    <br/>The teacher opens a physics simulation application (like PhET). Students design a bridge structure on the IFP using digital beams, then apply artificial gravity to observe the mathematical tension on the screen before building an actual model out of popsicle sticks.
                  </li>
                  <li><strong>2. Coding Maze Challenge (T-M)</strong>
                    <br/>Display a visual block coding platform (such as Scratch) on the IFP. In groups, students approach the screen and drag command blocks ("Move 3 steps", "Turn 90 degrees") to guide a character through a Cartesian coordinate maze.
                  </li>
                  <li><strong>3. Anatomy of a Masterpiece (S-A)</strong>
                    <br/>Display a classic painting (e.g., the Mona Lisa or a Van Gogh work) in 4K resolution. Students dissect the "Science behind the Art" by annotating the screen with different colors to highlight focal light points, symmetry, and color pigments.
                  </li>
                  <li><strong>4. Water Filter Blueprint (S-E-A)</strong>
                    <br/>Students are challenged to create a dirty water filter. Before assembling the real device, they must present their filter schematic on the IFP whiteboard. They draw layers of gravel, sand, and charcoal, and design the aesthetic exterior of the tube (Art).
                  </li>
                  <li><strong>5. Real-Time Weather Data (S-T-M)</strong>
                    <br/>Open the IFP browser to access local weather satellite data. Students take turns reading mathematical data (rainfall, temperature, humidity). They then open a spreadsheet and convert this data into colorful bar charts to present to the audience.
                  </li>
                  <li><strong>6. Cell Mitosis Stop-Motion (S-T-A)</strong>
                    <br/>Students create modeling clay art representing cell division (mitosis). Each phase is photographed and cast to the IFP. At the front of the class, students arrange these photos in the correct sequence and play them as an animation while recording a voice-over.
                  </li>
                  <li><strong>7. Energy Conservation Campaign (S-A-M)</strong>
                    <br/>Students calculate the school's electricity bill (Math) based on lighting data (Science). They then design a digital campaign poster directly using graphic software on the IFP. The typography and layout are presented to the class (Art).
                  </li>
                  <li><strong>8. Startup-Style Pitching (All Elements)</strong>
                    <br/>The pinnacle of <a href="/en/journal/project-based-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articlePjblIfpEn', '/en/journal/project-based-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">project-based learning (PBL)</a>. Students use the IFP like Silicon Valley entrepreneurs to pitch their STEAM product (e.g., a homemade flood alarm). They broadcast product videos, component schematics, and cost calculations.
                  </li>
                  <li><strong>9. Geometric Tessellation Art (M-A)</strong>
                    <br/>Combining geometric patterns and mosaic aesthetics. Students utilize the clone/duplicate tool on the IFP to create gapless floor tile patterns (tessellations), then color them using harmonious complementary palettes.
                  </li>
                  <li><strong>10. Interactive Circuit Board (S-T-E)</strong>
                    <br/>Using an electrical circuit simulator. Students draw lines on the IFP that act as virtual wires, connecting batteries, switches, and light bulbs. If the voltage and resistance calculations are correct (Math), the animated light bulb on the IFP illuminates.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2-Hour STEAM Lesson Scenario: "Designing a Green City Park"</h2>
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-purple-200 pb-2">Practical 2-Hour Scenario (70-80 Minutes) - City Park (Elementary/Middle School)</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Ask Phase (10 Minutes):</strong> The teacher displays drone footage of urban air pollution. Using the IFP's annotation feature, the teacher circles a vacant lot. Driving question: <em>"How can we design a park in this vacant lot to reduce pollution while serving as an aesthetic recreational space?"</em></li>
                    <li><strong>B. Imagine Phase (15 Minutes):</strong> Students are divided into groups (architects, botanists, financial planners). The IFP is split into 4 sections using <em>split-screen</em>. Group delegates step up to write their wild ideas simultaneously.</li>
                    <li><strong>C. Plan Phase (20 Minutes):</strong> The IFP functions as an architect's drafting table (Engineering & Math). The teacher projects a grid paper background. One representative draws the park layout (calculating tree area vs. play area) to scale (1 square = 1 meter).</li>
                    <li><strong>D. Create & Art Phase (20 Minutes):</strong> Groups select plant species that absorb high carbon levels (Science). They then design an aesthetic fountain (Art). Every decision is drawn and added to the central layout on the IFP.</li>
                    <li><strong>E. Improve / Evaluation Phase (15 Minutes):</strong> Presentation of the final layout. Other groups provide critical feedback, "Is this path too narrow for a wheelchair?" As a <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">formative assessment</a>, the interactive sketch is exported (save to QR/Cloud) as a class portfolio.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Tool and Noise Management Strategy</h2>
                <p>
                  STEAM projects are prone to making the classroom loud and chaotic. Ensure there is clear role delegation. Establish who the Project Manager is, who has the right to step up and touch the IFP, and who is responsible for recording the sketch results. Use strict classroom management strategies, such as a "Hands-off timer" displayed on the screen (when the timer rings, all students must put down their tools and refrain from touching the IFP while the teacher provides further instruction).
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Teacher Preparation Checklist (Pre-STEAM)</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-purple-500 mr-2">✓</span> Are the supporting software/simulations (PhET, Scratch, GeoGebra) installed and accessible via the IFP browser?</li>
                  <li><span className="text-purple-500 mr-2">✓</span> Is the idea-sharing canvas layout configured to prevent students from fighting over screen space?</li>
                  <li><span className="text-purple-500 mr-2">✓</span> Is the integration of the 5 elements (S-T-E-A-M) truly balanced, rather than just a standard craft lesson?</li>
                  <li><span className="text-purple-500 mr-2">✓</span> Is the local Wi-Fi network stable if students will be casting/mirroring their tasks to the IFP screen?</li>
                </ul>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSteamIfpEn;
