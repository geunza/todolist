import './App.css';
import TodoHeader from './components/TodoHeader.js'
import TodoContents from './components/TodoContents.js'
import TodoFooter from './components/TodoFooter.js'
import { useEffect, useState } from 'react'
import todos from './data/data.json';
function App() {
  
  return (
    <div className="App">
      <TodoHeader todos={todos.todos}/>
      {/* <TodoContents todos={todos}/> */}
      <TodoFooter />
    </div>
  );
}


export default App;
