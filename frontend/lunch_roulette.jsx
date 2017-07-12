import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveVenue } from './actions/venue_actions';
import { allVenues } from './reducers/selectors';
import Root from './components/root';

window.store = configureStore;
window.receiveVenue = receiveVenue;
window.allVenues = allVenues;

document.addEventListener("DOMContentLoaded", ()=> {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('content'))
});
