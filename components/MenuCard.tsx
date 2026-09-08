import React, { useState } from 'react';
import { MenuCardProps } from '../types';

const MenuCard: React.FC<MenuCardProps> = ({ config, onClick, locale = "id" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isLight = config.variant === 'light';
  const isEn = locale === 'en' && config.en;
  const displayTitle = isEn ? config.en.title : config.title;
  const displaySubtitle = isEn ? config.en.subtitle : config.subtitle;
  const displayAudience = isEn ? config.en.audience : config.audience;
  const displaySubject = isEn ? config.en.subject : config.subject;

  const isComingSoon = config.isComingSoon;
  
  const textColorClass = isLight ? 'text-[#B71C1C]' : 'text-white';
  const subTextColorClass = isLight ? 'text-[#B71C1C]' : 'text-white';
  const borderClass = isLight ? 'border-[#EF9A9A]' : 'border-white/40';
  const focusRingClass = isLight ? 'focus:ring-[#EF9A9A]/50' : 'focus:ring-white/50';
  
  const iconContainerBg = isLight ? 'bg-[#FFEBEE]' : 'bg-white/20';
  const iconBorder = isLight ? 'border-[#EF9A9A]' : 'border-white/50';
  const pillBg = isLight ? 'bg-[#FFEBEE] text-[#B71C1C]' : isComingSoon ? 'bg-black/20 text-white/80' : 'bg-white/30 text-white';
  
  const arrowContainerClass = isLight 
    ? 'bg-[#FFEBEE] group-hover:bg-[#B71C1C] group-hover:scale-110' 
    : 'bg-white/30 group-hover:bg-white group-hover:scale-110';
  const arrowIconClass = isLight
    ? 'text-[#B71C1C] group-hover:text-white'
    : 'text-white group-hover:text-gray-800';

  // === FUNGSI SHARE WHATSAPP KHUSUS GAME ===
  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation(); // Cegah kartu game terklik saat pencet tombol share
    e.preventDefault();
    const message = encodeURIComponent(
      `Halo! Cobain game edukasi "${config.title}" ini buat ice breaking di kelas. \n\nMainkan gratis di MANDAI: https://papaninteraktif.com/`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className={`relative group w-full h-full select-none touch-manipulation backface-hidden ${isComingSoon ? 'opacity-80' : ''}`}>
      
      {/* BADGES KANAN ATAS (HOT! / SEGERA) */}
      <div className="absolute top-2 right-2 md:top-3 md:right-3 z-40 flex flex-col gap-1 items-end pointer-events-none">
        {config.isNew && !isComingSoon && (
          <span className="relative flex h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60 duration-1000"></span>
            <span className="relative inline-flex rounded-full h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 border-2 border-white items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.8)] transform rotate-12 transition-transform hover:rotate-0">
               <span className="text-[7px] sm:text-[9px] md:text-[10px] font-black text-white leading-none drop-shadow-md">HOT!</span>
            </span>
          </span>
        )}
        {isComingSoon && (
           <span className="relative inline-flex rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 bg-slate-700/90 border-2 border-white items-center justify-center shadow-lg transform rotate-6">
              <span className="text-[7px] sm:text-[9px] font-black text-white leading-none tracking-wider">SEGERA</span>
           </span>
        )}
      </div>

      {/* === TOMBOL SHARE KIRI ATAS === */}
      {!isComingSoon && (
        <div className="absolute top-2 left-2 md:top-3 md:left-3 z-40 flex flex-col gap-1 items-start">
          <button 
            onClick={handleShare}
            aria-label="Bagikan Game"
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center shadow-sm hover:bg-[#25D366] hover:border-white transition-all duration-300 hover:scale-110 focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="sm:w-4 sm:h-4 md:w-4 md:h-4 drop-shadow-md"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>
      )}

      {/* GLOW EFFECT */}
      {!isComingSoon && (
        <div 
          className="absolute inset-1 rounded-[20px] md:rounded-[24px] opacity-20 transition-all duration-300 group-hover:inset-0 group-hover:opacity-60 group-hover:blur-md will-change-transform"
          style={{ background: config.bgColor }}
        ></div>
      )}

      {/* MAIN CARD CONTENT */}
      {React.createElement(
        (!isComingSoon && config.url) ? 'a' : 'div',
        {
          ...((!isComingSoon && config.url) 
            ? {
                href: `/game/${encodeURIComponent(config.id)}`,
                onClick: (e: React.MouseEvent) => {
                  e.preventDefault();
                  onClick(config.id);
                },
                "aria-label": `${config.title} - ${config.subtitle}`
              }
            : {
                onClick: () => !isComingSoon && onClick(config.id),
                onKeyDown: (e: React.KeyboardEvent) => {
                  if (!isComingSoon && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick(config.id);
                  }
                },
                role: "button",
                tabIndex: isComingSoon ? -1 : 0,
                "aria-disabled": isComingSoon,
                "aria-label": `${config.title} - ${config.subtitle}`
              }),
          className: `
            relative w-full h-full
            flex flex-col items-center justify-start text-center
            p-2.5 sm:p-3 md:p-4
            rounded-[20px] md:rounded-[28px]
            border-2 ${borderClass}
            transform-gpu transition-transform duration-200 block
            ${!isComingSoon ? 'hover:scale-[1.03] active:scale-[0.96] cursor-pointer' : 'cursor-default grayscale-[0.3]'}
            overflow-hidden shadow-lg outline-none focus:ring-4 ${focusRingClass}
          `,
          style: { background: config.bgColor }
        },
        <>
          {/* Dekorasi Latar Belakang */}
          <div aria-hidden="true" className={`absolute -top-10 -right-10 w-24 h-24 md:w-32 md:h-32 rounded-full pointer-events-none ${isLight ? 'bg-[#B71C1C]/5' : 'bg-white/10'}`}></div>
          <div aria-hidden="true" className={`absolute -bottom-10 -left-10 w-20 h-20 md:w-28 md:h-28 rounded-full pointer-events-none ${isLight ? 'bg-[#B71C1C]/5' : 'bg-white/10'}`}></div>
          
          {/* ICON CONTAINER */}
          <div className={`z-20 mt-1 shrink-0 transition-transform duration-300 ${config.id === 'helirescue' ? 'w-[50%] max-w-[120px] aspect-square drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]' : 'w-[35%] max-w-[80px] aspect-square'} ${!isComingSoon ? 'group-hover:scale-110' : ''}`}>
            <div className={`
              w-full h-full
              ${config.id === 'helirescue' ? 'flex items-center justify-center relative' : `rounded-full overflow-hidden flex items-center justify-center ${iconContainerBg} border-2 md:border-[3px] ${iconBorder} shadow-sm relative`}
            `}>
              {config.image && (
                <>
                   <div className={`absolute inset-0 bg-gray-300/20 animate-pulse transition-opacity duration-300 ${isLoaded ? 'opacity-0' : 'opacity-100'} ${config.id === 'helirescue' ? 'rounded-full' : ''}`} />
                   <img 
                    src={config.image} alt={`${config.title} - game edukasi ${config.tags?.join(', ') || ''}`}
                    className={`w-full h-full ${config.id === 'helirescue' ? 'object-contain scale-125 origin-bottom' : 'object-cover'} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    referrerPolicy="no-referrer" loading="lazy" onLoad={() => setIsLoaded(true)}
                  />
                </>
              )}
            </div>
          </div>

          {/* TEXT CONTAINER */}
          <div className={`flex-1 w-full flex flex-col justify-center items-center ${textColorClass} z-20 relative px-1 my-1.5 sm:my-2 min-h-0`}>
            <h3 className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-black tracking-tight leading-[1.15] mb-0.5 drop-shadow-sm w-full line-clamp-2">
              {config.title}
            </h3>
            <p className={`text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] leading-[1.2] font-bold opacity-90 line-clamp-2 w-full px-1 ${subTextColorClass}`}>
              {config.subtitle}
            </p>
          </div>

          {/* ACTION BUTTON */}
          <div className={`shrink-0 mt-auto pt-1 mb-1 flex flex-wrap items-center justify-center gap-1.5 z-20 ${subTextColorClass}`}>
             <span className={`${pillBg} px-2.5 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded-md md:rounded-lg text-[7px] sm:text-[8px] md:text-[10px] uppercase font-black whitespace-nowrap shadow-sm tracking-widest`}>
              {isComingSoon ? 'Segera' : 'MAIN'}
            </span>
            {config.requiresCamera && (
              <span className={`${pillBg} px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg text-[7px] sm:text-[8px] md:text-[10px] uppercase font-black shadow-sm flex items-center gap-1`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 sm:w-3 sm:h-3"><path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" /><path fillRule="evenodd" d="M9.344 3.071a4.993 4.993 0 015.312 0l.205.096a6.993 6.993 0 003.433 2.914l.18.066a3 3 0 012.306 3.01v6.242a3 3 0 01-3 3H6.22a3 3 0 01-3-3V9.157a3 3 0 012.306-3.01l.18-.066a6.993 6.993 0 003.433-2.914l.205-.096zM12 7.5a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5z" clipRule="evenodd" /></svg>
                <span className="hidden sm:inline">KAMERA</span>
                <span className="sm:hidden">CAM</span>
              </span>
            )}
          </div>

          {/* ACTION ARROW */}
          {!isComingSoon && (
            <div className="z-20 absolute bottom-2.5 right-2.5 hidden landscape:block">
              <div className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${arrowContainerClass} opacity-0 group-hover:opacity-100 shadow-md`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 h-3.5 md:w-4 md:h-4 ${arrowIconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MenuCard;