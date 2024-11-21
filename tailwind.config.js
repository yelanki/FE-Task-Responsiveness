/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFFFFF',
          100: '#FFCFB0',
          200: '#FFB78A',
          300: '#FF9654',
          400: '#FF8233',
          500: '#FF6300',
          600: '#E85A00',
          700: '#B54600',
          800: '#8C3600',
          900: '#6B2A00',
        },
        black: {
          50: '#E6E6E6',
          100: '#B0B0B0',
          200: '#8A8A8A',
          300: '#545454',
          400: '#333333',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '18': '18px',
        '24': '24px',
        '28': '28px',
        '36': '36px',
        '44': '44px',
        '56': '56px',
        '69': '69px',
      },
    },
  },
  plugins: [],
}