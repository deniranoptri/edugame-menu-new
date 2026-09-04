import fs from 'fs';

let content = fs.readFileSync('components/HubIfp.tsx', 'utf-8');
content = content.replace(/<MenuCard\s+key=\{game\.id\}\s+config=\{game\}\s+onClick=\{[^}]+\}\s*\/>/g, '<MenuCard key={game.id} config={game} onClick={() => { window.history.pushState({}, "", (locale === "en" ? "/en/game/" : "/game/") + game.id); navigateTo("gameDetail", (locale === "en" ? "/en/game/" : "/game/") + game.id); }} locale={locale} />');
fs.writeFileSync('components/HubIfp.tsx', content);
