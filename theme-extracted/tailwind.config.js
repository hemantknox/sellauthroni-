/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.njk'],
  theme: {
    extend: {
      colors: {
        'accent': {
          50: 'color-mix(in srgb, rgba(var(--cl-accent), <alpha-value>) 5%, white)',
          100: 'color-mix(in srgb, rgba(var(--cl-accent), <alpha-value>) 10%, white)',
          200: 'color-mix(in srgb, rgba(var(--cl-accent), <alpha-value>) 30%, white)',
          300: 'color-mix(in srgb, rgba(var(--cl-accent), <alpha-value>) 50%, white)',
          400: 'color-mix(in srgb, rgba(var(--cl-accent), <alpha-value>) 70%, white)',
          500: 'rgba(var(--cl-accent), <alpha-value>)',
          600: 'color-mix(in srgb, rgba(var(--cl-accent), <alpha-value>), black 10%)',
          700: 'color-mix(in srgb, rgba(var(--cl-accent), <alpha-value>), black 30%)',
          800: 'color-mix(in srgb, rgba(var(--cl-accent), <alpha-value>), black 50%)',
          900: 'color-mix(in srgb, rgba(var(--cl-accent), <alpha-value>), black 70%)'
        },
        'lux-blue': {
          DEFAULT: 'rgb(var(--lux-blue) / <alpha-value>)',
          light: 'rgb(var(--lux-blue-light) / <alpha-value>)',
          dark: 'rgb(var(--lux-blue-dark) / <alpha-value>)',
        },
        'lux-purple': {
          DEFAULT: 'rgb(var(--lux-purple) / <alpha-value>)',
          light: 'rgb(var(--lux-purple-light) / <alpha-value>)',
          dark: 'rgb(var(--lux-purple-dark) / <alpha-value>)',
        },
        'lux-success': 'rgb(var(--lux-success) / <alpha-value>)',
        'lux-warning': 'rgb(var(--lux-warning) / <alpha-value>)',
        'lux-error': 'rgb(var(--lux-error) / <alpha-value>)',
        'lux-n': {
          300: 'rgb(var(--lux-n-300) / <alpha-value>)',
          400: 'rgb(var(--lux-n-400) / <alpha-value>)',
          500: 'rgb(var(--lux-n-500) / <alpha-value>)',
          600: 'rgb(var(--lux-n-600) / <alpha-value>)',
          700: 'rgb(var(--lux-n-700) / <alpha-value>)',
          800: 'rgb(var(--lux-n-800) / <alpha-value>)',
          850: 'rgb(var(--lux-n-850) / <alpha-value>)',
          900: 'rgb(var(--lux-n-900) / <alpha-value>)',
          950: 'rgb(var(--lux-n-950) / <alpha-value>)',
        },
        't-primary': 'rgba(var(--cl-t-primary), <alpha-value>)',
        't-accent': 'rgba(var(--cl-t-accent), <alpha-value>)',
        'background': 'rgba(var(--cl-background), <alpha-value>)',
        'card': 'rgba(var(--cl-card), <alpha-value>)',
      },
      borderRadius: {
        'lux-sm': '8px',
        'lux-md': '12px',
        'lux-lg': '16px',
        'lux-xl': '24px',
      },
      boxShadow: {
        'lux-sm': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'lux-md': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'lux-lg': '0 16px 48px rgba(0, 0, 0, 0.5)',
        'lux-glow': '0 0 40px rgba(var(--lux-blue), 0.15)',
      },
      keyframes: {
        'announcement-fade': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'lux-fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'lux-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'lux-scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'lux-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'lux-glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(var(--lux-blue), 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(var(--lux-purple), 0.25)' },
        },
      },
      animation: {
        'announcement-fade': 'announcement-fade 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'lux-fade-up': 'lux-fade-up 500ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'lux-fade-in': 'lux-fade-in 500ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'lux-scale-in': 'lux-scale-in 300ms cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'lux-float': 'lux-float 4s ease-in-out infinite',
        'lux-glow': 'lux-glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: []
}
