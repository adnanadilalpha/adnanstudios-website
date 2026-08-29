import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: 'rgb(var(--background-rgb) / <alpha-value>)',
        foreground: 'rgb(var(--foreground-rgb) / <alpha-value>)',
        border: 'var(--border)',
        brand: {
          DEFAULT: 'rgb(var(--brand-rgb) / <alpha-value>)',
          light: 'rgb(var(--brand-light-rgb) / <alpha-value>)',
          dark: 'rgb(var(--brand-dark-rgb) / <alpha-value>)',
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    // Tailwind v4 gradient names on v3 — keeps class names forward-compatible
    plugin(({ addUtilities }) => {
      const directions: Record<string, string> = {
        t: 'to top',
        tr: 'to top right',
        r: 'to right',
        br: 'to bottom right',
        b: 'to bottom',
        bl: 'to bottom left',
        l: 'to left',
        tl: 'to top left',
      }
      addUtilities(
        Object.fromEntries(
          Object.entries(directions).map(([key, dir]) => [
            `.bg-linear-to-${key}`,
            { 'background-image': `linear-gradient(${dir}, var(--tw-gradient-stops))` },
          ])
        )
      )
    }),
  ],
}
export default config

