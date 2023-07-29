/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white": "#F8F8FF",
      "offblack": "#1A1B1F",
      "beige": "#E3DDDA",
    },
    fontFamily: {
      'title': ['Encode Sans Semi Expanded', 'title'],
      'body': ['Epilogue', 'body'],

    },
  },
  plugins: [],
}

