import fs from 'fs';

let content = fs.readFileSync('components/HubIfp.tsx', 'utf-8');

// Update props
content = content.replace('interface HubIfpProps {', 'interface HubIfpProps {\n  locale?: "id" | "en";');
content = content.replace('export const HubIfp: React.FC<HubIfpProps> = ({ games, onBack, navigateTo }) => {', 'export const HubIfp: React.FC<HubIfpProps> = ({ games, onBack, navigateTo, locale = "id" }) => {');

// Update logic
const oldUseEffect = `  useEffect(() => {
    document.title = 'Game Edukasi IFP & Papan Interaktif Digital | Papan Interaktif';
    
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(\`meta[\${attr}="\${name}"]\`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', 'Game edukasi interaktif yang dioptimalkan untuk Interactive Flat Panel (IFP) dan layar sentuh besar di kelas. Cocok untuk ice breaking dan kolaborasi siswa.');
    setMeta('og:title', 'Game Edukasi IFP & Papan Interaktif Digital | Papan Interaktif', true);
    setMeta('og:description', 'Game edukasi interaktif yang dioptimalkan untuk Interactive Flat Panel (IFP) dan layar sentuh besar di kelas. Cocok untuk ice breaking dan kolaborasi siswa.', true);
    setMeta('og:url', window.location.origin + '/game-edukasi-ifp', true);
    setMeta('og:type', 'website', true);`;

const newUseEffect = `  useEffect(() => {
    const isEn = locale === 'en';
    document.documentElement.lang = locale;

    document.title = isEn 
      ? 'Educational Games for Interactive Flat Panels | Papan Interaktif'
      : 'Game Edukasi IFP & Papan Interaktif Digital | Papan Interaktif';
    
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(\`meta[\${attr}="\${name}"]\`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const desc = isEn
      ? 'Interactive educational games optimized for Interactive Flat Panels (IFP) and large touch screens in the classroom. Perfect for student collaboration and ice breaking.'
      : 'Game edukasi interaktif yang dioptimalkan untuk Interactive Flat Panel (IFP) dan layar sentuh besar di kelas. Cocok untuk ice breaking dan kolaborasi siswa.';
    
    setMeta('description', desc);
    setMeta('og:title', document.title, true);
    setMeta('og:description', desc, true);
    
    const baseUrl = window.location.origin;
    const idPath = '/game-edukasi-ifp';
    const enPath = '/en/educational-games-for-interactive-flat-panels';
    const currentUrl = baseUrl + (isEn ? enPath : idPath);
    
    setMeta('og:url', currentUrl, true);
    setMeta('og:locale', isEn ? 'en_US' : 'id_ID', true);
    setMeta('og:type', 'website', true);

    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // Hreflang
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

    updateHreflang('id', baseUrl + idPath);
    updateHreflang('en', baseUrl + enPath);
    updateHreflang('x-default', baseUrl + idPath);`;

content = content.replace(oldUseEffect, newUseEffect);

// Update schema
content = content.replace(/inLanguage: "id-ID"/, 'inLanguage: locale');
content = content.replace(/"name": "Koleksi Game Edukasi IFP"/, `"name": locale === 'en' ? "Educational Games for IFP Collection" : "Koleksi Game Edukasi IFP"`);
content = content.replace(/"description": "[^"]*"/, `"description": locale === 'en' ? "A collection of interactive educational games designed for Interactive Flat Panels." : "Kumpulan game edukasi yang dirancang khusus untuk layar sentuh besar IFP di kelas."`);
// Replace game mapping in schema to use EN values if available
content = content.replace(/name: game.title,/g, 'name: locale === "en" && game.en ? game.en.title : game.title,');
content = content.replace(/url: `\$\{window\.location\.origin\}\/game\/\$\{game\.id\}`/g, 'url: `${window.location.origin}${locale === "en" ? "/en" : ""}/game/${game.id}`');
content = content.replace(/item: `\$\{window\.location\.origin\}\/game\/\$\{game\.id\}`/g, 'item: `${window.location.origin}${locale === "en" ? "/en" : ""}/game/${game.id}`');


// UI Texts
content = content.replace(
  /<h1 className="text-3xl md:text-5xl font-black text-\[#0C1A69\] mb-4 leading-tight">\s*Game Edukasi IFP\s*<\/h1>/,
  '<h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mb-4 leading-tight">{locale === "en" ? "Educational Games for IFP" : "Game Edukasi IFP"}</h1>'
);

content = content.replace(
  /<p className="text-lg md:text-xl text-\[#0C1A69\]\/70 font-semibold">\s*Pilihan game interaktif yang dioptimalkan untuk layar sentuh besar di kelas\.\s*<\/p>/,
  '<p className="text-lg md:text-xl text-[#0C1A69]/70 font-semibold">{locale === "en" ? "A selection of interactive games optimized for large touch displays in the classroom." : "Pilihan game interaktif yang dioptimalkan untuk layar sentuh besar di kelas."}</p>'
);

content = content.replace(
  /Koleksi game edukasi khusus untuk Papan Interaktif Digital \(IFP\)/g,
  '{locale === "en" ? "Educational games collection for Interactive Flat Panels (IFP)" : "Koleksi game edukasi khusus untuk Papan Interaktif Digital (IFP)"}'
);

content = content.replace(
  /Kembali/g,
  '{locale === "en" ? "Back" : "Kembali"}'
);

// We need to pass the localized game to MenuCard or let MenuCard handle it.
// Currently MenuCard receives `config={game}`.
// We can temporarily modify the game object before passing it to MenuCard so it displays the localized version.
// Or we can modify MenuCard to accept locale. 
// Modifying MenuCard is better.

fs.writeFileSync('components/HubIfp.tsx', content);
