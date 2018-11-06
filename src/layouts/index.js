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
        { name: 'description', content: 'Operate tokenized digital communities on the blockchain.' },
        { name: 'keywords', content: '' },
        { property: 'og:app_id', content: '360502811037110' },
        { property: 'og:url', content: 'https://nativeproject.one' },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'Native - Tokenized Digital Communities' },
        { property: 'og:description', content: 'Operate tokenized digital communities on the blockchain.' },
        { property: 'og:image', content: 'https://nativeproject.one/NativeLogoWhiteBackTrans.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@nativeproject_' },
        { name: 'twitter:title', content: 'Native - Tokenized Digital Communities' },
        { name: 'twitter:description', content: 'Operate tokenized digital communities on the blockchain.' },
        { name: 'twitter:image', content: 'https://nativeproject.one/NativeLogoWhiteBackTrans.png' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'chEdznCYN3OA7ITzOMmfnOsWkTOjkX86VD8PiIC8LRA' },
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

    {/* <script
        dangerouslySetInnerHTML={{
          __html: `
                  (function (d, t) {
                    var pp = d.createElement(t), s = d.getElementsByTagName(t)[0];
                    pp.src = '//app.pageproofer.com/overlay/js/3591/1855';
                    pp.type = 'text/javascript';
                    pp.async = true;
                    s.parentNode.insertBefore(pp, s);
                  })(document, 'script');
                `,
        }}
      /> */}
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
