import { combineReducers } from "redux";
import flights from "./flightsReducer";
import sorting from "./sortingReducer";

const rootReducer = combineReducers({
  flights,
  sorting
});

export default rootReducer;
