import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    { id: 1, name: "akki", age: 20, skill: "react" },
    { id: 1, name: "keval", age: 21, skill: "Data science" },
    { id: 1, name: "nilay", age: 24, skill: "Java" },
  ];
  const personList = persons.map((person) => <Person person={person} />);
  return (
    <div>
      {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}

      <h2>{personList}</h2>
    </div>
  );
}

export default NameList;
