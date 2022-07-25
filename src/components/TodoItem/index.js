import React from 'react'

export default function TodoItem({todo, setTodos, todos}) {

  function handleComplete () {
    setTodos(todos.map((el) => {
      if (todo.id === el.id) {
        return { 
          ...el, completed: !todo.completed
        }
      }
      return el
    }))
  }
  function handleDelete () {
    console.log("delete");
    setTodos(todos.filter((el) => 
      todo.id !== el.id ))
  }
  console.log(todo);
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li> 
      <button onClick={handleComplete} className="complete-btn">done</button> 
      <button onClick={handleDelete} className="trash-btn">X</button> 
    </div>
  )
}
