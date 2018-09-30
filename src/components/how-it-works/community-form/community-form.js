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
            <h2>Find your Communities</h2>
            <p>We encourage you to join communities you are passionate about.</p>
            <OutboundLink className="button" href="/">Browse Communities</OutboundLink>
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
