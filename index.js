import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';
import reducers from './redux/reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
