import React, {useState} from 'react';
import './App.css';
import {TodoForm} from './components';

function App() {
  const [inputText, setInputText] = useState('');
  const [submitValue, setSubmitValue] = useState('');

  return (
    <div className="App">
      <header role="header">
        <h1>Tom's To do list {submitValue}</h1>
      </header>
      <TodoForm 
      inputText={inputText}/>
    </div>
  );
}

export default App;
