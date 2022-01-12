import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Navbar from './Navbar';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [state, setState] = useState({
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  });

  const handleChange = (id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed; // eslint-disable-line no-param-reassign
        }
        return todo;
      }),
    });
  };

  const deleteTodo = (id) => {
    setState({
      todos: [
        ...state.todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState({
      todos: [...state.todos, newTodo],
    });
  };

  return (
    <div className="todoContainer">
      <Navbar />
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={state.todos}
        handleChangeProps={handleChange}
        deleteTodoProp={deleteTodo}
      />
    </div>
  );
};
export default TodoContainer;
