import React, { Component } from 'react';

import FilterItem from './FilterItem';

class Filter extends Component {

  render() {
    return (
      <ul>
        <FilterItem filter="SHOW_ALL">All</FilterItem>
        <FilterItem filter="SHOW_ACTIVE">Active</FilterItem>
        <FilterItem filter="SHOW_COMPLETED">Completed</FilterItem>
      </ul>
    );
  }

}

export default Filter;
