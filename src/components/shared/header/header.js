import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Link from 'gatsby-link'

import './header.scss'
import Logo from '../../shared/logo/logo'

import Pulse from 'react-reveal/Pulse'

class Header extends React.Component {
  state = {
    navOpen: false,
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    });
  }

  render() {
    const mobileNavClass = this.state.navOpen ?
      'navbar--mobile navbar--mobile--collapsed' : 'navbar--mobile';

    const hamburgerClass = this.state.navOpen ?
      'navbar__hamburger hamburger hamburger--spin is-active' : 'navbar__hamburger hamburger hamburger--spin';

    return (
      <div className="navbar">
        <Link to="/">
          <Logo />
        </Link>
        <div className="spacer"></div>

        <div className="navbar--desktop">
          <div className="navbar--links">
            <Link activeClassName="active" to="/how-it-works">How It Works</Link>
            <OutboundLink target="_blank" href="https://chat.nativeproject.one/hc/en-us">Chat</OutboundLink>
            <OutboundLink target="_blank" href="https://forum.nativeproject.one/hc/en-us">Forum</OutboundLink>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
                <title>ico--telegram</title>
                <path d="M23.72,3.19a.78.78,0,0,0-.79-.14C18.73,4.6,5.82,9.45.54,11.4a.83.83,0,0,0-.54.8A.82.82,0,0,0,.59,13c2.37.71,5.48,1.7,5.48,1.7S7.52,19,8.28,21.27a.87.87,0,0,0,.6.58.89.89,0,0,0,.81-.21l3.1-2.92s3.57,2.62,5.59,4.06a1.19,1.19,0,0,0,1.11.14,1.17,1.17,0,0,0,.73-.84C21.08,18,23.19,7.66,24,4A.79.79,0,0,0,23.72,3.19ZM19.61,7,9.43,16.13l-.38,3.51L7.37,14.1l11.9-7.59a.28.28,0,0,1,.34.44Z" transform="translate(0 -3)"/>
              </svg>
              Telegram
            </OutboundLink>
            <Pulse>
            <OutboundLink href="https://app.nativeproject.one" target="_blank" className="launch-app button">
              Launch App
            </OutboundLink>
            </Pulse>

          </div>
        </div>
        <button className={hamburgerClass} type="button" onClick={this.toggleNav}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
       <div className={mobileNavClass}>
          <div className="navbar--links">
            <Link to="/how-it-works" onClick={this.toggleNav}>How it works</Link>
            <OutboundLink className="join--telegram" href="https://telegram.me/joinnative" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
                <title>ico--telegram</title>
                <path d="M23.72,3.19a.78.78,0,0,0-.79-.14C18.73,4.6,5.82,9.45.54,11.4a.83.83,0,0,0-.54.8A.82.82,0,0,0,.59,13c2.37.71,5.48,1.7,5.48,1.7S7.52,19,8.28,21.27a.87.87,0,0,0,.6.58.89.89,0,0,0,.81-.21l3.1-2.92s3.57,2.62,5.59,4.06a1.19,1.19,0,0,0,1.11.14,1.17,1.17,0,0,0,.73-.84C21.08,18,23.19,7.66,24,4A.79.79,0,0,0,23.72,3.19ZM19.61,7,9.43,16.13l-.38,3.51L7.37,14.1l11.9-7.59a.28.28,0,0,1,.34.44Z" transform="translate(0 -3)"/>
              </svg>
              Telegram
            </OutboundLink>
            <OutboundLink target="_blank" href="https://app.nativeproject.one" className="button" onClick={this.toggleNav}>
              Launch App
            </OutboundLink>

          </div>
        </div>
      </div>
    )
  }
}

export default Header
