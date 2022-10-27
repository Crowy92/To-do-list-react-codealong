import React from 'react'

export default function TodoItem({todo, todos, setTodos}) {
    function handleDelete () {
        console.log("delete");
        setTodos(todos.filter((el) => {
            return todo.id !== el.id
        }))
    }
  return (
    <div className='todo'>
        <li key={todo.id} className="todo-item">{todo.text}</li>
        <button className="complete-btn">done</button>
        <button click={handleDelete} className="trash-btn">X</button>
    </div>
  )
}
