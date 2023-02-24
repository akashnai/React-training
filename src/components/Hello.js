import React from "react";

const Hello = () => {
  //   return <h1>Hello Akki</h1>;

  return React.createElement(
    "div",
    {className: 'test', id: 'test'},
    React.createElement("h1", null, "Hello Akki")
  );
};

export default Hello;
