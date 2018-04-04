import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <Link className="logo-link" to="/">
      <div className="logo-group">
        <img className="logo-icon" src="/icons/logo.svg" />
        <span className="brand-name">airstripe</span>
      </div>
    </Link>
    <div className="nav-icon-group">
      <NavLink
        className="nav-icon-group__flights"
        activeStyle={{
          color: "#1A81F3"
        }}
        to="/"
        exact={true}
      >
        Flight
      </NavLink>
      <NavLink
        className="nav-icon-group__how-it-works"
        activeStyle={{
          color: "#1A81F3"
        }}
        to="/how-it-works"
      >
        How It Works
      </NavLink>
      <NavLink
        className="nav-icon-group__signup"
        activeStyle={{
          color: "#1A81F3"
        }}
        to="#"
      >
        Sign Up
      </NavLink>
      <NavLink
        className="nav-icon-group__login"
        activeStyle={{
          color: "#1A81F3"
        }}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  </header>
);

export default Header;
