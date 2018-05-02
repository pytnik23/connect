import React from 'react';

const TodosList = ({ todos }) => (
  <ul>
    {
      todos.map(todo => (
        <li>{todo.text}</li>
      ))
    }
  </ul>
);

export default TodosList;
