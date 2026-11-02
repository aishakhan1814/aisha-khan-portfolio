import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const CustomCursor: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer; respect prefers-reduced-motion
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);
    const follower = followerRef.current;
    if (!follower) return;

    gsap.set(follower, { xPercent: -50, yPercent: -50, opacity: 0 });

    const setX = gsap.quickTo(follower, 'x', { duration: 0.25, ease: 'power2.out' });
    const setY = gsap.quickTo(follower, 'y', { duration: 0.25, ease: 'power2.out' });

    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to(follower, { opacity: 1, duration: 0.2 });
        isVisible = true;
      }
      setX(e.clientX);
      setY(e.clientY);
    };

    const onMouseLeave = () => {
      gsap.to(follower, { opacity: 0, duration: 0.2 });
      isVisible = false;
    };

    const onMouseEnter = () => {
      gsap.to(follower, { opacity: 1, duration: 0.2 });
      isVisible = true;
    };

    const onPointerOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button, [role="button"], input, select');
      if (target) {
        gsap.to(follower, {
          scale: 1.4,
          borderColor: 'rgba(59, 130, 246, 0.7)',
          backgroundColor: 'rgba(59, 130, 246, 0.08)',
          duration: 0.2,
        });
      } else {
        gsap.to(follower, {
          scale: 1,
          borderColor: 'rgba(59, 130, 246, 0.3)',
          backgroundColor: 'transparent',
          duration: 0.2,
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onPointerOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onPointerOver);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div
      ref={followerRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#3B82F6]/30 pointer-events-none z-[100] transition-colors duration-150"
    />
  );
};
