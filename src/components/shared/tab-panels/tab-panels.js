import React, { Component } from 'react';

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
    const activePanel = (panels || []).find((panel, i) => i === activeTab);
    const panelNames = panels.map(panel => panel.name);

    return (
      <div>
        <TabNavigation
          activeTab={activeTab}
          panels={panelNames}
          clickHandler={(i) => this.setActiveTab(i)}
        />
        <TabPanel render={() => activePanel.render()} />
      </div>
    );
  }
}

export default TabPanels;
