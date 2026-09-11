const fs = require('fs');
let content = fs.readFileSync('components/EduGameSEOContent.tsx', 'utf8');

const replacement = `                {lang === 'en' ? 'Can the games be played on mobile phones?' : 'Apakah game dapat dimainkan di HP?'}
              </strong>
              <span className="text-sm opacity-80 font-medium">
                {lang === 'en' 
                   ? 'Yes, all games are fully accessible and optimized for mobile phones, tablets, laptops, Interactive Flat Panels (IFP), and Smartboards.' 
                   : 'Ya, semua game dapat diakses dan dimainkan dengan optimal melalui HP, tablet, laptop, hingga Interactive Flat Panel (IFP) dan Smartboard.'}
              </span>
            </li>
            <li>
              <strong className="block text-sm font-black text-[#E45C63]">
                {lang === 'en' ? 'Are these games free to play?' : 'Apakah game ini gratis?'}
              </strong>
              <span className="text-sm opacity-80 font-medium">
                {lang === 'en' 
                   ? 'Yes, our entire collection of free educational games is 100% free for teachers and students to access without any subscription fees.' 
                   : 'Ya, seluruh koleksi game edukasi interaktif gratis kami 100% gratis untuk diakses oleh guru dan siswa tanpa perlu biaya berlangganan.'}
              </span>
            </li>
            <li>
              <strong className="block text-sm font-black text-[#E45C63]">
                {lang === 'en' ? 'Are these games suitable for Early Childhood (PAUD/TK) and Elementary students?' : 'Apakah cocok untuk anak usia dini (PAUD/TK) dan siswa SD?'}
              </strong>
              <span className="text-sm opacity-80 font-medium">
                {lang === 'en' 
                   ? 'Absolutely! We offer a dedicated JUNIOR Mode specifically for Early Childhood activities, as well as a GENERAL mode featuring basic numeracy and literacy challenges for Elementary, Middle, and High School students.' 
                   : 'Sangat cocok! Kami menyediakan Mode JUNIOR khusus untuk aktivitas PAUD/TK, serta mode UMUM yang berisi materi numerasi dan literasi dasar untuk siswa SD, SMP, hingga SMA.'}
              </span>
            </li>`;

// Replace ignoring exact whitespace
const regex = /\{\s*lang === 'en'\s*\?\s*'Can the games be played on mobile phones\?'\s*:\s*'Apakah game dapat dimainkan di HP\?'\s*\}(.|\n)*?hingga Smartboard \(IFP\)\.'\s*\}\s*<\/span>\s*<\/li>/;

content = content.replace(regex, replacement);
fs.writeFileSync('components/EduGameSEOContent.tsx', content);
