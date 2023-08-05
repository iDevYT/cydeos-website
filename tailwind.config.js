/** @type {import('tailwindcss').Config} */
// * Novagon UI 4 tailwindcss config
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secGray:{
          secondary: '#404040',
          100: '#A8A8A8',
        },
      },
      fontFamily: {
        albertsans: "'Albert Sans', sans-serif",
        poppins:  "'Poppins', sans-serif",
        jbmono: "'JetBrains Mono', monospace"
      },
    },
  },
}