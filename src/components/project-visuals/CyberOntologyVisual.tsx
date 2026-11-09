import React, { useState, useEffect, useRef } from 'react';
import { Trophy } from 'lucide-react';

export const CyberOntologyVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 2 Simulated Attack Demonstration Scenarios
  const scenarioSteps = [
    { step: 1, label: '1. Initial Access', detail: 'ThreatActor (APT29) exploits CVE-2024-XXXX vulnerability' },
    { step: 2, label: '2. Credential Infiltration', detail: 'Compromises Domain Admin NTLM Hash from LSASS memory artifact' },
    { step: 3, label: '3. Lateral Movement', detail: 'Traverses SMB/WinRM pathway toward primary Domain Controller' },
    { step: 4, label: '4. SPARQL Remediation', detail: 'Ontology infers credential isolation and automated firewall policy' },
  ];

  // Auto-play sequential attack traversal on entering viewport (~3s total)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let timerId: NodeJS.Timeout | null = null;
    let stepCount = 1;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !userInteracted) {
          const runStep = () => {
            if (userInteracted) return;
            if (stepCount < 4) {
              stepCount += 1;
              setActiveStep(stepCount);
              timerId = setTimeout(runStep, 800);
            }
          };
          timerId = setTimeout(runStep, 700);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timerId) clearTimeout(timerId);
    };
  }, [userInteracted]);

  const handleStepSelect = (step: number) => {
    setUserInteracted(true);
    setActiveStep(step);
  };

  return (
    <div
      ref={containerRef}
      id="cyber-ontology-visual"
      className="spotlight-card w-full rounded-xl border border-white/[0.08] bg-[#0B0F19]/90 p-5 sm:p-6 backdrop-blur-md"
    >
      
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06] mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
            Semantic Knowledge Graph &amp; Attack Path
          </span>
        </div>

        {/* Hackathon Podium Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#3B82F6]/30 bg-[#3B82F6]/[0.08] text-[#93C5FD] text-[11px] font-mono">
          <Trophy className="w-3.5 h-3.5 text-[#60A5FA]" />
          <span>Top 10 Finalist / 300+ Teams (Microsoft Hackathon)</span>
        </div>
      </div>

      {/* 13 / 15 / 38 Structure Metric Trio */}
      <div className="grid grid-cols-3 gap-2.5 mb-5 text-center">
        <div className="p-3 rounded-lg border border-white/[0.06] bg-[#06080F]">
          <div className="font-mono text-xl sm:text-2xl font-bold text-white">13</div>
          <div className="font-mono text-[10px] text-[#93C5FD] uppercase tracking-wider mt-0.5">Entity Types</div>
        </div>
        <div className="p-3 rounded-lg border border-white/[0.06] bg-[#06080F]">
          <div className="font-mono text-xl sm:text-2xl font-bold text-[#60A5FA]">15</div>
          <div className="font-mono text-[10px] text-[#93C5FD] uppercase tracking-wider mt-0.5">Relationships</div>
        </div>
        <div className="p-3 rounded-lg border border-white/[0.06] bg-[#06080F]">
          <div className="font-mono text-xl sm:text-2xl font-bold text-[#3B82F6]">38</div>
          <div className="font-mono text-[10px] text-[#93C5FD] uppercase tracking-wider mt-0.5">Properties</div>
        </div>
      </div>

      {/* Interactive Semantic Attack Path Graph SVG */}
      <div className="relative rounded-lg border border-white/[0.06] bg-[#06080F] p-4 sm:p-5 overflow-hidden mb-4">
        <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-3 flex items-center justify-between">
          <span>OWL / RDF Graph Traversal Simulation</span>
          <span className="text-[#60A5FA]">Demonstration Scenario</span>
        </div>

        <svg viewBox="0 0 640 210" fill="none" className="w-full h-auto">
          {/* Attack Path Edges */}
          <line
            x1="80"
            y1="105"
            x2="230"
            y2="105"
            stroke={activeStep >= 2 ? '#3B82F6' : '#334155'}
            strokeWidth={activeStep >= 2 ? '2.5' : '1.5'}
            strokeDasharray={activeStep >= 2 ? 'none' : '4 4'}
          />
          <line
            x1="230"
            y1="105"
            x2="390"
            y2="105"
            stroke={activeStep >= 3 ? '#3B82F6' : '#334155'}
            strokeWidth={activeStep >= 3 ? '2.5' : '1.5'}
            strokeDasharray={activeStep >= 3 ? 'none' : '4 4'}
          />
          <line
            x1="390"
            y1="105"
            x2="540"
            y2="105"
            stroke={activeStep >= 4 ? '#60A5FA' : '#334155'}
            strokeWidth={activeStep >= 4 ? '2.5' : '1.5'}
          />

          {/* Node 1: ThreatActor */}
          <g transform="translate(80, 105)">
            <circle cx="0" cy="0" r="26" fill="#0B0F19" stroke="#3B82F6" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="9" fontWeight="bold">APT29</text>
            <text x="0" y="-34" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="8.5">ThreatActor</text>
          </g>

          {/* Node 2: Vulnerability / Exploit */}
          <g transform="translate(230, 105)">
            <circle cx="0" cy="0" r="26" fill="#0B0F19" stroke={activeStep >= 2 ? '#3B82F6' : '#475569'} strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill={activeStep >= 2 ? '#FFFFFF' : '#94A3B8'} fontFamily="monospace" fontSize="9" fontWeight="bold">CVE-XXXX</text>
            <text x="0" y="38" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="8.5">Vulnerability</text>
          </g>

          {/* Node 3: HostArtifact */}
          <g transform="translate(390, 105)">
            <circle cx="0" cy="0" r="26" fill="#0B0F19" stroke={activeStep >= 3 ? '#3B82F6' : '#475569'} strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill={activeStep >= 3 ? '#FFFFFF' : '#94A3B8'} fontFamily="monospace" fontSize="9" fontWeight="bold">LSASS</text>
            <text x="0" y="-34" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="8.5">HostArtifact</text>
          </g>

          {/* Node 4: Mitigation / Deduction */}
          <g transform="translate(540, 105)">
            <circle cx="0" cy="0" r="26" fill="#0B0F19" stroke={activeStep >= 4 ? '#60A5FA' : '#475569'} strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill={activeStep >= 4 ? '#FFFFFF' : '#94A3B8'} fontFamily="monospace" fontSize="9" fontWeight="bold">ISOLATE</text>
            <text x="0" y="38" textAnchor="middle" fill="#60A5FA" fontFamily="monospace" fontSize="8.5">Mitigation</text>
          </g>
        </svg>

        {/* Step Trigger Buttons — Complete, Unclipped Labels & Descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-3">
          {scenarioSteps.map((s) => (
            <button
              key={s.step}
              type="button"
              data-step={s.step}
              onClick={() => handleStepSelect(s.step)}
              className={`p-3 rounded-lg text-left font-mono transition-all border flex flex-col justify-between ${
                activeStep === s.step
                  ? 'border-[#3B82F6] bg-[#3B82F6]/15 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'border-white/[0.06] bg-white/[0.02] text-[#94A3B8] hover:border-white/15 hover:text-white'
              }`}
            >
              <div className="text-[11px] font-bold text-white tracking-tight">{s.label}</div>
              <div className="text-[10px] text-[#94A3B8] mt-1.5 leading-relaxed">{s.detail}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Scope Disclaimer / Research Context */}
      <div className="p-3 rounded-lg border border-white/[0.04] bg-white/[0.01] text-[10px] font-mono text-[#64748B] flex flex-wrap items-center justify-between gap-2">
        <span>Scope: Evaluated across 2 synthetic multi-stage scenarios (Team of 2). Not deployed on live enterprise telemetry.</span>
        <span className="text-[#60A5FA]">Protégé Axiom Validated</span>
      </div>

    </div>
  );
};
