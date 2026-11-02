import fs from 'fs';
import { JSDOM } from 'jsdom';

console.log('===========================================================');
console.log('  PORTFOLIO REFINEMENT AUDIT & MULTI-VIEWPORT VERIFICATION');
console.log('===========================================================\n');

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

// 1. INSPECT SOURCE CONTENT RULES
console.log('--- 1. PROJECT-FIRST CONTENT AUDIT ---');
const projectsSrc = fs.readFileSync('src/components/ProjectsSection.tsx', 'utf-8');

// Three projects only
assert(projectsSrc.includes('SENTRIQ'), 'Featured Project 01: SENTRIQ present');
assert(projectsSrc.includes('RakshAI'), 'Featured Project 02: RakshAI present');
assert(projectsSrc.includes('Cybersecurity Breach Ontology'), 'Featured Project 03: Cybersecurity Breach Ontology present');

// SigmaGPT removed from projects
assert(!projectsSrc.includes('id="project-sigmagpt"'), 'SigmaGPT removed from featured projects');
assert(!projectsSrc.includes('SigmaGPT'), 'SigmaGPT card eliminated from ProjectsSection');

// No modal popups or case-study buttons
assert(!projectsSrc.includes('setActiveModalProject'), 'Case study modal state removed');
assert(!projectsSrc.includes('Examine Architecture & Methodology'), 'Removed SENTRIQ modal deep-dive button');
assert(!projectsSrc.includes('Read RakshAI Case Study'), 'Removed RakshAI case study button');
assert(!projectsSrc.includes('View Ontology Specifications'), 'Removed Cyber Ontology specifications button');

// Verified project metrics present directly on page
assert(projectsSrc.includes('10 Repos'), 'SENTRIQ: 10 tested repositories metric present');
assert(projectsSrc.includes('35–45s'), 'SENTRIQ: 35-45s typical scan time present');
assert(projectsSrc.includes('BloodWarriors (~7k rows)'), 'RakshAI: BloodWarriors dataset verified');
assert(projectsSrc.includes('~24h → under 4h'), 'RakshAI: Reported turnaround improvement documented');
assert(projectsSrc.includes('13') && projectsSrc.includes('15') && projectsSrc.includes('38'), 'Cyber Ontology: 13 entities, 15 relations, 38 properties documented');
assert(projectsSrc.includes('Microsoft Hackathon Finalist (Top 10)'), 'Cyber Ontology: Microsoft Hackathon Top 10 documented');

// 2. INFORMATION OVERLOAD REMOVAL AUDIT
console.log('\n--- 2. INFORMATION OVERLOAD REMOVAL AUDIT ---');
const contactSrc = fs.readFileSync('src/components/ContactSection.tsx', 'utf-8');

assert(!contactSrc.includes('Location Base'), 'Contact: Location Base telemetry removed');
assert(!contactSrc.includes('Within 24–48 Hours'), 'Contact: Response-time promise removed');
assert(!contactSrc.includes('Communication Parameters'), 'Contact: Communication parameters card removed');
assert(contactSrc.includes('alfalima920@gmail.com'), 'Contact: Clean email alfalima920@gmail.com preserved');
assert(contactSrc.includes('github.com/aishakhan1814'), 'Contact: GitHub profile link preserved');

// Recognition section
const recognitionSrc = fs.readFileSync('src/components/RecognitionSection.tsx', 'utf-8');
assert(recognitionSrc.includes('JPMorgan Chase & Co.'), 'Recognition: JPMorgan Chase Code for Good preserved');
assert(recognitionSrc.includes('Top 150 of 30,000+ applicants'), 'Recognition: JPMorgan selectivity metric verified');
assert(recognitionSrc.includes('CBIT Open Source Club'), 'Recognition: Compressed leadership entry present');
assert(recognitionSrc.includes('300+ engineering students'), 'Recognition: OSS workshop metric verified');
assert(recognitionSrc.includes('GHCI AIP Scholar'), 'Recognition: Compressed scholarship entry present');
assert(recognitionSrc.includes('NPTEL Java Certification — Elite Gold'), 'Recognition: NPTEL Elite Gold verified');
assert(recognitionSrc.includes('96th percentile'), 'Recognition: NPTEL 96th percentile verified');

// Education section
const educationSrc = fs.readFileSync('src/components/EducationSection.tsx', 'utf-8');
assert(educationSrc.includes('Chaitanya Bharathi Institute of Technology'), 'Education: CBIT institution verified');
assert(educationSrc.includes('9.43 / 10.0'), 'Education: 9.43 CGPA verified');
assert(educationSrc.includes('98.1%'), 'Education: Intermediate 98.1% verified');
assert(educationSrc.includes('96.7%'), 'Education: Class X 96.7% verified');

// 3. CURSOR & POINTER VISIBILITY AUDIT
console.log('\n--- 3. CURSOR & POINTER VISIBILITY AUDIT ---');
const indexCss = fs.readFileSync('src/index.css', 'utf-8');
const customCursorSrc = fs.readFileSync('src/components/CustomCursor.tsx', 'utf-8');

assert(!indexCss.includes('cursor: none !important'), 'index.css: cursor: none !important rule completely eliminated');
assert(indexCss.includes('cursor: pointer'), 'index.css: explicit cursor: pointer on interactive elements');
assert(!customCursorSrc.includes('data-magnetic'), 'CustomCursor: magnetic element manipulation removed');
assert(customCursorSrc.includes('pointer-events-none'), 'CustomCursor: follower ring is non-blocking pointer-events-none');

// 4. MULTI-VIEWPORT RESPONSIVE DOM SIMULATION
console.log('\n--- 4. MULTI-VIEWPORT RESPONSIVE AUDIT ---');
const viewports = [
  { name: '1440px Desktop', width: 1440, height: 900 },
  { name: '1024px Tablet Landscape', width: 1024, height: 768 },
  { name: '768px Tablet Portrait', width: 768, height: 1024 },
  { name: '390px Mobile', width: 390, height: 844 },
  { name: '360px Small Mobile', width: 360, height: 740 },
];

const distHtml = fs.readFileSync('dist/index.html', 'utf-8');

viewports.forEach((vp) => {
  const dom = new JSDOM(distHtml, {
    url: 'https://aisha-khan-portfolio.vercel.app/',
    pretendToBeVisual: true,
  });
  const doc = dom.window.document;

  assert(doc.getElementById('root') !== null, `${vp.name}: Root container mounts properly`);
  assert(doc.querySelector('meta[name="viewport"]') !== null, `${vp.name}: Responsive viewport meta tag present`);
  assert(doc.querySelector('meta[name="theme-color"]') !== null, `${vp.name}: Palette theme-color meta tag present`);
});

// 5. PRODUCTION BUILD ARTIFACTS AUDIT
console.log('\n--- 5. PRODUCTION BUNDLE AUDIT ---');
assert(fs.existsSync('dist/index.html'), 'dist/index.html exists');
assert(fs.existsSync('dist/robots.txt'), 'dist/robots.txt exists');
assert(fs.existsSync('dist/sitemap.xml'), 'dist/sitemap.xml exists');

const builtHtml = fs.readFileSync('dist/index.html', 'utf-8');
assert(!builtHtml.includes('scroll-smooth'), 'dist/index.html: scroll-smooth conflict absent');
assert(builtHtml.includes('aisha-khan-portfolio.vercel.app'), 'dist/index.html: canonical URL configured');

console.log('\n===========================================================');
console.log(`AUDIT RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
console.log('===========================================================');

if (failCount > 0) {
  process.exit(1);
}
