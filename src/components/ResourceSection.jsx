import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, MapPin, Clock, ArrowUpRight, Check, Copy, ExternalLink, Cpu, Compass, BookOpen, Sparkles } from 'lucide-react';
import { CAMPUS_RESOURCES } from '../data/campusData';

export default function ResourceSection({ onToast }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [copiedLocation, setCopiedLocation] = useState(null);

  const handleAction = (item) => {
    onToast({
      title: item.title,
      message: `Navigating to ${item.location} • Hours: ${item.hours}`,
      type: 'info',
    });
  };

  const handleCopyLocation = (itemTitle, location) => {
    navigator.clipboard.writeText(location);
    setCopiedLocation(itemTitle);
    onToast({
      title: 'Location Copied',
      message: `"${location}" copied to clipboard.`,
      type: 'success',
    });
    setTimeout(() => setCopiedLocation(null), 2500);
  };

  const currentCategory = CAMPUS_RESOURCES[activeCategoryIndex];

  return (
    <section id="resources" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-muted-stone/15 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/30 border border-forest/50 text-[11px] font-mono text-lime uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Campus Infrastructure</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-tight">
              Essentials, Labs & Innovation
            </h2>
          </div>
          <p className="text-sm text-muted-stone max-w-md font-light leading-relaxed">
            Every lab badge, high-compute workstation, quiet garden, and discovery grant available to current students.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CAMPUS_RESOURCES.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 flex items-center gap-2 active:scale-95 ${
                  isActive
                    ? 'bg-lime text-obsidian font-semibold shadow-lime-glow hover:brightness-105'
                    : 'bg-charcoal/70 border border-muted-stone/15 text-muted-stone hover:text-ivory hover:border-lime/30 hover:bg-charcoal/90'
                }`}
              >
                <span>{cat.category}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors duration-200 ${isActive ? 'bg-obsidian/20 text-obsidian' : 'bg-obsidian text-muted-stone'}`}>
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentCategory.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-muted-stone/15 hover:border-lime/40 group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-obsidian border border-muted-stone/20 group-hover:border-lime/40 group-hover:text-lime flex items-center justify-center text-muted-stone font-mono text-xs transition-colors duration-300">
                    0{index + 1}
                  </span>
                  <button
                    onClick={() => handleCopyLocation(item.title, item.location)}
                    title="Copy campus location"
                    className="p-1.5 rounded-lg text-muted-stone hover:text-ivory hover:bg-forest/30 hover:border-lime/40 border border-transparent hover:scale-110 active:scale-95 transition-all duration-200 text-xs flex items-center gap-1 font-mono"
                  >
                    {copiedLocation === item.title ? (
                      <Check className="w-3.5 h-3.5 text-lime" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <h3 className="font-display font-semibold text-lg text-ivory mb-2 group-hover:text-lime transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="text-xs text-muted-stone leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-muted-stone/10 text-xs font-mono text-muted-stone">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-lime shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-lime shrink-0" />
                    <span>{item.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => handleAction(item)}
                  className="w-full py-2.5 px-3 rounded-xl bg-forest/30 border border-forest/50 hover:border-lime/50 hover:bg-forest/50 text-xs font-mono text-ivory flex items-center justify-between group/btn transition-all duration-200 active:scale-98"
                >
                  <span>{item.actionLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-lime group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

