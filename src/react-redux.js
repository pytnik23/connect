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
    componentWillUnmount() {
      this.unsubscribe();
    }
    render() {
      return (
        <Consumer>
          {
            (store) => {
              this.unsubscribe = store.subscribe(this.forceUpdate.bind(this));

              let props = Object.assign({}, this.props);

              if (mapStateToProps) {
                props = Object.assign(props, mapStateToProps(store.getState(), this.props));
              }

              if (mapDispatchToProps) {
                if (typeof mapDispatchToProps === 'function') {
                  props = Object.assign(props, mapDispatchToProps(store.dispatch, this.props));
                }
                
                if (typeof mapDispatchToProps === 'object') {
                  const dispatchedProps = Object.keys(mapDispatchToProps).reduce((props, key) => {
                    props[key] = (...args) => store.dispatch(mapDispatchToProps[key](...args));
                    return props;
                  }, {});
                  props = Object.assign(props, dispatchedProps);
                }
              }

              return <WrappedComponent {...props} />
            }
          }
        </Consumer>
      );
    }
  }
};
