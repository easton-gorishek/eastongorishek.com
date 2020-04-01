/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Easton Gorishek',
    description: 'My personal website.',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Nunito',
            variants: ['600'],
          },
          {
            family: 'Poppins',
            variants: ['600', '700', '800'],
          },
          {
            family: 'Open Sans',
            variants: ['600'],
          },
          {
            family: 'Roboto',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
  ],
};
