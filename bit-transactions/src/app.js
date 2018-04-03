import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';

// layout
import Index from './layouts/index-page';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Index/>
    </HashRouter>
  </Provider>
  , document.querySelector('.app')
);