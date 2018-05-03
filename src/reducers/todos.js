import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          isCompited: false,
        },
      ];
      case TOGGLE_TODO:
        return state.map((todo) => {
          return todo.id === action.id
          ? { ...todo, isComplited: !todo.isComplited }
          : todo;
        });
    default:
      return state;
  }
};
