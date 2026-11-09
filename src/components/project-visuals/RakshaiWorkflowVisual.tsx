import React, { useState } from 'react';
import { Activity, Database, Cpu, Cloud, Bell, TrendingDown } from 'lucide-react';

export const RakshaiWorkflowVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'comparison'>('comparison');

  return (
    <div className="spotlight-card w-full rounded-xl border border-white/[0.08] bg-[#0B0F19]/90 p-5 sm:p-6 backdrop-blur-md">
      
      {/* Top Bar with View Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06] mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
            Care Coordination &amp; Turnaround Acceleration
          </span>
        </div>

        <div className="inline-flex p-1 rounded-lg border border-white/10 bg-white/[0.02]">
          <button
            type="button"
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1 rounded text-xs font-mono transition-all ${
              activeTab === 'comparison'
                ? 'bg-[#2563EB] text-white font-semibold shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            Turnaround Metric
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1 rounded text-xs font-mono transition-all ${
              activeTab === 'architecture'
                ? 'bg-[#2563EB] text-white font-semibold shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            Cloud RAG Flow
          </button>
        </div>
      </div>

      {/* VIEW 1: THE CORE TURNAROUND METRIC COMPARISON */}
      {activeTab === 'comparison' && (
        <div className="space-y-6">
          <div className="p-4 sm:p-5 rounded-xl border border-white/[0.06] bg-[#06080F] space-y-5">
            
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
              <span className="text-[#93C5FD] uppercase tracking-wider font-semibold">
                Measured Care-Coordination Turnaround
              </span>
              <span className="text-white font-bold flex items-center gap-1.5">
                <TrendingDown className="w-4 h-4 text-[#60A5FA]" />
                <span className="text-[#60A5FA] text-sm">~6x Turnaround Speedup</span>
              </span>
            </div>

            {/* Baseline Bar: ~24 Hours */}
            <div>
              <div className="flex flex-wrap items-center justify-between text-xs font-mono mb-2 gap-1">
                <span className="text-[#94A3B8]">Baseline Manual Phone Coordination</span>
                <span className="text-[#CBD5E1] font-semibold font-mono">~24 Hours</span>
              </div>
              <div className="w-full h-8 rounded-md bg-white/[0.03] p-1 border border-white/[0.06] relative">
                <div
                  className="h-full rounded bg-white/[0.08] flex items-center justify-end pr-3 text-[11px] font-mono text-[#94A3B8] font-medium"
                  style={{ width: '100%' }}
                >
                  Baseline Multi-Hospital Latency
                </div>
              </div>
            </div>

            {/* RakshAI Pipeline Bar: < 4 Hours */}
            <div>
              <div className="flex flex-wrap items-center justify-between text-xs font-mono mb-2 gap-1">
                <span className="text-white font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  RakshAI Automated Semantic Pipeline
                </span>
                <span className="text-[#60A5FA] font-bold font-mono text-sm">&lt; 4 Hours</span>
              </div>
              <div className="w-full h-8 rounded-md bg-white/[0.03] p-1 border border-[#3B82F6]/30 relative overflow-hidden">
                <div
                  id="rakshai-turnaround-bar"
                  className="h-full rounded bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] flex items-center justify-end pr-3 text-[11px] font-mono text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  style={{ width: '16.6%' }}
                >
                  &lt;4h
                </div>
              </div>
            </div>

          </div>

          {/* Validation Context Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#06080F]">
              <span className="text-[10px] text-[#64748B] block mb-1">EVALUATION DATASET</span>
              <span className="text-white font-bold text-sm block">BloodWarriors</span>
              <span className="text-[11px] text-[#94A3B8] block mt-1">7,000 real-world records evaluated</span>
            </div>
            <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#06080F]">
              <span className="text-[10px] text-[#64748B] block mb-1">VERIFICATION METHOD</span>
              <span className="text-[#60A5FA] font-bold text-sm block">3–4 Check Suites</span>
              <span className="text-[11px] text-[#94A3B8] block mt-1">Algorithmic automated pipeline checks</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: CLOUD & RAG WORKFLOW TOPOLOGY */}
      {activeTab === 'architecture' && (
        <div className="space-y-4">
          <div className="p-4 sm:p-5 rounded-xl border border-white/[0.06] bg-[#06080F]">
            <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-3">
              RAG &amp; AWS Orchestration Topology
            </div>

            <div className="space-y-2.5 text-xs font-mono">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg border border-white/[0.04] bg-white/[0.02]">
                <div className="flex items-center gap-2 shrink-0">
                  <Database className="w-4 h-4 text-[#3B82F6]" />
                  <span className="text-white font-semibold">MongoDB Demand Store:</span>
                </div>
                <span className="text-[#CBD5E1] text-[11px] leading-relaxed">Structured clinical requests &amp; inventory telemetry</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg border border-white/[0.04] bg-white/[0.02]">
                <div className="flex items-center gap-2 shrink-0">
                  <Activity className="w-4 h-4 text-[#60A5FA]" />
                  <span className="text-white font-semibold">PCA Imputation:</span>
                </div>
                <span className="text-[#CBD5E1] text-[11px] leading-relaxed">Dimensionality reduction across 7,000 donor features</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg border border-white/[0.04] bg-white/[0.02]">
                <div className="flex items-center gap-2 shrink-0">
                  <Cpu className="w-4 h-4 text-[#3B82F6]" />
                  <span className="text-white font-semibold">Pinecone Vector RAG:</span>
                </div>
                <span className="text-[#CBD5E1] text-[11px] leading-relaxed">Dense embeddings pairing demand with compatible registries</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg border border-white/[0.04] bg-white/[0.02]">
                <div className="flex items-center gap-2 shrink-0">
                  <Cloud className="w-4 h-4 text-[#60A5FA]" />
                  <span className="text-white font-semibold">AWS Bedrock &amp; Step Functions:</span>
                </div>
                <span className="text-[#CBD5E1] text-[11px] leading-relaxed">LLM priority reasoning &amp; state-machine coordination</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg border border-white/[0.04] bg-white/[0.02]">
                <div className="flex items-center gap-2 shrink-0">
                  <Bell className="w-4 h-4 text-[#3B82F6]" />
                  <span className="text-white font-semibold">AWS SNS Dispatch:</span>
                </div>
                <span className="text-[#CBD5E1] text-[11px] leading-relaxed">Automated multi-channel emergency alert routing</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
