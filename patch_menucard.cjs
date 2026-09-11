const fs = require('fs');
let content = fs.readFileSync('components/MenuCard.tsx', 'utf8');

const replacement = `
          {/* ICON CONTAINER */}
          <div className={\`z-20 mt-1 shrink-0 transition-transform duration-300 \${config.id === 'helirescue' ? 'w-[50%] max-w-[120px] drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]' : 'w-[35%] max-w-[80px] aspect-square'} \${!isComingSoon ? 'group-hover:scale-110' : ''}\`}>
            <div className={\`
              w-full h-full
              \${config.id === 'helirescue' ? 'flex items-center justify-center relative' : \`rounded-full overflow-hidden flex items-center justify-center \${iconContainerBg} border-2 md:border-[3px] \${iconBorder} shadow-sm relative\`}
            \`}>
              {config.image && (
                <>
                   <div className={\`absolute inset-0 bg-gray-300/20 animate-pulse transition-opacity duration-300 \${isLoaded ? 'opacity-0' : 'opacity-100'} \${config.id === 'helirescue' ? 'rounded-full' : ''}\`} />
                   <img 
                    src={config.image} alt={\`\${config.title} - game edukasi \${config.tags?.join(', ') || ''}\`}
                    className={\`w-full h-full \${config.id === 'helirescue' ? 'object-contain scale-125' : 'object-cover'} transition-opacity duration-300 \${isLoaded ? 'opacity-100' : 'opacity-0'}\`}
                    referrerPolicy="no-referrer" loading="lazy" onLoad={() => setIsLoaded(true)}
                  />
                </>
              )}
            </div>
          </div>
`;

content = content.replace(/\{\/\* ICON CONTAINER \*\/\}[\s\S]*?<\/div>\s*<\/div>/, replacement.trim());
fs.writeFileSync('components/MenuCard.tsx', content);
