import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        skeleton: 'var(--skeleton)',
        border: 'var(--btn-border)',
        input: 'var(--input)',
        brand: {
          dark: '#0D0D1A',
          surface: '#111827',
          accent: '#2563EB',
        },
        status: {
          pending: '#F59E0B',
          approved: '#10B981',
          rejected: '#EF4444',
        },
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      boxShadow: {
        input: [
          '0px 2px 3px -1px rgba(0, 0, 0, 0.1)',
          '0px 1px 0px 0px rgba(25, 28, 33, 0.02)',
          '0px 0px 0px 1px rgba(25, 28, 33, 0.08)',
        ].join(', '),
      },
      animation: {
        ripple: 'ripple 2s ease calc(var(--i, 0) * 0.2s) infinite',
        orbit: 'orbit calc(var(--duration) * 1s) linear infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        ripple: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(0.9)' },
        },
        orbit: {
          '0%': {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          '100%': {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
