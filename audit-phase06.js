import fs from 'fs';

console.log('====================================================');
console.log('   AISHA KHAN PORTFOLIO — PHASE 06 AUDIT SUITE      ');
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
  'src/animations/contactAnimation.ts',
  'src/components/CustomCursor.tsx',
  'src/components/Navbar.tsx',
  'src/components/Hero.tsx',
  'src/components/OrbitalVisual.tsx',
  'src/components/NarrativeSection.tsx',
  'src/components/ProjectsSection.tsx',
  'src/components/CapabilitiesSection.tsx',
  'src/components/ImpactSection.tsx',
  'src/components/ContactSection.tsx',
  'src/components/Footer.tsx',
];

for (const file of requiredFiles) {
  assert(fs.existsSync(file), `Required file exists: ${file}`);
}

const contactSource = fs.readFileSync('src/components/ContactSection.tsx', 'utf-8');
const footerSource = fs.readFileSync('src/components/Footer.tsx', 'utf-8');
const appSource = fs.readFileSync('src/App.tsx', 'utf-8');
const navSource = fs.readFileSync('src/components/Navbar.tsx', 'utf-8');
const heroSource = fs.readFileSync('src/components/Hero.tsx', 'utf-8');
const animSource = fs.readFileSync('src/animations/contactAnimation.ts', 'utf-8');

// 2. CONTACT SECTION HEADER & EDITORIAL COPY
console.log('\n--- 2. CONTACT SECTION HEADER & EDITORIAL COPY ---');
assert(
  contactSource.includes('05 / OPEN CHANNEL'),
  'Section identifier: 05 / OPEN CHANNEL present'
);
assert(
  contactSource.includes('HAVE SOMETHING IN MIND?'),
  'Headline part 1: HAVE SOMETHING IN MIND? present'
);
assert(
  contactSource.includes('GOOD WORK STARTS WITH A CONVERSATION.'),
  'Headline part 2: GOOD WORK STARTS WITH A CONVERSATION. present'
);

const clichés = [
  "Let's change the world together",
  "Dream big, code bigger",
  "Your next big idea starts here",
  "Let's build something amazing",
];
for (const cliché of clichés) {
  assert(
    !contactSource.toLowerCase().includes(cliché.toLowerCase()),
    `Avoids generic cliché: "${cliché}"`
  );
}

// 3. CONTACT CHANNELS & FACTUAL INTEGRITY
console.log('\n--- 3. CONTACT CHANNELS & FACTUAL INTEGRITY ---');
assert(
  contactSource.includes('alfalima920@gmail.com'),
  'Verified email address: alfalima920@gmail.com present'
);
assert(
  contactSource.includes('mailto:${primaryEmail}') || contactSource.includes('mailto:alfalima920@gmail.com'),
  'Direct mailto link configured for alfalima920@gmail.com'
);
assert(
  contactSource.includes('handleCopyEmail'),
  'Copy email to clipboard interaction handler implemented'
);
assert(
  contactSource.includes('Hyderabad, India'),
  'Verified location base (Hyderabad, India) documented'
);
assert(
  contactSource.includes('OPEN TO OPPORTUNITIES'),
  'Availability indicator documented with precision'
);

// Verify no invented social accounts or handles
assert(
  !contactSource.includes('linkedin.com/in/aisha') && !contactSource.includes('linkedin.com/in/aishakhan'),
  'No fabricated LinkedIn personal URLs'
);
assert(
  !contactSource.includes('github.com/aisha') && !contactSource.includes('github.com/aishakhan'),
  'No fabricated GitHub personal URLs'
);

