import React, { useState} from 'react';
import './App.css';
import Todotable from './components/Todolist';

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
        <input type="submit" value="Add" />
      </form>
      <table>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>

          {todos.map((todo, index) =>
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td><input type="button" name="Delete" value="Delete" onClick={() => {doDelete(index);}} /> </td>
            </tr>
          )}
        </tbody>
        </table>
    </div>
  );
}

export default App;
