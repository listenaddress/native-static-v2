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
    <div className="hero hiw__hero">
      <div className="contents">
        <Fade up>
        <h1>Welcome to Native</h1>
        <p>Are you looking to find communities that join or are you interested in starting your own community? Let's take a deeper dive into Native and show you how it all works.</p>
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
            <p>Projects are one of the main functions of Native.  Community curators and members can create and support projects to get stuff done in the world.</p>
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
              <p>Help shape your community by voting on important topics, like the pressing issue of choosing the flavors of lemonade you want to offer at the stand.</p>
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
            <p>When you complete tasks for your community, the overall value of the community goes up. You get paid in community tokens for each task you complete.</p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="steps--footer">
      </div>
    </section>
    <section className="block how-it-works__curator">
      <CommunityForm />
      <Fade left>
      <div className="white-paper">
        <div>
          <p>Nerding out? Learn more about the economics behind Native.</p>
          <a className="button">Download White Paper</a>
        </div>
        <div>
        </div>
      </div>
      </Fade>
    </section>

  </div>
)

export default SecondPage
