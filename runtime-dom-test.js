import { JSDOM } from 'jsdom';

console.log('===========================================================');
console.log('  RUNTIME DOM & ANIMATION AUDIT (PHASES 01, 02, 03, 04 & 05)');
console.log('===========================================================\n');

const htmlContent = `
<!DOCTYPE html>
<html>
<body>
  <div id="root">
    <header id="main-nav"></header>
    <main id="main-content">
      <section id="hero-section">
        <div id="hero-ambient-light-1"></div>
        <div id="hero-ambient-light-2"></div>
        <div id="hero-visual-wrapper">
          <div id="orbital-visual-container">
            <svg id="orbital-svg">
              <g id="orbital-ring-outer"></g>
              <g id="orbital-ring-a"></g>
              <g id="orbital-ring-b"></g>
              <g id="orbital-ring-mid"></g>
              <g id="orbital-nodes"></g>
              <g id="orbital-core"></g>
            </svg>
          </div>
        </div>
        <div id="hero-eyebrow"></div>
        <div id="hero-headline-wrapper">
          <div id="hero-headline-inner">
            <span class="headline-line">I BUILD</span>
            <span class="headline-line">INTELLIGENT</span>
            <span class="headline-line">SYSTEMS.</span>
          </div>
        </div>
        <div id="hero-description"></div>
        <div id="hero-cta"></div>
        <div id="hero-scroll-indicator"></div>
      </section>

      <article id="approach-section">
        <div id="approach-label"></div>
        <div id="approach-headline"></div>
        <div id="approach-subtext"></div>
        <div id="central-positioning-box"></div>

        <section id="personal-intro-section">
          <div id="intro-sidebar"></div>
          <div id="intro-narrative">
            <p class="intro-paragraph"></p>
            <p class="intro-paragraph"></p>
          </div>
        </section>

        <section id="engineering-mindset">
          <div class="mindset-row" id="mindset-item-0"></div>
          <div class="mindset-row" id="mindset-item-1"></div>
          <div class="mindset-row" id="mindset-item-2"></div>
          <div class="mindset-row" id="mindset-item-3"></div>
        </section>

        <section id="process-section">
          <div id="process-progress-line"></div>
          <div class="process-card" id="process-stage-0"></div>
          <div class="process-card" id="process-stage-1"></div>
          <div class="process-card" id="process-stage-2"></div>
          <div class="process-card" id="process-stage-3"></div>
          <div class="process-card" id="process-stage-4"></div>
        </section>
      </article>

      <section id="selected-works">
        <div id="projects-header">
          <span class="mono-label"></span>
          <h2></h2>
          <p></p>
        </div>
        <article id="project-sentriq"></article>
        <article id="project-rakshai"></article>
        <article id="project-ontology"></article>
        <article id="project-sigmagpt"></article>
      </section>

      <section id="technical-capabilities">
        <div id="capabilities-header">
          <span class="mono-label"></span>
          <h2>
            <span></span>
            <span></span>
          </h2>
          <p></p>
        </div>
        <div id="capabilities-controls"></div>
        <div id="capabilities-workbench"></div>
        <div id="capabilities-matrix"></div>
      </section>

      <section id="impact-recognition">
        <div id="impact-header">
          <span class="mono-label"></span>
          <h2>
            <span></span>
            <span></span>
          </h2>
          <p></p>
        </div>
        <div id="chapter-recognition"></div>
        <div id="chapter-leadership"></div>
        <div id="chapter-community"></div>
        <div id="chapter-problem-solving"></div>
        <div id="chapter-education"></div>
      </section>

      <section id="contact">
        <span id="phase06-bridge"></span>
        <div id="contact-header">
          <span class="mono-label"></span>
          <h2>
            <span></span>
            <span></span>
          </h2>
          <p></p>
        </div>
        <div id="contact-channels"></div>
        <div id="contact-composer"></div>
      </section>
    </main>

    <footer id="site-footer"></footer>
  </div>
</body>
</html>
`;

const dom = new JSDOM(htmlContent, {
  url: 'http://localhost:3000',
  pretendToBeVisual: true,
});

global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.SVGElement = dom.window.SVGElement;
global.Node = dom.window.Node;
global.getComputedStyle = dom.window.getComputedStyle.bind(dom.window);
global.requestAnimationFrame = dom.window.requestAnimationFrame || ((cb) => setTimeout(cb, 16));
global.cancelAnimationFrame = dom.window.cancelAnimationFrame || ((id) => clearTimeout(id));

// Mock matchMedia
global.window.matchMedia = (query) => {
  return {
    matches: query.includes('min-width') || query.includes('hover'),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  };
};

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

