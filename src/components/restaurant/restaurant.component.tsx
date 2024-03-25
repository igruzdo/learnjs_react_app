import { FC } from 'react';
import { Menu } from '../menu/menu.component';
import { Reviews } from '../reviews/reviews.component';
import { RestaurantInterface } from '../../types/restaurant.models';

export interface RestaurantProps {
  restaurant: RestaurantInterface;
}

export const Restaurant: FC<RestaurantProps> = ({ restaurant }) => (
  <div>
    <h2>{restaurant.name}</h2>
    <Menu menu={restaurant.menu} />
    <Reviews reviews={restaurant.reviews} />
  </div>
);
