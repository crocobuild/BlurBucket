import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blur: {
          bg: '#0A0A0F',
          'bg-secondary': '#10101A',
          'bg-tertiary': '#181828',
          'bg-elevated': '#20203A',
          accent: '#5271FF',
          'accent-hover': '#6B87FF',
          'accent-active': '#4060E0',
          cyan: '#2CBBFF',
          border: '#1C1C32',
          'border-hover': '#2A2A48',
        },
        'text-primary': '#FFFFFF',
        'text-secondary': '#D8D8E8',
        'text-tertiary': '#9090A8',
        'text-muted': '#606080',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '720px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(82, 113, 255, 0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(82, 113, 255, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
