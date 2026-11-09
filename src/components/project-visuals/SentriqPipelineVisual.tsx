import React, { useState } from 'react';

export const SentriqPipelineVisual: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('cbom');

  const pipelineStages = [
    { 
      id: 'ingest', 
      label: '1. Repository Ingestion', 
      detail: '10 enterprise codebases scanned (Finance, Defense, Healthcare)' 
    },
    { 
      id: 'ast', 
      label: '2. Cryptographic Discovery', 
      detail: 'AST pattern inspection & novel cipher detection' 
    },
    { 
      id: 'cbom', 
      label: '3. CBOM Generation', 
      detail: 'CycloneDX 1.6 machine-readable Cryptographic BOM' 
    },
    { 
      id: 'risk', 
      label: '4. Mosca Risk Model', 
      detail: 'Urgency calculation (X + Y > Z) & QUANTS score (8.4)' 
    },
    { 
      id: 'pqc', 
      label: '5. NIST PQC Mapping', 
      detail: 'Quantum-safe migration to ML-KEM-768 & ML-DSA-65' 
    },
  ];

  return (
    <div id="sentriq-pipeline-visual" className="spotlight-card w-full rounded-xl border border-white/15 bg-[#080D1E]/95 p-5 sm:p-6 backdrop-blur-md">
      
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08] mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
            Cryptographic Discovery &amp; CBOM Pipeline
          </span>
        </div>
        <span className="font-mono text-xs text-[#93C5FD] px-3 py-1 rounded-full border border-[#3B82F6]/40 bg-[#3B82F6]/15 font-medium">
          10 Repos Scanned (35–45s typical)
        </span>
      </div>

      {/* 5-Stage Interactive Ingestion Bus — High Contrast & Generous Padding */}
      <div id="sentriq-stages-bus" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-6">
        {pipelineStages.map((stage) => (
          <button
            key={stage.id}
            type="button"
            data-stage={stage.id}
            onClick={() => setSelectedNode(stage.id)}
            className={`sentriq-stage-btn p-3.5 rounded-lg text-left transition-all border font-mono flex flex-col justify-between ${
              selectedNode === stage.id
                ? 'border-[#3B82F6] bg-[#3B82F6]/20 text-white shadow-[0_0_18px_rgba(59,130,246,0.4)]'
                : 'border-white/10 bg-white/[0.03] text-[#94A3B8] hover:border-white/25 hover:text-white'
            }`}
          >
            <div className="font-bold text-xs sm:text-[13px] text-white tracking-tight leading-snug">{stage.label}</div>
            <div className="text-[11px] text-[#CBD5E1] mt-2 leading-relaxed">{stage.detail}</div>
          </button>
        ))}
      </div>

      {/* Connected Cryptographic Dependency & Risk Graph SVG */}
      <div id="sentriq-visual-container" className="relative rounded-xl border border-white/[0.08] bg-[#050A18] p-4 sm:p-5 overflow-hidden">
        <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-3 flex items-center justify-between">
          <span className="font-semibold text-white">Cryptographic Component &amp; Migration Graph</span>
          <span className="text-[#60A5FA] font-medium">Interactive Architecture</span>
        </div>

        <svg viewBox="0 0 720 280" fill="none" className="w-full h-auto drop-shadow-md">
          <defs>
            <linearGradient id="flowVulnerable" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="flowSafe" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Dependency Connections with SVG stroke animation classes */}
          <path
            className="sentriq-svg-conduit"
            d="M 120 85 C 180 85, 200 140, 255 140"
            stroke="url(#flowVulnerable)"
            strokeWidth="3"
            strokeDasharray="300"
            strokeDashoffset="0"
          />
          <path
            className="sentriq-svg-conduit"
            d="M 120 195 C 180 195, 200 140, 255 140"
            stroke="url(#flowVulnerable)"
            strokeWidth="3"
            strokeDasharray="300"
            strokeDashoffset="0"
          />
          <path
            className="sentriq-svg-conduit"
            d="M 385 140 L 425 140"
            stroke="#3B82F6"
            strokeWidth="3.5"
            strokeDasharray="150"
            strokeDashoffset="0"
          />
          <path
            className="sentriq-svg-conduit pqc-conduit"
            d="M 555 140 C 585 140, 595 85, 608 85"
            stroke="url(#flowSafe)"
            strokeWidth="3"
            strokeDasharray="200"
            strokeDashoffset="0"
          />
          <path
            className="sentriq-svg-conduit pqc-conduit"
            d="M 555 140 C 585 140, 595 195, 608 195"
            stroke="url(#flowSafe)"
            strokeWidth="3"
            strokeDasharray="200"
            strokeDashoffset="0"
          />

          {/* Node 1: RSA-2048 (Vulnerable Legacy) */}
          <g id="sentriq-node-rsa" transform="translate(120, 85)">
            <circle cx="0" cy="0" r="32" fill="#0C152B" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
            <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="11" fontWeight="bold">RSA-2048</text>
            <text x="0" y="-42" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="10" fontWeight="medium">Legacy (Shor Exposure)</text>
          </g>

          {/* Node 2: ECDH P-256 (Vulnerable Asymmetric) */}
          <g id="sentriq-node-ecdh" transform="translate(120, 195)">
            <circle cx="0" cy="0" r="32" fill="#0C152B" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
            <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="11" fontWeight="bold">ECDH-256</text>
            <text x="0" y="48" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="10" fontWeight="medium">Key Exchange (Asymmetric)</text>
          </g>

          {/* Central Node 1: CycloneDX 1.6 CBOM Generation */}
          <g id="cbom-node" transform="translate(320, 140)">
            <rect x="-65" y="-36" width="130" height="72" rx="10" fill="#0D162E" stroke="#3B82F6" strokeWidth="2.5" />
            <text x="0" y="-10" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="12" fontWeight="bold">CycloneDX 1.6</text>
            <text x="0" y="10" textAnchor="middle" fill="#60A5FA" fontFamily="monospace" fontSize="11" fontWeight="bold">CBOM Generation</text>
            <text x="0" y="25" textAnchor="middle" fill="#93C5FD" fontFamily="monospace" fontSize="9.5">RFC Compliance</text>
          </g>

          {/* Central Node 2: Mosca Risk Model & QUANTS Scoring */}
          <g id="quants-node" transform="translate(490, 140)">
            <rect x="-65" y="-36" width="130" height="72" rx="10" fill="#0D162E" stroke="#60A5FA" strokeWidth="2.5" />
            <text x="0" y="-10" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="12" fontWeight="bold">Mosca Model</text>
            <text x="0" y="10" textAnchor="middle" fill="#93C5FD" fontFamily="monospace" fontSize="11" fontWeight="bold">QUANTS: 8.4</text>
            <text x="0" y="25" textAnchor="middle" fill="#CBD5E1" fontFamily="monospace" fontSize="9.5">X + Y &gt; Z Urgency</text>
          </g>

          {/* Target Migration Node 1: ML-KEM-768 (NIST FIPS 203) */}
          <g id="pqc-node-kem" className="pqc-target-node" transform="translate(640, 85)">
            <circle cx="0" cy="0" r="32" fill="#0C152B" stroke="#3B82F6" strokeWidth="2.5" />
            <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="11" fontWeight="bold">ML-KEM</text>
            <text x="0" y="-42" textAnchor="middle" fill="#60A5FA" fontFamily="monospace" fontSize="10" fontWeight="bold">NIST FIPS 203</text>
          </g>

          {/* Target Migration Node 2: ML-DSA-65 (NIST FIPS 204) */}
          <g id="pqc-node-dsa" className="pqc-target-node" transform="translate(640, 195)">
            <circle cx="0" cy="0" r="32" fill="#0C152B" stroke="#3B82F6" strokeWidth="2.5" />
            <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="11" fontWeight="bold">ML-DSA</text>
            <text x="0" y="48" textAnchor="middle" fill="#60A5FA" fontFamily="monospace" fontSize="10" fontWeight="bold">NIST FIPS 204</text>
          </g>
        </svg>

        {/* Legend */}
        <div className="mt-4 pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#CBD5E1]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#94A3B8]" /> Asymmetric Legacy
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" /> CBOM Ingestion
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#60A5FA]" /> Quantum-Safe Target (NIST PQC)
            </span>
          </div>
          <span className="text-[#94A3B8] font-medium">Scan Duration: 35–45s typical (max ~60s)</span>
        </div>
      </div>

    </div>
  );
};
