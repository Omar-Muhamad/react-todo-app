import React, {useState} from "react";
import TodoItem from "./TodoItem"

const TodosList = (props) => {
  
  return(
    <ul>
      {props.todos.map(todo => (
        <TodoItem 
        todo={todo} 
        key={todo.id} 
        handleChangeProps={props.handleChangeProps}
        deleteTodoProp={props.deleteTodoProp}
        />
      ))}
    </ul>
  );
};

export default TodosList;