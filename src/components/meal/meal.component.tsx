import { FC, useContext } from 'react';
import { MealInterface } from '../../types/meal.models';
import { Counter } from '../ui/counter/counter.component';
import { useCount } from '../../hooks/counter-hook/counter.hook';
import { useUserLoginLogout } from '../../hooks/user-hook/user-hook';
import { UserContext } from '../../context/user.context';
import { MealMap, StoreSlices } from '../../types/store';
import { useSelector } from 'react-redux';

interface MealProps {
  mealId: string;
}

export const Meal: FC<MealProps> = ({ mealId }) => {
  const meal = useSelector<StoreSlices, MealMap[string]>(
    (state) => state.meal.entities[mealId],
  );

  const { user } = useContext(UserContext);
  return (
    <li>
      <div>{meal.name}</div>
      {user && <Counter {...useCount()} min={0} max={5} />}
    </li>
  );
};
