import './App.css';
import TodoHeader from './components/TodoHeader.js';
import TodoContents from './components/TodoContents.js';
import TodoFooter from './components/TodoFooter.js';
import { useEffect, useState } from 'react'
import './static/fonts/fonts.css'
// import todos from './data/data.json';
import data from './data/data.js';


function App() {
  let list = data;
  if(window.localStorage.getItem('todoList') != null){
    list = JSON.parse(window.localStorage.getItem('todoList'));
  }
  let [todos, setTodos] = useState(list);
  return (
    <div className="App">
      <TodoHeader todos={todos}/>
      <TodoContents todos={todos} setTodos={setTodos}/>
      <TodoFooter />
    </div>
  );
}


export default App;
