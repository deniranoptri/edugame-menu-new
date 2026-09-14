const fs = require('fs');
const lines = fs.readFileSync('articles_data.txt', 'utf8').split('\n');
const articles = [];
for (const line of lines) {
  if (!line.trim()) continue;
  const parts = line.split('\t');
  if (parts.length >= 4) {
    const url = parts[0].trim();
    const type = parts[1].trim();
    const title = parts[2].trim();
    const desc = parts[3].trim();
    articles.push({ url, type, title, desc });
  }
}
fs.writeFileSync('articles.json', JSON.stringify(articles, null, 2));
