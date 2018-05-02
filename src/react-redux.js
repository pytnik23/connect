import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

export class ProviderComponent extends Component {
  render() {
    return (
      <Provider value={this.props.store}>
        { this.props.children }
      </Provider>
    );
  }
};

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  return class Connect extends Component {
    render() {
      return (
        <Consumer>
          {
            (store) => {
              let props = Object.assign({}, this.props);

              if (mapStateToProps) {
                props = Object.assign({}, props, mapStateToProps(store.getState(), this.props));
              }

              if (mapDispatchToProps) {
                props = Object.assign({}, props, mapDispatchToProps(store.dispatch, this.props));
              }

              return <WrappedComponent {...props} />
            }
          }
        </Consumer>
      );
    }
  }
};
