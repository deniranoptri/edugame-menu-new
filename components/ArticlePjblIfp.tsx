import React, { useEffect } from 'react';

interface ArticlePjblIfpProps {
  onBack: () => void;
  navigateTo: (view: any, path: string) => void;
}

const ArticlePjblIfp: React.FC<ArticlePjblIfpProps> = ({ onBack, navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pembelajaran Berbasis Proyek (PjBL) Menggunakan IFP | Jurnal Guru";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panduan komprehensif menerapkan model Pembelajaran Berbasis Proyek (PjBL) menggunakan Interactive Flat Panel (IFP) untuk meningkatkan kolaborasi dan pemecahan masalah."
      );
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp');

    const idUrl = 'https://papaninteraktif.com/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp';
    const enUrl = 'https://papaninteraktif.com/en/journal/project-based-learning-using-interactive-flat-panel';

    let hrefLangId = document.querySelector('link[hreflang="id"]');
    if (!hrefLangId) {
      hrefLangId = document.createElement('link');
      hrefLangId.setAttribute('rel', 'alternate');
      hrefLangId.setAttribute('hreflang', 'id');
      document.head.appendChild(hrefLangId);
    }
    hrefLangId.setAttribute('href', idUrl);

    let hrefLangEn = document.querySelector('link[hreflang="en"]');
    if (!hrefLangEn) {
      hrefLangEn = document.createElement('link');
      hrefLangEn.setAttribute('rel', 'alternate');
      hrefLangEn.setAttribute('hreflang', 'en');
      document.head.appendChild(hrefLangEn);
    }
    hrefLangEn.setAttribute('href', enUrl);

    let hrefLangDef = document.querySelector('link[hreflang="x-default"]');
    if (!hrefLangDef) {
      hrefLangDef = document.createElement('link');
      hrefLangDef.setAttribute('rel', 'alternate');
      hrefLangDef.setAttribute('hreflang', 'x-default');
      document.head.appendChild(hrefLangDef);
    }
    hrefLangDef.setAttribute('href', idUrl);


    // Structured Data for Article
    const scriptId = 'article-pjbl-ifp-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pembelajaran Berbasis Proyek (PjBL) Menggunakan IFP di Kelas",
          "description": "Panduan komprehensif menerapkan model Pembelajaran Berbasis Proyek (PjBL) menggunakan Interactive Flat Panel (IFP) untuk meningkatkan kolaborasi dan pemecahan masalah.",
          "author": {
            "@type": "Person",
            "name": "Deni Ranoptri, M.Pd"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Papan Interaktif",
            "logo": {
              "@type": "ImageObject",
              "url": window.location.origin + "/icon.svg"
            }
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Beranda",
              "item": window.location.origin + "/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Jurnal Guru",
              "item": window.location.origin + "/jurnal-guru"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Pembelajaran Berbasis Proyek IFP",
              "item": window.location.origin + "/jurnal-guru/pembelajaran-berbasis-proyek-menggunakan-ifp"
            }
          ]
        }
      ]);
      document.head.appendChild(script);
    }

    return () => {
      document.title = 'Game Edukasi & Media Pembelajaran Interaktif | Papan Interaktif';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Papan Interaktif menyediakan game edukasi dan media pembelajaran interaktif untuk anak, siswa, dan guru.');
      }
      if (existingScript) existingScript.remove();
      const addedScript = document.getElementById(scriptId);
      if (addedScript) addedScript.remove();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#F8FAFC] overflow-y-auto w-full h-[100dvh]">
      <div className="min-h-full flex flex-col items-center py-6 md:py-10 px-4 md:px-8">
        
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl border border-[#0C1A69]/10 p-6 md:p-12 relative my-auto">
          
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold text-gray-500">
              <li>
                <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('home', '/'); }} className="hover:text-blue-600 transition-colors">Beranda</a>
              </li>
              <li><span aria-hidden="true" className="opacity-50 mx-1">/</span></li>
              <li>
                <a href="/jurnal-guru" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-blue-600 transition-colors">Jurnal Guru</a>
              </li>
              <li><span aria-hidden="true" className="opacity-50 mx-1">/</span></li>
              <li aria-current="page" className="text-[#0C1A69]">Pembelajaran Berbasis Proyek IFP</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b-2 border-gray-100 pb-6">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-[#0C1A69] font-black hover:text-blue-600 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl text-sm shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              KEMBALI KE JURNAL GURU
            </button>
          </div>

          <article className="prose prose-lg md:prose-xl max-w-none text-gray-700">
            <header className="mb-10">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Model Pembelajaran</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0C1A69] mt-6 mb-4 leading-tight">
                Pembelajaran Berbasis Proyek (PjBL) Menggunakan IFP di Kelas
              </h1>
              <p className="text-sm font-bold text-gray-500">Oleh: Deni Ranoptri, M.Pd</p>
            </header>
            
            <div className="animate-fadeIn space-y-6 text-justify">
              <p className="text-xl text-gray-600 font-semibold mb-8 leading-relaxed italic border-l-4 border-indigo-500 pl-4">
                "Dalam Pembelajaran Berbasis Proyek, IFP bukan sekadar layar untuk presentasi akhir, melainkan pusat kendali (command center) tempat ide siswa dilahirkan, diuji, dan disempurnakan."
              </p>

              <p>
                Pembelajaran Berbasis Proyek (<em>Project-Based Learning</em> / PjBL) adalah salah satu model andalan dalam Kurikulum Merdeka. Esensinya adalah memberikan otonomi kepada siswa untuk memecahkan masalah dunia nyata melalui investigasi yang mendalam. Ketika <strong>pembelajaran berbasis proyek menggunakan IFP</strong> (Interactive Flat Panel) diterapkan, dinamika kelas berubah drastis: IFP bertransformasi dari sekadar alat penayang materi menjadi kanvas kolaborasi tanpa batas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">1. Apa Itu PjBL Menggunakan IFP?</h2>
              <p>
                PjBL menuntut siswa untuk bekerja dalam tim, meriset, merancang solusi, dan mempresentasikan hasil. Pengintegrasian IFP ke dalam siklus ini berarti menggunakan teknologi layar sentuh interaktif pada setiap fase proyek—mulai dari <em>brainstorming</em> ide di hari pertama, hingga ekshibisi karya di hari terakhir. IFP memfasilitasi visualisasi data yang kompleks, yang sangat krusial dalam pemecahan masalah.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">2. Mengapa Menggunakan IFP untuk Proyek Siswa?</h2>
              <p>
                Proyek yang kompleks sering kali menghasilkan data, ide, dan referensi yang berserakan. Jika hanya mengandalkan kertas karton atau papan tulis konvensional, jejak pemikiran siswa (<em>trail of thoughts</em>) mudah hilang atau terhapus. Dengan <a href="/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleIfpMedia', '/jurnal-guru/memaksimalkan-ifp-sebagai-media-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">memaksimalkan IFP sebagai media pembelajaran</a>, seluruh proses—dari <em>mind map</em> awal hingga prototipe digital—dapat disimpan, diakses kembali (<em>recall</em>), dan direvisi pada pertemuan berikutnya. 
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">3. Fase 1: Penentuan Pertanyaan Mendasar (Start with the Essential Question)</h2>
              <p>
                Proyek selalu dimulai dengan masalah. Guru dapat menampilkan fenomena dunia nyata—seperti video tumpukan sampah plastik di laut atau grafik peningkatan suhu bumi—langsung di layar 4K IFP. Kualitas visual yang tinggi akan memicu empati dan rasa ingin tahu.
              </p>
              <p>
                Setelah itu, gunakan fitur papan tulis (<em>whiteboard</em>) IFP untuk menampung pertanyaan-pertanyaan pemantik dari siswa. Karena layar IFP sangat luas, guru dapat membiarkan beberapa siswa maju secara bersamaan untuk menuliskan rasa penasaran mereka menggunakan jari atau <em>stylus</em>.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">4. Fase 2: Mendesain Perencanaan Proyek</h2>
              <p>
                Pada tahap ini, <a href="/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleCollaborativeIfp', '/jurnal-guru/pembelajaran-kolaboratif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran kolaboratif menggunakan IFP</a> benar-benar diuji. Siswa mulai merancang bagaimana mereka akan menyelesaikan masalah. 
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Mind Mapping Digital:</strong> Kelompok menyusun peta konsep proyek di IFP. Elemen dapat dengan mudah digeser (<em>drag-and-drop</em>), dihapus, atau diberi warna berbeda berdasarkan prioritas.</li>
                <li><strong>Pembagian Peran:</strong> Siswa membuat tabel <em>job description</em> di layar, lalu membubuhkan tanda tangan digital mereka sebagai simbol komitmen tim.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">5. Fase 3: Menyusun Jadwal (Create a Schedule)</h2>
              <p>
                Manajemen waktu adalah kelemahan umum siswa dalam PjBL. IFP menyediakan solusi melalui kalender interaktif atau bagan Gantt (<em>Gantt chart</em>) sederhana. Guru dan siswa dapat menyusun <em>timeline</em> proyek bersama-sama di layar. File ini kemudian disimpan dan dijadikan <em>wallpaper</em> atau selalu dibuka di awal jam pelajaran sebagai pengingat visual (<em>visual reminder</em>) mengenai tenggat waktu.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">6. Fase 4: Memantau Siswa dan Kemajuan Proyek</h2>
              <p>
                Alih-alih guru mendatangi setiap meja satu per satu secara pasif, siswa dapat memproyeksikan (<em>screen mirror</em>) progres dari <em>Chromebook</em> atau gawai mereka ke layar IFP. Ini memungkinkan guru melakukan <a href="/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleAssessmentIfp', '/jurnal-guru/asesmen-formatif-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">asesmen formatif secara real-time</a>. 
              </p>
              <p>
                Jika satu kelompok mengalami kebuntuan (<em>bottleneck</em>) yang spesifik, guru dapat membahas kode, desain, atau naskah kelompok tersebut di layar besar agar menjadi pelajaran (<em>teachable moment</em>) bagi kelompok lain.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">7. Fase 5: Menguji Hasil (Assess the Outcome)</h2>
              <p>
                Sebelum presentasi final, IFP digunakan untuk <em>peer-review</em> (tinjauan sejawat). Kelompok A menampilkan draf proyek mereka di IFP, sementara Kelompok B maju ke depan untuk memberikan anotasi (coretan) konstruktif secara langsung pada layar menggunakan tinta digital warna merah atau hijau. Proses umpan balik menjadi sangat visual dan transparan.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">8. Fase 6: Evaluasi Pengalaman (Evaluate the Experience)</h2>
              <p>
                PjBL tidak berakhir pada produk; ia berakhir pada refleksi. Sebagai penutup <a href="/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif" onClick={(e) => { e.preventDefault(); navigateTo('articleModuleIfp', '/jurnal-guru/modul-ajar-menggunakan-ifp-untuk-pembelajaran-interaktif'); }} className="text-blue-700 hover:underline font-bold">modul ajar proyek</a>, gunakan IFP sebagai "Papan Refleksi". Setiap siswa mengirimkan satu catatan digital (<em>sticky note</em>) dari gawainya ke IFP berisi satu hal baru yang mereka pelajari dan satu hal yang ingin mereka perbaiki di masa depan. Layar akan dipenuhi dengan wawasan kolektif kelas.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">9. Keuntungan IFP dalam PjBL</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sentralisasi Informasi:</strong> Semua referensi, <em>link</em>, gambar, dan draf kerja terkumpul di satu "kanvas" tanpa batas.</li>
                <li><strong>Interaktivitas Tinggi:</strong> Membangkitkan kinestetik siswa. Mereka tidak hanya duduk berdiskusi, tetapi berdiri, menunjuk, dan memanipulasi data di layar.</li>
                <li><strong>Menembus Batas Kelas:</strong> IFP yang terkoneksi internet memungkinkan siswa melakukan <em>video call</em> dengan narasumber ahli (misal: ilmuwan, sejarawan) langsung dari ruang kelas, memperkaya riset proyek mereka.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">10. Contoh Ide Proyek PjBL Berbasis IFP</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg my-4 text-sm text-gray-700">
                  <thead className="bg-indigo-50 border-b border-indigo-100">
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Mata Pelajaran</th>
                      <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Ide Proyek</th>
                      <th className="py-3 px-4 text-left font-bold text-[#0C1A69]">Penggunaan IFP Utama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4 font-semibold">IPS / Geografi</td>
                      <td className="py-3 px-4">Merancang tata kota yang ramah lingkungan.</td>
                      <td className="py-3 px-4">Siswa menggunakan aplikasi peta (Google Earth) di IFP, menggambar rute evakuasi atau area hijau langsung di atas citra satelit.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">IPA / Biologi</td>
                      <td className="py-3 px-4">Kampanye gizi seimbang untuk kantin sekolah.</td>
                      <td className="py-3 px-4">Memproyeksikan infografis kalori; melakukan anotasi (coretan visual) pada foto menu kantin untuk menganalisis kandungan gizinya.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Bahasa / Sastra</td>
                      <td className="py-3 px-4">Membuat pementasan naskah drama pendek.</td>
                      <td className="py-3 px-4">Menganalisis <em>storyboard</em> bersama; menggunakan IFP sebagai latar panggung digital (<em>backdrop</em> dinamis) saat pementasan berlangsung.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">11. Hubungan dengan Pembelajaran Mendalam</h2>
              <p>
                PjBL pada hakikatnya adalah kendaraan menuju <a href="/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas" onClick={(e) => { e.preventDefault(); navigateTo('articleDeepLearningIfp', '/jurnal-guru/pembelajaran-mendalam-menggunakan-ifp-di-kelas'); }} className="text-blue-700 hover:underline font-bold">pembelajaran mendalam (deep learning)</a>. Ketika siswa difasilitasi dengan IFP, mereka tidak lagi terkungkung oleh keterbatasan fisik alat tulis. Mereka dapat mencari data <em>real-time</em>, memanipulasi model 3D, dan menyajikan solusi yang jauh lebih komprehensif. IFP membantu mengubah ide abstrak menjadi representasi visual yang kuat.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">12. Tips Manajemen Kelas Selama Proyek</h2>
              <p>
                Dalam suasana PjBL, kelas akan menjadi lebih riuh dan dinamis. Tanpa <a href="/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp" onClick={(e) => { e.preventDefault(); navigateTo('articleClassroomManagementIfp', '/jurnal-guru/strategi-pengelolaan-kelas-menggunakan-ifp'); }} className="text-blue-700 hover:underline font-bold">strategi pengelolaan kelas</a> yang baik, IFP bisa menjadi sumber distraksi.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Timer Visual:</strong> Selalu tampilkan <em>countdown timer</em> raksasa di sudut IFP saat siswa bekerja dalam kelompok agar mereka sadar waktu.</li>
                <li><strong>Prosedur Giliran:</strong> Jika 3 kelompok ingin memproyeksikan perangkat mereka ke IFP, tetapkan urutan yang jelas agar tidak ada peretasan layar (<em>screen hijacking</em>) secara tidak sengaja.</li>
              </ul>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">13. IFP dan Pembelajaran Berdiferensiasi dalam Proyek</h2>
              <p>
                Tidak semua siswa harus menghasilkan jenis produk akhir yang sama (Diferensiasi Produk). IFP memfasilitasi hal ini. Kelompok yang mahir secara visual dapat menggunakan IFP untuk mendemonstrasikan prototipe digital interaktif. Sementara itu, kelompok yang lebih suka bercerita (verbal) dapat menggunakan fitur rekaman layar dan audio IFP untuk membuat video penjelasan bergaya <em>podcast</em> atau <em>vlog</em> pendidikan.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">14. Merayakan Hasil Karya (Exhibition)</h2>
              <p>
                Puncak dari PjBL adalah publikasi hasil. Gunakan IFP sebagai "Galeri Digital". Alih-alih mencetak laporan tebal yang menghabiskan kertas, ubah kelas menjadi ruang pameran. Layar IFP menampilkan presentasi multimedia yang kaya, interaktif, dan membanggakan. Hal ini memberikan apresiasi tertinggi atas jerih payah siswa, menumbuhkan rasa percaya diri, dan melatih kemampuan komunikasi publik mereka di era digital.
              </p>

              <h2 className="text-2xl font-black text-[#0C1A69] pt-4">15. Kesimpulan</h2>
              <p className="text-xl font-bold text-center text-indigo-800 bg-indigo-50 p-6 rounded-2xl border border-indigo-100 my-8 shadow-sm">
                "Teknologi terbaik adalah yang membuat siswa lupa bahwa mereka sedang menggunakan teknologi, karena mereka terlalu sibuk memecahkan masalah."
              </p>
              <p>
                <strong>Pembelajaran berbasis proyek menggunakan IFP</strong> bukanlah sekadar tren. Ini adalah evolusi pedagogis di mana guru memberikan tantangan, dan siswa menggunakan teknologi mutakhir untuk menaklukkannya. Dengan IFP sebagai pusat kendali, ide-ide siswa tidak lagi terjebak di dalam kepala mereka atau di atas secarik kertas; ide-ide itu hidup, bergerak, dan bersuara.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticlePjblIfp;
