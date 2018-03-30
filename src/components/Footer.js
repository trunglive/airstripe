import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      <img className="logo" src="icons/logo.svg" />
      <span>airstripe</span>
      <span>&copy; 2017 | Legal</span>
    </NavLink>

    <span className="social-icon">
      <img src="icons/facebook.svg" />
      <img src="icons/twitter.svg" />
      <img src="icons/instagram.svg" />
      <img src="icons/medium.svg" />
    </span>
    <span className="lang">
      <span>En</span>
      <span>Es</span>
    </span>
  </footer>
);

export default Footer;
