import fs from 'fs';
let code = fs.readFileSync('App.tsx', 'utf-8');

const importLines = `import { HubKids } from './components/HubKids';
import { HubLogic } from './components/HubLogic';
import { HubIfp } from './components/HubIfp';
`;

code = code.replace(`import { JurnalGuru } from './components/JurnalGuru';`, `import { JurnalGuru } from './components/JurnalGuru';\n${importLines}`);

const renderLogic = `
  if (currentView === 'hubKids') return <HubKids games={kidsGames} onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />;
  if (currentView === 'hubLogic') return <HubLogic games={[...generalGames, ...kidsGames].filter(g => g.tags?.includes('🧠 Logika'))} onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />;
  if (currentView === 'hubIfp') return <HubIfp games={[...generalGames, ...kidsGames].filter(g => g.tags?.includes('🎯 Ice Breaking') || g.id === 'puzzle')} onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />;
`;

code = code.replace(`if (currentView === 'privacy') return <PrivacyPolicy onBack={() => navigateTo('home', '/')} />;`, `${renderLogic.trim()}\n  if (currentView === 'privacy') return <PrivacyPolicy onBack={() => navigateTo('home', '/')} />;`);

fs.writeFileSync('App.tsx', code);
