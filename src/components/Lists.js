import React from "react";
import ListItem from "./ListItem";

const Lists = ({ delHandler, doneHandler, todos }) => {
  if (todos.length <= 0) {
    return (
      <div className="bg-danger p-3">
        <h3 className="text-white">کاری برای انجام نیست</h3>
      </div>
    );
  }
  return (
    <div className="listWrap ">
      <ul className="list-group ">
        {todos &&
          todos.map((todo) => (
            <ListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              delHandler={delHandler}
              doneHandler={doneHandler}
              done={todo.done}
            />
          ))}
      </ul>
    </div>
  );
};

export default Lists;
