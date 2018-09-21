import React from 'react'
import Fade from 'react-reveal/Fade'

import Illustration11 from '../../../assets/product/Native_Website_Howitworks_TribeCards_Discover.png'
import Illustration7 from '../../../assets/illustrations/07_token_v01.png'

import './panel.scss'

class DiscoverPanel extends React.Component {

  render () {
    return (
      <div className="tab-panel block">
        <div className="contents contain">
          <div className="column">
            <Fade left>
            <h3>Discover your people</h3>
            <p>Your first step is to explore and choose communities that align with the things you care about. Want to conserve energy? Save the Earth? Join flash mobs around the world? Or maybe even join a lemonade loving community? You can put your money where your heart is.</p>
            </Fade>
          </div>
          <div className="column">
            <Fade right>
            <img src={Illustration11} />
            </Fade>
          </div>
          <div className="column">
            <Fade left>
            <img src={Illustration7} />
            </Fade>
          </div>
          <div className="column">
            <Fade right>
            <h3>You have new currency!</h3>
            <p>Now that you are part of the Lemonade Community, you can track and participate in building the value of the community. You will be able to help fund projects and earn currency by doing tasks.</p>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}

export default DiscoverPanel
