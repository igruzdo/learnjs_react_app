import { useCallback, useMemo, useState } from "react";

interface UseCountResult {
  amount: number;
  increment: () => void;
  decrement: () => void;
}

export const useCount = ({ defaultAmount = 0, step = 1 } = {}): UseCountResult => {
  const [amount, setAmount] = useState(defaultAmount);
  const increment = useCallback(
    () => setAmount((currentAmount) => currentAmount + step),
    [step],
  );
  const decrement = useCallback(
    () => setAmount((currentAmount) => currentAmount - step),
    [step],
  );

  return { amount, increment, decrement };
};