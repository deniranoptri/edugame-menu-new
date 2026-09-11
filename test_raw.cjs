const http = require('https');

http.get('https://papaninteraktif.com/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    console.log("=== RAW HTML / ===");
    console.log("hreflang matches:", data.match(/hreflang/gi) || "NONE");
    console.log("html lang matches:", data.match(/<html[^>]*>/gi));
  });
}).on("error", (err) => { console.log("Error: " + err.message); });

http.get('https://papaninteraktif.com/en/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    console.log("=== RAW HTML /en/ ===");
    console.log("hreflang matches:", data.match(/hreflang/gi) || "NONE");
    console.log("html lang matches:", data.match(/<html[^>]*>/gi));
  });
}).on("error", (err) => { console.log("Error: " + err.message); });
