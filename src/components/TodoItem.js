import React from 'react';
import propTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo, handleChangeProps, deleteTodoProp } = props;
  return (
    <li className="todoItem" data-id={todo.id}>
      <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
      <p type="text" contentEditable suppressContentEditableWarning>{todo.title}</p>
      <button type="button" onClick={() => deleteTodoProp(todo.id)}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: propTypes.objectOf(propTypes.object).isRequired,
  handleChangeProps: propTypes.func.isRequired,
  deleteTodoProp: propTypes.func.isRequired,
};

export default TodoItem;
