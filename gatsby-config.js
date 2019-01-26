module.exports = {
    siteMetadata: { title: `Title from siteMetadata` },
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-transformer-remark`,
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'GatsbyJS',
                short_name: 'GatsbyJS',
                start_url: '/',
                background_color: '#6b37bf',
                theme_color: '#6b37bf',
                display: 'standalone',
                icon: 'src/images/icon.png', // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`, //should be after manifest
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: { name: `src`, path: `${__dirname}/src/` },
        },
    ],
};
