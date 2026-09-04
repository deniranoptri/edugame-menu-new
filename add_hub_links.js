import fs from 'fs';
let code = fs.readFileSync('components/GameDetail.tsx', 'utf-8');

const replaceStr = `            <div className="flex flex-wrap gap-2 my-2">
              {game.audience?.includes('PAUD') && (
                <a href="/game-edukasi-anak" onClick={(e) => { e.preventDefault(); /* Need navigateTo but we only have onBack here. Use window.history */ window.history.pushState({}, '', '/game-edukasi-anak'); window.dispatchEvent(new Event('popstate')); }} className="px-3 py-1 bg-[#FFEBEE] text-[#B71C1C] text-xs font-black uppercase rounded-full tracking-wider hover:bg-[#ffcdd2] transition-colors cursor-pointer border-2 border-transparent hover:border-[#ef9a9a]">
                  Anak PAUD & TK
                </a>
              )}
              {game.tags?.includes('🧠 Logika') && (
                <a href="/game-logika" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/game-logika'); window.dispatchEvent(new Event('popstate')); }} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-black uppercase rounded-full tracking-wider hover:bg-indigo-200 transition-colors cursor-pointer border-2 border-transparent hover:border-indigo-300">
                  Logika
                </a>
              )}
              {(game.tags?.includes('🎯 Ice Breaking') || game.id === 'puzzle') && (
                <a href="/game-edukasi-ifp" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/game-edukasi-ifp'); window.dispatchEvent(new Event('popstate')); }} className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-black uppercase rounded-full tracking-wider hover:bg-teal-200 transition-colors cursor-pointer border-2 border-transparent hover:border-teal-300">
                  Game IFP / Kelas
                </a>
              )}
              {game.tags?.map(tag => {
                if (tag === '🧠 Logika' || tag === '🎯 Ice Breaking') return null; // Already handled
                return (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold uppercase rounded-full tracking-wider">
                    {tag}
                  </span>
                )
              })}
            </div>`;

code = code.replace(`            <div className="flex flex-wrap gap-2 my-2">
              {game.tags?.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase rounded-full tracking-wider">
                  {tag}
                </span>
              ))}
            </div>`, replaceStr);

fs.writeFileSync('components/GameDetail.tsx', code);
