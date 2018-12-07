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
            <h3>Design your community token model</h3>
            <p>Is your community designed around an event or publication? Are you gathering members for an interest group or raising capital for a new venture? Or maybe your community is creating inspiring entertainment and digital content. Whatever it is, we will make a model that works.</p>
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
            <p>Once your token model is designed, Native deploys your community infrastructure which includes:</p>
            <ul>
              <li>The unique token for your community</li>
              <li>An intuitive dashboard that leverages web3</li>
              <li>A set of tools to organize and make collective decisions</li>
            </ul>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePanel
