import { connect } from '../react-redux';

import { addTodo } from '../actions';

import AddForm from '../components/AddForm';

export default connect(null, { onSubmit: addTodo })(AddForm);
