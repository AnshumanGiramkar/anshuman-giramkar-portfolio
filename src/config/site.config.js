/* ═══════════════════════════════════════════════════════════════
   ⚙️  YOUR SITE — EDIT THIS FILE, NOTHING ELSE
   ═══════════════════════════════════════════════════════════════

   Everything on your site comes from this one file.
   Change the text here and the site updates. You do not need to
   open any other file to launch.

   Sections in this file:
     1. IDENTITY      — your name, tagline, quote
     2. SCREENS       — the 9 screens, their art and colours
     3. CONTENT       — what appears on each screen
     4. LOADOUT       — the Tab wheel
     5. ADVANCED      — progression tuning (optional)

   ═══════════════════════════════════════════════════════════════ */


/* ───────────────────────────────────────────────────────────────
   1. IDENTITY
   ─────────────────────────────────────────────────────────────── */

export const SITE = {
  // Appears as the big title on the main menu. Two lines.
  titleLine1: 'ANSHUMAN',
  titleLine2: 'GIRAMKAR',

  // The script word underneath
  subtitle: 'Portfolio',

  // Browser tab + search results
  metaTitle: 'Anshuman Giramkar — Portfolio',
  metaDescription: 'Designer and developer building memorable digital experiences.',

  // Bottom-right handwritten quote. Two lines + attribution.
  quoteLine1: 'I watch and',
  quoteLine2: 'I make things.',
  quoteAuthor: 'Anshuman Giramkar',

  // Bottom-left strip
  tagline: ['Arcade Inspired', 'Build Different', 'Stay Legendary'],

  // Letter shown in the HUD avatar box, top-right
  avatarLetter: 'A',

  // Starting money and the total it counts up to on load
  moneyTarget: 1250000
};


/* ───────────────────────────────────────────────────────────────
   2. SCREENS

   Each screen needs:
     id        — must match a file in src/components/screens/
     label     — what shows in the menu
     frame     — your image in /public/frames/
     objective — the mission text, bottom-left. <br> for line break
     map       — [x%, y%] where the minimap dot sits
     accent    — main colour for this screen
     accent2   — secondary colour
     fallback  — 3 gradient colours used if the image is missing
     counts    — true if visiting it should light a star

   💡 The accent colours are what make this template feel expensive.
      Pick them FROM your image. Eyedropper a bright colour and a
      warm highlight. The whole interface recolours to match.
   ─────────────────────────────────────────────────────────────── */

export const SCREENS = [
  {
    id: 'hero',
    label: 'Start Game',
    frame: '/frames/01-hero.avif',
    objective: 'Build next level<br>digital experiences',
    map: [22, 70],
    accent: '#ff2d9b',
    accent2: '#ffb238',
    fallback: ['#3d1259', '#d61f6e', '#f97316'],
    counts: false
  },
  {
    id: 'about',
    label: 'About Me',
    frame: '/frames/02-about.avif',
    objective: 'Learn who<br>you are dealing with',
    map: [30, 62],
    accent: '#e08b3c',
    accent2: '#4fb6c9',
    fallback: ['#8fc7d9', '#f2d7a8', '#ffe9c4'],
    counts: true
  },
  {
    id: 'skills',
    label: 'Skills',
    frame: '/frames/03-skills.avif',
    objective: 'Review unlocked<br>abilities',
    map: [46, 26],
    accent: '#7fb2d9',
    accent2: '#ffb238',
    fallback: ['#101823', '#2b3d52', '#5b7183'],
    counts: true
  },
  {
    id: 'projects',
    label: 'Projects',
    frame: '/frames/04-projects.avif',
    objective: 'Inspect the<br>completed builds',
    map: [58, 40],
    accent: '#0fbfb2',
    accent2: '#ff7fb0',
    fallback: ['#1fb6e8', '#5fe0d8', '#f7e6c8'],
    counts: true
  },
  {
    id: 'experience',
    label: 'Experience',
    frame: '/frames/05-experience.avif',
    objective: 'Trace the<br>full career path',
    map: [72, 54],
    accent: '#9b8cff',
    accent2: '#ffa83c',
    fallback: ['#1a1246', '#4b3d8f', '#c86a4a'],
    counts: true
  },
  {
    id: 'achievements',
    label: 'Achievements',
    frame: '/frames/06-achievements.avif',
    objective: 'Collect every<br>unlocked trophy',
    map: [66, 78],
    accent: '#ff2d9b',
    accent2: '#24e0e0',
    fallback: ['#2a0b3d', '#a01f7a', '#ff3d7a'],
    counts: true
  },
  {
    id: 'services',
    label: 'Services',
    frame: '/frames/07-services.avif',
    objective: 'Recruit the<br>next generation',
    map: [38, 84],
    accent: '#e8806e',
    accent2: '#1fa8d8',
    fallback: ['#22a8e8', '#8fd8f0', '#f0dcc4'],
    counts: true
  },
  {
    id: 'contact',
    label: 'Contact',
    frame: '/frames/08-contact.avif',
    objective: 'Open a secure<br>line of contact',
    map: [82, 34],
    accent: '#6ea8ff',
    accent2: '#ffb238',
    fallback: ['#05060f', '#141a2e', '#2e2438'],
    counts: true
  },
  {
    id: 'outro',
    label: 'Exit Game',
    frame: '/frames/09-outro.avif',
    objective: 'Ride off into<br>the sunrise',
    map: [88, 88],
    accent: '#ffa3bd',
    accent2: '#ffd9a8',
    fallback: ['#8f9fd8', '#f2b8c6', '#ffd9a8'],
    counts: false
  }
];


/* ───────────────────────────────────────────────────────────────
   3. CONTENT — what appears on each screen
   ─────────────────────────────────────────────────────────────── */

