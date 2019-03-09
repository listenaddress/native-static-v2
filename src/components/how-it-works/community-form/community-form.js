import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import './community-form.scss'

import badges from '../../../assets/icons/ntv-badges.png'

class CommunityForm extends React.Component {
  state = {
    open: false,
  }

  openForm = () => {
    this.typeformEmbed.typeform.open();
  }

  render () {
    return (
      <div className="community-form">
        <div className="contents contain">
          <div className="column">
            <h2>Native Alpha is Live</h2>
            <p>Discover and join our pilot communities or explore creating your own.</p>
            <OutboundLink className="button" href="https://app.nativeproject.one">Launch App</OutboundLink>
          </div>
          <div className="column">
            <img src={badges} />
          </div>
        </div>
      </div>
    )
  }
}

export default CommunityForm
