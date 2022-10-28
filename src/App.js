import React, {useEffect, useState} from 'react';
import './App.css';
import { TodoForm, TodoList } from './components';

function App() {
  const [inputText, setInputText] = useState('');
  const [submitValue, setSubmitValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([])

  function filterHandler () {
    console.log("status", status);
    if (status === 'completed') {
      setFilteredTodos(todos.filter(todo => todo.completed))
    } else if (status === 'uncompleted') {
      setFilteredTodos(todos.filter(todo => !todo.completed))
    } else {
      setFilteredTodos(todos)
    }
  }

  useEffect(() => {
    filterHandler();
  }, [status, todos])

  return (
    <div className="App">
      <header role="header">
        <h1>Tom's To do list {submitValue}</h1>
      </header>
      <TodoForm 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList 
        todos={filteredTodos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
