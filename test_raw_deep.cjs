const http = require('https');

http.get('https://papaninteraktif.com/game-edukasi-ifp', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    console.log("=== RAW HTML /game-edukasi-ifp ===");
    console.log("hreflang matches:", data.match(/hreflang/gi) || "NONE");
    console.log("html lang matches:", data.match(/<html[^>]*>/gi));
  });
});

http.get('https://papaninteraktif.com/en/educational-games-for-interactive-flat-panels', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    console.log("=== RAW HTML /en/educational-games-for-interactive-flat-panels ===");
    console.log("hreflang matches:", data.match(/hreflang/gi) || "NONE");
    console.log("html lang matches:", data.match(/<html[^>]*>/gi));
  });
});
