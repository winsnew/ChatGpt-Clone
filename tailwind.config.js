/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '70': '70rem',
        'calc-100%-3rem': 'calc(100% - 3rem)',
        '100': '100%'
      },
      minHeight: {
        '100vh-14rem' : 'calc(100vh - 14rem)'
      }
    },
  },
  plugins: [],
}

