const fs = require('fs');
let idCode = fs.readFileSync('components/ArticleGamificationIfp.tsx', 'utf8');

const hreflangCode = `    // Hreflang Tags
    const hreflangs = [
      { hreflang: 'id', href: window.location.origin + '/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp' },
      { hreflang: 'en', href: window.location.origin + '/en/journal/gamification-using-interactive-flat-panel' },
      { hreflang: 'x-default', href: window.location.origin + '/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp' }
    ];
    
    hreflangs.forEach(({ hreflang, href }) => {
      let link = document.querySelector(\`link[hreflang="\${hreflang}"]\`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    });`;

if (!idCode.includes('hreflangs.forEach')) {
  idCode = idCode.replace(/    canonical.setAttribute\('href', window.location.origin \+ '\/jurnal-guru\/gamifikasi-pembelajaran-menggunakan-ifp'\);/g, 
    "    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp');\n" + hreflangCode);
}
fs.writeFileSync('components/ArticleGamificationIfp.tsx', idCode);
