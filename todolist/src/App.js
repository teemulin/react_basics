import React, { useState} from 'react';
import './App.css';
import Todolist from './components/Todolist';
import TodoForm from './components/TodoForm';

function App() {
  const [todo, setTodo] = useState({desc:'', date:''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addToDo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const doDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div className="App">
      <TodoForm inputChanged={inputChanged}
                addToDo={addToDo}
                todo={todo} />
      <Todolist todos={todos}
                doDelete={doDelete} />
    </div>
  );
}

export default App;