async function runAudit() {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger.js');
  gsap.registerPlugin(ScrollTrigger);

  const { initHeroAnimations } = await import('./src/animations/heroAnimation.ts');
  const { initNarrativeAnimations } = await import('./src/animations/narrativeAnimation.ts');
  const { initProjectsAnimations } = await import('./src/animations/projectsAnimation.ts');
  const { initCapabilitiesAnimations } = await import('./src/animations/capabilitiesAnimation.ts');
  const { initImpactAnimations } = await import('./src/animations/impactAnimation.ts');
  const { initContactAnimations } = await import('./src/animations/contactAnimation.ts');

  // TEST 1: ALL 6 PHASES INITIALIZATION
  console.log('--- TEST 1: DESKTOP ALL PIPELINES INSTANTIATION ---');
  const heroAnim = initHeroAnimations();
  const narrAnim = initNarrativeAnimations();
  const projAnim = initProjectsAnimations();
  const capAnim = initCapabilitiesAnimations();
  const impactAnim = initImpactAnimations();
  const contactAnim = initContactAnimations();

  assert(typeof heroAnim.revert === 'function', 'initHeroAnimations returned cleanup object with revert()');
  assert(typeof narrAnim.revert === 'function', 'initNarrativeAnimations returned cleanup object with revert()');
  assert(typeof projAnim.revert === 'function', 'initProjectsAnimations returned cleanup object with revert()');
  assert(typeof capAnim.revert === 'function', 'initCapabilitiesAnimations returned cleanup object with revert()');
  assert(typeof impactAnim.revert === 'function', 'initImpactAnimations returned cleanup object with revert()');
  assert(typeof contactAnim.revert === 'function', 'initContactAnimations returned cleanup object with revert()');

  const triggers = ScrollTrigger.getAll();
  assert(triggers.length >= 18, `Active ScrollTriggers registered across all sections: ${triggers.length}`);

  const impactHeaderTrigger = triggers.find(t => t.trigger && (t.trigger.id === 'impact-header' || t.trigger === document.getElementById('impact-header')));
  assert(!!impactHeaderTrigger, 'Impact Section Header ScrollTrigger registered');

  const contactHeaderTrigger = triggers.find(t => t.trigger && (t.trigger.id === 'contact-header' || t.trigger === document.getElementById('contact-header')));
  assert(!!contactHeaderTrigger, 'Contact Section Header ScrollTrigger registered');

  // TEST 2: CLEANUP & TEARDOWN
  console.log('\n--- TEST 2: LIFECYCLE MANAGEMENT & REVERT ---');
  heroAnim.revert();
  narrAnim.revert();
  projAnim.revert();
  capAnim.revert();
  impactAnim.revert();
  contactAnim.revert();
  const triggersAfterRevert = ScrollTrigger.getAll();
  assert(triggersAfterRevert.length === 0, `All ScrollTriggers killed after revert: count is ${triggersAfterRevert.length}`);

  // TEST 3: REDUCED MOTION PREFERENCE AUDIT
  console.log('\n--- TEST 3: ACCESSIBILITY PREFERS-REDUCED-MOTION ---');
  global.window.matchMedia = (query) => ({
    matches: query.includes('prefers-reduced-motion: reduce'),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });

  const reducedHeroAnim = initHeroAnimations();
  const reducedNarrAnim = initNarrativeAnimations();
  const reducedProjAnim = initProjectsAnimations();
  const reducedCapAnim = initCapabilitiesAnimations();
  const reducedImpactAnim = initImpactAnimations();
  const reducedContactAnim = initContactAnimations();

  const triggersReduced = ScrollTrigger.getAll();
  assert(triggersReduced.length === 0, 'Zero ScrollTriggers created under prefers-reduced-motion mode across all sections');

  reducedHeroAnim.revert();
  reducedNarrAnim.revert();
  reducedProjAnim.revert();
  reducedCapAnim.revert();
  reducedImpactAnim.revert();
  reducedContactAnim.revert();

  // TEST 4: MOBILE & TABLET MEDIA QUERY (max-width: 1023px)
  console.log('\n--- TEST 4: MOBILE & TABLET BREAKPOINT ARCHITECTURE ---');
  global.window.matchMedia = (query) => ({
    matches: query.includes('max-width: 1023px'),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });

  const mobileHeroAnim = initHeroAnimations();
  const mobileNarrAnim = initNarrativeAnimations();
  const mobileProjAnim = initProjectsAnimations();
  const mobileCapAnim = initCapabilitiesAnimations();
  const mobileImpactAnim = initImpactAnimations();
  const mobileContactAnim = initContactAnimations();

  const mobileTriggers = ScrollTrigger.getAll();
  assert(mobileTriggers.length >= 18, `Mobile ScrollTriggers active: ${mobileTriggers.length}`);

  const pinnedHero = mobileTriggers.find(t => t.pin && t.trigger && t.trigger.id === 'hero-section');
  assert(!pinnedHero, 'Hero pinning is DISABLED on mobile for smooth touch momentum');

  mobileHeroAnim.revert();
  mobileNarrAnim.revert();
  mobileProjAnim.revert();
  mobileCapAnim.revert();
  mobileImpactAnim.revert();
  mobileContactAnim.revert();
  assert(ScrollTrigger.getAll().length === 0, 'Mobile ScrollTriggers cleanly reverted to 0');

  console.log('\n===========================================================');
  console.log(`RUNTIME AUDIT: ${passCount} PASSED, ${failCount} FAILED`);
  console.log('===========================================================\n');

  process.exit(failCount === 0 ? 0 : 1);
}

runAudit().catch(err => {
  console.error('Audit execution error:', err);
  process.exit(1);
});
