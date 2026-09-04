import fs from 'fs';

let appCode = fs.readFileSync('App.tsx', 'utf-8');
appCode = appCode.replace('<EduGameSEOContent />', '<EduGameSEOContent navigateTo={navigateTo} />');
fs.writeFileSync('App.tsx', appCode);

let seoCode = fs.readFileSync('components/EduGameSEOContent.tsx', 'utf-8');
seoCode = seoCode.replace(
  'const EduGameSEOContent = () => (',
  'interface Props { navigateTo: (view: any, path: string) => void; }\n\nconst EduGameSEOContent: React.FC<Props> = ({ navigateTo }) => ('
);

seoCode = seoCode.replace(
  'href="/panduan/penggunaan-ifp-papan-interaktif-digital"',
  'href="/panduan/penggunaan-ifp-papan-interaktif-digital" onClick={(e) => { e.preventDefault(); navigateTo(\'guideIfp\', \'/panduan/penggunaan-ifp-papan-interaktif-digital\'); }}'
);

seoCode = seoCode.replace(
  'href="/panduan/memilih-game-edukasi-anak"',
  'href="/panduan/memilih-game-edukasi-anak" onClick={(e) => { e.preventDefault(); navigateTo(\'guideKids\', \'/panduan/memilih-game-edukasi-anak\'); }}'
);

fs.writeFileSync('components/EduGameSEOContent.tsx', seoCode);
