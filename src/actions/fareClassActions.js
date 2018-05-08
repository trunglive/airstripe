import {
  DISPLAY_ALL_CLASSES,
  FIND_ECONOMY_CLASS,
  FIND_BUSINESS_CLASS,
  FIND_FIRST_CLASS
} from "../actions/actionTypes";

export const displayAllClasses = () => ({
  type: DISPLAY_ALL_CLASSES
});

export const findEconomyClass = () => ({
  type: FIND_ECONOMY_CLASS
});

export const findBusinessClass = () => ({
  type: FIND_BUSINESS_CLASS
});

export const findFirstClass = () => ({
  type: FIND_FIRST_CLASS
});
