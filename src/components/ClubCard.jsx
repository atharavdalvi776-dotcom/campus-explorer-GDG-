import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, ArrowUpRight, Bookmark, ShieldCheck, Sparkles } from 'lucide-react';

export default function ClubCard({
  club,
  onOpenProfile,
  onJoinClub,
  isSaved,
  onToggleSave
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-muted-stone/15 hover:border-lime/40"
    >
      <div>
        {/* Visual Cover Banner with Overlay */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={club.image}
            alt={club.name}
            className="w-full h-full object-cover object-center filter brightness-[0.55] group-hover:scale-105 group-hover:brightness-[0.65] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>

          {/* Top category & bookmark badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-charcoal/80 backdrop-blur-md border border-muted-stone/20 text-ivory group-hover:border-lime/30 transition-colors duration-300">
              {club.category}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(club.id, 'club');
              }}
              aria-label={isSaved ? "Remove from saved" : "Save club"}
              className="p-1.5 rounded-md bg-charcoal/80 border border-muted-stone/20 text-muted-stone hover:text-ivory hover:border-lime/50 hover:bg-charcoal hover:scale-110 active:scale-90 backdrop-blur-md transition-all duration-200"
            >
              <Bookmark className={`w-3.5 h-3.5 transition-colors duration-200 ${isSaved ? 'text-lime fill-lime' : ''}`} />
            </button>
          </div>

          {/* Monogram / Short Name Badge */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <div className="px-2.5 py-1 rounded bg-obsidian/90 border border-muted-stone/25 group-hover:border-lime/50 group-hover:shadow-lime-glow backdrop-blur-md text-[11px] font-mono font-bold text-lime transition-all duration-300">
              {club.shortName}
            </div>
            <span className="text-[11px] font-mono text-muted-stone bg-obsidian/75 px-2 py-0.5 rounded border border-muted-stone/15 backdrop-blur-md group-hover:border-muted-stone/30 transition-colors duration-300">
              Est. {club.foundedYear}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-stone mb-2">
            <Users className="w-3.5 h-3.5 text-lime shrink-0" />
            <span>{club.memberCount} Active Members</span>
          </div>

          <h4
            onClick={() => onOpenProfile(club)}
            className="font-display font-semibold text-base sm:text-lg text-ivory mb-2 line-clamp-1 group-hover:text-lime transition-colors duration-200 cursor-pointer"
          >
            {club.name}
          </h4>

          <p className="text-xs text-muted-stone leading-relaxed mb-4 line-clamp-2 font-light">
            {club.description}
          </p>

          {/* Venue & Schedule */}
          <div className="space-y-1.5 pt-2 border-t border-muted-stone/10 text-xs font-mono text-muted-stone">
            <div className="flex items-center gap-2 truncate">
              <Calendar className="w-3.5 h-3.5 text-lime shrink-0" />
              <span className="truncate">{club.meetingSchedule}</span>
            </div>
            <div className="flex items-center gap-2 truncate">
              <MapPin className="w-3.5 h-3.5 text-lime shrink-0" />
              <span className="truncate">{club.venue}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {club.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-obsidian/70 border border-muted-stone/15 text-muted-stone hover:border-lime/40 hover:text-ivory hover:bg-forest/20 transition-all duration-200 cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="px-5 pb-5 pt-2 flex items-center gap-2 border-t border-muted-stone/10">
        <button
          onClick={() => onOpenProfile(club)}
          className="flex-1 py-2 px-3 rounded-lg bg-charcoal hover:bg-forest/40 border border-muted-stone/20 hover:border-lime/50 text-xs font-mono text-ivory transition-all duration-200 flex items-center justify-center gap-1.5 group/btn active:scale-98"
        >
          <span>View Profile</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-muted-stone group-hover/btn:text-lime group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200" />
        </button>
        <button
          onClick={() => onJoinClub(club, 'club')}
          className="py-2 px-4 rounded-lg bg-forest/40 hover:bg-forest border border-forest/60 hover:border-lime/60 hover:shadow-lime-glow hover:-translate-y-0.5 active:translate-y-0 text-lime font-mono text-xs font-semibold active:scale-95 transition-all duration-200"
        >
          Join Club
        </button>
      </div>
    </motion.div>
  );
}

