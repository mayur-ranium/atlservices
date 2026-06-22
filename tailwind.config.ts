import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        },
        dark:    '#0F172A',
        text:    '#1E293B',
        muted:   '#64748B',
        border:  '#E2E8F0',
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "'Segoe UI'", "sans-serif"],
      },
      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1rem' }],
        sm:   ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem',     { lineHeight: '1.65' }],
        lg:   ['1.125rem', { lineHeight: '1.75rem' }],
        xl:   ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl':['1.5rem',   { lineHeight: '2rem' }],
        '3xl':['1.875rem', { lineHeight: '2.25rem' }],
        '4xl':['2.25rem',  { lineHeight: '2.5rem' }],
        '5xl':['3rem',     { lineHeight: '1.2' }],
        '6xl':['3.75rem',  { lineHeight: '1' }],
      },
      spacing: {
        'section':    '5rem',
        'section-sm': '3rem',
        'header':     '72px',
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
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config
