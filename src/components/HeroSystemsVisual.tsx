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
      mouseX = x * 18; // Degrees of 3D tilt
      mouseY = y * -18;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const animate = () => {
      currentX += (mouseX - currentX) * 0.06;
      currentY += (mouseY - currentY) * 0.06;

      const visualGroup = container.querySelector('#hero-visual-3d-scene') as HTMLElement | null;
      if (visualGroup) {
        visualGroup.style.transform = `perspective(1100px) rotateY(${currentX}deg) rotateX(${currentY}deg)`;
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
      className={`relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] lg:w-[640px] lg:h-[640px] pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Deep Cobalt Ambient Radial Underglow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[#1D4ED8]/15 via-[#3B82F6]/10 to-transparent blur-[90px]" />

      {/* 3D Perspective Group */}
      <div
        id="hero-visual-3d-scene"
        className="w-full h-full transition-transform ease-out duration-75 transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg
          viewBox="0 0 640 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Blue & White Linear Conduits */}
            <linearGradient id="blueConduit1" x1="140" y1="190" x2="320" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="blueConduit2" x1="500" y1="210" x2="320" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="blueConduit3" x1="320" y1="510" x2="320" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>

            {/* Glowing Core Filter */}
            <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Subtle Node Filter */}
            <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* =========================================================================
              RADAR & TELEMETRY RETICLE GAUGES
              ========================================================================= */}
          {/* Outer Boundary Reticle */}
          <circle cx="320" cy="320" r="280" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.12" />
          <circle cx="320" cy="320" r="280" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 15" strokeOpacity="0.18" />

          {/* Degree Calibration Ticks */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 320 + Math.cos(rad) * 272;
            const y1 = 320 + Math.sin(rad) * 272;
            const x2 = 320 + Math.cos(rad) * 280;
            const y2 = 320 + Math.sin(rad) * 280;
            return (
              <g key={deg}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.4" />
              </g>
            );
          })}

          {/* Secondary Concentric Range Rings */}
          <circle cx="320" cy="320" r="210" stroke="#3B82F6" strokeWidth="1" strokeDasharray="6 8" strokeOpacity="0.15" />
          <circle cx="320" cy="320" r="140" stroke="#60A5FA" strokeWidth="1" strokeOpacity="0.18" />
          <circle cx="320" cy="320" r="70" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.25" />

          {/* Precision Alignment Crosshairs */}
          <line x1="320" y1="35" x2="320" y2="605" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.1" />
          <line x1="35" y1="320" x2="605" y2="320" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.1" />

          {/* Corner Coordinate HUD Readouts */}
          <text x="50" y="60" fill="#94A3B8" fontFamily="monospace" fontSize="9" letterSpacing="1">
            SYS.NEXUS // VERIFIED ARCHITECTURE
          </text>
          <text x="50" y="74" fill="#3B82F6" fontFamily="monospace" fontSize="8" letterSpacing="1">
            LAT 17.3850° N // LON 78.4867° E
          </text>
          <text x="590" y="60" textAnchor="end" fill="#94A3B8" fontFamily="monospace" fontSize="9" letterSpacing="1">
            TOPOLOGY // 3-TIER OPERATIONAL
          </text>
          <text x="590" y="74" textAnchor="end" fill="#60A5FA" fontFamily="monospace" fontSize="8" letterSpacing="1">
            STATUS: ACTIVE // METRICS NOMINAL
          </text>

          {/* =========================================================================
              INTERCONNECTING VECTOR LATTICE & HIGHWAY CONDUITS
              ========================================================================= */}
          {/* Peripheral Triangle Bus */}
          <polygon
            points="140,190 500,210 320,510"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1"
            strokeDasharray="4 6"
            strokeOpacity="0.2"
          />

          {/* Primary Radial Data Conduits to Center */}
          <line x1="140" y1="190" x2="320" y2="320" stroke="url(#blueConduit1)" strokeWidth="2" />
          <line x1="500" y1="210" x2="320" y2="320" stroke="url(#blueConduit2)" strokeWidth="2" />
          <line x1="320" y1="510" x2="320" y2="320" stroke="url(#blueConduit3)" strokeWidth="2" />

          {/* Secondary Telemetry Arcs */}
          <path d="M 140 190 Q 320 220 500 210" stroke="#60A5FA" strokeWidth="1" strokeOpacity="0.18" fill="none" />
          <path d="M 500 210 Q 420 380 320 510" stroke="#60A5FA" strokeWidth="1" strokeOpacity="0.18" fill="none" />
          <path d="M 320 510 Q 220 370 140 190" stroke="#60A5FA" strokeWidth="1" strokeOpacity="0.18" fill="none" />

          {/* Ambient Micro Data Satellite Nodes */}
          {[
            { cx: 210, cy: 150 },
            { cx: 430, cy: 160 },
            { cx: 530, cy: 330 },
            { cx: 400, cy: 450 },
            { cx: 230, cy: 440 },
            { cx: 120, cy: 330 },
          ].map((pt, i) => (
            <g key={i}>
              <circle cx={pt.cx} cy={pt.cy} r="3" fill="#06080F" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.5" />
              <line x1={pt.cx} y1={pt.cy} x2="320" y2="320" stroke="#3B82F6" strokeWidth="0.75" strokeDasharray="3 5" strokeOpacity="0.12" />
            </g>
          ))}

          {/* =========================================================================
              ANIMATED DATA PHOTONS (PULSES TRAVELING ALONG CONDUITS)
              ========================================================================= */}
          {/* Node 1 to Core */}
          <circle r="3.5" fill="#FFFFFF" filter="url(#nodeGlow)">
            <animateMotion path="M 140 190 L 320 320" dur="2.8s" repeatCount="indefinite" />
          </circle>
          {/* Core to Node 1 */}
          <circle r="3" fill="#60A5FA" filter="url(#nodeGlow)">
            <animateMotion path="M 320 320 L 140 190" dur="3.4s" repeatCount="indefinite" />
          </circle>

          {/* Node 2 to Core */}
          <circle r="3.5" fill="#FFFFFF" filter="url(#nodeGlow)">
            <animateMotion path="M 500 210 L 320 320" dur="2.4s" repeatCount="indefinite" />
          </circle>
          {/* Core to Node 2 */}
          <circle r="3" fill="#3B82F6" filter="url(#nodeGlow)">
            <animateMotion path="M 320 320 L 500 210" dur="3.1s" repeatCount="indefinite" />
          </circle>

          {/* Node 3 to Core */}
          <circle r="3.5" fill="#FFFFFF" filter="url(#nodeGlow)">
            <animateMotion path="M 320 510 L 320 320" dur="2.6s" repeatCount="indefinite" />
          </circle>
          {/* Core to Node 3 */}
          <circle r="3" fill="#93C5FD" filter="url(#nodeGlow)">
            <animateMotion path="M 320 320 L 320 510" dur="3.3s" repeatCount="indefinite" />
          </circle>

          {/* Perimeter Orbital Photons */}
          <circle r="2.5" fill="#60A5FA" filter="url(#nodeGlow)">
            <animateMotion path="M 140 190 L 500 210 L 320 510 Z" dur="7s" repeatCount="indefinite" />
          </circle>

          {/* =========================================================================
              NODE 01: POST-QUANTUM CRYPTOGRAPHIC DISCOVERY (SENTRIQ)
              ========================================================================= */}
          <g transform="translate(140, 190)" filter="url(#nodeGlow)">
            {/* Outer Hexagon / Shield Bracket */}
            <circle cx="0" cy="0" r="28" fill="#06080F" stroke="#3B82F6" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="24" fill="#0B0F19" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="7" fill="#3B82F6" />
            <circle cx="0" cy="0" r="3" fill="#FFFFFF" />

            {/* Labels */}
            <text x="0" y="-36" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="9" fontWeight="bold" letterSpacing="0.5">
              01 // SENTRIQ
            </text>
            <text x="0" y="-48" textAnchor="middle" fill="#60A5FA" fontFamily="monospace" fontSize="8" letterSpacing="1">
              POST-QUANTUM CRYPTO
            </text>
            <text x="0" y="42" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="8">
              CBOM 1.6 · NIST PQC
            </text>
          </g>

          {/* =========================================================================
              NODE 02: AI BLOOD LOGISTICS & TRIAGE (RAKSHAI)
              ========================================================================= */}
          <g transform="translate(500, 210)" filter="url(#nodeGlow)">
            {/* Outer Hexagon / Shield Bracket */}
            <circle cx="0" cy="0" r="28" fill="#06080F" stroke="#3B82F6" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="24" fill="#0B0F19" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="7" fill="#3B82F6" />
            <circle cx="0" cy="0" r="3" fill="#FFFFFF" />

            {/* Labels */}
            <text x="0" y="-36" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="9" fontWeight="bold" letterSpacing="0.5">
              02 // RAKSHAI
            </text>
            <text x="0" y="-48" textAnchor="middle" fill="#60A5FA" fontFamily="monospace" fontSize="8" letterSpacing="1">
              CARE COORDINATION
            </text>
            <text x="0" y="42" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="8">
              VECTOR RAG · &lt;4H PIPELINE
            </text>
          </g>

          {/* =========================================================================
              NODE 03: CYBERSECURITY BREACH ONTOLOGY
              ========================================================================= */}
          <g transform="translate(320, 510)" filter="url(#nodeGlow)">
            {/* Outer Hexagon / Shield Bracket */}
            <circle cx="0" cy="0" r="28" fill="#06080F" stroke="#3B82F6" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="24" fill="#0B0F19" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="7" fill="#3B82F6" />
            <circle cx="0" cy="0" r="3" fill="#FFFFFF" />

            {/* Labels */}
            <text x="0" y="-36" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="9" fontWeight="bold" letterSpacing="0.5">
              03 // CYBER ONTOLOGY
            </text>
            <text x="0" y="-48" textAnchor="middle" fill="#60A5FA" fontFamily="monospace" fontSize="8" letterSpacing="1">
              SEMANTIC KNOWLEDGE GRAPH
            </text>
            <text x="0" y="42" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="8">
              OWL/RDF · 38 AXIOMS
            </text>
          </g>

          {/* =========================================================================
              CENTRAL ARCHITECTURE CORE (INTELLIGENCE HUB)
              ========================================================================= */}
          <g transform="translate(320, 320)" filter="url(#coreGlow)">
            {/* Rotating Segmented Reticle */}
            <circle cx="0" cy="0" r="42" fill="#06080F" stroke="#3B82F6" strokeWidth="2" strokeDasharray="18 6" />
            <circle cx="0" cy="0" r="34" fill="#0B0F19" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.8" />
            
            {/* Glowing Core Halo */}
            <circle cx="0" cy="0" r="22" fill="#2563EB" fillOpacity="0.25" stroke="#3B82F6" strokeWidth="1" />
            <circle cx="0" cy="0" r="10" fill="#3B82F6" />
            <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

            {/* Central Core Label */}
            <text x="0" y="58" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="9" fontWeight="bold" letterSpacing="1.5">
              INTELLIGENT SYSTEMS CORE
            </text>
            <text x="0" y="70" textAnchor="middle" fill="#60A5FA" fontFamily="monospace" fontSize="7.5" letterSpacing="1">
              DETERMINISTIC COMPUTE
            </text>
          </g>

        </svg>
      </div>
    </div>
  );
};
