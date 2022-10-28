import React from 'react'

export default function TodoForm({todos, setTodos, status, setStatus, inputText, setInputText}) {

  function handleInputText(e) {
    setInputText(e.target.value);
  }

  function hadleSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {text: inputText, completed:false, id: Math.random() * 1000}
    ])
    setInputText('')
  }

  function handleChange (e) {
    setStatus(e.target.value)
  }

  return (
    <form>
        <label htmlFor='todo'>Todo</label>
        <input id="todo" name="todo" value={inputText} onChange={handleInputText} type="text" className="todo-input" />
        <button role="button" onClick={hadleSubmit} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={handleChange} className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
    </form>
  )
}
