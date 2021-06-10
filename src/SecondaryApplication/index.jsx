import { connect, Provider } from 'react-redux';
import React from 'react';
import { configureStore, increment } from './redux';

const context = React.createContext();

const Secondary = props => (
    <React.Fragment>
        <h2>Secondary Application count: {props.count}</h2>
        <button onClick={props.increment}>Increment</button>
    </React.Fragment>
);

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = {
    increment
};

const ConnectedSecondary = connect(mapStateToProps, mapDispatchToProps, null, { context })(Secondary);

export const SecondaryApp = () => (
    <Provider store={configureStore()} context={context}>
        <ConnectedSecondary />
    </Provider>
);