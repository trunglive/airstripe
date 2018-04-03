import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllFlights } from "../actions/flightsActions";
import Select from "react-select";
import "react-select/dist/react-select.css";
import {
  sortByPopularity,
  sortByCheapestPrice,
  sortByExpirationDate,
  sortByShortestFlight
} from "../actions/sortingActions";
import {
  displayAllClasses,
  findEconomyClass,
  findBusinessClass,
  findFirstClass
} from "../actions/fareClassActions";

class DropdownFilter extends Component {
  state = {
    selectedOption: ""
  };

  handleChange = selectedOption => {
    if (selectedOption === null) return;

    switch (selectedOption.value) {
      case "Popularity":
        this.props.sortByPopularity();
        break;
      case "Cheapest":
        this.props.sortByCheapestPrice();
        break;
      case "Expiration Date":
        this.props.sortByExpirationDate();
        break;
      case "Shortest Flight":
        this.props.sortByShortestFlight();
        break;
    }

    switch (selectedOption.value) {
      case "All":
        this.props.displayAllClasses();
        break;
      case "Economy":
        this.props.findEconomyClass();
        break;
      case "Business":
        this.props.findBusinessClass();
        break;
      case "First Class":
        this.props.findFirstClass();
        break;
    }

    this.props.fetchAllFlights();
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    const { placeholderTextColor, placeholder } = this.props;
    const value = selectedOption && selectedOption.value;

    return (
      <div>
        <Select
          className={`${placeholderTextColor} dropdown-filter`}
          name="form-field-name"
          value={value}
          onChange={this.handleChange}
          options={selectedValues(this.props.values)}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default connect(null, {
  fetchAllFlights,
  displayAllClasses,
  findEconomyClass,
  findBusinessClass,
  findFirstClass,
  sortByPopularity,
  sortByCheapestPrice,
  sortByExpirationDate,
  sortByShortestFlight
})(DropdownFilter);

const selectedValues = arr => {
  const result = [];
  arr.map(item => {
    result.push({ value: item, label: item });
  });
  return result;
};
