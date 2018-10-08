import React from 'react'

import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { ReactTypeformEmbed } from 'react-typeform-embed';

// Lottie
import LottieControl from "../components/shared/lottie-control/lottie-control"
import * as bannerAnimation from "../assets/animations/01_HOME_BANNER_ANIM_v06.json"
import * as rocketAnimation from "../assets/animations/05_Native_Website_ROCKET_Banner_cl_v01.json"
import * as step1Animation from "../assets/animations/11_join_v06.json"
import * as step2Animation from "../assets/animations/12_participate_v05.json"
import * as step3Animation from "../assets/animations/02_Native_Website_Home_Howitworks_Step3_Full_v03.json"

import HeroBanner from '../components/home/hero-banner/hero-banner'
import EmailListForm from '../components/home/email-list-form/email-list-form'
import CommunityCarousel from '../components/home/community-carousel/community-carousel'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'

import launchIllustration from '../assets/illustrations/05_Native_Website_ROCKET_Banner_cl_v05.png'

import './home.scss'

class IndexPage extends React.Component {
  state = {
    open: false,
    showStep1Animation: false,
    showStep2Animation: false,
    showStep3Animation: false,
    showRocketAnimation: false,
    rocketIsPaused: true
  }

  openForm = () => {
    this.typeformEmbed.typeform.open();
  }

  playStep1Animation = () => {
    this.setState({ showStep1Animation: true })
  }

  playStep2Animation = () => {
    this.setState({ showStep2Animation: true })
  }

  playStep3Animation = () => {
    this.setState({ showStep3Animation: true })
  }

  playRocketAnimation = () => {
    console.log('play the damn animation')
    this.setState({rocketIsPaused: false})
  }

  render () {
    console.log(this.state.rocketIsPaused)
    return (

      <div>
        <div className="hero home__hero">
          <LottieControl
              animationData={bannerAnimation}
              loop={false} />
          <HeroBanner />
        </div>
        <section className="home__how-it-works steps">
          <div className="launch">
            <Fade onReveal={ () => this.playRocketAnimation()} wait={500}>
            {
              <LottieControl
                  animationData={rocketAnimation}
                  loop={false}
                  isPaused={this.state.rocketIsPaused}/>
            }
            </Fade>
            <div className="contents">
              <Fade up>
              <h2>And we're off!</h2>
              <p>The Native App is live. Join one of our communities.</p>
              </Fade>
              <div className="button-group">
                <OutboundLink className="button" href="https://app.nativeproject.one" target="_blank">Launch App</OutboundLink>
                <OutboundLink className="button quick-start" href="https://native-project.gitbook.io/native-quick-start-guide/" target="_blank">Quick Start Guide</OutboundLink>
              </div>
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
              <div className="column">
                <Fade left onReveal={ () => this.playStep1Animation()} wait={500}>
                {
                  this.state.showStep1Animation &&
                  <LottieControl
                      animationData={step1Animation}
                      loop={true} />
                }
                </Fade>
              </div>
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
              <div className="column">
                <Fade right onReveal={ () => this.playStep2Animation()} wait={0}>
                {
                  this.state.showStep2Animation &&
                  <LottieControl
                      animationData={step2Animation}
                      loop={false} />
                }
                </Fade>
              </div>
            </div>
          </div>
          <div className="step-three">
            <Fade onReveal={ () => this.playStep3Animation()} wait={500} >
            {
              this.state.showStep3Animation &&
              <LottieControl
                  animationData={step3Animation}
                  loop={false} />
            }
            </Fade>
            <div className="contents">
              <div className="column">
              </div>
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
              <h3>Create a Community</h3>
              <div>
                <a className="button" onClick={this.openForm}>Start Here</a>
                <ReactTypeformEmbed
                  url={'https://nativeproject.typeform.com/to/U3ZeE6'}
                  popup={true}
                  autoOpen={false}
                  style={{height: '0%'}}
                  ref={(tf => this.typeformEmbed = tf) }
                />
              </div>
              </Fade>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default IndexPage
