import { createStore } from 'redux';
import venuesReducer from '../reducers/venues_reducer';

const configureStore = () => {
  return createStore(
    venuesReducer
  );
};

export default configureStore;
