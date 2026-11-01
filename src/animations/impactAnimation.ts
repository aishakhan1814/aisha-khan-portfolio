import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ImpactAnimationCleanup {
  revert: () => void;
}

/**
 * Dedicated Impact, Leadership & Recognition Animation Architecture (Phase 05)
 * Encapsulates:
 * 1. Section Master Header Reveal
 * 2. Chapter 01 (Recognition & Hackathons) Entrance
 * 3. Chapter 02 (Leadership & Mentorship) Cards Stagger
 * 4. Chapter 03 (Community Impact & Spondana) Feature Reveal
 * 5. Chapter 04 (Problem Solving 450+ LeetCode) Numerical Scale Reveal
 * 6. Chapter 05 (Education & Scholarships) Dual-Column Progression
 * 7. Phase 06 Transition Bridge Reveal
 */
export function initImpactAnimations(): ImpactAnimationCleanup {
  const mm = gsap.matchMedia();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Immediate static layout for accessibility
    gsap.set(
      [
        '#impact-header',
        '#chapter-recognition',
        '#chapter-leadership',
        '#chapter-community',
        '#chapter-problem-solving',
        '#chapter-education',
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
        trigger: '#impact-header',
        start: 'top 85%',
        end: 'top 50%',
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    headerTl
      .fromTo(
        '#impact-header .mono-label',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      )
      .fromTo(
        '#impact-header h2 span',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '#impact-header p',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );

    // 2. Chapter 01: Recognition & Hackathons
    gsap.fromTo(
      '#chapter-recognition',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#chapter-recognition',
          start: 'top 80%',
          end: 'top 45%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    // 3. Chapter 02: Leadership Cards
    gsap.fromTo(
      '#chapter-leadership',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#chapter-leadership',
          start: 'top 80%',
          end: 'top 45%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    // 4. Chapter 03: Community Impact (Spondana & CosmoCon)
    gsap.fromTo(
      '#chapter-community',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#chapter-community',
          start: 'top 80%',
          end: 'top 45%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    // 5. Chapter 04: Problem Solving (450+ LeetCode)
    gsap.fromTo(
      '#chapter-problem-solving',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#chapter-problem-solving',
          start: 'top 80%',
          end: 'top 45%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    // 6. Chapter 05: Education & Scholarships
    gsap.fromTo(
      '#chapter-education',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#chapter-education',
          start: 'top 80%',
          end: 'top 45%',
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
    [
      '#impact-header',
      '#chapter-recognition',
      '#chapter-leadership',
      '#chapter-community',
      '#chapter-problem-solving',
      '#chapter-education',
    ].forEach((id) => {
      gsap.fromTo(
        id,
        { opacity: 0, y: 25 },
        {
          scrollTrigger: {
            trigger: id,
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
  });

  return {
    revert: () => {
      mm.revert();
    },
  };
}
