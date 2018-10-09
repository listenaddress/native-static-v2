import React from "react"
import Lottie from "react-lottie"
import './lottie-control.scss';

class LottieControl extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      defaultOptions: {
        loop: this.props.loop,
        autoplay: this.props.autoplay,
        animationData: this.props.animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      eventListeners: [
        {
          eventName: 'complete',
          callback: () => this.swapAnimation()
        },
        {
          eventName: 'DOMLoaded',
          callback: () => this.animationIsLoaded()
        },
      ]
    }
  }

  animationIsLoaded = () => {
    if (this.props.isLoadedListener) {
      this.props.isLoadedListener()
    }
  }

  swapAnimation = () => {
    if (this.props.swapAnimationData) {
      this.setState({
        defaultOptions: {
          loop: this.props.swapLoop,
          autoplay: true,
          animationData: this.props.swapAnimationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Lottie options={this.state.defaultOptions}
                eventListeners={this.state.eventListeners}
                isStopped={this.props.isStopped}/>
      </div>
    )
  }

}

export default LottieControl;
