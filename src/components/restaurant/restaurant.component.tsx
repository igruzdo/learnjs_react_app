import { FC } from 'react';
import { Menu } from '../menu/menu.component';
import { Reviews } from '../reviews/reviews.component';
import classNames from 'classnames';
import styles from './resturant.module.scss';
import { useSelector } from 'react-redux';
import { RestaurantMap, StoreSlices } from '../../types/store';

interface RestaurantProps {
  restaurantId: string;
}

export const Restaurant: FC<RestaurantProps> = ({ restaurantId }) => {
  const restaurant = useSelector<StoreSlices, RestaurantMap[string]>(
    (state) => state.restaurant.entities[restaurantId],
  );

  if (!restaurant) return;

  return (
    <div className={classNames(styles.root)}>
      <h2>{restaurant.name}</h2>
      <Menu restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} />
    </div>
  );
};
