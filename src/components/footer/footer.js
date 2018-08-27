import React from 'react'
import Link from 'gatsby-link'
import LogoMono from '../../components/logo-mono/logo-mono'
import './footer.scss'

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div className="footer__nav">
      <LogoMono />
      <Link to="/">Home</Link>
      <Link to="/how-it-works">How it works</Link>
      <Link to="/team">Team</Link>
      <Link to="/">Get Native Tokens</Link>
    </div>
    <div className="spacer"></div>
    <div className="footer__socials">
      <Link to="/">Medium Logo</Link>
    </div>
  </div>
)

export default Footer
