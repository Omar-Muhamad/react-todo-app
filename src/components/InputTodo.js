import React, { useState } from 'react';

const InputTodo = (props) =>{
  const [state, setState] = useState({
    title: ""
  });

  const onChange = e => {
    setState({
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(state.title);
    setState({
      title: ""
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
      <button>Submit</button>
    </form>
  )
};

export default InputTodo;