import React, { useState } from 'react';
import propTypes from 'prop-types';

const InputTodo = (props) => {
  const { addTodoProps } = props;
  const [state, setState] = useState({
    title: '',
  });

  const onChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoProps(state.title);
    setState({
      title: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={state.title}
        name="title"
        onChange={onChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: propTypes.func.isRequired,
};

export default InputTodo;
