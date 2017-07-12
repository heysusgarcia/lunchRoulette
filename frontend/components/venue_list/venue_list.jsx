import React from 'react';
import ReactDOM from 'react-dom';

class VenueList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { venueView: false }
    this.toggleVenueView = this.toggleVenueView.bind(this);
  }

  toggleVenueView(e) {
    e.preventDefault();
    this.setState({ venueView: !this.state.venueView });
    this.props.fetchVenue();
  }

  render() {
    const { venues, receiveVenue } = this.props;
    let venueView;

    const venue = venues.map(venue => (
      <span
        key={`venue.id`}>
        <p className="venue-name">{venue.name}</p>

        <p className="menu-url">
          { venue.menu_url ? venue.menu_url  : "Menu Website Not Available" }
        </p>
      </span>
    ));


    if (this.state.venueView) {
      venueView = venue;
    } else {
      venueView = <p className="venueless-view">Click The Button To Find Out What's For Lunch!</p>
    }

    return (
      <span>
        { venueView }
        <button onClick={this.toggleVenueView}>What's for Lunch?</button>
      </span>
    )
  }
};

export default VenueList;