export const ABOUT = {
  title: 'About',
  subtitle: 'Me',

  intro: `Hey, I'm [Your Name]. A [what you do] who builds digital
          experiences that aren't just functional — they're memorable.`,

  // Icon options: ◆ ◉ ✦ ▲ ● ◇ ★ ⚡ ✈ ◷
  cards: [
    { icon: '◆', label: 'Age',      value: '00 — Your background' },
    { icon: '◉', label: 'Location', value: 'Your City, Country' },
    { icon: '✦', label: 'Status',   value: 'Available for work' }
  ],

  button: { text: 'View Journey', goesTo: 'experience' }
};


export const SKILLS = {
  title: 'Skills',
  subtitle: 'Unlocked',

  // Keep to 7 or fewer so they fit without scrolling
  list: [
    { name: 'HTML / CSS',     value: 95 },
    { name: 'JavaScript',     value: 90 },
    { name: 'React',          value: 85 },
    { name: 'Node.js',        value: 80 },
    { name: 'UI / UX',        value: 90 },
    { name: 'Figma',          value: 75 },
    { name: 'AI / Automation', value: 85 }
  ]
};


export const PROJECTS = {
  title: 'Projects',
  subtitle: 'Showcase',

  // Set featured: true on ONE project to highlight it
  list: [
    { icon: '◆', name: 'Project One',   description: 'What it is', featured: true,  url: '' },
    { icon: '▲', name: 'Project Two',   description: 'What it is', featured: false, url: '' },
    { icon: '●', name: 'Project Three', description: 'What it is', featured: false, url: '' },
    { icon: '◇', name: 'Project Four',  description: 'What it is', featured: false, url: '' }
  ],

  button: { text: 'View All Projects', goesTo: 'hero' }
};


export const EXPERIENCE = {
  title: 'Experience',
  subtitle: 'Journey',

  timeline: [
    {
      period: '2024 — PRESENT',
      role: 'Your Current Role',
      description: 'What you do and who you do it for.'
    },
    {
      period: '2023 — 2024',
      role: 'Previous Role',
      description: 'What you built and what you learned.'
    },
    {
      period: '2022 — 2023',
      role: 'Where You Started',
      description: 'How you got into this.'
    }
  ]
};


export const ACHIEVEMENTS = {
  title: 'Achievements',
  subtitle: 'Unlocked',

  list: [
    { icon: '★', name: 'First Project',  description: 'Shipped my first live build' },
    { icon: '✈', name: 'Global Clients', description: 'Delivered across 3 continents' },
    { icon: '⚡', name: 'Milestone',      description: 'Something you are proud of' },
    { icon: '◷', name: 'Dedication',     description: '1000+ hours of consistency' }
  ],

  button: { text: 'View Certificate', goesTo: 'services' }
};


export const SERVICES = {
  titleLine1: 'What',
  titleLine2: 'I Do',
  subtitle: 'Services',

  intro: `A short paragraph about what you offer, who you work with,
          and why someone should hire you.`,

  stats: [
    { number: '20+', label: 'Projects' },
    { number: '15+', label: 'Clients' },
    { number: '3',   label: 'Countries' }
  ],

  button: { text: 'Work With Me', goesTo: 'contact' }
};


export const CONTACT = {
  title: 'Contact',
  subtitle: "Let's Connect",

  // url makes the row clickable. Leave '' for plain text.
  links: [
    { icon: '✉',  label: 'Email',     value: 'you@yoursite.com',  url: 'mailto:you@yoursite.com' },
    { icon: '◉',  label: 'Location',  value: 'Your City, Country', url: '' },
    { icon: 'in', label: 'LinkedIn',  value: '/in/yourhandle',     url: 'https://linkedin.com/in/yourhandle' },
    { icon: '◎',  label: 'Instagram', value: '@yourhandle',        url: 'https://instagram.com/yourhandle' }
  ],

  button: { text: 'Send Message', goesTo: 'outro' }
};


export const OUTRO = {
  kicker: 'Thank you for visiting',
  titleLine1: 'Mission',
  titleLine2: 'Complete',
  subtitle: 'See you soon!',
  button: { text: '⌂ Back to Home', goesTo: 'hero' }
};


/* ───────────────────────────────────────────────────────────────
   4. LOADOUT WHEEL — opens with Tab

   8 items works best. 6 or 10 also fine. The wheel spaces them
   automatically.
   ─────────────────────────────────────────────────────────────── */

export const LOADOUT = {
  hubTitle: 'Loadout',
  hubSubtitle: 'Tech Stack',

  items: [
    { name: 'Astro',   role: 'Framework' },
    { name: 'GSAP',    role: 'Motion' },
    { name: 'React',   role: 'UI' },
    { name: 'Node',    role: 'Backend' },
    { name: 'Figma',   role: 'Design' },
    { name: 'Blender', role: '3D' },
    { name: 'Python',  role: 'AI / ML' },
    { name: 'Vercel',  role: 'Deploy' }
  ]
};


/* ───────────────────────────────────────────────────────────────
   5. ADVANCED — optional tuning
   ─────────────────────────────────────────────────────────────── */

export const SETTINGS = {
  // Show the ✓ ticks and star progression? Set false for a plain menu.
  progressionEnabled: true,

  // How many stars in the HUD (max 6)
  totalStars: 6,

  // Money added per new section visited
  moneyPerSection: 150000,
  moneyBonusPerSection: 25000,

  // Remember progress between visits
  saveProgress: true,

  // Show the keyboard hint bar at the bottom
  showKeyHints: true,

  // Seconds before the loading splash clears
  splashDuration: 2.2
};


/* ── derived, do not edit ── */
export const TOTAL_SECTIONS = SCREENS.filter((s) => s.counts).length;
