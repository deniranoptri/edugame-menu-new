import fs from 'fs';

let content = fs.readFileSync('components/GuideIFP.tsx', 'utf-8');

// Update props
content = content.replace('interface GuideProps {', 'interface GuideProps {\n  locale?: "id" | "en";');
content = content.replace('export const GuideIFP: React.FC<GuideProps> = ({ onBack, navigateTo }) => {', 'export const GuideIFP: React.FC<GuideProps> = ({ onBack, navigateTo, locale = "id" }) => {');

// Update logic
const oldUseEffect = `  useEffect(() => {
    document.title = 'Panduan Menggunakan Game Edukasi pada IFP di Kelas | Papan Interaktif';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Pelajari cara efektif memanfaatkan game edukasi dan Interactive Flat Panel (IFP) atau Papan Interaktif Digital untuk kolaborasi siswa dan ice breaking di kelas.');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/panduan/penggunaan-ifp-papan-interaktif-digital');

    // Schema / Structured Data for Article
    let scriptLd = document.querySelector('script#jsonld-guide-ifp');
    if (!scriptLd) {
      scriptLd = document.createElement('script');
      scriptLd.id = 'jsonld-guide-ifp';
      scriptLd.type = 'application/ld+json';
      document.head.appendChild(scriptLd);
    }`;

const newUseEffect = `  useEffect(() => {
    const isEn = locale === 'en';
    document.documentElement.lang = locale;

    document.title = isEn
      ? 'Guide: Using Educational Games on Interactive Flat Panels | Papan Interaktif'
      : 'Panduan Menggunakan Game Edukasi pada IFP di Kelas | Papan Interaktif';
    
    const desc = isEn
      ? 'Learn effective strategies for using educational games on Interactive Flat Panels (IFP) to boost classroom collaboration, engagement, and active learning.'
      : 'Pelajari cara efektif memanfaatkan game edukasi dan Interactive Flat Panel (IFP) atau Papan Interaktif Digital untuk kolaborasi siswa dan ice breaking di kelas.';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
    
    const baseUrl = window.location.origin;
    const idPath = '/panduan/penggunaan-ifp-papan-interaktif-digital';
    const enPath = '/en/guides/using-educational-games-on-interactive-flat-panels';
    const currentUrl = baseUrl + (isEn ? enPath : idPath);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Hreflang
    const updateHreflang = (lang, url) => {
      let link = document.querySelector(\`link[hreflang="\${lang}"]\`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    updateHreflang('id', baseUrl + idPath);
    updateHreflang('en', baseUrl + enPath);
    updateHreflang('x-default', baseUrl + idPath);

    // Schema / Structured Data for Article
    let scriptLd = document.querySelector('script#jsonld-guide-ifp');
    if (!scriptLd) {
      scriptLd = document.createElement('script');
      scriptLd.id = 'jsonld-guide-ifp';
      scriptLd.type = 'application/ld+json';
      document.head.appendChild(scriptLd);
    }`;

content = content.replace(oldUseEffect, newUseEffect);

// Structured data update
content = content.replace(/"headline": "Panduan Penggunaan Game Edukasi pada IFP dan Papan Interaktif Digital",/, '"headline": isEn ? "Guide: Using Educational Games on Interactive Flat Panels" : "Panduan Penggunaan Game Edukasi pada IFP dan Papan Interaktif Digital",');
content = content.replace(/"inLanguage": "id-ID",/, '"inLanguage": locale,');

