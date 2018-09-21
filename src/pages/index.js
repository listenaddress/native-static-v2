import React from 'react'

import Link from 'gatsby-link'
import HeroBanner from '../components/home/hero-banner/hero-banner'
import EmailListForm from '../components/home/email-list-form/email-list-form'
import CommunityCarousel from '../components/home/community-carousel/community-carousel'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'

import heroIllustration from '../assets/illustrations/04_Native_Website_Home_Banner_V08_Cropped.png'
import launchIllustration from '../assets/illustrations/05_Native_Website_ROCKET_Banner_cl_v05.png'
import finalStepIllustration from '../assets/illustrations/02_Native_Website_Home_Howitworks_Step3_Full_v05.png'

import './home.scss'

const IndexPage = () => (
  <div>
    <div className="hero home__hero">
      <img src={heroIllustration} />
      <HeroBanner />
    </div>
    <section className="home__how-it-works steps">
      <div className="launch">
        <img src={launchIllustration} />
        <div className="contents">
          <Fade up>
          <h2>And we're off!</h2>
          <p>Native Alpha is launching this fall. Sign up for our awesome updates. We promise we don’t spam.</p>
          <EmailListForm />
          </Fade>
        </div>
      </div>
      <div className="intro">
        <div className="contents">
          <Fade top cascade>
            <h2>Start Here</h2>
          </Fade>
        </div>
      </div>
      <div className="step-one">

        <div className="contents">
          <Fade left>
          <div className="column"></div>
          </Fade>
          <div className="column">
            <Fade right>
            <h6>STEP ONE</h6>
            <h3>Join</h3>
            <p>Find communities that care about the the things you do, like movies </p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="step-two">
        <div className="contents">
            <div className="column">
              <Fade left>
              <h6>STEP TWO</h6>
              <h3>Participate</h3>
              <p>Choose, fund and work on community projects.  Donate your mad skills, like cinematography</p>
              </Fade>
            </div>
          <Fade right>
          <div className="column">
          </div>
          </Fade>
        </div>
      </div>
      <div className="step-three">
        <img src={finalStepIllustration} />
        <div className="contents">
          <Fade left>
          <div className="column">
          </div>
          </Fade>
          <div className="column">
            <Fade up>
            <h6>STEP THREE</h6>
            <h3>Thrive</h3>
            <p>Help your community to realize its vision. The community's value is derived from its growth and success.</p>
            <div>
              <Pulse>
              <Link to="/how-it-works" className="button">Take a deeper dive</Link>
              </Pulse>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
    <section className="home__community-carousel">
      <CommunityCarousel />
    </section>
    <section className="block home__creator">
      <div className="contents">
        <div className="column">
        </div>
        <div className="column">
          <Fade right>
          <h3>Want to find out more?</h3>
          <p>Find out more about how Native works.</p>
          <div>
            <Link className="button" to="/how-it-works">Learn More</Link>
          </div>
          </Fade>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage
