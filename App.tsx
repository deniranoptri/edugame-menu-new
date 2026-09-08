import React, { useState, useEffect, Suspense, lazy } from 'react';
import { GameConfig } from './types';
import MenuCard from './components/MenuCard';
import ProfileModal from './components/ProfileModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import JurnalGuru from './components/JurnalGuru';
import GuideIFP from './components/GuideIFP';
import GuideKids from './components/GuideKids'; 
import GameDetail from './components/GameDetail';
import EduGameSEOContent from './components/EduGameSEOContent';
import StatistikDewa from './components/StatistikDewa';
import CommunityHub from './components/CommunityHub';
import { HubIfp } from './components/HubIfp';
import { HubKids } from './components/HubKids';
import { HubLogic } from './components/HubLogic';
import NotFound from './components/NotFound';
import { AdSenseDisplay } from './components/AdSenseDisplay';

// --- THE GOLDEN PATH: Hanya Galeri yang di-lazy load ---
const GaleriAksi = lazy(() => import('./components/GaleriAksi'));

// --- TYPE DEFINITION ---
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed', platform: string }>;
  prompt(): Promise<void>;
}

const SIDEBAR_IMAGE_URL = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiy1nBWxRDPWSuvIxaPghmzXv4MwoxjhM_dfs-KrOTsq8WM6FOW4VrvN9mC-02axBYmE_MvWj3GNpQD_BjPl1f72P2135RE46bRzS0UuHjfqgvmBvvJVZy6a_QK2VzmlEvWtsKkxILLrJwAS6wEZ_lUuKI7_uhyphenhyphenGvegOgXWiIiQJhJErxvgPAaBjCBHZs4/s320/qr-code%20(3)%20(1).png';

type GameMode = 'general' | 'kids';
interface GameConfigWithTags extends GameConfig { tags?: string[]; }

// ==========================================
// DATA STATIS (GAME & SOSMED)
// ==========================================
const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/best_deny?igsh=MTdqYTJmcWsydGUwMw==", icon: "https://img.icons8.com/fluency/96/instagram-new.png" },
  { name: "TikTok", url: "https://www.tiktok.com/@denipositif", icon: "https://img.icons8.com/fluency/96/tiktok.png" },
  { name: "Facebook", url: "https://web.facebook.com/demian.renovtri.3?rdid=NebkE1tEAlxKk8ZM&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1FwSzyNwVW%2F%3F_rdc%3D1%26_rdr", icon: "https://img.icons8.com/fluency/96/facebook-new.png" },
  { name: "YouTube", url: "https://www.youtube.com/@DeniRanoptri", icon: "https://img.icons8.com/fluency/96/youtube-play.png" }
];

