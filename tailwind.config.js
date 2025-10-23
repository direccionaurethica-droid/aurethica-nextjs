/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { bg:"#0f0f0f", fg:"#F4F2EF", muted:"#B6B3AD", card:"#171717", accent:"#8A8A7A" },
      container: { center: true, padding: "1rem" },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" }
    },
  },
  plugins: [],
}
