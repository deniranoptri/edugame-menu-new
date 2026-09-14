import React, { useEffect } from 'react';

interface ArticleGamificationIfpEnProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticleGamificationIfpEn: React.FC<ArticleGamificationIfpEnProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gamification Using Interactive Flat Panel | Teacher Journal";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A complete guide to learning gamification using Interactive Flat Panels. Learn how to implement points, badges, leaderboards, and educational competitive activities in the classroom."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/en/journal/gamification-using-interactive-flat-panel');

    // Hreflang Tags
    const hreflangs = [
      { hreflang: 'id', href: window.location.origin + '/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp' },
      { hreflang: 'en', href: window.location.origin + '/en/journal/gamification-using-interactive-flat-panel' },
      { hreflang: 'x-default', href: window.location.origin + '/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp' }
    ];
    
    hreflangs.forEach(({ hreflang, href }) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    });

    const scriptId = 'article-gamification-ifp-en-schema';
    let existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Gamification Using Interactive Flat Panel",
          "description": "A complete guide to learning gamification using Interactive Flat Panels. Learn how to implement points, badges, leaderboards, and educational competitive activities in the classroom.",
          "image": "https://papaninteraktif.com/gamifikasi-ifp.jpg",
          "author": {
            "@type": "Person",
            "name": "Deni Ranoptri, M.Pd"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Papan Interaktif",
            "logo": {
              "@type": "ImageObject",
              "url": "https://papaninteraktif.com/logo.png"
            }
          },
          "datePublished": "2024-02-14",
          "dateModified": "2024-02-14",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://papaninteraktif.com/en/journal/gamification-using-interactive-flat-panel"
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
              "item": "https://papaninteraktif.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Teacher Journal",
              "item": "https://papaninteraktif.com/jurnal-guru"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Gamification Using IFP",
              "item": "https://papaninteraktif.com/en/journal/gamification-using-interactive-flat-panel"
            }
          ]
        }
      ]);
      document.head.appendChild(script);
    }

    return () => {
      if (existingScript) {
        existingScript.remove();
      } else {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <button 
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="group flex items-center gap-2 text-gray-500 hover:text-blue-700 transition-colors mb-8 font-medium"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Journal
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-48 md:h-64 bg-gradient-to-r from-orange-600 to-yellow-500 relative flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <h1 className="text-3xl md:text-5xl font-black text-white text-center leading-tight drop-shadow-md relative z-10 max-w-3xl">
              10 Ways to Apply Gamification Using Interactive Flat Panels (IFP)
            </h1>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-10 pb-6 border-b border-gray-100 text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-1.5 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                Innovation & Tech
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                7 Min Read
              </span>
            </div>

            <article className="prose prose-lg md:prose-xl max-w-none prose-headings:text-[#0C1A69] prose-a:text-blue-600">
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p className="text-xl md:text-2xl font-medium text-gray-800 leading-snug">
                  Transform your classroom into an epic arena! <strong className="text-orange-600">Gamification</strong> using an Interactive Flat Panel (IFP) is not just about playing games; it's about embedding game mechanics (points, badges, leaderboards, missions) into your standard learning process to skyrocket student motivation.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Why Gamification and Why IFP?</h2>
                <p>
                  Today's students are digital natives accustomed to dopamine loops from gaming. When we bring game elements into education, engagement naturally increases. An IFP serves as the perfect "Gaming Hub" or "Command Center" because of its multi-touch capabilities, split-screen modes, massive display, and powerful built-in audio.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Core Principles of Gamification</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-base">
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <span className="block text-2xl mb-2">🏆</span>
                    <strong className="block text-gray-900 mb-1">Points & Leaderboards</strong>
                    Visual progress tracking displayed on the large screen to foster healthy competition.
                  </div>
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <span className="block text-2xl mb-2">🎖️</span>
                    <strong className="block text-gray-900 mb-1">Badges & Titles</strong>
                    Instant recognition (e.g., "Grammar Master") given live in front of the class.
                  </div>
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <span className="block text-2xl mb-2">📜</span>
                    <strong className="block text-gray-900 mb-1">Narrative/Storyline</strong>
                    Converting a regular lesson into an epic mission (e.g., "Save the dying planet").
                  </div>
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <span className="block text-2xl mb-2">⏳</span>
                    <strong className="block text-gray-900 mb-1">Time Limits</strong>
                    On-screen timers that create positive tension and urgency during group tasks.
                  </div>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10 Ways to Apply Gamification on an IFP</h2>
                <ul className="list-none pl-0 space-y-6">
                  <li><strong>1. "Wheel of Fortune" (Spin the Wheel)</strong>
                    <br/>Instead of calling names conventionally, use a spin-the-wheel app on the IFP. The spinning sound and visual animation add an element of thrill to classroom participation.
                  </li>
                  <li><strong>2. "Live Leaderboard" (Digital Scoreboard)</strong>
                    <br/>Keep a live tally of group scores on one side of the screen using the split-screen feature. Students can see their points rise in real-time as they answer correctly.
                  </li>
                  <li><strong>3. "Digital Badges via Sticky Notes"</strong>
                    <br/>When a student delivers an excellent presentation, award them a digital "Gold Star" or "Genius" sticker directly onto their slides using the IFP's annotation tools.
                  </li>
                  <li><strong>4. "Jeopardy! Style Quiz"</strong>
                    <br/>Set up a grid with different subject categories and point levels (100, 200, 300). Students tap the number on the IFP to reveal the question. Highly effective for exam reviews.
                  </li>
                  <li><strong>5. "Timer Bomb"</strong>
                    <br/>Display a digital time bomb (e.g., 60 seconds) on the IFP. A group representative must solve the problem on the board before the time runs out and the explosion sound plays through the speakers.
                  </li>
                  <li><strong>6. "Drag-and-Drop Race"</strong>
                    <br/>Split the IFP screen in two. Call up representatives from two teams. The fastest to arrange a historical timeline or the water cycle correctly wins points for their team.
                  </li>
                  <li><strong>7. "Unlock the Code"</strong>
                    <br/>The final answer to a math or physics problem (e.g., 3-4-2) acts as the code to unlock an animated safe displayed on the IFP.
                  </li>
                  <li><strong>8. "Virtual Sticky Note Bidding"</strong>
                    <br/>The teacher presents a problem. Each group submits their answer via virtual sticky notes cast to the IFP. The teacher then reveals hidden random point values for each correct approach.
                  </li>
                  <li><strong>9. "Avatar Progression"</strong>
                    <br/>Throughout the week, the class shares an animated character (e.g., a rocket). Every time the class hits daily behavioral or academic targets, the teacher moves the rocket on the IFP closer to the moon.
                  </li>
                  <li><strong>10. "Easter Egg Hunt"</strong>
                    <br/>During a slide presentation on the IFP, hide small icons (like a tiny star in the corner of a slide). The most observant student to spot and tap it on the screen earns "Concentration Points."
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2-Hour Lesson Scenario: "Mission to Save the Ecosystem"</h2>
                <div className="bg-yellow-50/50 p-6 rounded-2xl border border-yellow-100 text-sm md:text-base space-y-4 shadow-sm text-gray-700 my-6">
                  <h3 className="font-bold text-lg text-[#0C1A69] border-b border-yellow-200 pb-2">Practical Scenario (70-80 Minutes) - Science Gamification</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>A. Prologue/Narrative (10 Min):</strong> The teacher dims the lights. The IFP displays an animation of Earth slowly fading. Teacher narrates: <em>"Agents, Earth is losing its green energy. You must collect 500 Crystal Energy points today to revive it."</em></li>
                    <li><strong>B. Faction Division (5 Min):</strong> Students are divided into 4 Factions (Water, Fire, Earth, Wind). A digital leaderboard with faction logos is displayed in the top right corner of the IFP.</li>
                    <li><strong>C. Mission 1: Ecosystem Drag and Drop (15 Min):</strong> Each faction sends a delegate to the IFP. Using split-screen, they must quickly match animals to their habitats. The fastest team wins 100 Crystals.</li>
                    <li><strong>D. Mission 2: Microscopic Investigation (15 Min):</strong> The IFP displays a heavily zoomed-in plant cell. Factions discuss for 2 minutes, then one representative races to the IFP to circle (annotate) the chloroplasts. Correct answers yield 150 Crystals.</li>
                    <li><strong>E. Mission 3: Buzzer Quiz (15 Min):</strong> The teacher reads a short essay question. The group ready to answer raises a flag. If correct, the teacher hits the "Level Up" button on the IFP, triggering celebratory sound effects.</li>
                    <li><strong>F. Final Evaluation & Reward (10 Min):</strong> All faction scores are tallied on the IFP. If the total exceeds 500 Crystals, Earth turns green again on the IFP (visual reward). As a form of <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">formative assessment</a>, the highly interactive whiteboard canvas is exported to PDF.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Common Challenges and Mistakes</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Focusing Too Much on the Game, Forgetting the Material:</strong> This is the biggest trap. Kids have fun competing but miss the core concepts. Ensure game mechanics (timers, running to the IFP) are just the <em>trigger</em>, while the core question still demands high-level academic reasoning.</li>
                  <li><strong>Skill Discrepancy (Demotivation):</strong> If the smartest group constantly dominates the IFP leaderboard, others will give up. Counter this by awarding "Character Points" for teamwork or bravery, not just correct answers. Apply <a href="/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleDifferentiatedIfp', '/jurnal-guru/pembelajaran-berdiferensiasi-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">differentiated instruction</a> principles when assigning challenge questions.</li>
                  <li><strong>Chaotic Classrooms:</strong> Gamification often leads to noise due to high enthusiasm. You must combine it with strong <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">classroom management strategies</a>, such as a rule: "Any team that shouts out of turn loses 50 points on the screen."</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Teacher Preparation Checklist (Pre-Gamification)</h2>
                <ul className="list-none space-y-2 font-medium text-gray-600">
                  <li><span className="text-yellow-500 mr-2">✓</span> Is the background narrative/story ready?</li>
                  <li><span className="text-yellow-500 mr-2">✓</span> Is the digital Leaderboard format displayed in the corner of the IFP?</li>
                  <li><span className="text-yellow-500 mr-2">✓</span> Are the IFP speakers on to provide bell or firework sound effects?</li>
                  <li><span className="text-yellow-500 mr-2">✓</span> Are visual assets (Boss image, lock, timer) high resolution?</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Conclusion</h2>
                <p>
                  Integrating <strong>learning gamification using an IFP</strong> is not about lowering academic standards into a mere playground. Rather, it's about designing the psychology of engagement. When the giant screen at the front of the class responds to a student's touch with flashing points, achievement animations, and instant auditory praise, you are igniting their intrinsic motivation. Students no longer feel tested; they feel like they are fighting alongside their team to complete an important mission from their teacher.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleGamificationIfpEn;
