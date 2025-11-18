// tailwind.config.js
module.exports = {
  darkMode: 'class', // << important: use class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
