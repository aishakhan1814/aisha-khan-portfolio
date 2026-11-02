import React, { useState } from 'react';
import { Trophy } from 'lucide-react';

export const CyberOntologyVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  // 2 Simulated Attack Demonstration Scenarios
  const scenarioSteps = [
    { step: 1, label: '1. Initial Access', detail: 'ThreatActor (APT29) exploits CVE-2024-XXXX vulnerability' },
    { step: 2, label: '2. Credential Infiltration', detail: 'Compromises Domain Admin NTLM Hash from LSASS memory artifact' },
    { step: 3, label: '3. Lateral Movement', detail: 'Traverses SMB/WinRM pathway toward primary Domain Controller' },
    { step: 4, label: '4. SPARQL Remediation', detail: 'Ontology infers credential isolation and automated firewall policy' },
  ];

  return (
    <div className="w-full rounded-xl border border-white/[0.08] bg-[#070A11]/90 p-5 sm:p-6 backdrop-blur-md">
      
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06] mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse" />
          <span className="font-mono text-xs font-semibold text-[#EEEEF2] uppercase tracking-wider">
            Semantic Knowledge Graph &amp; Attack Path
          </span>
        </div>

        {/* Hackathon Podium Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#A78BFA]/30 bg-[#A78BFA]/[0.08] text-[#A78BFA] text-[11px] font-mono">
          <Trophy className="w-3.5 h-3.5" />
          <span>Top 10 Finalist / 300+ Teams (Microsoft Hackathon)</span>
        </div>
      </div>

      {/* 13 / 15 / 38 Structure Metric Trio */}
      <div className="grid grid-cols-3 gap-2.5 mb-5 text-center">
        <div className="p-2.5 rounded-lg border border-white/[0.06] bg-[#05070B]">
          <div className="font-mono text-xl sm:text-2xl font-bold text-white">13</div>
          <div className="font-mono text-[9px] text-[#A5BDFF] uppercase mt-0.5">Entity Types</div>
        </div>
        <div className="p-2.5 rounded-lg border border-white/[0.06] bg-[#05070B]">
          <div className="font-mono text-xl sm:text-2xl font-bold text-[#7C9EFF]">15</div>
          <div className="font-mono text-[9px] text-[#A5BDFF] uppercase mt-0.5">Relationships</div>
        </div>
        <div className="p-2.5 rounded-lg border border-white/[0.06] bg-[#05070B]">
          <div className="font-mono text-xl sm:text-2xl font-bold text-[#A78BFA]">38</div>
          <div className="font-mono text-[9px] text-[#A5BDFF] uppercase mt-0.5">Properties</div>
        </div>
      </div>

      {/* Interactive Semantic Attack Path Graph SVG */}
      <div className="relative rounded-lg border border-white/[0.06] bg-[#05070B] p-4 overflow-hidden mb-4">
        <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>OWL / RDF Graph Traversal Simulation</span>
          <span className="text-[#A78BFA]">Demonstration Scenario</span>
        </div>

        <svg viewBox="0 0 620 200" fill="none" className="w-full h-auto">
          {/* Attack Path Edges */}
          <line
            x1="80"
            y1="100"
            x2="220"
            y2="100"
            stroke={activeStep >= 2 ? '#FB7185' : '#334155'}
            strokeWidth={activeStep >= 2 ? '2.5' : '1.5'}
            strokeDasharray={activeStep >= 2 ? 'none' : '4 4'}
          />
          <line
            x1="220"
            y1="100"
            x2="380"
            y2="100"
            stroke={activeStep >= 3 ? '#FB7185' : '#334155'}
            strokeWidth={activeStep >= 3 ? '2.5' : '1.5'}
            strokeDasharray={activeStep >= 3 ? 'none' : '4 4'}
          />
          <line
            x1="380"
            y1="100"
            x2="520"
            y2="100"
            stroke={activeStep >= 4 ? '#34D399' : '#334155'}
            strokeWidth={activeStep >= 4 ? '2.5' : '1.5'}
          />

          {/* Node 1: ThreatActor */}
          <g transform="translate(80, 100)">
            <circle cx="0" cy="0" r="24" fill="#0D121F" stroke="#FB7185" strokeWidth="2" />
            <text x="0" y="3" textAnchor="middle" fill="#FB7185" fontFamily="monospace" fontSize="8" fontWeight="bold">APT29</text>
            <text x="0" y="-30" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="8">ThreatActor</text>
          </g>

          {/* Node 2: Vulnerability / Exploit */}
          <g transform="translate(220, 100)">
            <circle cx="0" cy="0" r="24" fill="#0D121F" stroke={activeStep >= 2 ? '#FB7185' : '#475569'} strokeWidth="2" />
            <text x="0" y="3" textAnchor="middle" fill={activeStep >= 2 ? '#FB7185' : '#94A3B8'} fontFamily="monospace" fontSize="8" fontWeight="bold">CVE-XXXX</text>
            <text x="0" y="35" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="8">Vulnerability</text>
          </g>

          {/* Node 3: HostArtifact */}
          <g transform="translate(380, 100)">
            <circle cx="0" cy="0" r="24" fill="#0D121F" stroke={activeStep >= 3 ? '#FB7185' : '#475569'} strokeWidth="2" />
            <text x="0" y="3" textAnchor="middle" fill={activeStep >= 3 ? '#FB7185' : '#94A3B8'} fontFamily="monospace" fontSize="8" fontWeight="bold">LSASS</text>
            <text x="0" y="-30" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="8">HostArtifact</text>
          </g>

          {/* Node 4: Mitigation / Deduction */}
          <g transform="translate(520, 100)">
            <circle cx="0" cy="0" r="24" fill="#0D121F" stroke={activeStep >= 4 ? '#34D399' : '#475569'} strokeWidth="2" />
            <text x="0" y="3" textAnchor="middle" fill={activeStep >= 4 ? '#34D399' : '#94A3B8'} fontFamily="monospace" fontSize="8" fontWeight="bold">ISOLATE</text>
            <text x="0" y="35" textAnchor="middle" fill="#34D399" fontFamily="monospace" fontSize="8">Mitigation</text>
          </g>
        </svg>

        {/* Step Trigger Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          {scenarioSteps.map((s) => (
            <button
              key={s.step}
              type="button"
              onClick={() => setActiveStep(s.step)}
              className={`p-2 rounded text-left font-mono transition-all border ${
                activeStep === s.step
                  ? 'border-[#A78BFA] bg-[#A78BFA]/10 text-white'
                  : 'border-white/[0.04] bg-white/[0.01] text-[#94A3B8] hover:border-white/10'
              }`}
            >
              <div className="text-[10px] font-bold">{s.label}</div>
              <div className="text-[9px] text-[#64748B] mt-0.5 line-clamp-1">{s.detail}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Scope Disclaimer / Research Context */}
      <div className="p-2.5 rounded-lg border border-white/[0.04] bg-white/[0.01] text-[10px] font-mono text-[#64748B] flex items-center justify-between">
        <span>Scope: Evaluated across 2 synthetic multi-stage scenarios (Team of 2). Not deployed on live enterprise telemetry.</span>
        <span className="text-[#A78BFA] hidden sm:inline">Protégé Axiom Validated</span>
      </div>

    </div>
  );
};
