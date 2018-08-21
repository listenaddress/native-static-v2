import React from 'react'
import './header.scss'
import Logo from '../logo/logo'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="navbar">
    <Link to="/">
      <Logo />
    </Link>
    <div className="spacer"></div>
    <div className="navbar--links">
      <Link to="/">Home</Link>
      <Link to="/how-it-works">How it works</Link>
      <Link to="/team">Team</Link>
      <a className="button">Get Native Tokens</a>
    </div>
  </div>
)

export default Header
