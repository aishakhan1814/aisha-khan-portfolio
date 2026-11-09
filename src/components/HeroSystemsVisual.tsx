import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Activity, Cpu, Sparkles } from 'lucide-react';

interface HeroSystemsVisualProps {
  className?: string;
}

export const HeroSystemsVisual: React.FC<HeroSystemsVisualProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 12; // Degrees of subtle 3D tilt
      mouseY = y * -12;
    };

    const targetEl = container;
    targetEl.addEventListener('mousemove', onMouseMove, { passive: true });

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      const visualGroup = container.querySelector('#hero-visual-3d-scene') as HTMLElement | null;
      if (visualGroup) {
        visualGroup.style.transform = `perspective(1000px) rotateY(${currentX}deg) rotateX(${currentY}deg)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      targetEl.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-systems-visual"
      className={`spotlight-card relative w-full max-w-[640px] rounded-2xl border border-white/20 bg-[#070D1E]/95 shadow-[0_0_60px_rgba(37,99,235,0.22)] p-4 sm:p-6 backdrop-blur-xl select-none ${className}`}
      aria-label="Intelligent Systems Network Architecture"
    >
      {/* Ambient Radial Underglow — Electric Cyan & Cobalt */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#1D4ED8]/25 via-[#06B6D4]/20 to-transparent blur-[80px] pointer-events-none" />

      {/* Top Telemetry Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-white/[0.1] mb-3 sm:mb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] shadow-[0_0_12px_#06B6D4] animate-pulse" />
          <span className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
            Intelligent Systems Network
          </span>
          <span className="text-[#64748B] hidden sm:inline">|</span>
          <span className="font-mono text-[11px] text-[#38BDF8] tracking-widest hidden sm:inline uppercase">
            Tri-Branch Architecture
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#3B82F6]/40 bg-[#3B82F6]/15 text-[#93C5FD] text-[11px] font-mono font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Deterministic Core</span>
        </div>
      </div>

      {/* 3D Perspective Visual Canvas */}
      <div
        id="hero-visual-3d-scene"
        className="relative z-10 w-full transition-transform ease-out duration-100 transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg
          viewBox="0 0 660 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
          <defs>
            {/* Branch Highway Linear Gradients */}
            <linearGradient id="branchCryptoGrad" x1="160" y1="110" x2="330" y2="260" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="branchCareGrad" x1="500" y1="110" x2="330" y2="260" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="branchSecGrad" x1="330" y1="410" x2="330" y2="260" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>

            {/* Glowing Core Filter */}
            <filter id="heroCoreGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Node Highlight Filter */}
            <filter id="heroNodeGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Deep Navy Canvas Card Backing */}
          <rect width="660" height="520" fill="#050A18" rx="14" />

          {/* Clean Orbital Guidance Ring */}
          <circle cx="330" cy="260" r="160" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 6" strokeOpacity="0.25" />
          <circle cx="330" cy="260" r="85" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />

          {/* =========================================================================
              MAIN RADIAL DATA HIGHWAYS (CONNECTING CORE TO 3 PROJECT BRANCHES)
              ========================================================================= */}
          {/* Branch 1 Highway (Crypto) */}
          <line
            x1="160"
            y1="110"
            x2="330"
            y2="260"
            stroke="url(#branchCryptoGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Branch 2 Highway (Care) */}
          <line
            x1="500"
            y1="110"
            x2="330"
            y2="260"
            stroke="url(#branchCareGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Branch 3 Highway (Security) */}
          <line
            x1="330"
            y1="410"
            x2="330"
            y2="260"
            stroke="url(#branchSecGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Inter-Branch Perimeter Mesh */}
          <polygon
            points="160,110 500,110 330,410"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            strokeOpacity="0.22"
          />

          {/* =========================================================================
              ANIMATED DATA PHOTONS (PULSES TRAVELING IN CONCURRENT REAL-TIME)
              ========================================================================= */}
          {/* Photon: Branch 1 <-> Core */}
          <circle r="4.5" fill="#FFFFFF" filter="url(#heroNodeGlow)">
            <animateMotion path="M 160 110 L 330 260" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#60A5FA" filter="url(#heroNodeGlow)">
            <animateMotion path="M 330 260 L 160 110" dur="3.0s" repeatCount="indefinite" />
          </circle>

          {/* Photon: Branch 2 <-> Core */}
          <circle r="4.5" fill="#FFFFFF" filter="url(#heroNodeGlow)">
            <animateMotion path="M 500 110 L 330 260" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#06B6D4" filter="url(#heroNodeGlow)">
            <animateMotion path="M 330 260 L 500 110" dur="2.8s" repeatCount="indefinite" />
          </circle>

          {/* Photon: Branch 3 <-> Core */}
          <circle r="4.5" fill="#FFFFFF" filter="url(#heroNodeGlow)">
            <animateMotion path="M 330 410 L 330 260" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#38BDF8" filter="url(#heroNodeGlow)">
            <animateMotion path="M 330 260 L 330 410" dur="3.2s" repeatCount="indefinite" />
          </circle>

          {/* =========================================================================
              BRANCH 01: CRYPTOGRAPHIC INTELLIGENCE (SENTRIQ)
              ========================================================================= */}
          <g id="hero-branch-crypto" transform="translate(160, 110)" className="cursor-pointer">
            {/* Hub Anchor Box */}
            <rect x="-110" y="-55" width="220" height="88" rx="12" fill="#0D162E" stroke="#3B82F6" strokeWidth="2.5" />
            <circle cx="-88" cy="-33" r="5" fill="#3B82F6" />
            <text x="-76" y="-29" fill="#38BDF8" fontFamily="monospace" fontSize="10.5" fontWeight="bold" letterSpacing="1">
              BRANCH 01 // SENTRIQ
            </text>
            <text x="-110" y="-7" dx="22" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" fontWeight="bold">
              Cryptographic Discovery
            </text>
            <text x="-110" y="12" dx="22" fill="#93C5FD" fontFamily="monospace" fontSize="9.5">
              AST Scan · CBOM 1.6 · Mosca (X+Y&gt;Z)
            </text>

            {/* Badges */}
            <g transform="translate(-100, 20)">
              <rect x="0" y="0" width="94" height="20" rx="4" fill="#070D1E" stroke="#3B82F6" strokeWidth="1" />
              <text x="47" y="14" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="9" fontWeight="bold">Repo Ingestion</text>
            </g>
            <g transform="translate(6, 20)">
              <rect x="0" y="0" width="94" height="20" rx="4" fill="#070D1E" stroke="#60A5FA" strokeWidth="1" />
              <text x="47" y="14" textAnchor="middle" fill="#38BDF8" fontFamily="monospace" fontSize="9" fontWeight="bold">NIST PQC Migration</text>
            </g>
          </g>

          {/* =========================================================================
              BRANCH 02: INTELLIGENT CARE LOGISTICS (RAKSHAI)
              ========================================================================= */}
          <g id="hero-branch-care" transform="translate(500, 110)" className="cursor-pointer">
            {/* Hub Anchor Box */}
            <rect x="-110" y="-55" width="220" height="88" rx="12" fill="#081E35" stroke="#06B6D4" strokeWidth="2.5" />
            <circle cx="-88" cy="-33" r="5" fill="#06B6D4" />
            <text x="-76" y="-29" fill="#38BDF8" fontFamily="monospace" fontSize="10.5" fontWeight="bold" letterSpacing="1">
              BRANCH 02 // RAKSHAI
            </text>
            <text x="-110" y="-7" dx="22" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" fontWeight="bold">
              Intelligent Care Triage
            </text>
            <text x="-110" y="12" dx="22" fill="#67E8F9" fontFamily="monospace" fontSize="9.5">
              ~7k Records · PCA Impute · &lt;4h Speedup
            </text>

            {/* Badges */}
            <g transform="translate(-100, 20)">
              <rect x="0" y="0" width="94" height="20" rx="4" fill="#070D1E" stroke="#06B6D4" strokeWidth="1" />
              <text x="47" y="14" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="9" fontWeight="bold">Hospital Telemetry</text>
            </g>
            <g transform="translate(6, 20)">
              <rect x="0" y="0" width="94" height="20" rx="4" fill="#070D1E" stroke="#38BDF8" strokeWidth="1" />
              <text x="47" y="14" textAnchor="middle" fill="#67E8F9" fontFamily="monospace" fontSize="9" fontWeight="bold">Vector RAG Flow</text>
            </g>
          </g>

          {/* =========================================================================
              BRANCH 03: SECURITY KNOWLEDGE GRAPH (CYBER ONTOLOGY)
              ========================================================================= */}
          <g id="hero-branch-security" transform="translate(330, 420)" className="cursor-pointer">
            {/* Hub Anchor Box */}
            <rect x="-135" y="-45" width="270" height="84" rx="12" fill="#0D162E" stroke="#60A5FA" strokeWidth="2.5" />
            <circle cx="-110" cy="-24" r="5" fill="#60A5FA" />
            <text x="-98" y="-20" fill="#93C5FD" fontFamily="monospace" fontSize="10.5" fontWeight="bold" letterSpacing="1">
              BRANCH 03 // CYBER ONTOLOGY
            </text>
            <text x="-135" y="2" dx="25" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" fontWeight="bold">
              Attack Path Reasoning &amp; Remediation
            </text>
            <text x="-135" y="22" dx="25" fill="#CBD5E1" fontFamily="monospace" fontSize="9.5">
              13 Entity Types · 15 Relationships · 38 Properties (Top 10)
            </text>
          </g>

          {/* =========================================================================
              CENTRAL ARCHITECTURE CORE (INTELLIGENCE FOCAL POINT)
              ========================================================================= */}
          <g id="hero-core-system" transform="translate(330, 260)" filter="url(#heroCoreGlow)">
            {/* Outer Energy Rings */}
            <circle cx="0" cy="0" r="52" fill="#070D1E" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="16 6" />
            <circle cx="0" cy="0" r="42" fill="#0A162E" stroke="#06B6D4" strokeWidth="2" strokeDasharray="6 4" />
            
            {/* Radiant Core Nucleus */}
            <circle cx="0" cy="0" r="30" fill="#1D4ED8" fillOpacity="0.4" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="0" cy="0" r="14" fill="#06B6D4" />
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" />

            {/* Central Badge Label */}
            <rect x="-72" y="60" width="144" height="32" rx="8" fill="#070D1E" stroke="#3B82F6" strokeWidth="1.5" />
            <text x="0" y="75" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="10" fontWeight="bold" letterSpacing="1.2">
              SYSTEMS CORE
            </text>
            <text x="0" y="86" textAnchor="middle" fill="#38BDF8" fontFamily="monospace" fontSize="8" fontWeight="bold">
              DETERMINISTIC COMPUTE
            </text>
          </g>

        </svg>
      </div>

      {/* Visual Footer Caption */}
      <div className="relative z-10 mt-3 pt-3 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#94A3B8]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-white font-medium">
            <ShieldCheck className="w-4 h-4 text-[#3B82F6]" /> PQC Discovery
          </span>
          <span className="flex items-center gap-1.5 text-white font-medium">
            <Activity className="w-4 h-4 text-[#06B6D4]" /> ML Care Triage
          </span>
          <span className="flex items-center gap-1.5 text-white font-medium">
            <Cpu className="w-4 h-4 text-[#60A5FA]" /> Cyber Ontology
          </span>
        </div>
        <span className="text-[#38BDF8] text-xs font-semibold">Live Architecture Nexus</span>
      </div>

    </div>
  );
};
