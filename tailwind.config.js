/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Blue from buttons
          dark: "#1D4ED8",
          light: "#60A5FA",
        },
        secondary: {
          DEFAULT: "#0F172A", // Dark background
          light: "#1E293B",
        },
        accent: {
          DEFAULT: "#0EA5E9", // Cyan/Light Blue
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
};
