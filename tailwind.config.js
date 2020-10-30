module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    enabled: true
  },
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#E4E4E4',
          200: '#B4B4B4',
          300: '#8E8E8E',
          400: '#707070',
          500: '#595959',
          600: '#464646',
          700: '#373737',
          800: '#2C2C2C',
          900: '#232323',
          1000: '#1B1B1B'
        },
        dark: {
          surface: '#121212'
        },
        white: {
          100: 'rgba(255, 255, 255, 0)',
          200: 'rgba(255, 255, 255, 0.05)',
          300: 'rgba(255, 255, 255, 0.07)',
          400: 'rgba(255, 255, 255, 0.08)',
          500: 'rgba(255, 255, 255, 0.09)',
          600: 'rgba(255, 255, 255, 0.11)',
          700: 'rgba(255, 255, 255, 0.12)',
          800: 'rgba(255, 255, 255, 0.14)',
          900: 'rgba(255, 255, 255, 0.15)',
          1000: 'rgba(255, 255, 255, 0.16)',
          max: 'rgba(255, 255, 255, 0.78)'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'Roboto',
          '"Noto Sans"',
          '"Noto Sans KR"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1920px'
      }
    }
  }
}
