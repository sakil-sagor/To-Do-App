import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './Components/Lists';
import Todo from './Components/Todo/Todo';
import TodoList from './Components/TodoLIst/TodoList';

function App() {
  return (
    <div className="App">

      <TodoList></TodoList>
    </div>
  );
}

export default App;
