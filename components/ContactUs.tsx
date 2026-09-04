import React, { useEffect } from 'react';

const ContactUs: React.FC = () => {
  // 1. DYNAMIC META TAGS & CANONICAL (Trik SEO untuk React)
  useEffect(() => {
    // 1. Mengubah judul tab browser
    document.title = "Hubungi Kami | Contact Us - Papan Interaktif";
    
    // 2. Mengubah atau membuat meta description secara dinamis
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Hubungi tim Papan Interaktif untuk pertanyaan, masukan, kolaborasi sekolah, atau melaporkan kendala pada platform game edukasi PAUD kami. Support 24/7."
      );
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', "Hubungi tim Papan Interaktif untuk pertanyaan, masukan, kolaborasi sekolah, atau melaporkan kendala pada platform game edukasi PAUD kami. Support 24/7.");
      document.head.appendChild(metaDescription);
    }

    // 3. Menambahkan Canonical Tag agar lolos dari error "Duplicate"
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    // Gunakan URL absolut statis agar bot Google langsung paham
    canonical.setAttribute('href', 'https://papaninteraktif.com/contact');
  }, []);

  return (
    <div className="min-h-screen bg-[#DDEBF8] text-[#0C1A69] py-12 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      <main className="max-w-2xl w-full bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 text-center">
        
        <h1 className="text-3xl md:text-4xl font-black mb-2">
          Hubungi Kami / <span className="text-[#E45C63]">Contact Us</span>
        </h1>
        <p className="text-[#0C1A69]/60 font-bold tracking-widest text-xs uppercase mb-8 pb-6 border-b-2 border-[#0C1A69]/10">
          Papan Interaktif Support
        </p>

        <section className="space-y-6 text-base md:text-lg leading-relaxed opacity-90 mb-10">
          
          <div className="bg-[#E3F2FD]/50 p-6 rounded-2xl border border-[#0C1A69]/5 mb-6 text-left">
             <p className="mb-2 font-medium text-[#0C1A69]">
               🇮🇩 Ada pertanyaan, masukan, kolaborasi sekolah, atau ingin melaporkan kendala pada game edukasi PAUD kami? Kami sangat senang mendengar dari Anda!
             </p>
             <p className="text-sm opacity-80 text-[#0C1A69]">
               🇬🇧 Have any questions, feedback, school collaboration inquiries, or need to report an issue with our early childhood educational games? We'd love to hear from you!
             </p>
          </div>

          {/* 4. SEMANTIC CONTACT INFO: Google sangat memprioritaskan tag <address> */}
          <address className="bg-white p-8 rounded-2xl border border-[#0C1A69]/10 shadow-sm inline-block w-full not-italic">
            <p className="font-bold text-xl mb-1 text-[#E45C63]">Email Kami / Email Us:</p>
            <p className="text-sm text-[#0C1A69]/60 mb-4">(Support 24/7)</p>
            <a 
              href="mailto:denidemian83@gmail.com" 
              className="text-[#0C1A69] font-black text-xl md:text-2xl lg:text-3xl hover:underline drop-shadow-sm transition-all hover:text-[#2563EB] break-all"
              aria-label="Kirim email ke Papan Interaktif"
            >
              denidemian83@gmail.com
            </a>

            {/* TAMBAHAN UNTUK ADSENSE: Trust Signal (Lokasi Fisik) */}
            <div className="mt-6 pt-4 border-t border-[#0C1A69]/10 text-sm text-[#0C1A69]/80 flex flex-col items-center gap-1">
              <span className="font-bold uppercase tracking-wider text-xs text-[#0C1A69]/50">Basis Operasional</span>
              <span>Kabupaten Tabalong, Kalimantan Selatan</span>
              <span>Indonesia</span>
            </div>
          </address>
          
          <div className="text-sm px-4 text-left">
            <p className="mb-3">
              🇮🇩 Atau temukan kami di media sosial melalui tautan di halaman utama. Kami akan berusaha merespons pesan Anda secepat mungkin.
            </p>
            <p className="opacity-80">
              🇬🇧 Or find us on social media via the links on our homepage. We will try our best to respond to your message as quickly as possible.
            </p>
          </div>
        </section>

        <div className="mt-8 flex flex-col items-center border-t-2 border-[#0C1A69]/10 pt-8 gap-4">
          <a 
            href="/" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0C1A69] text-white font-black uppercase tracking-wider rounded-xl shadow-[0_10px_20px_-10px_rgba(12,26,105,0.5)] hover:scale-105 active:scale-95 transition-all no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Kembali / Back to Games
          </a>

          {/* Internal Linking untuk mempermudah navigasi Bot AdSense */}
          <div className="flex gap-4 text-xs font-bold text-[#0C1A69]/60 uppercase tracking-wide mt-2">
            <a href="/about" className="hover:text-[#E45C63] transition-colors">About Us</a>
            <span>|</span>
            <a href="/privacy-policy" className="hover:text-[#E45C63] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ContactUs;