import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Menu from '../components/menu/menu';
import Auth from '../components/pages/auth';
import NewTransaction from '../components/pages/new-transaction';
import AllTransactions from '../components/pages/all-transactions';


export default class Blog extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="container">
        <Menu/>
        <Switch>
          <Route exact path='/' component={Auth}/>
          <Route path='/add' component={NewTransaction}/>
          <Route path='/view-all' component={AllTransactions}/>
        </Switch>
      </div>
    )
  }
}