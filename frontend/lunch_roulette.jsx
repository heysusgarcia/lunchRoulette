import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveVenue } from './actions/venue_actions';

window.store = configureStore;
window.receiveVenue = receiveVenue;

document.addEventListener("DOMContentLoader", ()=> {
  const store = configureStore();
  ReactDOM.render(<h1></h1>, document.getElementById('content'))
});
