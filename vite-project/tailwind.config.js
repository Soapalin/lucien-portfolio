/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'title': ['Encode Sans Semi Expanded', 'title'],
      'body': ['Epilogue', 'body'],

    },
  },
  plugins: [],
}

