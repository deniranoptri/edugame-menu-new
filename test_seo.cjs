const fs = require('fs');
const appTsx = fs.readFileSync('App.tsx', 'utf8');

// Find any dynamic SEO updates
const titleUpdates = appTsx.match(/document\.title\s*=/g) || [];
const metaUpdates = appTsx.match(/document\.querySelector\('meta\[name=".*?\]'\)/g) || [];
const effectHooks = appTsx.match(/useEffect\(\(\) => \{[^}]*title/g) || [];

console.log('Title Updates:', titleUpdates.length);
console.log('Meta Updates:', metaUpdates.length);
console.log('Effect Hooks with title:', effectHooks.length);

// Also look for SEO components
const hasSeo = appTsx.includes('SEO') || appTsx.includes('Helmet');
console.log('Has SEO Component:', hasSeo);

