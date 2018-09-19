import React from 'react';
import Slider from 'react-slick';

import CommunityCard from './community-card';
import communityData from '../../../data/communities';
import Zoom from 'react-reveal/Zoom'

import './community-carousel.scss'

class CommunityCarousel extends React.Component {
  state = {
    communityList: 'current',
    communityData: [],
  }

  componentDidMount() {
    this.setState({
      communityData: this.buildCommunityList(this.state.communityList),
    })
  }

  buildCommunityList = (list, middleItem) => {
    return communityData[list].map((community, i) => {
      const middleItemIndex = middleItem || 0;
      return <CommunityCard
        community={community}
        key={community.id}
        displayClass={this.setDisplayClass(middleItemIndex, i)}/>
    });
  }

  setDisplayClass = (middleItemIndex, i) => {
    if (middleItemIndex === i) {
      return 'CommunityCard CommunityCard--center';
    } else {
      return 'CommunityCard';
    }
  }

  swapCommunityList = (listName) => {
    this.slider.slickGoTo(0)
    this.setState({
      communityList: listName,
      communityData: this.buildCommunityList(listName),
    })
  }

  next = () => {
    this.slider.slickNext();
  }

  previous = () => {
    this.slider.slickPrev();
  }

  handleSlide = (current) => {
    this.setState({
      communityData: this.buildCommunityList(this.state.communityList, current),
    })
  }

  render () {
    const settings = {
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      focusOnSelect: true,
      initialSlide: 0,
      draggable: false,
      // beforeChange: (prev, current) => this.handleSlide(current),
      afterChange: (current) => this.handleSlide(current),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }
    const activeCurrent = this.state.communityList === 'current' ? 'active--current' : '';
    const activeFuture = this.state.communityList === 'future' ? 'active--future' : '';;

    return (
      <div className="Communities">
        <div className="Communities__header contain">
          <div className="Communities__header--text">
            <h3>Find Your Community</h3>
            <p>We empower the collective dreams of the communities built on the Native platform.</p>
          </div>
          <div className="spacer"><p></p></div>
          {/* <div className="Communities__header--links">
            <a onClick={() => this.swapCommunityList('current')}
              className={activeCurrent}>
              CURRENT COMMUNITIES
            </a>
            <a onClick={() => this.swapCommunityList('future')}
              className={activeFuture}>
                FUTURE COMMUNITIES
            </a>
          </div> */}
        </div>
        <div className="Communities__carousel">
          <Zoom appear spy={this.state.communityList}>
            <Slider ref={c => (this.slider = c)} {...settings}>
              {this.state.communityData}
            </Slider>
          </Zoom>

          <div className="carousel--actions">
            <button onClick={this.previous}>PREV</button>
            <button onClick={this.next}>NEXT</button>
          </div>
        </div>
      </div>

    )
  }
}

export default CommunityCarousel
