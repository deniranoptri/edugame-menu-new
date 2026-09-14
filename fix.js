const fs = require('fs');
let content = fs.readFileSync('components/JurnalGuru.tsx', 'utf8');
content = content.replace(/{catName}/g, (match, offset, str) => {
    // Actually the string in JurnalGuru.tsx is exactly "{catName}" but it's supposed to just be the actual category name string.
    return match;
});
