import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import './email-list-form.scss'

class EmailListForm extends React.Component {
  state = {
    resultMessage: '',
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(this.form);
    const result = await addToMailchimp(formData.get('email'))
    this.setState({
      resultMessage: result.msg,
    })
    this.form.reset();
  }
 
  render () {
    return (
      <form onSubmit={this.handleSubmit} name="emailForm" ref={(el) => this.form = el} autoComplete="off">
        <input type="text" name="email" placeholder="email address" />
        <button type="submit">STAY UPDATED</button>
        <div>
          <p>{this.state.resultMessage}</p>
        </div>
      </form>
    )
  }
}

export default EmailListForm