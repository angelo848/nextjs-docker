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
      'main': '#D98179',
      'secondary': '#D6B5A8',
      'tertiary': '#91DEF9'
    },
    fontFamily: {
      sans: ['Montserrat', 'Lumios-Marker', 'sans-serif'],
      main: ['Montserrat', 'sans-serif'],
      secondary: ['Lumios-Marker']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
