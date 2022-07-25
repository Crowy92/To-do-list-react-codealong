import React from 'react'
import TodoItem from '../TodoItem'

export default function TodoList({todos, setTodos}) {
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
            {todos.map(todo => 
                (<TodoItem todo={todo} setTodos={setTodos} todos={todos}/>
            ))}
        </ul>
    </div>
  )
}
