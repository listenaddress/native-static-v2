import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed';

import './community-form.scss'

class CommunityForm extends React.Component {
  state = {
    open: false,
  }

  openForm = () => {
    this.typeformEmbed.typeform.open();
  }

  render () {
    return (
      <div>
        <div className="contents contain">
          <div className="column">
            <h2>What kind of community will you create?</h2>
            <p>The world is your oyster We enourage you to create new communities with ideas you are passionate about.</p>
            <a className="button" onClick={this.openForm}>Start a Community</a>
          </div>
          <div className="column">
          </div>
        </div>
        <div className="contents contain">
          <ReactTypeformEmbed
            url={'https://nativeproject.typeform.com/to/U3ZeE6'}
            popup={true}
            autoOpen={false}
            style={{height: '0%'}}
            ref={(tf => this.typeformEmbed = tf) }
          />
        </div>
      </div>
    )
  }
}

export default CommunityForm
