const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf8');

const toAdd = `  if (currentView === 'articleAuthenticAssessmentIfpEn') return <ArticleAuthenticAssessmentIfpEn onBack={() => navigateTo('blog', '/en/journal')} navigateTo={navigateTo} />;
  if (currentView === 'articleReflectiveLearningIfpEn') return <ArticleReflectiveLearningIfpEn onBack={() => navigateTo('blog', '/en/journal')} navigateTo={navigateTo} />;
  if (currentView === 'articleCooperativeIfpEn') return <ArticleCooperativeIfpEn onBack={() => navigateTo('blog', '/en/journal')} navigateTo={navigateTo} />;
  if (currentView === 'articleClassroomManagementIfpEn') return <ArticleClassroomManagementIfpEn onBack={() => navigateTo('blog', '/en/journal')} navigateTo={navigateTo} />;
`;

content = content.replace(
  "if (currentView === 'articleCooperativeIfp') return <ArticleCooperativeIfp onBack={() => navigateTo('blog', '/jurnal-guru')} navigateTo={navigateTo} />;",
  "if (currentView === 'articleCooperativeIfp') return <ArticleCooperativeIfp onBack={() => navigateTo('blog', '/jurnal-guru')} navigateTo={navigateTo} />;\n" + toAdd
);

fs.writeFileSync('App.tsx', content);
