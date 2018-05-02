import { connect } from 'react-redux';
import Component, { StateProps, DispatchProps } from './component';
import { State } from '../';

const mapStateToProps = (state: State): StateProps => ({
  counter: state.counter,
});

const actions: DispatchProps = {
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
