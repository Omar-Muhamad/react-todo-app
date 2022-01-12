import React from "react";


const TodoItem = (props) => {
  return <li className="todoItem" data-id={props.todo.id}>
    <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps(props.todo.id)} />
    <p type="text" contentEditable suppressContentEditableWarning>{props.todo.title}</p>
    <button type="button" onClick={() => props.deleteTodoProp(props.todo.id)}>Delete</button>
  </li>
}

export default TodoItem;
