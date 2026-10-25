import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Check, MapPin, Clock, Heart, Send } from 'lucide-react';

export default function Footer({ onOpenRegistration, onToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }) + ' IST'
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onToast({
        title: 'Valid Email Required',
        message: 'Please provide a valid institutional email to subscribe.',
        type: 'error',
      });
      return;
    }
    setSubscribed(true);
    onToast({
      title: 'Dispatches Subscribed',
      message: `Weekly campus digest will be delivered to ${email}.`,
      type: 'success',
    });
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian border-t border-muted-stone/15 pt-16 pb-12 text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-muted-stone/15">
          {/* Brand & Manifesto Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-charcoal border border-muted-stone/20 flex items-center justify-center text-lime font-mono font-bold text-xs">
                C/C
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-ivory">
                CAMPUS <span className="text-lime">/</span> CULTURE
              </span>
            </div>

            <p className="text-xs text-muted-stone leading-relaxed max-w-sm font-light">
              An independent, student-crafted digital discovery platform indexing the university's technical labs, cultural collectives, field expeditions, and creative publications.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-muted-stone">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-lime" />
                <span>28.5450° N, 77.1926° E</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-lime" />
                <span>{time || '13:00:00 IST'}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-[11px] uppercase tracking-wider text-lime font-bold">
              Directory Navigation
            </div>
            <ul className="space-y-2 text-muted-stone">
              <li>
                <a href="#events" className="hover:text-lime hover:translate-x-1.5 inline-block transition-all duration-200">
                  Flagship & Open Events
                </a>
              </li>
              <li>
                <a href="#clubs" className="hover:text-lime hover:translate-x-1.5 inline-block transition-all duration-200">
                  Student Collectives (48)
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-lime hover:translate-x-1.5 inline-block transition-all duration-200">
                  Maker Labs & Clusters
                </a>
              </li>
              <li>
                <a href="#stats" className="hover:text-lime hover:translate-x-1.5 inline-block transition-all duration-200">
                  Campus Governance & Stats
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenRegistration()}
                  className="text-lime hover:underline font-semibold hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Register Interest / Join →
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-lime font-bold">
              Campus Weekly Dispatch
            </div>
            <p className="text-xs text-muted-stone leading-relaxed font-light">
              Receive a curated Monday morning digest of upcoming robotics trials, darkroom workshops, and seed funding deadlines.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@campus.edu"
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-charcoal border border-muted-stone/20 text-xs text-ivory placeholder-muted-stone/50 hover:border-muted-stone/40 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime/30 transition-all duration-200"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="px-4 py-2.5 rounded-xl bg-lime text-obsidian text-xs font-semibold hover:bg-lime-hover hover:shadow-lime-glow hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4 text-obsidian" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="text-[10px] font-mono text-muted-stone/70">
                Zero spam. Instant unsubscribe anytime.
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-stone">
          <div>
            © 2026 CAMPUS / CULTURE. Crafted for the GDG College Assignment.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="hover:text-lime hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1 group"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

