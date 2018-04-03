import { combineReducers } from "redux";
import flights from "./flightsReducer";
import finding from "./fareClassReducer";
import sorting from "./sortingReducer";

const rootReducer = combineReducers({
  flights,
  finding,
  sorting
});

export default rootReducer;
