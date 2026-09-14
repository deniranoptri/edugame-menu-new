import React, { useEffect } from 'react';

interface ArticlePseIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticlePseIfpEn: React.FC<ArticlePseIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Social-Emotional Learning Using Interactive Flat Panel | Teacher Journal";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A practical guide to facilitating Social-Emotional Learning (SEL) using an Interactive Flat Panel. Explore interactive strategies for self-awareness and empathy."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/social-emotional-learning-using-interactive-flat-panel');

    const idUrl = window.location.origin + '/jurnal-guru/pembelajaran-sosial-emosional-menggunakan-ifp';
    const enUrl = window.location.origin + '/en/journal/social-emotional-learning-using-interactive-flat-panel';

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

    const scriptId = 'article-pse-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Social-Emotional Learning Using Interactive Flat Panel",
          "description": "A practical guide to facilitating Social-Emotional Learning (SEL) using an Interactive Flat Panel. Explore interactive strategies for self-awareness and empathy.",
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
          "datePublished": "2024-01-20",
          "dateModified": "2024-01-20",
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
              "name": "Social-Emotional Learning Using IFP",
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
      <div className="bg-emerald-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-full opacity-50"></div>
            
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-bold mb-8 transition-colors text-sm uppercase tracking-wider"
            >
              <svg className="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK TO JOURNAL
            </button>

            <article className="prose prose-lg md:prose-xl max-w-none text-gray-700">
              <header className="mb-10">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Social Emotional</span>
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                  Social-Emotional Learning Using Interactive Flat Panel
                </h1>
                <p className="text-sm font-bold text-gray-500">By: Deni Ranoptri, M.Pd</p>
              </header>
              
              <div className="animate-fadeIn space-y-6 text-justify">
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-emerald-500 pl-4">
                  "Technology shouldn't distance students from their humanity. When utilized empathetically, the Interactive Flat Panel becomes a powerful canvas for visualizing complex emotions and fostering social awareness."
                </p>

                <p>
                  Often, educational technology is exclusively viewed as a cognitive tool—used to display scientific simulations, calculate complex formulas, or parse historical timelines. However, the most profound pedagogical shifts occur when technology supports psychological well-being. <strong>Social-Emotional Learning (SEL) using an Interactive Flat Panel (IFP)</strong> transforms abstract, difficult-to-articulate emotions into tangible, interactive, and communal experiences.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Why the IFP is Highly Effective for SEL</h2>
                <p>
                  SEL requires vulnerability. For many students, particularly younger ones or introverts, verbalizing emotions is daunting. The IFP bridges this gap by offering visual scaffolds. Through dragging and dropping emotional indicators, participating in anonymous digital polling, or drawing collective "class charters," the massive screen normalizes emotional expression by making it a shared, highly visible classroom ritual.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5 Core Competencies of SEL & the Role of the IFP</h2>
                <p>
                  According to CASEL (Collaborative for Academic, Social, and Emotional Learning), SEL comprises five core pillars. Here is how the IFP can uniquely activate each:
                </p>

                <ul className="list-none pl-0 space-y-6">
                  <li>
                    <strong className="block text-gray-900 mb-1">1. Self-Awareness</strong>
                    <strong>Concept:</strong> Recognizing one's own emotions and thoughts.<br/>
                    <strong>IFP Role:</strong> Digital "Mood Meters". Students use their devices to cast their current emotional state to the IFP anonymously, aggregating a visual heat-map of classroom sentiment.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-1">2. Self-Management</strong>
                    <strong>Concept:</strong> Regulating emotions and behaviors.<br/>
                    <strong>IFP Role:</strong> Breathing visualizers. The teacher projects a large "Box Breathing" animation on the IFP, syncing the entire classroom's rhythm to calm collective anxiety before a high-stakes <a href="/en/journal/formative-assessment-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfpEn', '/en/journal/formative-assessment-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">assessment</a>.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-1">3. Social Awareness</strong>
                    <strong>Concept:</strong> Empathizing with others from diverse backgrounds.<br/>
                    <strong>IFP Role:</strong> Interactive storytelling mapping. While reading a story, students use the IFP's split-screen to drag character avatars onto different emotional spectrums as the plot progresses, validating multiple perspectives.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-1">4. Relationship Skills</strong>
                    <strong>Concept:</strong> Communicating clearly and resolving conflicts.<br/>
                    <strong>IFP Role:</strong> Role-playing comic strips. The IFP displays blank speech bubbles. Two students come forward and collaboratively write "I-Statements" (e.g., "I feel upset when...") to practice healthy conflict resolution.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-1">5. Responsible Decision-Making</strong>
                    <strong>Concept:</strong> Making constructive choices about personal behavior.<br/>
                    <strong>IFP Role:</strong> Decision trees. When the class faces a behavioral dilemma, they collaboratively draw a decision tree on the IFP's infinite whiteboard, analyzing the ripple effects of positive versus negative choices.
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Interactive SEL Activities Using an IFP</h2>
                
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>1. The Morning "Check-In" Routine:</strong> Display a matrix of emotions (e.g., angry, sad, calm, happy) represented by colors or characters. Students tap their current mood as they enter the classroom.</li>
                  <li><strong>2. Gratitude Cloud (Social Awareness):</strong> Use a digital sticky-note tool. Students type short appreciations from their tablets and cast them to the IFP, creating a beautiful "word cloud" of gratitude.</li>
                  <li><strong>3. Mindful Tracing (Self-Management):</strong> The teacher displays complex labyrinth patterns on the IFP. Students who feel overwhelmed take turns tracing the path slowly with a digital stylus to ground their focus.</li>
                  <li><strong>4. "Temperature Check" During Lessons:</strong> Mid-lesson, use a quick thumbs-up/thumbs-down visual poll on the IFP to measure cognitive overload, seamlessly informing <a href="/en/journal/differentiated-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfpEn', '/en/journal/differentiated-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">differentiated learning</a> strategies.</li>
                  <li><strong>5. The "Cool Down" Digital Corner:</strong> If a student struggles with emotional regulation, switch the IFP to "Zen Mode" with soft instrumental audio and allow them to use digital watercolors to release tension safely.</li>
                  <li><strong>6. Visualizing the "Class Charter":</strong> At the start of the year, collaboratively write a classroom agreement on the IFP. Have all students sign it digitally, and set it as the IFP screensaver as a permanent social reminder.</li>
                  <li><strong>7. Emoji Reflection Journals:</strong> As a closing <a href="/en/journal/meaningful-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfpEn', '/en/journal/meaningful-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Meaningful Learning</a> routine, students step up to the IFP and stamp emojis (confused, enlightened, surprised) over the specific lesson topics they found most impactful on the digital whiteboard.</li>
                  <li><strong>8. Empathy Maps (Relationship Skills):</strong> Using a four-quadrant template (Says, Thinks, Does, Feels), students collaborate to map out the psychological profile of a historical figure or a bullied peer scenario.</li>
                  <li><strong>9. Conflict Resolution Flowcharts:</strong> When a recess argument occurs, use the IFP to visually break down the sequence of events without blaming, focusing strictly on identifying the emotional triggers.</li>
                  <li><strong>10. Gamified Resilience (Self-Awareness):</strong> Incorporate <a href="/en/journal/gamification-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleGamificationIfpEn', '/en/journal/gamification-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">gamification</a> where students earn class points not just for correct answers, but for displaying positive SEL behaviors like helping a peer or persisting through a difficult task.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2-Hour SEL Lesson Scenario: "Navigating Failure"</h2>
                
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-emerald-200 pb-2">Practical Scenario (70-80 Minutes) - Theme: Resilience & Growth Mindset</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Check-In (10 Minutes):</strong> The teacher opens the IFP with an "Emotion Wheel." Students realize high collective anxiety due to an upcoming exam. The teacher publicly validates this emotion.</li>
                    <li><strong>B. Mindfulness Practice (5 Minutes):</strong> Responding to the tension, the teacher plays a guided breathing animation on the IFP. The classroom lights are dimmed.</li>
                    <li><strong>C. "Growth Mindset" Interactive Sort (20 Minutes):</strong> The teacher displays two head silhouettes (Fixed vs. Growth Mindset) using the split-screen feature. Students drag and drop scattered phrases (e.g., "I give up" vs. "I'll try another strategy") into the correct silhouette.</li>
                    <li><strong>D. Collaborative Project: "A Letter to My Failing Self" (25 Minutes):</strong> In groups, students design digital motivation cards on the IFP canvas, discussing what they should tell themselves when they fail. This leans heavily into <a href="/en/journal/collaborative-learning-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfpEn', '/en/journal/collaborative-learning-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">Collaborative Learning</a>.</li>
                    <li><strong>E. Appreciation Reflection (10 Minutes):</strong> Groups present their cards. The teacher triggers a digital "Confetti" celebration on the IFP. The class closes with each child stamping a smile emoji on the screen.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Classroom Management Pitfalls in SEL</h2>
                <p>
                  The most critical mistake is treating SEL as a rigid, testable academic subject, or forcing students who are not ready to be emotionally vulnerable in front of the class. SEL must be woven seamlessly into your daily <a href="/en/journal/classroom-management-using-interactive-flat-panel" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfpEn', '/en/journal/classroom-management-using-interactive-flat-panel'); }} className="text-blue-700 hover:underline font-bold">classroom management strategies</a>. Never use public mood data on the IFP to embarrass a student (e.g., "Why are you always sad, John?"). That data is meant for the teacher's empathetic observation.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Teacher Preparation Checklist (Pre-SEL)</h2>
                
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-emerald-500 mr-2">✓</span> Is the daily emotional "Check-In" routine consistently applied?</li>
                  <li><span className="text-emerald-500 mr-2">✓</span> Does the classroom's physical and digital environment foster psychological safety?</li>
                  <li><span className="text-emerald-500 mr-2">✓</span> Does IFP usage facilitate peer-to-peer empathy rather than just passive video consumption?</li>
                  <li><span className="text-emerald-500 mr-2">✓</span> Have you, as the teacher, managed your own emotional regulation before guiding the students?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Conclusion</h2>
                <p>
                  <strong>Social-Emotional Learning using an IFP</strong> proves that smart screens do not inherently alienate students; rather, they can serve as powerful empathy catalysts. By transforming abstract feelings into visual elements that can be touched, moved, and categorized, the IFP facilitates healthy emotional dialogue. When educators dedicate prime screen real estate to self-awareness and relationship skills, they send the most fundamental pedagogical message: before we train the mind, we must nurture the humanity of the student.
                </p>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePseIfpEn;
