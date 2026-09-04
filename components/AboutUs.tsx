import React, { useEffect } from 'react';

const AboutUs: React.FC = () => {
  
  // Trik SEO via CSR (Client Side Rendering)
  useEffect(() => {
    // 1. Mengubah judul tab browser
    document.title = "Tentang Kami - Profil Pengembang | Papan Interaktif";
    
    // 2. Mengubah atau membuat meta description secara dinamis
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Papan Interaktif adalah platform game edukasi anak PAUD yang dikembangkan oleh Deni Ranoptri, M.Pd. Duta Teknologi & Kapten Belajar.id.");
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', "Papan Interaktif adalah platform game edukasi anak PAUD yang dikembangkan oleh Deni Ranoptri, M.Pd. Duta Teknologi & Kapten Belajar.id.");
      document.head.appendChild(metaDescription);
    }

    // 3. Menambahkan Canonical Tag secara statis dan pasti
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    // Langsung tembak URL absolut agar Googlebot tidak bingung
    canonical.setAttribute('href', 'https://papaninteraktif.com/about'); 
  }, []);

  return (
    <div className="min-h-screen bg-[#DDEBF8] text-[#0C1A69] font-sans flex items-center justify-center p-4">
      <main className="max-w-4xl w-full bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 text-center my-12">
        
        <h1 className="text-3xl md:text-4xl font-black mb-2">
          Tentang Kami / <span className="text-[#E45C63]">About Us</span>
        </h1>
        <p className="text-[#0C1A69]/60 font-bold tracking-widest text-xs uppercase mb-8 pb-6 border-b-2 border-[#0C1A69]/10">
          Papan Interaktif Global
        </p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed opacity-90 text-left">
          
          <article className="bg-[#E3F2FD]/50 p-6 rounded-2xl border border-[#0C1A69]/5">
            <h2 className="font-black text-xl mb-3 text-[#0C1A69]">🇮🇩 Bahasa Indonesia</h2>
            <p className="mb-3">
              Selamat datang di <strong>Papan Interaktif</strong>! Kami adalah platform media pembelajaran digital yang berdedikasi untuk menyediakan <strong>game edukasi anak</strong>, permainan interaktif, dan alat peraga sekolah yang aman, gratis, dan menyenangkan dengan fokus utama untuk Pendidikan Anak Usia Dini (PAUD).
            </p>
            <p className="mb-3">
              Platform ini memadukan teknologi AI, kurikulum modern, dan kearifan lokal. Dari game matematika dasar, logika, literasi huruf, hingga aktivitas fisik interaktif, semuanya dirancang secara khusus agar optimal dimainkan di berbagai perangkat, mulai dari Chromebook siswa hingga <em>Interactive Flat Panel</em> (IFP) di ruang kelas.
            </p>
            <p className="font-bold text-[#E45C63]">
              "Belajar Asyik, Main Bermanfaat!"
            </p>
          </article>

          <article className="bg-white p-6 rounded-2xl border border-[#0C1A69]/10 shadow-sm">
            <h2 className="font-black text-xl mb-3 text-[#0C1A69]">🇬🇧 English</h2>
            <p className="mb-3">
              Welcome to <strong>Papan Interaktif</strong> (Interactive Board)! We are a digital learning platform dedicated to providing safe, free, and highly engaging <strong>educational games for kids</strong>, interactive learning tools, and preschool activities.
            </p>
            <p className="mb-3">
              This platform integrates modern AI technology with interactive gameplay. Everything is designed to boost children's cognitive skills effectively, optimized for various educational devices including Chromebooks and Smartboards.
            </p>
            <p className="font-bold text-[#2563EB]">
              "Fun Learning, Meaningful Play!"
            </p>
          </article>

          <div className="mt-8 p-6 bg-gradient-to-br from-white to-[#E3F2FD]/30 border-l-4 border-[#E45C63] rounded-r-2xl shadow-sm text-left">
            <h3 className="font-black text-lg mb-3 text-[#0C1A69]">Profil Pengembang & Inovasi Pendidikan</h3>
            <p className="mb-3 text-sm text-[#0C1A69]/80">
              Papan Interaktif bukanlah sekadar kumpulan game biasa, melainkan dikembangkan secara langsung oleh praktisi pendidikan, <strong>Deni Ranoptri, M.Pd</strong>, yang memiliki rekam jejak aktif dalam transformasi pendidikan digital di Indonesia:
            </p>
            <ul className="list-none space-y-2 text-sm text-[#0C1A69]/90 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-[#E45C63]">✔</span> Duta Teknologi Kemdikbudristek (Kalimantan Selatan)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E45C63]">✔</span> Kapten Belajar.id (Kalimantan Selatan)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E45C63]">✔</span> Pengembang Media Interaktif Berbasis HTML5 untuk Pendidikan
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E45C63]">✔</span> Fokus pada perwujudan <em>Paperless Education</em> dan <em>Game-based Learning</em>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4 border-t-2 border-[#0C1A69]/10 pt-8">
          <a href="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0C1A69] text-white font-black uppercase tracking-wider rounded-xl shadow-[0_10px_20px_-10px_rgba(12,26,105,0.5)] hover:scale-105 active:scale-95 transition-all no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Kembali
          </a>
          
          <div className="flex gap-4 text-xs font-bold text-[#0C1A69]/60 uppercase tracking-wide mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-[#E45C63] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/contact" className="hover:text-[#E45C63] transition-colors">Contact Us</a>
          </div>
        </div>

      </main>
    </div>
  );
};

export default AboutUs;