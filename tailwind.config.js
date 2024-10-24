/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#15B392",
        secondary: "#54C392",
        white: "#FFFFFF",
        bg: "#f1f5f9",
        text: "#0f172ae6",
      },
    },
  },
  plugins: [],
};
