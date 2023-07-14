/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.tsx'
  ],
  theme: {
    colors: {
      // Black
      black: '#000000',
      // White
      white: '#ffffff',
      // Gray
      'gray-100': '#E1E1E6',
      'gray-200': '#C4C4CC',
      'gray-400': '#7C7C8A',
      'gray-800': '#202024',
      'gray-900': '#121214',
      // Cyan
      'cyan-300': '#9BE1FB',
      'cyan-500': '#81D8F7',
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

