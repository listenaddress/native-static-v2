import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import LogoMono from '../../shared/logo-mono/logo-mono'
import './footer.scss'
import { SocialIcon } from 'react-social-icons'

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <LogoMono />
    <div className="footer__socials">
      <OutboundLink className="social-icon ico--telegram" href="https://telegram.me/nativeproject" target="_blank" style={{ height: 40, width: 40 }} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
          <title>ico--telegram</title>
          <path d="M23.72,3.19a.78.78,0,0,0-.79-.14C18.73,4.6,5.82,9.45.54,11.4a.83.83,0,0,0-.54.8A.82.82,0,0,0,.59,13c2.37.71,5.48,1.7,5.48,1.7S7.52,19,8.28,21.27a.87.87,0,0,0,.6.58.89.89,0,0,0,.81-.21l3.1-2.92s3.57,2.62,5.59,4.06a1.19,1.19,0,0,0,1.11.14,1.17,1.17,0,0,0,.73-.84C21.08,18,23.19,7.66,24,4A.79.79,0,0,0,23.72,3.19ZM19.61,7,9.43,16.13l-.38,3.51L7.37,14.1l11.9-7.59a.28.28,0,0,1,.34.44Z" transform="translate(0 -3)"/>
        </svg>
      </OutboundLink>
      <SocialIcon url="https://medium.com/native-token" color="rgba(132,206,200,1)" style={{ height: 40, width: 40 }} />
      <SocialIcon url="https://twitter.com/nativeproject_" style={{ height: 40, width: 40 }} />
      <SocialIcon url="https://www.facebook.com/nativeprotocol/" style={{ height: 40, width: 40 }} />
      <OutboundLink className="ico--reddit social-icon" href="https://www.reddit.com/r/NativeProject/" target="_blank" style={{ height: 40, width: 40 }} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
          <title>ico--reddit</title>
          <path d="M24,11.78a2.65,2.65,0,0,0-4.5-1.9,13.74,13.74,0,0,0-7-2.05L14,3.17l4,.94v0a2.21,2.21,0,1,0,.16-.78l-4.33-1a.38.38,0,0,0-.44.25L11.75,7.82a13.84,13.84,0,0,0-7.3,2,2.62,2.62,0,0,0-1.79-.72A2.66,2.66,0,0,0,0,11.78a2.62,2.62,0,0,0,1.32,2.27,4.12,4.12,0,0,0-.09.86C1.23,18.82,6,22,12,22s10.72-3.18,10.72-7.09a4.28,4.28,0,0,0-.08-.81A2.62,2.62,0,0,0,24,11.78ZM6.78,13.6a1.58,1.58,0,1,1,1.58,1.57A1.58,1.58,0,0,1,6.78,13.6Zm9.06,4.66A5.2,5.2,0,0,1,12,19.44h0a5.2,5.2,0,0,1-3.83-1.18.37.37,0,0,1,0-.52.39.39,0,0,1,.53,0,4.54,4.54,0,0,0,3.3,1h0a4.54,4.54,0,0,0,3.3-1,.37.37,0,0,1,.53.52Zm-.19-3.09a1.58,1.58,0,1,1,1.58-1.58A1.58,1.58,0,0,1,15.65,15.17Z" transform="translate(0 -2)"/>
        </svg>
      </OutboundLink>
      <SocialIcon url="https://www.youtube.com/channel/UCcezcAqMj48yFkXQDUZzOGQ?view_as=subscriber" style={{ height: 40, width: 40 }} />
    </div>
    <div className="footer__nav">
      <Link to="/">Home</Link>
      <Link to="/how-it-works">How it works</Link>
      <Link to="/project">Project</Link>
      <OutboundLink target="_blank" href="https://drive.google.com/file/d/13vedYkjzF-HpcC9I_JO6683bWls_uj4W/view?usp=sharing">Whitepaper</OutboundLink>
      <OutboundLink target="_blank" href="https://press.nativeproject.one/">Press</OutboundLink>
      <OutboundLink target="_blank" href="https://nativeproject.zendesk.com/hc/en-us">Help</OutboundLink>
      <OutboundLink href="https://app.nativeproject.one" target="_blank">Launch App</OutboundLink>
    </div>
  </div>
)

export default Footer
