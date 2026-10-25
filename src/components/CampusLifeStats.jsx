import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, ShieldCheck, Zap } from 'lucide-react';
import { CAMPUS_STATS } from '../data/campusData';

export default function CampusLifeStats() {
  return (
    <section id="stats" className="py-20 relative bg-charcoal/40 border-y border-muted-stone/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/30 border border-forest/50 text-[11px] font-mono text-lime uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Campus Dynamics</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ivory tracking-tight mb-3">
            Scale, Community & Autonomy
          </h2>
          <p className="text-sm text-muted-stone font-light leading-relaxed">
            All collectives operate with student governance, audited transparent funding, and open-door membership.
          </p>
        </div>

        {/* Swiss Editorial Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAMPUS_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-charcoal/80 border border-muted-stone/15 hover:border-lime/40 hover:-translate-y-1.5 hover:shadow-glass-md transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-stone/80 group-hover:text-lime transition-colors duration-300 mb-3">
                  Index / 0{idx + 1}
                </div>
                <div className="font-display font-bold text-4xl sm:text-5xl text-ivory group-hover:text-lime group-hover:scale-[1.02] transition-all duration-300 origin-left tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-sm text-ivory mb-2 group-hover:text-ivory transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-muted-stone leading-relaxed font-light pt-4 border-t border-muted-stone/10 group-hover:border-muted-stone/20 transition-colors duration-300">
                {stat.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Editorial Quote Banner */}
        <div className="mt-14 p-8 rounded-2xl glass-panel glass-panel-hover border border-muted-stone/20 hover:border-lime/30 transition-all duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-display text-lg sm:text-xl text-ivory italic leading-snug mb-2">
              "The best education at university happens in the five hours after the lectures end — inside the darkrooms, machine bays, sprint tracks, and late-night research circles."
            </p>
            <div className="text-xs font-mono text-lime">
              CAMPUS EXPLORER • CULTURE MANIFESTO
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-xl bg-forest/40 border border-forest text-xs font-mono text-ivory">
              Independent • Student-Run
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

