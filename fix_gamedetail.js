import fs from 'fs';

let content = fs.readFileSync('components/GameDetail.tsx', 'utf-8');

// Update props
content = content.replace('interface GameDetailProps {', 'interface GameDetailProps {\n  locale?: "id" | "en";');
content = content.replace('const GameDetail: React.FC<GameDetailProps> = ({ game, onBack }) => {', 'const GameDetail: React.FC<GameDetailProps> = ({ game, onBack, locale = "id" }) => {');

// We need a helper to safely get the localized string
const newLogic = `
  const isEn = locale === 'en' && game.en;
  const displayTitle = isEn ? game.en.title : game.title;
  const displaySubtitle = isEn ? game.en.subtitle : game.subtitle;
  const displayDescription = isEn ? game.en.description : game.description;
  const displaySubject = isEn ? game.en.subject : game.subject;
  const displayAudience = isEn ? game.en.audience : game.audience;
  const displayLearningFocus = isEn ? game.en.learningFocus : game.learningFocus;

  useEffect(() => {
    document.documentElement.lang = locale;
    
    // 5. ROUTE-AWARE DOCUMENT TITLE & 6. ROUTE-AWARE META DESCRIPTION
    const docTitle = isEn 
      ? \`\${displayTitle} | Interactive Educational Games | Papan Interaktif\`
      : \`\${game.title} | Game Edukasi Interaktif | Papan Interaktif\`;
    
    document.title = docTitle;
`;

content = content.replace(/  useEffect\(\(\) => {\n    \/\/ 5\. ROUTE-AWARE DOCUMENT TITLE[^\n]*\n    const docTitle = [^\n]*\n    document\.title = docTitle;/, newLogic);

// Replace uses of game.description with displayDescription etc in useEffect
content = content.replace(/const descriptionText = game\.description/g, 'const descriptionText = displayDescription');
content = content.replace(/const descriptionText = isEn \? displayDescription : game\.description \|\|/g, 'const descriptionText = displayDescription ||');

// OG updates
content = content.replace(/setMeta\('og:title', docTitle, true\);/g, `setMeta('og:title', docTitle, true);\n    setMeta('og:locale', locale === 'en' ? 'en_US' : 'id_ID', true);`);

// canonical and hreflang
const canonicalReplacement = `
    const baseUrl = window.location.origin;
    const idPath = \`/game/\${game.id}\`;
    const enPath = \`/en/game/\${game.id}\`;
    
    const currentUrl = baseUrl + (locale === 'en' ? enPath : idPath);
    const altUrl = baseUrl + (locale === 'en' ? idPath : enPath);

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
      let link = document.querySelector(\`link[hreflang="\${lang}"]\`);
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
`;

// Find where canonical is set
content = content.replace(/\/\/ Canonical[\s\S]*?linkCanonical\.setAttribute\('href', currentUrl\);/, canonicalReplacement);

// Update Structured Data
content = content.replace(/const structuredData = {[\s\S]*?};/g, (match) => {
  return match
    .replace('name: game.title,', 'name: displayTitle,')
    .replace('description: game.description', 'description: displayDescription')
    .replace('applicationCategory: "EducationalApplication"', 'applicationCategory: "EducationalApplication",\n      inLanguage: locale')
    .replace(/url: [^,]*,/, 'url: currentUrl,');
});

// Update UI rendering
content = content.replace(/>{game\.title}</g, '>{displayTitle}<');
content = content.replace(/>{game\.subtitle}</g, '>{displaySubtitle}<');
content = content.replace(/>{game\.description}</g, '>{displayDescription}<');
content = content.replace(/>{game\.subject}</g, '>{displaySubject}<');
content = content.replace(/>{game\.audience}</g, '>{displayAudience}<');
content = content.replace(/>{game\.learningFocus}</g, '>{displayLearningFocus}<');

// Breadcrumbs Update
content = content.replace(/<span className="text-gray-800">Game Edukasi<\/span>/, `{isEn ? <span className="text-gray-800">Educational Games for Interactive Flat Panels</span> : <span className="text-gray-800">Game Edukasi</span>}`);
content = content.replace(/<span className="text-gray-800 font-bold truncate">[^<]*<\/span>/, '<span className="text-gray-800 font-bold truncate">{displayTitle}</span>');

// Breadcrumb Link updates
content = content.replace(/<a href="\/"/g, `<a href="/"`);
// if IFP game and EN, link to EN IFP Hub
content = content.replace(/<a href="\/game-edukasi-ifp"/g, `<a href={isEn ? "/en/educational-games-for-interactive-flat-panels" : "/game-edukasi-ifp"}`);

fs.writeFileSync('components/GameDetail.tsx', content);
