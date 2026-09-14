const fs = require('fs');
const appTsx = fs.readFileSync('./App.tsx', 'utf-8');

const regex = /if \(currentView === '(articleAuthenticAssessmentIfpEn|articleClassroomManagementIfpEn|articleCooperativeIfpEn|articleReflectiveLearningIfpEn)'\)/g;
const matches = [...appTsx.matchAll(regex)];

console.log("Matches:", matches.length);
