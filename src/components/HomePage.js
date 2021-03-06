import React, { Component } from "react";
import { connect } from "react-redux";

import FilterMenu from "./filter-bar/FilterMenu";
import FullTripCard from "./trip-details/FullTripCard";
import { auth } from "../firebase/firebase";
import { fetchAllFlights } from "../actions/flightsActions";
import { FlightSelectors } from "../selectors/FlightSelectors";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchAllFlights();
  }

  render() {
    const { flights } = this.props;

    return (
      <div className="homepage">
        <FilterMenu />
        <div className="trip-container">
          {flights.length === 0 ? (
            <img className="spinner" src="/images/spinner.svg" />
          ) : (
            flights.map(flight => <FullTripCard key={flight.id} {...flight} />)
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ flights, finding, sorting }) => ({
  flights: FlightSelectors(flights, finding, sorting)
});

export default connect(mapStateToProps, { fetchAllFlights })(HomePage);
