import { RECEIVE_VENUE } from '../actions/venue_actions';
import merge from 'lodash/merge';


// const initialState = {
//   venues: {
//     1: {
//       id: 1,
//       name: 'Suya',
//       menu_url: ""
//     }
//   }
// };

const venuesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_VENUE:
      const newVenue = { [action.venue.id]: action.venue }
      return merge({}, state, newVenue);
    default:
      return state;
  }
};

export default venuesReducer;
