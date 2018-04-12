import React, { Component } from "react";
import { connect } from "react-redux";
import ShortTripCard from "./trip-cards/ShortTripCard";
import { fetchAllFlights } from "../actions/flightsActions";
import { database } from "../firebase/firebase";
import {
  convertedDateAndHour,
  daysToGo,
  expiredDate
} from "../utils/convertedTime";
import { randomFourCards } from "../utils/randomFourCards";
import ModalOpen from "./ModalAlert";

class SingleTripPage extends Component {
  state = {
    bookingCount: 0
  };

  componentDidMount() {
    this.props.fetchAllFlights();

    database
      .ref(`flightCards/${this.props.match.params.id}/booked`)
      .on("value", snapshot => {
        const bookingCount = snapshot.numChildren();
        this.setState({ bookingCount });
      });
  }

  handleBookTheFlight = () => {
    const { id, name } = this.props.userInfo;

    database
      .ref("flightCards")
      .child(this.props.match.params.id)
      .child("booked")
      .child(id)
      .set(name);
  };

  handleUnbookTheFlight = () => {
    const { id, name } = this.props.userInfo;

    database
      .ref("flightCards")
      .child(this.props.match.params.id)
      .child("booked")
      .child(id)
      .remove();
  };

  render() {
    console.log(this.props.userInfo);

    const flight = this.props.flights.filter(
      flight => flight.id === this.props.match.params.id
    );

    const singleFlight = { ...flight[0] };

    const {
      booked,
      title,
      description,
      imageUrl,
      price,
      totalSeat,
      currentBid,
      trip
    } = singleFlight;

    const { bookingCount } = this.state;

    const { id } = this.props.userInfo;
    const userHasBooked = booked && Object.keys(booked).includes(id);

    const nextTier = price + 30;

    const newFlights = randomFourCards(
      this.props.flights,
      this.props.match.params.id
    );

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
                    {bookingCount + currentBid}
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
                    <a href="https://www.facebook.com" target="_blank">
                      <img src="/icons/icon-light/facebook-light.svg" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${title}. ${description}.`}
                      target="_blank"
                    >
                      <img src="/icons/icon-light/twitter-light.svg" />
                    </a>
                    <a href={`mailto:?subject=${title}`}>
                      <img src="/icons/icon-light/mail-light.svg" />
                    </a>
                  </div>
                  <div className="book-save-button">
                    {Object.keys(this.props.userInfo).length > 0 ? (
                      !userHasBooked ? (
                        <a
                          className="book-this-flight-auth blue-button"
                          onClick={this.handleBookTheFlight}
                        >
                          Book
                        </a>
                      ) : (
                        <a
                          className="book-this-flight-auth red-button"
                          onClick={this.handleUnbookTheFlight}
                        >
                          Unbook
                        </a>
                      )
                    ) : (
                      <ModalOpen />
                    )}

                    {/* <a className="save-to-list blue-button">Save to list</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <img className="spinner" src="/images/spinner.svg" />
        )}
        <div className="small-trip-container">
          {newFlights.map((flight, key) => (
            <ShortTripCard key={key} {...flight} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ flights, userInfo }) => ({
  flights,
  userInfo
});

export default connect(mapStateToProps, { fetchAllFlights })(SingleTripPage);
