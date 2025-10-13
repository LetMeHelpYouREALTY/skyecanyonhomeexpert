import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'skye-blue': '#0EA5E9',
        'skye-navy': '#1e3a8a',
        'skye-gold': '#fbbf24',
        'desert-sand': '#f5e6d3',
      },
    },
  },
  plugins: [],
}
export default config

