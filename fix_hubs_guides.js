import fs from 'fs';

function addLinkToHub(filePath, guideHref, guideText, onClickCode) {
  let code = fs.readFileSync(filePath, 'utf-8');
  const linkHtml = `
            <div className="inline-block bg-white text-[#0C1A69] px-5 py-2 rounded-full font-black text-xs md:text-sm shadow-sm border-2 border-[#0C1A69]/10 mt-4 hover:scale-105 transition-transform">
              <a href="${guideHref}" onClick={(e) => { e.preventDefault(); ${onClickCode} }}>
                📖 Baca: ${guideText}
              </a>
            </div>
`;
  code = code.replace(
    /(<p className="text-sm md:text-lg text-gray-700 font-bold max-w-2xl mx-auto leading-relaxed">.*?<\/p>)/s,
    `$1${linkHtml}`
  );
  fs.writeFileSync(filePath, code);
}

addLinkToHub(
  'components/HubIfp.tsx', 
  '/panduan/penggunaan-ifp-papan-interaktif-digital', 
  'Panduan Menggunakan IFP di Kelas', 
  'navigateTo(\'guideIfp\', \'/panduan/penggunaan-ifp-papan-interaktif-digital\');'
);

addLinkToHub(
  'components/HubKids.tsx', 
  '/panduan/memilih-game-edukasi-anak', 
  'Panduan Memilih Game Anak PAUD/TK', 
  'navigateTo(\'guideKids\', \'/panduan/memilih-game-edukasi-anak\');'
);

