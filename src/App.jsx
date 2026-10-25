import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DiscoverySearch from './components/DiscoverySearch';
import CategoryFilters from './components/CategoryFilters';
import EventGrid from './components/EventGrid';
import EventDetailDrawer from './components/EventDetailDrawer';
import ClubDirectory from './components/ClubDirectory';
import ClubProfileModal from './components/ClubProfileModal';
import RegistrationModal from './components/RegistrationModal';
import SavedDrawer from './components/SavedDrawer';
import ResourceSection from './components/ResourceSection';
import CampusLifeStats from './components/CampusLifeStats';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { EVENTS, CLUBS } from './data/campusData';
import { Calendar, Users, Compass, ArrowRight, Sparkles, Filter } from 'lucide-react';

export default function App() {
  // Lenis Smooth Scroll Integration
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Search & Filtering State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'events', 'clubs'

  // Saved / Bookmarks State
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const stored = localStorage.getItem('campus_saved_items');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('campus_saved_items', JSON.stringify(savedIds));
    } catch (err) {
      console.warn('Unable to persist saved items', err);
    }
  }, [savedIds]);

  // Modals & Drawers State
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventDrawerOpen, setIsEventDrawerOpen] = useState(false);

  const [selectedClub, setSelectedClub] = useState(null);
  const [isClubModalOpen, setIsClubModalOpen] = useState(false);

  const [registrationTarget, setRegistrationTarget] = useState({ item: null, type: 'event' });
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Toast notifications state
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ title, message, type = 'info' }) => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Bookmark Toggle
  const handleToggleSave = useCallback(
    (id, type) => {
      setSavedIds((prev) => {
        const isAlreadySaved = prev.includes(id);
        if (isAlreadySaved) {
          addToast({
            title: 'Removed from Bookmarks',
            message: 'Item removed from your saved discoveries.',
            type: 'info',
          });
          return prev.filter((item) => item !== id);
        } else {
          addToast({
            title: 'Saved to Bookmarks',
            message: 'Added to your bookmarks for quick reference.',
            type: 'success',
          });
          return [...prev, id];
        }
      });
    },
    [addToast]
  );

  const handleClearAllSaved = useCallback(() => {
    setSavedIds([]);
    addToast({
      title: 'Bookmarks Cleared',
      message: 'All saved items have been cleared.',
      type: 'info',
    });
  }, [addToast]);

  // Handlers for Opening Modals
  const handleOpenEventDetails = (event) => {
    setSelectedEvent(event);
    setIsEventDrawerOpen(true);
  };

  const handleOpenClubProfile = (club) => {
    setSelectedClub(club);
    setIsClubModalOpen(true);
  };

  const handleOpenRegistration = (item = null, type = 'event') => {
    setRegistrationTarget({ item, type });
    setIsRegistrationOpen(true);
  };

  const handleShare = (title) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      addToast({
        title: 'Link Copied',
        message: 'Shareable campus link copied to clipboard.',
        type: 'success',
      });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
    setActiveTab('all');
    addToast({
      title: 'Filters Reset',
      message: 'Showing all campus events and collectives.',
      type: 'info',
    });
  };

  // Filter computation
  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      const matchesCategory =
        activeCategory === 'All' || event.category.toLowerCase() === activeCategory.toLowerCase();
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = event.title.toLowerCase().includes(q);
      const matchDesc = event.shortDescription.toLowerCase().includes(q) || event.fullDescription.toLowerCase().includes(q);
      const matchVenue = event.venue.toLowerCase().includes(q);
      const matchTags = event.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchTitle || matchDesc || matchVenue || matchTags;
    });
  }, [activeCategory, searchQuery]);

  const filteredClubs = useMemo(() => {
    return CLUBS.filter((club) => {
      const matchesCategory =
        activeCategory === 'All' || club.category.toLowerCase() === activeCategory.toLowerCase();
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchName = club.name.toLowerCase().includes(q) || club.shortName.toLowerCase().includes(q);
      const matchTagline = club.tagline.toLowerCase().includes(q);
      const matchDesc = club.description.toLowerCase().includes(q);
      const matchVenue = club.venue.toLowerCase().includes(q);
      const matchTags = club.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchName || matchTagline || matchDesc || matchVenue || matchTags;
    });
  }, [activeCategory, searchQuery]);

  const totalResults =
    (activeTab === 'events' ? filteredEvents.length : 0) +
    (activeTab === 'clubs' ? filteredClubs.length : 0) +
    (activeTab === 'all' ? filteredEvents.length + filteredClubs.length : 0);

  // Dynamic category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: EVENTS.length + CLUBS.length };
    EVENTS.forEach((e) => {
      counts[e.category] = (counts[e.category] || 0) + 1;
    });
    CLUBS.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="bg-obsidian text-ivory min-h-screen selection:bg-lime selection:text-obsidian flex flex-col font-sans">
      {/* Global Toast System */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Floating Glass Navbar */}
      <Navbar
        onOpenSearch={() => {
          const el = document.getElementById('discovery-search-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
              const input = el.querySelector('input');
              input?.focus();
            }, 300);
          }
        }}
        onOpenRegistration={() => handleOpenRegistration()}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        onExploreCampus={() => {
          document.getElementById('discovery-search-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onDiscoverCommunities={() => {
          document.getElementById('clubs')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Interactive Campus Discovery Section */}
      <main id="discovery-search-section" className="relative z-10 -mt-6 pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Glass Search & Filter Control Station */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6 shadow-glass-md border border-muted-stone/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-lime font-semibold">
                  Discovery Command Center
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-ivory tracking-tight mt-1">
                  Explore Campus Life
                </h2>
              </div>
              <div className="text-xs font-mono text-muted-stone">
                Active Catalog: <span className="text-ivory font-bold">{EVENTS.length}</span> Events •{' '}
                <span className="text-ivory font-bold">{CLUBS.length}</span> Collectives
              </div>
            </div>

            {/* Smart Search Bar */}
            <DiscoverySearch
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onClearSearch={() => setSearchQuery('')}
              totalResults={totalResults}
              isSearching={Boolean(searchQuery)}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {/* Category Pills */}
            <div className="pt-2 border-t border-muted-stone/15">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-muted-stone uppercase tracking-wider">
                  Filter by Discipline:
                </span>
                {(activeCategory !== 'All' || searchQuery) && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs font-mono text-lime hover:underline transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
              <CategoryFilters
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                categoryCounts={categoryCounts}
              />
            </div>
          </div>

          {/* Section: Events Discovery */}
          {(activeTab === 'all' || activeTab === 'events') && (
            <section id="events" className="space-y-6 pt-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-muted-stone/15 pb-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-lime uppercase tracking-wider mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Live & Upcoming Programme</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-ivory tracking-tight">
                    Campus Events & Field Trials
                  </h3>
                </div>
                <div className="text-xs font-mono text-muted-stone">
                  Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
                </div>
              </div>

              <EventGrid
                events={filteredEvents}
                onOpenDetails={handleOpenEventDetails}
                onRegister={(evt) => handleOpenRegistration(evt, 'event')}
                savedIds={savedIds}
                onToggleSave={handleToggleSave}
                onResetFilters={handleResetFilters}
                searchQuery={searchQuery}
                activeCategory={activeCategory}
              />
            </section>
          )}

          {/* Section: Clubs & Collectives Directory */}
          {(activeTab === 'all' || activeTab === 'clubs') && (
            <section id="clubs" className="space-y-6 pt-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-muted-stone/15 pb-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-lime uppercase tracking-wider mb-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>Student-Led Organizations</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-ivory tracking-tight">
                    Collectives, Labs & Guilds
                  </h3>
                </div>
                <div className="text-xs font-mono text-muted-stone">
                  Showing {filteredClubs.length} {filteredClubs.length === 1 ? 'collective' : 'collectives'}
                </div>
              </div>

              <ClubDirectory
                clubs={filteredClubs}
                onOpenProfile={handleOpenClubProfile}
                onJoinClub={(clb) => handleOpenRegistration(clb, 'club')}
                savedIds={savedIds}
                onToggleSave={handleToggleSave}
                onResetFilters={handleResetFilters}
                searchQuery={searchQuery}
                activeCategory={activeCategory}
              />
            </section>
          )}
        </div>
      </main>

      {/* Useful Campus Resources & Essentials */}
      <ResourceSection onToast={addToast} />

      {/* Numerical Stats & Cultural Manifesto */}
      <CampusLifeStats />

      {/* Footer */}
      <Footer
        onOpenRegistration={() => handleOpenRegistration()}
        onToast={addToast}
      />

      {/* Slide-in Event Detail Drawer */}
      <EventDetailDrawer
        event={selectedEvent}
        isOpen={isEventDrawerOpen}
        onClose={() => setIsEventDrawerOpen(false)}
        onRegister={(evt) => handleOpenRegistration(evt, 'event')}
        isSaved={selectedEvent ? savedIds.includes(selectedEvent.id) : false}
        onToggleSave={handleToggleSave}
        onShare={handleShare}
      />

      {/* Club Profile Modal */}
      <ClubProfileModal
        club={selectedClub}
        isOpen={isClubModalOpen}
        onClose={() => setIsClubModalOpen(false)}
        onJoinClub={(clb) => handleOpenRegistration(clb, 'club')}
        isSaved={selectedClub ? savedIds.includes(selectedClub.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* Unified Registration & RSVP Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        initialItem={registrationTarget.item}
        initialType={registrationTarget.type}
        onSuccessToast={addToast}
      />

      {/* Saved / Bookmarks Drawer */}
      <SavedDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedIds={savedIds}
        onRemoveSaved={(id) => handleToggleSave(id)}
        onClearAllSaved={handleClearAllSaved}
        onOpenEventDetails={handleOpenEventDetails}
        onOpenClubProfile={handleOpenClubProfile}
        onRegister={handleOpenRegistration}
      />
    </div>
  );
}

