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
            <h3>Find your people</h3>
            <p>Your first step is to explore and join communities that align with the things you care about. Want to conserve energy? Save the Earth? Join flash mobs around the world? Or maybe even join a lemonade loving community? Put your money where your heart is.</p>
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
            <h3>You’ve got tokens!</h3>
            <p>Now that you are part of the Lemonade Community, you can track its value and participate in building the community. Fund relevant projects and earn by doing tasks.</p>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}

export default DiscoverPanel
