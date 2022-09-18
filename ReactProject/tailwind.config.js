module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '360px',

      'xsm': '890px',

      'md': '1200px',

      'lg': '1500px',
      
    },
    extend: {
      colors: {
        'primary-50': '#ECFDF5',
        'primary-100' : "#D1FAE5",
        'primary-200' : '#A7F3D0',
        'primary-300' : '#6EE7B7',
        'primary-400' : '#34D399',
        'primary-500' : '#10B981',
        'primary-600' : '#059669',
        'primary-700' : '#047857',
        'primary-800' : '#065F46',
        'primary-900' : '#064E3B',
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ['rounded']
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}