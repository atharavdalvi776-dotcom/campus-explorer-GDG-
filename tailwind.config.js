/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#10120F',
        charcoal: '#191C17',
        'charcoal-light': '#222620',
        ivory: '#F3F0E7',
        'ivory-muted': '#E4E0D5',
        'muted-stone': '#A5A79A',
        'stone-dark': '#55584E',
        lime: {
          DEFAULT: '#D4FF55',
          hover: '#C2EE40',
          dark: '#B0D930',
        },
        forest: {
          DEFAULT: '#234B38',
          deep: '#163325',
          light: '#2E6149',
        },
        olive: {
          DEFAULT: '#727B52',
          light: '#889363',
          dark: '#585F3E',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.04em',
        widest: '0.12em',
      },
      boxShadow: {
        'glass-sm': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'glass-md': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-lg': '0 12px 48px -4px rgba(0, 0, 0, 0.5)',
        'lime-glow': '0 0 24px -4px rgba(212, 255, 85, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'noise-pattern': "radial-gradient(rgba(212, 255, 85, 0.04) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};

