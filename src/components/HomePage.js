import React, { Component } from "react";
import SearchBar from "./SearchBar";
import TripCard from "./TripCard";
import * as firebase from "firebase";
import { config } from "../firebase/config";

class HomePage extends Component {
  state = {
    flights: []
  };

  componentDidMount() {
    firebase.initializeApp(config);
    const database = firebase.database();

    database.ref("flightCards").on("value", snapshot => {
      const flights = [];
      snapshot.forEach(childSnapshot => {
        flights.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      this.setState({ flights });
    });
  }

  render() {
    const { flights } = this.state;
    console.log(flights);
    return (
      <div className="homepage">
        <p>Home Page</p>
        <SearchBar />
        <div className="trip-container">
          {flights.length === 0 ? (
            <img className="spinner" src="images/spinner.svg" />
          ) : (
            flights.map(flight => <TripCard key={flight.id} {...flight} />)
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;