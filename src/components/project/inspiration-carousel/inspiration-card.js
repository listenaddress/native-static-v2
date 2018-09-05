import React from 'react'

import './inspiration-carousel.scss'

const InspirationCard = ({ item, logo, key }) => {
  return (
    <div key={key}>
      <img src={logo} />
      <p><a href={item.url}>{item.name}</a></p>
      <p>{item.subtitle}</p>
    </div>
  )
}

export default InspirationCard