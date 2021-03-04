module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '360px',
      // => @media (min-width: 375px) { ... }

      sm2: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        purple: '#F5EBFF',
        darkPurple: '#6c63ff',
        black: '#000',
        yellow: '#fdea7b',
        lightgrey: '#393e46',
        linkedIn: '#0076b5',
        instagram: '#9C5C95',
        facebook: '#1095f5',
        green: '#47d600',
        darkGreen: '#35B100',
        darkgrey: '#222831',
        whitedarktheme: '#EEEEEE',
        orange: '#b55400',
      },
      fontFamily:{
        'code': ['JetBrains Mono']
      },
      borderRadius:{
        '5xl': '25%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
