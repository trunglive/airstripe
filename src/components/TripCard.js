import React, { Component } from "react";
import { convertedDate, daysToGo } from "../utils/convertedTime";
import { Link } from "react-router-dom";

export default class TripCard extends Component {
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

    const convertedDepartureTime = convertedDate(trip.departing.departureTime);
    const convertedArrivalTime = convertedDate(trip.departing.arrivalTime);
    const nextTier = price + 30;

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
                <span>{currentBid}</span>/{totalSeat}
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
