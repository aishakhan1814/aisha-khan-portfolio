import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ProjectsAnimationCleanup {
  revert: () => void;
}

/**
 * Dedicated Selected Works Animation Architecture (Phase 03)
 * Encapsulates:
 * 1. Section Header & Narrative Intro Reveal
 * 2. Featured Project 01 (SENTRIQ) Entrance & Border Glow
 * 3. Project 02 (RakshAI) Data Flow & Evidence Stagger
 * 4. Project 03 (Ontology) & Project 04 (SigmaGPT) Paired Grid Progression
 * 5. Phase 04 Bridge Teaser Entrance
 */
export function initProjectsAnimations(): ProjectsAnimationCleanup {
  const mm = gsap.matchMedia();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Immediate static layout for accessibility
    gsap.set(
      [
        '#projects-header',
        '#project-sentriq',
        '#project-rakshai',
        '#project-ontology',
        '#project-sigmagpt',
      ],
      { opacity: 1, y: 0, x: 0, scale: 1 }
    );
    return { revert: () => {} };
  }

  // ---------------------------------------------------------------------------
  // DESKTOP & LAPTOP ANIMATION ARCHITECTURE (min-width: 1024px)
  // ---------------------------------------------------------------------------
  mm.add('(min-width: 1024px)', () => {
    // 1. Projects Section Header Reveal
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects-header',
        start: 'top 85%',
        end: 'top 50%',
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    headerTl
      .fromTo(
        '#projects-header .mono-label',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      )
      .fromTo(
        '#projects-header h2',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo(
        '#projects-header p',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );

    // 2. Project 01: SENTRIQ Featured Card Entrance
    gsap.fromTo(
      '#project-sentriq',
      { opacity: 0, y: 50, scale: 0.98 },
      {
        scrollTrigger: {
          trigger: '#project-sentriq',
          start: 'top 80%',
          end: 'top 45%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
      }
    );

    // 3. Project 02: RakshAI Entrance
    gsap.fromTo(
      '#project-rakshai',
      { opacity: 0, y: 45 },
      {
        scrollTrigger: {
          trigger: '#project-rakshai',
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

    // 4. Projects 03 & 04 (Ontology & SigmaGPT) Grid Entrance
    gsap.fromTo(
      ['#project-ontology', '#project-sigmagpt'],
      { opacity: 0, y: 45 },
      {
        scrollTrigger: {
          trigger: '#project-ontology',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
        opacity: 1,
        y: 0,
        stagger: 0.15,
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
    // 1. Projects Section Header
    gsap.fromTo(
      '#projects-header',
      { opacity: 0, y: 25 },
      {
        scrollTrigger: {
          trigger: '#projects-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      }
    );

    // 2. Project Cards on Mobile / Tablet
    ['#project-sentriq', '#project-rakshai', '#project-ontology', '#project-sigmagpt'].forEach((id) => {
      gsap.fromTo(
        id,
        { opacity: 0, y: 30 },
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
