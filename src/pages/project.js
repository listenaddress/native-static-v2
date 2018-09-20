import React from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'gatsby-link'
import InspirationCarousel from '../components/project/inspiration-carousel/inspiration-carousel'

import heroIllustration from '../assets/illustrations/06_Native_Website_SpaceStation_Banner_v09.png'

import EmailListForm from '../components/home/email-list-form/email-list-form'

import './project.scss'
import iconKey from '../assets/icons/ntv-key.png'
import iconVision from '../assets/icons/ntv-vision.png'
import iconGrowth from '../assets/icons/ntv-growth.png'
import iconTimeline from '../assets/icons/ntv-timeline.png'
import teamJake from '../assets/team/team__jake.jpg'
import teamMSC from '../assets/team/team__msc.jpg'
import teamHeidi from '../assets/team/team__heidi.jpg'
import teamAlex from '../assets/team/team__alex.jpg'
import teamMike from '../assets/team/team__mike.jpg'
import teamTyler from '../assets/team/team__tyler.jpg'
import teamVen from '../assets/team/team__ven.jpg'
import teamDekan from '../assets/team/team__dekan.jpg'
import teamSam from '../assets/team/team__sam.jpg'
import teamJeff from '../assets/team/team__jeff.jpg'
import teamHarrison from '../assets/team/team__harrison.jpg'

// project__partners

import bancorLogo from '../assets/partners/bancor_logo.png'
import citrincoopermanLogo from '../assets/partners/citrincooperman_logo.png'
import decentranetLogo from '../assets/partners/decentranet_logo.png'
import genesisblockLogo from '../assets/partners/genesisblock_logo.png'
import ideasbynatureLogo from '../assets/partners/ideasbynature_logo.png'
import odyssyLogo from '../assets/partners/odyssy_logo.png'
import sewardKisselLogo from '../assets/partners/seward_kissel_logo.png'
import storyworksLogo from '../assets/partners/storyworks_logo.png'

// images
import devicesImage from '../assets/product/Native_Website_App_Devices_large.png'

