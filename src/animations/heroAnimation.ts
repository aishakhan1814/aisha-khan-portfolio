import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface HeroAnimationCleanup {
  revert: () => void;
}

/**
 * Dedicated Master Hero Animation Architecture
 * Encapsulates:
 * 1. Initial Page Load Entrance Timeline (Desktop & Mobile)
 * 2. Scroll-Driven Hero Pinned Scrub Sequence
 * 3. Multi-layer Parallax & 3D Orbital Dynamics
 * 4. Decoupled Mouse Parallax Physics
 * 5. Continuous Handoff into Section 01
 */
export function initHeroAnimations(): HeroAnimationCleanup {
  // Use gsap.matchMedia for fully responsive, breakpoint-aware motion logic
  const mm = gsap.matchMedia();

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Graceful fallback: immediate display without motion
    gsap.set(
      [
        '#hero-ambient-light-1',
        '#hero-ambient-light-2',
        '#main-nav',
        '#hero-eyebrow',
        '.headline-line',
        '#hero-description',
        '#hero-cta',
        '#hero-visual-wrapper',
        '#hero-scroll-indicator',
        '#approach-label',
        '#approach-headline',
        '#approach-subtext',
      ],
      { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }
    );
    return { revert: () => {} };
  }

  // ---------------------------------------------------------------------------
  // DESKTOP & TABLET ANIMATION ARCHITECTURE (min-width: 768px)
  // ---------------------------------------------------------------------------
  mm.add('(min-width: 768px)', () => {
    // A. INITIAL ENTRANCE TIMELINE
    const entranceTl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.15,
    });

    // 1. Background atmospheric light fades in
    entranceTl
      .fromTo(
        ['#hero-ambient-light-1', '#hero-ambient-light-2'],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
      )
      // 2. Navigation enters with a slight vertical reveal
      .fromTo(
        '#main-nav',
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' },
        '-=1.2'
      )
      // 3. Eyebrow appears
      .fromTo(
        '#hero-eyebrow',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.8'
      )
      // 4. Main headline reveals line by line
      .fromTo(
        '.headline-line',
        { yPercent: 125, rotateX: -20, opacity: 0 },
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.14,
          ease: 'power4.out',
        },
        '-=0.6'
      )
      // 5. Supporting paragraph enters
      .fromTo(
        '#hero-description',
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
        '-=0.7'
      )
      // 6. CTA buttons appear with stagger
      .fromTo(
        '#hero-cta',
        { y: 18, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      // 7. Orbital geometry gradually becomes visible with 3D rotation
      .fromTo(
        '#hero-visual-wrapper',
        { opacity: 0, scale: 0.82, rotateZ: -15, rotateX: 18 },
        { opacity: 1, scale: 1, rotateZ: 0, rotateX: 0, duration: 1.4, ease: 'power3.out' },
        '-=1.2'
      )
      // Scroll indicator enters
      .fromTo(
        '#hero-scroll-indicator',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.5'
      );

    // Continuous subtle background rotation for ambient orbital rings
    const ambientOrbitSpin = gsap.to('#orbital-ring-outer', {
      rotate: 360,
      duration: 120,
      repeat: -1,
      ease: 'none',
    });

    // B. SCROLL-DRIVEN HERO TIMELINE (PINNED SCRUB)
    // Pins hero section and orchestrates transformation across 160% viewport distance
    const scrollHeroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: '+=160%',
        pin: true,
        pinSpacing: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Phase 1: Scroll indicator vanishes immediately
    scrollHeroTl.to(
      '#hero-scroll-indicator',
      {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: 'power2.in',
      },
      0
    );

    // Phase 2: Eyebrow, Supporting copy and CTAs fade & elevate
    scrollHeroTl.to(
      ['#hero-eyebrow', '#hero-description', '#hero-cta'],
      {
        opacity: 0,
        y: -50,
        stagger: 0.05,
        duration: 0.45,
        ease: 'power1.out',
      },
      0.05
    );

    // Phase 3: Headline scales down, tracks backward in 3D perspective and fades cleanly to 0
    scrollHeroTl.to(
      '#hero-headline-wrapper',
      {
        yPercent: -45,
        scale: 0.84,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.85,
        ease: 'power2.inOut',
      },
      0.1
    );

    // Phase 4: Orbital Geometry expands, rotates into 3D, and softly dissolves
    scrollHeroTl.to(
      '#hero-visual-wrapper',
      {
        xPercent: -35,
        yPercent: -5,
        scale: 1.45,
        rotateZ: 70,
        rotateX: 35,
        rotateY: -25,
        opacity: 0.08,
        duration: 0.9,
        ease: 'power2.inOut',
      },
      0.05
    );

    // Dynamic Parallax Scrubbing on individual SVG layers inside the orbital system
    scrollHeroTl.to(
      '#orbital-ring-a',
      {
        rotate: -90,
        scale: 1.15,
        duration: 0.85,
        ease: 'none',
      },
      0
    );

    scrollHeroTl.to(
      '#orbital-ring-b',
      {
        rotate: 110,
        scale: 1.2,
        duration: 0.85,
        ease: 'none',
      },
      0
    );

    scrollHeroTl.to(
      '#orbital-ring-mid',
      {
        rotate: -45,
        scale: 1.1,
        duration: 0.85,
        ease: 'none',
      },
      0
    );

    scrollHeroTl.to(
      '#orbital-nodes',
      {
        rotate: 80,
        scale: 1.25,
        duration: 0.85,
        ease: 'none',
      },
      0
    );

    scrollHeroTl.to(
      '#orbital-core',
      {
        scale: 1.6,
        opacity: 0.7,
        duration: 0.85,
        ease: 'none',
      },
      0
    );

    // Phase 5: Atmospheric lighting shift
    scrollHeroTl.to(
      '#hero-ambient-light-1',
      {
        xPercent: -25,
        yPercent: 40,
        scale: 1.3,
        opacity: 0.25,
        duration: 0.85,
        ease: 'power1.out',
      },
      0.1
    );

    scrollHeroTl.to(
      '#hero-ambient-light-2',
      {
        xPercent: 30,
        yPercent: -20,
        scale: 1.4,
        opacity: 0.4,
        duration: 0.85,
        ease: 'power1.out',
      },
      0.1
    );

    // C. MOUSE PARALLAX ON HERO (DECOUPLED INNER TARGETS)
    // By targeting #orbital-svg and #hero-headline-inner, mouse parallax never interferes with
    // ScrollTrigger's outer transforms on #hero-visual-wrapper and #hero-headline-wrapper.
    const heroSection = document.getElementById('hero-section');
    let mouseParallaxClean: (() => void) | null = null;

    if (heroSection) {
      const orbitalSvg = document.getElementById('orbital-svg');
      const headlineInner = document.getElementById('hero-headline-inner');
      const ambientLight1 = document.getElementById('hero-ambient-light-1');

      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const normX = (clientX - centerX) / centerX;
        const normY = (clientY - centerY) / centerY;

        if (orbitalSvg) {
          gsap.to(orbitalSvg, {
            x: normX * 22,
            y: normY * 18,
            duration: 1.2,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }

        if (headlineInner) {
          gsap.to(headlineInner, {
            x: -normX * 10,
            y: -normY * 8,
            duration: 1.2,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }

        if (ambientLight1) {
          gsap.to(ambientLight1, {
            x: normX * 35,
            y: normY * 25,
            duration: 2.0,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      };

      heroSection.addEventListener('mousemove', onMouseMove, { passive: true });
      mouseParallaxClean = () => heroSection.removeEventListener('mousemove', onMouseMove);
    }

    // D. CONTINUOUS HANDOFF: SECTION 01 / THE APPROACH ENTRANCE
    const approachTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#approach-section',
        start: 'top 85%',
        end: 'top 30%',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    approachTl
      .fromTo(
        '#approach-label',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      )
      .fromTo(
        '#approach-headline',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo(
        '#approach-subtext',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );

    return () => {
      ambientOrbitSpin.kill();
      if (mouseParallaxClean) mouseParallaxClean();
    };
  });

  // ---------------------------------------------------------------------------
  // MOBILE ANIMATION ARCHITECTURE (max-width: 767px)
  // ---------------------------------------------------------------------------
  mm.add('(max-width: 767px)', () => {
    // Lightweight, performant entrance timeline with explicit fromTo values
    const mobileEntranceTl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.1,
    });

    mobileEntranceTl
      .fromTo(
        ['#hero-ambient-light-1', '#hero-ambient-light-2'],
        { opacity: 0 },
        { opacity: 0.7, duration: 1.0 }
      )
      .fromTo(
        '#main-nav',
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.8'
      )
      .fromTo(
        '#hero-eyebrow',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.5'
      )
      .fromTo(
        '.headline-line',
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      .fromTo(
        '#hero-description',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '#hero-cta',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '#hero-visual-wrapper',
        { opacity: 0, scale: 0.85 },
        { opacity: 0.35, scale: 0.95, duration: 1.0 },
        '-=0.6'
      )
      .fromTo(
        '#hero-scroll-indicator',
        { opacity: 0, y: 10 },
        { opacity: 0.8, y: 0, duration: 0.5 },
        '-=0.3'
      );

    // Smooth mobile scroll parallax without lock-pinning to preserve touch scroll momentum
    gsap.to('#hero-visual-wrapper', {
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 90,
      rotateZ: 35,
      scale: 1.1,
      opacity: 0.1,
      ease: 'none',
    });

    gsap.to('#hero-headline-wrapper', {
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: 'center top',
        scrub: 1,
      },
      y: -30,
      opacity: 0.2,
      ease: 'none',
    });

    // Mobile Section 01 reveal
    gsap.from(['#approach-label', '#approach-headline', '#approach-subtext'], {
      scrollTrigger: {
        trigger: '#approach-section',
        start: 'top 80%',
      },
      y: 25,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
    });
  });

  return {
    revert: () => {
      mm.revert();
    },
  };
}
