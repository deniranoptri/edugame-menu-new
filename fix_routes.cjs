const fs = require('fs');
let app = fs.readFileSync('App.tsx', 'utf8');

const routeStr = `  } else if (locale === 'id' && pathType === 'jurnal-guru/gamifikasi-pembelajaran-menggunakan-ifp') {
    return { locale, type: 'articleGamificationIfp' };
  } else if (locale === 'en' && pathType === 'journal/gamification-using-interactive-flat-panel') {
    return { locale, type: 'articleGamificationIfpEn' };`;

app = app.replace(/  \} else if \(locale === 'id' && pathType === 'jurnal-guru\/gamifikasi-pembelajaran-menggunakan-ifp'\) \{\n    return \{ locale, type: 'articleGamificationIfp' \};\n/, routeStr + '\n');

const viewStr = `        if (currentView === 'articleGamificationIfp') return <ArticleGamificationIfp onBack={() => navigateTo('blog', '/jurnal-guru')} navigateTo={navigateTo} />;
        if (currentView === 'articleGamificationIfpEn') return <ArticleGamificationIfpEn onBack={() => navigateTo('blog', '/jurnal-guru')} navigateTo={navigateTo} />;`;

app = app.replace(/        if \(currentView === 'articleGamificationIfp'\) return <ArticleGamificationIfp onBack=\{\(\) => navigateTo\('blog', '\/jurnal-guru'\)\} navigateTo=\{navigateTo\} \/>;\n/, viewStr + '\n');

fs.writeFileSync('App.tsx', app);
