import fs from 'fs';

const code = fs.readFileSync('App.tsx', 'utf-8');

// We need to fix the HubIfp rendering in App.tsx to only include the 6 validated games:
// 'nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional'

const newRenderIfp = `  if (currentView === 'hubIfp') {
    const ifpGames = ['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional'];
    return <HubIfp games={[...generalGames, ...kidsGames].filter(g => ifpGames.includes(g.id))} onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />;
  }`;

const updatedCode = code.replace(/if \(currentView === 'hubIfp'\) return <HubIfp games=\{\[\.\.\.generalGames, \.\.\.kidsGames\]\.filter\(g => g\.tags\?\.includes\('🎯 Ice Breaking'\) \|\| g\.id === 'puzzle'\)\} onBack=\{\(\) => navigateTo\('home', '\/'\)\} navigateTo=\{navigateTo\} \/>;/, newRenderIfp);

fs.writeFileSync('App.tsx', updatedCode);
