import { connect, Provider } from 'react-redux';
import React from 'react';
import { configureStore, increment } from './redux';

const context = React.createContext();

const External = props => (
    <React.Fragment>
        <h3>External Application count: {props.count}</h3>
        <button onClick={props.increment}>Increment</button>
    </React.Fragment>
);

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = {
    increment
};

const ConnectedExternal = connect(mapStateToProps, mapDispatchToProps, null, { context })(External);

export const ExternalApp = () => (
    <Provider store={configureStore()} context={context}>
        <ConnectedExternal />
    </Provider>
);