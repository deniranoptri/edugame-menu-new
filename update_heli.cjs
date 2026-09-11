const fs = require('fs');
let appContent = fs.readFileSync('App.tsx', 'utf8');

const regex = /{[\s\S]*?id:\s*'helirescue'[\s\S]*?},/;
const match = appContent.match(regex);

if (match) {
  const newConfig = `{
    id: 'helirescue',
    title: 'HELI RESCUE',
    subtitle: 'Misi Penyelamat Hutan',
    bgColor: 'linear-gradient(135deg, #064E3B 0%, #059669 100%)',
    isNew: true,
    image: 'https://github.com/deniranoptri/media/blob/sibungas/Heli%20Hijau.png?raw=true',
    url: 'https://helirescue.papaninteraktif.com/',
    description: "Terbang, temukan titik api, dan padamkan kebakaran hutan sambil belajar. Pilih misi, kendalikan helikopter, dan selamatkan lebih banyak hutan!",
    subject: "Umum",
    audience: "SD, SMP, SMA",
    educationLevel: 'general',
    learningFocus: "Ketangkasan, Logika, Pengambilan Keputusan",
    howToPlay: [
      "Pilih misi dari markas",
      "Kendalikan helikopter hijau",
      "Ambil air dan padamkan titik api",
      "Jawab pertanyaan untuk mendapatkan skor ekstra"
    ],
    educationalBenefits: [
      "Melatih koordinasi mata dan tangan",
      "Meningkatkan kesadaran lingkungan",
      "Melatih kecepatan dalam mengambil keputusan"
    ],
    tags: ['🔢 Numerasi', '📚 Literasi', '🎯 Ice Breaking', '🧠 Logika', '🏀 Sport'],
    categoryKeys: ['numeracy', 'literacy', 'ice-breaking', 'logic', 'sport']
  },`;

  appContent = appContent.replace(match[0], newConfig);
  fs.writeFileSync('App.tsx', appContent);
  console.log("Successfully updated helirescue config.");
} else {
  console.log("Could not find helirescue config.");
}
