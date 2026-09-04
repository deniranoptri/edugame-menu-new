import React, { useEffect } from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  // Efek untuk mencegah scrolling pada background saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 md:p-4 bg-black/70 backdrop-blur-sm transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[95vh] overflow-y-auto relative shadow-2xl flex flex-col transition-all duration-300 transform scale-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="sticky top-4 right-4 ml-auto w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full transition-colors z-20 shadow-md"
          aria-label="Tutup Profil"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 md:p-10 pt-0">
          
          {/* Label Rangkuman Pencarian Digital */}
          <div className="flex justify-center md:justify-start mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full shadow-sm">
              <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-[11px] md:text-xs font-semibold text-gray-500 tracking-wide uppercase">
                Digital Portfolio & Global Identity Verification
              </span>
            </div>
          </div>

          {/* Bagian Header: Foto & Nama */}
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-10 mb-10">
            <div className="flex-1 text-center md:text-left">
              <h2 id="modal-title" className="text-4xl md:text-5xl font-black text-[#0C1A69] tracking-tighter mb-1.5 drop-shadow-sm">
                Deni Ranoptri, M.Pd.
              </h2>
              
              <div className="mb-5">
                <p className="text-blue-600 font-bold text-sm md:text-base uppercase tracking-[0.2em]">
                  Tokoh Guru Inovatif Indonesia & EdTech Creator
                </p>
                <p className="text-gray-500 font-semibold text-xs italic tracking-wide">
                  Indonesian Educational Technology Leader & Award-Winning Innovator
                </p>
              </div>
              
              <div className="space-y-4 border-l-4 border-blue-200 pl-4 py-1.5 bg-blue-50/50 rounded-r-lg text-sm md:text-base">
                <p className="text-gray-700 leading-relaxed text-justify md:text-left">
                  Dikenal luas sebagai inovator teknologi pendidikan asal <strong>Tabalong, Kalimantan Selatan</strong>. Sebagai <strong>Duta Teknologi Kemdikbudristek</strong> dan <strong>Kapten Belajar.id Kalsel</strong>, beliau mendedikasikan diri pada pengembangan ekosistem game edukasi dan digitalisasi pembelajaran nasional.
                </p>
                <p className="text-gray-500 leading-relaxed text-justify md:text-left italic">
                  Recognized as a leading EdTech figure from <strong>South Kalimantan</strong>. As a <strong>Ministry of Education Tech Ambassador</strong>, he drives the development of educational games and digital learning ecosystems across Indonesia.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0pVqObKR9W59IgZuGY8NHdIVT37cdFnwrWb-VX4Stl2BLtyaABLl4iIlnpjyh-Why1JIpevR09-K1BXj0PwEA8eRP1VMBYMCKLoLN70oLO2brbxm7Wz1hpD6li-KJEt1ABVlIy6k7krL1Ko_38FtEgLt83uk6pAlD4JwPbTaqhlFqCgtAsNK_PDjOzxo/s320/Deni.png"
                alt="Deni Ranoptri - Award Winning Indonesian EdTech Innovator" 
                className="w-40 h-40 md:w-56 md:h-56 object-cover object-top rounded-full border-4 border-white shadow-lg relative z-10 transform group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Badge Peran Utama */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-[10px] font-bold shadow-inner uppercase">Google Certified Trainer</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-[10px] font-bold shadow-inner uppercase">Duta Teknologi</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-[10px] font-bold shadow-inner uppercase">Microsoft Expert</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-[10px] font-bold shadow-inner uppercase">Kapten Belajar.id</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Kolom Kiri: Prestasi Lengkap */}
            <div>
              <h3 className="text-lg font-black text-gray-800 border-b-2 border-blue-500 pb-2 mb-5 flex items-center gap-2 uppercase tracking-wider text-xs">
                🏆 Jejak Prestasi & Juri
              </h3>
              <ul className="space-y-3.5 text-sm text-gray-700">
                <li className="flex items-start font-bold text-blue-700"><span className="mr-2">🔥</span> Pejuang Digitalisasi Pembelajaran Prov. Kalsel (2026)</li>
                <li className="flex items-start"><span className="mr-2">🥇</span> Kapten Daerah Jawara Belajar.id Nasional (2021, 2022, 2023, 2024)</li>
                <li className="flex items-start"><span className="mr-2">⚖️</span> Juri Sayembara Video GTK Dikdas Kemdikbud (2020-2021)</li>
                <li className="flex items-start"><span className="mr-2">🥇</span> Juara 1 Eagle Awards Documentary Competition 2019</li>
                <li className="flex items-start"><span className="mr-2">🌟</span> Duta Rumah Belajar Terbaik Nasional 2018</li>
                <li className="flex items-start"><span className="mr-2">🥇</span> Juara 1 Website SKPD Prov. Kalsel (2017)</li>
                <li className="flex items-start"><span className="mr-2">🥇</span> Juara 1 Website Sekolah Prov. Kalsel (2015, 2016)</li>
                <li className="flex items-start"><span className="mr-2">🥇</span> Juara 1 Media Pembelajaran Prov. Kalsel (2014)</li>
              </ul>
            </div>

            {/* Kolom Kanan: Penghargaan & Internasional */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-black text-gray-800 border-b-2 border-blue-500 pb-2 mb-5 flex items-center gap-2 uppercase tracking-wider text-xs">
                  🎖️ Penghargaan & Global
                </h3>
                <ul className="space-y-3.5 text-sm text-gray-700">
                  <li className="flex items-start"><span className="mr-2">🎖️</span> Insan Pendidikan Terpuji (2021, 2022, 2023)</li>
                  <li className="flex items-start"><span className="mr-2">🎖️</span> Guru Inovatif Bidang TIK Nasional (2020)</li>
                  <li className="flex items-start"><span className="mr-2">🎖️</span> Kapten Belajar.id Terpopuler Nasional (2021)</li>
                  <li className="flex items-start"><span className="mr-2">🎖️</span> Tokoh Masyarakat Pegiat IT Pendidikan (2016)</li>
                  <li className="flex items-start"><span className="mr-2">🎖️</span> Anugerah Peduli Pendidikan Kemdikbud (2015)</li>
                  <li className="flex items-start"><span className="mr-2">✈️</span> Innovative Education Exchange - Paris, France (2019)</li>
                  <li className="flex items-start"><span className="mr-2">🎓</span> Microsoft Certified Educator</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bagian Bawah: Komunitas & Sosial Media */}
          <div className="mt-12 bg-blue-50/80 p-6 md:p-8 rounded-2xl text-center border border-blue-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400"></div>
            <div className="mb-6">
               <h4 className="font-bold text-blue-900 mb-2">Leadership & Community</h4>
               <p className="text-xs text-blue-800 max-w-2xl mx-auto font-medium">
                 Ketua Komunitas Belajar ID Kalsel • Ketua Komunitas Sahabat PembaTIK Kalsel • Pengelola Portal Gurusd.net
               </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.youtube.com/@DeniRanoptri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-[10px] font-bold shadow-md hover:bg-red-700 transition-all">
                YouTube Channel
              </a>
              <a href="https://www.tiktok.com/@denipositif" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-[10px] font-bold shadow-md hover:bg-gray-800 transition-all">
                TikTok @denipositif
              </a>
              <a href="https://papaninteraktif.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-[10px] font-bold shadow-md hover:bg-blue-700 transition-all">
                Media Interaktif
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileModal;