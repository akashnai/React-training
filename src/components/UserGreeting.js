import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
   return this.state.isLoggedIn && <div>Welcome akki</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Welcome akki</div>
    // ) : (
    //   <div>Welcome guest</div>
    // );

    // let message
    // if(this.state.isLoggedIn)
    // {
    //     message = <div>Welcome Akki</div>
    // }
    // else{
    //     message = <div>Welcome guest</div>
    // }

    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome akki</div>;
    // } else {
    //   return <div>Welcome guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Guest</div>
    //     <div>Welcome Akki</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
