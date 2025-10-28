/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Escanea todo src
    './components/**/*.{js,ts,jsx,tsx}', // Escanea components
    './app/**/*.{js,ts,jsx,tsx}', // Escanea app y subdirectorios como [locale]
    './src/styles/globals.css', // Escanea globals.css explícitamente
  ],
  theme: {
    extend: {
      dropShadow: {
        xl: '0 10px 15px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        monumbyPink: '#ec1574',
        monumbyBlue: '#00e6e6',
        monumbyYellow: '#f3ff5c',
        monumbyPurple: '#a14dfb',
        dark: '#111111',
        light: '#f8f8f8',
      },
      height: {
        'screen': '100vh',
      },
    },
  },
  plugins: [],
};