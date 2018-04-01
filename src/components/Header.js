import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <NavLink
      className="logo-link"
      to="/"
      activeClassName="is-active"
      exact={true}
    >
      <div className="logo-group">
        <img className="logo-icon" src="icons/logo.svg" />
        <span className="brand-name">airstripe</span>
      </div>
    </NavLink>
    <div className="nav-icon-group">
      <NavLink
        className="nav-icon-group__flights"
        to="#"
        activeClassName="is-active"
        exact={true}
      >
        Flight
      </NavLink>
      <NavLink
        className="nav-icon-group__how-it-works"
        to="/how-it-works"
        activeClassName="is-active"
        exact={true}
      >
        How It Works
      </NavLink>
      <NavLink
        className="nav-icon-group__signup"
        to="#"
        activeClassName="is-active"
      >
        Sign Up
      </NavLink>
      <NavLink
        className="nav-icon-group__login"
        to="/login"
        activeClassName="is-active"
      >
        Log In
      </NavLink>
    </div>
  </header>
);

export default Header;
