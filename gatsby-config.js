/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// eslint-disable-next-line no-undef
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
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          // eslint-disable-next-line no-undef
          default: require.resolve('./src/templates/mdx-page.js'),
        },
        extensions: ['.mdx', '.md', '.markdown'],
      },
    },
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
