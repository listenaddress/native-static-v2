import React from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
// Lottie
import LottieControl from "../components/shared/lottie-control/lottie-control"
import * as bannerAnimation from "../assets/animations/06_Native_Website_SpaceStation_Banner_v10.json"

import EmailListForm from '../components/home/email-list-form/email-list-form'

import './about.scss'
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

// project__advisors
import advisorBrad from '../assets/team/advisor__brad.jpg'
import advisorDean from '../assets/team/advisor__dean.jpg'
import advisorDemitri from '../assets/team/advisor__demitri.jpg'
import advisorEvan from '../assets/team/advisor__evan.jpg'
import advisorEyal from '../assets/team/advisor__eyal.jpg'
import advisorMicah from '../assets/team/advisor__micah.jpg'
import advisorMatt from '../assets/team/advisor__matt.jpg'

// project__partners
import bancorLogo from '../assets/partners/bancor_logo.png'
import citrincoopermanLogo from '../assets/partners/citrincooperman_logo.png'
import decentranetLogo from '../assets/partners/decentranet_logo.png'
import genesisblockLogo from '../assets/partners/genesisblock_logo.png'
import ideasbynatureLogo from '../assets/partners/ideasbynature_logo.png'
import odyssyLogo from '../assets/partners/odyssy_logo.png'
import sewardKisselLogo from '../assets/partners/seward_kissel_logo.png'
import storyworksLogo from '../assets/partners/storyworks_logo.png'

const SecondPage = () => (
  <div>
    <div className="hero project__hero">
    <LottieControl
        animationData={bannerAnimation}
        loop={true}
        autoplay={true} />
      <div className="contents">
        <Fade up>
        <h1>Our Mission</h1>
        <p>Native's mission is to enable communities to realize and control their inherent value.</p>
        </Fade>
      </div>
    </div>
    <section className="block project__timeline">
      <h4>Timeline</h4>
      <img src={iconTimeline} alt="Native Timeline" />
      <div className="contents contain">
        <div className="item">
          <h6>Dec 2017</h6>
          <p>Project Conception</p>
        </div>
        <div className="item">
          <h6>May 2018</h6>
          <p>Prototype Launch</p>
        </div>
        <div className="item">
          <h6>Oct 2018</h6>
          <p>Alpha Launch / Native Token Deployed</p>
        </div>
        <div className="item">
          <h6>Jan 2019</h6>
          <p>Beta Launch</p>
        </div>
        <div className="item">
          <h6>Jun 2019</h6>
          <p>V1.0 Launch</p>
        </div>
      </div>
    </section>
    <section className="block project__community">
      <h3>Our Community</h3>
      <p>The organizations building Native:</p>
      <p><OutboundLink href="http://ideasbynature.com/" target="_blank">IDEAS BY NATURE</OutboundLink> - DAPP Dev, Web3, Solidity, UX/UI - Built Shapeshift, Coincap, worked on SALT</p>
      <p><OutboundLink href="https://odyssy.io" target="_blank">ODYSSY</OutboundLink> - Product Design & Management, Blockchain Prototyping, UX/UI, Web3 - Decentralized Product Design & Development</p>
      <p><OutboundLink href="http://storyworks.com" target="_blank">STORYWORKS</OutboundLink> - Branding, Marketing, Community Support</p>
      <div className="members contain">
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamJake + ")"}}></div>
          <div className="contents">
            <h5>Jake Vartanian</h5>
            <h6>Native</h6>
            <h6>Founder</h6>
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
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamHarrison + ")"}}></div>
          <div className="contents">
            <h5>Harrison Neff</h5>
            <h6>Ideas by Nature</h6>
            <h6>Project Management</h6>
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
      </div>
      <p>Interested in working with us? <a href="mailto:hello@nativeproject.one">Shoot us an email!</a></p>
    </section>
    <section className="block project__advisors">
      <h3>Advisors</h3>
      <div className="members contain">
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + advisorDemitri + ")"}}></div>
          <div className="contents">
            <h5>Demitri De Jonghe</h5>
            <h6>Ocean Protocol</h6>
            <h6>Co-founder</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + advisorEvan + ")"}}></div>
          <div className="contents">
            <h5>Evan Caron</h5>
            <h6>Swytch</h6>
            <h6>Founder</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + advisorMatt + ")"}}></div>
          <div className="contents">
            <h5>Matt McKibbin</h5>
            <h6>Decentranet</h6>
            <h6>Founder</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + advisorDean + ")"}}></div>
          <div className="contents">
            <h5>Dean Eigenmann</h5>
            <h6>ZK-Labs</h6>
            <h6>Auditor</h6>
          </div>
        </div>
        <div className="member">
          <div className="member-photo" style={{backgroundImage: "url(" + teamHeidi + ")"}}></div>
          <div className="contents">
            <h5>Heidi Cuppari</h5>
            <h6>Anastasia Finance</h6>
            <h6>Founder</h6>
          </div>
        </div>
      </div>
    </section>
    <section className="block project__partners">
      <h3>Partners & Infrastructure</h3>
      <div className="items">
          <img src={bancorLogo} alt="Bancor" />
          <img src={citrincoopermanLogo} alt="Citrin Cooperman" />
          <img src={decentranetLogo} alt="Decentranet" />
          <img src={genesisblockLogo} alt="Genesis Block" />
          <img src={ideasbynatureLogo} alt="Ideas by Nature" />
          <img src={odyssyLogo} alt="Odyssy" />
          <img src={sewardKisselLogo} alt="Seward and Kissel LLP" />
          <img src={storyworksLogo} alt="Storyworks" />
        </div>
    </section>
  </div>
)

export default SecondPage
