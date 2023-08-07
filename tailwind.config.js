/** @type {import('tailwindcss').Config} */
// get space unit
const space = () => {
  const unit = 2.5
  const result = {}

  for (let i = 1; i <= 100; i++) {
    result[i] = `${unit * i}px`
  }

  return result
}

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      primary1: '#008dff',
      'primary1-50': '#f2f9ff',
      'primary1-100': '#def0ff',
      'primary1-200': '#91ceff',
      'primary1-300': '#61b8ff',
      'primary1-400': '#30a3ff',
      'primary1-600': '#006ec6',
      'primary1-700': '#004e8e',
      primary2: '#ffb334',
      'primary2-50': '#fff5e6',
      'primary2-100': '#ffe8c2',
      'primary2-200': '#ffdb9f',
      'primary2-300': '#ffcd7b',
      'primary2-400': '#ffc058',
      'primary2-600': '#ff9411',
      'primary2-700': '#ff8400',
      'gray-50': '#fafafa',
      'gray-100': '#f5f5f5',
      'gray-200': '#eee',
      'gray-300': '#e0e0e0',
      'gray-400': '#bdbdbd',
      'gray-500': '#9e9e9e',
      'gray-600': '#616161',
      'gray-700': '#424242',
      'gray-800': '#212121',
      'gray-900': '#000',
      secondary1: '#ffb88b',
      'main-card-border': '#d1e6f8',
      error: '#f55f4d',
      'error-pressed': '#e84e39',
      'error-light-pressed': '#feefed',
      issue: '#9c48b5',
      successful: '#37cc51'
    },
    borderRadius: {
      DEFAULT: '10px',
      full: '50%',
      sm: '5px',
      medium: '25px'
    },
    extend: {
      margin: space(),
      space: space(),
      spacing: space(),
      boxShadow: {
        DEFAULT: '0 0 4px 0 #ebd9c0'
      }
    }
  },
  // default load class
  safelist: [
    {
      pattern: /(grid-rows|grid-cols)-(1|2|3|4)/
    },
    {
      pattern: /(bg|text)-(.*)/
    }
  ],
  plugins: []
}
