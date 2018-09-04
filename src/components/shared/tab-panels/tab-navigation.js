import React from 'react';

import './tab-panels.scss';

export default function TabNavigation({ panels, activeTab, clickHandler }) {

  return (
    <ul className="tab__navigation">
      {(panels || []).map((name, i) => {
        return (
          <li className="item"
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
