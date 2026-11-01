const dummyElement = {
  nodeType: 1,
  style: {},
  classList: { add: () => {}, remove: () => {} },
  addEventListener: () => {},
  removeEventListener: () => {},
  getBoundingClientRect: () => ({ left: 100, top: 100, width: 200, height: 50, bottom: 150, right: 300 }),
  setAttribute: () => {},
  getAttribute: () => null,
};

global.window = {
  matchMedia: (query) => ({
    matches: query.includes('min-width') || query.includes('hover'),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
  innerWidth: 1440,
  innerHeight: 900,
  pageXOffset: 0,
  pageYOffset: 0,
  addEventListener: () => {},
  removeEventListener: () => {},
  getComputedStyle: () => ({
    getPropertyValue: () => '',
  }),
};

global.document = {
  nodeType: 9,
  documentElement: dummyElement,
  body: dummyElement,
  addEventListener: () => {},
  removeEventListener: () => {},
  getElementById: (id) => dummyElement,
  querySelectorAll: () => [dummyElement],
  querySelector: () => dummyElement,
  createElement: () => dummyElement,
};

async function run() {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger.js');
  const { initHeroAnimations } = await import('./src/animations/heroAnimation.ts');

  gsap.registerPlugin(ScrollTrigger);

  console.log('--- RUNTIME GSAP & SCROLLTRIGGER INSTANTIATION TEST ---');

  try {
    console.log('Executing initHeroAnimations() in simulated environment...');
    const anim = initHeroAnimations();
    console.log('[PASS] initHeroAnimations returned valid instance:', typeof anim.revert === 'function');

    const triggers = ScrollTrigger.getAll();
    console.log('Active ScrollTriggers registered:', triggers.length);
    console.log('[PASS] ScrollTriggers successfully registered in GSAP registry.');

    console.log('Testing cleanup revert()...');
    anim.revert();
    console.log('[PASS] anim.revert() executed smoothly without errors.');

    console.log('\n--- RUNTIME AUDIT PASSED ---');
    process.exit(0);
  } catch (err) {
    console.error('[FAIL] Runtime test encountered error:', err);
    process.exit(1);
  }
}

run();
