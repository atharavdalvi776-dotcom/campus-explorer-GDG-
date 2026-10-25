import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../data/campusData';

export default function CategoryFilters({
  activeCategory,
  onSelectCategory,
  categoryCounts
}) {
  return (
    <div className="w-full overflow-x-auto py-2 no-scrollbar">
      <div className="flex items-center gap-2 min-w-max">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = categoryCounts ? categoryCounts[cat.id] ?? cat.count : cat.count;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime active:scale-95 ${
                isActive
                  ? 'text-obsidian font-semibold hover:brightness-105'
                  : 'text-muted-stone hover:text-ivory bg-charcoal/50 hover:bg-charcoal/85 border border-muted-stone/15 hover:border-lime/30 hover:-translate-y-0.5 active:translate-y-0 shadow-sm'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-lime rounded-xl shadow-lime-glow z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
              <span
                className={`relative z-10 px-1.5 py-0.2 rounded-md text-[10px] font-mono transition-colors duration-200 ${
                  isActive
                    ? 'bg-obsidian/20 text-obsidian font-bold'
                    : 'bg-charcoal text-muted-stone group-hover:text-ivory'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

