import React from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'gatsby-link'

import InspirationCarousel from '../components/project/inspiration-carousel/inspiration-carousel'

import './project.scss'
import iconKey from '../assets/icons/ntv-key.png'
import iconVision from '../assets/icons/ntv-vision.png'
import iconGrowth from '../assets/icons/ntv-growth.png'
import teamJake from '../assets/team/team__jake.jpg'
import teamMSC from '../assets/team/team__msc.jpg'
import teamHeidi from '../assets/team/team__heidi.jpg'
import teamAlex from '../assets/team/team__alex.jpg'
import teamMike from '../assets/team/team__mike.jpg'
import teamTyler from '../assets/team/team__tyler.jpg'
import teamVen from '../assets/team/team__ven.jpg'
import teamDekan from '../assets/team/team__dekan.jpg'
import teamSam from '../assets/team/team__sam.jpg'

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
      <h4>Timeline</h4>
      <div className="contents">
        <p></p>
      </div>
    </section>
    <section className="block project__culture">
      <h4>Our Culture</h4>
      <div className="contents">
        <div className="column">
          <img src={iconKey} />
          <h6>Opportunity</h6>
          <p>Lorem ipsum dolor sit amet, consectur elit sed varius nulla a lorem aliquam effectur.</p>
        </div>
        <div className="column">
          <img src={iconVision} />
          <h6>Purpose</h6>
          <p>Lorem ipsum dolor sit amet, consectur elit sed varius nulla a lorem aliquam effectur.</p>
        </div>
        <div className="column">
          <img src={iconGrowth} />
          <h6>Humanity First</h6>
          <p>Lorem ipsum dolor sit amet, consectur elit sed varius nulla a lorem aliquam effectur.</p>
        </div>
      </div>
    </section>
    <section className="block project__community">
      <h3>Our Community</h3>
      <p>Lorem ipsum dolor sit amet, consectur elit sed varius nulla a lorem aliquam effectur.</p>
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
            <h6>Storyworks</h6>
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
      </div>
      <p>Interested in working with us? <a href="mailto:hello@nativeproject.one">Shoot us an email!</a></p>
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
