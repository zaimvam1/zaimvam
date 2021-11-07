module.exports = {
  mode: 'jit',
  purge: [
    'src/js/*.js',
    'src/css/*.css',
    './index.html'
  ],
  darkMode: 'media',
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
