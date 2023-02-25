import React from "react";
import Title from "./Title";

function List() {
  const listItem = [
    {
      id: 1,
      title: "Title 1",
      description: "This is description 1",
    },
    {
      id: 2,
      title: "Title 2",
      description: "This is description 2",
    },
    {
      id: 3,
      title: "Title 3",
      description: "This is description 3",
    },
  ];
  return (
    <div>
      {listItem.map((list) => {
        return (
          <Title
            key={list.title}
            title={list.title}
            description={list.description}
          />
        );
      })}
    </div>
  );
}

export default List;
