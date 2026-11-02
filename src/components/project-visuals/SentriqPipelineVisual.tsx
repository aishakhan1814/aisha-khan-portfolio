import React, { useState } from 'react';

export const SentriqPipelineVisual: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('cbom');

  const pipelineStages = [
    { id: 'ingest', label: '1. Repo Ingestion', detail: '10 OpenSSL repos (Finance, Defense, Healthcare)' },
    { id: 'ast', label: '2. AST Detection', detail: 'Pattern parsing & novel cipher human flagging' },
    { id: 'cbom', label: '3. CycloneDX 1.6', detail: 'Machine-readable Cryptographic BOM' },
    { id: 'risk', label: '4. Mosca & QUANTS', detail: 'Theoretical (X+Y>Z) & Empirical (0–10) Risk' },
    { id: 'pqc', label: '5. NIST PQC Mapping', detail: 'ML-KEM, ML-DSA, SLH-DSA migration' },
  ];

  return (
    <div className="w-full rounded-xl border border-white/[0.08] bg-[#070A11]/90 p-5 sm:p-6 backdrop-blur-md">
      
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06] mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7C9EFF] animate-pulse" />
          <span className="font-mono text-xs font-semibold text-[#EEEEF2] uppercase tracking-wider">
            Cryptographic Discovery &amp; CBOM Pipeline
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#A5BDFF] px-2.5 py-1 rounded-full border border-[#7C9EFF]/20 bg-[#7C9EFF]/[0.06]">
          10 Repos Scanned (35–45s typical)
        </span>
      </div>

      {/* 5-Stage Interactive Ingestion Bus */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        {pipelineStages.map((stage) => (
          <button
            key={stage.id}
            type="button"
            onClick={() => setSelectedNode(stage.id)}
            className={`p-2.5 rounded-lg text-left transition-all border text-xs font-mono ${
              selectedNode === stage.id
                ? 'border-[#7C9EFF] bg-[#7C9EFF]/10 text-white shadow-[0_0_15px_rgba(124,158,255,0.25)]'
                : 'border-white/[0.06] bg-white/[0.02] text-[#94A3B8] hover:border-white/20'
            }`}
          >
            <div className="font-semibold text-[11px] truncate">{stage.label}</div>
            <div className="text-[9px] text-[#64748B] mt-1 line-clamp-1">{stage.detail}</div>
          </button>
        ))}
      </div>

      {/* Connected Cryptographic Dependency & Risk Graph SVG */}
      <div className="relative rounded-lg border border-white/[0.06] bg-[#05070B] p-4 overflow-hidden">
        <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>Cryptographic Component &amp; Migration Graph</span>
          <span className="text-[#7C9EFF]">Interactive SVG</span>
        </div>

        <svg viewBox="0 0 640 220" fill="none" className="w-full h-auto">
          <defs>
            <linearGradient id="flowVulnerable" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FB7185" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7C9EFF" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="flowSafe" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7C9EFF" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Dependency Connections */}
          <path d="M 120 70 C 180 70, 220 110, 280 110" stroke="url(#flowVulnerable)" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 120 150 C 180 150, 220 110, 280 110" stroke="url(#flowVulnerable)" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 280 110 L 400 110" stroke="#7C9EFF" strokeWidth="2" />
          <path d="M 400 110 C 450 110, 480 70, 520 70" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M 400 110 C 450 110, 480 150, 520 150" stroke="#34D399" strokeWidth="1.5" />

          {/* Node 1: RSA-2048 (Vulnerable) */}
          <g transform="translate(120, 70)">
            <circle cx="0" cy="0" r="22" fill="#0D121F" stroke="#FB7185" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fill="#FB7185" fontFamily="monospace" fontSize="8" fontWeight="bold">RSA-2048</text>
            <text x="0" y="-28" textAnchor="middle" fill="#FB7185" fontFamily="monospace" fontSize="8">CRITICAL (Shor)</text>
          </g>

          {/* Node 2: ECDH P-256 (Vulnerable) */}
          <g transform="translate(120, 150)">
            <circle cx="0" cy="0" r="22" fill="#0D121F" stroke="#FB7185" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fill="#FB7185" fontFamily="monospace" fontSize="8" fontWeight="bold">ECDH-256</text>
            <text x="0" y="36" textAnchor="middle" fill="#FB7185" fontFamily="monospace" fontSize="8">HIGH RISK</text>
          </g>

          {/* Central Ingestion Node: CycloneDX 1.6 CBOM */}
          <g transform="translate(280, 110)">
            <rect x="-38" y="-22" width="76" height="44" rx="8" fill="#0D121F" stroke="#7C9EFF" strokeWidth="2" />
            <text x="0" y="-3" textAnchor="middle" fill="#EEEEF2" fontFamily="monospace" fontSize="9" fontWeight="bold">CycloneDX</text>
            <text x="0" y="10" textAnchor="middle" fill="#7C9EFF" fontFamily="monospace" fontSize="8">CBOM 1.6</text>
          </g>

          {/* Analysis Node: Mosca & QUANTS */}
          <g transform="translate(400, 110)">
            <rect x="-34" y="-22" width="68" height="44" rx="8" fill="#0D121F" stroke="#A78BFA" strokeWidth="1.5" />
            <text x="0" y="-3" textAnchor="middle" fill="#EEEEF2" fontFamily="monospace" fontSize="8" fontWeight="bold">QUANTS</text>
            <text x="0" y="10" textAnchor="middle" fill="#A78BFA" fontFamily="monospace" fontSize="8">Score: 8.4</text>
          </g>

          {/* Target Migration Node 1: ML-KEM-768 */}
          <g transform="translate(520, 70)">
            <circle cx="0" cy="0" r="24" fill="#0D121F" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fill="#38BDF8" fontFamily="monospace" fontSize="8" fontWeight="bold">ML-KEM</text>
            <text x="0" y="-30" textAnchor="middle" fill="#38BDF8" fontFamily="monospace" fontSize="8">NIST FIPS 203</text>
          </g>

          {/* Target Migration Node 2: ML-DSA-65 */}
          <g transform="translate(520, 150)">
            <circle cx="0" cy="0" r="24" fill="#0D121F" stroke="#34D399" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fill="#34D399" fontFamily="monospace" fontSize="8" fontWeight="bold">ML-DSA</text>
            <text x="0" y="38" textAnchor="middle" fill="#34D399" fontFamily="monospace" fontSize="8">NIST FIPS 204</text>
          </g>
        </svg>

        {/* Legend */}
        <div className="mt-3 pt-3 border-t border-white/[0.04] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#64748B]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#FB7185]" /> Asymmetric Vulnerable
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#7C9EFF]" /> CBOM Ingestion
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#34D399]" /> Quantum-Safe Target
            </span>
          </div>
          <span>Execution: 35–45s typical (max ~60s)</span>
        </div>
      </div>

    </div>
  );
};
