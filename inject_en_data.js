import fs from 'fs';

let app = fs.readFileSync('App.tsx', 'utf-8');

const enData = {
  'nusaboard': `{ title: 'NusaBoard', subtitle: 'Mind Mapping', description: 'An interactive canvas designed for collaborative brainstorming, mind mapping, and visual concept organization on large touch displays.', subject: 'General', audience: 'Middle School & Teachers', learningFocus: 'Idea organization and visual collaboration' }`,
  'doodle': `{ title: 'Neon Doodle', subtitle: 'Creative Canvas', description: 'A vibrant, multi-touch drawing canvas perfect for interactive flat panels. Express creativity freely with glowing neon effects.', subject: 'Arts & Creativity', audience: 'Early Childhood & Kindergarten', learningFocus: 'Fine motor skills and artistic expression' }`,
  'adu-tarik-dino': `{ title: 'Dino Tug-of-War', subtitle: 'Math Battle!', description: 'A competitive, split-screen math duel optimized for interactive flat panels. Two students compete head-to-head to solve math problems quickly.', subject: 'Mathematics', audience: 'Primary & Middle School', learningFocus: 'Fast calculation and mental math' }`,
  'puzzle': `{ title: 'Sliding Puzzle', subtitle: 'Logic Challenge', description: 'A classic sliding picture puzzle reimagined for large touch screens. Slide the tiles to recreate the hidden image.', subject: 'General', audience: 'Primary School', learningFocus: 'Spatial reasoning and problem solving' }`,
  'banua-fruit-blast': `{ title: 'Fruit Blast', subtitle: 'Math Ninja!', description: 'Slice the flying fruits bearing the correct answers! An energetic, physical math game perfect for classroom interactive displays.', subject: 'Mathematics', audience: 'Primary & Middle School', learningFocus: 'Rapid arithmetic and hand-eye coordination' }`,
  'traditional': `{ title: 'Gamelan Virtual', subtitle: 'Indonesian Heritage', description: 'Experience the traditional sounds of Indonesia. Play a virtual Gamelan instrument directly on your interactive flat panel.', subject: 'Arts & Culture', audience: 'All Ages', learningFocus: 'Cultural appreciation and musical rhythm' }`
};

for (const [id, enObj] of Object.entries(enData)) {
  // Regex to find the game object
  const regex = new RegExp(`({ id: '${id}', [\\s\\S]*?)( })`, 'g');
  app = app.replace(regex, (match, p1, p2) => {
    if (p1.includes('en: {')) return match; // already injected
    return `${p1}, en: ${enObj}${p2}`;
  });
}

fs.writeFileSync('App.tsx', app);