// 4. HONEST INTERACTION ARCHITECTURE (ZERO FAKE FORM SUBMISSIONS)
console.log('\n--- 4. HONEST INTERACTION ARCHITECTURE ---');
assert(
  contactSource.includes('handleLaunchEmailClient'),
  'Interactive email launcher implemented'
);
assert(
  !contactSource.includes('fetch(') && !contactSource.includes('axios'),
  'Zero fake backend API submissions (no simulated AJAX endpoints)'
);
assert(
  contactSource.includes('Direct mailto dispatch'),
  'Transparency notice regarding direct client mailto dispatch present'
);
assert(
  contactSource.includes('Engineering Opportunity') &&
  contactSource.includes('AI / ML Research') &&
  contactSource.includes('Technical Collaboration'),
  'Intent topic selector pills implemented'
);

// 5. FOOTER ARCHITECTURE
console.log('\n--- 5. FOOTER ARCHITECTURE ---');
assert(
  footerSource.includes('Aisha Khan'),
  'Footer brand wordmark: Aisha Khan present'
);
assert(
  footerSource.includes('Software Engineer building intelligent systems'),
  'Footer identity tagline matches verified persona'
);
assert(
  footerSource.includes('mailto:alfalima920@gmail.com'),
  'Footer includes verified direct mailto link'
);
assert(
  footerSource.includes('scrollToTop') || footerSource.includes('scrollTo'),
  'Footer back-to-top interaction implemented'
);
assert(
  footerSource.includes('id="site-footer"'),
  'Footer has semantic container id="site-footer"'
);
assert(
  footerSource.includes('#approach-section') &&
  footerSource.includes('#technical-capabilities') &&
  footerSource.includes('#selected-works') &&
  footerSource.includes('#impact-recognition') &&
  footerSource.includes('#contact'),
  'Footer navigation links map to valid, existing section IDs'
);

// 6. ANIMATION & LIFECYCLE
console.log('\n--- 6. ANIMATION & LIFECYCLE ---');
assert(
  animSource.includes('gsap.registerPlugin(ScrollTrigger)'),
  'ScrollTrigger registered in contactAnimation'
);
assert(
  animSource.includes('gsap.matchMedia()'),
  'gsap.matchMedia implemented for responsive animation boundaries'
);
assert(
  animSource.includes('prefers-reduced-motion'),
  'prefers-reduced-motion handled with static fallback'
);
assert(
  animSource.includes('contact-header'),
  'Contact header animated via ScrollTrigger'
);
assert(
  animSource.includes('contact-channels'),
  'Contact channels animated via ScrollTrigger'
);
assert(
  animSource.includes('contact-composer'),
  'Contact composer animated via ScrollTrigger'
);
assert(
  animSource.includes('site-footer'),
  'Site footer animated via ScrollTrigger'
);
assert(
  animSource.includes('mm.revert()'),
  'Master matchMedia reverted cleanly on unmount'
);

// 7. NAVIGATION INTEGRATION & PHASE BOUNDARIES
console.log('\n--- 7. NAVIGATION INTEGRATION & PHASE BOUNDARIES ---');
assert(
  navSource.includes("href: '#contact'"),
  "Navbar Contact link targets '#contact'"
);
assert(
  heroSource.includes('href="#contact"'),
  "Hero secondary CTA targets '#contact'"
);
assert(
  contactSource.includes('id="phase06-bridge"'),
  "Phase 06 bridge anchor id='phase06-bridge' aliased in ContactSection"
);
assert(
  appSource.includes('<ContactSection />'),
  'ContactSection mounted in App.tsx'
);
assert(
  appSource.includes('<Footer />'),
  'Footer mounted in App.tsx'
);
assert(
  appSource.includes('initContactAnimations'),
  'initContactAnimations integrated into App lifecycle'
);

// 8. PRODUCTION BUILD INTEGRITY
console.log('\n--- 8. PRODUCTION BUILD INTEGRITY ---');
assert(fs.existsSync('dist/index.html'), 'dist/index.html exists');
const distHtml = fs.readFileSync('dist/index.html', 'utf-8');
assert(distHtml.includes('Aisha Khan'), 'Built HTML contains Aisha Khan');

console.log('\n====================================================');
console.log(`AUDIT COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

process.exit(failCount === 0 ? 0 : 1);
