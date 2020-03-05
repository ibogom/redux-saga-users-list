import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Users from './users'
import User from './user'
import NotFound from './404'

const Pages = () => {
  return (<Switch>
    <Route exact path='/' component={Users} />
    <Route exact path='/:id' component={User} />
    <Route render={props => <NotFound {...props} />} />
  </Switch>)
}

export default Pages
