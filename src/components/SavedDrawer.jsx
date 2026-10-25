import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bookmark, Trash2, ArrowRight, Calendar, Users, MapPin } from 'lucide-react';
import { EVENTS, CLUBS } from '../data/campusData';

export default function SavedDrawer({
  isOpen,
  onClose,
  savedIds,
  onRemoveSaved,
  onClearAllSaved,
  onOpenEventDetails,
  onOpenClubProfile,
  onRegister
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const savedEvents = EVENTS.filter((e) => savedIds.includes(e.id));
  const savedClubs = CLUBS.filter((c) => savedIds.includes(c.id));
  const totalSaved = savedEvents.length + savedClubs.length;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-obsidian/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative w-full max-w-md h-full bg-charcoal border-l border-muted-stone/20 overflow-y-auto shadow-glass-lg flex flex-col justify-between"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-charcoal/95 backdrop-blur-md border-b border-muted-stone/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-lime fill-lime" />
              <span className="font-display font-semibold text-base text-ivory">
                Saved Discoveries ({totalSaved})
              </span>
            </div>

            <div className="flex items-center gap-2">
              {totalSaved > 0 && (
                <button
                  onClick={onClearAllSaved}
                  aria-label="Clear all bookmarks"
                  className="p-1.5 rounded-lg text-muted-stone hover:text-red-400 text-xs font-mono transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                aria-label="Close bookmarks"
                className="p-1.5 rounded-lg bg-obsidian border border-muted-stone/20 text-muted-stone hover:text-ivory transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body List */}
          <div className="p-6 space-y-6 overflow-y-auto flex-1">
            {totalSaved === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 rounded-full bg-obsidian border border-muted-stone/20 flex items-center justify-center mx-auto text-muted-stone">
                  <Bookmark className="w-5 h-5" />
                </div>
                <div className="font-display font-semibold text-ivory text-base">
                  No bookmarks yet
                </div>
                <p className="text-xs text-muted-stone max-w-xs mx-auto leading-relaxed">
                  Click the bookmark icon on any event or club card to pin it here for quick access.
                </p>
              </div>
            ) : (
              <>
                {/* Saved Events */}
                {savedEvents.length > 0 && (
                  <div>
                    <div className="text-xs font-mono uppercase text-lime tracking-wider mb-3">
                      Events ({savedEvents.length})
                    </div>
                    <div className="space-y-3">
                      {savedEvents.map((event) => (
                        <div
                          key={event.id}
                          className="p-3.5 rounded-xl bg-obsidian/60 border border-muted-stone/15 hover:border-lime/30 hover:bg-obsidian/85 hover:-translate-y-0.5 transition-all duration-200 space-y-2 group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-forest/40 text-lime border border-forest">
                              {event.category}
                            </span>
                            <button
                              onClick={() => onRemoveSaved(event.id)}
                              aria-label="Remove item"
                              className="text-muted-stone hover:text-red-400 hover:scale-110 active:scale-90 transition-all duration-200 text-xs p-1"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div
                            onClick={() => {
                              onClose();
                              onOpenEventDetails(event);
                            }}
                            className="font-display font-medium text-sm text-ivory group-hover:text-lime transition-colors duration-200 cursor-pointer line-clamp-1"
                          >
                            {event.title}
                          </div>
                          <div className="flex items-center justify-between text-xs font-mono text-muted-stone pt-1">
                            <span>{event.date}</span>
                            <button
                              onClick={() => {
                                onClose();
                                onRegister(event, 'event');
                              }}
                              className="text-lime hover:underline font-semibold hover:brightness-110 transition-all duration-200"
                            >
                              RSVP
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Saved Clubs */}
                {savedClubs.length > 0 && (
                  <div>
                    <div className="text-xs font-mono uppercase text-lime tracking-wider mb-3">
                      Student Collectives ({savedClubs.length})
                    </div>
                    <div className="space-y-3">
                      {savedClubs.map((club) => (
                        <div
                          key={club.id}
                          className="p-3.5 rounded-xl bg-obsidian/60 border border-muted-stone/15 hover:border-lime/30 hover:bg-obsidian/85 hover:-translate-y-0.5 transition-all duration-200 space-y-2 group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-forest/40 text-lime border border-forest">
                              {club.category}
                            </span>
                            <button
                              onClick={() => onRemoveSaved(club.id)}
                              aria-label="Remove item"
                              className="text-muted-stone hover:text-red-400 hover:scale-110 active:scale-90 transition-all duration-200 text-xs p-1"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div
                            onClick={() => {
                              onClose();
                              onOpenClubProfile(club);
                            }}
                            className="font-display font-medium text-sm text-ivory group-hover:text-lime transition-colors duration-200 cursor-pointer line-clamp-1"
                          >
                            {club.name}
                          </div>
                          <div className="flex items-center justify-between text-xs font-mono text-muted-stone pt-1">
                            <span>{club.memberCount} members</span>
                            <button
                              onClick={() => {
                                onClose();
                                onRegister(club, 'club');
                              }}
                              className="text-lime hover:underline font-semibold hover:brightness-110 transition-all duration-200"
                            >
                              Join
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-charcoal/95 border-t border-muted-stone/15 text-center">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-forest/30 border border-forest hover:border-lime/40 text-xs font-mono text-ivory transition-colors"
            >
              Back to Explorer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

