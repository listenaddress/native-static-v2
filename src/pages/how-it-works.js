import React from 'react'

import TabPanels from '../components/shared/tab-panels/tab-panels';
import DiscoverTab from '../components/how-it-works/panels/discover-panel';
import CreateTab from '../components/how-it-works/panels/create-panel';

const tabs = [
  {
    name: 'Discover',
    render: () => <DiscoverTab />,
  },
  {
    name: 'Create',
    render: () => <CreateTab />,
  },
]

const SecondPage = () => (
  <div>
    <h1>How it works</h1>

    <TabPanels panels={tabs} />
  </div>
)

export default SecondPage
