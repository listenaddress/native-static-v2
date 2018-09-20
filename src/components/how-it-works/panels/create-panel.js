import React from 'react'
import Fade from 'react-reveal/Fade'

import Illustration13 from '../../../assets/illustrations/13_Native_Website_Home_Howitworks_CREATE_TRIBE_V02.png'
import Illustration7 from '../../../assets/illustrations/07_token_v01.png'

import './panel.scss'

class CreatePanel extends React.Component {

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
            <Fade right>
            <img src={Illustration13} />
            </Fade>
          </div>
          <div className="column">
            <Fade left>
            <img src={Illustration7} />
            </Fade>
          </div>
          <div className="column">
            <Fade right>
            <h3>Your new local currency!</h3>
            <p>Now that you've started the Lemonade Community, you can track and participate in building the value of the Lemon tokens. You use your tokens to create tasks and fund projects.</p>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePanel
