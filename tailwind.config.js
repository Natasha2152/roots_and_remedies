/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Scan all JS/TS/React files inside the app folder
    "./components/**/*.{js,ts,jsx,tsx}",  // Scan components folder
    "./pages/**/*.{js,ts,jsx,tsx}", // If using the pages directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Example color customization
        secondary: "#FF9800",
      },
    },
  },
  plugins: [],
};
