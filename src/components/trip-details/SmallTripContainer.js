import React, { Component } from "react";

import ShortTripCard from "./ShortTripCard";
import { randomFourCards } from "../../utils/randomFourCards";

export default class SmallTripContainer extends Component {
  render() {
    const newFlights = randomFourCards(this.props.flights, this.props.id);

    return (
      <div className="small-trip-container">
        {newFlights.map((flight, key) => (
          <ShortTripCard key={key} {...flight} />
        ))}
      </div>
    );
  }
}
