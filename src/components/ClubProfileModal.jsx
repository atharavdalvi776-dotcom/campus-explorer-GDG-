import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Calendar, MapPin, Bookmark, ArrowRight, Globe, Github, ChevronDown, CheckCircle, Award, Compass, MessageSquare } from 'lucide-react';

export default function ClubProfileModal({
  club,
  isOpen,
  onClose,
  onJoinClub,
  isSaved,
  onToggleSave
}) {
  const [openFaq, setOpenFaq] = useState(0);

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

  if (!isOpen || !club) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-charcoal border border-muted-stone/20 rounded-2xl shadow-glass-lg overflow-hidden my-auto z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-charcoal/90 backdrop-blur-md border-b border-muted-stone/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded text-[11px] font-mono uppercase bg-forest text-lime border border-forest">
                {club.category}
              </span>
              <span className="text-xs font-mono text-muted-stone">
                Est. {club.foundedYear}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleSave(club.id, 'club')}
                aria-label={isSaved ? "Remove from bookmarks" : "Save club"}
                className="p-2 rounded-lg bg-obsidian border border-muted-stone/20 text-muted-stone hover:text-ivory hover:border-lime/50 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Bookmark className={`w-4 h-4 transition-colors duration-200 ${isSaved ? 'text-lime fill-lime' : ''}`} />
              </button>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-lg bg-obsidian border border-muted-stone/20 text-muted-stone hover:text-ivory hover:border-lime/50 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1">
            {/* Visual Cover Banner with Overlay */}
            <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden border border-muted-stone/20">
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-full object-cover filter brightness-[0.55]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-xs font-mono text-lime mb-1 uppercase tracking-wider font-semibold">
                    {club.shortName} Collective
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-ivory tracking-tight">
                    {club.name}
                  </h2>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-obsidian/85 border border-muted-stone/25 text-xs font-mono text-ivory flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-lime" />
                  <span>{club.memberCount} Members</span>
                </div>
              </div>
            </div>

            {/* Tagline & Extended Overview */}
            <div className="space-y-3">
              <div className="text-base sm:text-lg text-lime/90 font-medium font-sans">
                "{club.tagline}"
              </div>
              <p className="text-sm sm:text-base text-muted-stone leading-relaxed font-light">
                {club.longDescription || club.description}
              </p>
            </div>

            {/* Quick Operational Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-obsidian/50 border border-muted-stone/15 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-lime">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Meeting Times & Rhythm</span>
                </div>
                <div className="text-sm text-ivory font-medium pt-1">
                  {club.meetingSchedule}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-obsidian/50 border border-muted-stone/15 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-lime">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Primary Lab / Studio Venue</span>
                </div>
                <div className="text-sm text-ivory font-medium pt-1">
                  {club.venue}
                </div>
              </div>
            </div>

            {/* Leadership Profile */}
            <div className="p-4 rounded-xl bg-forest/20 border border-forest/40 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-charcoal border border-forest/60 flex items-center justify-center font-mono font-bold text-lime text-base shrink-0">
                {club.leadName.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-mono text-lime">Collective Leadership</div>
                <div className="text-base font-semibold text-ivory mt-0.5">{club.leadName}</div>
                <div className="text-xs text-muted-stone font-mono">{club.leadRole}</div>
              </div>
            </div>

            {/* Requirements & Gear */}
            {club.requirements && (
              <div className="p-4 rounded-xl bg-obsidian/40 border border-muted-stone/15 space-y-1.5">
                <div className="text-xs font-mono text-lime flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Entry & Skill Requirements</span>
                </div>
                <p className="text-xs text-muted-stone leading-relaxed">
                  {club.requirements}
                </p>
              </div>
            )}

            {/* FAQs Accordion */}
            {club.faqs && club.faqs.length > 0 && (
              <div>
                <h4 className="font-display font-semibold text-base text-ivory mb-3">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-2">
                  {club.faqs.map((faq, index) => {
                    const isOpenFaq = openFaq === index;
                    return (
                      <div
                        key={index}
                        className="rounded-xl border border-muted-stone/15 bg-obsidian/40 hover:border-muted-stone/30 hover:bg-obsidian/60 transition-all duration-200 overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpenFaq ? -1 : index)}
                          className="w-full px-4 py-3 text-left flex items-center justify-between text-xs sm:text-sm font-medium text-ivory hover:text-lime transition-colors duration-200"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-muted-stone transition-transform duration-200 shrink-0 ${
                              isOpenFaq ? 'rotate-180 text-lime' : ''
                            }`}
                          />
                        </button>
                        {isOpenFaq && (
                          <div className="px-4 pb-3.5 pt-0 text-xs text-muted-stone leading-relaxed border-t border-muted-stone/10 font-light">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Modal Footer CTA */}
          <div className="sticky bottom-0 z-20 px-6 py-4 bg-charcoal/95 backdrop-blur-md border-t border-muted-stone/15 flex items-center justify-between gap-4">
            <div className="text-xs font-mono text-muted-stone hidden sm:block">
              Open to all enrolled students • No membership dues
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
                  onJoinClub(club, 'club');
                }}
                className="flex-1 sm:flex-initial py-3 px-6 rounded-xl bg-lime text-obsidian font-semibold text-xs tracking-wide hover:bg-lime-hover hover:shadow-lime-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>Register Interest / Join</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

