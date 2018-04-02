import React, { Component } from "react";
import { convertedTime } from "../utils/convertedTime";
import { Link } from "react-router-dom";

export default class TripCard extends Component {
  render() {
    const {
      id,
      fareClass,
      destination,
      title,
      description,
      imageUrl,
      currentBid,
      totalSeat,
      airportCode,
      trip
    } = this.props;

    const convertedDepartureTime = convertedTime(trip.departing.departureTime);
    const convertedArrivalTime = convertedTime(trip.departing.arrivalTime);

    return (
      <div className="trip-card">
        <Link to={`/flight/${fareClass}/${id}`}>
          <img className="trip-card__image" src={imageUrl} />
        </Link>
        <div className="trip-card-text">
          <p className="trip-card__title">{title}</p>
          <p className="trip-card__description">{description}</p>
          <div className="flight-info">
            <div className="flight-info__origin">
              <div>{airportCode.origin}</div>
              <div>{convertedDepartureTime}</div>
            </div>
            <img
              className="flight-info__airplane-icon"
              src="icons/airplane.svg"
            />
            <div className="flight-info__destination">
              <div>{airportCode.destination}</div>
              <div>{convertedArrivalTime}</div>
            </div>
            <div className="flight-info__passengers">
              <Link
                style={{ textDecoration: "none", color: "#363636" }}
                to={`/flight/${fareClass}/${id}`}
              >
                <span>{currentBid}</span>/{totalSeat}
              </Link>
              <div>Travelers</div>
            </div>
            <div className="flight-info__days-to-go">
              <div>30</div>
              <div>days to go</div>
            </div>
            <div className="flight-info__next-tier">
              <div>$99</div>
              <div>Next tier $109</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
