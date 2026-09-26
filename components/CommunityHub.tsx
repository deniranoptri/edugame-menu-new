import React, { useState, useEffect, useRef, useCallback } from 'react';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbwhu2LqmjuF9lTXZjigxxCwiBxAWEzUnKhoV04I_yD4eupl25Uv7mKns5OgG8musvmD/exec'; 

interface Comment {
  nama: string;
  komentar: string;
  waktu: string;
}

const CommunityHub: React.FC = () => {
  const [liveData, setLiveData] = useState({ count: 50, regions: ['Kalimantan Selatan'] });
  const [comments, setComments] = useState<Comment[]>([]);
  const [nama, setNama] = useState('');
  const [komentar, setKomentar] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'error' | 'warning'; message: string } | null>(null);

  // Synchronization refs to prevent overlapping requests and race conditions
  const isFetchingRef = useRef(false);
  const latestRequestIdRef = useRef(0);
  const commentsRef = useRef<Comment[]>([]);
  commentsRef.current = comments;

  const performSafeFetch = useCallback(async (isInitial = false) => {
    // Rule: Hanya satu request GET boleh aktif pada satu waktu
    if (isFetchingRef.current) return;
    isFetchingRef.current = true;

    // Loading indicator hanya untuk initial load jika comments belum ada
    if (isInitial && commentsRef.current.length === 0) {
      setIsLoading(true);
      setError(false);
    }

    const requestId = ++latestRequestIdRef.current;

    try {
      const response = await fetch(`${GAS_URL}?t=${Date.now()}`);
      const data = await response.json();

      // Rule: Response lama tidak boleh menimpa state yang lebih baru
      if (requestId === latestRequestIdRef.current) {
        if (data.status === 'success' && Array.isArray(data.comments)) {
          if (data.live) {
            setLiveData(data.live);
          }
          setComments(data.comments);
          setError(false);
        }
      }
    } catch {
      // Rule: Jangan pernah mengganti comments menjadi [] akibat GET gagal.
      // Hanya tampilkan error state jika comments sama sekali belum pernah termuat.
      if (requestId === latestRequestIdRef.current && commentsRef.current.length === 0) {
        setError(true);
      }
    } finally {
      isFetchingRef.current = false;
      if (requestId === latestRequestIdRef.current && isInitial) {
        setIsLoading(false);
      }
    }
  }, []);

  // Polling 15 detik aman dengan cleanup tepat
  useEffect(() => {
    performSafeFetch(true);

    const interval = setInterval(() => {
      performSafeFetch(false);
    }, 15000);

    return () => {
      clearInterval(interval);
      // Cancel any future state updates from pending requests
      latestRequestIdRef.current++;
    };
  }, [performSafeFetch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedNama = nama.trim();
    const trimmedKomentar = komentar.trim();

    if (!trimmedNama || !trimmedKomentar || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitFeedback(null);

    try {
      // 1. Kirim POST (mode: no-cors)
      await fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nama: trimmedNama, komentar: trimmedKomentar }),
      });

      // 2. Controlled Refresh GET: pastikan data benar-benar sudah masuk Google Sheet
      // Polling berjenjang hingga 3 kali tanpa blind setTimeout tunggal
      let verifiedInSheet = false;
      const delays = [1200, 2000, 2500];

      for (const delay of delays) {
        await new Promise((r) => setTimeout(r, delay));

        try {
          const reqId = ++latestRequestIdRef.current;
          const res = await fetch(`${GAS_URL}?t=${Date.now()}`);
          const result = await res.json();

          if (result.status === 'success' && Array.isArray(result.comments)) {
            if (reqId === latestRequestIdRef.current) {
              if (result.live) setLiveData(result.live);
              setComments(result.comments);
              setError(false);
            }

            const found = result.comments.some(
              (c: Comment) => c.nama.trim() === trimmedNama && c.komentar.trim() === trimmedKomentar
            );

            if (found) {
              verifiedInSheet = true;
              break;
            }
          }
        } catch {
          // Lanjut ke percobaan berikutnya bila terjadi network blip sementara
        }
      }

      if (verifiedInSheet) {
        // Komentar berhasil terverifikasi masuk -> baru form dikosongkan
        setNama('');
        setKomentar('');
        setSubmitFeedback(null);
      } else {
        // Jika belum terkonfirmasi dalam 3 kali probe -> form dipertahankan
        setSubmitFeedback({
          type: 'warning',
          message: 'Pesan telah terkirim ke server namun sedang dalam antrean Google Sheet. Formulir tetap dipertahankan.',
        });
      }
    } catch {
      // Jika POST gagal -> form dipertahankan dan error ditampilkan
      setSubmitFeedback({
        type: 'error',
        message: 'Gagal terhubung ke server sapaan. Silakan periksa koneksi dan coba lagi.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-4 gap-4 px-2">
      
      {/* 1. LIVE TICKER - LEBIH TIPIS & CLEAN */}
      <div className="flex items-center gap-2 px-4 py-1.5 bg-green-50/50 border border-green-200/50 rounded-full transition-all">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <p className="text-[10px] md:text-xs font-bold text-green-700 uppercase tracking-wider">
          LIVE: {liveData.count} Aktif ({liveData.regions.join(', ')})
        </p>
      </div>

      {/* 2. KOLOM KOMENTAR - DESAIN RAMPING */}
      <div className="w-full bg-white/40 border border-white/60 rounded-[2rem] p-5 md:p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black text-[#0C1A69]">💬 Ruang Sapa Guru</h2>
            <span className="text-[9px] font-black text-[#0C1A69]/40 uppercase tracking-widest">Community Hub</span>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <input 
            type="text" 
            placeholder="Nama Bapak/Ibu..." 
            className="md:col-span-1 px-4 py-2 rounded-xl border border-[#0C1A69]/10 bg-white/80 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#0C1A69]/20"
            value={nama} onChange={(e) => setNama(e.target.value)} required 
          />
          <input 
            type="text"
            placeholder="Tulis pesan sapaan di sini..." 
            className="md:col-span-1 px-4 py-2 rounded-xl border border-[#0C1A69]/10 bg-white/80 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#0C1A69]/20"
            value={komentar} onChange={(e) => setKomentar(e.target.value)} required 
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="md:col-span-1 bg-[#0C1A69] text-white px-4 py-2 rounded-xl font-black text-xs shadow-md hover:bg-blue-800 transition-all disabled:opacity-50"
          >
            {isSubmitting ? 'MENGIRIM...' : '🚀 KIRIM SAPAAN'}
          </button>
        </form>

        {submitFeedback && (
          <div className={`mb-4 px-4 py-2 rounded-xl text-xs font-semibold ${
            submitFeedback.type === 'error'
              ? 'bg-rose-50 border border-rose-200 text-rose-700'
              : 'bg-amber-50 border border-amber-200 text-amber-700'
          }`}>
            {submitFeedback.message}
          </div>
        )}

        <div className="flex flex-col gap-3 max-h-[250px] overflow-y-auto pr-1 custom-scrollbar">
          {isLoading && comments.length === 0 ? (
            <p className="text-center text-[10px] font-black text-gray-400 animate-pulse">MEMUAT DISKUSI...</p>
          ) : error && comments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 text-center gap-2">
              <p className="text-xs font-bold text-gray-500">Komunitas sementara belum dapat dimuat.</p>
              <p className="text-[10px] font-medium text-gray-400 mb-2">Periksa koneksi internet dan coba lagi.</p>
              <button 
                onClick={(e) => { e.preventDefault(); performSafeFetch(true); }}
                className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full text-[10px] font-black uppercase tracking-wider transition-colors"
              >
                Coba Lagi
              </button>
            </div>
          ) : comments.length === 0 ? (
            <p className="text-center text-gray-400 text-xs py-4">Belum ada diskusi hari ini.</p>
          ) : (
            comments.map((c, idx) => (
              <div key={idx} className="bg-white/60 p-3 rounded-xl border border-white/80">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-black text-[#0C1A69] text-xs">{c.nama}</span>
                  <span className="text-[9px] text-gray-400 font-bold">{c.waktu}</span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed font-medium">{c.komentar}</p>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
};

export default CommunityHub;