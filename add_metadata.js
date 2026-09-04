import fs from 'fs';

function addMetadata(file, title, desc, url, heading, jsonLdType) {
  let code = fs.readFileSync(file, 'utf-8');
  
  const metadataEffect = `
    document.title = '${title}';
    
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

    setMeta('description', '${desc}');
    setMeta('og:title', '${title}', true);
    setMeta('og:description', '${desc}', true);
    setMeta('og:url', window.location.origin + '${url}', true);
    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', '${title}');
    setMeta('twitter:description', '${desc}');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '${url}');
    
    // JSON-LD
    let scriptLd = document.querySelector('script#jsonld-hub');
    if (!scriptLd) {
      scriptLd = document.createElement('script');
      scriptLd.id = 'jsonld-hub';
      scriptLd.type = 'application/ld+json';
      document.head.appendChild(scriptLd);
    }
    
    const gameList = games.map((g, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": window.location.origin + '/game/' + encodeURIComponent(g.id)
    }));
    
    scriptLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "${heading}",
      "description": "${desc}",
      "url": window.location.origin + '${url}',
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": gameList
      }
    });

    return () => {
      document.title = 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif';
      setMeta('description', 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru. Belajar sambil bermain dengan berbagai pilihan game.');
      canonical?.setAttribute('href', window.location.origin + '/');
      const ld = document.querySelector('script#jsonld-hub');
      if (ld) ld.remove();
      // other metas could be cleaned up but keeping them generic is okay for SPA or let index.html defaults take over
    };
  `;
  
  code = code.replace(/useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);/, `useEffect(() => {${metadataEffect}}, [games]);`);
  
  // Make sure we have <main>
  code = code.replace(/<main className="flex flex-col gap-6">/, `<main className="flex flex-col gap-6">
          <h2 className="sr-only">Daftar Game</h2>`);
          
  fs.writeFileSync(file, code);
}

addMetadata('components/HubKids.tsx', 'Game Edukasi Anak PAUD & TK Interaktif | Papan Interaktif', 'Kumpulan game edukasi anak PAUD dan TK. Bermain sambil belajar logika, literasi, dan numerasi dasar dengan karakter lucu dan interaktif.', '/game-edukasi-anak', 'Game Edukasi Anak');
addMetadata('components/HubLogic.tsx', 'Game Logika & Asah Otak Anak | Papan Interaktif', 'Kumpulan game logika interaktif untuk mengasah otak, kemampuan pemecahan masalah, dan pola pikir analitis siswa. Mainkan game puzzle, fisika, dan strategi.', '/game-logika', 'Game Logika & Pemecahan Masalah');
addMetadata('components/HubIfp.tsx', 'Game Edukasi IFP & Papan Interaktif Digital | Papan Interaktif', 'Game edukasi interaktif yang dioptimalkan untuk Interactive Flat Panel (IFP) dan layar sentuh besar di kelas. Cocok untuk ice breaking dan kolaborasi siswa.', '/game-edukasi-ifp', 'Game Interaktif Ruang Kelas');

