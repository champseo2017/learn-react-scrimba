import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props && props.item.completed} />
      <p>{props && props.item.text}</p>
    </div>
  );
}

export default TodoItem;
