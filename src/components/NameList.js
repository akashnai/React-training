import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Akki", "Keval", "Shruti"];
  const persons = [
    { id: 1, name: "akki", age: 20, skill: "react" },
    { id: 2, name: "keval", age: 21, skill: "Data science" },
    { id: 3, name: "nilay", age: 24, skill: "Java" },
  ];
  const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>);
  return (
    <div>
      {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}

      {nameList}
    </div>
  );
}

export default NameList;
