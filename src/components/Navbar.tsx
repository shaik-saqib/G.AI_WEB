import React, { useState, useEffect } from 'react';
import { Sparkles, Download } from 'lucide-react';

interface NavbarProps {
  // Sound controls removed
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#030712]/92 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          id="navbar-brand-link"
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-600/10 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
            <Sparkles className="w-4 h-4 text-cyan-400 group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
              GESTURE<span className="text-cyan-400">AI</span>
            </span>
            <span className="text-[10px] tracking-wider text-slate-400 font-mono -mt-0.5">
              Assistive AI • On-Device Vision
            </span>
          </div>
        </a>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md hover:shadow-cyan-500/20 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            id="nav-download-btn"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </a>
        </div>
      </div>
    </header>
  );
};

