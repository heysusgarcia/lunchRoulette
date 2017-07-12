import { createStore } from 'redux';
import venuesReducer from '../reducers/venues_reducer';

const configureStore = (preloadedState = {}) => {
  return createStore(
    venuesReducer,
    preloadedState
  );
};

export default configureStore;
