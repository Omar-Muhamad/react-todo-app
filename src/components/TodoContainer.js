import React from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import TodosList from "./TodosList"
const TodoContainer = () => {
  return (
    <div className="todoContainer">
      <Navbar />
      <Header />
      <TodosList />
    </div>
  )
}
export default TodoContainer