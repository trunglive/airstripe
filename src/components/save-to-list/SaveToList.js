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
    // console.log(this.props.flights);
    // console.log(this.props.userInfo);
    // console.log(this.state.userList);
    const { wishlist } = this.state;

    return (
      <div className="wishlist-page">
        <div className="wishlist-intro">
          <p className="wishlist__title">List</p>
          <p className="wishlist__description">Your saved trips</p>
        </div>
        <div className="wishlist-container">
          {wishlist && wishlist.map(item => <ShortTripCard {...item} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ flights, userInfo }) => ({
  flights,
  userInfo
});

export default connect(mapStateToProps, { fetchAllFlights })(SaveToList);
