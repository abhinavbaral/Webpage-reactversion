// ---------------------------------------------------------------------------
// Single source of truth for everything the site displays.
// Edit this file to change the site. Nothing is hardcoded in the React components.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Abhinav Baral',
  shortName: 'BARAL',
  role: 'FULL STACK DEVELOPER',
  // The pitch. Not a list of titles — the thing the combination buys the client.
  promise: 'I build the whole product, and write what goes on it',
  location: 'Jhapa, Koshi Province, Nepal',
  availability: 'NEPAL · IST · REMOTE WORLDWIDE',
  github: '@abhinavbaral',
  githubUrl: 'https://github.com/abhinavbaral',
  linkedinUrl: 'https://www.linkedin.com/in/abhinavbaral',
  email: 'abhinavbaral@gmail.com',
  phone: '+977 9842795750',
};

// Shown as a strip under the name. Order matters — lead with the anchor skill.
export const disciplines = ['Web', 'Mobile', 'Backend', 'Words'];

export const manifesto = {
  eyebrow: 'WHY ONE PERSON INSTEAD OF THREE',
  lead: 'Most projects stall',
  highlight: 'at the handoff.',
  body: 'The designer finishes and waits for the developer. The developer finishes and waits for someone to write the copy. The copy arrives and does not fit the layout it was written for. I do all three parts, so none of those waits exist. That is not a boast about range — it is the reason small projects actually ship on the date I gave you.',
};

// (01) ------------------------------------------------------------------------
export const skillLegend = [
  { level: 'daily', label: 'Use daily' },
  { level: 'working', label: 'Working knowledge' },
];

export const stack = [
  {
    id: '01',
    title: 'FRONTEND',
    body: 'Interfaces that stay fast as they grow. Component structure a second developer can read, accessible markup by default, responsive down to a 360px viewport.',
    // level: 'daily' = reach for it without thinking.
    // level: 'working' = shipped with it, would need to check the docs.
    tags: [
      { name: 'JavaScript', level: 'daily' },
      { name: 'React', level: 'daily' },
      { name: 'HTML5', level: 'daily' },
      { name: 'CSS3', level: 'daily' },
      { name: 'Tailwind CSS', level: 'daily' },
      { name: 'Vite', level: 'working' },
      { name: 'TypeScript', level: 'working' },
    ],
  },
  {
    id: '02',
    title: 'BACKEND',
    body: 'REST APIs, authentication, and data that survives a restart. Enough backend to ship a whole product without waiting on anyone to build the endpoint I need.',
    tags: [
      { name: 'Node.js', level: 'daily' },
      { name: 'Express', level: 'daily' },
      { name: 'REST APIs', level: 'daily' },
      { name: 'MongoDB', level: 'working' },
      { name: 'Supabase', level: 'working' },
      { name: 'PostgreSQL', level: 'working' },
      { name: 'JWT / auth', level: 'working' },
    ],
  },
  {
    id: '03',
    title: 'MOBILE',
    body: 'Android apps built with React Native and Expo. Real device builds, offline handling, and over-the-air updates so a fix does not need a new install.',
    tags: [
      { name: 'React Native', level: 'daily' },
      { name: 'Expo', level: 'daily' },
      { name: 'EAS Build', level: 'working' },
      { name: 'expo-updates', level: 'working' },
      { name: 'Android', level: 'working' },
    ],
  },
  {
    id: '04',
    title: 'WORDS',
    // This is the differentiator. Keep it about the product, not about blogging.
    body: 'The copy on the buttons, the empty states, the error messages, the landing page. Written by the person who built the screen it sits on, in English or Nepali.',
    tags: [
      { name: 'Product copy', level: 'daily' },
      { name: 'UX writing', level: 'daily' },
      { name: 'Landing pages', level: 'daily' },
      { name: 'Documentation', level: 'working' },
      { name: 'English + नेपाली', level: 'daily' },
    ],
    feature: true,
  },
];

// (02) ------------------------------------------------------------------------
// !! REPLACE THESE WITH YOUR OWN MEASUREMENTS BEFORE GOING LIVE. !!
//
// Every number must be reproducible on demand. Run Lighthouse on your deployed
// project, read bundle size off `vite build`, time the API with curl. If you
// cannot produce a number in front of a client, delete the row. If you cannot
// fill at least three rows honestly, set enabled: false and the section vanishes.
export const metrics = {
  enabled: true,
  eyebrow: 'MEASURED ON MY OWN SHIPPED PROJECTS · NOT ESTIMATES',
  note: 'Every number below is reproducible. Ask me to run it live.',
  rows: [
    { label: 'Lighthouse performance', from: '—', to: '—', unit: '', project: 'REPLACE ME' },
    { label: 'Lighthouse accessibility', from: '—', to: '—', unit: '', project: 'REPLACE ME' },
    { label: 'Production bundle', from: '—', to: '—', unit: 'kB', project: 'REPLACE ME' },
    { label: 'App cold start', from: '—', to: '—', unit: 's', project: 'REPLACE ME' },
  ],
};

