/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily:{
      serif:['DM Serif Display' , 'serif'],
      'source-code-pro ':['Source Code Pro','monospace']
    },
    extend: {
      screens: {
        'sm': '644px',        
        'md': '768px',        
        'lg': '1024px',       
        'xl': '1280px',       
      },
      fontSize: {
      
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors:{
        primary:"#842A3A",
        secondary:"#FDF2DB",
      
      }
    },
  },
  plugins: [],
}

