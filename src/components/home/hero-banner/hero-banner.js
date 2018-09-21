import React from 'react'
import Fade from 'react-reveal/Fade'

import '../../../pages/home.scss'

class HeroBanner extends React.Component {
  state = {
    activePanel: 'build',
    showBuild: true,
    showLaunch: false,
    showEmpower: false,
  }

  componentDidMount() {
    window.setInterval(this.hideText, 4000)
  }

  hideText = () => {
    console.log(this.state.activePanel)
    switch(this.state.activePanel) {
      case 'build':
        this.setState({
          activePanel: 'launch',
          showBuild: false,
          showLaunch: true,
        });
        break;
      case 'launch':
        this.setState({
          activePanel: 'empower',
          showLaunch: false,
          showEmpower: true,
        });
        break;
      case 'empower':
        this.setState({
          activePanel: 'build',
          showEmpower: false,
          showBuild: true,
        });
        break;
    }
  }

  render () {
    return (
      <div className="contents">
        <Fade up collapse opposite when={this.state.showBuild} className="build__panel">
          <h1>Build Prosperous Communities</h1>
          <p>Native is a platform for communities to realize their inherent value.</p>
        </Fade>
        <Fade up collapse opposite when={this.state.showLaunch} className="launch__panel">
          <h1>We launch community economies.</h1>
          <p>Use Native to create a digital community currency.  Put the currency to work to fund projects.</p>
        </Fade>
        <Fade up collapse opposite when={this.state.showEmpower} className="empower__panel">
          <h1>We empower community decision making.</h1>
          <p>Use Native's voting tools to choose how to put your currency to work.</p>
        </Fade>
      </div>
    )
  }
}

export default HeroBanner
