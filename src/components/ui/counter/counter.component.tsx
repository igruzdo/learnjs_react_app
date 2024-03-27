import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    if (count === 5) {
      return;
    }

    setCount((currentCount) => ++currentCount);
  };

  const decrease = () => {
    if (count === 0) {
      return;
    }

    setCount((currentCount) => --currentCount);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span> {count} </span>
      <button onClick={increase}>+</button>
    </div>
  );
};