const SecondPage = () => (
  <div>
    <div className="hero project__hero">
      <img src={heroIllustration} />
      <div className="contents">
        <Fade up>
        <h1>Mission Control to Native</h1>
        <p>Our Alpha App is launching October 1st.  Come with us as we take five communites live on the platform.</p>
        </Fade>
      </div>
    </div>
    <section className="block project__start">
      <div className="contents contain">
        <div className="column">
          <h2>Get ready. Get set. Go!</h2>
          <p>We're excited to share our Alpha App. While it is an early realease with lots of growing to do, we're eager for you to try it out and help us improve.</p>
          {/* <Link to="/" className="button">Try our Alpha</Link> */}
          <EmailListForm />
        </div>
        <div className="column">
        </div>
      </div>
      <div className="devicesImage">
        <img src={devicesImage} />
      </div>
    </section>
    <section className="block project__timeline">
      <h4>Timeline</h4>
      <img src={iconTimeline} />
      <div className="contents contain">
        <div className="item">
          <h6>Dec 2017</h6>
          <p>Project Initation</p>
        </div>
        <div className="item">
          <h6>May 2018</h6>
          <p>Demo Complete</p>
        </div>
        <div className="item">
          <h6>Oct 2018</h6>
          <p>Alpha Launch / Native Token Launch</p>
        </div>
        <div className="item">
          <h6>Jan 2018</h6>
          <p>Beta Launch</p>
        </div>
        <div className="item">
          <h6>Jan 2019</h6>
          <p>V1.0 Launch</p>
        </div>
      </div>
    </section>
    <section className="block project__culture">
      <h4>Our Culture</h4>
      <div className="contents">
        <div className="column">
          <img src={iconKey} />
          <h6>Opportunity</h6>
          <p>To create a new social commons where communities can share values aligned economics.</p>
        </div>
        <div className="column">
          <img src={iconVision} />
          <h6>Purpose</h6>
          <p>To enable communities to realize the value they inherently hold.</p>
        </div>
        <div className="column">
          <img src={iconGrowth} />
          <h6>Humanity Flourishing</h6>
          <p>Native promises to provide communites with the tools they need to thrive.</p>
        </div>
      </div>
    </section>
    <section className="block project__community">
      <h3>Our Community</h3>
      <p>Native is being built as a Native Community. We are made up of a collection of individuals and organizations with aligned values and incentives. Our mission is to create a platform where communities thrive. The organizaitons participating in building Native include, Storyworks - Strategy, Biz Dev, Brand, Marketing, Community Onboarding, Visual Design, Oddsy - Product Design & Management, Blockchain Prototyping, UX/UI, Web3 and Ideas by Nature - DAPP Dev, Web 3.0, Solidity, UX/UI.</p>
      <div className="members contain">
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamJake + ")"}}></div>
          <div className="contents">
            <h5>Jake Vartanian</h5>
            <h6>Native</h6>
            <h6>Curator</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamMSC + ")"}}></div>
          <div className="contents">
            <h5>Michael Shaun Conaway</h5>
            <h6>Storyworks</h6>
            <h6>Strategy & Development</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamAlex + ")"}}></div>
          <div className="contents">
            <h5>Alex Melnyk</h5>
            <h6>Storyworks</h6>
            <h6>Brand & Marketing</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamTyler + ")"}}></div>
          <div className="contents">
            <h5>Tyler Wallace</h5>
            <h6>Storyworks</h6>
            <h6>Onboarding</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamHeidi + ")"}}></div>
          <div className="contents">
            <h5>Heidi Cuppari</h5>
            <h6>Anastasia Finance</h6>
            <h6>Investor Relations</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamMike + ")"}}></div>
          <div className="contents">
            <h5>Mike Slavin</h5>
            <h6>Storyworks</h6>
            <h6>Social Media</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamVen + ")"}}></div>
          <div className="contents">
            <h5>Ven Gist</h5>
            <h6>Odyssy</h6>
            <h6>Product + Design</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamDekan + ")"}}></div>
          <div className="contents">
            <h5>Dekan Brown</h5>
            <h6>Odyssy</h6>
            <h6>Dapp Development / R&D</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamSam + ")"}}></div>
          <div className="contents">
            <h5>Sam Kuhlmann</h5>
            <h6>Odyssy</h6>
            <h6>Full Stack Development</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamHarrison + ")"}}></div>
          <div className="contents">
            <h5>Harrison Neff</h5>
            <h6>Ideas by Nature</h6>
            <h6>Project Management</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamJeff + ")"}}></div>
          <div className="contents">
            <h5>Jeffrey Vier</h5>
            <h6>Ideas by Nature</h6>
            <h6>Operations</h6>
          </div>
        </div>
      </div>
      <p>Interested in working with us? <a href="mailto:hello@nativeproject.one">Shoot us an email!</a></p>
    </section>
    <section className="block project__advisors">
      <h3>Trusted Advisors</h3>
      <p>Our Advisors are key community members who are guiding us in the development of Native.</p>
      <div className="members contain">
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamMSC + ")"}}></div>
          <div className="contents">
            <h5>Dimitri De Jonghe</h5>
            <h6>Ocean Protocol</h6>
            <h6>Co-founder</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamMSC + ")"}}></div>
          <div className="contents">
            <h5>Evan Caron</h5>
            <h6>Swytch</h6>
            <h6>Founder</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamMSC + ")"}}></div>
          <div className="contents">
            <h5>Matt McKibbin</h5>
            <h6>Decentranet</h6>
            <h6>Founder</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamMSC + ")"}}></div>
          <div className="contents">
            <h5>Micah Spruill</h5>
            <h6>XSquared Ventures</h6>
            <h6>Partner</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamMSC + ")"}}></div>
          <div className="contents">
            <h5>Brad Mills</h5>
            <h6>Alphabit</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamMSC + ")"}}></div>
          <div className="contents">
            <h5>Dean Eigenmann</h5>
            <h6>ZK-Labs</h6>
            <h6>Auditor</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamMSC + ")"}}></div>
          <div className="contents">
            <h5>Eyal Hertzog</h5>
            <h6>Bancor</h6>
          </div>
        </div>
      </div>
      <p>Interested in working with us? <a href="mailto:hello@nativeproject.one">Shoot us an email!</a></p>
    </section>
    <section className="block project__partners">
      <h3>We're proud to partner up with these leading forces.</h3>
      <div className="items">
          <img src={bancorLogo} />
          <img src={citrincoopermanLogo} />
          <img src={decentranetLogo} />
          <img src={genesisblockLogo} />
          <img src={ideasbynatureLogo} />
          <img src={odyssyLogo} />
          <img src={sewardKisselLogo} />
          <img src={storyworksLogo} />
        </div>
    </section>
  </div>
)

export default SecondPage
