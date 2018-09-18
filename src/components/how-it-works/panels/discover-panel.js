import React from 'react'
import Fade from 'react-reveal/Fade'

import Illustration11 from '../../../assets/illustrations/11_Native_Website_Home_Howitworks_JOIN_V02.png'

import './panel.scss'

class DiscoverPanel extends React.Component {

  render () {
    return (
      <div className="tab-panel block">
        <div className="contents contain">
          <div className="column">
            <Fade left>
            <h3>Discover your community</h3>
            <p>Your first step is to explore an choose communities that align with your values or things you care about. Put your money where your heart is.</p>
            </Fade>
          </div>
          <div className="column">
            <Fade right>
            <img src={Illustration11} />
            </Fade>
          </div>
          <div className="column">
            <Fade left>
            <p>image</p>
            </Fade>
          </div>
          <div className="column">
            <Fade right>
            <h3>Your new currency</h3>
            <p>Now that you are part of the lemonade community, you can track particapte in building the value of your Lemon Tokens. You can also use tokens to create tasks and fund projects.</p>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}

export default DiscoverPanel
