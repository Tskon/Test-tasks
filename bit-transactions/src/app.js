import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';

// layout
import Index from './layouts/index-page';

ReactDOM.render(
  <HashRouter>
    <Index/>
  </HashRouter>
  , document.querySelector('.app')
);