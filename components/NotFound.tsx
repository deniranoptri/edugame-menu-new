import React, { useEffect } from 'react';

interface NotFoundProps {
  onBack: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onBack }) => {
  useEffect(() => {
    document.title = "Halaman Tidak Ditemukan | Papan Interaktif";

    // Set meta robots to noindex, follow
    let metaRobots = document.querySelector('meta[name="robots"]');
    const originalRobots = metaRobots ? metaRobots.getAttribute("content") : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
    
    if (metaRobots) {
      metaRobots.setAttribute("content", "noindex, follow");
    } else {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      metaRobots.setAttribute('content', "noindex, follow");
      document.head.appendChild(metaRobots);
    }

    // Remove canonical link for 404
    const canonical = document.querySelector('link[rel="canonical"]');
    const originalCanonicalHref = canonical ? canonical.getAttribute("href") : null;
    
    if (canonical) {
      canonical.remove();
    }

    return () => {
      // Restore on unmount
      document.title = 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif';
      
      let robots = document.querySelector('meta[name="robots"]');
      if (robots && originalRobots) {
        robots.setAttribute("content", originalRobots);
      }

      if (originalCanonicalHref) {
        let restoredCanonical = document.querySelector('link[rel="canonical"]');
        if (!restoredCanonical) {
          restoredCanonical = document.createElement('link');
          restoredCanonical.setAttribute('rel', 'canonical');
          document.head.appendChild(restoredCanonical);
        }
        restoredCanonical.setAttribute('href', originalCanonicalHref);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#F8FAFC]">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl text-center max-w-md w-full border border-gray-100">
        <h1 className="text-6xl md:text-8xl font-black text-[#0C1A69] mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-bold text-[#E45C63] mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-8 font-medium">Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.</p>
        <button 
          onClick={onBack}
          className="inline-block px-8 py-4 bg-[#0C1A69] text-white rounded-2xl font-black uppercase tracking-widest shadow-lg hover:scale-105 transition-transform"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default NotFound;
