import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface NarrativeAnimationCleanup {
  revert: () => void;
}

/**
 * Dedicated Narrative Section Animation Architecture (Phase 02)
 * Encapsulates:
 * 1. Central Positioning Pull-Quote Reveal
 * 2. Personal Introduction Editorial Stagger (Two-column layout)
 * 3. The Engineering Mindset Ledger Scroll Progression (4 distinct tenets)
 * 4. 5-Stage Engineering Lifecycle (UNDERSTAND → IMPROVE) Circuit Scrub
 *
 * Designed to seamlessly connect with heroAnimation and projectsAnimation without duplicate triggers.
 */
export function initNarrativeAnimations(): NarrativeAnimationCleanup {
  const mm = gsap.matchMedia();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Immediate static layout for accessibility
    gsap.set(
      [
        '#central-positioning-box',
        '#intro-sidebar',
        '.intro-paragraph',
        '.mindset-row',
        '#process-progress-line',
        '.process-card',
      ],
      { opacity: 1, y: 0, x: 0, scaleX: 1, scale: 1 }
    );
    return { revert: () => {} };
  }

  // ---------------------------------------------------------------------------
  // DESKTOP & LAPTOP ANIMATION ARCHITECTURE (min-width: 1024px)
  // ---------------------------------------------------------------------------
  mm.add('(min-width: 1024px)', () => {
    // 1. Central Positioning Pull-Quote Reveal
    gsap.fromTo(
      '#central-positioning-box',
      { opacity: 0, y: 35, scale: 0.98 },
      {
        scrollTrigger: {
          trigger: '#central-positioning-box',
          start: 'top 85%',
          end: 'top 55%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    // 2. Personal Introduction Section (Two-Column Stagger)
    const personalIntroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#personal-intro-section',
        start: 'top 80%',
        end: 'top 45%',
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    personalIntroTl
      .fromTo(
        '#intro-sidebar',
        { opacity: 0, x: -35 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
      )
      .fromTo(
        '.intro-paragraph',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.25, ease: 'power3.out' },
        '-=0.3'
      );

    // 3. The Engineering Mindset Ledger (Scroll-linked row progression)
    gsap.utils.toArray<HTMLElement>('.mindset-row').forEach((row) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 35 },
        {
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    });

    // 4. 5-Stage Engineering Lifecycle (Interactive Circuit Line Scrub)
    const processTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#process-section',
        start: 'top 75%',
        end: 'bottom 85%',
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    // Animate the connecting circuit line drawing from 0% to 100%
    processTl.fromTo(
      '#process-progress-line',
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'none' },
      0
    );

    // Stagger illuminate process cards along the line
    processTl.fromTo(
      '.process-card',
      { opacity: 0.35, y: 25 },
      { opacity: 1, y: 0, stagger: 0.18, duration: 0.8, ease: 'power2.out' },
      0.1
    );
  });

  // ---------------------------------------------------------------------------
  // MOBILE & TABLET ANIMATION ARCHITECTURE (max-width: 1023px)
  // Reversible Scroll-Triggered Progressions without Screen Lock-Pinning
  // ---------------------------------------------------------------------------
  mm.add('(max-width: 1023px)', () => {
    // 1. Positioning Box
    gsap.fromTo(
      '#central-positioning-box',
      { opacity: 0, y: 25 },
      {
        scrollTrigger: {
          trigger: '#central-positioning-box',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
      }
    );

    // 2. Personal Introduction
    gsap.fromTo(
      ['#intro-sidebar', '.intro-paragraph'],
      { opacity: 0, y: 25 },
      {
        scrollTrigger: {
          trigger: '#personal-intro-section',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        stagger: 0.14,
        duration: 0.7,
        ease: 'power3.out',
      }
    );

    // 3. Engineering Mindset: Animate each row individually as it scrolls into view
    gsap.utils.toArray<HTMLElement>('.mindset-row').forEach((row) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 25 },
        {
          scrollTrigger: {
            trigger: row,
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        }
      );
    });

    // 4. Process Cards on Mobile/Tablet: Animate each card individually as it scrolls into view
    gsap.utils.toArray<HTMLElement>('.process-card').forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    });
  });

  return {
    revert: () => {
      mm.revert();
    },
  };
}
