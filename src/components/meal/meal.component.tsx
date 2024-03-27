import { FC } from 'react';
import { MealInterface } from '../../types/meal.models';
import { Counter } from '../ui/counter/counter.component';

interface MealProps {
  meal: MealInterface;
}

export const Meal: FC<MealProps> = ({ meal }) => {
  return (
    <li>
      <div>{meal.name}</div>
      <Counter />
    </li>
  );
};
