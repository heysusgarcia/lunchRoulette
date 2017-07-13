import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

class VenueList extends React.Component {
  render() {
    const { venues, fetchVenue } = this.props;

    const venue = venues.map(venue => (
      <span
        key={`venue.id`}
        className="venue-details">
        <p className="venue-name">
          {venue.name}
        </p>

        <p className="menu-url">
          { venue.menu_url ? <a href={venue.menu_url} target="_blank">Menu</a>  : "Menu Not Available" }
        </p>
      </span>
    ));

    return (
      <span className="venue-parent-view">
        <span>
          <div className="cutlery-icon">
            <FontAwesome
              className='fa-cutlery'
              name=''
              size='2x' />
          </div>
          <button onClick={fetchVenue}>
            I'm Feeling Hungry!
          </button>
        </span>
        { venue }
      </span>
    )
  }
};

export default VenueList;
