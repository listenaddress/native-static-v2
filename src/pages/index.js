import React from 'react'

import Link from 'gatsby-link'
import EmailListForm from '../components/home/email-list-form/email-list-form'
import CommunityCarousel from '../components/home/community-carousel/community-carousel'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'

import './home.scss'

const IndexPage = () => (
  <div>
    <div className="hero home__hero">
      <div className="contents">
        <Fade up>
        <h1>Build Prosperous Communities</h1>
        <p>Native is a platform for communities to realize their inherent value.</p>
        </Fade>
      </div>
    </div>
    <section className="home__how-it-works steps">
      <div className="launch">
        <div className="contents">
          <Fade up>
          <h2>And we're off!</h2>
          <p>Native Alpha is launching this fall. Sign up for launch notifications and other awesome updates. We promise we don’t spam.</p>
          <EmailListForm />
          </Fade>
        </div>
      </div>
      <div className="intro">
        <div className="contents">
          <Fade top cascade>
            <h2>How it works</h2>
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
              <p>Choose, fund and work on community projects, donate your mad skills, like cinematography</p>
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
          <h3>Follow our journey? Want to start a community?</h3>
          <p>Join us as we reinvent community economics.</p>
          <div>
            <a className="button">Email sign up?</a>
          </div>
          </Fade>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage
