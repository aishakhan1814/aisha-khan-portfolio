import fs from 'fs';

console.log('====================================================');
console.log('   AISHA KHAN PORTFOLIO — PHASE 05 AUDIT SUITE      ');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// 1. FILE STRUCTURE & EXPORT INTEGRITY
console.log('--- 1. FILE STRUCTURE & EXPORT INTEGRITY ---');
const requiredFiles = [
  'index.html',
  'package.json',
  'tsconfig.json',
  'vite.config.ts',
  'tailwind.config.js',
  'src/index.css',
  'src/main.tsx',
  'src/App.tsx',
  'src/hooks/useLenis.ts',
  'src/animations/heroAnimation.ts',
  'src/animations/narrativeAnimation.ts',
  'src/animations/projectsAnimation.ts',
  'src/animations/capabilitiesAnimation.ts',
  'src/animations/impactAnimation.ts',
  'src/components/CustomCursor.tsx',
  'src/components/Navbar.tsx',
  'src/components/Hero.tsx',
  'src/components/OrbitalVisual.tsx',
  'src/components/NarrativeSection.tsx',
  'src/components/ProjectsSection.tsx',
  'src/components/CapabilitiesSection.tsx',
  'src/components/ImpactSection.tsx',
];

for (const file of requiredFiles) {
  assert(fs.existsSync(file), `Required file exists: ${file}`);
}

const impactSource = fs.readFileSync('src/components/ImpactSection.tsx', 'utf-8');

// 2. MASTER SECTION HEADER & INTRO
console.log('\n--- 2. MASTER SECTION HEADER & INTRO ---');
assert(impactSource.includes('04 / IMPACT, LEADERSHIP &amp; RECOGNITION') || impactSource.includes('04 / IMPACT, LEADERSHIP & RECOGNITION'), 'Section identifier: 04 / IMPACT, LEADERSHIP & RECOGNITION present');
assert(impactSource.includes('THE WORK. THE PEOPLE.'), 'Headline part 1: THE WORK. THE PEOPLE. present');
assert(impactSource.includes('THE IMPACT.'), 'Headline part 2: THE IMPACT. present');
assert(
  impactSource.includes('Engineering is not just about building systems. It is about solving problems with people, taking initiative, sharing knowledge, and creating impact beyond the code.'),
  'Supporting copy preserved verbatim'
);

// 3. CHAPTER 01 — RECOGNITION
console.log('\n--- 3. CHAPTER 01: RECOGNITION AUDIT ---');
assert(impactSource.includes('Code for Good 2026'), 'J.P. Morgan Code for Good present');
assert(impactSource.includes('150') && impactSource.includes('30,000+'), 'J.P. Morgan 150 of 30,000+ applicants documented');
assert(impactSource.includes('Hyderabad'), 'J.P. Morgan Hyderabad location documented');
assert(impactSource.includes('Google Developer Group (GDG) Hackathon'), 'GDG Hackathon present');
assert(impactSource.includes('TOP 10 TEAMS') && impactSource.includes('2,000+ TEAMS'), 'GDG Top 10 among 2,000+ documented');
assert(impactSource.includes('Microsoft Ontology Hackathon'), 'Microsoft Ontology Hackathon present');
assert(impactSource.includes('300+ TEAMS'), 'Microsoft Ontology 300+ teams documented');
assert(impactSource.includes('13 entity types') && impactSource.includes('15 relationships') && impactSource.includes('38 properties'), 'Ontology metrics: 13 entity types, 15 relationships, 38 properties documented');
assert(impactSource.includes('Hack Culture 2.0'), 'Hack Culture 2.0 present');
assert(impactSource.includes('TOP 20 TEAMS') && impactSource.includes('500+ TEAMS'), 'Hack Culture Top 20 among 500+ documented');
assert(impactSource.includes('Vyoma Hackathon'), 'Vyoma Hackathon present');
assert(impactSource.includes('RUNNER-UP'), 'Vyoma Runner-up documented');
assert(impactSource.includes('EV charging assistance solution') || impactSource.includes('EV charging'), 'Vyoma EV charging solution documented');
assert(impactSource.includes('Smart India Hackathon (SIH) — CBIT Selection') || impactSource.includes('Smart India Hackathon'), 'SIH present');
assert(impactSource.includes('CBIT internal hackathon'), 'SIH explicitly described as internal hackathon selection');

// 4. CHAPTER 02 — LEADERSHIP
console.log('\n--- 4. CHAPTER 02: LEADERSHIP AUDIT ---');
assert(impactSource.includes('CBIT Open Source Club'), 'CBIT Open Source Club present');
assert(impactSource.includes('GitHub Session Lead') || impactSource.includes('GITHUB SESSION LEAD'), 'GitHub session lead documented');
assert(impactSource.includes('300+ students') || impactSource.includes('300+ STUDENTS'), '300+ students workshop documented');
assert(impactSource.includes('Chaitanya Astra'), 'Chaitanya Astra present');
assert(impactSource.includes('Joint Secretary') || impactSource.includes('JOINT SECRETARY'), 'Joint Secretary documented');
assert(impactSource.includes('Entrepreneurship Development Cell'), 'Entrepreneurship Development Cell present');
assert(impactSource.includes('mini-podcast') || impactSource.includes('MINI-PODCAST'), 'Mini-podcast format documented');
assert(impactSource.includes('Adobe India Student Insider'), 'Adobe India Student Insider present');

