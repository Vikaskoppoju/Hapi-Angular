/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-primary": "var(--brand-primary)",
        "brand-primary-dark": "var(--brand-primary-dark)",
        "brand-ink": "var(--brand-ink)",
        "brand-body": "var(--brand-body)",
        "brand-muted": "var(--brand-muted)",
        "brand-line": "var(--brand-line)",
        "brand-surface": "var(--brand-surface)",
        "brand-surface-alt": "var(--brand-surface-alt)",
        "brand-tint-blue": "var(--brand-tint-blue)",
        "brand-tint-rose": "var(--brand-tint-rose)",
        "brand-tint-amber": "var(--brand-tint-amber)",
        "brand-tint-teal": "var(--brand-tint-teal)",
        "brand-dark": "var(--brand-dark)",
        "brand-dark-alt": "var(--brand-dark-alt)",
        "accent-blue": "var(--accent-blue)",
        "accent-amber": "var(--accent-amber)",
        "accent-teal": "var(--accent-teal)",
        "accent-rose": "var(--accent-rose)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
