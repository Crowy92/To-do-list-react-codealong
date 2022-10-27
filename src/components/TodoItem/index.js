import React from 'react'

export default function TodoItem({todo, todos, setTodos}) {
    function handleDelete () {
        console.log("delete");
        setTodos(todos.filter((el) => {
            return todo.id !== el.id
        }))
    }
    function handleComplete () {
        setTodos( todos.map ((el) => {
            if (todo.id === el.id){
                return {
                    ...el, completed: !todo.completed
                }
            }
            return el
        }))
    }
  return (
    <div className='todo'>
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed': ''}`}>{todo.text}</li>
        <button onClick={handleComplete} className="complete-btn">done</button>
        <button onClick={handleDelete} className="trash-btn">X</button>
    </div>
  )
}
