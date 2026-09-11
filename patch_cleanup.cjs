const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf8');

const regex = /(canonical\.setAttribute\('href', currentUrl\);)(\s*)(}, \[locale\]);)/;

const replacement = `$1$2  return () => {
      // Clear hreflang when Home unmounts
      const links = document.querySelectorAll('link[rel="alternate"][hreflang]');
      links.forEach(link => link.remove());
    };
$2$3`;

content = content.replace(regex, replacement);
fs.writeFileSync('App.tsx', content);
