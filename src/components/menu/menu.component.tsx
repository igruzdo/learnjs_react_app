import { FC } from 'react';
import { Meal } from '../meal/meal.component';
import { EmptyList } from '../empty-list/empty-list.component';
import { MealInterface } from '../../types/meal.models';
import styles from './menu.module.scss';
import classNames from 'classnames';
import { MealMap, RestaurantMap, StoreSlices } from '../../types/store';
import { useSelector } from 'react-redux';

interface MenuProps {
  restaurantId: string;
}

export const Menu: FC<MenuProps> = ({ restaurantId }) => {
  const restaurant = useSelector<StoreSlices, RestaurantMap[string]>(
    (state) => state.restaurant.entities[restaurantId],
  );
  const reviewsIds = restaurant.menu;

  return (
    <div className={classNames(styles.root)}>
      <h3>Меню</h3>
      {reviewsIds?.length ? (
        <ul className={classNames(styles.menuList)}>
          {reviewsIds.map((id) => (
            <Meal key={id} mealId={id} />
          ))}
        </ul>
      ) : (
        <EmptyList entity="меню" />
      )}
    </div>
  );
};
