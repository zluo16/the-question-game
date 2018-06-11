import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Router from './router'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter name="React" basename="/">
      <Router />
    </HashRouter>,
    document.body.appendChild(document.createElement('div')),
  );
});
