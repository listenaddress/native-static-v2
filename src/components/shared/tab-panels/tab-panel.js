import React from 'react';

import './tab-panels.scss';

export default function TabPanel({ render }) {
  return <div>{render()}</div>;
}
