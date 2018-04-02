import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Menu from '../components/menu/menu';
import Auth from '../components/pages/auth';
import Contacts from '../components/pages/new-transaction';


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
          <Route path='/contacts' component={Contacts}/>
        </Switch>
      </div>
    )
  }
}