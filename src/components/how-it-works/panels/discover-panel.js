import React from 'react'
import Fade from 'react-reveal/Fade'
// Lottie
import LottieControl from "../../../components/shared/lottie-control/lottie-control"
import Illustration11 from '../../../assets/product/Native_Website_Howitworks_TribeCards_Discover.png'
import * as tokenAnimation from "../../../assets/animations/07_token_v01.json"

import './panel.scss'

class DiscoverPanel extends React.Component {

  state = {
    tokenIsStopped: true
  }

  playTokenAnimation = () => {
    this.setState({ tokenIsStopped: false })
  }

  render () {
    return (
      <div className="tab-panel block">
        <div className="contents contain">
          <div className="column">
            <Fade left>
            <h3>Discover Communities</h3>
            <p>Explore the Native network of communities and join the ones that align with your values and interests. Here are some examples of Community types that you’ll find:</p>
            <ul>
              <li>Enterprise communities aligned around a product or service</li>
              <li>Project-focused communities for use in tech accelerators</li>
              <li>Social Impact communities aligned around a purpose</li>
              <li>Entertainment communities to support shows and memes</li>
            </ul>
            </Fade>
          </div>
          <div className="column">
            <Fade right>
            <img src={Illustration11} />
            </Fade>
          </div>
          <div className="column">
            <Fade right onReveal={ () => this.playTokenAnimation()} wait={0}>
              <LottieControl
                  animationData={tokenAnimation}
                  loop={false}
                  isStopped={this.state.tokenIsStopped}/>
            </Fade>
          </div>
          <div className="column">
            <Fade right>
            <h3>Join your community</h3>
            <p>Now that you found the right communities, it’s time to join! Become a member by purchasing and staking community tokens. Once you join, gain access to exclusive membership benefits like:</p>
            <ul>
              <li>Access to members within the community</li>
              <li>Ability to do tasks to earn money</li>
              <li>Member-only data, downloads and communication</li>
            </ul>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}

export default DiscoverPanel
