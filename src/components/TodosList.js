import React, {useState} from "react";
import TodoItem from "./TodoItem"

const TodosList = (props) => {
  const [state, setState] = useState({
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  });

  return(
    <ul>
      {state.todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodosList;