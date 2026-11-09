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
    <div className="w-full rounded-xl border border-white/[0.08] bg-[#0B0F19]/90 p-5 sm:p-6 backdrop-blur-md">
      
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06] mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
            Cryptographic Discovery &amp; CBOM Pipeline
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#93C5FD] px-2.5 py-1 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/[0.08]">
          10 Repos Scanned (35–45s typical)
        </span>
      </div>

      {/* 5-Stage Interactive Ingestion Bus */}
      <div id="sentriq-stages-bus" className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        {pipelineStages.map((stage) => (
          <button
            key={stage.id}
            type="button"
            data-stage={stage.id}
            onClick={() => setSelectedNode(stage.id)}
            className={`sentriq-stage-btn p-2.5 rounded-lg text-left transition-all border text-xs font-mono ${
              selectedNode === stage.id
                ? 'border-[#3B82F6] bg-[#3B82F6]/15 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'border-white/[0.08] bg-white/[0.02] text-[#94A3B8] hover:border-white/20 hover:text-white'
            }`}
          >
            <div className="font-semibold text-[11px] truncate">{stage.label}</div>
            <div className="text-[9px] text-[#64748B] mt-1 line-clamp-1">{stage.detail}</div>
          </button>
        ))}
      </div>

      {/* Connected Cryptographic Dependency & Risk Graph SVG */}
      <div id="sentriq-visual-container" className="relative rounded-lg border border-white/[0.06] bg-[#06080F] p-4 overflow-hidden">
        <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>Cryptographic Component &amp; Migration Graph</span>
          <span className="text-[#60A5FA]">Interactive Architecture</span>
        </div>

        <svg viewBox="0 0 640 220" fill="none" className="w-full h-auto">
          <defs>
            <linearGradient id="flowVulnerable" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="flowSafe" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Dependency Connections with SVG stroke animation classes */}
          <path
            className="sentriq-svg-conduit"
            d="M 120 70 C 180 70, 220 110, 280 110"
            stroke="url(#flowVulnerable)"
            strokeWidth="1.5"
            strokeDasharray="300"
            strokeDashoffset="0"
          />
          <path
            className="sentriq-svg-conduit"
            d="M 120 150 C 180 150, 220 110, 280 110"
            stroke="url(#flowVulnerable)"
            strokeWidth="1.5"
            strokeDasharray="300"
            strokeDashoffset="0"
          />
          <path
            className="sentriq-svg-conduit"
            d="M 280 110 L 400 110"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeDasharray="150"
            strokeDashoffset="0"
          />
          <path
            className="sentriq-svg-conduit pqc-conduit"
            d="M 400 110 C 450 110, 480 70, 520 70"
            stroke="url(#flowSafe)"
            strokeWidth="1.5"
            strokeDasharray="200"
            strokeDashoffset="0"
          />
          <path
            className="sentriq-svg-conduit pqc-conduit"
            d="M 400 110 C 450 110, 480 150, 520 150"
            stroke="url(#flowSafe)"
            strokeWidth="1.5"
            strokeDasharray="200"
            strokeDashoffset="0"
          />

          {/* Node 1: RSA-2048 (Vulnerable) */}
          <g id="sentriq-node-rsa" transform="translate(120, 70)">
            <circle cx="0" cy="0" r="22" fill="#0B0F19" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="8" fontWeight="bold">RSA-2048</text>
            <text x="0" y="-28" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="8">LEGACY (Shor)</text>
          </g>

          {/* Node 2: ECDH P-256 (Vulnerable) */}
          <g id="sentriq-node-ecdh" transform="translate(120, 150)">
            <circle cx="0" cy="0" r="22" fill="#0B0F19" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="8" fontWeight="bold">ECDH-256</text>
            <text x="0" y="36" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="8">ASYM EXPOSURE</text>
          </g>

          {/* Central Ingestion Node: CycloneDX 1.6 CBOM */}
          <g id="cbom-node" transform="translate(280, 110)">
            <rect x="-38" y="-22" width="76" height="44" rx="8" fill="#0B0F19" stroke="#3B82F6" strokeWidth="2" />
            <text x="0" y="-3" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="9" fontWeight="bold">CycloneDX</text>
            <text x="0" y="10" textAnchor="middle" fill="#60A5FA" fontFamily="monospace" fontSize="8">CBOM 1.6</text>
          </g>

          {/* Analysis Node: Mosca & QUANTS */}
          <g id="quants-node" transform="translate(400, 110)">
            <rect x="-34" y="-22" width="68" height="44" rx="8" fill="#0B0F19" stroke="#60A5FA" strokeWidth="1.5" />
            <text x="0" y="-3" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="8" fontWeight="bold">QUANTS</text>
            <text x="0" y="10" textAnchor="middle" fill="#93C5FD" fontFamily="monospace" fontSize="8">Score: 8.4</text>
          </g>

          {/* Target Migration Node 1: ML-KEM-768 */}
          <g id="pqc-node-kem" className="pqc-target-node" transform="translate(520, 70)">
            <circle cx="0" cy="0" r="24" fill="#0B0F19" stroke="#3B82F6" strokeWidth="2" />
            <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="8" fontWeight="bold">ML-KEM</text>
            <text x="0" y="-30" textAnchor="middle" fill="#60A5FA" fontFamily="monospace" fontSize="8">NIST FIPS 203</text>
          </g>

          {/* Target Migration Node 2: ML-DSA-65 */}
          <g id="pqc-node-dsa" className="pqc-target-node" transform="translate(520, 150)">
            <circle cx="0" cy="0" r="24" fill="#0B0F19" stroke="#3B82F6" strokeWidth="2" />
            <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="8" fontWeight="bold">ML-DSA</text>
            <text x="0" y="38" textAnchor="middle" fill="#60A5FA" fontFamily="monospace" fontSize="8">NIST FIPS 204</text>
          </g>
        </svg>

        {/* Legend */}
        <div className="mt-3 pt-3 border-t border-white/[0.04] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#64748B]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#94A3B8]" /> Asymmetric Legacy
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" /> CBOM Ingestion
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#60A5FA]" /> Quantum-Safe Target
            </span>
          </div>
          <span>Execution: 35–45s typical (max ~60s)</span>
        </div>
      </div>

    </div>
  );
};
