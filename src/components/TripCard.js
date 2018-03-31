import React, { Component } from "react";

export default class TripCard extends Component {
  render() {
    const {
      destination,
      title,
      description,
      imageUrl,
      currentBid,
      totalSeat,
      airportCode,
      trip
    } = this.props;

    return (
      <div className="trip-card">
        <p className="trip-card__title">{title + " title"}</p>
        <p className="trip-card__description">{description + "description"}</p>
        <img className="trip-card__image" src={imageUrl} />
        <div className="trip-card__origin">
          {airportCode.origin} + {trip.depart.departureTime}
        </div>
        <div className="trip-card__destination">
          {airportCode.destination} + {trip.depart.arrivalTime}
        </div>
        <div className="trip-card__passengers">
          <div>
            {currentBid}/{totalSeat}
          </div>
          <div>Passengers</div>
        </div>
        <div className="trip-card__days-to-go">
          <div>30</div>
          <div>days to go</div>
        </div>
        <div className="trip-card__next-tier">
          <div>$99</div>
          <div>Next tier $109</div>
        </div>
      </div>
    );
  }
}
