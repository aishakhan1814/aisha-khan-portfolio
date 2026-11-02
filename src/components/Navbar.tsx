import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', name: 'Work', href: '#selected-works' },
    { num: '02', name: 'Capabilities', href: '#capabilities' },
    { num: '03', name: 'Recognition', href: '#recognition' },
    { num: '04', name: 'Education', href: '#education' },
    { num: '05', name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'py-3.5 bg-[#06080F]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'py-5 md:py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Wordmark Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-sm py-1"
          aria-label="Aisha Khan — Return to top"
        >
          <span className="font-mono font-bold text-lg text-[#3B82F6]">AK</span>
          <span className="hidden sm:inline-block font-mono text-xs text-[#94A3B8] pl-2 border-l border-white/10 tracking-tight">
            Aisha Khan
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-baseline gap-1.5 text-xs text-[#94A3B8] hover:text-white transition-colors duration-200 py-1"
            >
              <span className="font-mono text-[10px] text-[#64748B] group-hover:text-[#3B82F6] transition-colors">
                {link.num}
              </span>
              <span className="font-medium tracking-wide">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Right: Status Pill & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/[0.08] text-xs font-mono text-[#93C5FD] hover:border-[#3B82F6]/60 hover:text-white transition-all duration-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
            </span>
            <span className="text-[11px] hidden sm:inline">Open for roles</span>
            <span className="text-[11px] sm:hidden">Connect</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#94A3B8] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-md"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-5 bg-[#06080F]/95 backdrop-blur-xl border-b border-white/[0.08] animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm text-[#94A3B8] hover:text-[#3B82F6] py-2 border-b border-white/[0.04]"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-[#64748B]">{link.num}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
