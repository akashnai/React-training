import React, { Component } from "react";
import Title from "../component/Title";

export class Home extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         title: 'Title of the year',
         description: 'This is a description'
      }
    }

  render() {
    return (
      <div>
        <Title title={this.state.title} description={this.state.description} />
        
      </div>
    );
  }
}

export default Home;
