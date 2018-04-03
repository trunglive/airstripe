import {
  DISPLAY_ALL_CLASSES,
  FIND_ECONOMY_CLASS,
  FIND_BUSINESS_CLASS,
  FIND_FIRST_CLASS
} from "../actions/actionTypes";

const initialFareClassState = { fareClass: "All" };

const fareClassReducer = (state = initialFareClassState, action) => {
  switch (action.type) {
    case DISPLAY_ALL_CLASSES:
      return {
        ...state,
        fareClass: "All"
      };
    case FIND_ECONOMY_CLASS:
      return {
        ...state,
        fareClass: "Economy"
      };
    case FIND_BUSINESS_CLASS:
      return {
        ...state,
        fareClass: "Business"
      };
    case FIND_FIRST_CLASS:
      return {
        ...state,
        fareClass: "First Class"
      };
    default:
      return state;
  }
};

export default fareClassReducer;
