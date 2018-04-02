import {
  SORT_BY_POPULARITY,
  SORT_BY_CHEAPEST_PRICE,
  SORT_BY_SHORTEST_FLIGHT
} from "../actions/actionTypes";

export const sortByPopularity = () => ({
  type: SORT_BY_POPULARITY
});

export const sortByCheapestPrice = () => ({
  type: SORT_BY_CHEAPEST_PRICE
});

export const sortByShortestFlight = () => ({
  type: SORT_BY_SHORTEST_FLIGHT
});
