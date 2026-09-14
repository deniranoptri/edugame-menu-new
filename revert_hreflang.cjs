const fs = require('fs');

const removeHreflang = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  const startStr = "const idUrl = 'https://papaninteraktif.com/jurnal-guru/";
  const endStr = "hrefLangDef.setAttribute('href', idUrl);";
  
  const startIndex = content.indexOf(startStr);
  if (startIndex !== -1) {
    const endIndex = content.indexOf(endStr, startIndex) + endStr.length;
    
    // We should also look slightly earlier to remove the 'const idUrl...' and replace it with just the canonical setter
    // Wait, let's just replace the whole block starting from `canonical.setAttribute` to the end of hreflang logic.
    // Instead of complex regex, let's just restore the file from Git if possible? We don't have git.
    
    // Original canonical setting:
    // canonical.setAttribute('href', window.location.origin + '/jurnal-guru/....');
  }
};
// Actually it's easier to use a simple string replace if I know what was injected.
// The injected block always starts with:
// const idUrl = 'https://papaninteraktif.com/jurnal-guru/
// and ends with:
// hrefLangDef.setAttribute('href', idUrl);

// Let's do regex replace:
const fixFile = (file, originSlug) => {
    let content = fs.readFileSync(file, 'utf8');
    const regex = /const idUrl = 'https:\/\/papaninteraktif\.com\/jurnal-guru\/[\s\S]*?hrefLangDef\.setAttribute\('href', idUrl\);/g;
    content = content.replace(regex, '');
    fs.writeFileSync(file, content);
};

fixFile('components/ArticleCollaborativeIfp.tsx');
fixFile('components/ArticleAssessmentIfp.tsx');

