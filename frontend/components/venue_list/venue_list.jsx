import React from 'react';
import ReactDOM from 'react-dom';

class VenueList extends React.Component {
  render() {
    const { venues, fetchVenue } = this.props;

    const venue = venues.map(venue => (
      <span
        key={`venue.id`}
        className="venue-details">
        <p className="venue-name">{venue.name}</p>

        <p className="menu-url">
          { venue.menu_url ? <a href={venue.menu_url} target="_blank">Menu</a>  : "Menu Not Available" }
        </p>
      </span>
    ));

    return (
      <span className="venue-parent-view">
        <span>
          <button onClick={fetchVenue}>What's for Lunch?</button>
        </span>
        { venue }
      </span>
    )
  }
};

export default VenueList;