// 5. CHAPTER 03 — COMMUNITY IMPACT
console.log('\n--- 5. CHAPTER 03: COMMUNITY IMPACT AUDIT ---');
assert(impactSource.includes('Chaitanya Spondana — Gender Equality Outreach') || impactSource.includes('Chaitanya Spondana'), 'Chaitanya Spondana present');
assert(impactSource.includes('women’s empowerment') || impactSource.includes("women's empowerment"), "Women's empowerment outreach documented");
assert(impactSource.includes('rural communities'), 'Rural community outreach documented');
assert(impactSource.includes('CosmoCon 2025'), 'CosmoCon 2025 present');
assert(impactSource.includes('700+ participants') || impactSource.includes('700+'), 'CosmoCon 700+ participants documented');
assert(impactSource.includes('backpacks') && impactSource.includes('hoodies'), 'CosmoCon merchandise (backpacks, hoodies) documented');

// 6. CHAPTER 04 — PROBLEM SOLVING
console.log('\n--- 6. CHAPTER 04: PROBLEM SOLVING AUDIT ---');
assert(impactSource.includes('450+'), '450+ numerical display present');
assert(impactSource.includes('LeetCode Problems Solved'), 'LeetCode Problems Solved present');

// 7. CHAPTER 05 — EDUCATION & SCHOLARSHIPS
console.log('\n--- 7. CHAPTER 05: EDUCATION & SCHOLARSHIPS AUDIT ---');
assert(impactSource.includes('Chaitanya Bharathi Institute of Technology (CBIT)'), 'CBIT institution present');
assert(impactSource.includes('9.43 / 10') || impactSource.includes('9.43'), 'CGPA 9.43 documented');
assert(impactSource.includes('May 2028'), 'Expected May 2028 graduation documented');
assert(impactSource.includes('98.1%'), 'Intermediate 98.1% documented');
assert(impactSource.includes('96.7%'), 'Class X 96.7% documented');
assert(impactSource.includes('GHCI — Grace Hopper Celebration India'), 'GHCI present');
assert(impactSource.includes('AIP Scholarship') || impactSource.includes('Advancing Inclusion Program'), 'AIP (Advancing Inclusion Program) documented');
assert(impactSource.includes('SheFi Scholar'), 'Exact SheFi Scholar styling preserved');
assert(impactSource.includes('NPTEL — Java Programming') || impactSource.includes('NPTEL'), 'NPTEL Java present');
assert(impactSource.includes('Elite Gold') && impactSource.includes('96th Percentile'), 'NPTEL Elite Gold & 96th percentile documented');
assert(impactSource.includes('Oracle Cloud Infrastructure') && impactSource.includes('2025 AI Foundations'), 'OCI 2025 AI Foundations documented');

// 8. PHASE BOUNDARIES & BRIDGE
console.log('\n--- 8. PHASE BOUNDARIES & CONTINUOUS BRIDGE ---');
const appSource = fs.readFileSync('src/App.tsx', 'utf-8');
assert(!appSource.includes('ContactSection') && !appSource.includes('Footer'), 'No ContactSection / Footer implemented (Phase 06 boundary respected)');
assert(impactSource.includes('id="phase06-bridge"'), 'Phase 06 bridge anchor id="phase06-bridge" present');
assert(impactSource.includes('05 / REACH OUT &amp; CONNECT') || impactSource.includes('05 / REACH OUT & CONNECT'), 'Phase 06 bridge label present');
assert(impactSource.includes("LET'S BUILD SOMETHING EXTRAORDINARY."), 'Phase 06 bridge headline present');

// 9. ANIMATION ARCHITECTURE AUDIT
console.log('\n--- 9. GSAP ANIMATION ARCHITECTURE AUDIT ---');
const animSource = fs.readFileSync('src/animations/impactAnimation.ts', 'utf-8');
assert(animSource.includes('gsap.registerPlugin(ScrollTrigger)'), 'ScrollTrigger registered in impactAnimation');
assert(animSource.includes('gsap.matchMedia()'), 'gsap.matchMedia implemented');
assert(animSource.includes('prefers-reduced-motion'), 'prefers-reduced-motion handled');
assert(animSource.includes('chapter-recognition'), 'Chapter 01 animated via ScrollTrigger');
assert(animSource.includes('chapter-leadership'), 'Chapter 02 animated via ScrollTrigger');
assert(animSource.includes('chapter-community'), 'Chapter 03 animated via ScrollTrigger');
assert(animSource.includes('chapter-problem-solving'), 'Chapter 04 animated via ScrollTrigger');
assert(animSource.includes('chapter-education'), 'Chapter 05 animated via ScrollTrigger');
assert(animSource.includes('phase06-bridge'), 'Phase 06 Bridge animated via ScrollTrigger');
assert(animSource.includes('mm.revert()'), 'Master matchMedia reverted on cleanup');

// 10. PRODUCTION BUILD INTEGRITY
console.log('\n--- 10. PRODUCTION BUILD INTEGRITY ---');
assert(fs.existsSync('dist/index.html'), 'dist/index.html exists');
const distHtml = fs.readFileSync('dist/index.html', 'utf-8');
assert(distHtml.includes('Aisha Khan'), 'Built HTML contains Aisha Khan');

console.log('\n====================================================');
console.log(`AUDIT COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

process.exit(failCount === 0 ? 0 : 1);
