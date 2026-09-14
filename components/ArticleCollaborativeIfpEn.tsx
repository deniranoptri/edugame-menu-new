import React, { useEffect } from 'react';

interface ArticleCollaborativeIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleCollaborativeIfpEn: React.FC<ArticleCollaborativeIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Collaborative Learning Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A guide to implementing Collaborative Learning using an IFP. Transform your classroom from a passive listening environment into an interactive workspace."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/collaborative-learning-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas';
    const enUrl = window.location.origin + '/en/journal/collaborative-learning-using-interactive-flat-panel';

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

    const scriptId = 'article-collaborative-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Collaborative Learning Using IFP in the Classroom",
          "description": "A guide to implementing Collaborative Learning using an IFP. Transform your classroom from a passive listening environment into an interactive workspace.",
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
            "@id": window.location.origin + "/en/journal/collaborative-learning-using-interactive-flat-panel"
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
              "name": "Collaborative Learning Using IFP",
              "item": window.location.origin + "/en/journal/collaborative-learning-using-interactive-flat-panel"
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
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Methodology</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Collaborative Learning Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-teal-500 pl-4">
                  "When the classroom touch screen stops being the teacher's monopoly and starts becoming the students' interaction canvas, that is when true collaborative learning happens."
                </p>
                <p>
                  Technology is often accused of making students individualistic, glued to their personal screens, and socially isolated. However, this is not true when we implement <strong>Collaborative Learning using an Interactive Flat Panel (IFP)</strong>. With ample screen real estate and the ability to respond to multiple touches simultaneously, the IFP has enormous potential to transform the classroom from a place of mere listening into a space for cooperation, debate, and problem-solving.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. What is Collaborative Learning?</h2>
                <p>
                  Collaborative learning is more than just placing students at the same table and having them complete a single worksheet. Genuine collaborative learning requires positive interdependence, face-to-face interaction, interpersonal communication, and individual accountability. Through group learning, students learn to share ideas, defend arguments, engage in peer learning, and take collective responsibility.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Why the IFP is Perfect for Collaborative Learning?</h2>
                <p>
                  While conventional group work is usually limited to a piece of poster board on a desk, the IFP elevates interaction to a larger stage:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Classroom Visibility:</strong> A large touch screen (typically 65 to 86 inches) ensures that one group's discussion and output can be seen and critiqued instantly by the entire class.</li>
                  <li><strong>Multi-Touch Capability:</strong> Modern IFPs can detect 20 to 40 touch points simultaneously. This means two, three, or four students can step up and interact with the digital canvas at the same time without waiting.</li>
                  <li><strong>Shared Workspace:</strong> The IFP provides an infinite digital whiteboard where students can perform visual activities with immediate feedback.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. How to Manage Groups at the IFP</h2>
                <p>
                  Bringing a group of students to cluster in front of a screen without guidance will only cause chaos. Classroom management is critical during IFP group activities:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Group Size:</strong> Ideally, groups consist of 3–5 students. A maximum of 3 students should interact with the screen simultaneously to prevent crowding.</li>
                  <li><strong>Student Roles:</strong> Establish clear roles. Who is the "Operator" (writing/drawing on the screen), the "Researcher" (looking up references on a tablet), and the "Speaker" (presenting arguments)? Rotate these roles.</li>
                  <li><strong>Turn-Taking Rules:</strong> Create clear rules about when students can approach the screen. This prevents an "alpha" student from dominating the group. Students not touching the screen must remain active by providing verbal input.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Collaborative Activity Ideas Using the IFP</h2>
                
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. Simultaneous Drag-and-Drop:</strong> Display random objects or concepts. Because the IFP supports multi-touch, Student A can drag objects to the left column while Student B drags to the right column simultaneously.</li>
                  <li><strong>2. Group Mind Mapping:</strong> Write a central topic on the digital whiteboard. Group members take turns using different pen colors to add branches, images, or annotations, building a comprehensive visual map.</li>
                  <li><strong>3. Visual Sequencing:</strong> Scramble the chronological events of a story or a mathematical procedure. The group debates and arranges the sequence blocks vertically on the screen.</li>
                  <li><strong>4. Split-Screen Problem Solving:</strong> Display a complex word problem. Split the screen into two zones. Two different groups can step up and work on their respective approaches simultaneously.</li>
                  <li><strong>5. Data and Image Analysis:</strong> Display an infographic or historical photograph. The group approaches the IFP to highlight important sections while presenting their findings to the class.</li>
                  <li><strong>6. Peer Editing:</strong> Display a student essay (anonymized). The group uses the digital pen to collaboratively edit, correct grammar, and improve sentence structure on the board.</li>
                  <li><strong>7. Brainstorming Grid:</strong> Create a 2x2 grid (e.g., SWOT analysis). Four students take one quadrant each and simultaneously write their ideas using their fingers or styluses.</li>
                  <li><strong>8. Gamified Quiz Teams:</strong> Use interactive educational games where teams must agree on an answer before one representative touches the correct option on the IFP.</li>
                  <li><strong>9. Interactive Concept Sorting:</strong> Display dozens of vocabulary words. The group must collaboratively sort them into "Nouns", "Verbs", and "Adjectives" before a visible timer runs out.</li>
                  <li><strong>10. Collaborative Story Building:</strong> Start with a single sentence on the IFP. Each group member takes a turn adding one sentence to build a complete, cohesive paragraph.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Integration with Other Strategies</h2>
                <p>
                  Collaborative Learning on the IFP pairs exceptionally well with other methodologies. For example, you can implement <a href="/en/journal/differentiated-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfpEn', '/en/journal/differentiated-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Differentiated Learning</a> by providing different levels of digital scaffolds on the IFP for different groups. Alternatively, you can use the IFP's collaborative canvas to conduct <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Formative Assessment</a>, observing how groups negotiate answers in real-time.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCollaborativeIfpEn;
