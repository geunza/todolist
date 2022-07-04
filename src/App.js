import './App.css';
import TodoHeader from './components/TodoHeader.js';
import TodoContents from './components/TodoContents.js';
import TodoFooter from './components/TodoFooter.js';
import { Reset } from 'styled-reset';
import { useEffect, useState } from 'react'
// import todos from './data/data.json';
import todos from './data/data.js';
function App() {
  
  return (
    <div className="App">
      <Reset></Reset>
      <TodoHeader todos={todos}/>
      <TodoContents todos={todos}/>
      <TodoFooter />
    </div>
  );
}


export default App;
