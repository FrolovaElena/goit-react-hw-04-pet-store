import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <HashRouter>
    <Route component={App} basename="/" />
  </HashRouter>,
  document.getElementById('root'),
);
