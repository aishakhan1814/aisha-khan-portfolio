import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ProjectsAnimationCleanup {
  revert: () => void;
}

export function initProjectsAnimations(): ProjectsAnimationCleanup {
  const mm = gsap.matchMedia();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    gsap.set(
      [
        '#projects-header',
        '#project-sentriq',
        '#project-rakshai',
        '#project-ontology',
      ],
      { opacity: 1, y: 0, x: 0, scale: 1 }
    );
    gsap.set('.sentriq-svg-conduit', { strokeDashoffset: 0 });
    gsap.set('#rakshai-turnaround-bar', { width: '16.6%' });
    gsap.set(['#cbom-node', '#quants-node', '#pqc-node-kem', '#pqc-node-dsa'], { opacity: 1, scale: 1 });
    return { revert: () => {} };
  }

  // Desktop & Laptop Animation Architecture (min-width: 1024px)
  mm.add('(min-width: 1024px)', () => {
    // 1. Projects Section Header Reveal
    gsap.fromTo(
      '#projects-header',
      { opacity: 0, y: 35 },
      {
        scrollTrigger: {
          trigger: '#projects-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    // 2. Project 01: SENTRIQ
    gsap.fromTo(
      '#project-sentriq',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#project-sentriq',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    // SENTRIQ: Progressive Pipeline Assembly scrub
    const sentriqTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#project-sentriq',
        start: 'top 75%',
        end: 'bottom 60%',
        scrub: 1,
      },
    });

    sentriqTl
      .fromTo(
        '.sentriq-svg-conduit',
        { strokeDashoffset: 300 },
        { strokeDashoffset: 0, duration: 1.5, ease: 'none', stagger: 0.2 }
      )
      .fromTo(
        '#cbom-node',
        { scale: 0.85, opacity: 0.4 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=1.0'
      )
      .fromTo(
        '#quants-node',
        { scale: 0.85, opacity: 0.4 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(
        ['#pqc-node-kem', '#pqc-node-dsa'],
        { opacity: 0.3, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
        '-=0.4'
      );

    // 3. Project 02: RakshAI
    gsap.fromTo(
      '#project-rakshai',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#project-rakshai',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    // RakshAI: Turnaround Delta Beam Scrub (100% baseline -> 16.6% <4h speedup)
    gsap.fromTo(
      '#rakshai-turnaround-bar',
      { width: '100%' },
      {
        scrollTrigger: {
          trigger: '#project-rakshai',
          start: 'top 70%',
          end: 'center 45%',
          scrub: 1.2,
        },
        width: '16.6%',
        ease: 'power2.out',
      }
    );

    // 4. Project 03: Ontology
    gsap.fromTo(
      '#project-ontology',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#project-ontology',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );
  });

  // Mobile & Tablet Breakpoints (max-width: 1023px)
  mm.add('(max-width: 1023px)', () => {
    ['#projects-header', '#project-sentriq', '#project-rakshai', '#project-ontology'].forEach((id) => {
      gsap.fromTo(
        id,
        { opacity: 0, y: 25 },
        {
          scrollTrigger: {
            trigger: id,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        }
      );
    });

    // Mobile Turnaround scrub
    gsap.fromTo(
      '#rakshai-turnaround-bar',
      { width: '100%' },
      {
        scrollTrigger: {
          trigger: '#project-rakshai',
          start: 'top 80%',
          end: 'center 50%',
          scrub: 1,
        },
        width: '16.6%',
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
