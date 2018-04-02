import { GET_ALL_FLIGHTS, GET_SINGLE_FLIGHT } from "../actions/actionTypes";

const initialFlightsState = [];

const flightsReducer = (state = initialFlightsState, action) => {
  switch (action.type) {
    case GET_ALL_FLIGHTS:
      return action.flights;
    default:
      return state;
  }
};

export default flightsReducer;
