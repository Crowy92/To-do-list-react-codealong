import React from 'react'
import TodoItem from '../TodoItem'

export default function TodoList({todos}) {
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
            {todos.map(todo => 
                (<TodoItem todo={todo}/>
            ))}
        </ul>
    </div>
  )
}
