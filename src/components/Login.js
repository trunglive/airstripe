import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { auth, googleAuthProvider } from '../firebase/firebase';

const Login = () => (
  <div>
    <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>Log in</button>
  </div>
);

// const mapDispatchToProps = (dispatch) => ({
//   startLogin: () => dispatch(startLogin())
// })

export default Login;