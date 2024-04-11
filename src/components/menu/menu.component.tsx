import { FC, useEffect } from 'react';
import { Meal } from '../meal/meal.component';
import { EmptyList } from '../empty-list/empty-list.component';
import styles from './menu.module.scss';
import classNames from 'classnames';
import { AppStore } from '../../types/store';
import { useDispatch, useSelector } from 'react-redux';
import { selectMealIdsByRestaurantId } from '../../redux/enities/restaurant/selector';
import { Dispatch } from '@reduxjs/toolkit';
import { getMealsByRestaurantId } from '../../redux/enities/meal/thunks/get-meal-by-id.thunk';

interface MenuProps {
  restaurantId: string;
}

export const Menu: FC<MenuProps> = ({ restaurantId }) => {
  const mealsIds = useSelector<AppStore, string[]>((state) =>
    selectMealIdsByRestaurantId(state, restaurantId),
  );

  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(getMealsByRestaurantId(restaurantId));
  }, [restaurantId]);

  return (
    <div className={classNames(styles.root)}>
      <h3>Меню</h3>
      {mealsIds?.length ? (
        <ul className={classNames(styles.menuList)}>
          {mealsIds.map((id) => (
            <Meal key={id} mealId={id} />
          ))}
        </ul>
      ) : (
        <EmptyList entity="меню" />
      )}
    </div>
  );
};
