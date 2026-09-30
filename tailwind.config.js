/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        muted: "var(--muted)",
        rule: "var(--rule)",
        navy: "var(--navy)",
        "navy-deep": "var(--navy-deep)",
        brown: "var(--brown)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ['"Libre Franklin"', "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
      maxWidth: {
        measure: "68ch",
      },
    },
  },
  plugins: [],
};
