import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllFlights } from "../actions/flightsActions";

class SingleTripPage extends Component {
  componentDidMount() {
    this.props.fetchAllFlights();
  }

  render() {
    const flight = this.props.flights.filter(
      flight => flight.id === this.props.match.params.id
    );

    const singleFlight = { ...flight[0] };
    const {
      title,
      description,
      imageUrl,
      price,
      totalSeat,
      currentBid,
      trip
    } = singleFlight;

    return (
      <div>
        {Object.keys(singleFlight).length > 0 ? (
          <div className="single-trip-container">
            <div className="single-trip">
              <p className="single-trip__title">{title}</p>
              <p className="single-trip__description">{description}</p>
              <img className="single-trip__image" src={imageUrl} />
            </div>
            <div className="flight-info">
              <div className="schedule-board">
                <div>
                  <div>{`${trip.departing.originPoint} (${
                    trip.departing.originCode
                  })`}</div>

                  <p>{trip.departing.departureTime}</p>
                </div>
                <img
                  className="flight-info__airplane-icon"
                  src="/icons/airplane.svg"
                />
                <div>
                  <div>{`${trip.returning.destinationPoint} (${
                    trip.returning.destinationCode
                  })`}</div>
                  <p>{trip.departing.arrivalTime}</p>
                </div>
                <div>
                  <div>{`${trip.returning.destinationPoint} (${
                    trip.returning.destinationCode
                  })`}</div>
                  <p>{trip.returning.departureTime}</p>
                </div>
                <img
                  className="flight-info__airplane-icon"
                  src="/icons/airplane.svg"
                />
                <div>
                  <div>{`${trip.returning.destinationPoint} (${
                    trip.returning.destinationCode
                  })`}</div>
                  <p>{trip.returning.arrivalTime}</p>
                </div>
              </div>
              <div className="price-board">
                <p>
                  {currentBid} passengers of {totalSeat} goal
                </p>
                <p>30 days to go</p>
                <p>{price} current price, next tier $109</p>
                <p>
                  <span>All or nothing</span>.This flight will only take off if
                  {totalSeat} passengers join by November 30, 2017 5:00AM CEST
                </p>
                <div class="icon-light-group">
<img src="/icons/icon-light/facebook-light.svg" />
<img src="/icons/icon-light/instagram-light.svg" />
<img src="/icons/icon-light/twitter-light.svg" />
<img src="/icons/icon-light/mail-light.svg" />
                </div>
                <a className="search-button blue-button">Book this flight</a>
              </div>
            </div>
            <div className="menu-toggle">Content for menu toggle</div>
          </div>
        ) : (
          <img className="spinner" src="/images/spinner.svg" />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ flights }) => ({
  flights
});

export default connect(mapStateToProps, { fetchAllFlights })(SingleTripPage);
