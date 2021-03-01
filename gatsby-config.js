module.exports = {
    plugins:
        [
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    name: `src`,
                    path: `${__dirname}/src/`,
                },
            },
            'gatsby-plugin-dark-mode',
            'gatsby-transformer-remark',
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
            }],

    siteMetadata: {
        title: "Pelaman",
        siteUrl: `https://www.pelaman.com`,
        description: "What is hocus pocus"
    },

    flags: {
        THE_FLAG: false
    }
}