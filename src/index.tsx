import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routes } from './Routes';
// import Header from './components/header/Header';
import './index.css';
import { Router } from 'react-router';
// import { Provider } from 'react-redux';
// import store from './store/store';

const history = createBrowserHistory();
ReactDOM.render(
  // <Provider store={ store }>
  <div>
    <Router history={history}>
      <Routes />
    </Router>
  </div>,
  // </Provider>,
  document.getElementById('root') as HTMLElement,
);
