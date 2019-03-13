import React from 'react';
import ReactDOM from 'react-dom';

import AppIndex from './AppIndex.jsx';

ReactDOM.render(
  <AppIndex />,
  document.getElementById("root")
)

if (module.hot) {
  module.hot.accept()
}