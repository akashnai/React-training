import React from "react";

// function Greet() {
//   return <h1>Hello Akki</h1>;
// }

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.fname} {props.lname}</h1>
      <p>{props.children}</p>
    </div>
  );
};
// export const Greet = () => <h1>Hello Akki</h1>

export default Greet;
