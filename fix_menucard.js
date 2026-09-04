import fs from 'fs';

let content = fs.readFileSync('components/MenuCard.tsx', 'utf-8');

// Update props
content = content.replace('export interface MenuCardProps {', 'export interface MenuCardProps {\n  locale?: "id" | "en";');
content = content.replace('export const MenuCard: React.FC<MenuCardProps> = ({ config, onClick }) => {', 'export const MenuCard: React.FC<MenuCardProps> = ({ config, onClick, locale = "id" }) => {');

// Use localized strings
content = content.replace('const isLight = config.variant === \'light\';', `const isLight = config.variant === 'light';
  const isEn = locale === 'en' && config.en;
  const displayTitle = isEn ? config.en.title : config.title;
  const displaySubtitle = isEn ? config.en.subtitle : config.subtitle;
  const displayAudience = isEn ? config.en.audience : config.audience;
  const displaySubject = isEn ? config.en.subject : config.subject;
`);

content = content.replace(/>{config\.title}</g, '>{displayTitle}<');
content = content.replace(/>{config\.subtitle}</g, '>{displaySubtitle}<');
content = content.replace(/>{config\.audience}</g, '>{displayAudience}<');
content = content.replace(/>{config\.subject}</g, '>{displaySubject}<');
content = content.replace(/>Segera Hadir</g, '>{locale === "en" ? "Coming Soon" : "Segera Hadir"}<');
content = content.replace(/>Baru</g, '>{locale === "en" ? "New" : "Baru"}<');

fs.writeFileSync('components/MenuCard.tsx', content);
