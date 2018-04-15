import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllFlights } from "../../actions/flightsActions";
import ShortTripCard from "../trip-details/ShortTripCard";

class SaveToList extends Component {
  state = {
    wishlist: []
  };

  componentDidMount() {
    const { id } = this.props.userInfo;

    const wishlist = this.props.flights.filter(
      flight => flight.saved && Object.keys(flight.saved).includes(id)
    );

    this.setState({ wishlist });
  }

  render() {
    const { wishlist } = this.state;

    return (
      <div className="wishlist-page">
        <div className="wishlist-intro">
          <p className="wishlist__title">List</p>
          <p className="wishlist__description">Your saved trips</p>
        </div>

        {wishlist.length > 0 ? (
          <div className="wishlist-container">
            {wishlist.map(item => <ShortTripCard {...item} />)}
          </div>
        ) : (
          <div className="no-item-found-container">
            <p>No trips found in your list</p>
            <img className="no-item-found" src="/icons/no-item-found.svg" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ flights, userInfo }) => ({
  flights,
  userInfo
});

export default connect(mapStateToProps, { fetchAllFlights })(SaveToList);
