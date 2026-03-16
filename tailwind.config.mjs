/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Silver State Brand Palette
        brand: {
          navy:    '#1B2A4A',   // primary dark — headers, footer
          blue:    '#0D6EFD',   // primary accent — CTAs, links
          sky:     '#38B6FF',   // secondary accent — highlights
          slate:   '#35384B',   // dark backgrounds
          cream:   '#F6F3E4',   // warm off-white
          silver:  '#C8CDD8',   // muted text / borders
          red:     '#E63946',   // emergency accent
        },
        dark: {
          900: '#0D1117',
          800: '#161B22',
          700: '#21262D',
        },
      },
      fontFamily: {
        // Display: strong, trustworthy — headings
        display: ['"Sora"', 'sans-serif'],
        // Body: clean, readable
        body: ['"DM Sans"', 'sans-serif'],
        // Accent: subtle italic for eyebrows/labels
        accent: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem',  { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg':  ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-md':  ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        // Hero headline — spans ~75-80% of container at all breakpoints
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card':    '0 4px 24px rgba(13,110,253,0.08)',
        'card-lg': '0 8px 48px rgba(13,110,253,0.12)',
        'hero':    '0 24px 80px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay':    'linear-gradient(135deg, rgba(27,42,74,0.92) 0%, rgba(27,42,74,0.6) 60%, rgba(27,42,74,0.2) 100%)',
        'card-overlay':    'linear-gradient(to top, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.5) 60%, transparent 100%)',
        'dark-overlay':    'linear-gradient(135deg, rgba(13,17,23,0.88) 0%, rgba(27,42,74,0.75) 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'slide-left': 'slideLeft 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
