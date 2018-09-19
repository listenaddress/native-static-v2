import React from 'react';

import './tab-panels.scss';

export default function TabNavigation({ panels, activeTab, clickHandler }) {

  return (
    <ul className="tab__navigation">
      {(panels || []).map((name, i) => {
        const tabClass = activeTab === i ? "item active" : "item";
     
        return (
          <li className={tabClass}
            key={i}
            onClick={() => clickHandler(i)}
          >
            <button>{name}</button>
          </li>
        );
      })}
    </ul>
  );
}
