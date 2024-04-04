import { FC } from 'react';
import { Menu } from '../menu/menu.component';
import { Reviews } from '../reviews/reviews.component';
import { RestaurantInterface } from '../../types/restaurant.models';
import classNames from 'classnames';
import styles from './resturant.module.scss';

interface RestaurantProps {
  restaurant: RestaurantInterface;
}

export const Restaurant: FC<RestaurantProps> = ({ restaurant }) => (
  <div className={classNames(styles.root)}>
    <h2>{restaurant.name}</h2>
    <Menu menu={restaurant.menu} />
    <Reviews reviews={restaurant.reviews} />
  </div>
);
