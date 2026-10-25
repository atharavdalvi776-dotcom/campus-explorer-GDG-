import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, Bookmark, Sparkles, CheckCircle2 } from 'lucide-react';

export default function FeaturedEvent({
  event,
  onOpenDetails,
  onRegister,
  isSaved,
  onToggleSave
}) {
  if (!event) return null;

  const fillPercentage = Math.round((event.registeredCount / event.capacity) * 100);

  return (
    <div className="relative rounded-2xl overflow-hidden glass-panel glass-panel-hover border border-muted-stone/20 shadow-glass-md group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Editorial Visual Section (7 cols) */}
        <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover object-center filter brightness-[0.6] group-hover:scale-105 group-hover:brightness-[0.7] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-charcoal"></div>

          {/* Badges Floating on Image */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-lime text-obsidian font-bold shadow-sm group-hover:shadow-lime-glow transition-shadow duration-300">
              Flagship Autumn Event
            </span>
            <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-charcoal/80 border border-muted-stone/25 text-ivory backdrop-blur-md group-hover:border-lime/30 transition-colors duration-300">
              {event.category}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-ivory">
            <div className="flex items-center gap-2 bg-obsidian/75 px-3 py-1.5 rounded-lg border border-muted-stone/20 backdrop-blur-md group-hover:border-lime/30 transition-colors duration-300">
              <Calendar className="w-3.5 h-3.5 text-lime" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-obsidian/75 px-3 py-1.5 rounded-lg border border-muted-stone/20 backdrop-blur-md group-hover:border-lime/30 transition-colors duration-300">
              <Clock className="w-3.5 h-3.5 text-lime" />
              <span>{event.time}</span>
            </div>
          </div>
        </div>

        {/* Right Editorial Info Section (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-charcoal/90">
          <div>
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-stone">
                <MapPin className="w-3.5 h-3.5 text-lime shrink-0" />
                <span className="truncate">{event.venue}</span>
              </div>
              <button
                onClick={() => onToggleSave(event.id, 'event')}
                aria-label={isSaved ? "Remove from bookmarks" : "Save event"}
                className="p-2 rounded-lg text-muted-stone hover:text-ivory hover:bg-forest/30 border border-transparent hover:border-lime/40 hover:scale-110 active:scale-90 transition-all duration-200"
              >
                <Bookmark className={`w-4 h-4 transition-colors duration-200 ${isSaved ? 'text-lime fill-lime' : ''}`} />
              </button>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-ivory tracking-tight mb-3 group-hover:text-lime transition-colors duration-300">
              {event.title}
            </h3>

            <p className="text-sm text-muted-stone leading-relaxed mb-6 font-light">
              {event.shortDescription}
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-obsidian border border-muted-stone/15 text-muted-stone hover:border-lime/40 hover:text-ivory hover:bg-charcoal transition-all duration-200 cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Capacity Meter */}
            <div className="space-y-1.5 mb-6 p-3 rounded-xl bg-obsidian/60 border border-muted-stone/15 group-hover:border-muted-stone/25 transition-colors duration-300">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-stone">Capacity Status</span>
                <span className="text-lime font-bold">
                  {event.registeredCount} / {event.capacity} RSVPs ({fillPercentage}%)
                </span>
              </div>
              <div className="w-full h-1.5 bg-charcoal rounded-full overflow-hidden">
                <div
                  className="h-full bg-lime rounded-full transition-all duration-500"
                  style={{ width: `${fillPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Action Button Group */}
          <div className="flex items-center gap-3 pt-4 border-t border-muted-stone/15">
            <button
              onClick={() => onOpenDetails(event)}
              className="flex-1 py-3 px-4 rounded-xl bg-forest/40 border border-forest hover:border-lime/50 hover:bg-forest/60 text-ivory text-xs font-mono tracking-wide flex items-center justify-center gap-2 group/btn transition-all duration-200 active:scale-98"
            >
              <span>Inspect Schedule & Speakers</span>
              <ArrowRight className="w-3.5 h-3.5 text-lime group-hover/btn:translate-x-1.5 transition-transform duration-200" />
            </button>
            <button
              onClick={() => onRegister(event, 'event')}
              className="py-3 px-5 rounded-xl bg-lime text-obsidian text-xs font-semibold hover:bg-lime-hover hover:shadow-lime-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200"
            >
              RSVP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

