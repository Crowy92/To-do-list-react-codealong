import React, {useState} from 'react';
import './App.css';
import { TodoForm, TodoList } from './components';

function App() {
  const [inputText, setInputText] = useState('');
  const [submitValue, setSubmitValue] = useState('');
  const [todos, setTodos] = useState([]);

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
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
