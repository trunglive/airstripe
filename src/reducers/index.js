import { combineReducers } from "redux";
import flights from "./flightsReducer";
import finding from "./fareClassReducer";
import sorting from "./sortingReducer";
import userInfo from './userInfoReducer';

const rootReducer = combineReducers({
  flights,
  finding,
  sorting,
  userInfo
});

export default rootReducer;
