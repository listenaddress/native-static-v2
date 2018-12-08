import React from 'react'
import Link from 'gatsby-link'

import { ReactTypeformEmbed } from 'react-typeform-embed'
import EmailListForm from '../components/home/email-list-form/email-list-form'

// Lottie
import LottieControl from "../components/shared/lottie-control/lottie-control"
import preloadImage from "../assets/animations/01_HOME_BANNER_ANIM_1st_frame.png"
import * as step1Animation from "../assets/animations/11_join_v09.json"
import * as step2Animation from "../assets/animations/12_participate_v05.json"
import * as step3Animation from "../assets/animations/02_Native_Website_Home_Howitworks_Step3_Full_v03.json"
import * as creatorAnimation from "../assets/animations/03_Native_Website_Home_MasterCreator_V05.json"

import CommunityCarousel from '../components/home/community-carousel/community-carousel'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import './home.scss'

class IndexPage extends React.Component {
  state = {
    windowIsLoaded: false,
    open: false,
    step1IsStopped: true,
    step2IsStopped: true,
    step3IsStopped: true,
    creatorIsStopped: true,
    bannerIsLoaded: false
  }

  componentDidMount() {
    window.onload = () => {
      this.setState({windowIsLoaded: true})
    };
  }

  playStep1Animation = () => {
    this.setState({step1IsStopped: false})
  }

  playStep2Animation = () => {
    this.setState({step2IsStopped: false})
  }

  playStep3Animation = () => {
    this.setState({step3IsStopped: false})
  }

  playCreatorAnimation = () => {
    this.setState({creatorIsStopped: false})
  }

  openForm = () => {
    this.typeformEmbed.typeform.open();
  }

  handleBannerIsLoaded = () => {
    this.setState({bannerIsLoaded: true})
    console.log('banner loaded')
  }

  render () {
    return (

      <div>
        <div className="hero home__hero">
          <img src={preloadImage} alt="Native Community"/>
          <div className="contents">
            <h1>Unlock the value of your community.</h1>
            <p>Native helps digital communities organize, incentivize their members and generate revenue in new ways.</p>
          </div>
        </div>
        <section className="home__problem">
          <div className="intro">
            <div className="contents">
              <h2>What is Native?</h2>
              <p>Until now, organizing and operating digital communities has been limited to centralized platforms, resulting in limited capacity to incentivize long-term and meaningful member engagement. Through these major social media networks, digital communities can expand globally but have no universally recognized economic system to realize the value of their efforts.</p>
              <p>Imagine using blockchain technology to deploy community infrastructure so the network value can be returned to the communities who created it. Through community-backed tokens and a functional set of decision making tools, Native provides the system to enable the next wave of community sovereignty.</p>
            </div>
          </div>
        </section>
        <section className="intro--list">
          <div className="grid">
            <div className="column--3">
              <h3>Create your digital community on the blockchain</h3>
              <p>Native provides the infrastructure to build and operate your decentralized organization.</p>
            </div>
            <div className="column--3">
              <h3>Design your economy and token model</h3>
              <p>Native provides recommendations for different community types so community organizers can deploy the optimal ecosystem for each community.</p>
            </div>
            <div className="column--3">
              <h3>Transparent and open governance tools</h3>
              <p>Organize and make collective decisions through voting, projects, and tasks.</p>
            </div>
          </div>
          <div className="cta">
            <div className="contents">
              <p>Sign up for our newsletter. We value your privacy, and promise not to spam.</p>
              <EmailListForm />
            </div>
          </div>
        </section>
              <section className="home__how-it-works steps">
        <div className="intro">
            <div className="contents">
              <h2>How it Works</h2>
            </div>
        </div>
         <div className="step-one">
            <div className="contents">
              <div className="column">
                <Fade left onReveal={ () => this.playStep1Animation()} wait={500}>
                  <LottieControl
                     animationData={step1Animation}
                     loop={false}
                      autoplay={false}
                      isStopped={this.state.step1IsStopped} />
                </Fade>
              </div>
             <div className="column">
               <Fade right>
                <h6>STEP ONE</h6>
               <h3>Discover & Launch</h3>
                <p>Native is a network of communities. Find communities that share your goals and values or launch your own.</p>
               </Fade>
             </div>
          </div>
         </div>
         <div className="step-two">
           <div className="contents">
                <div className="column">
                  <Fade left>
                  <h6>STEP TWO</h6>
                  <h3>Connect & Participate</h3>
                  <p>Participate in the anti-rivalrous network. Inside communities you can cast votes, propose projects, and earn tokens through bounties.</p>
                  </Fade>
                </div>
              <div className="column">
                <Fade right onReveal={ () => this.playStep2Animation()} wait={1000}>
                  <LottieControl
                      animationData={step2Animation}
                      loop={false}
                      autoplay={false}
                      isStopped={this.state.step2IsStopped}
                    />
                </Fade>
              </div>
            </div>
          </div>
          <div className="step-three">
            <Fade onReveal={ () => this.playStep3Animation()} wait={1000} >
              <LottieControl
                  animationData={step3Animation}
                  loop={false}
                  autoplay={false}
                  isStopped={this.state.step3IsStopped} />
            </Fade>
            <div className="contents">
              <div className="column">
              </div>
              <div className="column">
                <Fade up>
                <h6>STEP THREE</h6>
                <h3>Network Prosperity</h3>
                <p>Our platform and economic model is designed so that as communities grow, the network grows.</p>
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
        <section className="launch">
          <div className="contents">
            <Fade up>
            <h3>Native Alpha is live on Ethereum Mainnet.</h3>
            </Fade>
            <div className="button-group">
              <OutboundLink className="button" href="https://app.nativeproject.one" target="_blank">Launch App</OutboundLink>
              <OutboundLink className="button quick-start" href="https://native-project.gitbook.io/native-quick-start-guide/" target="_blank">Quick Start Guide</OutboundLink>
            </div>
          </div>
        </section>

        <section className="home__community-carousel">
          <CommunityCarousel />
        </section>
        <section className="block home__creator">
          <div className="contents">
            <div className="column">
            <Fade onReveal={ () => this.playCreatorAnimation()}>
              <LottieControl
                  animationData={creatorAnimation}
                  loop={false}
                  isStopped={this.state.creatorIsStopped}/>
            </Fade>
            </div>
            <div className="column">
              <Fade right>
              <h3>Interested in launching a community on Native?</h3>
              <p>Tell us about your community vision so we can start the conversation.</p>
              <div>
                <a className="button" onClick={this.openForm}>Get Started</a>
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
