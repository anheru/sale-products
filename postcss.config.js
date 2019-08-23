const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue'
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  'plugins': [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'color-mod-function': true
      }
    }),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
