const fs = require('fs');
const file = 'components/JurnalGuru.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add locale to props
content = content.replace("interface JurnalGuruProps {", "interface JurnalGuruProps {\n  locale?: 'id' | 'en';");
content = content.replace("const JurnalGuru: React.FC<JurnalGuruProps> = ({ onBack, navigateTo }) => {", "const JurnalGuru: React.FC<JurnalGuruProps> = ({ locale, onBack, navigateTo }) => {");

// Replace lang state with currentLang
content = content.replace("const [lang, setLang] = useState<'id' | 'en'>('id');", "const currentLang = locale || 'id';");

// Fix canonical URL based on locale
content = content.replace("canonical.setAttribute('href', window.location.origin + '/jurnal-guru');", "canonical.setAttribute('href', window.location.origin + (currentLang === 'en' ? '/en/journal' : '/jurnal-guru'));");

// Replace language toggle
content = content.replace(
  /<div className="flex bg-gray-100 rounded-xl p-1 shadow-inner">[\s\S]*?<\/div>/,
  `<div className="flex bg-gray-100 rounded-xl p-1 shadow-inner">
              <button onClick={() => navigateTo('blog', '/jurnal-guru')} className={\`px-4 py-1.5 rounded-lg text-sm font-black transition-all \${currentLang === 'id' ? 'bg-[#0C1A69] text-white shadow-md' : 'text-gray-500 hover:text-[#0C1A69]'}\`}>🇮🇩 ID</button>
              <button onClick={() => navigateTo('blogEn', '/en/journal')} className={\`px-4 py-1.5 rounded-lg text-sm font-black transition-all \${currentLang === 'en' ? 'bg-[#0C1A69] text-white shadow-md' : 'text-gray-500 hover:text-[#0C1A69]'}\`}>🇬🇧 EN</button>
            </div>`
);

// Fix \n bugs
content = content.replace(/\\n/g, "");

// Replace lang === 'id' with currentLang === 'id'
content = content.replace(/\{lang === 'id' \? \(/g, "{currentLang === 'id' ? (");

// Remove the placeholder block for lang === 'en' and replace with English layout
// I'll leave a token that we will replace with the full English JSX
content = content.replace(/<div className="animate-fadeIn space-y-16">\s*<section className="text-center max-w-4xl mx-auto">[\s\S]*?<\/div>\s*\)}/, `ENGLISH_LAYOUT_PLACEHOLDER\n          )}`);

fs.writeFileSync('components/JurnalGuru2.tsx', content);
