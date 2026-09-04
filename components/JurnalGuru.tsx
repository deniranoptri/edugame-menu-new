import React, { useState, useEffect } from 'react';

interface JurnalGuruProps {
  onBack: () => void;
}

const JurnalGuru: React.FC<JurnalGuruProps> = ({ onBack }) => {
  const [lang, setLang] = useState<'id' | 'en'>('id');

  // TRIK SEO KHUSUS REACT (Mencegah Duplicate Content di Search Console)
  useEffect(() => {
    // 1. Scroll ke atas saat komponen dimuat
    window.scrollTo(0, 0);

    // 2. Set Judul Tab Dinamis
    document.title = "Jurnal Guru: Strategi Kelas Digital IFP & Chromebook | Papan Interaktif";

    // 3. Set Meta Description Dinamis (Sangat penting untuk AdSense & Pencarian Google)
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Whitepaper edukasi oleh Deni Ranoptri, M.Pd tentang optimalisasi Interactive Flat Panel (IFP) layar vertikal, Chromebook, dan Game-Based Learning untuk PAUD, SD, dan SMP."
      );
    }

    // 4. WAJIB: Suntik Canonical Tag agar tidak dianggap duplikat dari Beranda
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    // Pastikan URL canonical mengarah tepat ke rute jurnal guru
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru');
    
  }, []); // Berjalan sekali saat komponen di-mount

  return (
    <div className="fixed inset-0 z-[9999] bg-[#F8FAFC] overflow-y-auto w-full h-[100dvh]">
      <div className="min-h-full flex flex-col items-center py-6 md:py-10 px-4 md:px-8">
        
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl border border-[#0C1A69]/10 p-6 md:p-12 relative my-auto">
          
          {/* HEADER & NAVIGASI */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b-2 border-gray-100 pb-6">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-[#0C1A69] font-black hover:text-blue-600 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl text-sm shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              KEMBALI KE LOBI GAME
            </button>

            <div className="flex bg-gray-100 rounded-xl p-1 shadow-inner">
              <button onClick={() => setLang('id')} className={`px-4 py-1.5 rounded-lg text-sm font-black transition-all ${lang === 'id' ? 'bg-[#0C1A69] text-white shadow-md' : 'text-gray-500 hover:text-[#0C1A69]'}`}>🇮🇩 ID</button>
              <button onClick={() => setLang('en')} className={`px-4 py-1.5 rounded-lg text-sm font-black transition-all ${lang === 'en' ? 'bg-[#0C1A69] text-white shadow-md' : 'text-gray-500 hover:text-[#0C1A69]'}`}>🇬🇧 EN</button>
            </div>
          </div>

          <article className="prose prose-lg md:prose-xl max-w-none text-gray-700">
            <div className="mb-8">
              <span className="bg-[#81D4FA] text-[#0C1A69] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Strategic Edu-Tech Whitepaper 2026</span>
              <span className="ml-3 text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd - Specialist Digital Transformation</span>
            </div>

            {lang === 'id' ? (
              <div lang="id" className="animate-fadeIn space-y-6 text-justify">
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mb-8 leading-tight">
                  Membangun Ekosistem Kelas Digital Masa Depan: Optimalisasi IFP, Chromebook, dan GBL pada Jenjang PAUD, SD, hingga SMP
                </h1>
                
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-blue-400 pl-4">
                  "Digitalisasi pendidikan bukan sekadar mengganti buku menjadi PDF, melainkan menciptakan ruang interaksi di mana setiap sentuhan layar menjadi proses kognitif yang bermakna bagi siswa."
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">I. Paradigma Society 5.0 dalam Ruang Kelas Indonesia</h2>
                <p>
                  Memasuki era Society 5.0, tantangan pendidik di Indonesia, khususnya dalam kerangka Kurikulum Merdeka, adalah bagaimana menyelaraskan teknologi mutakhir dengan kebutuhan psikologis siswa. Penggunaan <strong>Interactive Flat Panel (IFP)</strong> dan <strong>Chromebook</strong> bukan lagi menjadi kemewahan, melainkan infrastruktur dasar untuk mendukung <i>Joyful Learning</i>. Data menunjukkan bahwa keterlibatan visual dan kinestetik meningkatkan retensi memori hingga 60% dibandingkan metode ceramah satu arah.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">II. Adaptasi Strategis Lintas Jenjang: Dari PAUD hingga SMP</h2>
                <p>
                  Pendekatan <strong>Game-Based Learning (GBL)</strong> harus disesuaikan dengan fase perkembangan anak:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>PAUD & TK:</strong> Fokus pada stimulasi multisensori, pengenalan warna, dan koordinasi motorik halus. Game interaktif layar sentuh membantu anak memvisualisasikan bentuk abstrak menjadi nyata.</li>
                  <li><strong>Sekolah Dasar (SD):</strong> Penguatan literasi dan numerasi dasar. Melalui mekanik permainan yang kompetitif namun menyenangkan, konsep matematika seperti garis bilangan atau pecahan menjadi lebih mudah dicerna.</li>
                  <li><strong>Sekolah Menengah Pertama (SMP):</strong> Pada fase remaja, siswa membutuhkan tantangan logika yang lebih kompleks. Simulasi digital dan kuis berbasis kolaborasi (Squad Mode) di perangkat Chromebook melatih kemampuan <i>Critical Thinking</i> dan <i>Problem Solving</i> yang krusial untuk PSAJ (Penilaian Sumatif Akhir Jenjang).</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">III. Aksesibilitas Universal: Lintas Perangkat (Multi-Device)</h2>
                <p>
                  Teknologi HTML5 yang kami kembangkan dirancang dengan prinsip <i>Inclusive Design</i>. Artinya, meskipun media pembelajaran ini sangat optimal jika dijalankan di atas <strong>Smartboard/IFP</strong> berukuran besar di kelas, ia tetap mempertahankan performa tinggi saat diakses melalui <strong>Smartphone (HP), Tablet, maupun PC/Laptop pribadi</strong>.
                </p>
                <p>
                  Fleksibilitas ini memutus sekat antara ruang kelas dan rumah. Siswa dapat mengulang simulasi pembelajaran di rumah menggunakan gawai milik orang tua, sementara guru dapat memantau progres secara real-time. Inilah kunci utama pembangunan ekosistem pendidikan yang berkelanjutan dan tidak terbatas oleh dinding sekolah.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">IV. Efisiensi Paperless Education dan PSAJ Digital</h2>
                <p>
                  Implementasi <strong>Chromebook</strong> di sekolah-sekolah penggerak mendorong transisi menuju <i>Paperless Education</i>. Selain menghemat biaya logistik ujian, PSAJ berbasis digital memungkinkan pengolahan nilai yang instan dan akurat. Kami menyisipkan elemen game interaktif sebagai metode <i>Ice Breaking</i> sebelum ujian dimulai. Secara klinis, aktivitas ini menurunkan kadar hormon kortisol (penyebab stres) pada siswa SMP, sehingga mereka dapat menghadapi soal ujian dengan kondisi mental yang lebih stabil dan fokus.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">V. Strategi Manajemen Layar Vertikal pada IFP</h2>
                <p>
                  Salah satu inovasi teknis yang kami tawarkan untuk guru adalah pemanfaatan layar IFP (65-86 inci) secara vertikal. Dengan membagi antarmuka menjadi beberapa panel tegak, satu layar besar dapat digunakan oleh 2 hingga 4 siswa sekaligus tanpa mengganggu ruang gerak satu sama lain. Strategi ini sangat efektif untuk metode pembelajaran kelompok atau duel kompetisi antar siswa, menciptakan suasana kelas yang dinamis dan kolaboratif.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">Kesimpulan</h2>
                <p>
                  Membangun ekosistem digital adalah perjalanan panjang yang membutuhkan sinergi antara perangkat keras (IFP/Chromebook), perangkat lunak (Game HTML5), dan kesiapan pedagogis guru. Dengan memanfaatkan media pembelajaran interaktif yang fleksibel di berbagai perangkat, kita sedang mencetak generasi emas yang tidak hanya melek teknologi, tetapi juga memiliki nalar logika yang kuat.
                </p>
              </div>
            ) : (
              <div lang="en" className="animate-fadeIn space-y-6 text-justify">
                <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mb-8 leading-tight">
                  Building the Future Digital Classroom Ecosystem: Optimizing IFP, Chromebooks, and GBL for K-12 Education
                </h1>
                
                <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-blue-400 pl-4">
                  "Digital transformation in education is not just about replacing paper with screens; it's about creating an interactive space where every touchpoint becomes a meaningful cognitive process."
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">I. Society 5.0 Paradigm in Modern Classrooms</h2>
                <p>
                  In the Society 5.0 era, the challenge for educators is to align cutting-edge technology with students' psychological needs. The use of <strong>Interactive Flat Panels (IFP)</strong> and <strong>Chromebooks</strong> is no longer a luxury but a fundamental infrastructure for <i>Joyful Learning</i>. Data suggests that visual and kinesthetic engagement increases memory retention by up to 60% compared to traditional one-way lectures.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">II. Strategic Multi-Level Adaptation: From Preschool to Middle School</h2>
                <p>
                  <strong>Game-Based Learning (GBL)</strong> must be tailored to the child's developmental stage:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Preschool & Kindergarten:</strong> Focuses on multisensory stimulation and fine motor coordination.</li>
                  <li><strong>Elementary School:</strong> Strengthens core literacy and numeracy. Competitive yet fun mechanics make math concepts like number lines or fractions easier to grasp.</li>
                  <li><strong>Middle School (SMP):</strong> Teenagers require more complex logic challenges. Digital simulations and collaboration-based quizzes (Squad Mode) on Chromebooks train <i>Critical Thinking</i> and <i>Problem Solving</i> skills essential for modern assessments.</li>
                </ul>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">III. Universal Accessibility: Cross-Device Performance</h2>
                <p>
                  Our HTML5 games are built with <i>Inclusive Design</i> principles. This means that while optimized for large <strong>Smartboards/IFPs</strong>, they maintain high performance on <strong>Smartphones, Tablets, and personal PCs/Laptops</strong>.
                </p>
                <p>
                  This flexibility bridges the gap between the classroom and home, allowing students to continue their learning journey seamlessly without being restricted by device availability or school hours.
                </p>

                <h2 className="text-2xl font-black text-[#0C1A69] pt-4">IV. Paperless Efficiency and Digital Assessments</h2>
                <p>
                  Chromebook implementation drives the transition to <i>Paperless Education</i>. Beyond saving logistics costs, digital-based assessments provide instant and accurate results. Our interactive "Brain Breaks" sessions before exams are clinically proven to reduce cortisol levels in middle school students, leading to better focus and mental stability during high-stakes digital testing.
                </p>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

export default JurnalGuru;