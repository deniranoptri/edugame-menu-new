const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const regex = /\{\s*"@type": "Question",\s*"name": "Apakah cocok untuk anak usia dini \(PAUD\/TK\) dan siswa SD\?",\s*"acceptedAnswer": \{\s*"@type": "Answer",\s*"text": "Sangat cocok! Kami menyediakan Mode JUNIOR khusus untuk aktivitas PAUD\/TK, serta mode UMUM yang berisi materi numerasi dan literasi dasar untuk siswa SD, SMP, hingga SMA\."\s*\}\s*\}/;

const replacement = `{
              "@type": "Question",
              "name": "Apakah cocok untuk anak usia dini (PAUD/TK) dan siswa SD?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sangat cocok! Kami menyediakan Mode JUNIOR khusus untuk aktivitas PAUD/TK, serta mode UMUM yang berisi materi numerasi dan literasi dasar untuk siswa SD, SMP, hingga SMA."
              }
            },
            {
              "@type": "Question",
              "name": "Apa perbedaan mode UMUM dan JUNIOR?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mode UMUM berisi tantangan logika, literasi, dan numerasi untuk tingkat SD hingga SMA. Mode JUNIOR difokuskan pada aktivitas dasar untuk anak usia dini (PAUD/TK)."
              }
            }`;

content = content.replace(regex, replacement);

// And update the static HTML just in case
const staticHtmlRegex = /<h3>Apakah cocok untuk anak usia dini \(PAUD\/TK\) dan siswa SD\?<\/h3>\s*<p>Sangat cocok! Kami menyediakan Mode JUNIOR khusus untuk aktivitas PAUD\/TK, serta mode UMUM yang berisi materi numerasi dan literasi dasar untuk siswa SD, SMP, hingga SMA\.<\/p>\s*<\/div>/;

const staticHtmlReplacement = `<h3>Apakah cocok untuk anak usia dini (PAUD/TK) dan siswa SD?</h3>
        <p>Sangat cocok! Kami menyediakan Mode JUNIOR khusus untuk aktivitas PAUD/TK, serta mode UMUM yang berisi materi numerasi dan literasi dasar untuk siswa SD, SMP, hingga SMA.</p>
        
        <h3>Apa perbedaan mode UMUM dan JUNIOR?</h3>
        <p>Mode UMUM berisi tantangan logika, literasi, dan numerasi untuk tingkat SD hingga SMA. Mode JUNIOR difokuskan pada aktivitas dasar untuk anak usia dini (PAUD/TK).</p>
      </div>`;
      
content = content.replace(staticHtmlRegex, staticHtmlReplacement);

fs.writeFileSync('index.html', content);
