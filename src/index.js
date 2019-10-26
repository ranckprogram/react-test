import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Route from './route';

import store from './stores';

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>
  ,
  document.getElementById('root')
);