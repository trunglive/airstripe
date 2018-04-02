import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

export default class DropdownFilter extends Component {
  state = {
    selectedOption: ""
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    const { placeholderTextColor, placeholder} = this.props;
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

const selectedValues = arr => {
  const result = [];
  arr.map(item => {
    result.push({ value: item, label: item });
  });
  return result;
};
