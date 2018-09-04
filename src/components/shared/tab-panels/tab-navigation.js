import React from 'react';

import './tab-panels.scss';

export default function TabNavigation({ panels, activeTab, clickHandler }) {

  return (
    <ul>
      {(panels || []).map((name, i) => {
        return (
          <li
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
