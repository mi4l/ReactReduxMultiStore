import { connect } from 'react-redux';

export const connectWithContext = context => {
  return (mapStateToProps, mapDispatchToProps, mergeProps, options = {}) => {
    return connect(
      mapStateToProps,
      mapDispatchToProps,
      mergeProps,
      Object.assign({ context }, options)
    );
  };
};
