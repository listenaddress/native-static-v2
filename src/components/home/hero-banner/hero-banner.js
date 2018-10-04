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

  componentDidMount = () => {
    this.interval = window.setInterval(this.hideText, 12000)
  }

  componentWillUnmount = () => {
    window.clearInterval(this.interval);
  }

  hideText = () => {
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
        <div className="panel build__panel">
        <Fade appear up collapse opposite when={this.state.showBuild}>
          <h1>Build Prosperous Communities</h1>
          <p>Native is a platform for communities to realize their inherent value.</p>
        </Fade>
        </div>
        <div className="panel launch__panel">
        <Fade up collapse opposite when={this.state.showLaunch}>
          <h1>Launch your community token</h1>
          <p>Use Native to create an economy for your community. Put the token to work to fund projects.</p>
        </Fade>
        </div>
        <div className="panel empower__panel">
        <Fade up collapse opposite when={this.state.showEmpower}>
          <h1>We empower community decision making</h1>
          <p>Use Native’s voting tools to choose how to put your community funds to work.</p>
        </Fade>
      </div>
      </div>
    )
  }
}

export default HeroBanner