const generalGames: GameConfigWithTags[] = [
  { 
    id: 'sciencelink', 
    title: 'SCIENCELINK', 
    subtitle: 'Hubungkan. Pikirkan. Pecahkan.', 
    bgColor: '#3B82F6', 
    isNew: true, 
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGqPeG33pZdH1f3z1vSv9MC5lNhiqmO1QuhCWRMEcCxmhVwDq0OkjVBXH0vVJtHDPLZtADD_hc3DiBvEyU5VAEe72mhxhp-ZPxnTfHFvXoh0DNx4WUfX2mHrm8yaEe-SPRxnrnNALjhxDed8__Xb34zDX0asS-Cxc_qCO5IH4zpzblU35E18KJ67tymE0/s320/ChatGPT_Image_3_Sep_2026__18.46.21-removebg-preview%20(1).png', 
    url: 'http://sciencelink-game.papaninteraktif.com/', 
    description: "Game edukasi IPA interaktif berbasis puzzle yang melatih pemahaman konsep sains dan logika penalaran.", 
    subject: "IPA", 
    audience: "SD, SMP", 
    educationLevel: 'sd', 
    learningFocus: "IPA, pemahaman konsep sains, logika penalaran", 
    howToPlay: [
      "Amati kepingan puzzle sains yang tersedia.",
      "Hubungkan konsep yang memiliki keterkaitan.",
      "Pecahkan teka-teki logika untuk menyelesaikan level."
    ],
    educationalBenefits: [
      "Meningkatkan daya nalar logika analitis.",
      "Memperkuat pemahaman konsep dasar sains.",
      "Melatih kemampuan literasi dan memecahkan masalah."
    ],
    tags: ['🧠 Logika', '🧪 Science', '📖 Literasi'], 
    categoryKeys: ['logic'], 
    en: { 
      title: 'SCIENCELINK', 
      subtitle: 'Connect. Think. Solve.', 
      description: 'An interactive science puzzle game designed to strengthen science concept understanding and reasoning skills.', 
      subject: 'Science', 
      audience: 'SD, SMP', 
      learningFocus: 'Science concept understanding and reasoning skills',
      howToPlay: [
        "Observe the available science puzzle pieces.",
        "Connect related scientific concepts together.",
        "Solve the logic puzzles to complete the level."
      ],
      educationalBenefits: [
        "Enhances analytical and logical reasoning.",
        "Strengthens foundational science concepts.",
        "Trains literacy and problem-solving skills."
      ]
    } 
  },
  { id: 'banua-fruit-blast', howToPlay: ["Perhatikan soal matematika yang muncul di layar utama.","Tunggu buah-buahan melayang yang membawa berbagai pilihan angka.","Ayunkan tangan untuk mengiris buah yang membawa jawaban yang benar.","Hindari mengiris bom atau buah dengan jawaban yang salah.","Kumpulkan skor tertinggi sebelum batas waktu berakhir."], educationalBenefits: ["Melatih kemampuan berhitung cepat (aritmatika dasar).","Meningkatkan koordinasi mata dan motorik tangan.","Melatih fokus dan konsentrasi di bawah tekanan waktu."], title: 'Banua Fruit Blast', subtitle: 'Tangkas Berhitung!', bgColor: '#FDE047', variant: 'light', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7_-xIdrFuZldq1efv-ZFHF96-JfzrXLhrEc20MJCag0mugIOTe6h47St9n7eU8pxR1r_YuQiSUXKRU4pnXVvtKsKqY1bsMXo3KvvUYkVeSYLzbO4-BTsbFIwroLY2Wu8DTk61LPMOC0MriY2i56esO1oHyF7zufg9nfMAd4F41nN8yJQezs7cihxMK4A/s320/Durian%20(1).png', url: 'https://borneo-fruit-math.papaninteraktif.com/', description: "Game edukasi interaktif untuk melatih ketangkasan berhitung dengan tema memotong buah. Cocok digunakan sebagai ice breaking seru dalam pembelajaran matematika.", subject: "Matematika", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Berhitung cepat, penjumlahan, dan pengurangan", tags: ['🔢 Numerasi', '🎯 Ice Breaking'], categoryKeys: ['numeracy', 'ice-breaking'], 
    
    
    en: { howToPlay: ["Observe the math problem displayed on the screen.","Wait for the flying fruits carrying various number choices.","Swipe your hand to slice the fruit with the correct answer.","Avoid slicing bombs or fruits with incorrect answers.","Collect the highest score before the time runs out."], educationalBenefits: ["Practices rapid mental calculation (basic arithmetic).","Improves hand-eye coordination and motor skills.","Trains focus and concentration under time pressure."], 
      
       title: 'Fruit Blast', subtitle: 'Math Ninja!', description: 'Slice the flying fruits bearing the correct answers! An energetic, physical math game perfect for classroom interactive displays.', subject: 'Mathematics', audience: 'Primary & Middle School', learningFocus: 'Rapid arithmetic and hand-eye coordination' } },
  { id: 'si-pemanah', howToPlay: ["Lihat target angka atau soal matematika yang diberikan.","Arahkan busur panah ke jawaban yang paling tepat.","Tarik dan lepaskan anak panah untuk menembak target.","Lanjutkan ke level berikutnya dengan tingkat kesulitan yang meningkat."], educationalBenefits: ["Meningkatkan kecepatan dan ketepatan menghitung.","Melatih fokus visual dan akurasi.","Membangun pemahaman konsep angka secara interaktif."], title: 'Si Pemanah', subtitle: 'Hitung Cepat!', bgColor: '#FF8FA3', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFK-Ir2BUVTmlaGzV279kgueLH1lPZGVKYrqcvyn_vXZZ2XQ1pvhwNFGr_1O3gYwrB_lDuBIKPyZ2oW00vziBkPeCUFyJd7FWnacC-h12HuyQevX2GIfhxOc33n3II8nxdZjv0N6o7pADC5aYoX5ik4i84NuBr3e9Igsno5tIPCLKveqFd23jKQ5x9KUI/s320/Banner%20Panah%20(1).png', url: 'https://matharcher.papaninteraktif.com/', description: "Latih ketepatan dan kecepatan berhitungmu bersama Si Pemanah. Jawab soal matematika dengan benar untuk mengumpulkan skor tertinggi!", subject: "Matematika", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Ketangkasan operasi hitung matematika", tags: ['🔢 Numerasi', '🎯 Ice Breaking'], categoryKeys: ['numeracy', 'ice-breaking']
    
    
  },
  { id: 'rimba-pedia', howToPlay: ["Jelajahi peta virtual hutan Nusantara.","Cari dan temukan berbagai hewan langka yang bersembunyi.","Pilih hewan yang ditemukan untuk membaca ensiklopedia informasinya.","Jawab pertanyaan singkat terkait hewan tersebut untuk mendapatkan poin."], educationalBenefits: ["Meningkatkan literasi membaca melalui informasi ensiklopedia.","Menambah wawasan tentang keanekaragaman hayati Indonesia.","Melatih ketelitian visual dalam mencari objek."], title: 'Rimba Pedia', subtitle: 'Si Juara Rimba', bgColor: '#84CC16', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjd7ulS7iCpTxTVH-Tz2kcglmGvWbO2-UKqbuSeFU6WWvebWkhLPvWLI_TKXw84qI3ZdX-cSQ2k9rSAHLgY2UJSa3s3OxY-zrrmRrvzY7QBJjygEkrATNdH1KOgYLNFCViUhOi2v1insda58uYeeeVjBFmqejfFvE-t_QZ47cwn8zjygL_4-GUXL5cGHto/s320/Maskot%20Rimba%20Pedia.png', url: 'https://zoology-game.papaninteraktif.com/', description: "Jelajahi dunia satwa melalui permainan logika dan literasi. Temukan fakta menarik tentang hewan di setiap tantangannya.", subject: "Ilmu Pengetahuan Alam (IPA)", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Pengenalan hewan dan kemampuan literasi dasar", tags: ['🧠 Logika', '📚 Literasi'], categoryKeys: ['logic', 'literacy']
    
    
  },
  { id: 'celestial-weaver', howToPlay: ["Pilih tantangan menenun dari motif tradisional yang tersedia.","Perhatikan pola warna dan bentuk pada panduan.","Tarik benang virtual dan ikuti pola yang sesuai.","Selesaikan tenunan hingga membentuk kain tradisional yang utuh."], educationalBenefits: ["Melatih pengenalan pola dan logika algoritmik dasar.","Menumbuhkan apresiasi terhadap seni budaya tradisional.","Meningkatkan ketelitian dan motorik halus."], title: 'Celestial Weaver', subtitle: "Cahaya Al-Qur'an", bgColor: '#D4AF37', variant: 'light', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjuGE36YiPnipfJQm5p2co9Z0yarZ16G7pGNrtMjWzgS2KH-CUb8p36cgQWXsDRd3eor6VwajJSzaB20Vqcg6xWBAVHyG7_OZ6aQuFYZ-2HAxJ_pR50eUaMYmW0dpJxddxXQbTlHLvoOJYXrpIFpdl4Mr5C__jZRZBxbXA9vYWnb1Z_d_I3yBOOKWinhE/s320/Maskot%20Penenun%20Langit.png', url: 'https://susunayat.papaninteraktif.com/', description: "Bermain sambil mengingat ayat suci Al-Qur'an. Game edukasi Islami ini mengajak pemain menyusun dan merangkai ayat dengan interaktif.", subject: "Pendidikan Agama Islam", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Menyusun dan menghafal ayat Al-Qur'an", tags: ['🕌 Religion'], categoryKeys: ['religion']
    
    
  },
  { id: 'tanzib', howToPlay: ["Pilih tingkat kesulitan kuis seputar sejarah Islam.","Baca pertanyaan yang ditampilkan di layar.","Pilih jawaban yang paling tepat dari opsi yang tersedia.","Pelajari penjelasan sejarah setelah menjawab pertanyaan."], educationalBenefits: ["Meningkatkan wawasan literasi sejarah kebudayaan Islam.","Melatih kemampuan membaca dan pemahaman teks.","Membangun karakter dan nilai moral dari tokoh sejarah."], title: 'Tanzib', subtitle: 'Timbangan Ajaib', bgColor: '#86EFAC', variant: 'light', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhFouZ_ymguwUi_5JpQEwVTYYxEgYssqJz3Bi4Z8GZ-bfdMV3S3apdKlvzuyk5MaNaEdnoY6_8JNKKCE_fBjLWZ5_kaOHoCkHZiFWS_SFkJiCtiyB1f4M8PeKIoTaJd7LsEZ5hRGZ-B9rCP8abGvvsm68i_-LMsAyTWo8ols4JYZUQtyddiJio1oQcB70/s320/Maskot%20Tanzib.png', url: 'https://tanzib.papaninteraktif.com/', description: "Gunakan logika dan pengetahuan agamamu pada Timbangan Ajaib Tanzib. Media pembelajaran Islami yang menyenangkan untuk anak.", subject: "Pendidikan Agama Islam", audience: "SD, SMP, SMA", educationLevel: 'paud', learningFocus: "Logika dan pengetahuan dasar agama Islam", tags: ['🕌 Religion'], categoryKeys: ['religion']
    
    
  },
  { id: 'puzzle', howToPlay: ["Perhatikan gambar utuh sebelum diacak.","Pilih kepingan puzzle yang berserakan.","Tarik dan letakkan kepingan ke tempat yang tepat di kanvas.","Susun hingga gambar Nusantara kembali utuh."], educationalBenefits: ["Melatih kemampuan logika spasial dan visual.","Meningkatkan memori jangka pendek anak.","Mengenalkan keragaman budaya Nusantara secara visual."], title: 'Puzzle Gambar', subtitle: 'Upload Fotomu', bgColor: '#E45C63', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDiOjA2nF3n1UofFD8_i9djAN1Qkri6qB2RQ96FZWQRoG2l_44YOYgeEKSR02oM2A5PDXe7oBMBirKANMy707iY5qbgOaW15x6fygGuaCdfEK6Afl-J3DDYFBLKhZIq25i1c6T0iknRFs0i544lfLJXH--3vq62ni3Q3pAWvXdjgpS-gbTuporOLpp4KE/s320/Gemini_Generated_Image_uszotzuszotzuszo.png', url: 'https://gamepuzzle.papaninteraktif.com/', description: "Susun kepingan puzzle menjadi gambar yang utuh. Kamu juga bisa mengunggah foto sendiri atau materi pelajaran untuk dijadikan puzzle interaktif!", subject: "Umum", audience: "SD, SMP, SMA", educationLevel: 'general', learningFocus: "Pemecahan masalah, pengenalan pola, dan ketelitian", tags: ['🎯 Ice Breaking', '🧠 Logika'], categoryKeys: ['ice-breaking', 'logic'], 
    
    
    en: { howToPlay: ["Observe the complete image before it is scrambled.","Select the scattered puzzle pieces.","Drag and drop the pieces into the correct spots on the canvas.","Arrange them until the cultural image is fully restored."], educationalBenefits: ["Trains spatial and visual logic skills.","Improves short-term memory.","Visually introduces the diversity of Indonesian culture."], 
      
       title: 'Sliding Puzzle', subtitle: 'Logic Challenge', description: 'A classic sliding picture puzzle reimagined for large touch screens. Slide the tiles to recreate the hidden image.', subject: 'General', audience: 'Primary School', learningFocus: 'Spatial reasoning and problem solving' } },
  { id: 'martabak-pecahan', howToPlay: ["Terima pesanan pelanggan yang meminta porsi martabak tertentu.","Pilih alat pemotong untuk membagi martabak sesuai nilai pecahan.","Seret potongan martabak yang bernilai benar ke dalam kotak pesanan.","Selesaikan pesanan sebelum pelanggan pergi."], educationalBenefits: ["Mengenalkan konsep pecahan matematika secara visual dan konkret.","Melatih kemampuan pemecahan masalah sederhana.","Mengaitkan matematika dengan kehidupan sehari-hari."], title: 'Martabak Pecahan', subtitle: 'Pecahan Lezat!', bgColor: '#FFCA28', variant: 'light', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu5jvoWO1DRyKA0D0CD832i-WsHCSU4nKms58i1r4aFkoQZ8IOnrPiOu8mw3OkvHUh677iLoDu1aEbze6almA56iSYkk0troBFT9XlOVn8l_74yLTg9wHTb-wSdWm8YRbIPvLpXpROqhC_Hv13U9mHCjugfWdlnKHNSvar5lUDhs_KxM2BjtX77-6ZfJQ/s320/Maskot%20Martabak%20Pecahan.png', url: 'https://fraction.papaninteraktif.com/', description: "Belajar konsep pecahan matematika jadi lebih mudah dan lezat menggunakan analogi potongan martabak.", subject: "Matematika", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Pemahaman konsep dasar pecahan matematika", tags: ['🔢 Numerasi'], categoryKeys: ['numeracy']
    
    
  },
  { id: 'doodle', howToPlay: ["Pilih alat gambar (kuas, pensil, atau penghapus).","Gunakan layar sentuh untuk menggambar bebas di atas kanvas.","Eksperimen dengan berbagai warna untuk menghias karya.","Simpan atau hapus kanvas untuk memulai kembali."], educationalBenefits: ["Merangsang imajinasi dan kreativitas visual.","Melatih motorik halus dan koordinasi tangan-mata.","Menjadi media ekspresi bebas untuk anak."], title: 'Doodle AI', subtitle: 'Gambar & Tebak', bgColor: '#41A89A', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv278dz0lS1ghi7uhC-cmG_Q1aj6_GSPxB0S1HzXTt2Pe_gW8D2ctjfXor7Zw5fbBhPu7MtMAzB4J0pxOMC6744AQR_Ca1TRHLPV3D9aFuQdXvugTc5UX2NbMAmRfe5wX26yi9BBX9YUv4w1vmw8LFndt-X_Hiwj_Lau0hzeJ7frOEjbLjCW0QjkFKd1g/s320/Gemini_Generated_Image_mwdim1mwdim1mwdi.png', url: 'https://doodleai.papaninteraktif.com/', description: "Uji kreativitasmu dalam menggambar! Kecerdasan buatan (AI) akan menebak setiap gambar yang kamu buat dalam waktu singkat.", subject: "Seni Budaya", audience: "SD, SMP, SMA", educationLevel: 'general', learningFocus: "Kreativitas, ekspresi seni, dan motorik halus", tags: ['🎯 Ice Breaking'], categoryKeys: ['ice-breaking'], 
    
    
    en: { howToPlay: ["Choose a drawing tool (brush, pencil, or eraser).","Use the touch screen to draw freely on the canvas.","Experiment with various colors to decorate your art.","Save or clear the canvas to start over."], educationalBenefits: ["Stimulates imagination and visual creativity.","Trains fine motor skills and hand-eye coordination.","Serves as a medium for free expression."], 
      
       title: 'Neon Doodle', subtitle: 'Creative Canvas', description: 'A vibrant, multi-touch drawing canvas perfect for interactive flat panels. Express creativity freely with glowing neon effects.', subject: 'Arts & Creativity', audience: 'Early Childhood & Kindergarten', learningFocus: 'Fine motor skills and artistic expression' } },
  { id: 'si-taktik', howToPlay: ["Perhatikan area permainan Tic-Tac-Toe.","Pilih kotak kosong untuk meletakkan simbol milikmu (X atau O).","Coba susun tiga simbol berurutan secara horizontal, vertikal, atau diagonal.","Halangi lawan agar tidak menyusun tiga simbol lebih dulu."], educationalBenefits: ["Melatih pemikiran strategis dan perencanaan langkah.","Meningkatkan kemampuan problem solving dan antisipasi.","Membangun logika berpikir sederhana."], title: 'Si Taktik', subtitle: 'Garis Bilangan', bgColor: '#8B5CF6', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEif7b-vf9o0OzbR5jrTj5pFKuxAAExEuQzhqq63VPuPhaMP75IuTBAn1lKQgDyN1mw9GOuhICQe5L9xYGBuXtu5PYp8Z9k92kV0tKAgkguAIF-buJUTlST49XhgCKJhZ9jhXyOxk2AN1ZyPLmVfePQX6LQCX2yHn_OzIdeGHiZcmXX63JA1iHvlX8bpEC4/s320/Maskot%20Sitaktik.png', url: 'https://line.papaninteraktif.com/', description: "Pahami konsep urutan dan nilai angka melalui permainan garis bilangan interaktif bersama Si Taktik.", subject: "Matematika", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Logika matematika dan pemahaman garis bilangan", tags: ['🔢 Numerasi', '🧠 Logika'], categoryKeys: ['numeracy', 'logic']
    
    
  },
  { id: 'traditional', howToPlay: ["Pilih jenis alat musik gamelan yang ingin dimainkan.","Sentuh atau ketuk bilah/instrumen di layar untuk menghasilkan suara.","Ikuti panduan nada untuk memainkan lagu tradisional sederhana.","Eksplorasi harmoni dengan membunyikan beberapa instrumen."], educationalBenefits: ["Mengenalkan kekayaan alat musik tradisional Indonesia.","Melatih kecerdasan musikal dan ritme.","Meningkatkan apresiasi terhadap seni budaya lokal."], title: 'Lomba 17an', subtitle: 'Seru & Edukatif', bgColor: '#F97316', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXDLPkdDSdK6fnr5gBL21nQ-b0OOa_JnzXOB0f5upVp4zi8A_kfgPexBA6vbZ-EDxRRNjIm6Sz2KlxXqXqEwAvNLrjQq_bVrO936mzj7lUdKSzrpPLD9VuCHc7AIiNKIlZ-k4NNOr2lvlXmTp7Ra1w6Hgr2T2JKjA6JW32B68DDtpN7PRG1auA62_Dvv0/s320/Gemini_Generated_Image_ryqss2ryqss2ryqs.png', url: 'https://script.google.com/a/macros/guru.sd.belajar.id/s/AKfycbx7noID9ShAAhj5-Us7pS2SZSGQthsb88u74G78i0o9pTGJxg2RUIeXznQi8EsnYvGYFg/exec', description: "Rasakan keseruan berbagai perlombaan khas 17 Agustus secara virtual. Sangat cocok digunakan untuk ice breaking memeriahkan kelas.", subject: "Umum", audience: "SD, SMP, SMA", educationLevel: 'general', learningFocus: "Ketangkasan dan perayaan budaya lokal", tags: ['🎯 Ice Breaking'], categoryKeys: ['ice-breaking'], 
    
    
    en: { howToPlay: ["Select a traditional gamelan instrument to play.","Touch or tap the bars/instruments on the screen to produce sound.","Follow the note guide to play simple traditional songs.","Explore harmony by playing multiple notes."], educationalBenefits: ["Introduces the rich traditional instruments of Indonesia.","Trains musical intelligence and rhythm.","Increases appreciation for local cultural arts."], 
      
       title: 'Gamelan Virtual', subtitle: 'Indonesian Heritage', description: 'Experience the traditional sounds of Indonesia. Play a virtual Gamelan instrument directly on your interactive flat panel.', subject: 'Arts & Culture', audience: 'All Ages', learningFocus: 'Cultural appreciation and musical rhythm' } },
  { id: 'space-war', howToPlay: ["Kendalikan pesawat luar angkasa dengan memecahkan soal matematika.","Tembak musuh yang datang dengan mengetik atau memilih jawaban benar.","Jawab secepat mungkin sebelum musuh mendekat.","Kalahkan bos musuh di akhir setiap level."], educationalBenefits: ["Melatih kemampuan aritmatika mental di bawah tekanan.","Meningkatkan fokus dan refleks cepat.","Membangun kepercayaan diri dalam menyelesaikan soal matematika."], title: 'Perang Antariksa', subtitle: 'Duel Matematika', bgColor: '#2563EB', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfNq2O2XWhCVJzkLTaPoiCkcivk0Zlq_JAG-hSdNNBDCaVZk5WM-iuqkGDmki55wDi58SfRPrmL8b_VUQfPPhNlPtKufTnK5VHl0rc0utlKjHx7CpC1lbOP3bEFHZdM86rp6naEpUd8wosYHZUoXG2BIHBF3J6NMc8lnIZPPspYnt-e6ullW1c4vzo3t_E/s320/Rocket.png', url: 'https://spacewar.papaninteraktif.com/', description: "Berpetualang di luar angkasa sambil berduel matematika! Jawab soal perhitungan secepat mungkin untuk mengalahkan musuh.", subject: "Matematika", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Berhitung cepat di bawah tekanan waktu", tags: ['🔢 Numerasi', '🎯 Ice Breaking'], categoryKeys: ['numeracy', 'ice-breaking']
    
    
  },
  { id: 'ai-basketball', howToPlay: ["Berdiri di depan kamera panel interaktif.","Ikuti instruksi gerakan (seperti melompat atau melempar) untuk memasukkan bola.","Sinkronkan gerakan fisikmu dengan timing di layar.","Kumpulkan poin terbanyak dari setiap tembakan sukses."], educationalBenefits: ["Meningkatkan aktivitas fisik dan kesehatan tubuh.","Melatih koordinasi motorik kasar dan ketepatan gerak.","Memberikan pengalaman olahraga secara imersif dan interaktif."], title: 'AI Basketball', subtitle: 'Aktif Bergerak!', bgColor: '#E11D48', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjp3sVIyv-kJXG-Fc10xuPFZsf08StShfsHuGfBT_m7uQ2IqLjYHZsLkgavpxY55AtKstI5vMpmZ88JCViHbG9iOx5PpW0iRc4V3dL4LXPqktPASKTJYwrM4UYHvCt4gOQvd8lmgJTBY_cnA2UXSjuDirZ9uR0inJQDQtu1LPfassmjaAI5NY9WwgvsMpY/s320/Gandrung%20Banyuwangi%20(5).png', url: 'https://gamebasket.papaninteraktif.com/', requiresCamera: true, description: "Ayo aktif bergerak! Gunakan kamera perangkatmu untuk mendeteksi gerakan tubuh dan masukkan bola basket ke dalam ring secara virtual.", subject: "Pendidikan Jasmani Olahraga dan Kesehatan (PJOK)", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Aktivitas fisik, koordinasi gerak, dan motorik kasar", tags: ['🏀 Sport'], categoryKeys: ['sport']
    
    
  },
  { id: 'mancing-kata', howToPlay: ["Perhatikan kata target yang diminta di layar.","Arahkan kail pancing virtual ke ikan yang membawa huruf yang tepat.","Tangkap huruf secara berurutan agar membentuk kata.","Hindari menangkap rintangan atau huruf yang salah."], educationalBenefits: ["Meningkatkan penguasaan kosa kata dan ejaan.","Melatih ketelitian visual dan fokus.","Mengenalkan struktur bahasa secara interaktif."], title: 'Mancing Kata', subtitle: 'Cari Kata Di Air', bgColor: '#0891B2', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpSjLuKJrEQPtuH1smtS9YzOmHnGuQHA7spa1Sx7f-VgSAbVvOfxWhXa8dzNwVSRsBX12siu0UktZ-i8I4z7SBVSlAvaygRmhkrXifqbUVv0DPo9Efa-dUALggq57aV8Ut9w5rZ-eewS1i5DS8jmefv6wjN0QxW4XHEas8SmxL1qvdQlb_LwhJqnfQK-Y/s320/Mancing%20Kata%20(1).png', url: 'https://fishing.papaninteraktif.com/', description: "Uji ketangkasanmu memancing huruf dan kata yang tersembunyi di dalam air.", subject: "Bahasa Indonesia", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Pengenalan kosa kata dan ketelitian", tags: ['🏀 Sport'], categoryKeys: ['sport']
    
    
  },
  { id: 'kancil', howToPlay: ["Perhatikan peta labirin atau rintangan di layar.","Rancang jalur pergerakan menggunakan blok-blok perintah arah.","Susun algoritma (maju, belok kiri, belok kanan) agar Kancil mencapai tujuan.","Jalankan program dan perbaiki jika Kancil menabrak rintangan."], educationalBenefits: ["Mengenalkan dasar-dasar pemikiran komputasional (coding).","Melatih pemecahan masalah (problem solving) secara logis.","Membangun kemampuan perencanaan dan prediksi."], title: 'Jalan Kancil', subtitle: 'Logika Cerdik', bgColor: '#34D399', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijXtqFFq3xZyu4xI6Nsbcy72LwNLy-ldn1JoPY7u87ZCV7CZBJZQX826CpHECNfq3BQBwFEwg7NqoCb1UTkMw0r93vpsAM6r_C3BzzUoamg-E-pSWDsStY87jV2_SghUkuJWhaLbEpOzFp4kso6UF9buCTnvqo7wE0PSdfE4-nMt83wPNH1LilNZ-AsKc/s320/Kancil.png', url: 'https://kancil-logic-puzzle-game.papaninteraktif.com/', description: "Bantu Kancil mencari jalan keluar! Permainan teka-teki logika yang melatih otak untuk berpikir kritis dan menyusun strategi.", subject: "Umum", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Berpikir komputasional dan pemecahan masalah", tags: ['🧠 Logika'], categoryKeys: ['logic']
    
    
  },
  { id: 'nusaboard', howToPlay: ["Buka kanvas kosong interaktif NusaBoard.","Tambahkan teks, bentuk, atau gambar untuk memulai diskusi.","Tarik garis penghubung antar elemen untuk membuat peta pikiran (mind map).","Gunakan bersama teman dalam sesi kolaborasi kelas."], educationalBenefits: ["Meningkatkan kemampuan pengorganisasian ide dan informasi.","Melatih kreativitas presentasi visual.","Mendukung kerja sama tim dan kolaborasi ide secara real-time."], title: 'NusaBoard', subtitle: 'Mind Mapping', bgColor: 'linear-gradient(135deg, #FFFFFF 50%, #FFEBEE 100%)', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEOjCuKDE5__LJd0D3T9HZ8geCq_1ZllO24IyjsnY8RAya4AcCrnXUTWP8P4qFsIO1WSlk0CLi2YhlaVC_yaTXksTq4DC6W7g2f7okaDfKbyoPpuhzZjyMCR8EiTwdpY-NbOF6qW3JZZrPP0DhpLg5mIqXJYdyAWnRfGTgaa5RVU7UeG6jGpORcPm80KHl/s320/Maskot%20Kanvas%20Merah%20Putih.png', url: 'https://nusa.papaninteraktif.com/', variant: 'light', description: "Kanvas interaktif untuk menyusun ide, mind mapping, dan kolaborasi pemikiran secara visual.", subject: "Umum", audience: "SD, SMP, SMA", educationLevel: 'general', learningFocus: "Pengorganisasian ide dan visualisasi konsep", tags: ['🧠 Logika'], categoryKeys: ['logic'], 
    
    
    en: { howToPlay: ["Open the interactive blank NusaBoard canvas.","Add text, shapes, or images to start the discussion.","Draw connecting lines between elements to create mind maps.","Use it together with peers during classroom collaboration sessions."], educationalBenefits: ["Improves idea and information organization skills.","Trains creative visual presentation.","Supports teamwork and real-time idea collaboration."], 
      
       title: 'NusaBoard', subtitle: 'Mind Mapping', description: 'An interactive canvas designed for collaborative brainstorming, mind mapping, and visual concept organization on large touch displays.', subject: 'General', audience: 'Middle School & Teachers', learningFocus: 'Idea organization and visual collaboration' } },
  { id: 'jagoan-kata', howToPlay: ["Lihat serangkaian huruf acak yang diberikan.","Geser dan rangkai huruf-huruf tersebut menjadi sebuah kata baku.","Temukan sebanyak mungkin kombinasi kata tersembunyi.","Selesaikan teka-teki sebelum waktu habis."], educationalBenefits: ["Memperkaya perbendaharaan kosa kata Bahasa Indonesia.","Melatih kemampuan anagram dan pemrosesan bahasa.","Meningkatkan kemampuan mengeja kata dengan benar."], title: 'Jagoan Kata', subtitle: 'Juara Literasi', bgColor: '#6366F1', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJLVBGFE3CLamQlfD91je9a9DbkTCFUIqZmSDUTpi1_ZYis_NCXGQLGgVXeNxD2b4vd_3PC1J3OuBHcdYQFb7FvPctkf-yE5kxNW-nIfha6O26S8g74MHVcsl1sfuPXlbabDhEBEaiNnHD8BPqy2h4l_5H0FOYDGtwF9Tf1UrpJfvWZLBAa81YoH4ebLUv/s320/Maskot%20Jagoan%20Kata.png', url: 'https://literasi.papaninteraktif.com/', description: "Perkaya kosa kata dan kemampuan bahasamu! Rangkai huruf menjadi kata bermakna dalam tantangan literasi yang seru.", subject: "Bahasa Indonesia", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Penguasaan kosa kata dan ejaan baku", tags: ['📚 Literasi'], categoryKeys: ['literacy']
    
    
  },
  { id: 'geo-squad', howToPlay: ["Perhatikan properti bangun datar atau ruang yang diminta (contoh: cari yang memiliki 4 sisi).","Pilih karakter Geo Squad yang merepresentasikan bentuk yang tepat.","Pasangkan bentuk dengan bayangan atau slot yang sesuai.","Selesaikan level untuk mempelajari karakteristik bangun geometri baru."], educationalBenefits: ["Mengenalkan konsep geometri dasar secara visual.","Melatih kemampuan klasifikasi dan pencocokan bentuk.","Meningkatkan pemahaman tentang sifat-sifat bangun datar."], title: 'Geo Squad', subtitle: 'Bentuk Geometri', bgColor: '#F59E0B', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhP6SQ551PG1rvTWvjyKGWhInex414We3djygptaWKp3vrdqp1tHP9CTUo8nr1pUx8YeJHnMn8wXZaRMiGdFBSShdXu-HlBKhjw828HIn-goRIKGap7O-UYehBa4Py8wPiJMvNAzAYTEmY-FtcimhTIDR3q59O-ehoCuCl2XSbewUYz9MHfE2UbjGrKNNs/s320/Maskot%20Geo%20Squad.png', url: 'https://geo.papaninteraktif.com/', description: "Mari mengenal berbagai macam bentuk geometri dan bangun datar bersama pasukan Geo Squad.", subject: "Matematika", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Pengenalan bentuk ruang dan bangun datar", tags: ['🧠 Logika'], categoryKeys: ['logic']
    
    
  },
  { id: 'ruang-io', howToPlay: ["Pilih objek bangun ruang 3D yang ingin dieksplorasi.","Gunakan jari untuk memutar objek ke segala arah (360 derajat).","Perhatikan jumlah sisi, rusuk, dan titik sudut dari objek tersebut.","Buka jaring-jaring bangun ruang untuk melihat struktur datarnya."], educationalBenefits: ["Meningkatkan kemampuan spasial dan visualisasi 3D.","Membantu pemahaman konsep jaring-jaring bangun ruang.","Mempermudah abstraksi materi matematika geometri."], title: 'Ruang.io', subtitle: 'Eksplorasi 3D', bgColor: '#FDE68A', variant: 'light', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvSSVg4PZ0a2WywBqpYgUrNFtKhlVR2yvFXP7_NuuRY-ETLFHEOdmQWehjZEoXeJb7Hradt0Wmj6821UFS9EVugF9ogtiTosuRIYp_hWFNb1-3iMA4Ml6RUYBuORmrvo0kF23SLwvYRHldl8tTud9Le1u1cesQsVIP_vPhwj0mqEq7hdc4eW_2vUQivQ8/s320/Maskot%20Bangun%20Ruang.png', url: 'https://gabung.papaninteraktif.com/', description: "Eksplorasi konsep bangun ruang tiga dimensi secara interaktif. Putar dan lihat objek dari berbagai sudut pandang.", subject: "Matematika", audience: "SD, SMP, SMA", educationLevel: 'sd', learningFocus: "Pemahaman bangun ruang dan spasial 3D", tags: ['🧠 Logika'], categoryKeys: ['logic']
    
    
  }
];

