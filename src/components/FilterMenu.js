import React, { Component } from "react";
import DropdownFilter from "./DropdownFilter";

export default class FilterMenu extends Component {
  render() {
    return (
      <div className="filter-menu">
        <div className="filter-menu__criteria">
          <span>Find</span>
          <DropdownFilter
            placeholderTextColor={"placeholder-text"}
            values={["All", "Economy", "Business", "First Class"]}
            placeholder={"Fare Class"}
          />
          <span>flights from</span>
          <DropdownFilter
            values={[
              "Amsterdam",
              "Manchester",
              "Santorini",
              "Florence",
              "London",
              "Barcelona",
              "Paris",
              "Milan",
              "Rome",
              "Seville"
            ]}
            placeholder={"Anywhere"}
          />
          <span>to</span>
          <DropdownFilter
            values={[
              "Amsterdam",
              "Manchester",
              "Santorini",
              "Florence",
              "London",
              "Barcelona",
              "Paris",
              "Milan",
              "Rome",
              "Seville"
            ]}
            placeholder={"Anywhere"}
          />
          <span>sort by</span>
          <DropdownFilter
            values={[
              "Popularity",
              "Cheapest",
              "Expiration Date",
              "Shortest Flight"
            ]}
            placeholder={"Popularity"}
          />
        </div>
        <a className="search-button blue-button">Search Flights</a>
      </div>
    );
  }
}
