import React from 'react';
import { ArrowUp, Mail, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Work', href: '#selected-works' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Recognition', href: '#recognition' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="site-footer"
      className="relative z-20 py-12 md:py-16 bg-[#06080F] text-[#EEEEF2] border-t border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Identity */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono font-bold text-base text-[#3B82F6]">AK</span>
              <span className="text-xs font-mono text-[#64748B] pl-2 border-l border-white/10 uppercase tracking-wider">
                Aisha Khan
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
              Software Engineer building intelligent systems, applied machine learning pipelines, and cryptographic readiness architectures.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs font-mono uppercase tracking-wider" aria-label="Footer Links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:alfalima920@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] text-xs font-mono text-[#93C5FD] hover:border-[#3B82F6]/50 hover:text-white transition-all"
              aria-label="Direct Email Link"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>alfalima920@gmail.com</span>
            </a>
            <a
              href="https://github.com/aishakhan1814"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md border border-white/10 bg-white/[0.02] text-[#94A3B8] hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#64748B]">
          <div>
            &copy; {new Date().getFullYear()} Aisha Khan. All verified metrics grounded in project artifacts.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 text-[#3B82F6]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
