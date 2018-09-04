import React from 'react'

import './community-carousel.scss'

const CommunityCard = ({ community, displayClass }) => (
  <div className={displayClass} key={community.id}>
    <p>{community.name}</p>
    <p>{community.subtitle}</p>
    <img src={community.image} width="200"/>
    <p>{community.tribeIntro}</p>
    <p>{community.location}</p>
  </div>
)

export default CommunityCard