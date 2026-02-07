/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ========================================
        // SWISS-STYLE "PAPER & INK" PALETTE
        // Minimalist • Clean • Professional
        // ========================================

        // Canvas - Pure white backgrounds
        canvas: {
          DEFAULT: '#ffffff',
          subtle: '#f9fafb',    // Off-white for section differentiation
          muted: '#f3f4f6',     // Slightly darker for contrast areas
        },

        // Ink - Typography colors (High contrast)
        ink: {
          DEFAULT: '#111111',   // Jet Black - Headlines
          body: '#475569',      // Slate Gray - Body text
          muted: '#64748b',     // Lighter slate - Secondary text
          subtle: '#94a3b8',    // Very light - Tertiary/placeholder
        },

        // Accent - Deep Indigo (used sparingly, only buttons/CTAs)
        accent: {
          DEFAULT: '#4f46e5',   // Deep Indigo
          hover: '#4338ca',     // Darker on hover
          light: '#eef2ff',     // Very subtle background tint
          muted: '#818cf8',     // Lighter variant
        },

        // Borders & Dividers
        border: {
          DEFAULT: '#e5e7eb',   // Gray-200
          light: '#f3f4f6',     // Gray-100
          dark: '#d1d5db',      // Gray-300
        },

        // Legacy compatibility (maps to new indigo system)
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3',
          800: '#312e81',
          900: '#1e1b4b',
          950: '#0f0e29',
        },

        // Keep obsidian for gradual migration 
        obsidian: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#111111',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Swiss typography scale - Clean hierarchy
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'subheading': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        // Generous whitespace for minimal design
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        'strict': '80rem',    // 1280px - Strict container
        'content': '65ch',     // Optimal reading width
      },
      boxShadow: {
        // Subtle, elegant shadows (no glow effects)
        'soft': '0 1px 3px 0 rgb(0 0 0 / 0.05)',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'lifted': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'elevated': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'border': 'inset 0 0 0 1px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'swift': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
