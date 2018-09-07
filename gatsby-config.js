module.exports = {
  siteMetadata: {
    title: 'Native - Build Prosperous Communities',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://nativetoken.us17.list-manage.com/subscribe/post?u=8cfe75a0d91b2c88008e62109&id=9ce9042fb0',
      },
    },
  ],
}
