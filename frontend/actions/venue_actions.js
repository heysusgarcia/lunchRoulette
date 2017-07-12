import * as VenueAPIUtil from '../util/venue_api_util';
export const RECEIVE_VENUE = "RECEIVE_VENUE";


export const receiveVenue = venue => ({
  type: RECEIVE_VENUE,
  venue
});

export const fetchVenue = () => dispatch => (
  VenueAPIUtil.fetchVenue().then(venue => dispatch(receiveVenue(venue)))
);
