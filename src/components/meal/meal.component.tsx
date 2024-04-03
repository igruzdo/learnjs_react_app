import { FC } from 'react';
import { MealInterface } from '../../types/meal.models';
import { Counter } from '../ui/counter/counter.component';
import { useCount } from '../../hooks/counter-hook/counter.hook';

interface MealProps {
  meal: MealInterface;
}

export const Meal: FC<MealProps> = ({ meal }) => {
  return (
    <li>
      <div>{meal.name}</div>
      <Counter {...useCount()} min={0} max={5} />
    </li>
  );
};
