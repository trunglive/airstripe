import { GET_ALL_FLIGHTS } from "./actionTypes";
import database from "../firebase/firebase";

export const getAllFlights = flights => ({
  type: GET_ALL_FLIGHTS,
  flights
});

export const fetchAllFlights = () => {
  return dispatch => {
    return database.ref("flightCards").on("value", snapshot => {
      const fetchedFlights = [];

      snapshot.forEach(childSnapshot => {
        fetchedFlights.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(getAllFlights(fetchedFlights));
    });
  };
};