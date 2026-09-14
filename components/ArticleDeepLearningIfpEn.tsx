import React, { useEffect } from 'react';

interface ArticleDeepLearningIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleDeepLearningIfpEn: React.FC<ArticleDeepLearningIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Meaningful Learning Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A guide to facilitating Meaningful Learning using an IFP. Move beyond passive consumption and create joyful, mindful, and profound learning experiences."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/meaningful-learning-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas';
    const enUrl = window.location.origin + '/en/journal/meaningful-learning-using-interactive-flat-panel';

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

    const scriptId = 'article-deep-learning-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Meaningful Learning Using Interactive Flat Panel",
          "description": "A guide to facilitating Meaningful Learning using an IFP. Move beyond passive consumption and create joyful, mindful, and profound learning experiences.",
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
            "@id": window.location.origin + "/en/journal/meaningful-learning-using-interactive-flat-panel"
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
              "name": "Meaningful Learning Using IFP",
              "item": window.location.origin + "/en/journal/meaningful-learning-using-interactive-flat-panel"
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
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Innovative Pedagogy</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Meaningful Learning Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-amber-500 pl-4">
                  "The IFP itself is not meaningful learning. The IFP is the tool that helps teachers design learning experiences that are mindful, joyful, and profound."
                </p>
                <p>
                  When an Interactive Flat Panel (IFP) arrives in the classroom, it is easy to get caught up in the technology: the touch screen, the high resolution, and the flashy apps. However, the greatest challenge is not operating the screen, but ensuring that the interactions happening on it result in <strong>Meaningful Learning</strong> (often referred to as Deeper Learning). Technology should serve as a vehicle toward richer understanding, not just a visual decoration at the front of the room.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. What is Meaningful Learning?</h2>
                <p>
                  Meaningful learning is often misunderstood as "learning more material" or "giving harder assignments." In reality, meaningful learning is about creating connections. It occurs when students do not just memorize facts, but understand underlying concepts, apply knowledge to novel problems, and reflect on their own learning process.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Three Principles of Meaningful Learning on the IFP</h2>
                <p>
                  Meaningful learning ideally fulfills three main criteria, and the IFP can support all of them:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Mindful:</strong> Students know what they are learning and why it matters. <br />
                    <em>IFP Role:</em> The teacher projects a visual syllabus or mind map at the start of class to build a clear orientation, allowing students to track their progress collectively.
                  </li>
                  <li>
                    <strong>Meaningful Connections:</strong> Material connects with the students' real world. <br />
                    <em>IFP Role:</em> Students explore satellite maps or economic simulations on the large screen, making abstract material tangible.
                  </li>
                  <li>
                    <strong>Joyful:</strong> Positive emotional and cognitive engagement. <br />
                    <em>IFP Role:</em> Through gamification, <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">evaluations</a> become fun, collaborative problem-solving activities rather than stressful tests.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. The Three Stages of Meaningful Learning</h2>
                <p>
                  Meaningful learning activities can be focused on three main stages: <strong>Understanding, Applying, and Reflecting.</strong>
                </p>
                
                <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Stage 1: Understanding (Concept Building)</h3>
                <p>
                  At this stage, IFP activities should be participatory explorations. Instead of a one-way presentation, students take turns coming to the IFP to build a mind map of a historical event or use digital tools to dissect a virtual plant. They build conceptual understanding, not just passive observation.
                </p>
                
                <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Stage 2: Applying (Knowledge Transfer)</h3>
                <p>
                  This stage tests whether students can use their knowledge in new contexts, which aligns well with <a href="/en/journal/authentic-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAuthenticAssessmentIfpEn', '/en/journal/authentic-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Authentic Assessment</a> practices. Here, <a href="/en/journal/collaborative-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfpEn', '/en/journal/collaborative-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Collaborative Learning</a> is crucial. The teacher divides the class into teams. Teams approach the IFP to classify items via drag-and-drop or work together to solve a math simulation on a split-screen.
                </p>
                
                <h3 className="text-xl font-bold text-[#0C1A69] mt-6">Stage 3: Reflecting (Metacognition)</h3>
                <p>
                  Meaningful learning requires metacognition—thinking about thinking. At the end of a lesson, the IFP becomes a reflection board. Students can cast their thoughts from their devices to a shared digital wall on the IFP, answering questions like, "What surprised me today?" or "What strategy worked best for my team?"
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Ways to Deepen Learning with the IFP</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. "Why Does This Matter?" Board:</strong> Dedicate a permanent section of the digital whiteboard to the real-world application of the day's topic.</li>
                  <li><strong>2. Student-Led Tutorials:</strong> Have students use the IFP's screen recording feature to teach a concept to their peers.</li>
                  <li><strong>3. Socratic Seminars:</strong> Use the IFP to display a controversial image or quote to anchor a deep, structured class debate.</li>
                  <li><strong>4. Virtual Field Trips:</strong> Use Google Earth on the IFP to virtually visit the historical sites being discussed.</li>
                  <li><strong>5. Data Storytelling:</strong> Have students analyze raw data on the IFP and manipulate it to find patterns and tell a story.</li>
                  <li><strong>6. Cross-Curricular Projects:</strong> Combine math, science, and art on a single digital canvas.</li>
                  <li><strong>7. The "Parking Lot":</strong> Create a digital space on the IFP where students can "park" deep questions that arise during the lesson to be addressed later.</li>
                  <li><strong>8. Error Analysis:</strong> Analyze a deliberate mistake on the IFP to understand the logic behind the error.</li>
                  <li><strong>9. Multimedia Synthesis:</strong> Combine video, audio, text, and student drawings on the IFP to create a rich tapestry of a concept.</li>
                  <li><strong>10. Global Connections:</strong> Use the IFP's video conferencing tools to connect your classroom with experts or students in other countries.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">The Teacher's Role</h2>
                <p>
                  To achieve meaningful learning, the teacher must transition from a content deliverer to a learning designer. The IFP is a powerful instrument, but it relies on the teacher to orchestrate the inquiry, collaboration, and reflection that make learning truly profound. By prioritizing <a href="/en/journal/diagnostic-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDiagnosticIfpEn', '/en/journal/diagnostic-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Diagnostic</a> and Formative assessments, educators can tailor this meaningful journey to the specific needs of their students.
                </p>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDeepLearningIfpEn;
