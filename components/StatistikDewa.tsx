import React, { useEffect, useState } from 'react';

// Komponen untuk satu kotak angka
const StatItem = ({ label, target, icon, suffix = "" }: { label: string, target: number, icon: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animasi selama 2 detik
    const increment = target / (duration / 16); // Berhitung mulus di 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col items-center p-6 md:p-8 bg-white/50 backdrop-blur-md rounded-[2.5rem] border-4 border-white shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
      <span className="text-4xl md:text-5xl mb-3 drop-shadow-md transform transition-transform group-hover:scale-110 duration-300">{icon}</span>
      <h3 className="text-4xl md:text-5xl font-black text-[#0C1A69] tracking-tighter drop-shadow-sm">
        {count}{suffix}
      </h3>
      <p className="text-[10px] md:text-xs font-black text-[#0C1A69]/60 uppercase tracking-[0.2em] mt-2 text-center">
        {label}
      </p>
    </div>
  );
};

// Komponen Utama
const StatistikDewa: React.FC = () => {
  return (
    <div className="w-full mt-4 mb-4">
      {/* Judul Section */}
      <div className="flex flex-col items-center mb-8 text-center px-4">
        <span className="text-[10px] font-black text-[#0C1A69]/50 uppercase tracking-[0.3em] mb-2 drop-shadow-sm">JEJAK DIGITAL MANDAI</span>
        <h2 className="text-2xl md:text-3xl font-black text-[#0C1A69] uppercase tracking-tighter leading-tight">
          Bergerak & Menginspirasi
        </h2>
      </div>

      {/* Grid Angka */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
        <StatItem icon="🎮" label="Media Interaktif" target={32} suffix="+" />
        <StatItem icon="🏫" label="Sekolah Terimbas" target={4500} suffix="+" />
        <StatItem icon="👥" label="Guru Terinspirasi" target={2000} suffix="+" />
      </div>
    </div>
  );
};

export default StatistikDewa;