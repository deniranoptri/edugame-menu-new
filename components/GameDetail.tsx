import React, { useEffect } from 'react';
import { GameConfig, GameConfigWithTags } from '../types';

interface GameDetailProps {
  locale?: "id" | "en";
  game: GameConfigWithTags;
  onBack: () => void;
}

const GameDetail: React.FC<GameDetailProps> = ({ game, onBack, locale = "id" }) => {

  const isEn = locale === 'en' && game.en;
  const displayTitle = isEn ? game.en.title : game.title;
  const displaySubtitle = isEn ? game.en.subtitle : game.subtitle;
  const displayDescription = isEn ? game.en.description : game.description;
  const displaySubject = isEn ? game.en.subject : game.subject;
  const displayAudience = isEn ? game.en.audience : game.audience;
  const displayLearningFocus = isEn ? game.en.learningFocus : game.learningFocus;
  const displayHowToPlay = isEn ? game.en.howToPlay : game.howToPlay;
  const displayEducationalBenefits = isEn ? game.en.educationalBenefits : game.educationalBenefits;

  useEffect(() => {
    document.documentElement.lang = locale;
    
    // 5. ROUTE-AWARE DOCUMENT TITLE & 6. ROUTE-AWARE META DESCRIPTION
    const docTitle = isEn 
      ? `${displayTitle} | Interactive Educational Games | Papan Interaktif`
      : `${game.title} | Game Edukasi Interaktif | Papan Interaktif`;
    
    document.title = docTitle;

    
    // Set dynamic description based on evidence
    const descriptionText = displayDescription || `${game.title} - ${game.subtitle}. Game edukasi di Papan Interaktif.`;
    
    // Update basic meta tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descriptionText);

    // 8. OPEN GRAPH & 9. TWITTER METADATA & 7. CANONICAL
        const baseUrl = window.location.origin;
    const idPath = `/game/${game.id}`;
    const enPath = `/en/game/${game.id}`;
    const currentUrl = baseUrl + (locale === 'en' ? enPath : idPath);
    const altUrl = baseUrl + (locale === 'en' ? idPath : enPath);
    
    // Helper to update meta tag safely
    const updateMeta = (property: string, content: string, isName = false) => {
      const attr = isName ? 'name' : 'property';
      let tag = document.querySelector(`meta[${attr}="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMeta('og:title', docTitle);
    updateMeta('og:description', descriptionText);
    updateMeta('og:url', currentUrl);
    updateMeta('twitter:title', docTitle, true);
    updateMeta('twitter:description', descriptionText, true);
    if (game.image) {
      updateMeta('og:image', game.image);
      updateMeta('twitter:image', game.image, true);
    }

    


    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // Hreflang logic (Phase 9 Pilot)
    const updateHreflang = (lang, url) => {
      let link = document.querySelector(`link[hreflang="${lang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    if (['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional'].includes(game.id)) {
      updateHreflang('id', baseUrl + idPath);
      updateHreflang('en', baseUrl + enPath);
      updateHreflang('x-default', baseUrl + idPath);
    }


    // 11. INJECT STRUCTURED DATA (JSON-LD)
    const scriptId = 'seo-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('id', scriptId);
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["VideoGame", "EducationalApplication"],
          "@id": currentUrl,
          "name": game.title,
          "description": descriptionText,
          "applicationCategory": "EducationalGame",
          "operatingSystem": "Any",
          "educationalUse": game.learningFocus || "Interactive Learning",
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": game.audience || "student"
          },
          "url": currentUrl,
          "image": game.image || undefined
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Papan Interaktif",
              "item": "https://papaninteraktif.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Game Edukasi",
              "item": "https://papaninteraktif.com/#game-edukasi"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": game.title,
              "item": currentUrl
            }
          ]
        }
      ]
    };
    scriptTag.textContent = JSON.stringify(schemaData);

    // Restore title and meta on unmount
    return () => {
      document.title = 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif';
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru. Belajar sambil bermain dengan berbagai pilihan game.');
      }
      updateMeta('og:title', 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif');
      updateMeta('og:description', 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru. Belajar sambil bermain dengan berbagai pilihan game.');
      updateMeta('og:url', window.location.origin);
      updateMeta('twitter:title', 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif', true);
      updateMeta('twitter:description', 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru.', true);
      if (linkCanonical) {
        linkCanonical.setAttribute('href', window.location.origin);
      }
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, [game]);

  // 3. ELIMINATE FALLBACK BOILERPLATE
  return (
    <article className="max-w-4xl mx-auto p-4 md:p-8 animate-fadeIn">
      {/* 10. SEMANTIC BACK LINK */}
      <a 
        href="/"
        onClick={(e) => { e.preventDefault(); onBack(); }}
        className="mb-6 flex items-center gap-2 text-[#0C1A69] font-bold hover:underline"
        aria-label="Kembali ke Beranda"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Kembali ke Papan Interaktif
      </a>

      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-lg border-2 border-white">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 flex justify-center">
            <div 
              className="w-full aspect-square max-w-[240px] rounded-3xl p-4 shadow-inner flex items-center justify-center border-4"
              style={{ backgroundColor: game.bgColor, borderColor: 'rgba(255,255,255,0.5)' }}
            >
              {game.image && (
                <img 
                  src={game.image} 
                  alt={`Ikon game ${game.title}`} 
                  className="w-full h-full object-cover rounded-xl drop-shadow-md"
                />
              )}
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-[#0C1A69] mb-2">{displayTitle}</h1>
              <p className="text-lg md:text-xl font-bold text-[#0C1A69]/70">{displaySubtitle}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              {game.educationLevel === 'paud' && (
                <a href="/game-edukasi-anak" onClick={(e) => { e.preventDefault(); /* Need navigateTo but we only have onBack here. Use window.history */ window.history.pushState({}, '', '/game-edukasi-anak'); window.dispatchEvent(new Event('popstate')); }} className="px-3 py-1 bg-[#FFEBEE] text-[#B71C1C] text-xs font-black uppercase rounded-full tracking-wider hover:bg-[#ffcdd2] transition-colors cursor-pointer border-2 border-transparent hover:border-[#ef9a9a]">
                  Anak PAUD & TK
                </a>
              )}
              {game.categoryKeys?.includes('logic') && (
                <a href="/game-logika" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/game-logika'); window.dispatchEvent(new Event('popstate')); }} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-black uppercase rounded-full tracking-wider hover:bg-indigo-200 transition-colors cursor-pointer border-2 border-transparent hover:border-indigo-300">
                  Logika
                </a>
              )}
              {['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional'].includes(game.id) && (
                <a href={isEn ? "/en/educational-games-for-interactive-flat-panels" : "/game-edukasi-ifp"} onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', isEn ? '/en/educational-games-for-interactive-flat-panels' : '/game-edukasi-ifp'); window.dispatchEvent(new Event('popstate')); }} className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-black uppercase rounded-full tracking-wider hover:bg-teal-200 transition-colors cursor-pointer border-2 border-transparent hover:border-teal-300">
                  Game IFP / Kelas
                </a>
              )}
              {game.tags?.map(tag => {
                if (tag === '🧠 Logika' || tag === '🎯 Ice Breaking') return null; // Already handled
                return (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold uppercase rounded-full tracking-wider">
                    {tag}
                  </span>
                )
              })}
            </div>

            {/* 4. GAME DETAIL CONTENT STRUCTURE */}
            {game.description && (
              <section className="mt-4">
                <p className="text-[#0C1A69]/80 leading-relaxed font-medium">
                  {game.description}
                </p>
              </section>
            )}

            {(game.audience || game.learningFocus || game.subject) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {game.audience && (
                  <section className="bg-white/50 p-4 rounded-2xl border border-white">
                    <h2 className="text-sm font-black text-[#0C1A69] uppercase tracking-widest mb-1">Target Audiens</h2>
                    <p className="text-sm text-[#0C1A69]/80 font-bold">{displayAudience}</p>
                  </section>
                )}
                
                {game.subject && (
                  <section className="bg-white/50 p-4 rounded-2xl border border-white">
                    <h2 className="text-sm font-black text-[#0C1A69] uppercase tracking-widest mb-1">Konteks Edukasi</h2>
                    <p className="text-sm text-[#0C1A69]/80 font-bold">{displaySubject}</p>
                  </section>
                )}

                {game.learningFocus && (
                  <section className="bg-white/50 p-4 rounded-2xl border border-white sm:col-span-2">
                    <h2 className="text-sm font-black text-[#0C1A69] uppercase tracking-widest mb-1">Fokus Belajar</h2>
                    <p className="text-sm text-[#0C1A69]/80 font-bold">{displayLearningFocus}</p>
                  </section>
                )}
              </div>
            )}

            {displayHowToPlay && displayHowToPlay.length > 0 && (
              <section className="mt-6 bg-white/50 p-6 rounded-3xl border-2 border-white shadow-sm">
                <h2 className="text-lg font-black text-[#0C1A69] uppercase tracking-widest mb-4">
                  {isEn ? "How to Play" : "Cara Bermain"}
                </h2>
                <ol className="list-decimal list-outside ml-5 space-y-2 text-[#0C1A69]/80 font-medium">
                  {displayHowToPlay.map((step, index) => (
                    <li key={index} className="pl-1 leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {displayEducationalBenefits && displayEducationalBenefits.length > 0 && (
              <section className="mt-6 bg-white/50 p-6 rounded-3xl border-2 border-white shadow-sm">
                <h2 className="text-lg font-black text-[#0C1A69] uppercase tracking-widest mb-4">
                  {isEn ? "Learning Benefits" : "Manfaat Pembelajaran"}
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-[#0C1A69]/80 font-medium">
                  {displayEducationalBenefits.map((benefit, index) => (
                    <li key={index} className="pl-1 leading-relaxed">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="mt-8">
              {game.url && !game.isComingSoon ? (
                <a 
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto text-center px-8 py-4 bg-[#0C1A69] text-white rounded-2xl font-black uppercase tracking-widest shadow-lg hover:scale-105 hover:bg-blue-900 transition-all"
                >
                  Main Sekarang ➔
                </a>
              ) : (
                <span className="inline-block w-full sm:w-auto text-center px-8 py-4 bg-gray-400 text-white rounded-2xl font-black uppercase tracking-widest shadow-inner cursor-not-allowed">
                  Segera Hadir
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GameDetail;
