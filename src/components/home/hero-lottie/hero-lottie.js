import React from 'react'
// Lottie
import LottieControl from "../../../components/shared/lottie-control/lottie-control"
import * as bannerAnimation from "../../../assets/animations/01_HOME_BANNER_ANIM_v07.json"

class HeroLottie extends React.Component {

  state = {
    bannerIsLoaded: false
  }

  handleBannerIsLoaded = () => {
    this.setState({bannerIsLoaded: true})
    console.log('banner loaded')
  }

  render () {
    return (
      <div>
        <LottieControl
            animationData={bannerAnimation}
            loop={false}
            autoplay={true}
            isLoadedListener={this.handleBannerIsLoaded}
          />
      </div>
    )
  }
}

export default HeroLottie
