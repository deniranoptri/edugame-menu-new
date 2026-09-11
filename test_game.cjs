const fs = require('fs');
let appContent = fs.readFileSync('App.tsx', 'utf8');

const heliRescue = `
  {
    id: 'helirescue',
    title: 'HELI RESCUE',
    subtitle: 'Misi Penyelamat Hutan',
    bgColor: 'linear-gradient(135deg, #064E3B 0%, #059669 100%)',
    isNew: true,
    image: 'https://raw.githubusercontent.com/deniranoptri/media/sibungas/Helikopter%20Hijau.png',
    url: 'https://helirescue.papaninteraktif.com/',
    description: "Terbang, temukan titik api, dan padamkan kebakaran hutan sambil belajar. Pilih misi, kendalikan helikopter, dan selamatkan lebih banyak hutan!",
    subject: "Umum",
    audience: "SD, SMP",
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
    tags: ['🎮 GAME EDUKASI', '🔥 Misi Penyelamat']
  },`;

appContent = appContent.replace('const generalGames: GameConfigWithTags[] = [', 'const generalGames: GameConfigWithTags[] = [' + heliRescue);
fs.writeFileSync('App.tsx', appContent);
