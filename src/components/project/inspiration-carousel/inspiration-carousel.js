import React from 'react';
import Slider from 'react-slick';

import InspirationCard from './inspiration-card';
import inspirationData from '../../../data/inspiration';
import Zoom from 'react-reveal/Zoom'

import bookLogo from '../../../assets/inspiration__book.png'
import articleLogo from '../../../assets/inspiration__article.png'
import podcastLogo from '../../../assets/inspiration__podcast.png'

import './inspiration-carousel.scss'

const logos = {
  book: bookLogo,
  article: articleLogo,
  podcast: podcastLogo
}

class InspirationCarousel extends React.Component {
  state = {
    inspirationList: [],
  }

  componentDidMount() {
    this.setState({
      inspirationList: this.buildInspirationList()
    })
  }

  buildInspirationList = () => {
    return inspirationData.map((item, i) => {
      return <InspirationCard
        item={item}
        logo={logos[item.type]}
        key={i}/>
    });
  }

  next = () => {
    this.slider.slickNext();
  }

  previous = () => {
    this.slider.slickPrev();
  }

  render () {
    const settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      focusOnSelect: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }

    return (
      <div >
        <div>
          <h3>We Love Knowledge</h3>
          <p>Here are some things that left us inspired.</p>
        </div>
        <div>
          <Zoom>
            <Slider ref={c => (this.slider = c)} {...settings}>
              {this.state.inspirationList}
            </Slider>
          </Zoom>

          <div>
            <button onClick={this.previous}>PREV</button>
            <button onClick={this.next}>NEXT</button>
          </div>
        </div>
      </div>

    )
  }
}

export default InspirationCarousel
