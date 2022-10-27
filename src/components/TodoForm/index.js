import React from 'react'

export default function TodoForm(props) {
  function handleInputText(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitValue(inputText);
    setInputText('');
  }
  return (
    <form>
        <label htmlFor='todo'>Todo</label>
        <input id="todo" name="todo" value={props.inputText} onChange={handleInputText} type="text" className="todo-input" />
        <button role="button" onClick={handleSubmit} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
    </form>
  )
}
