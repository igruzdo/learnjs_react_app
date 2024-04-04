import { FC, useContext } from 'react';
import { MealInterface } from '../../types/meal.models';
import { Counter } from '../ui/counter/counter.component';
import { useCount } from '../../hooks/counter-hook/counter.hook';
import { useUserLoginLogout } from '../../hooks/user-hook/user-hook';
import { UserContext } from '../../context/user.context';

interface MealProps {
  meal: MealInterface;
}

export const Meal: FC<MealProps> = ({ meal }) => {
  const { user } = useContext(UserContext);
  return (
    <li>
      <div>{meal.name}</div>
      {user && <Counter {...useCount()} min={0} max={5} />}
    </li>
  );
};
