import React from 'react'

import EmailListForm from '../components/home/email-list-form/email-list-form'
import CommunityCarousel from '../components/home/community-carousel/community-carousel'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import './home.scss'

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="contents">
        <Fade up>
        <h1>Build Prosperous Communities</h1>
        <p>Native is a place to create and participate in community-based economics. We enable communities to realize their inherent value through local currency and set of governance.</p>
        </Fade>
      </div>
    </div>
    <section className="home__how-it-works">
      <div className="launch">
        <div className="contents">
          <Fade up>
          <h2>And we're off!</h2>
          <p>Native beta is launching this fall. Sign up for launch notifications and other awesome updates. We promise we don’t spam.</p>
          <EmailListForm />
          </Fade>
        </div>
      </div>
      <div className="intro">
        <div className="contents">
          <h2>How it works</h2>
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
            <p>The first step to participate in Native is to convert to Native Tokens. Native tokens are used to join tribes.</p>
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
              <p>Find communities who’s values align with your own. Where do you want to put your value into the world? Once you find your tribes, you and your community can get to work on your common goals and activities.</p>
              </Fade>
            </div>
          <Fade right>
          <div className="column">
          </div>
          </Fade>
        </div>
      </div>
      <div className="step-three">
        <div className="contents">
          <Fade left>
          <div className="column">
          </div>
          </Fade>
          <div className="column">
            <Fade right>
            <h6>STEP THREE</h6>
            <h3>Thrive</h3>
            <p>The Tribe is the economy. Projects are funded and visions are realized at this level. Tribe token price is reflective of activity and interest levels.</p>
            <a className="button">Take a deeper dive</a>
          </Fade>
          </div>
        </div>
      </div>
    </section>
    <section>
      <CommunityCarousel />
    </section>
  </div>
)

export default IndexPage
