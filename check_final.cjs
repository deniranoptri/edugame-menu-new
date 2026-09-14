const appTsx = require('fs').readFileSync('App.tsx', 'utf8');

const checks = [
  'articleAuthenticAssessmentIfpEn',
  'articleReflectiveLearningIfpEn',
  'articleCooperativeIfpEn',
  'articleClassroomManagementIfpEn'
];

let ok = true;
checks.forEach(c => {
  if (!appTsx.includes(`if (currentView === '${c}') return <${c.charAt(0).toUpperCase() + c.slice(1)}`)) {
    console.log("Missing render for", c);
    ok = false;
  }
});

const sitemap = require('fs').readFileSync('public/sitemap.xml', 'utf8');
if (!sitemap.includes('<loc>https://papaninteraktif.com/en/journal</loc>')) {
  console.log("Missing en/journal in sitemap");
  ok = false;
}

if (ok) console.log("All fixes applied successfully.");
