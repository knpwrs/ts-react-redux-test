import { connect } from 'react-redux';
import Component, { StateProps, DispatchProps } from './component';

const mapStateToProps = (state): StateProps => ({
  counter: state.counter,
});

const actions = {
  add() {
    return {
      type: 'ADD',
    };
  },
  subtract() {
    return {
      type: 'SUBTRACT',
    };
  },
};

export default connect(mapStateToProps, actions)(Component);
