import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import TabPanels from '../components/shared/tab-panels/tab-panels';
import DiscoverPanel from '../components/how-it-works/panels/discover-panel';
import CreatePanel from '../components/how-it-works/panels/create-panel';
import CommunityForm from '../components/how-it-works/community-form/community-form';
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'
// Images
import heroIllustration from '../assets/illustrations/04_Native_Website_Howitworks_Banner_V5.png'
import badges from '../assets/icons/ntv-badges.png'
import whitepaperIcon from '../assets/icons/ntv-whitepaper.png'

import './how-it-works.scss'

const tabs = [
  {
    name: 'Discover',
    render: () => <DiscoverPanel />,
  },
  {
    name: 'Create',
    render: () => <CreatePanel />,
  },
]

const SecondPage = () => (
  <div>
    <div className="hero hiw__hero">
      <img src={heroIllustration} />
      <div className="contents">
        <Fade up>
        <h1>Welcome to Native</h1>
        <p>Are you looking to find communities to join? Are you interested in starting your own community? Let’s take a deeper dive into Native and show you how it all works.</p>
        </Fade>
      </div>
    </div>
    <TabPanels panels={tabs} />
    <section className="how-it-works__steps steps">
      <div className="intro">
        <div className="contents">
          <Fade top cascade>
            <h2>Participate</h2>
          </Fade>
        </div>
      </div>
      <div className="step-one">
        <div className="contents contain">
          <div className="column">
            <Fade left>
            <h6>Projects</h6>
            <h3>Create and Support Projects</h3>
            <p>Projects are one of the main features on Native. Decide which of your community’s projects are important and get stuff done in the world.</p>
            </Fade>
          </div>
          <Fade right>
          <div className="column"></div>
          </Fade>
        </div>
      </div>
      <div className="step-two">
        <div className="contents contain">
          <Fade left>
          <div className="column"></div>
          </Fade>
          <div className="column">
            <Fade right>
            <h6>Voting</h6>
            <h3>Your Vote Matters</h3>
            <p>Help shape your community by voting on important topics, like choosing which flavors of lemonade you want to offer at the stand.</p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="step-three">
        <div className="contents">
          <div className="column">
            <Fade left>
            <h6>Tasks</h6>
            <h3>Claim Tasks, Earn Money!</h3>
            <p>When you complete tasks for your community, the overall value of the community goes up. You get paid in community tokens for each task you complete.</p>
            </Fade>
          </div>
          <Fade right>
          <div className="column"></div>
          </Fade>
        </div>
      </div>
      <div className="steps--footer">
      </div>
    </section>
    <section className="block how-it-works__curator">
      {/* <CommunityForm /> */}
      <Fade left>
      <div className="white-paper">
        <div className="column">
          <p>Nerding out? Learn more about the economics behind Native.</p>
          <OutboundLink className="button" target="_blank" href="https://drive.google.com/file/d/13vedYkjzF-HpcC9I_JO6683bWls_uj4W/view?usp=sharing">Download Whitepaper</OutboundLink>
        </div>
        <img src={whitepaperIcon} />
      </div>
      </Fade>
    </section>
    <section className="footer__spacer">
    </section>

  </div>
)

export default SecondPage
