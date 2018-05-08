import React from "react";
import SingleDropdownFilter from "./SingleDropdownFilter";

const FilterMenu = () => (
  <div className="filter-menu">
    <div className="filter-menu__criteria">
      <div>
        <span>Find</span>
        <SingleDropdownFilter
          placeholderTextColor={"placeholder-text"}
          values={["All", "Economy", "Business", "First Class"]}
          placeholder={"Fare Class"}
        />
      </div>
      <div>
        <span>Sort by</span>
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
  </div>
);

export default FilterMenu;
