import fs from 'fs';
let content = fs.readFileSync('App.tsx', 'utf-8');

const regex = /  return \{ locale, type: 'unknown' \};\n\};\n  \} else if \(pathType === 'game-edukasi-anak'\) \{[\s\S]*?return \{ locale, type: 'unknown' \};\n\};/g;

content = content.replace(regex, `  return { locale, type: 'unknown' };\n};`);

fs.writeFileSync('App.tsx', content);
