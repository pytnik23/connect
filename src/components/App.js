import React, { Component } from 'react';

import AddTodo from '../containers/AddTodo';
import DefaultTodos from './DefaultTodos';
import Filter from '../containers/Filter';
import VisibleTodos from '../containers/VisibleTodos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <DefaultTodos />
        <Filter />
        <VisibleTodos />
      </div>
    );
  }
}

export default App;
