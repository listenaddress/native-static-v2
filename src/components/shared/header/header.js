import React from 'react'
import './header.scss'
import Logo from '../../shared/logo/logo'
import Link from 'gatsby-link'

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
            <Link to="/">Home</Link>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/team">Team</Link>
            <a className="button">Get Native Tokens</a>
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
            <Link to="/team" onClick={this.toggleNav}>Team</Link>
            <a className="button" onClick={this.toggleNav}>Get Native Tokens</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
