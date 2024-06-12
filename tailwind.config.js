/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: { defult: '#e8eaeb', hover: '#dcdfe1', active: '#b7bcc2' },
          normal: { defult: '#16283a', hover: '#142434', active: '#12202e' },
          dark: { defult: '#111e2c', hover: '#0d1823', active: '#0a121a' },
          darker: '#080e14'
        },
        brand: '#F6C50A',
        secondary: {
          light: { defult: '#fef9e7', hover: '#fef6da', active: '#fcedb3' },
          normal: { defult: '#f6c50a', hover: '#ddb109', active: '#c59e08' },
          dark: { defult: '#b99408', hover: '#947606', active: '#6f5905' },
          darker: '#564504'
        },
        success: {
          light: { defult: '#e7f5ec', hover: '#dbefe2', active: '#b5dfc3' },
          normal: { defult: '#0f973d', hover: '#0e8837', active: '#0c7931' },
          dark: { defult: '#0b712e', hover: '#095b25', active: '#07441b' },
          darker: '#053515'
        },
        warning: {
          light: { defult: '#fef6e8', hover: '#fdf1dc', active: '#fbe2b7' },
          normal: { defult: '#f3a218', hover: '#db9216', active: '#c28213' },
          dark: { defult: '#b67a12', hover: '#92610e', active: '#6d490b' },
          darker: '#553908'
        },
        error: {
          light: { defult: '#fef6e8', hover: '#fdf1dc', active: '#fbe2b7' },
          normal: { defult: '#f3a218', hover: '#db9216', active: '#c28213' },
          dark: { defult: '#b67a12', hover: '#92610e', active: '#6d490b' },
          darker: '#553908'
        }
      },
      utilities: {
        '.tick': {
          display: 'inline-block',
          width: '1.55rem',
          height: '0.5rem',
          border: '2px solid currentColor',
          borderTop: 'none',
          borderRight: 'none',
          transform: 'rotate(-45deg)',
          marginRight: '0.25rem'
        }
      }
    }
  },
  plugins: []
}
