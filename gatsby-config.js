module.exports = {
  siteMetadata: {
    title: 'Native - Build Prosperous Communities',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '475881102900236',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://nativetoken.us17.list-manage.com/subscribe/post?u=8cfe75a0d91b2c88008e62109&id=9ce9042fb0',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-125567970-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        alwaysSendReferrer: true,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "native",
        short_name: "native",
        start_url: "/",
        background_color: "#f9f8f4",
        theme_color: "#f9f8f4",
        display: "minimal-ui",
        icon: "src/assets/favicon.png",
      },
    },
  ],
}
