import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
 

root.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);


