import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, NavLink, Router } from "react-router-dom";
import { auth, googleAuthProvider } from "../../firebase/firebase";
import { addUserInfo } from "../../actions/userInfoActions";

class Header extends Component {
  state = {
    currentUser: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({
        currentUser
      });

      currentUser && this.props.addUserInfo({id: currentUser.uid, name: currentUser.displayName});
    });
  }

  handleSignOut = () => {
    auth.signOut();
    Router.refresh();
  };

  render() {
    const { currentUser } = this.state;

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
            to="#"
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

const mapStateToProps = ({ userInfo }) => ({
  userInfo
})

export default connect(mapStateToProps, { addUserInfo })(Header);
