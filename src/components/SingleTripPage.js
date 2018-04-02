import React, { Component } from 'react';

export default class SingleTripPage extends Component {

  state = {

  }

  render() {
    console.log(this.props.match.params.id);

    return (
      <div>
        <p>This is Singe Trip Page</p>
        <p>Have fun with it lol</p>
      </div>
    )
  }
}