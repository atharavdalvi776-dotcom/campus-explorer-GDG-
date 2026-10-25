import React, { useRef, useEffect } from 'react';
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function DiscoverySearch({
  searchQuery,
  onSearchChange,
  onClearSearch,
  totalResults,
  isSearching,
  activeTab,
  onTabChange
}) {
  const inputRef = useRef(null);

  // Keyboard shortcut '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Main Search Input Box with Glass Styling */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-stone" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search events, clubs, venues, topics (e.g. 'Robotics', 'Darkroom', 'Quad', 'Atrium')..."
            className="w-full pl-11 pr-24 py-3.5 bg-charcoal/80 border border-muted-stone/20 rounded-xl text-sm text-ivory placeholder-muted-stone/60 hover:border-muted-stone/40 focus:outline-none focus:border-lime/60 focus:ring-2 focus:ring-lime/20 backdrop-blur-md transition-all duration-200 font-sans shadow-glass-sm"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
            {searchQuery ? (
              <button
                onClick={onClearSearch}
                aria-label="Clear search input"
                className="p-1 rounded-md text-muted-stone hover:text-ivory hover:bg-forest/40 hover:scale-110 active:scale-90 transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono text-muted-stone/80 bg-obsidian rounded border border-muted-stone/15">
                press <kbd className="text-lime font-bold">/</kbd>
              </span>
            )}
          </div>
        </div>

        {/* Tab Switcher: View All vs Events vs Clubs */}
        <div className="flex items-center p-1 rounded-xl bg-charcoal/70 border border-muted-stone/20 shrink-0 self-start sm:self-auto">
          <button
            onClick={() => onTabChange('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 active:scale-95 ${
              activeTab === 'all'
                ? 'bg-forest/50 text-lime border border-lime/30 shadow-sm font-semibold'
                : 'text-muted-stone hover:text-ivory hover:bg-forest/20'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => onTabChange('events')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 active:scale-95 ${
              activeTab === 'events'
                ? 'bg-forest/50 text-lime border border-lime/30 shadow-sm font-semibold'
                : 'text-muted-stone hover:text-ivory hover:bg-forest/20'
            }`}
          >
            Events Only
          </button>
          <button
            onClick={() => onTabChange('clubs')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 active:scale-95 ${
              activeTab === 'clubs'
                ? 'bg-forest/50 text-lime border border-lime/30 shadow-sm font-semibold'
                : 'text-muted-stone hover:text-ivory hover:bg-forest/20'
            }`}
          >
            Clubs Only
          </button>
        </div>
      </div>

      {/* Query Status Bar */}
      {searchQuery && (
        <div className="flex items-center justify-between text-xs text-muted-stone px-1">
          <div className="flex items-center gap-2">
            <span>
              Matches for <strong className="text-ivory font-mono">"{searchQuery}"</strong>:
            </span>
            <span className="px-2 py-0.5 rounded-full bg-forest/40 text-lime font-mono border border-forest">
              {totalResults} {totalResults === 1 ? 'item' : 'items'} found
            </span>
          </div>
          <button
            onClick={onClearSearch}
            className="text-muted-stone hover:text-lime underline font-mono text-[11px] transition-colors"
          >
            Reset query
          </button>
        </div>
      )}
    </div>
  );
}

