import React from 'react';

interface Props { 
  navigateTo: (view: any, path: string) => void;
  lang?: 'id' | 'en';
}

const EduGameSEOContent: React.FC<Props> = ({ navigateTo, lang = 'id' }) => (
  <section className="bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-8 mt-12 mb-8 shadow-sm border border-white/50 text-[#0C1A69]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-8">
        <article>
          <h2 className="text-lg md:text-xl font-black mb-3">
            {lang === 'en' ? 'Educational Games for Children, Students, and Teachers' : 'Game Edukasi untuk Anak, Siswa, dan Guru'}
          </h2>
          <p className="text-sm md:text-base opacity-80 leading-relaxed font-medium">
            {lang === 'en' 
              ? <>We believe that game-based learning makes education enjoyable and highly effective. Through our collection of interactive <strong>free educational games</strong> and <strong>interactive learning games</strong>, children and students across all education levels can explore concepts like mathematics, language, and logic in a stress-free environment. These <strong>educational games for students</strong> are perfect as <strong>interactive learning activities</strong> for the classroom.</>
              : <>Kami percaya bahwa pembelajaran berbasis game membuat pendidikan menjadi menyenangkan dan efektif. Melalui koleksi <strong>game edukasi gratis</strong> dan <strong>permainan edukatif</strong> kami, anak-anak dan siswa di berbagai tingkat pendidikan dapat mengeksplorasi konsep dasar matematika, bahasa, dan logika tanpa tekanan. <strong>Game pembelajaran</strong> ini sangat cocok digunakan sebagai <strong>media interaktif</strong> untuk kegiatan kelas.</>
            }
          </p>
          
          <div className="mt-5">
            <strong className="block text-xs font-black uppercase tracking-widest text-[#E45C63] mb-2.5">
              {lang === 'en' ? 'Educational Coverage' : 'Cakupan Pembelajaran'}
            </strong>
            <div className="flex flex-wrap gap-2">
              {['PAUD', 'SD', 'SMP', 'SMA'].map((level, idx) => {
                const enLabels = ['Early Childhood', 'Elementary', 'Middle School', 'High School'];
                const label = lang === 'en' ? enLabels[idx] : level;
                return (
                  <span key={level} className="px-3 py-1.5 bg-white/60 border border-[#0C1A69]/10 rounded-lg text-[11px] font-bold text-[#0C1A69] shadow-sm">
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        </article>

        <article>
          <h2 className="text-lg md:text-xl font-black mb-3">
            {lang === 'en' ? 'Learning Through Play' : 'Belajar Sambil Bermain'}
          </h2>
          <p className="text-sm md:text-base opacity-80 leading-relaxed font-medium">
            {lang === 'en'
              ? 'Every game we provide combines entertainment with educational value. The concept of learning through play is designed to help improve memory, train concentration, and build positive character without the pressure of traditional studying.'
              : 'Setiap game yang kami sediakan menggabungkan elemen hiburan dan nilai pendidikan. Konsep belajar sambil bermain dirancang untuk membantu meningkatkan daya ingat, melatih konsentrasi, dan membangun karakter positif tanpa tekanan belajar tradisional.'
            }
          </p>
        </article>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-8">
        <article>
          <h2 className="text-lg md:text-xl font-black mb-3">
            {lang === 'en' ? 'Interactive Learning Media for Teachers' : 'Media Pembelajaran Interaktif untuk Guru'}
          </h2>
          <p className="text-sm md:text-base opacity-80 leading-relaxed font-medium">
            {lang === 'en'
              ? <>For educators from Early Childhood through High School, Papan Interaktif serves as a flexible solution for <strong>interactive classroom activities</strong>. Use these <strong>classroom games</strong> as ice breakers, interactive exercises, or digital learning media on large <strong>Interactive Flat Panel (IFP)</strong> screens and <strong>Smartboards</strong> to boost student enthusiasm in schools.</>
              : <>Bagi para pendidik dari tingkat PAUD hingga SMA, Papan Interaktif hadir sebagai solusi <strong>media pembelajaran interaktif</strong> yang fleksibel. Gunakan berbagai game ini sebagai sarana <strong>aktivitas kelas interaktif</strong>, latihan di kelas, maupun pembelajaran digital menggunakan layar besar <strong>Interactive Flat Panel (IFP)</strong> dan <strong>Smartboard</strong> untuk meningkatkan antusiasme siswa di sekolah.</>
            }
          </p>
          <p className="text-sm md:text-base opacity-80 leading-relaxed font-medium mt-3">
            {lang === 'en'
              ? <>For learning using large touch screens, teachers can also access <a href="/en/educational-games-for-interactive-flat-panels" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/en/educational-games-for-interactive-flat-panels'); }} className="text-[#E45C63] font-bold hover:underline">IFP Educational Games</a> designed specifically for Interactive Flat Panels and interactive boards.</>
              : <>Untuk pembelajaran menggunakan layar sentuh besar, guru juga dapat mengakses <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="text-[#E45C63] font-bold hover:underline">Game Edukasi IFP</a> yang dirancang khusus untuk digunakan pada Interactive Flat Panel dan papan interaktif.</>
            }
          </p>
        </article>

        <article>
          <h2 className="text-lg md:text-xl font-black mb-3">
            {lang === 'en' ? 'Frequently Asked Questions (FAQ)' : 'Tanya Jawab (FAQ) Papan Interaktif'}
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="block text-sm font-black text-[#E45C63]">
                {lang === 'en' ? 'What is Papan Interaktif?' : 'Apa itu Papan Interaktif?'}
              </strong>
              <span className="text-sm opacity-80 font-medium">
                {lang === 'en' 
                   ? 'A digital platform providing a collection of free interactive educational games with no installation required.' 
                   : 'Platform digital yang menyediakan koleksi game pendidikan interaktif gratis tanpa perlu instalasi.'}
              </span>
            </li>
            <li>
              <strong className="block text-sm font-black text-[#E45C63]">
                {lang === 'en' ? 'What are interactive flat panel games?' : 'Apa itu game papan interaktif digital (PID)?'}
              </strong>
              <span className="text-sm opacity-80 font-medium">
                {lang === 'en' 
                   ? 'Interactive Flat Panel games, interactive whiteboard games, or smartboard educational games are learning activities specifically designed for large touch screens in modern classrooms. They help teachers create engaging interactive classroom games through multi-touch technology.' 
                   : 'Game papan interaktif digital (PID), game edukasi layar sentuh, atau game IFP adalah game edukasi yang dirancang khusus untuk dimainkan di layar sentuh besar atau smartboard di kelas. Teknologi ini membantu guru menciptakan aktivitas pembelajaran interaktif yang melibatkan banyak siswa sekaligus.'}
              </span>
            </li>
            <li>
              <strong className="block text-sm font-black text-[#E45C63]">
                {lang === 'en' ? 'Who can use it?' : 'Siapa yang dapat menggunakannya?'}
              </strong>
              <span className="text-sm opacity-80 font-medium">
                {lang === 'en' 
                   ? 'Our games are designed as educational games for kids and students across Early Childhood, Elementary, Middle, and High School. They are highly effective classroom games for teachers to use as ice breakers and interactive teaching activities.' 
                   : 'Game belajar kami dirancang untuk mendukung pembelajaran bagi siswa dari tingkat PAUD, SD, SMP, hingga SMA. Seluruh permainan sangat cocok digunakan sebagai game untuk guru dalam mengisi ice breaking dan aktivitas kelas interaktif.'}
              </span>
            </li>
            <li>
              <strong className="block text-sm font-black text-[#E45C63]">
                                {lang === 'en' ? 'Can the games be played on mobile phones?' : 'Apakah game dapat dimainkan di HP?'}
              </strong>
              <span className="text-sm opacity-80 font-medium">
                {lang === 'en' 
                   ? 'Yes, all games are fully accessible and optimized for mobile phones, tablets, laptops, Interactive Flat Panels (IFP), and Smartboards.' 
                   : 'Ya, semua game dapat diakses dan dimainkan dengan optimal melalui HP, tablet, laptop, hingga Interactive Flat Panel (IFP) dan Smartboard.'}
              </span>
            </li>
            <li>
              <strong className="block text-sm font-black text-[#E45C63]">
                {lang === 'en' ? 'Are these games free to play?' : 'Apakah game ini gratis?'}
              </strong>
              <span className="text-sm opacity-80 font-medium">
                {lang === 'en' 
                   ? 'Yes, our entire collection of free educational games is 100% free for teachers and students to access without any subscription fees.' 
                   : 'Ya, seluruh koleksi game edukasi interaktif gratis kami 100% gratis untuk diakses oleh guru dan siswa tanpa perlu biaya berlangganan.'}
              </span>
            </li>
            <li>
              <strong className="block text-sm font-black text-[#E45C63]">
                {lang === 'en' ? 'Are these games suitable for Early Childhood (PAUD/TK) and Elementary students?' : 'Apakah cocok untuk anak usia dini (PAUD/TK) dan siswa SD?'}
              </strong>
              <span className="text-sm opacity-80 font-medium">
                {lang === 'en' 
                   ? 'Absolutely! We offer a dedicated JUNIOR Mode specifically for Early Childhood activities, as well as a GENERAL mode featuring basic numeracy and literacy challenges for Elementary, Middle, and High School students.' 
                   : 'Sangat cocok! Kami menyediakan Mode JUNIOR khusus untuk aktivitas PAUD/TK, serta mode UMUM yang berisi materi numerasi dan literasi dasar untuk siswa SD, SMP, hingga SMA.'}
              </span>
            </li>
            <li>
              <strong className="block text-sm font-black text-[#E45C63]">
                {lang === 'en' ? 'What is the difference between GENERAL and JUNIOR mode?' : 'Apa perbedaan mode UMUM dan JUNIOR?'}
              </strong>
              <span className="text-sm opacity-80 font-medium">
                {lang === 'en' 
                  ? 'GENERAL mode features logic, literacy, and numeracy challenges for Elementary through High School levels. JUNIOR mode focuses on basic activities for Early Childhood education.' 
                  : 'Mode UMUM berisi tantangan logika, literasi, dan numerasi untuk tingkat SD hingga SMA. Mode JUNIOR difokuskan pada aktivitas dasar untuk anak usia dini (PAUD/TK).'}
              </span>
            </li>
          </ul>
        </article>
      </div>

      {/* FULL WIDTH BOTTOM ROW */}
      <article className="col-span-1 md:col-span-2 mt-4 pt-6 border-t border-[#0C1A69]/10">
        <h2 className="text-lg md:text-xl font-black mb-4 text-[#E45C63]">
          {lang === 'en' ? 'Interactive Learning Guides' : 'Panduan Pembelajaran Interaktif'}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/panduan/penggunaan-ifp-papan-interaktif-digital" onClick={(e) => { e.preventDefault(); navigateTo('guideIfp', '/panduan/penggunaan-ifp-papan-interaktif-digital'); }} className="flex-1 bg-white/50 p-5 rounded-2xl border border-white hover:bg-white transition-all shadow-sm hover:shadow-md group">
            <strong className="block text-sm font-black mb-1.5 group-hover:text-[#E45C63] transition-colors">
              {lang === 'en' ? 'IFP & Interactive Board Game Guide' : 'Panduan Game IFP & Papan Interaktif'}
            </strong>
            <span className="text-xs opacity-80 font-medium leading-relaxed block">
              {lang === 'en' ? 'How to maximize large touch screens for classroom ice breaking.' : 'Cara memaksimalkan layar sentuh besar untuk ice breaking kelas.'}
            </span>
          </a>
          <a href="/panduan/memilih-game-edukasi-anak" onClick={(e) => { e.preventDefault(); navigateTo('guideKids', '/panduan/memilih-game-edukasi-anak'); }} className="flex-1 bg-white/50 p-5 rounded-2xl border border-white hover:bg-white transition-all shadow-sm hover:shadow-md group">
            <strong className="block text-sm font-black mb-1.5 group-hover:text-[#E45C63] transition-colors">
              {lang === 'en' ? 'Guide to Choosing Children\'s Games' : 'Panduan Memilih Game Anak (PAUD/TK)'}
            </strong>
            <span className="text-xs opacity-80 font-medium leading-relaxed block">
              {lang === 'en' ? 'Tips on selecting educational games for early childhood.' : 'Tips memilih game edukasi sesuai usia golden age.'}
            </span>
          </a>
        </div>
      </article>

    </div>
  </section>
);

export default EduGameSEOContent;
