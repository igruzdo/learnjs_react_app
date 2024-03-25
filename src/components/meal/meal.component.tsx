import { FC } from 'react';
import { MealInterface } from '../../types/meal.models';

export interface MealProps {
  meal: MealInterface;
}

export const Meal: FC<MealProps> = ({ meal }) => <li>{meal.name}</li>;
