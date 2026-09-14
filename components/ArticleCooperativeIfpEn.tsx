import React, { useEffect } from 'react';

interface ArticleCooperativeIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleCooperativeIfpEn: React.FC<ArticleCooperativeIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cooperative Learning Using Interactive Flat Panel | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Master cooperative learning with an IFP. Discover how to structure group work, assign roles, and ensure positive interdependence using an interactive display."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/cooperative-learning-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/pembelajaran-kooperatif-menggunakan-ifp';
    const enUrl = window.location.origin + '/en/journal/cooperative-learning-using-interactive-flat-panel';

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

    const scriptId = 'article-cooperative-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Cooperative Learning Using Interactive Flat Panel",
          "description": "Master cooperative learning with an IFP. Discover how to structure group work, assign roles, and ensure positive interdependence using an interactive display.",
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
            "@id": window.location.origin + "/en/journal/cooperative-learning-using-interactive-flat-panel"
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
              "name": "Cooperative Learning Using IFP",
              "item": window.location.origin + "/en/journal/cooperative-learning-using-interactive-flat-panel"
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
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Learning Models</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Cooperative Learning Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-emerald-500 pl-4">
                  "Sitting in groups does not automatically mean students are working together. Real cooperation is born from structures that enforce interdependence. The IFP serves as a visual control center where individual contributions become an inseparable part of collective success."
                </p>
                <p>
                  Many teachers mistakenly believe that dividing students into round tables and handing out a group assignment constitutes cooperative learning. In reality, without clear structure, group work often results in the smartest student doing all the work while the others coast along. Implementing <strong>Cooperative Learning using an Interactive Flat Panel (IFP)</strong> brings a significant shift. The interactive screen becomes the medium where individual accountability, specific roles, and group interaction are visibly enforced.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. What is Cooperative Learning?</h2>
                <p>
                  Cooperative learning is a structured instructional strategy in which students work in small, heterogeneous groups to achieve a common goal. The success of the group is strictly dependent on the success of each of its members. In this approach, students do not compete with one another, nor do they work individualistically without regard for their peers.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Why "Group Work" is not always Cooperative Learning</h2>
                <p>
                  In traditional group work, the instruction is usually: "Work on this together." The result? One person thinks, one writes, and the rest chat. Cooperative learning prevents this by designing structures that make it impossible for the group to succeed if any single member fails to contribute.
                </p>
                <p>
                  It is important to distinguish cooperative learning from similar approaches:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="/en/journal/collaborative-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfpEn', '/en/journal/collaborative-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Collaborative Learning</a>: Similar, but generally more flexible and doesn't always mandate the strict role structures of cooperative learning.</li>
                  <li><strong>Problem-Based Learning (PBL)</strong>: Focuses on solving an open-ended problem as the starting point of learning.</li>
                  <li><strong>Project-Based Learning (PjBL)</strong>: Focuses on creating a tangible, long-term product.</li>
                </ul>
                <p>
                  Cooperative learning is often the underlying organizational method used *within* PBL or PjBL.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. The 5 Essential Elements of Cooperative Learning</h2>
                <p>According to Johnson & Johnson, for learning to be truly cooperative, it must contain:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Positive Interdependence:</strong> "We sink or swim together."</li>
                  <li><strong>Individual Accountability:</strong> Each student must be responsible for their share of the work and understanding.</li>
                  <li><strong>Face-to-Face Promotive Interaction:</strong> Students encourage and facilitate each other's efforts to learn.</li>
                  <li><strong>Interpersonal and Small-Group Skills:</strong> Leadership, decision-making, and conflict resolution must be explicitly taught.</li>
                  <li><strong>Group Processing:</strong> Discussing how well they are achieving their goals and maintaining effective working relationships.</li>
                </ol>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Cooperative Learning Strategies on the IFP</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. Digital Jigsaw:</strong> The teacher divides a complex text into four parts. "Expert groups" meet to study their assigned part using the IFP to pull up multimedia context. They then return to their "home groups" and use the IFP to present their expertise to their peers.</li>
                  <li><strong>2. Think-Pair-Share with Live Polling:</strong> Pose a question on the IFP. Students think alone, discuss with a partner, and then cast their consensus answer to the IFP's live polling software.</li>
                  <li><strong>3. Numbered Heads Together (Digital Randomizer):</strong> Assign students in a group numbers 1-4. The group discusses a problem. The teacher uses a digital spinning wheel on the IFP to randomly select a number. Only that student can answer for the group, ensuring everyone must understand the material.</li>
                  <li><strong>4. Role Badges on the Whiteboard:</strong> Use the IFP to display group roles (Facilitator, Timekeeper, Recorder, Checker). Students must drag their digital avatar to their assigned role for the day before work begins.</li>
                  <li><strong>5. RoundRobin Brainstorming:</strong> Open a multi-column digital whiteboard on the IFP. Groups take turns sending a member to the board to add one unique idea to their column until time runs out.</li>
                  <li><strong>6. Send-a-Problem (Digital Version):</strong> Group A creates a math problem on their tablet and casts it to Group B's designated section on the IFP. Group B must solve it on the board while Group A evaluates their logic.</li>
                  <li><strong>7. Co-op Co-op:</strong> Groups research a topic and create a mini-lesson. They use the IFP to present their lesson to the whole class, incorporating interactive elements to test their peers' understanding.</li>
                  <li><strong>8. Team Games Tournament (TGT):</strong> Host an academic tournament on the IFP. Students from different groups but similar academic levels compete at the board to earn points for their respective home teams.</li>
                  <li><strong>9. Visual Group Processing:</strong> At the end of a project, display a rubric on the IFP. Each group comes up and uses a digital highlighter to self-evaluate their teamwork and communication skills.</li>
                  <li><strong>10. The Digital "Placemat" Consensus:</strong> Divide the IFP screen into four corners and a center circle. Four students simultaneously write their individual thoughts in their respective corners. They then discuss and write their agreed-upon consensus in the center circle.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Integrating with Classroom Management</h2>
                <p>
                  Effective cooperative learning requires robust <a href="/en/journal/classroom-management-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfpEn', '/en/journal/classroom-management-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Classroom Management</a>. The IFP helps by displaying visual timers, noise-level meters, and clear behavioral expectations. When students know exactly how much time they have and what their specific role is, cooperative tasks run smoothly without descending into chaos.
                </p>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCooperativeIfpEn;
