'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import Main from './components/Main';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />,
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
);