const kidsGames: GameConfigWithTags[] = [
  { id: 'adu-tarik-dino', howToPlay: ["Bermain berdua dalam mode layar terbagi (split-screen).","Perhatikan soal perbandingan atau perhitungan matematika yang muncul.","Pilih jawaban benar lebih cepat dari lawanmu.","Tarik tali ke arah dinosaurusmu untuk setiap jawaban yang benar."], educationalBenefits: ["Melatih kecepatan pemrosesan informasi matematika.","Membangun sportivitas melalui kompetisi yang sehat.","Meningkatkan pemahaman konsep lebih besar dan lebih kecil."], title: 'Tarik Dino', subtitle: 'Adu Kuat!', bgColor: '#FF8FA3', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0-UeNvrM6NqoMMYlCp4_hsPKZ6qzIlLl9l3nSU4dGEppp1gFJkcLqHOtbReV0gdIrOwMcC4bMvILREr37zsjR0OmBesBbS8h8hWNF6FMl3vRI9xKrHj_sv8DbuNNDftSi41zsRNZWLyrsA4NM1iCZ76-xSpooz6CVD4Iu_9oQ7fdAcN4tU0upk-itvak/s320/Gemini_Generated_Image_fim7njfim7njfim7-removebg-preview%20(1).png', url: 'https://dino-tug-of-war.papaninteraktif.com/', description: "Permainan tarik tambang seru bertema Dinosaurus untuk mengenalkan konsep perbandingan ukuran dan kekuatan dasar.", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Pengenalan konsep logika dasar dan perbandingan", tags: ['🧠 Logika', '🔢 Numerasi'], categoryKeys: ['logic', 'numeracy'], 
    
    
    en: { howToPlay: ["Play head-to-head in split-screen mode.","Watch for the math comparison or calculation problems that appear.","Select the correct answer faster than your opponent.","Pull the rope toward your dinosaur for each correct answer."], educationalBenefits: ["Trains fast mathematical information processing.","Builds sportsmanship through healthy competition.","Improves understanding of greater than and less than concepts."], 
      
       title: 'Dino Tug-of-War', subtitle: 'Math Battle!', description: 'A competitive, split-screen math duel optimized for interactive flat panels. Two students compete head-to-head to solve math problems quickly.', subject: 'Mathematics', audience: 'Primary & Middle School', learningFocus: 'Fast calculation and mental math' } },
  { id: 'tatap-hap', howToPlay: ["Perhatikan urutan pola atau warna yang menyala di layar.","Ingat baik-baik urutan tersebut.","Ketuk layar untuk mengulangi pola dengan urutan yang sama persis.","Tantangan akan semakin panjang dan cepat setiap ronde."], educationalBenefits: ["Melatih memori jangka pendek dan daya ingat visual.","Meningkatkan rentang konsentrasi (attention span).","Membangun fokus dan kecepatan respons."], title: 'Tatap Hap', subtitle: 'Mata Jeli', bgColor: '#38BDF8', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgF0CanVC-MwZiz-Wl49N2x-LXB20-xGJoSS3I21rPl89b8lrBd3IcBXSBsdSrRtHdb39aPd7YzBYzBEp5mjWD19R_wFXl_FUJ1W5o9odinoLTXS_xmY3_LoW8BWj2NBQKim8QkMpODjNmhmtEn9W-ryzsHFqE7HblpwZub2aWj1F3Pm0N6wVitr4WpX9c/s320/Maskot%20Tatap%20Hap.png', url: 'https://paudgame.papaninteraktif.com/', description: "Latih fokus dan kejelian mata anak dalam mencari objek tersembunyi dengan cepat dan tepat.", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Ketelitian, fokus visual, dan observasi", tags: ['🧠 Logika'], categoryKeys: ['logic']
    
    
  },
  { id: 'cocok-logi', howToPlay: ["Perhatikan bentuk atau objek utama yang ditampilkan.","Cari bentuk pasangannya dari beberapa pilihan yang ada.","Tarik garis atau seret objek ke tempat yang memiliki siluet atau fungsi serupa.","Selesaikan semua pasangan untuk melanjutkan."], educationalBenefits: ["Mengenalkan logika relasi dan pengelompokan objek.","Melatih motorik halus saat menyentuh dan menarik objek.","Meningkatkan kemampuan identifikasi visual anak PAUD."], title: 'Cocok Logi', subtitle: 'Puzzle Anak', bgColor: '#F472B6', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh9z0_DMiTSAxcExp51aoOM_rTAzF34WulrWOcaIqIEoB0oir87qVzTDgcgZNTXMAwYLZOE6pF4M7IoNc0I4KkckJvS10YovN-3Zi3KbOXTGzhE00gC4iiobRfQk16xkdgxEa8aeD7uNl3fQXaw3K7GZn0cZSk3WCyAL1vOumbDAxEJCBCylEHYFzEkAs/s320/Maskot%20Cocok%20Logi.png', url: 'https://logic.papaninteraktif.com/', description: "Permainan puzzle sederhana yang dirancang khusus untuk anak. Pasangkan bentuk dengan tempat yang sesuai.", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Pengenalan bentuk, warna, dan motorik halus", tags: ['🧠 Logika'], categoryKeys: ['logic']
    
    
  },
  { id: 'mesin-koleksi', howToPlay: ["Sentuh layar untuk memasukkan koin virtual.","Tarik tuas atau putar tombol pada mesin Gacha.","Buka kapsul yang keluar untuk melihat hadiah hewan atau bentuk.","Kumpulkan semua kejutan di rak koleksi."], educationalBenefits: ["Mengenalkan konsep sebab dan akibat secara sederhana.","Memberikan stimulus hadiah (reward) untuk eksplorasi.","Melatih motorik tangan dan kesabaran."], title: 'Mesin Gacha', subtitle: 'Buka Kejutan', bgColor: '#C084FC', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZYkahisT2k4glee7vD6C-pWSGUmfHmP6kd2SNrPYoQW8RG7eXe_lI0PY5hq0-kAIypfrLi4fMNM3Uc61Rn_9aLhVIJP3UEuhQKvjD-gcYsvHyuCJZJXTyWBTOsGv5Bn42hiAfungfvuOY1t3eNUULQYaoNAJ05Y4Ih97lG0aIaUb7t6qojTkCsJHd8XE/s320/Gemini_Generated_Image_i73h4qi73h4qi73h.png', url: 'https://lucky.papaninteraktif.com/', description: "Tarik tuas mesin Gacha virtual dan dapatkan berbagai kejutan menarik di dalamnya!", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Mengenal konsep sebab-akibat sederhana", tags: ['🎯 Ice Breaking'], categoryKeys: ['ice-breaking']
    
    
  },
  { id: 'pendekar-balon', howToPlay: ["Dengarkan instruksi angka atau huruf yang harus dicari.","Perhatikan balon-balon terbang yang membawa angka atau huruf.","Ketuk (pop) balon yang membawa target yang tepat.","Jangan ketuk balon yang membawa jawaban salah."], educationalBenefits: ["Melatih pengenalan dini pada huruf alfabet dan angka.","Meningkatkan koordinasi mata-tangan dan respons motorik.","Melatih pendengaran dan instruksi selektif."], title: 'Pendekar Balon', subtitle: 'Penjaga Angka', bgColor: '#FB923C', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqyrmLKQOwzf_CjWeVhX1gNfLd3FOWfItQD2u2N-uyXQfhm_g3DU3Longky_9ilZJKYbzjyOItwlZFTLPJ2ChIC0iPIMJk0bzD0VDwgjmirToCNwUoPRR_ZZvvvUpwSnIVMreKg8zFShF9tv6MPh49iGH7AyBUcy5Acu454tYkgoJKpYydOGLQYd-CSuA/s320/Maskot%20Pendekar%20Balon.png', url: 'https://pop.papaninteraktif.com/', description: "Bantu Pendekar Balon menjaga angka dan huruf yang berterbangan. Cara interaktif mengenalkan simbol dasar pada anak.", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Pengenalan dasar huruf alfabet dan angka", tags: ['📚 Literasi', '🔢 Numerasi'], categoryKeys: ['literacy', 'numeracy']
    
    
  },
  { id: 'detektif-cilik', howToPlay: ["Lihat daftar benda yang harus ditemukan di panel bawah.","Telusuri gambar pemandangan yang penuh dengan berbagai objek.","Ketuk benda yang tersembunyi jika kamu menemukannya.","Gunakan kaca pembesar jika kesulitan mencari benda yang kecil."], educationalBenefits: ["Meningkatkan fokus dan ketelitian visual (visual scanning).","Menambah perbendaharaan kosakata benda sehari-hari.","Melatih kesabaran dalam observasi."], title: 'Detektif', subtitle: 'Cari Benda', bgColor: '#2DD4BF', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3vJ6-0Wd7vFqMW8KsmfF8k7A2KpEuK76G_UH3pZiI6CC3R1y7egNHibNWf1CLzJvjQxOVMmOrCfjdmolqUAnmnVSJzgiBo6YXvWCJR1YHy_MjC7hJOuSiav1tVO3kYRod5ozxYbudMg-21ZpzAdgS_iSYYtnmdFmr4sZV29dK-ELuDv_rDSMWFRZooAM/s320/Maskot%20Detektif%20Cilik.png', url: 'https://gamedetektif.papaninteraktif.com/', description: "Jadilah detektif cilik yang hebat! Cari dan temukan berbagai benda tersembunyi di sekitar kita.", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Fokus, konsentrasi, dan pengenalan kosakata benda", tags: ['🧠 Logika'], categoryKeys: ['logic']
    
    
  },
  { id: 'mewarnai', howToPlay: ["Pilih sketsa gambar sayuran yang ingin diwarnai.","Pilih warna dari palet di sebelah layar.","Ketuk area kosong pada gambar untuk mengisi warna (fill).","Campurkan berbagai warna untuk membuat karyamu lebih hidup."], educationalBenefits: ["Mengembangkan kreativitas dan ekspresi seni anak.","Mengenalkan berbagai jenis sayuran sehat secara visual.","Meningkatkan pengenalan warna dasar dan kombinasi."], title: 'Sayuran', subtitle: 'Hijau Bergizi', bgColor: '#FBBF24', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNyS2UfjDZkxdXHsPWZki6K3Lw7WUQae5JpGzg-Z55VGq4fQCSDMLZ4fBziHkM4YSIJIbW5TJs_mro8Tlalb3LCXzASV_T_2ErR26VRXgpMDcgoODOGmlI_BrCW-loCkAxnrwTQolYLv_5Mwn9fZ2l8kOcY5r1C0OCYkxmCP5dal7BQT9RMcWGsWnlnRU/s320/Maskot%20Game.png', url: 'https://veggie.papaninteraktif.com//', description: "Aktivitas mewarnai digital bertema sayuran. Mengenalkan jenis-jenis sayur bergizi sambil menyalurkan kreativitas.", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Kreativitas seni, pengenalan warna, dan literasi nama sayur", tags: ['📚 Literasi'], categoryKeys: ['literacy']
    
    
  },
  { id: 'belajar-angka', howToPlay: ["Pilih dua tabung reaksi yang berisi warna dasar (merah, kuning, biru).","Tuangkan isi kedua tabung ke dalam gelas ukur.","Aduk perlahan dan perhatikan perubahan warna yang terjadi.","Coba temukan semua kombinasi warna sekunder yang mungkin."], educationalBenefits: ["Mengenalkan teori warna dasar dan pencampuran warna.","Memberikan pengalaman observasi eksperimen sains sederhana.","Merangsang rasa ingin tahu logis."], title: 'Lab Warna', subtitle: 'Campur Warna', bgColor: '#4ADE80', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQyO-RQE7XJ3UUTukrLgt4qFFs71LcUHljrMwvRK9mjlALyLBWyQjsdg56v3ovip6VZCD8MMeeHfUrtijl86SLKPWyvv9BWah6AC_TfXUHZuBzjDnq0x3lfoAtTJSG1883EwdJGslxoVStOAHKwWNM4d64CHgqQ8JE5H2eVzFrx9gNFsf7Vkra8-9N5e8/s320/Maskot%20Lab%20Warna.png', url: 'https://color.papaninteraktif.com/', description: "Bermain di laboratorium ajaib untuk bereksperimen mencampur berbagai warna dasar menjadi warna baru.", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Eksperimen sains dasar dan pengenalan teori warna", tags: ['🧠 Logika'], categoryKeys: ['logic']
    
    
  },
  { id: 'Aksi Ambulans', howToPlay: ["Perhatikan mobil Ambulans dan kendaraan lain yang menghalangi jalan.","Geser kendaraan lain maju atau mundur untuk membuat jalan keluar.","Arahkan Ambulans keluar dari area parkir menuju rumah sakit.","Selesaikan teka-teki dengan jumlah geseran sesedikit mungkin."], educationalBenefits: ["Melatih pemikiran logis dan perencanaan spasial.","Meningkatkan kemampuan pemecahan masalah (problem solving).","Mengenalkan konsep simpati untuk memberikan jalan pada Ambulans."], title: 'Ambulans', subtitle: 'Bantu Lewat!', bgColor: '#60A5FA', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihsM6WEEihH2V1lHzknn88nmzhzzq3rolgQj22RoI7QaU8CDjDikIz8AL0IuLJ85qNhEoaHAZf-cYtAcK2DIEc6RcUo7QzyInkqrlaDzvLEG32oduhPjBVKhfNAQGBX5j_blxoL4rUcznSZs0XR9e3CLIaMPzILvl8nlJRRTtg6mAhEzXD0fD3SUWBETQ/s320/ambulance.png', url: 'https://gamelogika.papaninteraktif.com//', description: "Buka jalan dan bantu mobil Ambulans melewati kemacetan agar cepat sampai ke rumah sakit.", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Logika spasial dan pemecahan masalah sederhana", tags: ['🧠 Logika'], categoryKeys: ['logic']
    
    
  },
  { id: 'Gass Damkar', howToPlay: ["Perhatikan titik sumber api yang menyala di gedung.","Arahkan selang air dengan memutar sudut pancuran.","Hitung kekuatan semprotan agar air tepat mengenai api.","Padamkan seluruh titik api sebelum waktu habis."], educationalBenefits: ["Melatih koordinasi visual dan perhitungan sudut sederhana.","Meningkatkan motorik halus dalam mengendalikan objek di layar.","Mengenalkan profesi petugas pemadam kebakaran dan keselamatan dasar."], title: 'Damkar', subtitle: 'Padamkan Api', bgColor: '#FB7185', isNew: true, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgcYRWzMzh38PGy9b3gBodByXgdDjpYToSZTw-jCY_CThnWb0JmJcCrbaxU782JT5f386kQph6tadgRHX16rFmz1r4IkR-YvpKLqd1aGHGl35u2zWp-mCqkpDJbGLx6lGuIwaJoUtgzWmckD_RzTvcFOxCaUKT6AlS1hcUraO57fuJFRGdYFMhsD_Nvnc/s320/pemadam%20(1).png', url: 'https://braingame.papaninteraktif.com//', description: "Bantu petugas pemadam kebakaran (Damkar) mengarahkan selang air untuk memadamkan api dengan tepat.", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Koordinasi visual dan motorik anak", tags: ['🎯 Ice Breaking', '🧠 Logika'], categoryKeys: ['ice-breaking', 'logic']
    
    
  },
  { id: 'Jalur Huruf', howToPlay: ["Pilih huruf alfabet yang ingin dipelajari.","Perhatikan titik awal dan tanda panah panduan.","Gunakan jari untuk menelusuri garis (tracing) mengikuti arah panah.","Selesaikan tarikan garis tanpa terputus hingga huruf terbentuk."], educationalBenefits: ["Melatih memori otot dan persiapan menulis secara fisik.","Mengenalkan bentuk baku huruf alfabet.","Meningkatkan koordinasi mata dan tangan secara presisi."], title: 'Jalur Huruf', subtitle: 'Belajar Menulis', bgColor: '#F87171', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-rC7JTiN9mmqQOOkI8JTpogtFcjvn77GhLme6oe6Qs0bhzEvAh3HA0wWo1MtmrKt25WWZ_Rs6fKucwoEd5Wah5EV3ZkkWx9pV8-NGJnyemCHShdJhw5OhFXYQNLLJMcunaf5TjC_s6HgBzcwHVpdfPFz8WBZeuXAjB9Jw79GAmZQDHi4wxfo8a_D-1ak/s320/Maskot%20Jalur%20Huruf.png', url: 'https://gamehuruf.papaninteraktif.com//', description: "Media interaktif untuk membimbing anak belajar menulis huruf dengan mengikuti pola garis (tracing).", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Persiapan menulis, motorik halus, dan bentuk huruf", tags: ['📚 Literasi'], categoryKeys: ['literacy']
    
    
  },
  { id: 'Petualangan Satu Garis', howToPlay: ["Perhatikan sekumpulan titik yang membentuk suatu pola atau bentuk.","Mulai dari satu titik awal.","Tarik garis menghubungkan seluruh titik tanpa mengangkat jari.","Selesaikan teka-teki tanpa melewati garis yang sama dua kali."], educationalBenefits: ["Melatih logika alur dan pemikiran topologi dasar.","Meningkatkan konsentrasi dan perencanaan langkah.","Melatih kesabaran anak dalam mencoba berbagai alternatif solusi."], title: 'Satu Garis', subtitle: 'Mengenal Bentuk', bgColor: '#81D4FA', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLJbwFiZwMEryEsFJCM5jGA6ybRiJIE10wGi_-KGB_BiWjdSVeeMeap-Hm7eLyFB047pW7fLJDcIF2t4gyDmykyhsZNhYsMWtgkD4AAb2xiBQ2WRUMKWjgFe4XAawx03bqEC6H2z3NF6mk_aNaFc43m7ru4ul2akQ8Y7QcLcOolGqlwF1VGSIxvi1v7yI/s320/Maskot%20Satu%20Garis.png', url: 'https://gamegaris.papaninteraktif.com/', description: "Hubungkan titik-titik dengan satu tarikan garis tanpa terputus untuk membentuk sebuah pola.", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Logika alur, perencanaan gerak, dan fokus", tags: ['🧠 Logika'], categoryKeys: ['logic']
    
    
  },
  { id: 'gabung-ceria', howToPlay: ["Perhatikan objek (buah atau bentuk) yang muncul di atas layar.","Geser objek ke kiri atau kanan untuk menentukan posisi jatuh.","Jatuhkan objek agar menyentuh objek lain yang identik.","Dua objek identik akan bergabung menjadi satu objek yang lebih besar."], educationalBenefits: ["Mengenalkan konsep ukuran dan hukum fisika sentuhan ringan.","Melatih perencanaan spasial agar tumpukan tidak melewati batas.","Meningkatkan strategi visual secara menyenangkan."], title: 'Gabung Ceria', subtitle: 'Tarik Kejutan', bgColor: '#A3E635', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimxD0LG01Unp6sbm11VxHGr6Z83s1I1KrcrELL9K9Wxzaq0RTlZF9PlzWCm2fzmijJz0CjttBZ1qQJ5n61QEtxl_4JKfxJ0TRjE4F4-LRWsPaEyc4D3KZMf0na0Vc0ckcjRGXG7_pGsNBKuUztxTdteHNuu8uI4kUIob5p7b-VoU4KDGNGOoQSMp7taT8/s320/Maskot%20Gabung.png', url: 'https://suika.papaninteraktif.com/', description: "Permainan menjatuhkan dan menggabungkan objek serupa agar menjadi lebih besar (gaya permainan Suika).", audience: "PAUD, SD", educationLevel: 'general', learningFocus: "Logika ruang dan fisika sederhana", tags: ['🎯 Ice Breaking', '🧠 Logika'], categoryKeys: ['ice-breaking', 'logic']
    
    
  },
  { id: 'dunia-hewan', howToPlay: ["Lihat hewan lucu yang sedang lapar di layar.","Perhatikan berbagai jenis makanan yang disediakan di sekitarnya.","Tarik makanan yang tepat dan berikan kepada hewan tersebut (misal: pisang untuk monyet).","Pelajari respons gembira hewan saat diberi makanan yang benar."], educationalBenefits: ["Mengenalkan pengetahuan dasar IPA tentang jenis hewan dan makanannya.","Melatih kemampuan klasifikasi dan pencocokan.","Membangun rasa empati terhadap makhluk hidup."], title: 'Dunia Hewan', subtitle: 'Beri Makan', bgColor: '#FDBA74', variant: 'light', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQsVd79ecJeB_TWaM-8LRX9FMjShTHGfyhyphenhyphen0szj6TArbAPRs_lkJgYZJ8yOySBV00TuahoObLz9gcrExuvXPVUf49qIZCC4CHGChsfIgu1ZRtv3shnsUhDVSIAMT5V-jkcqpMqKnsmLMniLmMozFx0nqxj6RkG7ZfxSRwYvH_qO0BQD3Ed3HVFA8Titlg/s320/Maskot%20Game%20Dunia%20Hewan.png', url: 'https://animal-match-kids.papaninteraktif.com/', description: "Mengenal jenis makanan setiap hewan. Pasangkan makanan yang tepat untuk satwa kesayanganmu.", audience: "PAUD, SD", educationLevel: 'paud', learningFocus: "Pengetahuan alam dasar dan logika mencocokkan", tags: ['🧠 Logika'], categoryKeys: ['logic']
    
    
  }
];

