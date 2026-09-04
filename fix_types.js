import fs from 'fs';

let types = fs.readFileSync('types.ts', 'utf-8');
if (!types.includes('LocalizedContent')) {
  types = `export interface LocalizedContent {
  title: string;
  subtitle: string;
  description: string;
  subject?: string;
  audience?: string;
  learningFocus?: string;
}

` + types;
  types = types.replace('categoryKeys?: string[];', 'categoryKeys?: string[];\n  en?: LocalizedContent;');
  fs.writeFileSync('types.ts', types);
}
