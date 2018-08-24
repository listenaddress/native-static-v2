import React from 'react'
import EmailListForm from '../components/email-list-form/email-list-form';

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="contents">
        <h1>Build Prosperous Communities</h1>
        <p>Native is a place to create and participate in community-based economics. We enable communities to realize their inherent value through local currency and set of governance.</p>
      </div>
    </div>
    <section>
      <EmailListForm />
    </section>
  </div>
)

export default IndexPage
