import React from 'react';
import { Route } from 'react-router';
import App from './components/component-app';
import ToDos from './components/component-todos';
import AppTwo from './components/component-app2';

export default (
  <Route>
    <Route path='/' component={App} />
    <Route path='/todo' component={ToDos} />
    <Route path='/apptwo' component={AppTwo} />
  </Route>
);
