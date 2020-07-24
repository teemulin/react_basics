import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Todolist from './components/Todolist';
import '@testing-library/jest-dom/extend-expect';

test ('renders todolist', () => {
  const row = [
    {desc: 'Go to coffee', date: '24.11.2020'}
  ]

  const todolist = render(<Todolist todos={row} />);
  expect(todolist.container).toHaveTextContent('Go to coffee');
})

test('add todo', () => {
  const { container, getByText, getByPlaceholderText } = render(<App />);

  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee' } })

  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.11.2019' } } )

  const button = getByText('Add');
  fireEvent.click(button);

  expect(container).toHaveTextContent('Go to coffee');
})