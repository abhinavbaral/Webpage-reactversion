
export const profile = {
  name: 'Baral Abhinav',
  shortName: 'ABHINAV',
  role: 'FULL-STACK & MOBILE DEVELOPER',
  // The pitch. Not a list of titles — the thing the combination buys the client.
  promise: 'I build the whole product, and write what goes on it',
  location: 'Jhapa, Koshi Province, Nepal',
  availability: 'NEPAL · NPT (UTC+5:45) · REMOTE WORLDWIDE',
  github: '@abhinavbaral',
  githubUrl: 'https://github.com/abhinavbaral',
  linkedinUrl: 'https://www.linkedin.com/in/abhinav-baral-126a071ba/',
  email: 'abhinavbaral@gmail.com',
  phone: '+977 9844602018',
};


export const disciplines = ['Frontend', 'Backend', 'Mobile'];

export const manifesto = {
  eyebrow: 'WHY ONE PERSON INSTEAD OF THREE',
  lead: 'Most projects stall',
  highlight: 'at the handoff.',
  body: 'The web app waits for the API. The API changes and the phone app breaks. Each fix waits for whoever owns the other half. I build all three, so there is no other half to wait for. That is not a boast about range — it is the reason small projects actually ship on the date I gave you.',
};


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
  }
];


// !! REPLACE THESE WITH YOUR OWN MEASUREMENTS BEFORE GOING LIVE. !!
//
// Every number must be reproducible on demand. Run Lighthouse on your deployed
// project, read bundle size off `vite build`, time the API with curl. If you
// cannot produce a number in front of a client, delete the row. If you cannot
// fill at least three rows honestly, set enabled: false and the section vanishes.
export const metrics = {
  enabled: false, // off until the rows hold real numbers
  eyebrow: 'MEASURED ON MY OWN SHIPPED PROJECTS · NOT ESTIMATES',
  note: 'Every number below is reproducible. Ask me to run it live.',
  rows: [
    { label: 'Lighthouse performance', from: '—', to: '—', unit: '', project: 'REPLACE ME' },
    { label: 'Lighthouse accessibility', from: '—', to: '—', unit: '', project: 'REPLACE ME' },
    { label: 'Production bundle', from: '—', to: '—', unit: 'kB', project: 'REPLACE ME' },
    { label: 'App cold start', from: '—', to: '—', unit: 's', project: 'REPLACE ME' },
  ],
};


export const projects = [
  {
    no: '01',
    year: '2026',
    kind: 'WEB',
    name: 'HAJIRIKHATA WEB',
    tone: 'a',
    body: 'The admin dashboard for HajiriKhata, the attendance and payroll system. One payroll engine on a dual Nepali BS/AD calendar, shared with the mobile app.',
    tags: ['React', 'Node.js', 'Supabase', 'WebSockets'],
    link: { label: 'Visit site', href: 'https://hajirikhata.com' },
    status: 'In use',
  },
  {
    no: '02',
    year: '2026',
    kind: 'ANDROID APP',
    name: 'HAJIRIKHATA APP',
    tone: 'b',
    body: 'The employee app for HajiriKhata: check-in, attendance and pay on the same dual BS/AD calendar, plus Kurakani, its built-in real-time chat. Used by staff every day.',
    tags: ['React Native', 'Expo', 'Supabase', 'WebSockets'],
    link: { label: 'Download APK', href: '/downloads/HajiriKhata.apk', download: true },
    status: 'In use',
  },
  {
    no: '03',
    year: '2026',
    kind: 'ANDROID APP',
    name: 'VOIDPOP',
    tone: 'c',
    body: 'Tracking app for movies, web series and anime. Search, add to your list, and mark watched. Built with React Native and Supabase.',
    tags: [],
    link: null,
    status: 'Completed',
  },
];

export const process = [
  {
    no: '01',
    title: 'SCOPE',
    body: 'I read what exists, list what is missing, and tell you honestly which parts are a problem. Free, and you keep the notes either way.',
  },
  {
    no: '02',
    title: 'STRUCTURE',
    body: 'A written plan: screens, data shape, hosting, and what ships first. Agreed before a line of code.',
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


export const history = {
  studied: [
    {
      year: '2018–19',
      title: 'HTML, CSS and JavaScript, then React',
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
      year: '2025',
      title: 'Front-end developer',
      place: 'Techdebugger, Damak',
      note: 'React and Tailwind CSS UI components for client projects.',
    },
    {
      year: '2026–',
      title: 'Software developer (in-house)',
      place: 'Eastern Auto Distributors, Biratnagar',
      note: 'Built and maintain HajiriKhata, the company attendance and payroll system: mobile app, admin dashboard and API.',
      current: true,
    },
    {
      year: '2024–',
      title: 'Freelance — web and mobile',
      place: 'Remote',
      note: 'Full builds for small businesses, from the database to the screen.',
      current: true,
    },
  ],
};


export const languages = [
  { name: 'Nepali', level: 'Native', dots: 4 },
  { name: 'English', level: 'Professional', dots: 4 },
  { name: 'Hindi', level: 'Conversational', dots: 3 },
  { name: 'Japanese', level: 'Beginner', dots: 1 },
];
