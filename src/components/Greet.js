import React from "react";

const Greet = (props) => {
  const { fname, lname } = props;
  return (
    <div>
      <h1>
        Hello {fname} {lname}
      </h1>
    </div>
  );
};

export default Greet;
