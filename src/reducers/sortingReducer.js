import {
  SORT_BY_POPULARITY,
  SORT_BY_CHEAPEST_PRICE,
  SORT_BY_EXPIRATION_DATE,
  SORT_BY_SHORTEST_FLIGHT
} from "../actions/actionTypes";

const initialSortingState = {
  sortBy: "Popularity"
};

const sortingReducer = (state = initialSortingState, action) => {
  switch (action.type) {
    case SORT_BY_POPULARITY:
      return {
        ...state,
        sortBy: "Popularity"
      };
    case SORT_BY_CHEAPEST_PRICE:
      return {
        ...state,
        sortBy: "Cheapest"
      };
    case SORT_BY_EXPIRATION_DATE:
      return {
        ...state,
        sortBy: "Expiration Date"
      };
    case SORT_BY_SHORTEST_FLIGHT:
      return {
        ...state,
        sortBy: "Shortest Flight"
      };
    default:
      return state;
  }
};

export default sortingReducer;
