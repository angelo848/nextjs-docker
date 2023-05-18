/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'p-yellow': '#F3E6AD',
      'p-blue': '#BFD9DC',
      'p-pink': '#F8D5E0',
      'p-orange': '#F0D9BC',
      'p-green': '#BCE7D6',
      'p-purple': '#C6B0D5'
    },
    fontFamily: {
      sans: ['Montserrat', 'Lumios-Marker', 'sans-serif'],
      main: ['Montserrat', 'sans-serif'],
      secondary: ['Lumios-Marker'],
      tertiary: ['Raleway']
    },
    extend: {
      spacing: {
        '100': '28rem',
        '200': '56rem'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
