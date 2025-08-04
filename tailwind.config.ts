/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Baloo 2"', 'cursive'],
        body: ['"Quicksand"', 'sans-serif'],
        subtitle: ['"Quicksand"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}