// ==========================================
// KOMPONEN PENDUKUNG (Aksesibilitas Tinggi)
// ==========================================
const QRCodeModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[#0C1A69]/90 backdrop-blur-md animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="qr-title">
      <div className="relative bg-white p-6 md:p-10 rounded-[40px] shadow-2xl max-w-lg w-full flex flex-col items-center animate-zoomIn">
        <button onClick={onClose} aria-label="Tutup Layar QR" className="absolute -top-4 -right-4 bg-red-500 text-white w-12 h-12 rounded-full font-black shadow-lg hover:scale-110 transition-transform flex items-center justify-center border-4 border-white">✕</button>
        <h2 id="qr-title" className="text-2xl font-black text-[#0C1A69] mb-2 text-center uppercase tracking-tight leading-none">Papan Interaktif Digital</h2>
        <p className="text-sm text-gray-500 font-bold mb-6">Scan untuk akses lobi game cepat</p>
        <div className="bg-[#DDEBF8] p-4 rounded-3xl border-4 border-[#0C1A69]/10">
          <img src={SIDEBAR_IMAGE_URL} alt="QR Code Link Aplikasi" width="320" height="320" className="w-64 h-64 md:w-80 md:h-80 object-contain" />
        </div>
        <button onClick={onClose} aria-label="Tutup Layar" className="mt-8 px-8 py-4 bg-[#0C1A69] text-white rounded-2xl font-black shadow-lg hover:bg-blue-700 transition-colors w-full uppercase tracking-wider">TUTUP LAYAR</button>
      </div>
    </div>
  );
};

