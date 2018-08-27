import React from 'react'
import Slider from "react-slick";

import './community-carousel.scss'

class CommunityCarousel extends React.Component {
  state = {
    tribeList: 'current',
  }

  componentDidMount() {}

  swapCommunityList = (listName) => {
    this.setState({
      tribeList: listName,
    })
  }

  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    }
    const activeCurrent = this.state.tribeList === 'current' ? 'active--current' : '';
    const activeFuture = this.state.tribeList === 'future' ? 'active--future' : '';;

    return (
      <div className="Communities">
        <div className="Communities__header">
          <div>
            <h3>Find Your Community</h3>
            <p>Native is a collective of Communities comprised of Curators and Contributors. 
              Tribes are governed by their members who make decisions about how to best achieve the Community's goals.
              Native is an antirivalrous ecosystem - when one Community grows, all Communities benefit.</p>
          </div>
          <div className="Communities__header--links">
            <a onClick={() => this.swapCommunityList('current')} 
              className={activeCurrent}>
              CURRENT TRIBES
            </a>
            <a onClick={() => this.swapCommunityList('future')} 
              className={activeFuture}>
                FUTURE TRIBES
            </a>
          </div>
        </div>
        <div className="Communities__carousel">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>

    )
  }
}

export default CommunityCarousel