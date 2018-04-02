import { GET_ALL_FLIGHTS } from "../actions/actionTypes";

const initialFlightsState = [];

const flightsReducer = (state = initialFlightsState, action) => {
  return action.type === GET_ALL_FLIGHTS ? action.flights : state;
};

export default flightsReducer;