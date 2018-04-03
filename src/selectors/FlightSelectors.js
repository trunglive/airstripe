import { daysToGo } from "../utils/convertedTime";

export const FlightSelectors = (flights, { fareClass }, { sortBy }) => {
  return flights
    .filter(
      flight =>
        fareClass === "All" || fareClass.toLowerCase() === flight.fareClass
    )
    .sort((currentFlight, nextFlight) => {
      if (sortBy === "Popularity") {
        return currentFlight.currentBid < nextFlight.currentBid ? 1 : -1;
      } else if (sortBy === "Cheapest") {
        return currentFlight.price > nextFlight.price ? 1 : -1;
      } else if (sortBy === "Expiration Date") {
        return daysToGo(currentFlight.trip.departing.departureTime) >
          daysToGo(nextFlight.trip.departing.departureTime)
          ? 1
          : -1;
      } else if (sortBy === "Shortest Flight") {
        return currentFlight.trip.departing.arrivalTime -
          currentFlight.trip.departing.departureTime >
          nextFlight.trip.departing.arrivalTime -
            nextFlight.trip.departing.departureTime
          ? 1
          : -1;
      }
    });
};
