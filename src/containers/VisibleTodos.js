import { connect } from '../react-redux';

import TodosList from '../components/TodosList';

const mapStateToProps = (store) => ({
  todos: store.getState().todos,
});

export default connect(mapStateToProps)(TodosList);
