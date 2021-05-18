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
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    name: `images`,
                    path: `${__dirname}/src/assets/images`,
                },
            },
            `gatsby-plugin-sharp`,
            'gatsby-plugin-dark-mode',
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
            },
            {
                resolve: `gatsby-transformer-remark`,
                options: {
                    plugins: [
                        `gatsby-remark-relative-images`,
                        {
                            resolve: `gatsby-remark-images`,
                            options: {
                                maxWidth: 800,
                                linkImagesToOriginal: false,
                                sizeByPixelDensity: true,
                                showCaptions: true
                            }
                        },
                    ]
                }
            },
            {
                resolve: `gatsby-transformer-remark`
            }
        ],


    siteMetadata: {
        title: "Pelaman",
        siteUrl: `https://www.pelaman.com`,
        description: "Jurnal online"
    },

    flags: {
        THE_FLAG: false
    }
}