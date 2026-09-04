import fs from 'fs';
let code = fs.readFileSync('App.tsx', 'utf-8');

const mobileNav = `                <nav className="mt-8 pt-6 border-t border-[#0C1A69]/10 flex flex-wrap justify-center gap-3 text-[10px] font-black text-[#0C1A69]/60 uppercase tracking-widest w-full" aria-label="Kategori Game">
                  <a href="/game-edukasi-anak" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubKids', '/game-edukasi-anak'); }} className="hover:text-[#E45C63] transition-colors">Anak (PAUD)</a>
                  <span className="text-[#0C1A69]/30" aria-hidden="true">|</span>
                  <a href="/game-logika" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubLogic', '/game-logika'); }} className="hover:text-[#E45C63] transition-colors">Logika</a>
                  <span className="text-[#0C1A69]/30" aria-hidden="true">|</span>
                  <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="hover:text-[#E45C63] transition-colors">IFP/Kelas</a>
                </nav>
                <nav className="mt-4 flex flex-wrap justify-center gap-3 text-[10px] font-black text-[#0C1A69]/60 uppercase tracking-widest w-full" aria-label="Menu Tambahan Mobile">
                  <a href="/about" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('about', '/about'); }} className="hover:text-[#E45C63] transition-colors">Tentang</a>
                  <span className="text-[#0C1A69]/30" aria-hidden="true">|</span>
                  <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('privacy', '/privacy-policy'); }} className="hover:text-[#E45C63] transition-colors">Privasi</a>
                  <span className="text-[#0C1A69]/30" aria-hidden="true">|</span>
                  <a href="/contact" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('contact', '/contact'); }} className="hover:text-[#E45C63] transition-colors">Kontak</a>
                </nav>`;

code = code.replace(`                <nav className="mt-8 pt-6 border-t border-[#0C1A69]/10 flex flex-wrap justify-center gap-3 text-[10px] font-black text-[#0C1A69]/60 uppercase tracking-widest w-full" aria-label="Menu Tambahan Mobile">
                  <a href="/about" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('about', '/about'); }} className="hover:text-[#E45C63] transition-colors">Tentang</a>
                  <span className="text-[#0C1A69]/30" aria-hidden="true">|</span>
                  <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('privacy', '/privacy-policy'); }} className="hover:text-[#E45C63] transition-colors">Privasi</a>
                  <span className="text-[#0C1A69]/30" aria-hidden="true">|</span>
                  <a href="/contact" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('contact', '/contact'); }} className="hover:text-[#E45C63] transition-colors">Kontak</a>
                </nav>`, mobileNav);

fs.writeFileSync('App.tsx', code);
