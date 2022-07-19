import React from 'react'

export default function TodoForm(props) {

  function handleInputText(e) {
    props.setInputText(e.target.value);
  }

  function hadleSubmit(e) {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      {text: props.inputText, completed:false, id: Math.random() * 1000}
    ])
    props.setInputText('')
  }

  return (
    <form>
        <label htmlFor='todo'>Todo</label>
        <input id="todo" name="todo" value={props.inputText} onChange={handleInputText} type="text" className="todo-input" />
        <button role="button" onClick={hadleSubmit} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
    </form>
  )
}
