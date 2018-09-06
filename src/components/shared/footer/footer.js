import React from 'react'
import Link from 'gatsby-link'
import LogoMono from '../../shared/logo-mono/logo-mono'
import './footer.scss'
import { SocialIcon } from 'react-social-icons'

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
      <SocialIcon url="http://medium.com/odyssy" color="rgba(132,206,200,1)" style={{ height: 40, width: 40 }} />
      <SocialIcon url="http://twitter.com/odyssy" style={{ height: 40, width: 40 }} />
      <SocialIcon url="http://facebook.com/odyssy" style={{ height: 40, width: 40 }} />

    </div>
  </div>
)

export default Footer
