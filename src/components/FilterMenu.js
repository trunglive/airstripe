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
            values={["Economy", "Business", "First Class"]}
            placeholder={"Fare Class"}
          />
          <span>flights from</span>
          <DropdownFilter
            values={[
              "Amsterdam",
              "London",
              "Milan",
              "Paris",
              "Seville",
              "Rome"
            ]}
            placeholder={"Anywhere"}
          />
          <span>to</span>
          <DropdownFilter
            values={[
              "Amsterdam",
              "London",
              "Milan",
              "Paris",
              "Seville",
              "Rome"
            ]}
            placeholder={"Anywhere"}
          />
          <span>sort by</span>
          <DropdownFilter
            values={["Popularity", "Cheapest", "Shortest Flight"]}
            placeholder={"Popularity"}
          />
        </div>

        <a className="search-button blue-button">Search Flights</a>
      </div>
    );
  }
}
