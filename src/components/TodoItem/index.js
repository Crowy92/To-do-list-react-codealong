import React from 'react'

export default function TodoItem({todo}) {
  console.log(todo);
  return (
    <div className="todo">
      <li key={todo.id} className="todo-item">{todo.text}</li>  
    </div>
  )
}
