import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // 1. Device and preference checks: desktop only, respect reduced motion
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const dot = dotRef.current;
    const follower = followerRef.current;
    if (!dot || !follower) return;

    // Set initial offscreen positions
    gsap.set([dot, follower], { xPercent: -50, yPercent: -50, opacity: 0 });

    // High performance GSAP quickTo setters
    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });
    const setFollowerX = gsap.quickTo(follower, 'x', { duration: 0.4, ease: 'power3.out' });
    const setFollowerY = gsap.quickTo(follower, 'y', { duration: 0.4, ease: 'power3.out' });

    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to([dot, follower], { opacity: 1, duration: 0.25 });
        isVisible = true;
      }
      setDotX(e.clientX);
      setDotY(e.clientY);
      setFollowerX(e.clientX);
      setFollowerY(e.clientY);
    };

    const onMouseLeave = () => {
      gsap.to([dot, follower], { opacity: 0, duration: 0.25 });
      isVisible = false;
    };

    const onMouseEnter = () => {
      gsap.to([dot, follower], { opacity: 1, duration: 0.25 });
      isVisible = true;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Magnetic interaction handler with static origin geometry capture
    const magneticElements = document.querySelectorAll<HTMLElement>('[data-magnetic]');
    const cleanups: (() => void)[] = [];

    magneticElements.forEach((el) => {
      const strength = parseFloat(el.getAttribute('data-magnetic-strength') || '0.35');
      let cachedRect: DOMRect | null = null;

      const handleElementMouseEnter = () => {
        // Capture pristine element bounding rect on entry before any transform shifts occur
        cachedRect = el.getBoundingClientRect();
      };

      const handleElementMouseMove = (e: MouseEvent) => {
        if (!cachedRect) {
          cachedRect = el.getBoundingClientRect();
        }
        const centerX = cachedRect.left + cachedRect.width / 2;
        const centerY = cachedRect.top + cachedRect.height / 2;
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        gsap.to(el, {
          x: deltaX,
          y: deltaY,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        // Snap follower subtly toward magnetic center
        gsap.to(follower, {
          scale: 1.45,
          borderColor: 'rgba(124, 158, 255, 0.85)',
          backgroundColor: 'rgba(124, 158, 255, 0.08)',
          duration: 0.25,
          overwrite: 'auto',
        });

        gsap.to(dot, {
          scale: 0.5,
          duration: 0.2,
          overwrite: 'auto',
        });
      };

      const handleElementMouseLeave = () => {
        cachedRect = null;
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
          overwrite: 'auto',
        });

        gsap.to(follower, {
          scale: 1,
          borderColor: 'rgba(124, 158, 255, 0.4)',
          backgroundColor: 'rgba(124, 158, 255, 0.03)',
          duration: 0.3,
          overwrite: 'auto',
        });

        gsap.to(dot, {
          scale: 1,
          duration: 0.2,
          overwrite: 'auto',
        });
      };

      el.addEventListener('mouseenter', handleElementMouseEnter);
      el.addEventListener('mousemove', handleElementMouseMove);
      el.addEventListener('mouseleave', handleElementMouseLeave);

      cleanups.push(() => {
        el.removeEventListener('mouseenter', handleElementMouseEnter);
        el.removeEventListener('mousemove', handleElementMouseMove);
        el.removeEventListener('mouseleave', handleElementMouseLeave);
      });
    });

    // General hover states for links and interactive targets without data-magnetic
    const onInteractiveEnter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button');
      if (target && !target.hasAttribute('data-magnetic')) {
        gsap.to(follower, {
          scale: 1.4,
          borderColor: 'rgba(124, 158, 255, 0.7)',
          backgroundColor: 'rgba(124, 158, 255, 0.05)',
          duration: 0.25,
        });
        gsap.to(dot, { scale: 0.6, duration: 0.2 });
      }
    };

    const onInteractiveLeave = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button');
      if (target && !target.hasAttribute('data-magnetic')) {
        gsap.to(follower, {
          scale: 1,
          borderColor: 'rgba(124, 158, 255, 0.4)',
          backgroundColor: 'rgba(124, 158, 255, 0.03)',
          duration: 0.25,
        });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      }
    };

    document.addEventListener('mouseover', onInteractiveEnter);
    document.addEventListener('mouseout', onInteractiveLeave);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onInteractiveEnter);
      document.removeEventListener('mouseout', onInteractiveLeave);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* Central Precision Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#7C9EFF] pointer-events-none z-[100] shadow-[0_0_10px_#7C9EFF]"
      />
      {/* Outer Subtle Follower Ring */}
      <div
        ref={followerRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#7C9EFF]/40 bg-[#7C9EFF]/[0.03] pointer-events-none z-[99] backdrop-blur-[1px] transition-colors duration-150"
      />
    </>
  );
};
