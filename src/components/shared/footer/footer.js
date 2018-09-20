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
      <Link to="/project">Project</Link>
      <a target="_blank" href="https://drive.google.com/file/d/1YXVOFl35AJcsYPz8aOjgfXm-ZpsHxZmk/view?usp=sharing">Whitepaper</a>
      <a target="_blank" href="https://press.nativeproject.one/">Press</a>
      {/* <Link to="/">Join Native</Link> */}
    </div>
    <div className="spacer"></div>
    <div className="footer__socials">
      <SocialIcon url="https://medium.com/native-token" color="rgba(132,206,200,1)" style={{ height: 40, width: 40 }} />
      <SocialIcon url="https://twitter.com/nativeprotocol" style={{ height: 40, width: 40 }} />
      <SocialIcon url="https://www.facebook.com/nativeprotocol/" style={{ height: 40, width: 40 }} />
      <SocialIcon url="https://www.reddit.com/r/NativeProject/" style={{ height: 40, width: 40 }} />
      <SocialIcon url="https://www.youtube.com/channel/UCcezcAqMj48yFkXQDUZzOGQ?view_as=subscriber" style={{ height: 40, width: 40 }} />
    </div>
  </div>
)

export default Footer
