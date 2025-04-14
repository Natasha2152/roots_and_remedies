/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          cream: "#FAF3E0",
          pink: "#F7B7A3",
          mint: "#D5F3E5",
          sky: "#A7D8DE",
          lavender: "#E6E6FA",
        },
        text: {
          base: "#333",
        },
      },
      fontFamily: {
        geist: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
