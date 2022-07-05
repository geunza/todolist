import './App.css';
import TodoHeader from './components/TodoHeader.js';
import TodoContents from './components/TodoContents.js';
import TodoFooter from './components/TodoFooter.js';
import { useEffect, useState } from 'react'
import './static/fonts/fonts.css'
// import todos from './data/data.json';
import data from './data/data.js';


function App() {
  let [todos, setTodos] = useState(data);
  return (
    <div className="App">
      <TodoHeader todos={todos}/>
      <TodoContents todos={todos} setTodos={setTodos}/>
      <TodoFooter />
    </div>
  );
}


export default App;
