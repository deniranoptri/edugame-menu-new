import fs from 'fs';

let app = fs.readFileSync('App.tsx', 'utf-8');

app = app.replace(
  "const [currentView, setCurrentView] = useState",
  "const [currentLocale, setCurrentLocale] = useState<'id' | 'en'>('id');\n  const [currentView, setCurrentView] = useState"
);

const oldRouting1 = `    if (parsed.locale !== 'id') {
      setCurrentView('home');
    } else if (parsed.type === 'gameDetail') {
      setCurrentView('gameDetail');
      setSelectedGameId(decodeURIComponent(parsed.slug!));
    } else if (parsed.type !== 'unknown') {
      setCurrentView(parsed.type);
    } else {
      setCurrentView('home');
    }`;

const newRouting = `    const isAllowedEn = parsed.locale === 'en' && ['hubIfp', 'guideIfp', 'gameDetail'].includes(parsed.type);
    if (parsed.locale !== 'id' && !isAllowedEn) {
      setCurrentLocale('id');
      setCurrentView('home');
    } else {
      setCurrentLocale(parsed.locale as 'id' | 'en');
      if (parsed.type === 'gameDetail') {
        // Additional gate: only allow IFP games for EN pilot
        const slug = decodeURIComponent(parsed.slug!);
        const ifpGames = ['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional'];
        if (parsed.locale === 'en' && !ifpGames.includes(slug)) {
          setCurrentLocale('id');
          setCurrentView('home');
        } else {
          setCurrentView('gameDetail');
          setSelectedGameId(slug);
        }
      } else if (parsed.type !== 'unknown') {
        setCurrentView(parsed.type);
      } else {
        setCurrentLocale('id');
        setCurrentView('home');
      }
    }`;

app = app.replaceAll(oldRouting1, newRouting);

// Now update the component renders to pass locale where needed
app = app.replace(
  "<HubIfp games={[...generalGames, ...kidsGames].filter(g => ifpGames.includes(g.id))} onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />",
  "<HubIfp locale={currentLocale} games={[...generalGames, ...kidsGames].filter(g => ifpGames.includes(g.id))} onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />"
);

app = app.replace(
  "<GuideIFP onBack={() => navigateTo('home', '/')} />",
  "<GuideIFP locale={currentLocale} onBack={() => navigateTo('home', '/')} />"
);

// For GameDetail, it already has selectedGameId, we need to pass locale
app = app.replace(
  "return <GameDetail ",
  "return <GameDetail locale={currentLocale} "
);

fs.writeFileSync('App.tsx', app);
