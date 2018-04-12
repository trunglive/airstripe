import React, { Component } from "react";
import { Link } from "react-router-dom";
import { convertedDate, daysToGo } from "../../utils/convertedTime";
import { database } from "../../firebase/firebase";

export default class TripCard extends Component {
  state = {
    bookingCount: 0
  };

  componentDidMount() {
    database
      .ref(`flightCards/${this.props.id}/booked`)
      .on("value", snapshot => {
        const bookingCount = snapshot.numChildren();
        this.setState({ bookingCount });
      });
  }

  render() {
    const {
      id,
      fareClass,
      title,
      description,
      imageUrl,
      price,
      currentBid,
      totalSeat,
      trip
    } = this.props;

    const { bookingCount } = this.state;

    const convertedDepartureTime = convertedDate(trip.departing.departureTime);
    const convertedArrivalTime = convertedDate(trip.departing.arrivalTime);
    const nextTier = price + 30;

    return (
      <div className="trip-card">
        <Link
          to={`/flight/${fareClass}/${id}`}
          style={{ textDecoration: "none", color: "#363636" }}
        >
          <img className="trip-card__image" src={imageUrl} />
        </Link>
        <div className="trip-card-text">
          <Link
            to={`/flight/${fareClass}/${id}`}
            style={{ textDecoration: "none", color: "#363636" }}
          >
            <p className="trip-card__title">{title}</p>
          </Link>
          <p className="trip-card__description">{description}</p>
          <div className="flight-info">
            <div className="flight-info__origin">
              <div>{trip.departing.originCode}</div>
              <div>{convertedDepartureTime}</div>
            </div>
            <img
              className="flight-info__airplane-icon"
              src="/icons/airplane-depart.svg"
            />
            <div className="flight-info__destination">
              <div>{trip.returning.destinationCode}</div>
              <div>{convertedArrivalTime}</div>
            </div>
            <div className="flight-info__passengers">
              <Link
                style={{ textDecoration: "none", color: "#363636" }}
                to={`/flight/${fareClass}/${id}`}
              >
                <span>{bookingCount + currentBid}</span>/{totalSeat}
              </Link>
              <div>Travelers</div>
            </div>
            <div className="flight-info__days-to-go">
              <div>{daysToGo(trip.departing.departureTime)}</div>
              <div>days to go</div>
            </div>
            <div className="flight-info__next-tier">
              <div>${price}</div>
              <div>Next tier ${nextTier}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
