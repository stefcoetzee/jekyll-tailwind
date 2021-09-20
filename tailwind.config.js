module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.JEKYLL_ENV == "production",
    content:[
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.html',
    ],
  },
  darkMode: false,
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [],
}
