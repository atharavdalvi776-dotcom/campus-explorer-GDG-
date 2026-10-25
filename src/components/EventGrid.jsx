import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeaturedEvent from './FeaturedEvent';
import EventCard from './EventCard';
import { CalendarX, RefreshCw } from 'lucide-react';

export default function EventGrid({
  events,
  onOpenDetails,
  onRegister,
  savedIds,
  onToggleSave,
  onResetFilters,
  searchQuery,
  activeCategory
}) {
  const featuredEvent = events.find((e) => e.featured) || (events.length > 0 && !searchQuery ? events[0] : null);
  const regularEvents = featuredEvent && !searchQuery ? events.filter((e) => e.id !== featuredEvent.id) : events;

  if (events.length === 0) {
    return (
      <div className="text-center py-16 px-4 glass-panel rounded-2xl border border-muted-stone/15">
        <div className="w-12 h-12 rounded-full bg-charcoal border border-muted-stone/20 flex items-center justify-center mx-auto mb-4 text-muted-stone">
          <CalendarX className="w-6 h-6 text-lime" />
        </div>
        <h4 className="font-display font-semibold text-lg text-ivory mb-2">
          No events match this criteria
        </h4>
        <p className="text-sm text-muted-stone max-w-md mx-auto mb-6">
          We couldn't find any events matching {searchQuery ? `"${searchQuery}"` : ''} in the{' '}
          <span className="text-lime">{activeCategory}</span> category.
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-forest/40 border border-forest text-xs font-mono text-lime hover:bg-forest/60 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Search & Filters</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Featured Spotlight Card (shown when no search query is active or when viewing all) */}
      {featuredEvent && !searchQuery && activeCategory === 'All' && (
        <FeaturedEvent
          event={featuredEvent}
          onOpenDetails={onOpenDetails}
          onRegister={onRegister}
          isSaved={savedIds.includes(featuredEvent.id)}
          onToggleSave={onToggleSave}
        />
      )}

      {/* Grid of Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {regularEvents.map((evt) => (
            <EventCard
              key={evt.id}
              event={evt}
              onOpenDetails={onOpenDetails}
              onRegister={onRegister}
              isSaved={savedIds.includes(evt.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

