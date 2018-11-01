import React from 'react'
import Fade from 'react-reveal/Fade'
// Lottie
import LottieControl from "../../../components/shared/lottie-control/lottie-control"
import * as createAnimation from "../../../assets/animations/13_Native_Website_Home_Howitworks_CREATE_TRIBE_V01.json"
import * as tokenAnimation from "../../../assets/animations/07_token_v01.json"

import './panel.scss'

class CreatePanel extends React.Component {

  state = {
    createIsStopped: true,
    tokenIsStopped: true
  }

  playCreateAnimation = () => {
    this.setState({ createIsStopped: false })
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
            <h3>Design your community</h3>
            <p>Consult with the Native team to design the optimal economic model for your community. Is your community designed for enterprise use, social impact, or maybe just to coordinate building a lemonade stand? Whatever the community is about, Native has your model.</p>
            </Fade>
          </div>
          <div className="column">
            <Fade right onReveal={ () => this.playCreateAnimation()} wait={500}>
              <LottieControl
                  animationData={createAnimation}
                  loop={false}
                  isStopped={this.state.createIsStopped}/>
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
            <h3>Deploy your Economy</h3>
            <p>Once the structure and plan is solidified, Native deploys your community infrastructure which includes:</p>
            <ul>
              <li>A unique community token set to your economic model</li>
              <li>An intuitive dashboard for members and the administrator for engagement and web3 interfacing</li>
              <li>A customizable set of governance tools for the community to organize and make collective decisions</li>
            </ul>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePanel
