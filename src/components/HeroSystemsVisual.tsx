import React, { useEffect, useRef } from 'react';

interface HeroSystemsVisualProps {
  className?: string;
}

export const HeroSystemsVisual: React.FC<HeroSystemsVisualProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 20; // Subtle tilt degree
      mouseY = y * -20;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const animate = () => {
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;

      const visualGroup = container.querySelector('#interactive-visual-group') as HTMLElement | null;
      if (visualGroup) {
        visualGroup.style.transform = `perspective(1000px) rotateY(${currentX}deg) rotateX(${currentY}deg)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-systems-visual"
      className={`relative w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] lg:w-[620px] lg:h-[620px] pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-[#7C9EFF]/10 via-[#38BDF8]/10 to-transparent blur-[80px]" />

      <div
        id="interactive-visual-group"
        className="w-full h-full transition-transform ease-out duration-75 transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="nexusLine1" x1="120" y1="180" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7C9EFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="nexusLine2" x1="480" y1="200" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7C9EFF" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="nexusLine3" x1="300" y1="480" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7C9EFF" stopOpacity="0.2" />
            </linearGradient>

            {/* Glowing filter */}
            <filter id="systemsGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Concentric Topology Rings */}
          <circle cx="300" cy="300" r="260" stroke="rgba(124, 158, 255, 0.08)" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="300" cy="300" r="190" stroke="rgba(124, 158, 255, 0.12)" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="300" cy="300" r="120" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="1" />

          {/* Interconnecting Optical Bus Lines */}
          <line x1="120" y1="180" x2="300" y2="300" stroke="url(#nexusLine1)" strokeWidth="1.5" />
          <line x1="480" y1="200" x2="300" y2="300" stroke="url(#nexusLine2)" strokeWidth="1.5" />
          <line x1="300" y1="480" x2="300" y2="300" stroke="url(#nexusLine3)" strokeWidth="1.5" />

          {/* Secondary Domain Bridge Lines */}
          <line x1="120" y1="180" x2="480" y2="200" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="480" y1="200" x2="300" y2="480" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="300" y1="480" x2="120" y2="180" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="4 4" />

          {/* Animated Data Packets (SVG SMIL animation) */}
          <circle r="3.5" fill="#7C9EFF" filter="url(#systemsGlow)">
            <animateMotion path="M 120 180 L 300 300" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#34D399" filter="url(#systemsGlow)">
            <animateMotion path="M 480 200 L 300 300" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#A78BFA" filter="url(#systemsGlow)">
            <animateMotion path="M 300 480 L 300 300" dur="2.8s" repeatCount="indefinite" />
          </circle>

          {/* Central Nexus Core (Intelligent Architecture Core) */}
          <g filter="url(#systemsGlow)">
            <circle cx="300" cy="300" r="32" fill="#080B12" stroke="#7C9EFF" strokeWidth="2" />
            <circle cx="300" cy="300" r="16" fill="#7C9EFF" fillOpacity="0.2" />
            <circle cx="300" cy="300" r="6" fill="#7C9EFF" />
          </g>
          <text x="300" y="348" textAnchor="middle" fill="#A5BDFF" fontFamily="monospace" fontSize="9" letterSpacing="2">
            INTELLIGENT CORE
          </text>

          {/* Domain Node 01: Post-Quantum Cryptography (SENTRIQ) */}
          <g transform="translate(120, 180)">
            <circle cx="0" cy="0" r="24" fill="#080B12" stroke="#7C9EFF" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="6" fill="#7C9EFF" />
            <text x="0" y="-32" textAnchor="middle" fill="#EEEEF2" fontFamily="monospace" fontSize="9" fontWeight="bold" letterSpacing="1">
              POST-QUANTUM CRYPTO
            </text>
            <text x="0" y="-20" textAnchor="middle" fill="#7C9EFF" fontFamily="monospace" fontSize="8" letterSpacing="1">
              SENTRIQ // CBOM
            </text>
          </g>

          {/* Domain Node 02: Healthcare & Care Coordination (RakshAI) */}
          <g transform="translate(480, 200)">
            <circle cx="0" cy="0" r="24" fill="#080B12" stroke="#34D399" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="6" fill="#34D399" />
            <text x="0" y="-32" textAnchor="middle" fill="#EEEEF2" fontFamily="monospace" fontSize="9" fontWeight="bold" letterSpacing="1">
              CARE COORDINATION
            </text>
            <text x="0" y="-20" textAnchor="middle" fill="#34D399" fontFamily="monospace" fontSize="8" letterSpacing="1">
              RakshAI // RAG
            </text>
          </g>

          {/* Domain Node 03: Security Knowledge Representation (Ontology) */}
          <g transform="translate(300, 480)">
            <circle cx="0" cy="0" r="24" fill="#080B12" stroke="#A78BFA" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="6" fill="#A78BFA" />
            <text x="0" y="40" textAnchor="middle" fill="#EEEEF2" fontFamily="monospace" fontSize="9" fontWeight="bold" letterSpacing="1">
              KNOWLEDGE GRAPHS
            </text>
            <text x="0" y="52" textAnchor="middle" fill="#A78BFA" fontFamily="monospace" fontSize="8" letterSpacing="1">
              OWL/RDF // 13:15:38
            </text>
          </g>

          {/* Subtle Coordinate Axis Ticks */}
          <path d="M 50 300 H 70 M 530 300 H 550 M 300 50 V 70 M 300 530 V 550" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};
