import { connect, Provider } from 'react-redux';
import React from 'react';
import { configureStore, increment } from './redux';

import { SecondaryApp } from '../SecondaryApplication';

const context = React.createContext();

const Primary = props => (
  <React.Fragment>
    <h1>Current count: {props.count}</h1>
    <button onClick={props.increment}>Increment</button>
  </React.Fragment>
);

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  increment
};

const ConnectedPrimary = connect(mapStateToProps, mapDispatchToProps, null, {
  context
})(Primary);

export const PrimaryApp = ({ ExternalApp }) => (
  <Provider store={configureStore()} context={context}>
    <ConnectedPrimary />
    <SecondaryApp />
    <ExternalApp />
  </Provider>
);