const SidebarImageWidget = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} aria-label="Tampilkan QR Code Besar" className="w-full flex flex-col items-center justify-center mb-3 group perspective-1000 cursor-pointer border-none bg-transparent appearance-none">
    <div className="relative min-h-[120px] md:min-h-[150px] w-full flex items-center justify-center p-2 md:p-3 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:scale-[1.02] group-hover:bg-white/50">
      <div className="relative overflow-hidden rounded-xl">
         <img src={SIDEBAR_IMAGE_URL} alt="" width="144" height="144" loading="eager" fetchPriority="high" className="w-28 md:w-36 h-auto object-contain transform transition-transform duration-500 group-hover:scale-110" />
         <div className="absolute inset-0 bg-[#0C1A69]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
         </div>
      </div>
    </div>
    <span className="text-[10px] font-black text-[#0C1A69]/50 mt-1 uppercase tracking-tighter">KLIK UNTUK MEMPERBESAR</span>
  </button>
);

const ModeSwitcher = ({ gameMode, setGameMode, playSound }: { gameMode: GameMode, setGameMode: (mode: GameMode) => void, playSound: (type: 'pop' | 'bloop') => void }) => (
  <div className="w-full flex flex-col items-center">
    <span className="text-[9px] md:text-[10px] font-black text-[#0C1A69] uppercase tracking-widest mb-1.5 animate-pulse drop-shadow-sm">⬇️ PILIH HALAMAN GAME ⬇️</span>
    <div className="bg-white/60 p-1.5 rounded-2xl flex relative w-full shadow-md border-2 border-white/80 backdrop-blur-md overflow-visible">
      <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl transition-all duration-500 shadow-lg ${gameMode === 'general' ? 'left-1.5 bg-[#0C1A69]' : 'left-[calc(50%+4px)] bg-gradient-to-r from-pink-400 to-purple-500'}`} />
      <button onClick={() => { playSound('pop'); setGameMode('general'); }} aria-label="Pindah ke Mode Umum" className={`relative flex-1 py-2 md:py-2.5 text-xs md:text-sm font-black uppercase tracking-wider rounded-xl transition-colors duration-300 z-10 flex items-center justify-center gap-1.5 ${gameMode === 'general' ? 'text-white' : 'text-[#0C1A69]/80 hover:bg-white/50'}`}>
        <span className="text-base md:text-lg drop-shadow-md">🎓</span><span>UMUM</span>
      </button>
      <button onClick={() => { playSound('pop'); setGameMode('kids'); }} aria-label="Pindah ke Mode Junior" className={`relative flex-1 py-2 md:py-2.5 text-xs md:text-sm font-black uppercase tracking-wider rounded-xl transition-colors duration-300 z-10 flex items-center justify-center gap-1.5 ${gameMode === 'kids' ? 'text-white' : 'text-[#0C1A69]/80 hover:bg-white/50'}`}>
        <span className="text-base md:text-lg drop-shadow-md">🎈</span><span>JUNIOR</span>
        {gameMode === 'general' && (<span className="absolute -top-3 -right-2 bg-red-500 text-white text-[8px] md:text-[9px] px-2 py-0.5 rounded-full shadow-md border-2 border-white animate-bounce whitespace-nowrap">CEK SINI!</span>)}
      </button>
    </div>
  </div>
);

// ==========================================
// KOMPONEN PENGANTAR EDUGAME
// ==========================================
const EduGameIntro = ({ lang = "id" }: { lang?: "id" | "en" }) => (
  <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 mb-6 shadow-sm border border-white/50">
    <h1 className="text-xl md:text-2xl font-black text-[#0C1A69] mb-3">{lang === "en" ? "Educational Games & Interactive Learning Media" : "Game Edukasi & Media Pembelajaran Interaktif"}</h1>
    <p className="text-sm md:text-base text-[#0C1A69]/80 leading-relaxed font-medium">
      {lang === 'en' ? (
        <>Welcome to the <strong>Papan Interaktif</strong> digital portal. We provide a diverse collection of interactive <strong>educational games</strong> designed for children and students to learn through play. Our game collection includes activities to sharpen literacy, numeracy, and logic, and can be used by teachers as <strong>interactive learning media</strong> and classroom ice breakers. Explore the GENERAL mode (Elementary, Middle, High School), or JUNIOR mode (Early Childhood, Elementary) which contains basic learning activities.</>
      ) : (
        <>Selamat datang di portal digital <strong>Papan Interaktif</strong>. Kami menyediakan berbagai koleksi <strong>game edukasi</strong> interaktif yang dirancang agar anak dan siswa dapat belajar sambil bermain. Koleksi permainan kami mencakup aktivitas untuk mengasah literasi, numerasi, dan logika, serta dapat digunakan oleh guru sebagai <strong>media pembelajaran interaktif</strong> dan ice breaking di kelas. Silakan jelajahi mode UMUM (SD, SMP, SMA), atau mode JUNIOR (PAUD, SD) yang berisi aktivitas belajar dasar.</>
      )}
    </p>
  </section>
);

// ==========================================
// KOMPONEN TANTANGAN HARIAN (Ganti Otomatis)
// ==========================================
const DailyChallenge = ({ onClickGame, lang = 'id' }: { onClickGame: (id: string) => void, lang?: 'id' | 'en' }) => {
  const allGames = [...generalGames, ...kidsGames].filter(g => g.url && g.id);
  
  if (allGames.length === 0) return null;

  // Logika Otomatis: Ambil tanggal kalender lokal hari ini
  const now = new Date();
  const localDaysSinceEpoch = Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000);
  
  const dailyIndex = localDaysSinceEpoch % allGames.length;
  const challengeGame = allGames[dailyIndex];
  
  const gameUrl = lang === 'en' ? `/en/game/${encodeURIComponent(challengeGame.id)}` : `/game/${encodeURIComponent(challengeGame.id)}`;

  const label = lang === 'en' ? "GAME OF THE DAY ⚡" : "GAME PILIHAN HARI INI ⚡";
  const cta = lang === 'en' ? "PLAY NOW ➔" : "GAS MAINKAN ➔";
  
  const title = (lang === 'en' && challengeGame.en?.title) ? challengeGame.en.title : challengeGame.title;
  const subtitle = (lang === 'en' && challengeGame.en?.subtitle) ? challengeGame.en.subtitle : (challengeGame.subtitle || '');
  const displayText = subtitle ? `${title}: ${subtitle}` : title;
  
  const gradients = [
    "bg-gradient-to-r from-pink-400 to-rose-500",
    "bg-gradient-to-r from-yellow-400 to-orange-500",
    "bg-gradient-to-r from-emerald-400 to-green-500",
    "bg-gradient-to-r from-lime-400 to-green-600",
    "bg-gradient-to-r from-blue-400 to-indigo-500",
    "bg-gradient-to-r from-cyan-400 to-blue-500",
    "bg-gradient-to-r from-red-400 to-rose-600"
  ];
  const icons = ["🎮", "🎯", "🌟", "🚀", "🔥", "✨", "🏆"];
  
  const bg = gradients[dailyIndex % gradients.length];
  const icon = icons[dailyIndex % icons.length];

  return (
    <a 
      href={gameUrl}
      onClick={(e) => {
        if (challengeGame?.url) {
          e.preventDefault();
          onClickGame(challengeGame.id);
        }
      }}
      className={`block w-full ${bg} text-white p-3 md:p-4 rounded-2xl shadow-md mb-6 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-2 border-white/50 animate-fadeIn focus:outline-none focus:ring-4 focus:ring-white/50`}
      aria-label={displayText}
    >
      <div className="flex items-center justify-between group">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-3xl md:text-4xl group-hover:animate-bounce drop-shadow-md">
            {icon}
          </span>
          <div className="flex flex-col">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/80 mb-0.5">
              {label}
            </span>
            <span className="text-sm md:text-base font-bold leading-tight drop-shadow-sm line-clamp-1">
              {displayText}
            </span>
          </div>
        </div>
        <div className="bg-white/20 px-3 py-2 rounded-xl group-hover:bg-white/30 transition-colors hidden sm:block shrink-0">
          <span className="text-xs font-black uppercase tracking-wider">{cta}</span>
        </div>
      </div>
    </a>
  );
};
// ==========================================
// KOMPONEN SAPAAN WAKTU (Elegan & Ringan)
// ==========================================
const SapaanWaktu = () => {
  const hour = new Date().getHours();
  let sapaan = "Selamat Datang, Juara!";
  let ikon = "👋";

  if (hour >= 5 && hour < 11) {
    sapaan = "Selamat Pagi, Juara! Siap berpetualang?";
    ikon = "🌅";
  } else if (hour >= 11 && hour < 15) {
    sapaan = "Tetap Semangat Belajar di Siang Hari!";
    ikon = "☀️";
  } else if (hour >= 15 && hour < 18) {
    sapaan = "Sore Ceria! Waktunya main santai!";
    ikon = "🌇";
  } else {
    sapaan = "Malam Hebat! Besok kita main lagi ya!";
    ikon = "🌙";
  }

  return (
    <div className="mb-4 flex items-center gap-2 text-[#0C1A69] animate-fadeIn">
      <span className="text-2xl md:text-3xl animate-pulse">{ikon}</span>
      <h2 className="text-sm md:text-lg font-black tracking-wide drop-shadow-sm">{sapaan}</h2>
    </div>
  );
};

// ==========================================
// KOMPONEN UTAMA (Struktur Berlapis Anti-CLS)
// ==========================================


// SURGICAL ROUTE PARSER - PHASE 8.1 / 9
interface ParsedRoute {
  locale: string;
  type: 'home' | 'privacy' | 'contact' | 'about' | 'blog' | 'gameDetail' | 'hubKids' | 'hubLogic' | 'hubIfp' | 'guideIfp' | 'guideKids' | 'unknown';
  slug?: string;
}

const parseRoute = (pathname: string): ParsedRoute => {
  const parts = pathname.split('/').filter(Boolean);
  let locale = 'id';
  let rest = parts;

  // Architectural preparation for future locales
  if (parts[0] === 'en') {
    locale = 'en';
    rest = parts.slice(1);
  }

  const pathType = rest.length > 0 ? rest.join('/') : '';
  
  if (rest[0] === 'game' && rest[1]) {
    return { locale, type: 'gameDetail', slug: rest[1] };
  } else if (locale === 'id' && pathType === 'game-edukasi-anak') {
    return { locale, type: 'hubKids' };
  } else if (locale === 'id' && pathType === 'game-logika') {
    return { locale, type: 'hubLogic' };
  } else if (locale === 'id' && pathType === 'game-edukasi-ifp') {
    return { locale, type: 'hubIfp' };
  } else if (locale === 'en' && pathType === 'educational-games-for-interactive-flat-panels') {
    return { locale, type: 'hubIfp' };
  } else if (locale === 'id' && pathType === 'privacy-policy') {
    return { locale, type: 'privacy' };
  } else if (locale === 'id' && pathType === 'contact') {
    return { locale, type: 'contact' };
  } else if (locale === 'id' && pathType === 'about') {
    return { locale, type: 'about' };
  } else if (locale === 'id' && pathType === 'jurnal-guru') {
    return { locale, type: 'blog' };
  } else if (locale === 'id' && pathType === 'panduan/penggunaan-ifp-papan-interaktif-digital') {
    return { locale, type: 'guideIfp' };
  } else if (locale === 'en' && pathType === 'guides/using-educational-games-on-interactive-flat-panels') {
    return { locale, type: 'guideIfp' };
  } else if (locale === 'id' && pathType === 'panduan/memilih-game-edukasi-anak') {
    return { locale, type: 'guideKids' };
  } else if (pathType === '') {
    // Only allow root for en if we eventually build an en home. For now, fallback id.
    if (locale === 'en') return { locale: 'en', type: 'unknown' };
    return { locale, type: 'home' };
  }
  
  return { locale, type: 'unknown' };
};

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [gameMode, setGameMode] = useState<GameMode>('general');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentLocale, setCurrentLocale] = useState<'id' | 'en'>('id');
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'contact' | 'about' | 'blog' | 'gameDetail' | 'hubKids' | 'hubLogic' | 'hubIfp' | 'guideIfp' | 'guideKids' | 'notfound'>('home');
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);

  useEffect(() => {
    const parsed = parseRoute(window.location.pathname);
    
    // Safety boundary: treat non-ID locales as unknown/fallback to home for now to prevent rendering raw Indonesian content on /en/
    const isAllowedEn = parsed.locale === 'en' && ['hubIfp', 'guideIfp', 'gameDetail'].includes(parsed.type);
    if (parsed.locale !== 'id' && !isAllowedEn) {
      setCurrentLocale('id');
      setCurrentView('notfound');
    } else {
      setCurrentLocale(parsed.locale as 'id' | 'en');
      if (parsed.type === 'gameDetail') {
        // Additional gate: only allow IFP games for EN pilot
        const slug = decodeURIComponent(parsed.slug!);
        const ifpGames = ['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional', 'sciencelink'];
        if (parsed.locale === 'en' && !ifpGames.includes(slug)) {
          setCurrentLocale('id');
          setCurrentView('notfound');
        } else {
          setCurrentView('gameDetail');
          setSelectedGameId(slug);
        }
      } else if (parsed.type !== 'unknown') {
        setCurrentView(parsed.type);
      } else {
        setCurrentLocale('id');
        setCurrentView('notfound');
      }
    }

    const timer = setTimeout(() => setShowIntro(false), 1500);
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => { clearTimeout(timer); document.removeEventListener('fullscreenchange', handleFullscreenChange); };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseRoute(window.location.pathname);
      
      const isAllowedEn = parsed.locale === 'en' && ['hubIfp', 'guideIfp', 'gameDetail'].includes(parsed.type);
      if (parsed.locale !== 'id' && !isAllowedEn) {
        setCurrentLocale('id');
        setCurrentView('notfound');
      } else {
        setCurrentLocale(parsed.locale as 'id' | 'en');
        if (parsed.type === 'gameDetail') {
          const slug = decodeURIComponent(parsed.slug!);
          const ifpGames = ['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional', 'sciencelink'];
          if (parsed.locale === 'en' && !ifpGames.includes(slug)) {
            setCurrentLocale('id');
            setCurrentView('notfound');
          } else {
            setCurrentView('gameDetail');
            setSelectedGameId(slug);
          }
        } else if (parsed.type !== 'unknown') {
          setCurrentView(parsed.type);
        } else {
          setCurrentLocale('id');
          setCurrentView('notfound');
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    setActiveCategory('all');
    setSearchTerm('');
  }, [gameMode]);

  const currentGames = gameMode === 'general' ? generalGames : kidsGames;
  const filteredGames = currentGames.filter(game => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = game.title.toLowerCase().includes(searchLower) || (game.subtitle && game.subtitle.toLowerCase().includes(searchLower));
    const matchesCategory = activeCategory === 'all' || (game.categoryKeys && game.categoryKeys.includes(activeCategory));
    return matchesSearch && matchesCategory;
  });

  const navigateTo = (view: 'home' | 'privacy' | 'contact' | 'about' | 'blog' | 'gameDetail' | 'hubKids' | 'hubLogic' | 'hubIfp' | 'guideIfp' | 'guideKids' | 'notfound', path: string) => {
    window.history.pushState({}, '', path);
    const parsed = parseRoute(path);
    const isAllowedEn = parsed.locale === 'en' && ['hubIfp', 'guideIfp', 'gameDetail'].includes(parsed.type);
    if (parsed.locale !== 'id' && !isAllowedEn) {
      setCurrentLocale('id');
      setCurrentView('notfound');
    } else {
      setCurrentLocale(parsed.locale as 'id' | 'en');
      if (parsed.type === 'gameDetail') {
        // Additional gate: only allow IFP games for EN pilot
        const slug = decodeURIComponent(parsed.slug!);
        const ifpGames = ['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional', 'sciencelink'];
        if (parsed.locale === 'en' && !ifpGames.includes(slug)) {
          setCurrentLocale('id');
          setCurrentView('notfound');
        } else {
          setCurrentView('gameDetail');
          setSelectedGameId(slug);
        }
      } else if (parsed.type !== 'unknown') {
        setCurrentView(parsed.type);
      } else {
        setCurrentLocale('id');
        setCurrentView('notfound');
      }
    }
  };

  const playSound = (type: 'bloop' | 'pop') => {
    try {
      const url = type === 'bloop' ? 'https://actions.google.com/sounds/v1/water/water_splash.ogg' : 'https://actions.google.com/sounds/v1/ui/button_click.ogg'; 
      const audio = new Audio(url);
      audio.volume = 0.5;
      audio.play().catch(() => {}); 
    } catch (error) {}
  };

  const handleCardClick = (id: string) => {
    playSound('bloop');
    navigateTo('gameDetail', `/game/${encodeURIComponent(id)}`);
  };

  const toggleFullscreen = () => {
    playSound('pop');
    if (!document.fullscreenElement) { document.documentElement.requestFullscreen().catch(() => {}); } 
    else { document.exitFullscreen().catch(() => {}); }
  };

  if (currentView === 'hubKids') return <HubKids games={kidsGames} onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />;
  if (currentView === 'hubLogic') return <HubLogic games={[...generalGames, ...kidsGames].filter(g => g.categoryKeys?.includes('logic'))} onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />;
    if (currentView === 'hubIfp') {
    const ifpGames = ['nusaboard', 'doodle', 'adu-tarik-dino', 'puzzle', 'banua-fruit-blast', 'traditional', 'sciencelink'];
    return <HubIfp locale={currentLocale} games={[...generalGames, ...kidsGames].filter(g => ifpGames.includes(g.id))} onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />;
  }
  if (currentView === 'privacy') return <PrivacyPolicy onBack={() => navigateTo('home', '/')} />;
  if (currentView === 'contact') return <ContactUs onBack={() => navigateTo('home', '/')} />;
  if (currentView === 'about') return <AboutUs onBack={() => navigateTo('home', '/')} />;
  if (currentView === 'blog') return <JurnalGuru onBack={() => navigateTo('home', '/')} />;
  if (currentView === 'guideIfp') return <GuideIFP locale={currentLocale} onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />;
  if (currentView === 'guideKids') return <GuideKids onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />;

  if (currentView === 'gameDetail' && selectedGameId) {
    const game = currentGames.find(g => g.id === selectedGameId) || generalGames.find(g => g.id === selectedGameId) || kidsGames.find(g => g.id === selectedGameId);
    if (game) {
      return <GameDetail locale={currentLocale} game={game} onBack={() => navigateTo('home', '/')} />;
    } else {
      return <NotFound onBack={() => navigateTo('home', '/')} />;
    }
  }
  if (currentView === 'notfound') return <NotFound onBack={() => navigateTo('home', '/')} />;

  const mainBg = gameMode === 'kids' ? 'bg-[#FFF8E1]' : 'bg-[#DDEBF8]';
  const sidebarBg = gameMode === 'kids' ? 'bg-[#FFE0B2]' : 'bg-[#CBE1F4]';

  return (
    <>
      {/* 1. OVERLAY INTRO */}
      <div className={`fixed inset-0 z-[100] ${mainBg} flex flex-col items-center justify-center transition-all duration-700 ${showIntro ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <div className="text-3xl md:text-5xl font-black text-[#0C1A69] tracking-tighter">DENI RANOPTRI</div>
          <p className="text-[#0C1A69]/70 font-bold tracking-[0.3em] text-xs mt-2 uppercase">Production</p>
      </div>

      {/* 2. APLIKASI UTAMA */}
      <div className={`h-[100dvh] overflow-hidden ${mainBg} w-full font-sans flex flex-col md:flex-row relative transition-colors duration-500`}>
        <button onClick={toggleFullscreen} aria-label="Tampilkan Layar Penuh" style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 99, width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#0C1A69', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
          <div style={{ width: '26px', height: '26px' }}>
            {isFullscreen ? (
              <svg fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}><path d="M9 9V4.5M9 9H4.5M9 9l-6-6M15 9h4.5M15 9V4.5M15 9l6-6M9 15v4.5M9 15H4.5M9 15l-6 6M15 15h4.5M15 15v4.5M15 15l6 6" /></svg>
            ) : (
              <svg fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}><path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l-5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
            )}
          </div>
        </button>

        {/* SIDEBAR - HANYA TAMPIL DI DESKTOP/TABLET (hidden md:flex) */}
        <aside className={`w-full md:w-[280px] lg:w-[320px] md:fixed md:left-0 md:top-0 md:h-screen ${sidebarBg} p-4 lg:p-6 flex flex-col z-50 overflow-y-auto pb-20 shadow-xl`}>
          <header className="text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-[#0C1A69] relative inline-block">MANDAI<span className="absolute -bottom-1 left-0 w-full h-2 bg-[#81D4FA] rounded-full"></span></h2>
            <p className="text-[10px] md:text-xs font-bold text-[#0C1A69]/70 mt-2 uppercase tracking-widest leading-tight">Media Anak Nusantara Digital Aktif Inspiratif</p>
            <div className="w-full mt-4 border-b border-[#0C1A69]/20 pb-4"><ModeSwitcher gameMode={gameMode} setGameMode={setGameMode} playSound={playSound} /></div>
          </header>

          <div className="mt-4 hidden md:flex flex-col gap-4">
            <SidebarImageWidget onClick={() => { playSound('pop'); setIsQRModalOpen(true); }} />
            <a href="https://whatsapp.com/channel/0029Vb84szt65yDK88AA4X0h" target="_blank" rel="noopener noreferrer" aria-label="Gabung Saluran Whatsapp" className="block text-center w-full py-3 bg-[#25D366] text-white rounded-xl shadow-lg font-black uppercase text-xs hover:scale-105 transition-transform">GABUNG SALURAN</a>
            <a href="/jurnal-guru" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('blog', '/jurnal-guru'); }} aria-label="Buka Halaman Jurnal Guru" className="block text-center w-full py-3 bg-gradient-to-r from-blue-100 to-white text-[#0C1A69] rounded-xl shadow-md border-2 border-[#0C1A69]/20 font-black uppercase text-xs hover:scale-105 transition-transform">JURNAL GURU</a>
            
            <div className="mt-2 text-center md:text-left">
              <button onClick={() => setIsProfileModalOpen(true)} aria-label="Lihat Profil Pengembang" className="block w-full text-left text-[#0C1A69] text-xs font-black cursor-pointer hover:underline uppercase bg-transparent border-none">Deni Ranoptri, M.Pd</button>
              <div className="flex gap-2 justify-center md:justify-start mt-2">
                {socialLinks.map((s, idx) => (
                  <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`Buka halaman ${s.name}`} className="p-2 rounded-lg bg-[#E3F2FD] hover:bg-white transition-colors shadow-sm"><img src={s.icon} alt="" className="w-4 h-4" /></a>
                ))}
              </div>

              {/* --- TAMBAHAN MENU WAJIB ADSENSE (DESKTOP SIDEBAR) --- */}
              <nav className="mt-8 pt-4 border-t border-[#0C1A69]/10 flex flex-col gap-2 text-[10px] font-black text-[#0C1A69]/60 uppercase tracking-widest" aria-label="Menu Utama">
                <a href="/game-edukasi-anak" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubKids', '/game-edukasi-anak'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Game Anak (PAUD/TK)</a>
                <a href="/game-logika" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubLogic', '/game-logika'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Game Logika</a>
                <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Game IFP/Kelas</a>
                <div className="h-2"></div>
                <a href="/about" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('about', '/about'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Tentang Kami</a>
                <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('privacy', '/privacy-policy'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Kebijakan Privasi</a>
                <a href="/contact" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('contact', '/contact'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Hubungi Kami</a>
              </nav>
              {/* --------------------------------------------------- */}

            </div>
          </div>
        </aside>

        <main className="flex-1 md:ml-[280px] lg:ml-[320px] h-[100dvh] overflow-y-auto custom-scrollbar">
          <div className="p-4 md:p-8 max-w-[1600px] mx-auto">
            
            {/* TAMBAHAN SAPAAN WAKTU OTOMATIS */}
            <SapaanWaktu />
            {/* ============================= */}
            
            <EduGameIntro lang={currentLocale as "id" | "en"} />

            <label htmlFor="search-game" className="sr-only">Cari game edukasi</label>
            <input id="search-game" type="text" placeholder="Cari game edukasi..." aria-label="Kolom Pencarian Game" className="w-full pl-6 pr-6 py-4 bg-white/60 backdrop-blur-md rounded-2xl text-[#0C1A69] font-bold shadow-sm mb-6 focus:ring-4 focus:ring-blue-200 outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            
            {/* TAMBAHAN BANNER TANTANGAN HARIAN */}
            <DailyChallenge onClickGame={handleCardClick} lang={currentLocale as "id" | "en"} />
            {/* ================================== */}

            <AdSenseDisplay />

            <h2 className="sr-only">Jelajahi Game Berdasarkan Kategori</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
  { id: 'all', label: 'Semua' },
  { id: 'numeracy', label: '🔢 Numerasi' },
  { id: 'literacy', label: '📚 Literasi' },
  { id: 'ice-breaking', label: '🎯 Ice Breaking' },
  { id: 'logic', label: '🧠 Logika' },
  { id: 'religion', label: '🕌 Religion' },
  { id: 'sport', label: '🏀 Sport' }
].map((cat) => (
                <button key={cat.id} aria-label={`Filter Kategori ${cat.label}`} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full text-xs font-black transition-all ${activeCategory === cat.id ? 'bg-[#0C1A69] text-white shadow-lg scale-105' : 'bg-white/50 text-[#0C1A69]/60 border border-white hover:bg-white'}`}>{cat.label}</button>
              ))}
            </div>

            <h2 className="sr-only">Pilihan Game Edukasi</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredGames.map((game) => (<article key={game.id} className="w-full aspect-[4/4.5]"><MenuCard config={game} onClick={() => handleCardClick(game.id)} /></article>))}
            </div>

            <EduGameSEOContent navigateTo={navigateTo} lang={currentLocale as "id" | "en"} />

            <div className="flex flex-col gap-16 mt-16 pb-12">
              <StatistikDewa />
              <div className="border-t border-[#0C1A69]/10 pt-16"><CommunityHub /></div>
              
              {/* LAZY LOAD DENGAN KUNCIAN TINGGI */}
              <div className="border-t border-[#0C1A69]/10 pt-16 min-h-[400px]">
                <Suspense fallback={<div className="h-[400px] w-full animate-pulse bg-white/50 rounded-3xl flex items-center justify-center"><span className="text-[#0C1A69]/50 font-bold uppercase tracking-widest">Memuat Galeri...</span></div>}>
                  <GaleriAksi />
                </Suspense>
              </div>
            </div>

            {/* TAMPILAN MOBILE (HP) */}
            <div className="md:hidden w-full mt-4 flex flex-col items-center gap-5 pb-8 pt-8 border-t-2 border-[#0C1A69]/10">
              <SidebarImageWidget onClick={() => { playSound('pop'); setIsQRModalOpen(true); }} />
              
              <a href="https://whatsapp.com/channel/0029Vb84szt65yDK88AA4X0h" target="_blank" rel="noopener noreferrer" aria-label="Gabung Saluran Whatsapp" className="block text-center w-full py-3.5 bg-[#25D366] text-white rounded-xl shadow-lg font-black uppercase text-xs hover:scale-105 transition-transform tracking-wider">
                GABUNG SALURAN
              </a>
              
              <a href="/jurnal-guru" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('blog', '/jurnal-guru'); }} aria-label="Buka Halaman Jurnal Guru" className="block text-center w-full py-3.5 bg-white text-[#0C1A69] rounded-xl shadow-md border-2 border-[#0C1A69]/20 font-black uppercase text-xs hover:scale-105 transition-transform tracking-wider">
                JURNAL GURU
              </a>
              
              <div className="mt-4 flex flex-col items-center text-center w-full">
                <p className="text-[10px] text-[#0C1A69]/60 font-bold uppercase tracking-widest mb-1">DEVELOPER</p>
                <button onClick={() => setIsProfileModalOpen(true)} aria-label="Lihat Profil Pengembang" className="block text-[#0C1A69] text-sm font-black cursor-pointer hover:underline uppercase bg-transparent border-none mb-4">
                  Deni Ranoptri, M.Pd
                </button>
                <div className="flex gap-4 justify-center w-full">
                  {socialLinks.map((s, idx) => (
                    <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`Buka halaman ${s.name}`} className="p-3 rounded-xl bg-white/60 border border-[#0C1A69]/10 hover:bg-white transition-colors shadow-sm">
                      <img src={s.icon} alt="" className="w-6 h-6" />
                    </a>
                  ))}
                </div>

                {/* --- TAMBAHAN MENU WAJIB ADSENSE (MOBILE FOOTER) --- */}
                <nav className="mt-8 pt-6 border-t border-[#0C1A69]/10 flex flex-wrap justify-center gap-3 text-[10px] font-black text-[#0C1A69]/60 uppercase tracking-widest w-full" aria-label="Kategori Game">
                  <a href="/game-edukasi-anak" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubKids', '/game-edukasi-anak'); }} className="hover:text-[#E45C63] transition-colors">Anak (PAUD)</a>
                  <span className="text-[#0C1A69]/30" aria-hidden="true">|</span>
                  <a href="/game-logika" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubLogic', '/game-logika'); }} className="hover:text-[#E45C63] transition-colors">Logika</a>
                  <span className="text-[#0C1A69]/30" aria-hidden="true">|</span>
                  <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="hover:text-[#E45C63] transition-colors">IFP/Kelas</a>
                </nav>
                <nav className="mt-4 flex flex-wrap justify-center gap-3 text-[10px] font-black text-[#0C1A69]/60 uppercase tracking-widest w-full" aria-label="Menu Tambahan Mobile">
                  <a href="/about" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('about', '/about'); }} className="hover:text-[#E45C63] transition-colors">Tentang</a>
                  <span className="text-[#0C1A69]/30" aria-hidden="true">|</span>
                  <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('privacy', '/privacy-policy'); }} className="hover:text-[#E45C63] transition-colors">Privasi</a>
                  <span className="text-[#0C1A69]/30" aria-hidden="true">|</span>
                  <a href="/contact" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('contact', '/contact'); }} className="hover:text-[#E45C63] transition-colors">Kontak</a>
                </nav>
                {/* ------------------------------------------------- */}

              </div>
            </div>
            {/* END TAMPILAN MOBILE */}

          </div>
        </main>

        <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
        <QRCodeModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
      </div>
    </>
  );
};

export default App;