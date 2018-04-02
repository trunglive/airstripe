import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchAllFlights } from '../actions/flightsActions';
import FilterMenu from "./FilterMenu";
import TripCard from "./TripCard";
import * as firebase from "firebase";

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
            flights.map(flight => <TripCard key={flight.id} {...flight} />)
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ flights }) => ({
  flights
})

export default connect(mapStateToProps, { fetchAllFlights })(HomePage);