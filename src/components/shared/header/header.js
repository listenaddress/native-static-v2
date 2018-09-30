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
            <Link activeClassName="active" exact to="/">Home</Link>
            <Link activeClassName="active" to="/how-it-works">How it works</Link>
            <Link activeClassName="active" to="/project">Project</Link>
            <OutboundLink target="_blank" href="https://drive.google.com/file/d/13vedYkjzF-HpcC9I_JO6683bWls_uj4W/view?usp=sharing">Whitepaper</OutboundLink>
            <Pulse>
            <OutboundLink href="/" className="button">
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
            <Link to="/" onClick={this.toggleNav}>Home</Link>
            <Link to="/how-it-works" onClick={this.toggleNav}>How it works</Link>
            <Link to="/project" onClick={this.toggleNav}>Project</Link>
            <OutboundLink target="_blank" href="https://drive.google.com/file/d/13vedYkjzF-HpcC9I_JO6683bWls_uj4W/view?usp=sharing">Whitepaper</OutboundLink>
            <OutboundLink href="/" className="button" onClick={this.toggleNav}>
              Launch App
            </OutboundLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
