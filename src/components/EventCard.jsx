import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowUpRight, Bookmark } from 'lucide-react';

export default function EventCard({
  event,
  onOpenDetails,
  onRegister,
  isSaved,
  onToggleSave
}) {
  const fillPercentage = Math.round((event.registeredCount / event.capacity) * 100);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Filling Fast':
        return 'bg-olive/40 text-lime border-olive';
      case 'Waitlist':
        return 'bg-stone-dark/40 text-muted-stone border-muted-stone/30';
      default:
        return 'bg-forest/40 text-lime border-forest';
    }
  };

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
        {/* Event Image Banner with Overlay */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover object-center filter brightness-[0.6] group-hover:scale-105 group-hover:brightness-[0.7] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-charcoal/80 backdrop-blur-md border border-muted-stone/20 text-ivory group-hover:border-lime/30 transition-colors duration-300">
              {event.category}
            </span>
            <div className="flex items-center gap-1.5">
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono border backdrop-blur-md transition-colors duration-300 ${getStatusBadge(event.status)}`}>
                {event.status}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(event.id, 'event');
                }}
                aria-label={isSaved ? "Remove from saved" : "Save event"}
                className="p-1.5 rounded-md bg-charcoal/80 border border-muted-stone/20 text-muted-stone hover:text-ivory hover:border-lime/50 hover:bg-charcoal hover:scale-110 active:scale-90 backdrop-blur-md transition-all duration-200"
              >
                <Bookmark className={`w-3.5 h-3.5 transition-colors duration-200 ${isSaved ? 'text-lime fill-lime' : ''}`} />
              </button>
            </div>
          </div>

          {/* Date pill overlay at bottom of image */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[11px] font-mono text-ivory bg-obsidian/80 px-2.5 py-1 rounded-md border border-muted-stone/20 group-hover:border-lime/30 backdrop-blur-md transition-colors duration-300">
            <Calendar className="w-3 h-3 text-lime" />
            <span>{event.date}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-stone mb-2">
            <Clock className="w-3.5 h-3.5 text-lime shrink-0" />
            <span>{event.time}</span>
          </div>

          <h4
            onClick={() => onOpenDetails(event)}
            className="font-display font-semibold text-base sm:text-lg text-ivory mb-2 line-clamp-2 group-hover:text-lime transition-colors duration-200 cursor-pointer"
          >
            {event.title}
          </h4>

          <p className="text-xs text-muted-stone leading-relaxed mb-4 line-clamp-2 font-light">
            {event.shortDescription}
          </p>

          <div className="flex items-center gap-1.5 text-xs text-muted-stone/90 mb-4 font-mono truncate">
            <MapPin className="w-3.5 h-3.5 text-lime shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>

          {/* Mini Capacity Indicator */}
          <div className="space-y-1 mb-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-muted-stone">
              <span>RSVPs</span>
              <span className="text-ivory">{event.registeredCount} / {event.capacity}</span>
            </div>
            <div className="w-full h-1 bg-obsidian rounded-full overflow-hidden">
              <div
                className="h-full bg-lime/80 rounded-full group-hover:bg-lime transition-colors duration-300"
                style={{ width: `${fillPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 pb-5 pt-2 flex items-center gap-2 border-t border-muted-stone/10">
        <button
          onClick={() => onOpenDetails(event)}
          className="flex-1 py-2 px-3 rounded-lg bg-charcoal hover:bg-forest/40 border border-muted-stone/20 hover:border-lime/50 text-xs font-mono text-ivory transition-all duration-200 flex items-center justify-center gap-1.5 group/btn active:scale-98"
        >
          <span>Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-muted-stone group-hover/btn:text-lime group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200" />
        </button>
        <button
          onClick={() => onRegister(event, 'event')}
          className="py-2 px-3.5 rounded-lg bg-lime text-obsidian text-xs font-semibold hover:bg-lime-hover hover:shadow-lime-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200"
        >
          RSVP
        </button>
      </div>
    </motion.div>
  );
}

