import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface HeroAnimationCleanup {
  revert: () => void;
}

export function initHeroAnimations(): HeroAnimationCleanup {
  const mm = gsap.matchMedia();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    gsap.set(
      [
        '#hero-ambient-light-1',
        '#hero-ambient-light-2',
        '#main-nav',
        '#hero-eyebrow',
        '#hero-headline-wrapper',
        '#hero-description',
        '#hero-cta',
        '#hero-visual-wrapper',
        '#hero-scroll-indicator',
        '#hero-core-system',
        '#hero-branch-crypto',
        '#hero-branch-care',
        '#hero-branch-security',
      ],
      { opacity: 1, y: 0, scale: 1 }
    );
    return { revert: () => {} };
  }

  // Desktop & Tablet Animation Architecture (min-width: 768px)
  mm.add('(min-width: 768px)', () => {
    const entranceTl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.1,
    });

    entranceTl
      .fromTo(
        ['#hero-ambient-light-1', '#hero-ambient-light-2'],
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
      )
      .fromTo(
        '#main-nav',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=1.0'
      )
      .fromTo(
        '#hero-eyebrow',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.7'
      )
      .fromTo(
        '#hero-headline-wrapper h1',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out' },
        '-=0.6'
      )
      .fromTo(
        '#hero-description',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        '#hero-cta',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '#hero-visual-wrapper',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out' },
        '-=0.9'
      )
      .fromTo(
        '#hero-core-system',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.4)' },
        '-=0.8'
      )
      .fromTo(
        ['#hero-branch-crypto', '#hero-branch-care', '#hero-branch-security'],
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(
        '#hero-scroll-indicator',
        { opacity: 0 },
        { opacity: 0.8, duration: 0.6 },
        '-=0.3'
      );

    // Hero scrubbed scroll exit — layered cinematic depth
    gsap.to('#hero-headline-wrapper', {
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      yPercent: -35,
      opacity: 0.4,
      ease: 'none',
    });

    gsap.to('#hero-visual-wrapper', {
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      scale: 1.15,
      rotation: -15,
      opacity: 0.15,
      ease: 'none',
    });
  });

  // Mobile Animation Architecture (max-width: 767px)
  mm.add('(max-width: 767px)', () => {
    const mobileTl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.1,
    });

    mobileTl
      .fromTo('#hero-eyebrow', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo('#hero-headline-wrapper h1', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
      .fromTo('#hero-description', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo('#hero-cta', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
      .fromTo('#hero-visual-wrapper', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.4');
  });

  return {
    revert: () => {
      mm.revert();
    },
  };
}
