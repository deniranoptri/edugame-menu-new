const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Update Static SEO Content HTML
const staticContentRegex = /<div class="static-seo-content">([\s\S]*?)<\/div>/;
const staticContentReplacement = `<div class="static-seo-content">
        <h1>Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif</h1>
        <p>Selamat datang di portal digital Papan Interaktif. Kami menyediakan berbagai koleksi game edukasi interaktif gratis yang dirancang agar anak dan siswa dapat belajar sambil bermain.</p>
        <p>Kami percaya bahwa pembelajaran berbasis game membuat pendidikan menjadi menyenangkan dan efektif. Melalui koleksi game edukasi interaktif gratis kami, anak-anak dan siswa di berbagai tingkat pendidikan dapat mengeksplorasi konsep dasar dalam lingkungan belajar yang tanpa tekanan.</p>
        
        <h2>Cakupan Pembelajaran</h2>
        <ul>
          <li>PAUD (Pendidikan Anak Usia Dini)</li>
          <li>SD (Sekolah Dasar)</li>
          <li>SMP (Sekolah Menengah Pertama)</li>
          <li>SMA (Sekolah Menengah Atas)</li>
        </ul>

        <h2>Kategori Game Edukasi</h2>
        <ul>
          <li>Numerasi & Matematika</li>
          <li>Literasi & Bahasa</li>
          <li>Logika & Pemecahan Masalah</li>
          <li>Ice Breaking & Aktivitas Kelas</li>
        </ul>

        <h2>Media Pembelajaran Interaktif untuk Guru</h2>
        <p>Bagi para pendidik dari tingkat PAUD hingga SMA, Papan Interaktif hadir sebagai solusi media pembelajaran interaktif yang fleksibel. Gunakan berbagai game ini sebagai sarana aktivitas kelas interaktif, latihan di kelas, maupun pembelajaran digital menggunakan layar besar Interactive Flat Panel (IFP) dan Smartboard untuk meningkatkan antusiasme siswa di sekolah.</p>
        
        <h2>Tanya Jawab (FAQ) Papan Interaktif</h2>
        <h3>Apa itu Papan Interaktif?</h3>
        <p>Platform digital yang menyediakan koleksi game pendidikan interaktif gratis tanpa perlu instalasi.</p>
        
        <h3>Siapa yang dapat menggunakannya?</h3>
        <p>Game kami dirancang untuk mendukung pembelajaran bagi anak PAUD, siswa SD, SMP, hingga SMA, serta dapat digunakan oleh guru sebagai materi ice breaking di kelas.</p>
        
        <h3>Apakah game dapat dimainkan di HP?</h3>
        <p>Ya, semua game dapat diakses dan dimainkan dengan optimal melalui HP, tablet, laptop, hingga Interactive Flat Panel (IFP) dan Smartboard.</p>
        
        <h3>Apakah game ini gratis?</h3>
        <p>Ya, seluruh koleksi game edukasi interaktif gratis kami 100% gratis untuk diakses oleh guru dan siswa tanpa perlu biaya berlangganan.</p>
        
        <h3>Apakah cocok untuk anak usia dini (PAUD/TK) dan siswa SD?</h3>
        <p>Sangat cocok! Kami menyediakan Mode JUNIOR khusus untuk aktivitas PAUD/TK, serta mode UMUM yang berisi materi numerasi dan literasi dasar untuk siswa SD, SMP, hingga SMA.</p>
      </div>`;
content = content.replace(staticContentRegex, staticContentReplacement);

// 2. Update JSON-LD FAQPage
const jsonLdRegex = /"@type": "FAQPage",\s*"mainEntity": \[\s*\{\s*"@type": "Question",\s*"name": "Perangkat apa saja yang bisa digunakan untuk main game ini\?",\s*"acceptedAnswer": \{\s*"@type": "Answer",\s*"text": "([^"]+)"\s*\}\s*\}\s*\]/;
const jsonLdReplacement = `"@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Perangkat apa saja yang bisa digunakan untuk main game ini?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sangat fleksibel! Game kami 100% responsif di HP, Tablet, PC, Laptop, Chromebook, hingga Interactive Flat Panel (IFP) dan Smartboard."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah game ini gratis?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, seluruh koleksi game edukasi interaktif gratis kami 100% gratis untuk diakses oleh guru dan siswa tanpa perlu biaya berlangganan."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah cocok untuk anak usia dini (PAUD/TK) dan siswa SD?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sangat cocok! Kami menyediakan Mode JUNIOR khusus untuk aktivitas PAUD/TK, serta mode UMUM yang berisi materi numerasi dan literasi dasar untuk siswa SD, SMP, hingga SMA."
              }
            }
          ]`;
content = content.replace(jsonLdRegex, jsonLdReplacement);

fs.writeFileSync('index.html', content);
