import { FC } from 'react';
import { MealProps } from '../../types/meal.models';

export const Meal: FC<MealProps> = ({ meal }) => <li>{meal.name}</li>;
