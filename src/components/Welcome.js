import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Hello {this.props.fname} {this.props.lname}
      </h1>
    );
  }
}

export default Welcome;
