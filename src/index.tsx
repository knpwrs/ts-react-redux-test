import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import Counter from './counter';

export interface State {
  counter: number;
}

const defaultState: State = {
  counter: 0,
};

const store = createStore((state: State = defaultState, { type }) => ({
  counter: state.counter + (type === 'ADD' ? 1 : -1),
}));

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));
