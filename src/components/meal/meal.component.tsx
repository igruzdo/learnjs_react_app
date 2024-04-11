import { FC, useContext } from 'react';
import { Counter } from '../ui/counter/counter.component';
import { UserContext } from '../../context/user.context';
import { MealMap, AppStore } from '../../types/store';
import { useSelector } from 'react-redux';
import { selectProductAmountById } from '../../redux/ui/cart/selector';
import { useDispatch } from 'react-redux';
import { addProduct, deleteProduct } from '../../redux/ui/cart';
import { Dispatch } from 'redux';

interface MealProps {
  mealId: string;
}

export const Meal: FC<MealProps> = ({ mealId }) => {
  const meal = useSelector<AppStore, MealMap[string]>(
    (state) => state.meal.entities[mealId],
  );

  const amount = useSelector((state: AppStore) =>
    selectProductAmountById(state, mealId),
  );
  const dispatch = useDispatch<Dispatch<any>>();
  const increment = () => dispatch(addProduct(mealId));
  const decrement = () => dispatch(deleteProduct(mealId));

  const { user } = useContext(UserContext);

  if (!meal) return;

  return (
    <li>
      <div>{meal.name}</div>
      {user && (
        <Counter
          amount={amount}
          min={0}
          max={5}
          increment={increment}
          decrement={decrement}
        />
      )}
    </li>
  );
};
