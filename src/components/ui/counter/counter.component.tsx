import { FC, useState } from 'react';

interface CounterProps {
  amount: number;
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
    if (amount === max) {
      return;
    }

    increment();
  };

  const decrease = () => {
    if (amount === min) {
      return;
    }

    decrement();
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span> {amount} </span>
      <button onClick={increase}>+</button>
    </div>
  );
};
