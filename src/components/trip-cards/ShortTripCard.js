import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SmallTripCard extends Component {
  render() {
    const { id, fareClass, title, description, imageUrl } = this.props;

    return (
      <div className="small-trip-card">
        <Link
          to={`/flight/${fareClass}/${id}`}
          style={{ textDecoration: "none", color: "#363636" }}
        >
          <img className="small-trip-card__image" src={imageUrl} />
        </Link>
        <Link
          to={`/flight/${fareClass}/${id}`}
          style={{ textDecoration: "none", color: "#363636" }}
        >
          <p className="small-trip-card__title">{title}</p>
        </Link>
        <p className="small-trip-card__description">{description}</p>
      </div>
    );
  }
}
