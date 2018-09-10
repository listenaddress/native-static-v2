import React from 'react'

import TabPanels from '../components/shared/tab-panels/tab-panels';
import DiscoverPanel from '../components/how-it-works/panels/discover-panel';
import CreatePanel from '../components/how-it-works/panels/create-panel';
import CommunityForm from '../components/how-it-works/community-form/community-form';
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'

import './how-it-works.scss'

const tabs = [
  {
    name: 'Discover',
    render: () => <DiscoverPanel />,
  },
  {
    name: 'Create',
    render: () => <CreatePanel />,
  },
]

const SecondPage = () => (
  <div>
    <div className="hero">
      <div className="contents">
        <Fade up>
        <h1>Launch your own community economy.</h1>
        <p>What's important to you? We believe in putting our money into ourvalues. Choose your focus, set some rules and launch your community.</p>
        </Fade>
      </div>
    </div>
    <TabPanels panels={tabs} />
    <section className="how-it-works__steps steps">
      <div className="intro">
        <div className="contents">
          <Fade top cascade>
            <h2>Participate</h2>
          </Fade>
        </div>
      </div>
      <div className="step-one">
        <div className="contents">
          <Fade left>
          <div className="column"></div>
          </Fade>
          <div className="column">
            <Fade right>
            <h6>Projects</h6>
            <h3>Create and support projects</h3>
            <p>Projects are one of the main fucntions of Native. Community leaders can create projects for the members to support and get stuff done.</p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="step-two">
        <div className="contents">
            <div className="column">
              <Fade left>
              <h6>Voting</h6>
              <h3>Your vote matters</h3>
              <p>Help shape your community by voting on important topics, like the very pressing issue of choosing flavors for you lemonade stand.</p>
              </Fade>
            </div>
          <Fade right>
          <div className="column">
          </div>
          </Fade>
        </div>
      </div>
      <div className="step-three">
        <div className="contents">
          <Fade left>
          <div className="column">
          </div>
          </Fade>
          <div className="column">
            <Fade right>
            <h6>Tasks</h6>
            <h3>Claim tasks, earn money!</h3>
            <p>When you complete tasks for your community the overall value of the community goes up. You can also get paid in community currency for completing tasks.</p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="steps--footer">
      </div>
    </section>
    <section className="block how-it-works__curator">
      <CommunityForm />
    </section>
  </div>
)

export default SecondPage
