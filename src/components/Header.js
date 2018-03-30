import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      <img className="logo" src="icons/logo.svg" />
      <span>airstripe</span>
    </NavLink>

    <NavLink to="#" activeClassName="is-active" exact={true}>
      Flight
    </NavLink>
    <NavLink to="/how-it-works" activeClassName="is-active" exact={true}>
      How It Works
    </NavLink>
    <NavLink to="#" activeClassName="is-active">
      Sign Up
    </NavLink>
    <NavLink to="/login" activeClassName="is-active">
      Log In
    </NavLink>
  </header>
);

export default Header;
