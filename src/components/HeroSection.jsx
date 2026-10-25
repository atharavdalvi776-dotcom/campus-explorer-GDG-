import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Compass, Sparkles, MapPin, Clock, Users, Terminal } from 'lucide-react';

export default function HeroSection({ onExploreCampus, onDiscoverCommunities }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Photography with Editorial Contrast Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Brutalist Campus Architecture & Courtyard"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.12] scale-105 transform motion-safe:animate-subtle-zoom"
          loading="eager"
        />
        {/* Layered Gradient Vignettes strictly in obsidian & charcoal tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/50 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Asymmetrical Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Main Editorial Text Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Live Campus Indicator Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal/80 border border-muted-stone/20 backdrop-blur-md mb-6 shadow-glass-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-ivory">
                Your campus is more than classrooms
              </span>
              <span className="text-muted-stone text-[10px]">/</span>
              <span className="text-[11px] font-mono text-lime font-medium">Autumn Term '26</span>
            </motion.div>

            {/* Oversized Editorial Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold text-ivory tracking-tighter leading-[0.98] mb-6"
            >
              Find your people. <br />
              <span className="text-ivory/80 font-normal italic">Make your</span>{' '}
              <span className="relative inline-block text-lime">
                mark.
                <svg
                  className="absolute left-0 -bottom-1 w-full h-2 text-lime/40"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="4" x2="100" y2="4" stroke="currentColor" strokeWidth="3" strokeDasharray="6 3" />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-stone max-w-2xl font-light leading-relaxed mb-8"
            >
              Discover the clubs, events, ideas and communities that make campus life worth remembering. An open index of university culture, student laboratories, and creative collectives.
            </motion.p>

            {/* Call to Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onExploreCampus}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-lime text-obsidian font-semibold text-sm tracking-wide hover:bg-lime-hover hover:shadow-lime-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Explore campus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>

              <button
                onClick={onDiscoverCommunities}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-charcoal/80 border border-muted-stone/25 text-ivory font-medium text-sm hover:border-lime/50 hover:bg-charcoal hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4 text-muted-stone group-hover:text-lime transition-colors duration-200" />
                <span>Discover communities</span>
              </button>
            </motion.div>
          </div>

          {/* Right Floating Editorial Glass Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-4"
          >
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden shadow-glass-md border border-muted-stone/20 hover:border-lime/30 transition-all duration-300">
              {/* Subtle top lime accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime via-olive to-forest"></div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono tracking-widest text-muted-stone uppercase">
                  Featured Dispatch
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-forest text-lime border border-lime/30">
                  FLAGSHIP
                </span>
              </div>

              <h3 className="font-display font-semibold text-lg text-ivory mb-2 line-clamp-2 hover:text-lime transition-colors duration-200 cursor-pointer" onClick={onExploreCampus}>
                Synapse 2026: Autonomous Robotics Trials
              </h3>

              <p className="text-xs text-muted-stone leading-relaxed mb-4 line-clamp-3">
                Live field tests across obstacle courses in the Centre for Advanced Robotics. 8 student engineering squads competing in autonomous SLAM.
              </p>

              <div className="space-y-2 pt-3 border-t border-muted-stone/15 text-xs text-muted-stone font-mono">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-lime" />
                  <span>Nov 14 • 14:00 – 19:30 IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-lime" />
                  <span>CAR Hall 3B • 178 / 220 spots</span>
                </div>
              </div>

              <button
                onClick={onExploreCampus}
                className="mt-5 w-full py-2.5 px-3 rounded-lg bg-forest/40 border border-forest/60 hover:border-lime/50 hover:bg-forest/60 text-xs font-mono text-ivory flex items-center justify-between group/dispatch transition-all duration-200 active:scale-98"
              >
                <span>View Flagship Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-lime group-hover/dispatch:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Cue & Metric Micro-bar */}
        <div className="mt-14 pt-6 border-t border-muted-stone/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-stone font-mono">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-ivory font-bold">48</span> Collectives
            </div>
            <span className="text-muted-stone/40">•</span>
            <div>
              <span className="text-ivory font-bold">120+</span> Annual Events
            </div>
            <span className="text-muted-stone/40">•</span>
            <div>
              <span className="text-ivory font-bold">8,400+</span> Active Members
            </div>
          </div>

          <div
            onClick={onExploreCampus}
            className="cursor-pointer inline-flex items-center gap-2 text-muted-stone hover:text-lime transition-all duration-200 group"
          >
            <span>Scroll to index</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-200 text-lime" />
          </div>
        </div>
      </div>
    </section>
  );
}

