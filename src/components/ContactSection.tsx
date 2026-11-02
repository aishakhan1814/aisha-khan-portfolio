import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Github, Send } from 'lucide-react';

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
      : `Hi Aisha,\n\nI came across your portfolio and would like to connect regarding: ${selectedTopic}.\n\nBest regards,\n${senderName.trim() || 'Portfolio Visitor'}`;

    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${primaryEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative z-20 py-20 md:py-28 bg-[#080B12] text-[#EEEEF2] border-t border-white/[0.08]"
      aria-label="Contact Aisha Khan"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div id="contact-header" className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#7C9EFF] tracking-widest uppercase">
              05 // Contact
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#EEEEF2]">
            Start a Conversation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light max-w-2xl leading-relaxed">
            I am open to software engineering opportunities, applied machine learning projects, and technical collaborations. Reach out directly via electronic mail or GitHub.
          </p>
        </div>

        {/* 2-Column Clean Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Direct Contact Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-sm space-y-6">
              
              <div>
                <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider block mb-1">
                  Primary Contact
                </span>
                <div className="text-lg sm:text-xl font-mono text-[#7C9EFF] font-semibold select-all break-all">
                  {primaryEmail}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${primaryEmail}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#7C9EFF] text-[#080B12] font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-200 hover:bg-[#9cb6ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Launch Mail</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-[#EEEEF2] hover:bg-white/[0.06] text-xs font-mono uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#94A3B8]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub Link */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-[#64748B]">GitHub Codebases</span>
                <a
                  href="https://github.com/aishakhan1814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#EEEEF2] hover:text-[#7C9EFF] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/aishakhan1814</span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </a>
              </div>

            </div>
          </div>

          {/* Column 2: Direct Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-sm">
              <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider block mb-4">
                Compose Inquiry
              </span>

              <form onSubmit={handleLaunchEmailClient} className="space-y-4">
                
                {/* Topic Pills */}
                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] mb-2">
                    Topic
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                          selectedTopic === topic
                            ? 'bg-[#7C9EFF] text-[#080B12] font-semibold'
                            : 'bg-white/[0.03] border border-white/10 text-[#94A3B8] hover:text-white hover:border-white/20'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                    Your Name / Organization
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Engineering Lead / Recruiter"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#080B12]/80 text-[#EEEEF2] text-xs font-mono placeholder:text-[#64748B] focus:outline-none focus:border-[#7C9EFF]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                    Brief Note
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Share what you are building or exploring..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#080B12]/80 text-[#EEEEF2] text-xs font-mono placeholder:text-[#64748B] focus:outline-none focus:border-[#7C9EFF] resize-none"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#7C9EFF]/50 hover:bg-[#7C9EFF]/10 text-[#EEEEF2] hover:text-[#7C9EFF] text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Mail Client</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
