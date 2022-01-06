module.exports = {
    plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require("autoprefixer"),                                                    // example of plugin you might use
    ...(process.env.JEKYLL_ENV == "production"                                  // example of only using a plugin in production
      ? [require("cssnano")({ preset: "default" })]
      : [])
  ]
};