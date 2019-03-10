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
            <OutboundLink target="_blank" href="https://medium.com/native-token">Blog</OutboundLink>
            <OutboundLink target="_blank" href="https://chat.nativeproject.one">Chat</OutboundLink>
            <OutboundLink target="_blank" href="https://forum.nativeproject.one">Forum</OutboundLink>
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
            <OutboundLink target="_blank" href="https://chat.nativeproject.one">Chat</OutboundLink>
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
