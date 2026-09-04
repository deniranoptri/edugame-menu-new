import fs from 'fs';
let code = fs.readFileSync('App.tsx', 'utf-8');

const routeReplacements = `      else if (path === '/game-edukasi-anak') setCurrentView('hubKids');
      else if (path === '/game-logika') setCurrentView('hubLogic');
      else if (path === '/game-edukasi-ifp') setCurrentView('hubIfp');
      else if (path === '/privacy-policy') setCurrentView('privacy');`;

code = code.replaceAll(`      } else if (path === '/privacy-policy') setCurrentView('privacy');`, `      } ${routeReplacements.trim()}`);
code = code.replaceAll(`    } else if (path === '/privacy-policy') setCurrentView('privacy');`, `    } ${routeReplacements.trim()}`);

fs.writeFileSync('App.tsx', code);
