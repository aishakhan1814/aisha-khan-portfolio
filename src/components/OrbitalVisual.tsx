import React from 'react';

interface OrbitalVisualProps {
  className?: string;
}

export const OrbitalVisual: React.FC<OrbitalVisualProps> = ({ className = '' }) => {
  return (
    <div
      id="orbital-visual-container"
      className={`relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[540px] md:h-[540px] lg:w-[650px] lg:h-[650px] pointer-events-none select-none preserve-3d ${className}`}
      aria-hidden="true"
    >
      {/* Central Ambient Backlight Glow */}
      <div
        id="orbital-glow"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded-full bg-[#7C9EFF]/[0.08] blur-[70px] md:blur-[110px] pointer-events-none"
      />

      {/* SVG Interconnected Orbital Geometry */}
      <svg
        id="orbital-svg"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform-gpu"
      >
        <defs>
          {/* Radial Gradient for Core Aura */}
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C9EFF" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#567EE3" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#080B12" stopOpacity="0" />
          </radialGradient>

          {/* Linear Gradients for Trail Paths */}
          <linearGradient id="trailBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C9EFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#567EE3" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7C9EFF" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="trailBlue2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A5BDFF" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#7C9EFF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#080B12" stopOpacity="0" />
          </linearGradient>

          {/* Node Glow Filter */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* LAYER 1: Deep Outer Background Ring & Coordinate Marks */}
        <g id="orbital-ring-outer" className="origin-center">
          <circle
            cx="400"
            cy="400"
            r="360"
            stroke="rgba(124, 158, 255, 0.08)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          {/* Orbital Perimeter Micro-Tics */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 400 + Math.cos(rad) * 356;
            const y1 = 400 + Math.sin(rad) * 356;
            const x2 = 400 + Math.cos(rad) * 364;
            const y2 = 400 + Math.sin(rad) * 364;
            return (
              <line
                key={`tic-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(124, 158, 255, 0.3)"
                strokeWidth="1"
              />
            );
          })}
        </g>

        {/* LAYER 2: Major Orbital Ring A (45° inclined ellipse) */}
        <g id="orbital-ring-a" className="origin-center">
          <ellipse
            cx="400"
            cy="400"
            rx="320"
            ry="200"
            stroke="url(#trailBlue1)"
            strokeWidth="1.25"
            strokeDasharray="6 14 300 20"
            transform="rotate(-25 400 400)"
          />
          {/* Node 1 on Ellipse A */}
          <circle
            cx="210"
            cy="270"
            r="3.5"
            fill="#7C9EFF"
            filter="url(#nodeGlow)"
            className="animate-pulse"
          />
          {/* Interconnect Trail Line */}
          <line
            x1="210"
            y1="270"
            x2="350"
            y2="360"
            stroke="rgba(124, 158, 255, 0.25)"
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
        </g>

        {/* LAYER 3: Major Orbital Ring B (Counter-inclined) */}
        <g id="orbital-ring-b" className="origin-center">
          <ellipse
            cx="400"
            cy="400"
            rx="290"
            ry="170"
            stroke="url(#trailBlue2)"
            strokeWidth="1.2"
            strokeDasharray="4 8 180 12"
            transform="rotate(35 400 400)"
          />
          {/* Node 2 on Ellipse B */}
          <circle
            cx="580"
            cy="320"
            r="4"
            fill="#A5BDFF"
            filter="url(#nodeGlow)"
            className="animate-pulse"
          />
          <line
            x1="580"
            y1="320"
            x2="450"
            y2="380"
            stroke="rgba(124, 158, 255, 0.2)"
            strokeWidth="0.75"
            strokeDasharray="2 4"
          />
        </g>

        {/* LAYER 4: Middle Concentric Geo Grid & Technical Reticle */}
        <g id="orbital-ring-mid" className="origin-center">
          <circle
            cx="400"
            cy="400"
            r="230"
            stroke="rgba(124, 158, 255, 0.14)"
            strokeWidth="1"
            strokeDasharray="1 5"
          />
          <circle
            cx="400"
            cy="400"
            r="160"
            stroke="rgba(124, 158, 255, 0.18)"
            strokeWidth="1"
          />
          
          {/* Orthogonal Fine Axis Crosshairs */}
          <line
            x1="400"
            y1="210"
            x2="400"
            y2="250"
            stroke="rgba(124, 158, 255, 0.35)"
            strokeWidth="1"
          />
          <line
            x1="400"
            y1="550"
            x2="400"
            y2="590"
            stroke="rgba(124, 158, 255, 0.35)"
            strokeWidth="1"
          />
          <line
            x1="210"
            y1="400"
            x2="250"
            y2="400"
            stroke="rgba(124, 158, 255, 0.35)"
            strokeWidth="1"
          />
          <line
            x1="550"
            y1="400"
            x2="590"
            y2="400"
            stroke="rgba(124, 158, 255, 0.35)"
            strokeWidth="1"
          />
        </g>

        {/* LAYER 5: Interconnected Neural Node Constellation */}
        <g id="orbital-nodes" className="origin-center">
          {/* Micro Geometric Hexagonal Path */}
          <polygon
            points="400,320 470,360 470,440 400,480 330,440 330,360"
            stroke="rgba(124, 158, 255, 0.22)"
            strokeWidth="1"
            fill="none"
          />
          
          {/* Constellation Nodes at Vertices */}
          <circle cx="400" cy="320" r="3" fill="#7C9EFF" filter="url(#nodeGlow)" />
          <circle cx="470" cy="360" r="2.5" fill="#EEEEF2" filter="url(#nodeGlow)" />
          <circle cx="470" cy="440" r="3" fill="#7C9EFF" filter="url(#nodeGlow)" />
          <circle cx="400" cy="480" r="2.5" fill="#A5BDFF" filter="url(#nodeGlow)" />
          <circle cx="330" cy="440" r="3" fill="#7C9EFF" filter="url(#nodeGlow)" />
          <circle cx="330" cy="360" r="2.5" fill="#EEEEF2" filter="url(#nodeGlow)" />

          {/* Internal Geometric Cross-Links */}
          <line x1="330" y1="360" x2="470" y2="440" stroke="rgba(124, 158, 255, 0.15)" strokeWidth="0.75" />
          <line x1="470" y1="360" x2="330" y2="440" stroke="rgba(124, 158, 255, 0.15)" strokeWidth="0.75" />
        </g>

        {/* LAYER 6: Inner Core - Luminous Singular Hub */}
        <g id="orbital-core" className="origin-center">
          {/* Core Halo */}
          <circle cx="400" cy="400" r="75" fill="url(#coreGlow)" />
          <circle
            cx="400"
            cy="400"
            r="45"
            stroke="rgba(124, 158, 255, 0.4)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <circle
            cx="400"
            cy="400"
            r="16"
            stroke="#7C9EFF"
            strokeWidth="1.5"
            fill="rgba(124, 158, 255, 0.12)"
          />
          <circle
            cx="400"
            cy="400"
            r="4"
            fill="#FFFFFF"
            filter="url(#nodeGlow)"
          />
        </g>
      </svg>

      {/* Floating Micro Tech Spec Data Badges in 3D Space */}
      <div
        id="orbital-badge-1"
        className="absolute top-[18%] -left-[5%] md:-left-[10%] px-2.5 py-1 rounded border border-[#7C9EFF]/20 bg-[#080B12]/80 backdrop-blur-md hidden sm:flex items-center gap-2 shadow-lg"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF] animate-ping" />
        <span className="mono-label text-[9px] text-[#A5BDFF]">SYS.STATE // STABLE</span>
      </div>

      <div
        id="orbital-badge-2"
        className="absolute bottom-[20%] -right-[5%] md:-right-[8%] px-2.5 py-1 rounded border border-[#7C9EFF]/20 bg-[#080B12]/80 backdrop-blur-md hidden sm:flex items-center gap-2 shadow-lg"
      >
        <span className="mono-label text-[9px] text-[#94A3B8]">INF.LATENCY // &lt;4ms</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
      </div>
    </div>
  );
};
