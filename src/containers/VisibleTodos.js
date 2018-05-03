import { connect } from '../react-redux';

import TodosList from '../components/TodosList';

import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.isComplited);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.isComplited);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

export default connect(mapStateToProps, { toggleTodo })(TodosList);
