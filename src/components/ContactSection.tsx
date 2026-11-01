import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  Radio,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Engineering Opportunity');
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const primaryEmail = 'alfalima920@gmail.com';

  const topics = [
    'Engineering Opportunity',
    'AI / ML Research',
    'Technical Collaboration',
    'General Inquiry',
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(primaryEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback for environments where clipboard API is restricted
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

  const handleLaunchEmailClient = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio Contact] ${selectedTopic}${senderName.trim() ? ` — from ${senderName.trim()}` : ''}`
    );
    const bodyText = senderMessage.trim()
      ? `Hi Aisha,\n\n${senderMessage.trim()}\n\nBest regards,\n${senderName.trim() || 'Portfolio Visitor'}`
      : `Hi Aisha,\n\nI came across your portfolio and would like to discuss: ${selectedTopic}.\n\nBest regards,\n${senderName.trim() || 'Portfolio Visitor'}`;

    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${primaryEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative z-20 py-28 md:py-40 bg-[#080B12] text-[#EEEEF2] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Anchor compatibility alias for prior bridge */}
      <span id="phase06-bridge" className="sr-only" aria-hidden="true" />

      {/* Atmospheric Radial Lighting Vignettes */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-[#7C9EFF]/[0.035] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full bg-[#3B82F6]/[0.025] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* =========================================================================
            SECTION MASTER HEADER: EDITORIAL DIRECTION
            ========================================================================= */}
        <div id="contact-header" className="mb-20 md:mb-28">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#7C9EFF]" />
            <span className="mono-label text-xs sm:text-sm text-[#7C9EFF] font-semibold tracking-widest">
              05 / OPEN CHANNEL
            </span>
            <span className="mono-label text-[10px] text-[#64748B] hidden sm:inline ml-4 pl-4 border-l border-white/10">
              DIRECT CONNECTION &amp; CONVERSATION
            </span>
          </div>

          <div className="overflow-hidden">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tightest leading-[0.98] text-[#EEEEF2]">
              <span className="block">HAVE SOMETHING IN MIND?</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EEEEF2] via-[#EEEEF2] to-[#7C9EFF]/80">
                GOOD WORK STARTS WITH A CONVERSATION.
              </span>
            </h2>
          </div>

          <div className="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/[0.08] pb-12">
            <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] font-light max-w-2xl leading-relaxed">
              I am open to software engineering opportunities, intelligent systems research, and technical collaborations.
              If you are building something ambitious, have a challenging computational problem, or simply want to connect—let's talk.
            </p>

            {/* Availability Telemetry Badge */}
            <div className="p-4 rounded-xl border border-white/[0.06] bg-[#0D121F]/40 backdrop-blur-sm shrink-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="mono-label text-xs font-semibold text-emerald-400 tracking-wider">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
              <span className="text-xs text-[#94A3B8] font-light block">
                Software Engineering &amp; Applied AI/ML
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CONTACT CHANNELS & INTENT COMPOSER ASYMMETRIC GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* -----------------------------------------------------------------------
              COLUMN 1: DIRECT CONTACT CHANNELS & TELEMETRY (5 COLS)
              ----------------------------------------------------------------------- */}
          <div id="contact-channels" className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-8 sm:p-10 rounded-2xl border border-[#7C9EFF]/30 bg-gradient-to-br from-[#0D121F]/90 via-[#0D121F]/50 to-[#080B12]/80 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3.5 py-1.5 bg-[#7C9EFF]/10 border-b border-l border-[#7C9EFF]/30 font-mono text-[10px] text-[#7C9EFF] tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#7C9EFF]" />
                PRIMARY CHANNEL
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#7C9EFF]/10 border border-[#7C9EFF]/30 flex items-center justify-center text-[#7C9EFF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">Direct Inbox</span>
                  <span className="text-sm font-mono text-[#EEEEF2] font-semibold">Verified Electronic Mail</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/90 mb-6">
                <span className="block text-xs font-mono text-[#64748B] mb-1">Email Address</span>
                <span className="text-base sm:text-lg font-mono font-medium text-[#7C9EFF] break-all select-all">
                  {primaryEmail}
                </span>
              </div>

              {/* Action Buttons: Native Mailto & Clipboard Copy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${primaryEmail}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#7C9EFF] text-[#080B12] font-medium text-xs font-mono uppercase tracking-wider transition-all duration-300 hover:bg-[#9cb6ff] hover:shadow-[0_0_20px_rgba(124,158,255,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Mail</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-[#EEEEF2] hover:bg-white/[0.08] hover:border-white/20 font-medium text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#94A3B8]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <p className="mt-4 text-xs text-[#94A3B8] font-light leading-relaxed">
                Direct mailto opens in your default desktop or mobile mail client. Feel free to send brief inquiries, project proposals, or scheduling requests.
              </p>
            </div>

            {/* Communication Telemetry Card */}
            <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md space-y-4">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block">
                Communication Parameters
              </span>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.04] bg-[#080B12]/60">
                  <span className="flex items-center gap-2 text-[#94A3B8]">
                    <MapPin className="w-3.5 h-3.5 text-[#7C9EFF]" />
                    <span>Location Base</span>
                  </span>
                  <span className="text-[#EEEEF2] font-semibold">Hyderabad, India (IST)</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.04] bg-[#080B12]/60">
                  <span className="flex items-center gap-2 text-[#94A3B8]">
                    <Clock className="w-3.5 h-3.5 text-[#7C9EFF]" />
                    <span>Expected Response</span>
                  </span>
                  <span className="text-[#EEEEF2] font-semibold">Within 24–48 Hours</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.04] bg-[#080B12]/60">
                  <span className="flex items-center gap-2 text-[#94A3B8]">
                    <Radio className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Communication</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">Open &amp; Direct</span>
                </div>
              </div>
            </div>

          </div>

          {/* -----------------------------------------------------------------------
              COLUMN 2: INTERACTIVE EMAIL INTENT COMPOSER (7 COLS)
              Zero fake submissions — Generates direct, pre-filled client mailto
              ----------------------------------------------------------------------- */}
          <div id="contact-composer" className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md relative">
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#7C9EFF]" />
                  <span className="mono-label text-xs sm:text-sm text-[#7C9EFF] font-semibold tracking-wider">
                    INTENT COMPOSER
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#64748B]">DIRECT NATIVE DISPATCH</span>
              </div>

              <p className="text-sm text-[#94A3B8] font-light leading-relaxed mb-6">
                Select your inquiry topic and optional message notes. Clicking dispatch opens your configured email client with a pre-formatted draft ready to review and send.
              </p>

              <form onSubmit={handleLaunchEmailClient} className="space-y-6">
                {/* Topic Selector Pills */}
                <div>
                  <label className="block text-xs font-mono text-[#EEEEF2] uppercase tracking-wider mb-2.5">
                    Select Topic / Context
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {topics.map((topic) => {
                      const isSelected = selectedTopic === topic;
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setSelectedTopic(topic)}
                          className={`p-3 rounded-xl border text-left text-xs font-mono transition-all duration-300 flex items-center justify-between ${
                            isSelected
                              ? 'border-[#7C9EFF] bg-[#7C9EFF]/10 text-[#EEEEF2] shadow-[0_0_15px_rgba(124,158,255,0.15)]'
                              : 'border-white/[0.06] bg-[#080B12]/60 text-[#94A3B8] hover:text-[#EEEEF2] hover:border-white/20'
                          }`}
                        >
                          <span>{topic}</span>
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isSelected ? 'bg-[#7C9EFF]' : 'bg-transparent border border-white/20'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Sender Name */}
                <div>
                  <label htmlFor="sender-name" className="block text-xs font-mono text-[#EEEEF2] uppercase tracking-wider mb-2">
                    Your Name / Organization <span className="text-[#64748B] normal-case">(optional)</span>
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Chen or Engineering Lead at..."
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-[#080B12]/80 text-[#EEEEF2] placeholder-[#64748B] text-sm focus:outline-none focus:border-[#7C9EFF] focus:ring-1 focus:ring-[#7C9EFF] transition-colors duration-200"
                  />
                </div>

                {/* Optional Note / Message */}
                <div>
                  <label htmlFor="sender-message" className="block text-xs font-mono text-[#EEEEF2] uppercase tracking-wider mb-2">
                    Message Summary <span className="text-[#64748B] normal-case">(optional context)</span>
                  </label>
                  <textarea
                    id="sender-message"
                    rows={4}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Briefly describe the role, research project, or topic you would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-[#080B12]/80 text-[#EEEEF2] placeholder-[#64748B] text-sm focus:outline-none focus:border-[#7C9EFF] focus:ring-1 focus:ring-[#7C9EFF] transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Dispatch Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#7C9EFF] text-[#080B12] font-semibold text-xs sm:text-sm font-mono uppercase tracking-wider transition-all duration-300 hover:bg-[#9cb6ff] hover:shadow-[0_0_25px_rgba(124,158,255,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF]"
                >
                  <Send className="w-4 h-4" />
                  <span>Open Formatted Draft in Email Client</span>
                </button>

                {/* Transparency / Honesty Guarantee Notice */}
                <div className="flex items-start gap-2 pt-2 text-[11px] font-mono text-[#64748B] leading-relaxed">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7C9EFF] shrink-0 mt-0.5" />
                  <span>
                    Direct mailto dispatch: Opens directly in your default email client. No third-party data tracking, intermediate databases, or fabricated submission states.
                  </span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
