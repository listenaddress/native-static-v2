import React from 'react'
import Slider from "react-slick";

import './community-carousel.scss'

const CommunityCard = ({ community }) => (
  <div className="CommunityCard" key={community.id}>
    <p>{community.name}</p>
    <p>{community.subtitle}</p>
    <img src={community.image} width="200"/>
    <p>{community.tribeIntro}</p>
    <p>{community.location}</p>
  </div>
)

export default CommunityCard