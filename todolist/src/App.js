import React, { useState} from 'react';
import './App.css';
import Todolist from './components/Todolist';
import TodoForm from './components/TodoForm';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

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

  const doDelete = (event) => {
    event.preventDefault();
    setTodos(todos.filter((todo, index) => index !== parseInt(event.target.id)));
  }

  const columns = [
    {
      Header: 'Description',
      accessor: 'desc'
    },
    {
      Header: 'Date',
      accessor: 'date',
      filterable: false
    },
    {
      Cell: ({index}) => <button id={index} onClick={doDelete} >Delete</button>,
      filterable: false,
      sortable: false,
      width: 120
    },
  ]

  return (
    <div className="App">
      <header className="App-header">Simple Todolist</header>
      <TodoForm inputChanged={inputChanged}
                addToDo={addToDo}
                todo={todo} />
      <ReactTable filterable={true} data={todos} columns={columns} />
    </div>
  );
}

export default App;
