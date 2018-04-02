import { GET_ALL_FLIGHTS } from "./actionTypes";

export const getAllFlights = flights => ({
  type: GET_ALL_FLIGHTS,
  flights
});

