import fs from 'fs';
let code = fs.readFileSync('App.tsx', 'utf-8');

const desktopNav = `              <nav className="mt-8 pt-4 border-t border-[#0C1A69]/10 flex flex-col gap-2 text-[10px] font-black text-[#0C1A69]/60 uppercase tracking-widest" aria-label="Menu Utama">
                <a href="/game-edukasi-anak" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubKids', '/game-edukasi-anak'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Game Anak (PAUD/TK)</a>
                <a href="/game-logika" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubLogic', '/game-logika'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Game Logika</a>
                <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('hubIfp', '/game-edukasi-ifp'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Game IFP/Kelas</a>
                <div className="h-2"></div>
                <a href="/about" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('about', '/about'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Tentang Kami</a>
                <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('privacy', '/privacy-policy'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Kebijakan Privasi</a>
                <a href="/contact" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('contact', '/contact'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Hubungi Kami</a>
              </nav>`;

code = code.replace(`              <nav className="mt-8 pt-4 border-t border-[#0C1A69]/10 flex flex-col gap-2 text-[10px] font-black text-[#0C1A69]/60 uppercase tracking-widest" aria-label="Menu Utama">
                <a href="/about" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('about', '/about'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Tentang Kami</a>
                <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('privacy', '/privacy-policy'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Kebijakan Privasi</a>
                <a href="/contact" onClick={(e) => { e.preventDefault(); playSound('pop'); navigateTo('contact', '/contact'); }} className="hover:text-[#E45C63] transition-colors w-fit text-left">Hubungi Kami</a>
              </nav>`, desktopNav);

fs.writeFileSync('App.tsx', code);
