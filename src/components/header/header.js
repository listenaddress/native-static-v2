import React from 'react'
import './header.scss'
import Logo from '../logo/logo'
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

        <div className="navbar__hambuger" onClick={this.toggleNav}>***</div>
        {
          this.state.navOpen && 
          (
            <div className="navbar--mobile">
              <div className="navbar--links">
                <Link to="/">Home</Link>
                <Link to="/how-it-works">How it works</Link>
                <Link to="/team">Team</Link>
                <a className="button">Get Native Tokens</a>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Header
