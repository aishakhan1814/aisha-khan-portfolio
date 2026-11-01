import fs from 'fs';
import path from 'path';

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

console.log('====================================================');
console.log('  PHASE 07.1 FINAL APPROVED CORRECTIONS AUDIT SUITE ');
console.log('====================================================\n');

// 1. PUBLIC CONTACT EMAIL AUDIT
console.log('--- 1. PUBLIC CONTACT EMAIL CONSISTENCY ---');
const contactSection = fs.readFileSync('src/components/ContactSection.tsx', 'utf-8');
const footer = fs.readFileSync('src/components/Footer.tsx', 'utf-8');

assert(contactSection.includes('alfalima920@gmail.com'), 'ContactSection contains confirmed email alfalima920@gmail.com');
const hasDirectMailto = contactSection.includes('mailto:alfalima920@gmail.com') || 
  (contactSection.includes('mailto:${primaryEmail}') && contactSection.includes("const primaryEmail = 'alfalima920@gmail.com'"));
assert(hasDirectMailto, 'ContactSection contains direct mailto: link mapped to alfalima920@gmail.com');
assert(footer.includes('alfalima920@gmail.com'), 'Footer contains confirmed email alfalima920@gmail.com');
assert(footer.includes('mailto:alfalima920@gmail.com'), 'Footer contains direct mailto: link');

// Check no other emails exist in src
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const srcFiles = ['src/components/Hero.tsx', 'src/components/NarrativeSection.tsx', 'src/components/ProjectsSection.tsx', 'src/components/CapabilitiesSection.tsx', 'src/components/ImpactSection.tsx'];
let extraEmailFound = false;
for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const matches = content.match(emailRegex) || [];
  if (matches.length > 0) {
    extraEmailFound = true;
    console.error(`Unexpected email found in ${file}:`, matches);
  }
}
assert(!extraEmailFound, 'Zero unauthorized email addresses found across portfolio sections');

// 2. HTML HEAD & METADATA AUDIT
console.log('\n--- 2. HTML HEAD & METADATA AUDIT ---');
const indexHtml = fs.readFileSync('index.html', 'utf-8');

assert(!indexHtml.includes('scroll-smooth'), 'Native CSS scroll-smooth class removed from html element');
assert(indexHtml.includes('<html lang="en" class="dark">'), 'Html element has class="dark" without scroll-smooth');
assert(indexHtml.includes('property="og:type" content="website"'), 'Open Graph og:type tag present');
assert(indexHtml.includes('property="og:title"'), 'Open Graph og:title tag present');
assert(indexHtml.includes('property="og:description"'), 'Open Graph og:description tag present');
assert(indexHtml.includes('name="twitter:card" content="summary"'), 'Twitter Card twitter:card tag present');
assert(indexHtml.includes('name="twitter:title"'), 'Twitter Card twitter:title tag present');
assert(indexHtml.includes('name="twitter:description"'), 'Twitter Card twitter:description tag present');
assert(indexHtml.includes('name="theme-color" content="#080B12"'), 'Theme color meta tag set to #080B12');
assert(indexHtml.includes('rel="icon"'), 'Favicon link present');
assert(indexHtml.includes('family=JetBrains+Mono'), 'JetBrains Mono font imported');
assert(indexHtml.includes('family=Space+Grotesk'), 'Space Grotesk font imported');

// 3. LENIS & MODAL LIFECYCLE COORDINATION
console.log('\n--- 3. LENIS SMOOTH SCROLL & MODAL COORDINATION ---');
const useLenisContent = fs.readFileSync('src/hooks/useLenis.ts', 'utf-8');
const projectsSection = fs.readFileSync('src/components/ProjectsSection.tsx', 'utf-8');

assert(useLenisContent.includes("window.addEventListener('lenis:stop'"), 'useLenis handles lenis:stop window event');
assert(useLenisContent.includes("window.addEventListener('lenis:start'"), 'useLenis handles lenis:start window event');
assert(useLenisContent.includes("window.removeEventListener('lenis:stop'"), 'useLenis cleans up lenis:stop on unmount');
assert(useLenisContent.includes("window.removeEventListener('lenis:start'"), 'useLenis cleans up lenis:start on unmount');

assert(projectsSection.includes("window.dispatchEvent(new CustomEvent('lenis:stop'))"), 'Projects modal dispatches lenis:stop when opened');
assert(projectsSection.includes("window.dispatchEvent(new CustomEvent('lenis:start'))"), 'Projects modal dispatches lenis:start when closed/unmounted');

// 4. PUBLIC ASSETS & DIRECTORY AUDIT
console.log('\n--- 4. PUBLIC ASSETS & CRAWLER CONFIGURATION ---');
assert(fs.existsSync('public/robots.txt'), 'public/robots.txt exists');
const robotsContent = fs.readFileSync('public/robots.txt', 'utf-8');
assert(robotsContent.includes('User-agent: *'), 'robots.txt includes User-agent: *');
assert(robotsContent.includes('Allow: /'), 'robots.txt includes Allow: /');
assert(robotsContent.includes('[CONFIGURE_PRODUCTION_URL]'), 'robots.txt uses [CONFIGURE_PRODUCTION_URL] placeholder (no fake domain invented)');

assert(fs.existsSync('public/sitemap.xml'), 'public/sitemap.xml exists');
const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf-8');
assert(sitemapContent.includes('<urlset'), 'sitemap.xml has valid urlset root element');
assert(sitemapContent.includes('[CONFIGURE_PRODUCTION_URL]'), 'sitemap.xml uses [CONFIGURE_PRODUCTION_URL] placeholder (no fake domain invented)');

// 5. PRODUCTION BUILD & DISTRIBUTION ARTIFACTS
console.log('\n--- 5. PRODUCTION BUILD ARTIFACTS ---');
assert(fs.existsSync('dist/index.html'), 'dist/index.html exists');
assert(fs.existsSync('dist/robots.txt'), 'dist/robots.txt generated in dist root');
assert(fs.existsSync('dist/sitemap.xml'), 'dist/sitemap.xml generated in dist root');

const distHtml = fs.readFileSync('dist/index.html', 'utf-8');
assert(distHtml.includes('property="og:title"'), 'dist/index.html contains compiled Open Graph tags');
assert(distHtml.includes('name="twitter:card"'), 'dist/index.html contains compiled Twitter tags');
assert(!distHtml.includes('scroll-smooth'), 'dist/index.html does not contain scroll-smooth');

console.log('\n====================================================');
console.log(`PHASE 07.1 AUDIT COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================');

if (failCount > 0) {
  process.exit(1);
}
