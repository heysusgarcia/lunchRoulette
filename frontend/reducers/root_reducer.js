import { combineReducers } from 'redux';

import venuesReducer from './venues_reducer';

const RootReducer = combineReducers({
  venues: venuesReducer
});

export default RootReducer;
