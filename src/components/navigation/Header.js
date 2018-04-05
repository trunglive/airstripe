import React, { Component } from "react";
import { Link, NavLink, Router } from "react-router-dom";
import { auth, googleAuthProvider } from "../../firebase/firebase";

class Header extends Component {
  state = {
    currentUser: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({
        currentUser
      });
    });
  }

  handleSignOut = () => {
    auth.signOut();
    Router.refresh();
  };

  render() {
    const { currentUser } = this.state;
    console.log(currentUser);
    return (
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
            Flights
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
          {!currentUser ? (
            <NavLink
              className="nav-icon-group__login"
              activeStyle={{
                color: "#1A81F3"
              }}
              to="#"
              onClick={() => auth.signInWithPopup(googleAuthProvider)}
            >
              Log In
            </NavLink>
          ) : (
            <div className="nav-icon-group__logout">
              <img className="login-icon" src="/icons/login.svg" />
              <Link
                className="nav-icon-group__logout-text"
                to="/"
                onClick={this.handleSignOut}
              >
                Log Out
              </Link>
            </div>
          )}
        </div>
      </header>
    );
  }
}
export default Header;
