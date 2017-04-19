import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createStore from './store';
import './index.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="*" component={AppContainer}/>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
