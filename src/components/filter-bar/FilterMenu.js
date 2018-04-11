import React, { Component } from "react";
import SingleDropdownFilter from "./SingleDropdownFilter";

export default class FilterMenu extends Component {
  render() {
    return (
      <div className="filter-menu">
        <div className="filter-menu__criteria">
          <span>Find</span>
          <SingleDropdownFilter
            placeholderTextColor={"placeholder-text"}
            values={["All", "Economy", "Business", "First Class"]}
            placeholder={"Fare Class"}
          />
          <span>sort by</span>
          <SingleDropdownFilter
            values={[
              "Popularity",
              "Cheapest",
              "Expiration Date",
              "Shortest Flight"
            ]}
            placeholder={"Popularity"}
          />
        </div>
      </div>
    );
  }
}
