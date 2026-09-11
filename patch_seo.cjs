const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf8');

const newComponent = `
const HomeSEOManager = ({ locale }: { locale: 'id' | 'en' }) => {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif';
    
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(\`meta[\${attr}="\${name}"]\`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru. Belajar sambil bermain dengan berbagai pilihan game.');
    
    // Hreflang
    const updateHreflang = (lang: string, url: string) => {
      let link = document.querySelector(\`link[hreflang="\${lang}"]\`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };
    updateHreflang('id', 'https://papaninteraktif.com/');
    updateHreflang('en', 'https://papaninteraktif.com/en/');
    updateHreflang('x-default', 'https://papaninteraktif.com/');

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentUrl = locale === 'en' ? 'https://papaninteraktif.com/en/' : 'https://papaninteraktif.com/';
    canonical.setAttribute('href', currentUrl);
    
  }, [locale]);
  return null;
};
`;

const insertIndex = content.indexOf('const App: React.FC = () => {');
content = content.substring(0, insertIndex) + newComponent + '\n' + content.substring(insertIndex);

content = content.replace('      {/* 1. OVERLAY INTRO */}', '      <HomeSEOManager locale={currentLocale} />\n      {/* 1. OVERLAY INTRO */}');

fs.writeFileSync('App.tsx', content);
