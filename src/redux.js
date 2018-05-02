export const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(l => l());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => listeners = listeners.filter(l => l !== listener);
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    Object.keys(reducers).forEach((key) => {
      state[key] = reducers[key](state[key], action);
    });
    return state;
  };
};
