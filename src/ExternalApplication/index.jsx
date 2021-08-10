import { Provider } from 'react-redux';
import React from 'react';
import { configureStore, increment } from './redux';
import { connectWithContext } from '../utils';

const context = React.createContext();
const connect = connectWithContext(context);

const Button = ({ increment }) => (
  <button onClick={increment}>Increment</button>
);

const mapDispatchToProps = {
  increment
};

const ConnectedButton = connect(null, mapDispatchToProps)(Button);

const External = props => (
  <React.Fragment>
    <h3>External Application count: {props.count}</h3>
    <ConnectedButton />
  </React.Fragment>
);

const mapStateToProps = state => ({
  count: state.count
});

const ConnectedExternal = connect(mapStateToProps, null)(External);

export const ExternalApp = () => (
  <Provider store={configureStore()} context={context}>
    <ConnectedExternal />
  </Provider>
);
