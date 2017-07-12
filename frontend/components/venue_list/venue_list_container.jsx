import { connect } from 'react-redux';
import { fetchVenue } from '../../actions/venue_actions';
import { allVenues } from '../../reducers/selectors';
import VenueList from './venue_list';

const mapStateToProps = (state) => ({
  venues: allVenues(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchVenue: () => dispatch(fetchVenue(venue))
});

const VenueListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VenueList);

export default VenueListContainer;
