import React from "react";


const TodoItem = (props) => {
  return <li id={props.todo.id}>{props.todo.title}</li>
}

export default TodoItem;
