import React from 'react'
import Fade from 'react-reveal/Fade'

import InspirationCarousel from '../components/project/inspiration-carousel/inspiration-carousel'

const SecondPage = () => (
  <div>
    <div className="hero">
      <div className="contents">
        <Fade up>
        <h1>Project</h1>
        <p>What's important to you? We believe in putting our money into ourvalues. Choose your focus, set some rules and launch your community.</p>
        </Fade>
      </div>
    </div>
      <div>
        <InspirationCarousel />
      </div>
  </div>
)

export default SecondPage
