import * as React from 'react';

export interface StateProps {
  counter: number;
}

export interface DispatchProps {
  add(): void;
  subtract(): void;
}

export default ({ counter, add, subtract }: StateProps & DispatchProps) => (
  <div>
    <button onClick={add}>+</button>
    <div>{counter}</div>
    <button onClick={subtract}>-</button>
  </div>
);
