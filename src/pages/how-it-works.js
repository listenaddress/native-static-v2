import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import TabPanels from '../components/shared/tab-panels/tab-panels';
import DiscoverPanel from '../components/how-it-works/panels/discover-panel';
import CreatePanel from '../components/how-it-works/panels/create-panel';
import CommunityForm from '../components/how-it-works/community-form/community-form';
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'
// Lottie
import LottieControl from "../components/shared/lottie-control/lottie-control"
import * as bannerAnimation from "../assets/animations/04_Native_Website_Howitworks_Banner_V10.json"
import * as step2Animation from "../assets/animations/09_Native_Website_Howitworks_Vote_What_flavor_v01.json"
import * as step3Animation from "../assets/animations/08_Native_Website_Howitworks_DesigntheStand_v01.json"

// Images
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

class SecondPage extends React.Component {

  state = {
    showAnimation: false,
    step2IsStopped: true,
    step3IsStopped: true
  }

  playStep2Animation = () => {
    this.setState({step2IsStopped: false})
  }

  playStep3Animation = () => {
    this.setState({step3IsStopped: false})
  }

  render () {
    return (

    <div>
      <div className="hero hiw__hero">
        <LottieControl
            animationData={bannerAnimation}
            loop={true}
            autoplay={true} />
        <div className="contents">
          <Fade up>
          <h1>The Native Ecosystem</h1>
          <p>Whether you want to join or create a community, Native provides the tools you need to participate in the emerging decentralized financial system. Let’s explore how it works.</p>
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
              <h3>Support Community Projects</h3>
              <p>Help decide which projects should be funded with your community’s resources.</p>
              </Fade>
            </div>
            <Fade right>
            <div className="column"></div>
            </Fade>
          </div>
        </div>
        <div className="step-two">
          <div className="contents contain">
            <div className="column">
              <Fade left onReveal={ () => this.playStep2Animation()} wait={500}>
                <LottieControl
                    animationData={step2Animation}
                    loop={false}
                    autoplay={false}
                    isStopped={this.state.step2IsStopped}
                    />
              </Fade>
            </div>
            <div className="column">
              <Fade right>
              <h3>Make Important Decisions</h3>
              <p>Participate in community decision making and transparently ensure collective agreement.</p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="step-three">
          <div className="contents">
            <div className="column">
              <Fade left>
              <h3>Get Paid Doing Work You Enjoy</h3>
              <p>Help bring the community vision to life by offering your unique services. Complete tasks and get paid.</p>
              </Fade>
            </div>
            <div className="column">
              <Fade right onReveal={ () => this.playStep3Animation()} wait={500}>
                <LottieControl
                    animationData={step3Animation}
                    loop={false}
                    autoplay={false}
                    isStopped={this.state.step3IsStopped}
                    />
              </Fade>
            </div>
          </div>
        </div>
        <div className="steps--footer">
        </div>
      </section>
      <section className="block how-it-works__curator">
        <CommunityForm />
        <Fade left>
        <div className="white-paper">
          <div className="column">
            <p>Nerding out? Learn more about the economics behind Native.</p>
            <OutboundLink className="button" target="_blank" href="https://drive.google.com/file/d/13vedYkjzF-HpcC9I_JO6683bWls_uj4W/view?usp=sharing">Download Whitepaper</OutboundLink>
          </div>
          <img src={whitepaperIcon} alt="Native Whitepaper"/>
        </div>
        </Fade>
      </section>
      <section className="footer__spacer">
      </section>

    </div>
    )
  }
}

export default SecondPage
