import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  incrementHandler = () => {
    // this.setState((state) => {
    //     number: state.number + 1
    // })
    this.setState({
      number: this.state.number+1,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.incrementHandler}>Increment</button>
      </div>
    );
  }
}

export default Counter;
