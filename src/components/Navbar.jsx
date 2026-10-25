import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bookmark, Menu, X, ArrowUpRight, Compass, Sparkles, Calendar, Users, Layers } from 'lucide-react';

export default function Navbar({
  onOpenSearch,
  onOpenRegistration,
  savedCount,
  onOpenSaved,
  activeSection
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Events', href: '#events', icon: Calendar },
    { label: 'Clubs', href: '#clubs', icon: Users },
    { label: 'Essentials & Labs', href: '#resources', icon: Layers },
    { label: 'Culture & Stats', href: '#stats', icon: Compass },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-obsidian/85 backdrop-blur-md border-b border-muted-stone/15 shadow-glass-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Editorial Monogram */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded-md"
            >
              <div className="w-9 h-9 rounded-lg bg-charcoal border border-muted-stone/20 flex items-center justify-center text-lime font-mono font-bold text-sm group-hover:border-lime/60 group-hover:shadow-lime-glow group-hover:scale-105 transition-all duration-200 shadow-inner">
                C/C
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-tight text-base sm:text-lg text-ivory flex items-center gap-1.5 group-hover:text-lime transition-colors duration-200">
                  CAMPUS <span className="text-lime">/</span> CULTURE
                </span>
                <span className="text-[10px] tracking-widest text-muted-stone font-mono uppercase">
                  Discovery Platform
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-charcoal/70 border border-muted-stone/15 backdrop-blur-md">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-muted-stone hover:text-ivory hover:bg-forest/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Live Status Pill & Right Action Group */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Live campus status badge */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-deep/60 border border-forest/50 hover:border-lime/40 text-[11px] font-mono text-lime transition-colors duration-200 cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
                </span>
                <span>4 LABS LIVE</span>
              </div>

              {/* Quick Search Trigger */}
              <button
                onClick={onOpenSearch}
                aria-label="Open search dialog"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal/80 border border-muted-stone/20 text-muted-stone hover:text-ivory hover:border-lime/50 hover:bg-charcoal hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 text-xs font-mono group"
              >
                <Search className="w-3.5 h-3.5 group-hover:text-lime transition-colors duration-200" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-obsidian rounded border border-muted-stone/20 text-muted-stone group-hover:text-lime transition-colors duration-200">
                  /
                </kbd>
              </button>

              {/* Saved Items Button */}
              {savedCount > 0 && (
                <button
                  onClick={onOpenSaved}
                  aria-label={`View ${savedCount} saved items`}
                  className="relative p-2 rounded-lg bg-charcoal/80 border border-muted-stone/20 text-muted-stone hover:text-ivory hover:border-lime/50 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <Bookmark className="w-4 h-4 text-lime fill-lime/20" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-lime text-obsidian text-[10px] font-bold flex items-center justify-center font-mono">
                    {savedCount}
                  </span>
                </button>
              )}

              {/* Primary Registration / Join CTA */}
              <button
                onClick={() => onOpenRegistration()}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-lime text-obsidian font-semibold text-xs tracking-wide hover:bg-lime-hover hover:shadow-lime-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 shadow-sm"
              >
                <span>Register Interest</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden p-2 rounded-lg bg-charcoal border border-muted-stone/20 text-ivory hover:border-lime/40 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 md:hidden bg-obsidian/95 backdrop-blur-xl border-b border-muted-stone/20 p-6 shadow-glass-lg"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-muted-stone/15">
                <div className="flex items-center gap-2 text-xs font-mono text-lime">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
                  </span>
                  <span>Campus is Live • 4 active labs</span>
                </div>
                <button
                  onClick={onOpenSearch}
                  className="text-xs font-mono text-muted-stone hover:text-lime flex items-center gap-1"
                >
                  <Search className="w-3.5 h-3.5" /> Search (/)
                </button>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className="flex items-center justify-between p-3 rounded-lg bg-charcoal/60 hover:bg-forest/30 border border-muted-stone/10 text-left text-sm text-ivory transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-muted-stone" />
                        <span>{link.label}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-stone" />
                    </button>
                  );
                })}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegistration();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-lime text-obsidian font-semibold text-sm tracking-wide shadow-sm"
                >
                  <span>Register Interest / Join</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

