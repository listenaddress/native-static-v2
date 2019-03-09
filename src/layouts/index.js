import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from '../components/shared/header/header'
import Footer from '../components/shared/footer/footer'
import './index.scss'
import './typography.scss'
import './layouts.scss'
import './elements.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { 'http-equiv': 'content-type', content: 'text/html;charset=utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
        { name: 'description', content: 'Incentivize and Scale Digital Communities.' },
        { name: 'keywords', content: '' },
        { property: 'og:app_id', content: '360502811037110' },
        { property: 'og:url', content: 'https://nativeproject.one' },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'Native - Incentivize and Scale Digital Communities' },
        { property: 'og:description', content: 'Incentivize and Scale Digital Communities' },
        { property: 'og:image', content: 'https://nativeproject.one/ntv__preview.jpg' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@joinNative' },
        { name: 'twitter:title', content: 'Native - Incentivize and Scale Digital Communities' },
        { name: 'twitter:description', content: 'Incentivize and Scale Digital Communities' },
        { name: 'twitter:image', content: 'https://nativeproject.one/ntv__preview--twitter.jpg' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'uwfUfmaUFh6r6QeKiBxGhHKmsJ8pNghhMdVa1B43XpE' },
      ]}
      script={[
        { src: '/scripts/page-proofer.js', type: 'text/javascript' },
      ]}
    >
    </Helmet>

    <Header />
    <ParallaxProvider>
    <div className="page__wrapper">
      {children()}
    </div>
    </ParallaxProvider>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
