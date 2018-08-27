import React from 'react'
import Slider from "react-slick";

import './community-carousel.scss'

const CommunityCard = ({ community }) => (
  <div className="CommunityCard" key={community.id}>
    <p>{community.name}</p>
  </div>
)

export default CommunityCard