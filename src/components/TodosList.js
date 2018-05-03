import React from 'react';

const TodosList = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={todo.isComplited ? { textDecoration: 'line-through'} : {}}
        >
          {todo.text}
        </li>
      ))
    }
  </ul>
);

export default TodosList;
