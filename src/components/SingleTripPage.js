import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllFlights } from "../actions/flightsActions";
import {
  convertedDateAndHour,
  daysToGo,
  expiredDate
} from "../utils/convertedTime";

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

    const nextTier = price + 30;
    return (
      <div>
        {Object.keys(singleFlight).length > 0 ? (
          <div className="single-trip-container">
            <div className="single-trip-intro">
              <p className="single-trip-intro__title">{title}</p>
              <p className="single-trip-intro__description">{description}</p>
            </div>

            <img className="single-trip-intro__image" src={imageUrl} />

            <div className="all-flight-details">
              <div className="schedule-board">
                <div>
                  <div>{`${trip.departing.originPoint} (${
                    trip.departing.originCode
                  })`}</div>

                  <p className="schedule-board__time">
                    {convertedDateAndHour(trip.departing.departureTime)}
                  </p>
                </div>
                <img
                  className="single-trip__airplane-icon"
                  src="/icons/airplane-depart.svg"
                />
                <div className="schedule-board__destination">
                  <div>{`${trip.returning.destinationPoint} (${
                    trip.returning.destinationCode
                  })`}</div>
                  <p className="schedule-board__time">
                    {convertedDateAndHour(trip.departing.arrivalTime)}
                  </p>
                </div>
                <hr />
                <div>
                  <div>{`${trip.returning.destinationPoint} (${
                    trip.returning.destinationCode
                  })`}</div>
                  <p className="schedule-board__time">
                    {convertedDateAndHour(trip.returning.departureTime)}
                  </p>
                </div>
                <img
                  className="single-trip__airplane-icon icon-reverse"
                  src="/icons/airplane-depart.svg"
                />
                <div className="schedule-board__destination">
                  <div>{`${trip.departing.originPoint} (${
                    trip.departing.originCode
                  })`}</div>
                  <p className="schedule-board__time">
                    {convertedDateAndHour(trip.returning.arrivalTime)}
                  </p>
                </div>
              </div>
              <div className="detail-board">
                <p>
                  <span className="detail-board__current-bid">
                    {currentBid}
                  </span>{" "}
                  passengers of {totalSeat} goal
                </p>
                <p>
                  <span className="detail-board__days-to-go">
                    {daysToGo(trip.departing.departureTime)}
                  </span>{" "}
                  days to go
                </p>
                <p>
                  <span className="detail-board__current-price">${price}</span>{" "}
                  current price, next tier ${nextTier}
                </p>
                <p className="detail-board__note">
                  <span>All or nothing</span>. This flight will only take off if{" "}
                  {totalSeat} passengers join by{" "}
                  {expiredDate(trip.departing.departureTime)} 5:00 AM CEST.
                </p>
                <div className="detail-board__icon-and-button">
                  <div className="icon-light-group">
                    <img src="/icons/icon-light/facebook-light.svg" />
                    <img src="/icons/icon-light/instagram-light.svg" />
                    <img src="/icons/icon-light/twitter-light.svg" />
                    <img src="/icons/icon-light/mail-light.svg" />
                  </div>
                  <a className="book-this-flight blue-button">
                    Book this flight
                  </a>
                </div>
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
