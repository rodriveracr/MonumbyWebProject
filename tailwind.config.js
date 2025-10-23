/* src/tailwind.config.js */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        xl: '0 10px 15px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        numbyBlue: '#53B7E9',
        numbyDarkBlue: '#272A94',
        numbyGold: '#FFD44D',
        numbyPink: '#F24D8E',
        numbyTurquoise: '#38E3E6',
        numbyYellow: '#FFD940',
        numbyViolet: '#905FD3',
        numbyBlack: '#000000',
        numbyDark: '#101724',
        numbyNeonBlue: '#3EE6FF',
        numbyNeonPink: '#E62D95',
      },
      backgroundImage: {
        'numby-gradient': 'linear-gradient(90deg, #38E3E6 0%, #FFD940 50%, #905FD3 100%)',
      },
    },
  },
  plugins: [],
};