import React from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos, handleChangeProps, deleteTodoProp } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProp={deleteTodoProp}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: propTypes.arrayOf(propTypes.array).isRequired,
  handleChangeProps: propTypes.func.isRequired,
  deleteTodoProp: propTypes.func.isRequired,
};

export default TodosList;
