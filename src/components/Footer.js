import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
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

      <div className="copyright"> &copy; 2018 | All Rights Reserved</div>
    </NavLink>

    <div className="social-and-lang-group">
      <span className="social-icon">
        <a href="https://www.facebook.com" target="_blank">
          <img src="icons/facebook.svg" />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <img src="icons/twitter.svg" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src="icons/instagram.svg" />
        </a>
        <a href="https://www.medium.com" target="_blank">
          <img src="icons/medium.svg" />
        </a>
      </span>
      <span className="lang">
        <span>En</span>
        <span>Es</span>
      </span>
    </div>
  </footer>
);

export default Footer;
