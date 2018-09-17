import React from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'gatsby-link'

import InspirationCarousel from '../components/project/inspiration-carousel/inspiration-carousel'

import './project.scss'

const SecondPage = () => (
  <div>
    <div className="hero project__hero">
      <div className="contents">
        <Fade up>
        <h1>Power to the people!</h1>
        <p>What's important to you? We believe in putting our money into ourvalues. Choose your focus, set some rules and launch your community.</p>
        </Fade>
      </div>
    </div>
    <section className="block project__start">
      <div className="contents">
        <div className="column">
          <h2>Get ready. Get set. Go!</h2>
          <p>What's important to you? We believe in putting our money into our values. Choose your focus, set some rules and launch your community.</p>
          <Link to="/" className="button">Try our Alpha</Link>
        </div>
        <div className="column">
        </div>
      </div>
    </section>
    <section className="block project__timeline">
      <div className="contents">
        <h6>Timeline</h6>
      </div>
    </section>
    <section className="block project__culture">
      <h6>Our Culture</h6>
      <div className="contents">
        <div className="column">
          <h6>Opportunity</h6>
          <p>Lorem ipsum dolor sit amet, consectur elit sed varius nulla a lorem aliquam effectur.</p>
        </div>
        <div className="column">
          <h6>Purpose</h6>
          <p>Lorem ipsum dolor sit amet, consectur elit sed varius nulla a lorem aliquam effectur.</p>
        </div>
        <div className="column">
          <h6>Humanity First</h6>
          <p>Lorem ipsum dolor sit amet, consectur elit sed varius nulla a lorem aliquam effectur.</p>
        </div>
      </div>
    </section>
    <section className="block project__community">
      <h2>Our Community</h2>
      <p>Lorem ipsum dolor sit amet, consectur elit sed varius nulla a lorem aliquam effectur.</p>
      <div className="members">
        <div className="member">
          <p>image</p>
        </div>
      </div>
      <p>Interested in working with us? <a href="mailto:hello@nativeproject.one">Shoot us an email!</a></p>
    </section>
    <section className="project__inspiration">
      <InspirationCarousel />
      <div className="recommendation">
        <p>Got a recommendation?</p>
        <a className="button">Submit</a>
      </div>
    </section>
    <section className="block project__advisors">
      <h3>Trusted Advisors</h3>
      <p>Lorem ipsum dolor sit amet, consectur elit sed varius nulla a lorem aliquam effectur.</p>
      <div className="members">
        <div className="member">
          <p>image</p>
        </div>
      </div>
      <p>Interested in working with us? <a href="mailto:hello@nativeproject.one">Shoot us an email!</a></p>
    </section>
    <section className="block project__partners">
      <h5>We're proud to partner up with these leading forces.</h5>
      <div className="members">
        <div className="member">
          <p>image</p>
        </div>
      </div>
    </section>
  </div>
)

export default SecondPage
