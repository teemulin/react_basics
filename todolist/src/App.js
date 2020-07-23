import React, { useState} from 'react';
import './App.css';
import Todolist from './components/Todolist';

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
      <form onSubmit={addToDo}>
        Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        Date: <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        <input type="submit" id="add" value="Add" />
      </form>
      <Todolist todos={todos}
                doDelete={doDelete} />
    </div>
  );
}

export default App;
