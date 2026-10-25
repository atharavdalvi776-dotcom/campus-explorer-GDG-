# CAMPUS / CULTURE
### Interactive Campus Discovery & University Culture Platform

A premium, award-worthy interactive campus discovery experience designed for collegiate life, engineering societies, creative guilds, and research collectives. Built for the Google Developer Groups (GDG) college design and engineering showcase.

---

## ✦ Visual Identity & Design Direction

The platform pairs Swiss editorial typography with restrained glassmorphic depth, cinematic architectural photography, and purposeful micro-interactions.

### Strictly Controlled Color Palette
- **Obsidian (`#10120F`)**: Deep primary background providing rich cinematic contrast.
- **Warm Charcoal (`#191C17`)**: Tactile card and drawer surfaces with backdrop blur.
- **Ivory (`#F3F0E7`)**: High-contrast, legible editorial typography and headings.
- **Muted Stone (`#A5A79A`)**: Secondary metadata, timestamps, and architectural borders.
- **Electric Lime (`#D4FF55`)**: Deliberate active states, live indicators, and primary CTAs.
- **Deep Forest (`#234B38`)**: Supporting category badges and subtle depth glows.
- **Muted Olive (`#727B52`)**: Secondary accents and operational status tags.
*Strict adherence: Zero pink, purple, violet, or blue accent hues.*

### Editorial Typography
- **Headings & Display**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — geometric Swiss brutalism with intentional tracking and tight line-heights.
- **Body & Interface**: [Inter](https://fonts.google.com/specimen/Inter) — clean, rhythmic, and accessible across high-density metadata.
- **Code & Metadata**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — technical timestamps, session rooms, and ticket tokens.

---

## ✦ Key Architectural Features

### 1. Editorial Landing Experience
- Asymmetric hero grid with live campus status pill (*"4 LABS LIVE"*).
- Oversized headline: *"Find your people. Make your mark."*
- Supporting copy: *"Discover the clubs, events, ideas and communities that make campus life worth remembering."*
- Floating flagship event spotlight dispatch with real-time capacity telemetry.

### 2. Smart Campus Search & Category System
- **Real-Time Multi-Field Search**: Searches across event titles, club descriptions, venues, faculty speakers, and topic tags.
- **Keyboard Shortcut**: Press `/` anywhere to instantly focus search; press `Escape` to blur.
- **Animated Category Filters**: Filter between *All*, *Technical*, *Cultural*, *Sports*, *Social Impact*, and *Workshops* with Framer Motion spring physics.
- **Discipline Badges**: Instant counters displaying available listings per category.

### 3. Event Discovery & Detail Drawer
- **Flagship Spotlight**: High-impact editorial card featuring *Synapse 2026 Autonomous Robotics Showcase*.
- **Capacity Telemetry**: Visual fill meter displaying live RSVP percentage and status (*Open*, *Filling Fast*, *Waitlist*).
- **Slide-in Detail Drawer**: Complete hourly schedule (sessions, rooms, speakers), faculty host bios, entrance guidelines, and direct RSVP.

### 4. Student Collectives & Club Directory
- Comprehensive index covering robotics, quantum computing, film guilds, risograph printmaking, clean energy, bouldering, and formula racing.
- **Club Profile Modal**: Expanded mission statement, meeting rhythm, lab venues, leadership profiles, entry requirements, and curated FAQs accordion.

### 5. Client-Side RSVP & Pass Generation System
- Accessible registration modal with client-side validation (name, college email, branch, year of study).
- **Digital Pass Generation**: Produces a simulated digital entry pass with a unique token code (`#CMP-XXXX-XXXX`), date stamp, and copy-to-clipboard functionality.
- **Session Persistence**: Saved in local browser storage with zero external database dependencies.
- **Ethical Transparency**: Clear disclaimer confirming client-side portfolio demonstration status.

### 6. Campus Infrastructure & Resources
- Interactive catalog of academic fab labs, 128x GPU clusters, quiet quad pavilions, peer mentorship centers, and undergraduate innovation seed grants ($500–$4,000).
- One-click venue location copying and direct action feedback.

### 7. Bookmarks & Saved Discoveries
- Persistent bookmark drawer to pin and compare upcoming events and clubs across sessions.

---

## ✦ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom tokens
- **Kinetic Motion**: [Framer Motion 11](https://www.framer.com/motion/)
- **Smooth Kinetic Scrolling**: [Lenis](https://lenis.darkroom.engineering/) (respects `prefers-reduced-motion`)
- **Iconography**: [Lucide React](https://lucide.dev/)

---

## ✦ Getting Started & Running Locally

The dev server is currently running in the workspace on port `5173`.

```bash
# Install dependencies
npm install

# Start the Vite development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

