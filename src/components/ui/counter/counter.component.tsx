import { FC, useState } from 'react';
import { Button } from '../button/button.component';

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
      <Button onClick={decrease}>-</Button>
      <span> {amount} </span>
      <Button onClick={increase}>+</Button>
    </div>
  );
};
