import React, { Component } from 'react';

import Fade from 'react-reveal/Fade'
import TabNavigation from './tab-navigation';
import TabPanel from './tab-panel';

import './tab-panels.scss';

class TabPanels extends Component {
  state = {
    activeTab: 0,
  };

  setActiveTab(tabIndex) {
    this.setState({ activeTab: tabIndex });
  }

  render() {
    const { props, state } = this;
    const { panels } = props;
    const { activeTab } = state;
    const lefty = activeTab === 0;
    const activePanel = (panels || []).find((panel, i) => i === activeTab);
    const panelNames = panels.map(panel => panel.name);

    return (
      <div>
        <TabNavigation
          activeTab={activeTab}
          panels={panelNames}
          clickHandler={(i) => this.setActiveTab(i)}
        />
        <Fade spy={activeTab} appear left={lefty} right={!lefty}>
          <TabPanel render={() => activePanel.render()} />
        </Fade>
      </div>
    );
  }
}

export default TabPanels;
