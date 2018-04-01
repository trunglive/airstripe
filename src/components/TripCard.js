import React, { Component } from "react";
import { convertedTime } from '../utils/convertedTime';

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

    const convertedDepartureTime = convertedTime(trip.depart.departureTime);
    const convertedArrivalTime = convertedTime(trip.depart.arrivalTime);
    
    return (
      <div className="trip-card">
        <img className="trip-card__image" src={imageUrl} />
        <div className="trip-card-text">
          <p className="trip-card__title">{title}</p>
          <p className="trip-card__description">{description}</p>
          <div className="flight-info">
            <div className="flight-info__origin">
              <div>{airportCode.origin}</div>
              <div>{convertedDepartureTime}</div>
            </div>
            <img className="flight-info__airplane-icon" src="icons/airplane.svg" />
            <div className="flight-info__destination">
              <div>{airportCode.destination}</div>
              <div>{convertedArrivalTime}</div>
            </div>
            <div className="flight-info__passengers">
              <div>
                <span>{currentBid}</span>/{totalSeat}
              </div>
              <div>Passengers</div>
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
