import React from 'react'

import './panel.scss'

class DiscoverPanel extends React.Component {

  render () {
    return (
      <div className="block">
        <div className="contents contain">
          <div className="column">
            <h2>Discover your community</h2>
            <p>Your first step is to explore an choose communities that align with your values or things you care about. Put your money where your heart is.</p>
          </div>
          <div className="column">
            <h2>image</h2>
          </div>
          <div className="column">
            <h2>image</h2>
          </div>
          <div className="column">
            <h2>Your new currency</h2>
            <p>Now that you are part of the lemonade community, you can track particapte in building the value of your Lemon Tokens. You can also use tokens to create tasks and fund projects.</p>
          </div>
        </div>

      </div>
    )
  }
}

export default DiscoverPanel
