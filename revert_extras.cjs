const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');

// Remove imports
app = app.replace("import ArticleCollaborativeIfpEn from './components/ArticleCollaborativeIfpEn';\n", '');
app = app.replace("import ArticleAssessmentIfpEn from './components/ArticleAssessmentIfpEn';\n", '');

// Remove from ParsedRoute
app = app.replace(" | 'articleCollaborativeIfpEn' | 'articleAssessmentIfpEn'", '');

// Remove from isAllowedEn
app = app.replace(", 'articleCollaborativeIfpEn', 'articleAssessmentIfpEn'", '');

// Remove parse logic
app = app.replace(/  } else if \(locale === 'en' && pathType === 'journal\/collaborative-learning-using-interactive-flat-panel'\) \{\n    return \{ locale, type: 'articleCollaborativeIfpEn' \};\n/g, '');
app = app.replace(/  } else if \(locale === 'en' && pathType === 'journal\/formative-assessment-using-interactive-flat-panel'\) \{\n    return \{ locale, type: 'articleAssessmentIfpEn' \};\n/g, '');

// Remove render logic
app = app.replace(/  if \(currentView === 'articleCollaborativeIfpEn'\) return <ArticleCollaborativeIfpEn onBack=\{\(\) => navigateTo\('blog', '\/jurnal-guru'\)\} navigateTo=\{navigateTo\} \/>;\n/g, '');
app = app.replace(/  if \(currentView === 'articleAssessmentIfpEn'\) return <ArticleAssessmentIfpEn onBack=\{\(\) => navigateTo\('blog', '\/jurnal-guru'\)\} navigateTo=\{navigateTo\} \/>;\n/g, '');

fs.writeFileSync('App.tsx', app);

// 2. Sitemap
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const sitemapRegex = /  <url>\s*<loc>https:\/\/papaninteraktif\.com\/en\/journal\/(collaborative-learning-using-interactive-flat-panel|formative-assessment-using-interactive-flat-panel)<\/loc>[\s\S]*?<\/url>\n/g;
sitemap = sitemap.replace(sitemapRegex, '');
fs.writeFileSync('public/sitemap.xml', sitemap);

// 3. Remove original files
if (fs.existsSync('components/ArticleCollaborativeIfpEn.tsx')) fs.unlinkSync('components/ArticleCollaborativeIfpEn.tsx');
if (fs.existsSync('components/ArticleAssessmentIfpEn.tsx')) fs.unlinkSync('components/ArticleAssessmentIfpEn.tsx');

