import React from 'react';
import ReactDOM from 'react-dom';

class VenueList extends React.Component {
  render() {
    const { venues, receiveVenue } = this.props;

    const venue = venues.map(venue => (
      <span>
        <p className="venue-name">{venue.name}</p>

        venue.menu_url : <p className="menu-url">{venue.menu_url}</p> ? <p className="menu-url">Menu Website Not Available</p>
      </span>
    ));

    return {

    }
  }
};

export default VenueList;
