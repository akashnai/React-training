import React, { Component } from "react";

class Welcome extends Component {
  render() { 
    const {fname, lname} = this.props
    // const {state1, state2} = this.state 
    return (
      <h1>
        Hello {fname} {lname}
      </h1>
    );
  }
}

export default Welcome;
