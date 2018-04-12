import React, { Component } from "react";
import { auth, googleAuthProvider } from "../firebase/firebase";
import Modal from "react-modal";

class ModalAlert extends Component {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="modal book-this-flight-unauth">
        <a className="book-this-flight blue-button" onClick={this.openModal}>
          Book
        </a>
        <Modal

          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
          contentLabel="Modal for Book Flight"
        >
          <img
            className="close-modal"
            style={{ width: "20px", height: "20px" }}
            src="/icons/close.svg"
            onClick={this.closeModal}
          />
          <h2 style={{ marginTop: "20px", marginBottom: "30px" }}>
            Book this flight
          </h2>
          <div style={signInWithGoogle}>
            <img
              style={{
                width: "20px",
                height: "20px",
                marginRight: "10px"
              }}
              src="/icons/google.svg"
            />
            <h3
              className="sign-in-with-google"
              onClick={() => auth.signInWithPopup(googleAuthProvider)}
            >
              Sign in with Google Account
            </h3>
          </div>
          <div style={modalHr} />
          <p
            style={{
              marginTop: "20px",
              fontWeight: "300",
              textAlign: "center"
            }}
          >
            Already have a Google account?
          </p>
        </Modal>
      </div>
    );
  }
}

export default ModalAlert;

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "30px",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "300px",
    letterSpacing: "0.5px",
    border: "none",
    borderRadius: "0"
  },
  overlay: {
    backgroundColor: "rgba(54, 54, 54, 0.8)"
  }
};

const signInWithGoogle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px",
  textAlign: "center",
  border: "2px solid rgba(54, 54, 54, 0.7)",
  borderRadius: "4px"
};

const modalHr = {
  display: "block",
  marginTop: "40px",
  border: "0",
  borderTop: "1px solid rgba(175, 188, 204, 0.5)"
};
