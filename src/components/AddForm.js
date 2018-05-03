import React, { Component } from 'react';

class AddForm extends Component {

  state = {
    value: '',
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const value = this.state.value;

    if (value) {
      this.props.onSubmit(this.state.value);

      this.resetForm();
    }
  }

  resetForm = () => this.setState({ value: '' });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default AddForm;
