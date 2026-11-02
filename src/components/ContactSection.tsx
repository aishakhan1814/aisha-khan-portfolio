import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Engineering Role');

  const primaryEmail = 'alfalima920@gmail.com';

  const topics = [
    'Engineering Role',
    'Intelligent Systems / ML',
    'Cryptographic Systems',
    'Technical Collaboration',
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(primaryEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = primaryEmail;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const handleQuickMail = (topic: string) => {
    setSelectedTopic(topic);
    const subject = encodeURIComponent(`[Portfolio Contact] Inquiry regarding ${topic}`);
    const body = encodeURIComponent(`Hi Aisha,\n\nI reviewed your portfolio and would like to discuss: ${topic}.\n\nBest regards,\n[Your Name / Team]`);
    window.location.href = `mailto:${primaryEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative z-20 py-24 md:py-36 bg-[#06080F] text-[#EEEEF2] border-t border-white/[0.08] overflow-hidden"
      aria-label="Contact Aisha Khan"
    >
      {/* Background Subtle Blue Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#3B82F6]/[0.04] blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center sm:text-left">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="font-mono text-xs text-[#93C5FD] tracking-widest uppercase">
            05 // Get In Touch
          </span>
        </div>

        {/* Cinematic Closing Statement */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Have a system to build or a problem to solve?{' '}
            <span className="text-[#3B82F6]">Let's talk.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed">
            I am open to software engineering opportunities, intelligent systems research, and high-consequence technical collaborations. Reach out directly via electronic mail or explore my code on GitHub.
          </p>
        </div>

        {/* Master Email Card */}
        <div className="p-8 sm:p-10 md:p-12 rounded-2xl border border-[#3B82F6]/30 bg-[#0B0F19]/90 backdrop-blur-xl relative overflow-hidden mb-10 shadow-[0_0_40px_rgba(59,130,246,0.08)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="min-w-0">
              <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider block mb-2">
                Primary Direct Channel
              </span>
              <div className="overflow-x-auto pb-1 scrollbar-none">
                <a
                  href={`mailto:${primaryEmail}`}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-mono font-bold text-white hover:text-[#60A5FA] transition-colors whitespace-nowrap select-all tracking-tight block"
                >
                  {primaryEmail}
                </a>
              </div>
            </div>

            {/* Direct Actions */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`mailto:${primaryEmail}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-200 hover:bg-[#3B82F6] hover:shadow-[0_0_24px_rgba(59,130,246,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Launch Mail Client</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/30 text-xs font-mono uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#60A5FA]" />
                    <span className="text-[#60A5FA]">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#94A3B8]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Pre-filled Topic Dispatch */}
          <div className="pt-6">
            <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider block mb-3">
              Start an email with a pre-filled subject:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => handleQuickMail(t)}
                  className={`px-3.5 py-1.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-1.5 ${
                    t === selectedTopic
                      ? 'border-[#3B82F6] bg-[#3B82F6]/20 text-white'
                      : 'border-white/10 bg-white/[0.02] text-[#93C5FD] hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 hover:text-white'
                  }`}
                >
                  <span>{t}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Links Bar: GitHub & Verified Identity */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-[#CBD5E1]">Active for SWE &amp; AI/ML Roles</span>
          </div>

          <a
            href="https://github.com/aishakhan1814"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-[#60A5FA] transition-colors"
          >
            <Github className="w-4 h-4 text-[#93C5FD]" />
            <span>github.com/aishakhan1814</span>
            <ExternalLink className="w-3 h-3 text-[#64748B]" />
          </a>
        </div>

      </div>
    </section>
  );
};
