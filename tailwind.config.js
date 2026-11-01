/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080B12',
        surface: {
          DEFAULT: '#0D121F',
          light: '#131A2C',
          lighter: '#1C263D',
        },
        accent: {
          DEFAULT: '#7C9EFF',
          light: '#A5BDFF',
          dark: '#567EE3',
          glow: 'rgba(124, 158, 255, 0.25)',
        },
        text: {
          primary: '#EEEEF2',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          accent: 'rgba(124, 158, 255, 0.2)',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        widest: '0.25em',
        mega: '0.35em',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
