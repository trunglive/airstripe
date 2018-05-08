import React from "react";
import { Link } from "react-router-dom";

const SmallTripCard = ({ id, fareClass, title, description, imageUrl }) => (
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

export default SmallTripCard;
