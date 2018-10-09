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
            <h3>Create your community</h3>
            <p>The first step is to decide what your community is about.  Love art and want to support artists? Want to conserve energy? Save the Earth?  Make a lemonade stand?</p>
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
            <h3>Your new community token!</h3>
            <p>Now that you've started the Lemonade Community, you can track and participate in building the value of the Lemon tokens. Use your tokens to create tasks and fund projects.</p>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePanel
