import { connect } from '../react-redux';

import { addTodo } from '../actions';

import AddForm from '../components/AddForm';

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
  };
};

export default connect(null, mapDispatchToProps)(AddForm);
