import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ContactAnimationCleanup {
  revert: () => void;
}

/**
 * Dedicated Contact & Conversion Animation Architecture (Phase 06)
 * Encapsulates:
 * 1. Section Header Reveal (Eyebrow, Headline, Lead Paragraph)
 * 2. Contact Channels Card Reveal (Direct email & telemetry)
 * 3. Intent-Based Email Composer Card Reveal
 * 4. Site Footer Reveal
 */
export function initContactAnimations(): ContactAnimationCleanup {
  const mm = gsap.matchMedia();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Immediate static layout for accessibility
    gsap.set(
      [
        '#contact-header',
        '#contact-channels',
        '#contact-composer',
        '#site-footer',
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
        trigger: '#contact-header',
        start: 'top 85%',
        end: 'top 55%',
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    headerTl
      .fromTo(
        '#contact-header .mono-label',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      )
      .fromTo(
        '#contact-header h2 span',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '#contact-header p',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );

    // 2. Direct Channels Card
    gsap.fromTo(
      '#contact-channels',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#contact-channels',
          start: 'top 82%',
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

    // 3. Email Intent Composer Card
    gsap.fromTo(
      '#contact-composer',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#contact-composer',
          start: 'top 82%',
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

    // 4. Site Footer
    gsap.fromTo(
      '#site-footer',
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: '#site-footer',
          start: 'top 95%',
          end: 'bottom 100%',
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
      '#contact-header',
      '#contact-channels',
      '#contact-composer',
      '#site-footer',
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
