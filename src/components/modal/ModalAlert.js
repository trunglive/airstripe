import React, { Component } from "react";
import { auth, googleAuthProvider } from "../../firebase/firebase";
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
        <div
          className="book-this-flight blue-button"
          style={{
            marginBottom: "10px"
          }}
          onClick={this.openModal}
        >
          Book Flight
        </div>
        <div className="book-this-flight blue-button" onClick={this.openModal}>
          Save to List
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
          className="modal-container"
          contentLabel="Modal for Book Flight"
        >
          <img
            className="close-modal"
            src="/icons/close.svg"
            onClick={this.closeModal}
          />
          <div className="modal-content">
            <h2 className="book-this-flight">Book this flight</h2>
          <div className="sign-in-with-google">
            <img className="sign-in-google-icon" src="/icons/google.svg" />
            <h3 onClick={() => auth.signInWithPopup(googleAuthProvider)}>
              Sign in with Google Account
            </h3>
          </div>
          <div className="modal-hr" />
          <p className="modal-question">Already have a Google account?</p>
          </div>
          
        </Modal>
      </div>
    );
  }
}

export default ModalAlert;

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(54, 54, 54, 0.8)"
  }
};
