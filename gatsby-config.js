module.exports = {
  plugins:
  ['gatsby-plugin-dark-mode',
    {
    resolve: 'gatsby-plugin-favicon',
    options: {
        logo: './src/assets/logo.svg',
        injectHTML: true,
        icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            yandex: false,
            windows: false
        }
    }
}]
}