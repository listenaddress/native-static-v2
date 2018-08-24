import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
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
        { name: 'description', content: 'Native is a place to create and participate in community-based economics. We enable communities to realize their inherent value through local currency and set of governance.' },
        { name: 'keywords', content: '' },
        { property: 'og:app_id', content: '360502811037110' },
        { property: 'og:url', content: 'https://nativeproject.one' },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'Build Prosperous Communities' },
        { property: 'og:description', content: 'Native is a place to create and participate in community-based economics. We enable communities to realize their inherent value through local currency and set of governance.' },
        { property: 'og:image', content: 'https://nativeproject.one/ntv__logo--primary.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@nativeproject_' },
        { name: 'twitter:title', content: 'Build Prosperous Communities' },
        { name: 'twitter:description', content: 'Native is a place to create and participate in community-based economics. We enable communities to realize their inherent value through local currency and set of governance.' },
        { name: 'twitter:image', content: 'https://nativeproject.one/ntv__logo--primary.png' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />

    <Header />
    <div className="page__wrapper">
      {children()}
    </div>
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
