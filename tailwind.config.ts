import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs:  '500px',
      sm:  '600px',
      md:  '768px',
      lg:  '900px',
      xl:  '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4FD8',
          dark:    '#1340B0',
          light:   '#EEF2FF',
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark:    '#D97706',
        },
        emergency: {
          DEFAULT: '#DC2626',
          bg:      '#FEF2F2',
          dark:    '#B91C1C',
        },
        dark:    '#0F172A',
        text:    '#1E293B',
        muted:   '#64748B',
        border:  '#E2E8F0',
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', "'Segoe UI'", 'sans-serif'],
      },
      spacing: {
        section:      '5rem',
        'section-sm': '3rem',
        header:       '72px',
      },
      borderRadius: {
        sm:   '4px',
        md:   '8px',
        lg:   '12px',
        xl:   '20px',
        pill: '9999px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        md: '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        lg: '0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'hero-gradient':      'linear-gradient(135deg, #0F172A 0%, #1a2744 100%)',
        'emergency-gradient': 'linear-gradient(135deg, #7F1D1D 0%, #991B1B 100%)',
        'emergency-banner':   'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
      },
      gridTemplateColumns: {
        footer: '2fr 1fr 1fr 1.5fr',
      },
    },
  },
  plugins: [],
} satisfies Config
