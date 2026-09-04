import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  // 1. DYNAMIC META TAGS & CANONICAL (Trik SEO Akurat untuk React)
  useEffect(() => {
    // 1. Mengubah judul tab browser
    document.title = "Kebijakan Privasi | Privacy Policy - Papan Interaktif";
    
    // 2. Mengubah atau membuat meta description secara dinamis
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Dokumen Kebijakan Privasi Papan Interaktif menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pengunjung situs web dan platform game edukasi anak kami."
      );
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', "Dokumen Kebijakan Privasi Papan Interaktif menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pengunjung situs web dan platform game edukasi anak kami.");
      document.head.appendChild(metaDescription);
    }

    // 3. WAJIB: Menyuntikkan Tag Canonical statis agar bebas error "Duplicate"
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    // Tembak URL absolut langsung agar bot Google tidak salah paham
    canonical.setAttribute('href', 'https://papaninteraktif.com/privacy-policy');
  }, []);

  return (
    <div className="min-h-screen bg-[#DDEBF8] text-[#0C1A69] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* 2. SEMANTIC HTML: Menggunakan <main> untuk aksesibilitas bot */}
      <main className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-white/50">
        
        <h1 className="text-3xl md:text-4xl font-black mb-2 text-center">Kebijakan Privasi</h1>
        <p className="text-center text-[#0C1A69]/60 font-bold tracking-widest text-xs uppercase mb-8 pb-6 border-b-2 border-[#0C1A69]/10">
          Papan Interaktif
        </p>
        
        <div className="space-y-6 text-sm md:text-base leading-relaxed opacity-90 text-left">
          <p>
            Di Papan Interaktif (dapat diakses dari https://papaninteraktif.com), salah satu prioritas utama kami adalah privasi pengunjung kami. Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Papan Interaktif dan bagaimana kami menggunakannya.
          </p>
          <p>
            Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami melalui halaman kontak yang tersedia.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3 text-[#E45C63]">1. File Log (Log Files)</h2>
          <p>
            Papan Interaktif mengikuti prosedur standar menggunakan file log. File-file ini mencatat pengunjung ketika mereka mengunjungi situs web. Semua perusahaan hosting melakukan ini sebagai bagian dari analitik layanan hosting. Informasi yang dikumpulkan oleh file log termasuk alamat protokol internet (IP), jenis browser, Penyedia Layanan Internet (ISP), tanggal dan waktu, halaman rujukan/keluar, dan mungkin jumlah klik. Ini tidak terkait dengan informasi apa pun yang dapat diidentifikasi secara pribadi. Tujuannya adalah untuk menganalisis tren, mengelola situs, melacak pergerakan pengguna di situs web, dan mengumpulkan informasi demografis.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3 text-[#E45C63]">2. Cookies dan Web Beacons</h2>
          <p>
            Seperti situs web lainnya, Papan Interaktif menggunakan 'cookies'. Cookie ini digunakan untuk menyimpan informasi termasuk preferensi pengunjung, dan halaman-halaman di situs web yang diakses atau dikunjungi pengunjung. Informasi tersebut digunakan untuk mengoptimalkan pengalaman pengguna dengan menyesuaikan konten halaman web kami berdasarkan jenis browser pengunjung dan/atau informasi lainnya.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3 text-[#E45C63]">3. Google DoubleClick DART Cookie</h2>
          <p>
            Google adalah salah satu vendor pihak ketiga di situs kami. Google juga menggunakan cookie, yang dikenal sebagai cookie DART, untuk menayangkan iklan kepada pengunjung situs kami berdasarkan kunjungan mereka ke situs kami dan situs lain di internet. Namun, pengunjung dapat memilih untuk menolak penggunaan cookie DART dengan mengunjungi Kebijakan Privasi jaringan iklan dan konten Google di URL berikut: <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline font-bold" target="_blank" rel="noreferrer">https://policies.google.com/technologies/ads</a>
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3 text-[#E45C63]">4. Mitra Iklan Kami (Third Party Advertising)</h2>
          <p>
            Beberapa pemasang iklan di situs kami mungkin menggunakan cookie dan web beacon. Mitra periklanan kami tercantum di bawah ini. Setiap mitra periklanan kami memiliki Kebijakan Privasi mereka sendiri untuk kebijakan mereka tentang data pengguna. Kami tidak memiliki akses atau kontrol atas cookie yang digunakan oleh pengiklan pihak ketiga tersebut.
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <strong>Google AdSense:</strong> <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline break-all" target="_blank" rel="noreferrer">https://policies.google.com/technologies/ads</a>
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-3 text-[#E45C63]">5. Informasi Anak (COPPA Compliance)</h2>
          <p>
            Bagian lain dari prioritas kami adalah menambahkan perlindungan untuk anak-anak saat menggunakan internet. Kami mendorong orang tua dan wali untuk mengamati, berpartisipasi, dan/atau memantau serta membimbing aktivitas online mereka.
          </p>
          <p>
            Papan Interaktif tidak secara sadar mengumpulkan Informasi Identifikasi Pribadi apa pun dari anak-anak di bawah usia 13 tahun. Jika Anda merasa bahwa anak Anda memberikan informasi semacam ini di situs web kami, kami sangat menganjurkan Anda untuk segera menghubungi kami dan kami akan melakukan upaya terbaik kami untuk segera menghapus informasi tersebut dari catatan kami.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3 text-[#E45C63]">6. Persetujuan</h2>
          <p>
            Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui Syarat dan Ketentuannya.
          </p>
        </div>

        {/* 3. NAVIGATION & INTERNAL LINKING FOOTER */}
        <div className="mt-12 flex flex-col items-center border-t-2 border-[#0C1A69]/10 pt-8 gap-4">
          <a 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0C1A69] text-white font-black uppercase tracking-wider rounded-xl shadow-[0_10px_20px_-10px_rgba(12,26,105,0.5)] hover:scale-105 active:scale-95 transition-all no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Kembali ke Permainan
          </a>

          {/* Penguat Jaringan Crawling Bot AdSense */}
          <div className="flex gap-4 text-xs font-bold text-[#0C1A69]/60 uppercase tracking-wide mt-2">
            <a href="/about" className="hover:text-[#E45C63] transition-colors">About Us</a>
            <span>|</span>
            <a href="/contact" className="hover:text-[#E45C63] transition-colors">Contact Us</a>
          </div>
        </div>

      </main>
    </div>
  );
};

export default PrivacyPolicy;