// Replace the return block to toggle content based on locale
content = content.replace('          <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mb-6 leading-tight">', `{locale === 'en' ? (
            <div lang="en">
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mb-6 leading-tight">
                Guide: Using Educational Games on Interactive Flat Panels
              </h1>
              <p className="text-lg md:text-xl text-[#0C1A69]/70 font-semibold mb-8">
                How to maximize engagement, collaboration, and learning using large touch displays in the classroom.
              </p>
              
              <div className="prose prose-lg md:prose-xl max-w-none text-gray-700">
                <h2>1. What is an Interactive Flat Panel (IFP)?</h2>
                <p>
                  An Interactive Flat Panel (IFP) is a large, high-definition touchscreen display used in modern classrooms. Unlike traditional projectors, IFPs allow multiple students to touch, draw, and interact with the screen simultaneously. This transforms the front of the classroom from a passive presentation space into an active collaboration zone.
                </p>
                <p>
                  When paired with purpose-built educational games, an IFP becomes a powerful tool for visual learning, immediate feedback, and peer collaboration.
                </p>
                
                <h2>2. Why Touch Interaction Matters in Education</h2>
                <p>
                  Kinesthetic learning—learning by doing—is crucial, especially in primary education. Large-format touch interaction requires physical movement, bridging the gap between abstract concepts and physical action. For example, dragging a fraction to its correct slot on a 75-inch screen engages motor skills and spatial memory in ways a mouse click cannot.
                </p>
                
                <h2>3. IFP-Optimized Games vs. Standard Browser Games</h2>
                <p>
                  Not all web games work well on an IFP. Many standard browser games rely on small buttons, keyboard inputs, or hover states that fail on a touch display. IFP-optimized games, like those developed by <strong>Papan Interaktif</strong>, are specifically designed with:
                </p>
                <ul>
                  <li><strong>Large Touch Targets:</strong> Easy for young students to tap accurately.</li>
                  <li><strong>Multi-Touch Support:</strong> Allowing two or more students to play simultaneously (e.g., split-screen math duels).</li>
                  <li><strong>High Contrast & Scale:</strong> Clear visibility from the back of the classroom.</li>
                  <li><strong>No Hover Dependencies:</strong> Intuitive tap-and-drag mechanics.</li>
                </ul>
                
                <h2>4. Teacher Facilitation Strategies</h2>
                <p>
                  The teacher's role shifts from broadcaster to facilitator. Try these activity structures:
                </p>
                <ul>
                  <li><strong>The "Warm-Up" (Ice Breaking):</strong> Start the lesson with a 3-minute rapid-fire math or logic game to focus attention.</li>
                  <li><strong>Squad Mode:</strong> Divide the class into teams. Call representatives to the board to solve collaborative puzzles, encouraging teamwork and peer coaching.</li>
                  <li><strong>Reward Stations:</strong> Use the IFP as a reward station for students who finish their assignments early.</li>
                </ul>

                <h2>5. Practical Classroom Tips</h2>
                <ul>
                  <li><strong>Screen Height:</strong> Ensure the IFP is mounted at a height accessible to your youngest students.</li>
                  <li><strong>Stylus vs. Finger:</strong> While fingers are intuitive, using a soft-tipped stylus can help students practice proper grip for writing.</li>
                  <li><strong>Volume Control:</strong> Educational games often include sound effects. Keep the volume balanced so it engages without disrupting neighboring classes.</li>
                </ul>
                
                <p className="mt-8">
                  Ready to transform your classroom? <a href="/en/educational-games-for-interactive-flat-panels" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/en/educational-games-for-interactive-flat-panels'); }} className="text-teal-600 font-bold hover:underline">Explore our collection of verified IFP educational games</a>.
                </p>
              </div>
            </div>
          ) : (
            <div lang="id">
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mb-6 leading-tight">`);

content = content.replace(/<\/p>\s*<\/div>\s*<\/article>/, `</p>\n              </div>\n            </div>\n          )}
          </article>`);

// Fix breadcrumbs
content = content.replace(
  /<a href="\/game-edukasi-ifp" onClick=\{\(e\) => \{ e\.preventDefault\(\); navigateTo\('hubIfp', '\/game-edukasi-ifp'\); \}\}/,
  `<a href={locale === "en" ? "/en/educational-games-for-interactive-flat-panels" : "/game-edukasi-ifp"} onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', locale === "en" ? "/en/educational-games-for-interactive-flat-panels" : "/game-edukasi-ifp"); }}`
);

content = content.replace(
  /Koleksi Game IFP/g,
  `{locale === "en" ? "IFP Games Collection" : "Koleksi Game IFP"}`
);

content = content.replace(
  /Panduan Penggunaan Papan Interaktif Digital/g,
  `{locale === "en" ? "Guide: Using Interactive Flat Panels" : "Panduan Penggunaan Papan Interaktif Digital"}`
);

fs.writeFileSync('components/GuideIFP.tsx', content);
