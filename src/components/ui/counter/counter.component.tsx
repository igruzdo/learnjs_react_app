import { FC, useState } from 'react';

interface CounterProps {
  amount: {
    value: number;
  };
  increment: () => void;
  decrement: () => void;
  min: number;
  max: number;
}

export const Counter: FC<CounterProps> = ({
  amount,
  increment,
  decrement,
  min,
  max,
}) => {
  const increase = () => {
    if (amount.value === max) {
      return;
    }

    increment();
  };

  const decrease = () => {
    if (amount.value === min) {
      return;
    }

    decrement();
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span> {amount.value} </span>
      <button onClick={increase}>+</button>
    </div>
  );
};
