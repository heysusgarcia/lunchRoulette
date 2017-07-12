import React from 'react';
import ReactDOM from 'react-dom';

class VenueList extends React.Component {
  render() {
    const { venues, receiveVenue } = this.props;

    const venue = venues.map(venue => (
      <span
        key={`venue.id`}>
        <p className="venue-name">{venue.name}</p>

        <p className="menu-url">
          { venue.menu_url ? venue.menu_url  : "Menu Website Not Available" }
        </p>
      </span>
    ));

    return (
      <span>
        { venue }
      </span>
    )
  }
};

export default VenueList;