// (03) ------------------------------------------------------------------------
// `kind` drives the badge on each card: WEB · MOBILE · FULL-STACK · WRITING.
// It is the structural device that proves the range instead of claiming it.
export const projects = [
  {
    no: '01',
    year: '2026',
    kind: 'MOBILE',
    name: 'REPLACE ME',
    tone: 'a',
    body: 'Your strongest shipped mobile app goes here. Say what it does, who uses it, and one number — installs, records handled, users onboarded.',
    tags: ['React Native', 'Expo', 'Node.js'],
    live: null,
    repo: null,
  },
  {
    no: '02',
    year: '2025',
    kind: 'FULL-STACK',
    name: 'HARMONICA',
    tone: 'b',
    body: 'Full-stack application across two repositories: a Node.js API service and a React client consuming it. Auth flow, protected routes, and a real deployment on both halves.',
    tags: ['React', 'Node.js', 'Express', 'REST'],
    live: null,
    repo: 'https://github.com/abhinavbaral/harmonica-client',
  },
  {
    no: '03',
    year: '2025',
    kind: 'FULL-STACK',
    name: 'KURAKANI',
    tone: 'c',
    body: 'Real-time chat on WebSockets. Message delivery, presence state and reconnection handling written from scratch rather than pulled from a service.',
    tags: ['JavaScript', 'WebSockets', 'Node.js'],
    live: null,
    repo: 'https://github.com/abhinavbaral/kurakani',
  },
  {
    no: '04',
    year: '2025',
    kind: 'WEB',
    name: 'BUDGETBEE',
    tone: 'a',
    body: 'Personal finance tracker. Expense categorisation, running balances, and a persistence layer that survives a refresh.',
    tags: ['JavaScript', 'LocalStorage', 'Charts'],
    live: null,
    repo: 'https://github.com/abhinavbaral/budgetbee',
  },
  {
    no: '05',
    year: '2026',
    kind: 'WRITING',
    // A writing sample belongs in the work row, not in a separate services list.
    // Treat it like any other project: what it was, who for, what changed.
    name: 'REPLACE ME',
    tone: 'b',
    body: 'One writing engagement, described like an engineering project. What the client sells, what the page said before, what it says now, and what moved as a result.',
    tags: ['Landing page', 'Product copy', 'English + Nepali'],
    live: null,
    repo: null,
  },
  {
    no: '06',
    year: '2024',
    kind: 'WEB',
    name: 'BUBBLE BURST',
    tone: 'c',
    body: 'Browser game on a canvas render loop. Collision detection, score state and a difficulty curve, no game engine.',
    tags: ['HTML5 Canvas', 'JavaScript'],
    live: null,
    repo: 'https://github.com/abhinavbaral/bubble-burst',
  },
];

// (04) ------------------------------------------------------------------------
export const process = [
  {
    no: '01',
    title: 'SCOPE',
    body: 'I read what exists, list what is missing, and tell you honestly which parts are a problem. Free, and you keep the notes either way.',
  },
  {
    no: '02',
    title: 'STRUCTURE',
    body: 'A written plan: screens, data shape, hosting, and who writes what. Agreed before a line of code.',
  },
  {
    no: '03',
    title: 'BUILD',
    body: 'Weekly iterations with a link or a build you can open. No four-week silences ending in a surprise.',
  },
  {
    no: '04',
    title: 'HANDOVER',
    body: 'Deployed, documented, and yours. Repository access, a README that works, and a month of questions answered.',
  },
];

// (05) ------------------------------------------------------------------------
// Two tracks side by side. Education on the left, paid work on the right,
// so a reader can see they overlap rather than follow one another.
export const history = {
  studied: [
    {
      year: '2019',
      title: 'Started with HTML, CSS and JavaScript',
      place: 'Self-taught',
    },
    {
      year: '2022',
      title: 'Secondary Education Examination (SEE)',
      place: 'Damak Model Secondary School, Jhapa',
    },
    {
      year: '2022–23',
      title: 'Higher Secondary, Class 11–12',
      place: 'Model Campus Damak, Jhapa',
    },
    {
      year: '2023–26',
      title: 'BCA — Bachelor of Computer Applications',
      place: 'Model Campus Damak, Jhapa',
      current: true,
    },
  ],
  worked: [
    {
      year: '2026',
      title: 'Front-end developer',
      place: 'Techdebugger, Damak',
      note: 'React and Tailwind CSS UI components for client projects.',
    },
    {
      year: '2026',
      title: 'Web development intern',
      place: 'Eastern Auto Distributors, Biratnagar',
      note: 'Built the responsive business site and shipped UI improvements.',
    },
    {
      year: '2024–',
      title: 'Freelance — web, mobile and copy',
      place: 'Remote',
      note: 'Full builds for small businesses, from the database to the button labels.',
      current: true,
    },
  ],
};

// Relevant here because half the offer is writing — being able to write the
// same landing page twice, once in each language, is a real service.
export const languages = [
  { name: 'Nepali', level: 'Native', dots: 4 },
  { name: 'English', level: 'Professional', dots: 4 },
  { name: 'Hindi', level: 'Conversational', dots: 3 },
  { name: 'Japanese', level: 'Beginner', dots: 1 },
];
