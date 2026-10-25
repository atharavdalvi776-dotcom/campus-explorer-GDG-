import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, Users, CheckCircle2, Bookmark, ArrowRight, ShieldCheck, Share2 } from 'lucide-react';

export default function EventDetailDrawer({
  event,
  isOpen,
  onClose,
  onRegister,
  isSaved,
  onToggleSave,
  onShare
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

  if (!isOpen || !event) return null;

  const fillPercentage = Math.round((event.registeredCount / event.capacity) * 100);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-obsidian/85 backdrop-blur-md"
        />

        {/* Sliding Side Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative w-full max-w-2xl h-full bg-charcoal border-l border-muted-stone/20 overflow-y-auto shadow-glass-lg flex flex-col justify-between"
        >
          {/* Header Navigation Controls */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-charcoal/90 backdrop-blur-md border-b border-muted-stone/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded text-[11px] font-mono uppercase bg-forest text-lime border border-forest">
                {event.category}
              </span>
              <span className="text-xs font-mono text-muted-stone">
                ID: {event.slug}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleSave(event.id, 'event')}
                aria-label={isSaved ? "Remove from saved" : "Save event"}
                className="p-2 rounded-lg bg-obsidian border border-muted-stone/20 text-muted-stone hover:text-ivory hover:border-lime/50 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Bookmark className={`w-4 h-4 transition-colors duration-200 ${isSaved ? 'text-lime fill-lime' : ''}`} />
              </button>
              <button
                onClick={() => onShare(event.title)}
                aria-label="Share event link"
                className="p-2 rounded-lg bg-obsidian border border-muted-stone/20 text-muted-stone hover:text-ivory hover:border-lime/50 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                aria-label="Close details"
                className="p-2 rounded-lg bg-obsidian border border-muted-stone/20 text-muted-stone hover:text-ivory hover:border-lime/50 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Body Content */}
          <div className="p-6 sm:p-8 space-y-8 flex-1">
            {/* Main Visual Image Banner */}
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-muted-stone/20">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover filter brightness-[0.65]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ivory">
                <div className="flex items-center gap-2 bg-obsidian/80 px-3 py-1.5 rounded-lg border border-muted-stone/20">
                  <Calendar className="w-4 h-4 text-lime" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-obsidian/80 px-3 py-1.5 rounded-lg border border-muted-stone/20">
                  <Clock className="w-4 h-4 text-lime" />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>

            {/* Title & Metadata */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-stone mb-2">
                <MapPin className="w-4 h-4 text-lime shrink-0" />
                <span>{event.venue}</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-ivory tracking-tight mb-4">
                {event.title}
              </h2>
              <p className="text-sm sm:text-base text-muted-stone leading-relaxed font-light">
                {event.fullDescription}
              </p>
            </div>

            {/* Capacity Meter */}
            <div className="p-4 rounded-xl bg-obsidian/60 border border-muted-stone/15 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-stone">Current Registrations</span>
                <span className="text-lime font-bold">
                  {event.registeredCount} / {event.capacity} seats filled ({fillPercentage}%)
                </span>
              </div>
              <div className="w-full h-2 bg-charcoal rounded-full overflow-hidden">
                <div
                  className="h-full bg-lime rounded-full transition-all duration-300"
                  style={{ width: `${fillPercentage}%` }}
                ></div>
              </div>
              <div className="text-[11px] font-mono text-muted-stone/80 pt-1">
                Status: <span className="text-ivory font-medium">{event.status}</span> • Badge verification at entrance
              </div>
            </div>

            {/* Detailed Event Schedule */}
            {event.schedule && event.schedule.length > 0 && (
              <div>
                <h3 className="font-display font-semibold text-lg text-ivory mb-4 flex items-center gap-2">
                  <span>Programme Schedule</span>
                  <span className="text-xs font-mono text-lime px-2 py-0.5 rounded bg-forest/40 border border-forest">
                    {event.schedule.length} Sessions
                  </span>
                </h3>
                <div className="space-y-3">
                  {event.schedule.map((item, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-obsidian/40 border border-muted-stone/15 hover:border-lime/30 hover:bg-obsidian/70 hover:-translate-y-0.5 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-mono text-lime">{item.time}</div>
                        <div className="text-sm font-medium text-ivory">{item.title}</div>
                      </div>
                      <div className="text-xs font-mono text-muted-stone bg-charcoal px-2.5 py-1 rounded border border-muted-stone/15 shrink-0 self-start sm:self-auto">
                        {item.room}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Speakers & Lead Hosts */}
            {event.speakers && event.speakers.length > 0 && (
              <div>
                <h3 className="font-display font-semibold text-lg text-ivory mb-4">
                  Speakers & Faculty Hosts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.speakers.map((spk, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-obsidian/40 border border-muted-stone/15"
                    >
                      <div className="font-semibold text-sm text-ivory">{spk.name}</div>
                      <div className="text-xs text-muted-stone font-mono mt-0.5">{spk.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prerequisites & Note */}
            {event.prerequisites && (
              <div className="p-4 rounded-xl bg-forest/20 border border-forest/40 text-xs text-ivory space-y-1">
                <div className="font-mono font-semibold text-lime flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Important Entry Note</span>
                </div>
                <p className="text-muted-stone leading-relaxed">
                  {event.prerequisites}
                </p>
              </div>
            )}
          </div>

          {/* Sticky Drawer Footer CTA */}
          <div className="sticky bottom-0 z-20 px-6 py-4 bg-charcoal/95 backdrop-blur-md border-t border-muted-stone/15 flex items-center justify-between gap-4">
            <div className="text-xs font-mono text-muted-stone hidden sm:block">
              <div>Free admission for enrolled students</div>
              <div className="text-[10px] text-muted-stone/60">Digital entry pass issued on RSVP</div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="py-3 px-4 rounded-xl border border-muted-stone/20 text-xs font-mono text-muted-stone hover:text-ivory hover:border-muted-stone/40 active:scale-95 transition-all duration-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRegister(event, 'event');
                }}
                className="flex-1 sm:flex-initial py-3 px-6 rounded-xl bg-lime text-obsidian font-semibold text-xs tracking-wide hover:bg-lime-hover hover:shadow-lime-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>Register for Event</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

