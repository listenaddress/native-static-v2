import React from 'react'

import './community-carousel.scss'

const CommunityCard = ({ community, displayClass }) => (
  <div className={displayClass} key={community.id}>
    <div className="header" style={{backgroundImage: "url(" + community.image + ")"}}>
      <div className="row">
        <p className="tag">{community.subtitle}</p>
        <h4>{community.name}</h4>
        <p className="location">{community.location}</p>
      </div>
    </div>
    <div className="copy">
      <p>{community.tribeIntro}</p>
      <div className="token">
        <img src={community.icon} />
        <p>{community.tickerSymbol}</p>
        <a className="button" href="/">LAUNCH</a>
      </div>
    </div>
  </div>
)

export default CommunityCard
