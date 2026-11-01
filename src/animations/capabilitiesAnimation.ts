import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface CapabilitiesAnimationCleanup {
  revert: () => void;
}

/**
 * Dedicated Technical Capabilities Animation Architecture (Phase 04)
 * Encapsulates:
 * 1. Section Header & Narrative Overview Reveal
 * 2. Interactive Control Bar (Filters & View Toggle) Stagger
 * 3. Domain Workspace & Architectural Matrix Entry
 * 4. Phase 05 Transition Bridge Reveal
 */
export function initCapabilitiesAnimations(): CapabilitiesAnimationCleanup {
  const mm = gsap.matchMedia();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Immediate static layout for accessibility
    gsap.set(
      [
        '#capabilities-header',
        '#capabilities-controls',
        '#capabilities-workbench',
        '#capabilities-matrix',
      ],
      { opacity: 1, y: 0, x: 0, scale: 1 }
    );
    return { revert: () => {} };
  }

  // ---------------------------------------------------------------------------
  // DESKTOP & LAPTOP ANIMATION ARCHITECTURE (min-width: 1024px)
  // ---------------------------------------------------------------------------
  mm.add('(min-width: 1024px)', () => {
    // 1. Header Reveal Timeline
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#capabilities-header',
        start: 'top 85%',
        end: 'top 50%',
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    headerTl
      .fromTo(
        '#capabilities-header .mono-label',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      )
      .fromTo(
        '#capabilities-header h2 span',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '#capabilities-header p',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );

    // 2. Interactive Controls Bar Reveal
    gsap.fromTo(
      '#capabilities-controls',
      { opacity: 0, y: 25 },
      {
        scrollTrigger: {
          trigger: '#capabilities-controls',
          start: 'top 85%',
          end: 'top 65%',
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }
    );

    // 3. Domain Workbench Cards Reveal
    gsap.fromTo(
      '#capabilities-workbench',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#capabilities-workbench',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );
  });

  // ---------------------------------------------------------------------------
  // MOBILE & TABLET ANIMATION ARCHITECTURE (max-width: 1023px)
  // Reversible Scroll-Triggered Progressions without Lock-Pinning
  // ---------------------------------------------------------------------------
  mm.add('(max-width: 1023px)', () => {
    // 1. Capabilities Section Header
    gsap.fromTo(
      '#capabilities-header',
      { opacity: 0, y: 25 },
      {
        scrollTrigger: {
          trigger: '#capabilities-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      }
    );

    // 2. Controls Bar
    gsap.fromTo(
      '#capabilities-controls',
      { opacity: 0, y: 20 },
      {
        scrollTrigger: {
          trigger: '#capabilities-controls',
          start: 'top 88%',
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }
    );

    // 3. Workbench
    gsap.fromTo(
      '#capabilities-workbench',
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: '#capabilities-workbench',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }
    );
  });

  return {
    revert: () => {
      mm.revert();
    },
  };
}
